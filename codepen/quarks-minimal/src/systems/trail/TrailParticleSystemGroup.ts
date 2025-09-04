import {
	BoxGeometry,
	Group,
	Mesh,
	MeshNormalMaterial,
	SphereGeometry,
	type Texture,
} from "three";
import {
	ColorOverLife,
	ConstantValue,
	Gradient,
	ParticleSystem,
	RandomColor,
	RenderMode,
	Vector3,
	Vector4,
} from "three.quarks";
import type { ParticleSystemGroup } from "../ParticleSystemGroupBase";
import { ParticleSystemType } from "../types";
import { TrailEmitter } from "./TrailEmitter";
import { TrailTarget } from "./TrailTarget";

export class TrailParticleSystemGroup
	extends Group
	implements ParticleSystemGroup
{
	type = ParticleSystemType.TRAIL;
	particleSystem: ParticleSystem;
	trailTarget = new TrailTarget();

	constructor(map: Texture) {
		super();

		this.particleSystem = new ParticleSystem({
			duration: 5,
			looping: true,
			startLife: new ConstantValue(1),
			startSpeed: new ConstantValue(0.1),
			startSize: new ConstantValue(0.1),
			startColor: new RandomColor(
				new Vector4(1, 0.91, 0.51, 1),
				new Vector4(1, 0.44, 0.16, 1),
			),
			worldSpace: true,
			emissionOverTime: new ConstantValue(100),
			emissionBursts: [],
			shape: new TrailEmitter(this.trailTarget),
			// material: new MeshStandardMaterial({
			// 	// map,
			// 	blending: AdditiveBlending,
			// 	transparent: true,
			// 	// side: DoubleSide,
			// 	emissive: new Color(0xffffff),
			// }),
			material: new MeshNormalMaterial({
				transparent: true,
			}),
			instancingGeometry: new SphereGeometry(1, 8, 8),
			renderMode: RenderMode.Mesh,
			// renderOrder: 1,
		});

		this.particleSystem.addBehavior(
			new ColorOverLife(
				// new ColorRange(new Vector4(1, 0.3882312, 0.125, 1), new Vector4(1, 0.826827, 0.3014706, 0)),
				new Gradient(
					[
						[new Vector3(1, 0, 0), 0],
						[new Vector3(1, 1, 1), 0.1],
					],
					[
						[1, 0],
						[0, 1],
					],
				),
			),
		);

		// this.particleSystem.emitterShape = new PointEmitter();
		// this.particleSystem.emitterShape = new TrailEmitter(this.trailTarget);
		this.particleSystem.emitter.name = "Point";

		this.add(this.particleSystem.emitter);
		this.add(this.trailTarget);

		const size = 0.1;
		const box = new Mesh(
			new BoxGeometry(size, size, size),
			new MeshNormalMaterial(),
		);
		this.trailTarget.add(box);
	}

	restart() {
		this.particleSystem.restart();
	}

	update(dt: number) {
		this.trailTarget.update(dt);
	}
}
