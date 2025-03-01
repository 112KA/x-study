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
	uint,
	vec3,
} from "three/tsl";
import { type ComputeNode, PointsNodeMaterial, type StorageArrayElementNode, WebGPURenderer } from "three/webgpu";
import { curl } from "x3/nodes/noise/curl";

export class PointParticle extends Points {
	computeNode: ShaderNodeObject<ComputeNode>;
	constructor(count = 10000) {
		const geometry = new BufferGeometry();
		geometry.setAttribute("position", new BufferAttribute(new Float32Array(3), 3)); // single vertex ( not triangle )
		geometry.drawRange.count = 1; // force render points as instances ( not triangle )

		const material = new PointsNodeMaterial();

		super(geometry, material);

		this.count = count;

		const positionArray = instancedArray(count, "vec3");
		const lifeArray = instancedArray(count, "int");
		const velocityArray = instancedArray(count, "vec3");

		const randUint = () => uint(Math.random() * 0xffffff);

		const computeFn = Fn(() => {
			const position = positionArray.element(instanceIndex);
			const life = lifeArray.element(instanceIndex);
			const velocity = velocityArray.element(instanceIndex);

			If(life.lessThanEqual(0.0), () => {
				life.assign(hash(instanceIndex).mul(100).add(100));

				const randTheta = hash(instanceIndex.add(randUint())).mul(Math.PI * 2);
				const randPhi = hash(instanceIndex.add(randUint())).mul(Math.PI);
				const sinPhi = randPhi.sin();
				velocity.assign(vec3(randTheta.cos().mul(sinPhi), randTheta.sin().mul(sinPhi), randPhi.cos()).mul(0.01));

				position.assign(vec3(0.0, 0.0, 0.0));
			}).Else(() => {
				life.assign(life.x.sub(1));
				velocity.assign(velocity.add(curl(position).mul(0.001)));
				position.assign(position.add(velocity));
			});
		});
		this.computeNode = computeFn().compute(count);

		material.colorNode = positionArray.element(instanceIndex).add(color(0xffffff));
		material.positionNode = positionArray.element(instanceIndex);
	}
}
