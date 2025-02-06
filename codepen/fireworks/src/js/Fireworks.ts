import { DoubleSide, MeshBasicMaterial, Vector3, Vector4 } from "three";

import {
	ApplyForce,
	BatchedRenderer,
	Bezier,
	ColorOverLife,
	ColorRange,
	ConeEmitter,
	ConstantValue,
	EmitSubParticleSystem,
	Gradient,
	IntervalValue,
	ParticleSystem,
	PiecewiseBezier,
	RandomColor,
	RandomColorBetweenGradient,
	RenderMode,
	SizeOverLife,
	SphereEmitter,
	SubParticleEmitMode,
} from "three.quarks";

//   import type { AssetLoader } from "x3/loaders/AssetLoader";

export class Fireworks {
	public renderer = new BatchedRenderer();
	public baseSystem: ParticleSystem;
	public flowerSystem: ParticleSystem;

	totalTime = 0;
	refreshTime = 3;
	private particleMaterial = new MeshBasicMaterial({
		transparent: true,
		//   blending: AdditiveBlending,
		color: 0xff0000,
	});

	constructor() {
		//   this.particleMaterial.map = this.assetLoader.textures["particle"];
		// this.particleMaterial.map = this.assetLoader.textures["texture1"];
		this.particleMaterial.needsUpdate = true;

		this.baseSystem = this.createBaseParticleSystem();
		this.renderer.addSystem(this.baseSystem);

		this.flowerSystem = this.createFlowerParticleSystem();
		this.renderer.addSystem(this.flowerSystem);

		this.baseSystem.addBehavior(
			new EmitSubParticleSystem(
				this.baseSystem,
				false,
				this.flowerSystem.emitter,
				SubParticleEmitMode.Death,
			),
		);
	}

	start() {
		this.baseSystem.restart();
	}

	reset() {
		this.baseSystem.pause();
	}

	update(dt: number) {
		this.renderer.update(dt);

		// this.totalTime += dt;
		// if (this.totalTime > this.refreshTime) {
		//   this.totalTime = 0;

		//   this.flowerSystem.restart();
		// }
	}

	private createBaseParticleSystem() {
		const system = new ParticleSystem({
			duration: 1,
			looping: true,
			startLife: new IntervalValue(2, 3),
			startSpeed: new IntervalValue(0.8, 1.2),
			startSize: new IntervalValue(0.02, 0.03),
			startColor: new RandomColor(
				new Vector4(0.51, 0.71, 1, 1),
				new Vector4(0.16, 0.24, 1, 1),
			),
			// startColor: new RandomColor(new Vector4(0.61, 0.81, 1, 1), new Vector4(1, 1, 1, 1)),
			worldSpace: true,

			maxParticle: 10,
			emissionOverTime: new ConstantValue(1),

			shape: new ConeEmitter({
				radius: 1,
				spread: 0,
				thickness: 1,
				// angle: 0,
			}),
			material: this.particleMaterial,
			renderMode: RenderMode.BillBoard,
			renderOrder: 2,
		});

		system.emitter.name = "fireworks";
		system.emitter.rotation.x = -Math.PI / 2;
		system.pause();

		system.addBehavior(
			new ApplyForce(new Vector3(0, -1, 0), new ConstantValue(0.98 / 2)),
		);

		// system.addBehavior(
		//   new ColorOverLife(
		//     // new ColorRange(new Vector4(1, 0.3882312, 0.125, 1), new Vector4(1, 0.826827, 0.3014706, 0)),
		//     new Gradient(
		//       [
		//         [new Vector3(0, 0, 0), 0],
		//         [new Vector3(1, 1, 1), 0],
		//       ],
		//       [
		//         [1, 0],
		//         [0, 1],
		//       ],
		//     ),
		//   ),
		// );
		// system.addBehavior(new SizeOverLife(new PiecewiseBezier([[new Bezier(1, 0.95, 0.35, 0), 0]])));

		return system;
	}

	private createFlowerParticleSystem() {
		const system = new ParticleSystem({
			duration: 3,
			looping: false,
			startLife: new IntervalValue(0.6, 0.8),
			startSpeed: new IntervalValue(0.8, 1),
			startSize: new ConstantValue(0.05),
			startColor: new ColorRange(
				new Vector4(1, 1, 1, 1),
				new Vector4(1, 1, 1, 1),
			),
			worldSpace: true,

			maxParticle: 10,
			emissionOverTime: new ConstantValue(0),
			emissionBursts: [
				{
					time: 0,
					count: new ConstantValue(100),
					cycle: 1,
					interval: 0.01,
					probability: 1,
				},
			],

			shape: new SphereEmitter({ radius: 0.1, angle: 1 }),
			//   material: this.particleMaterial,
			material: new MeshBasicMaterial({
				// map: this.particleMaterial.map,
				// blending: AdditiveBlending,
				transparent: true,
				side: DoubleSide,
			}),
			renderMode: RenderMode.Trail,
			rendererEmitterSettings: {
				startLength: new ConstantValue(10),
			},
			startTileIndex: new ConstantValue(0),
			uTileCount: 10,
			vTileCount: 10,
			renderOrder: 0,
		});

		system.emitter.name = "flower";
		system.emitter.rotation.x = -Math.PI / 2;
		system.addBehavior(
			new SizeOverLife(new PiecewiseBezier([[new Bezier(0, 1, 0.75, 0), 0]])),
		);
		system.addBehavior(
			new ColorOverLife(
				new RandomColorBetweenGradient(
					new Gradient(
						[
							[new Vector3(1, 0, 0), 0],
							[new Vector3(1, 0, 0), 0],
						],
						[
							[1, 0],
							[1, 1],
						],
					),
					new Gradient(
						[
							[new Vector3(0, 1, 0), 0],
							[new Vector3(0, 1, 0), 1],
						],
						[
							[1, 0],
							[1, 1],
						],
					),
				),
			),
		);
		system.addBehavior(
			new ApplyForce(new Vector3(0, -0.8, 0), new ConstantValue(0.98)),
		);
		// system.pause();

		return system;
	}
}
