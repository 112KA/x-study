import { BufferAttribute, BufferGeometry, Points } from "three";
import {
	Fn,
	If,
	type ShaderNodeObject,
	color,
	float,
	hash,
	instanceIndex,
	instancedArray,
	range,
	vec3,
} from "three/tsl";
import { type ComputeNode, PointsNodeMaterial, type StorageArrayElementNode } from "three/webgpu";

export class PointParticle extends Points {
	computeNode: ShaderNodeObject<ComputeNode>;
	constructor(public count = 1000) {
		const geometry = new BufferGeometry();
		geometry.setAttribute("position", new BufferAttribute(new Float32Array(3), 3)); // single vertex ( not triangle )
		geometry.drawRange.count = 1; // force render points as instances ( not triangle )

		const material = new PointsNodeMaterial();

		super(geometry, material);

		const particleArray = instancedArray(count, "vec3");
		const lifeArray = instancedArray(count, "int");
		const velocityArray = instancedArray(count, "vec3");

		const computeShaderFn = Fn(() => {
			const particle = particleArray.element(instanceIndex);
			const life = lifeArray.element(instanceIndex);
			const velocity = velocityArray.element(instanceIndex);

			const curlNoise = (p: ShaderNodeObject<StorageArrayElementNode>) => {
				const eps = 0.1;
				const dx = vec3(eps, 0.0, 0.0);
				const dy = vec3(0.0, eps, 0.0);
				const dz = vec3(0.0, 0.0, eps);

				const p_x0 = p.add(dx);
				const p_x1 = p.sub(dx);
				const p_y0 = p.add(dy);
				const p_y1 = p.sub(dy);
				const p_z0 = p.add(dz);
				const p_z1 = p.sub(dz);

				const noise_x0 = hash(p_x0);
				const noise_x1 = hash(p_x1);
				const noise_y0 = hash(p_y0);
				const noise_y1 = hash(p_y1);
				const noise_z0 = hash(p_z0);
				const noise_z1 = hash(p_z1);

				const x = noise_y0.z.sub(noise_y1.z).sub(noise_z0.y.sub(noise_z1.y));
				const y = noise_z0.x.sub(noise_z1.x).sub(noise_x0.z.sub(noise_x1.z));
				const z = noise_x0.y.sub(noise_x1.y).sub(noise_y0.x.sub(noise_y1.x));

				return vec3(x, y, z);
			};

			If(life.x.lessThanEqual(0.0), () => {
				life.assign(range(100, 200));

				const randTheta = range(0, Math.PI * 2);
				const randPhi = range(0, Math.PI);

				const sinPhi = randPhi.sin();

				velocity.assign(vec3(randTheta.cos().mul(sinPhi), randTheta.sin().mul(sinPhi), randPhi.cos()).mul(0.01));

				particle.assign(vec3(0.0, 0.0, 0.0));
			}).Else(() => {
				life.assign(life.x.sub(1));
				// const curl = curlNoise(particle);
				// velocity.assign(curl.mul(0.01));
				particle.assign(particle.add(velocity));
			});
		});
		this.computeNode = computeShaderFn().compute(count);

		material.colorNode = particleArray.element(instanceIndex).add(color(0xffffff));
		material.positionNode = particleArray.element(instanceIndex);
	}
}
