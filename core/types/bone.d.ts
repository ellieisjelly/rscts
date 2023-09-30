/**
 * Represents a bone in a human.
 */
declare interface Bone {
    readonly class: "Bone";
    /**
     * Position.
     */
    pos: Vector;

    /**
     * Second position.
     */
    pos2: Vector;

    /**
     * Velocity.
     */
    vel: Vector;

    /**
     * Rotation.
     */
    rot: RotMatrix;
}

declare var Bone: Bone;