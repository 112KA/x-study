import type { Group } from "three";
import type { ParticleEmitter, ParticleSystem } from "three.quarks";
import type { ParticleSystemType } from "./ParticleApp";

export interface ParticleSystemGroup extends Group {
	type: ParticleSystemType;
	particleSystem: ParticleSystem;
	restart: () => void;
	update?: (dt: number) => void;
}
