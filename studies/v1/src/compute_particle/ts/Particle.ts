import { BufferAttribute, BufferGeometry, Points } from "three";
import { color, instanceIndex, instancedArray } from "three/tsl";
import { PointsNodeMaterial } from "three/webgpu";

export class PointParticle extends Points {
	constructor(public count = 1000) {
		const geometry = new BufferGeometry();
		geometry.setAttribute("position", new BufferAttribute(new Float32Array(3), 3)); // single vertex ( not triangle )
		geometry.drawRange.count = 1; // force render points as instances ( not triangle )

		const material = new PointsNodeMaterial();

		super(geometry, material);

		const particleArray = instancedArray(count, "vec3");
		const lifeArray = instancedArray(count, "float");
		const velocityArray = instancedArray(count, "vec3");

		material.colorNode = particleArray.element(instanceIndex).add(color(0xffffff));
		material.positionNode = particleArray.element(instanceIndex);
	}
}
