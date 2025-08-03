// import { Quaternion, Vector3 } from "three";
import {
	EmitterMode,
	type EmitterShape,
	type FunctionValueGenerator,
	type Particle,
	type ParticleSystem,
	Quaternion,
	type ShapeJSON,
	type ValueGenerator,
	Vector3,
} from "three.quarks";
import type { TrailTarget } from "./TrailTarget";

export class TrailEmitter implements EmitterShape {
	type = "trail";
	// mode: EmitterMode;
	// speed: ValueGenerator | FunctionValueGenerator;

	constructor(public target: TrailTarget) {}

	initialize(p: Particle): void {
		const { x, y, z } = this.target.position;
		p.position.set(x, y, z);

		const u = Math.random();
		const v = Math.random();
		const theta = u * Math.PI * 2;
		const coneRadius = 10; // Adjust for cone shape
		const zVelocity = 1; // Adjust for cone direction/speed
		const radius = coneRadius * Math.sqrt(v);
		const angle = theta * Math.PI * 2;

		// Get the direction from the TrailTarget
		const direction = this.target.direction;

		// Calculate velocity in local space (assuming Z-axis as forward)
		const localVelocityX = radius * Math.cos(angle);
		const localVelocityY = radius * Math.sin(angle);
		const localVelocityZ = zVelocity;

		// Calculate quaternion to rotate from Z-axis to target direction
		const fromVector = new Vector3(0, 0, 1); // Default forward direction
		const toVector = direction.clone().normalize();

		const quaternion = new Quaternion();
		quaternion.setFromUnitVectors(fromVector, toVector);

		p.velocity
			// Create the local velocity vector
			.set(localVelocityX, localVelocityY, localVelocityZ)
			// Apply the rotation
			.applyQuaternion(quaternion)
			.multiplyScalar(p.startSpeed);
	}

	toJSON(): ShapeJSON {
		return {
			type: this.type,
		};
	}

	// private currentValue = 0;
	update(system: ParticleSystem, delta: number): void {
		// if (EmitterMode.Random != this.mode) {
		// 	//   this.currentValue += this.speed.genValue(system.emissionState.time / system.duration) * delta
		// }
	}

	clone(): EmitterShape {
		return new TrailEmitter(this.target);
	}
}
