// culling.worker.ts
// Use "type": "module" when creating Worker in Vite.
// Stores matrices per key (SharedArrayBuffer) and culls using indices only.

type InitMsg = {
  type: "init";
  key: string;
  sab: SharedArrayBuffer;
  count: number;
};
type SetCountMsg = { type: "setCount"; key: string; count: number };

type DistanceMsg = {
  type: "distance";
  id: number;
  key: string;
  camPos: [number, number, number];
  maxDistSq: number;
  indices?: Uint32Array | null;
};

type FrustumMsg = {
  type: "frustum";
  id: number;
  key: string;
  planes: Float32Array; // 24 floats
  sphereCenterLocal: [number, number, number];
  sphereRadius: number;
  meshHideOffsetY: number;
  boundsPadding: number;
  planePadding: number;
  indices?: Uint32Array | null;
};

type Msg = InitMsg | SetCountMsg | DistanceMsg | FrustumMsg;

type StoreEntry = { matrices: Float32Array; count: number };

const store = new Map<string, StoreEntry>();

function postIndices(id: number, out: Uint32Array, write: number) {
  // Transfer the buffer to avoid copying large index arrays
  const view = out.subarray(0, write);
  // @ts-ignore
  self.postMessage({ id, indices: view }, [out.buffer]);
}

self.onmessage = (e: MessageEvent<Msg>) => {
  const data = e.data;

  // One-time init per key (or re-init after resize)
  if (data.type === "init") {
    store.set(data.key, {
      matrices: new Float32Array(data.sab),
      count: data.count,
    });
    // optional ack
    // @ts-ignore
    self.postMessage({ type: "inited", key: data.key });
    return;
  }

  if (data.type === "setCount") {
    const s = store.get(data.key);
    if (s) s.count = data.count;
    return;
  }

  if (data.type === "distance") {
    const s = store.get(data.key);
    if (!s) return postIndices(data.id, new Uint32Array(0), 0);

    // console.log(data.maxDistSq);

    const matrices = s.matrices;
    const totalCount = s.count | 0;

    const [cx, cy, cz] = data.camPos;
    const list = data.indices && data.indices.length > 0 ? data.indices : null;

    const inCount = list ? list.length : totalCount;
    const out = new Uint32Array(inCount);
    let write = 0;

    if (list) {
      for (let li = 0; li < list.length; li++) {
        const i = list[li];
        if (i >= totalCount) continue;

        const base = i * 16;
        const x = matrices[base + 12];
        const y = matrices[base + 13];
        const z = matrices[base + 14];

        const dx = x - cx,
          dy = y - cy,
          dz = z - cz;
        if (dx * dx + dy * dy + dz * dz < data.maxDistSq) out[write++] = i;
      }
    } else {
      for (let i = 0; i < totalCount; i++) {
        const base = i * 16;
        const x = matrices[base + 12];
        const y = matrices[base + 13];
        const z = matrices[base + 14];

        const dx = x - cx,
          dy = y - cy,
          dz = z - cz;
        if (dx * dx + dy * dy + dz * dz < data.maxDistSq) out[write++] = i;
      }
    }

    return postIndices(data.id, out, write);
  }

  if (data.type === "frustum") {
    const s = store.get(data.key);
    if (!s) return postIndices(data.id, new Uint32Array(0), 0);

    const matrices = s.matrices;
    const totalCount = s.count | 0;

    const list = data.indices && data.indices.length > 0 ? data.indices : null;
    const inCount = list ? list.length : totalCount;

    const out = new Uint32Array(inCount);
    let write = 0;

    const planes = data.planes;
    const cxLocal = data.sphereCenterLocal[0];
    const cyLocal = data.sphereCenterLocal[1];
    const czLocal = data.sphereCenterLocal[2];

    const sphereRadius = data.sphereRadius;
    const boundsPadding = data.boundsPadding;
    const planePadding = data.planePadding;
    const meshHideOffsetY = data.meshHideOffsetY;

    const testIndex = (i: number) => {
      const base = i * 16;

      // extract scale from matrix column lengths
      const sx = Math.hypot(
        matrices[base + 0],
        matrices[base + 1],
        matrices[base + 2],
      );
      const sy = Math.hypot(
        matrices[base + 4],
        matrices[base + 5],
        matrices[base + 6],
      );
      const sz = Math.hypot(
        matrices[base + 8],
        matrices[base + 9],
        matrices[base + 10],
      );

      // world-space sphere center
      const px = matrices[base + 12] + cxLocal * sx;
      const py = matrices[base + 13] + cyLocal * sy - meshHideOffsetY;
      const pz = matrices[base + 14] + czLocal * sz;

      const maxScale = Math.max(sx, sy, sz);
      const radius = sphereRadius * maxScale + boundsPadding;

      for (let p = 0; p < 6; p++) {
        const pi = p * 4;
        const nx = planes[pi + 0];
        const ny = planes[pi + 1];
        const nz = planes[pi + 2];
        const d = planes[pi + 3];

        const dist = nx * px + ny * py + nz * pz + d;
        if (dist < -radius - planePadding) return false;
      }
      return true;
    };

    if (list) {
      for (let li = 0; li < list.length; li++) {
        const i = list[li];
        if (i >= totalCount) continue;
        if (testIndex(i)) out[write++] = i;
      }
    } else {
      for (let i = 0; i < totalCount; i++) {
        if (testIndex(i)) out[write++] = i;
      }
    }

    return postIndices(data.id, out, write);
  }
};
