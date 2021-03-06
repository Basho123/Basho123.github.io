const Collision = {
    isOccuring(item1, item2) {
        if (item1.collisionIsSet && item2.collisionIsSet) {
            return !(
                item1.pos.x + (item1.collisionSize / 2) < item2.pos.x - (item2.collisionSize / 2) ||
                item1.pos.x - (item1.collisionSize / 2) > item2.pos.x + (item2.collisionSize / 2) ||
                item1.pos.y + (item1.collisionSize / 2) < item2.pos.y - (item2.collisionSize / 2) ||
                item1.pos.y - (item1.collisionSize / 2) > item2.pos.y + (item2.collisionSize / 2)
            );
        }
    },
}

export default Collision;