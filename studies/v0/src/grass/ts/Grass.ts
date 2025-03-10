import {
	BufferAttribute,
	BufferGeometry,
	CircleGeometry,
	DoubleSide,
	Mesh,
	type Object3D,
	RepeatWrapping,
	ShaderMaterial,
	TextureLoader,
} from "three";
import { GrassShader } from "./glsl";

const BLADE_WIDTH = 0.1;
const BLADE_HEIGHT = 0.8;
const BLADE_HEIGHT_VARIATION = 0.6;
const BLADE_VERTEX_COUNT = 5;
const BLADE_TIP_OFFSET = 0;

function interpolate(val: number, oldMin: number, oldMax: number, newMin: number, newMax: number) {
	return ((val - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

export class GrassGeometry extends BufferGeometry {
	constructor(size: number, count: number) {
		super();

		const positions = [];
		const uvs = [];
		const indices = [];

		for (let i = 0; i < count; i++) {
			const surfaceMin = (size / 2) * -1;
			const surfaceMax = size / 2;
			const radius = (size / 2) * Math.random();
			const theta = Math.random() * 2 * Math.PI;

			const x = radius * Math.cos(theta);
			const y = radius * Math.sin(theta);

			uvs.push(
				...Array.from({ length: BLADE_VERTEX_COUNT }).flatMap(() => [
					interpolate(x, surfaceMin, surfaceMax, 0, 1),
					interpolate(y, surfaceMin, surfaceMax, 0, 1),
				]),
			);

			const blade = this.computeBlade([x, 0, y], i);
			positions.push(...blade.positions);
			indices.push(...blade.indices);
		}

		this.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
		this.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
		this.setIndex(indices);
		this.computeVertexNormals();
	}

	// Grass blade generation, covered in https://smythdesign.com/blog/stylized-grass-webgl
	// TODO: reduce vertex count, optimize & possibly move to GPU
	computeBlade(center: number[], index = 0) {
		const height = BLADE_HEIGHT + Math.random() * BLADE_HEIGHT_VARIATION;
		const vIndex = index * BLADE_VERTEX_COUNT;

		// Randomize blade orientation and tip angle
		const yaw = Math.random() * Math.PI * 2;
		const yawVec = [Math.sin(yaw), 0, -Math.cos(yaw)];
		const bend = Math.random() * Math.PI * 2;
		const bendVec = [Math.sin(bend), 0, -Math.cos(bend)];

		// Calc bottom, middle, and tip vertices
		const bl = yawVec.map((n, i) => n * (BLADE_WIDTH / 2) * 1 + center[i]);
		const br = yawVec.map((n, i) => n * (BLADE_WIDTH / 2) * -1 + center[i]);
		const tl = yawVec.map((n, i) => n * (BLADE_WIDTH / 4) * 1 + center[i]);
		const tr = yawVec.map((n, i) => n * (BLADE_WIDTH / 4) * -1 + center[i]);
		const tc = bendVec.map((n, i) => n * BLADE_TIP_OFFSET + center[i]);

		// Attenuate height
		tl[1] += height / 2;
		tr[1] += height / 2;
		tc[1] += height;

		return {
			positions: [...bl, ...br, ...tr, ...tl, ...tc],
			indices: [vIndex, vIndex + 1, vIndex + 2, vIndex + 2, vIndex + 4, vIndex + 3, vIndex + 3, vIndex, vIndex + 2],
		};
	}
}

import cloudImage from "../cloud.jpg";
const cloudTexture = new TextureLoader().load(cloudImage);
cloudTexture.wrapS = cloudTexture.wrapT = RepeatWrapping;

export class Grass extends Mesh {
	constructor(parent: Object3D, size: number, count: number) {
		const geometry = new GrassGeometry(size, count);
		const material = new ShaderMaterial({
			uniforms: {
				uCloud: { value: cloudTexture },
				uTime: { value: 0 },
			},
			side: DoubleSide,
			vertexShader: GrassShader.vertex,
			fragmentShader: GrassShader.fragment,
		});
		super(geometry, material);

		parent.add(this);

		// const floor = new Mesh(new CircleGeometry(15, 8).rotateX(Math.PI / 2), material)
		// floor.position.y = -Number.EPSILON
		// this.add(floor)
	}

	update(time: number) {
		(this.material as ShaderMaterial).uniforms.uTime.value = time;
	}
}
