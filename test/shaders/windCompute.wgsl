struct Matrix {
    m : mat4x4<f32>,
};

@group(0) @binding(0)
var<storage, read_write> matrices : array<Matrix>;

@group(0) @binding(1)
var<uniform> params : vec4<f32>; 
// params.x = time
// params.y = windStrength
// params.z = windSpeed
// params.w = turbulence

fn hash(p: f32) -> f32 {
    return fract(sin(p * 123.456) * 456.789);
}

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid : vec3<u32>) {
    let index = gid.x;

    if (index >= arrayLength(&matrices)) {
        return;
    }

    let time = params.x;
    let strength = params.y;
    let speed = params.z;
    let turb = params.w;

    // Load matrix
    var M = matrices[index].m;

    // Extract world position
    let pos = M[3].xyz;

    // Height factor: bend more the higher the tree is
    let heightFactor = clamp((pos.y) * 0.2, 0.0, 1.0);

    // Wind wave
    let baseWind = sin(time * speed + pos.x * 0.1) * strength * heightFactor;

    // turbulence
    let noise = (hash(pos.x + pos.z + time * 0.3) - 0.5) * turb;

    let bend = baseWind + noise;

    // -----------------------------
    // 🌬️ WIND SKEW (shear matrix)
    // -----------------------------
    //
    // This pushes the top of the tree sideways
    // but keeps the base steady.
    //
    // bend = how much top moves horizontally
    // heightFactor controls effect via M[1].y (the vertical axis)
    //
    // Shear in X (tree bends along +X/-X):
    //
    let shear = mat4x4<f32>(
        vec4<f32>(1.0, 0.0, 0.0, 0.0),  // X stays same
        vec4<f32>(bend, 1.0, 0.0, 0.0), // Y' = Y + bend * X (skew by horizontal)
        vec4<f32>(0.0, 0.0, 1.0, 0.0),  // Z stays same
        vec4<f32>(0.0, 0.0, 0.0, 1.0)
    );

    matrices[index].m = M * shear;
}
