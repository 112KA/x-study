import {
	AdditiveBlending,
	Group,
	MeshBasicMaterial,
	type Texture,
} from "three";
import {
	ColorOverLife,
	ConstantValue,
	Gradient,
	type ParticleEmitter,
	ParticleSystem,
	PointEmitter,
	RandomColor,
	RenderMode,
	Vector3,
	Vector4,
} from "three.quarks";
import type { ParticleSystemGroup } from "../ParticleSystemGroupBase";
import { ParticleSystemType } from "../types";

export class SimpleParticleSystemGroup
	extends Group
	implements ParticleSystemGroup
{
	type = ParticleSystemType.SIMPLE;
	particleSystem: ParticleSystem;
	constructor(map: Texture) {
		super();

		this.particleSystem = new ParticleSystem({
			duration: 5,
			looping: true,
			startLife: new ConstantValue(1),
			startSpeed: new ConstantValue(1),
			startSize: new ConstantValue(0.1),
			startColor: new RandomColor(
				new Vector4(1, 0.91, 0.51, 1),
				new Vector4(1, 0.44, 0.16, 1),
			),
			worldSpace: true,
			maxParticle: 1000,
			emissionOverTime: new ConstantValue(1000),
			emissionBursts: [],
			shape: new PointEmitter(),
			material: new MeshBasicMaterial({
				map,
				blending: AdditiveBlending,
				transparent: true,
				// side: DoubleSide,
			}),
			renderMode: RenderMode.BillBoard,
			renderOrder: 1,
		});

		this.particleSystem.addBehavior(
			new ColorOverLife(
				// new ColorRange(new Vector4(1, 0.3882312, 0.125, 1), new Vector4(1, 0.826827, 0.3014706, 0)),
				new Gradient(
					[
						[new Vector3(1, 0, 0), 0],
						[new Vector3(1, 1, 1), 0.8],
					],
					[
						[1, 0],
						[0.2, 1],
					],
				),
			),
		);

		this.particleSystem.emitterShape = new PointEmitter();
		this.particleSystem.emitter.name = "Point";

		this.add(this.particleSystem.emitter);
	}

	restart() {
		this.particleSystem.restart();
	}
}
