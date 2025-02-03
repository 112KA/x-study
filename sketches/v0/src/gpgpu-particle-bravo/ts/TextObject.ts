import {
	type DataTexture,
	DoubleSide,
	Mesh,
	MeshBasicMaterial,
	type Scene,
	type Shape,
	ShapeGeometry,
	Vector3,
} from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import fontData from "@compai/font-noto-sans/data/typefaces/noto-sans-bold-normal-700.json";
import type { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";
import { TEXTURE_SIZE } from "./Constants";
import { ShapeSampler } from "./ShapeSampler";

const font = new FontLoader().parse(fontData);
const SIZE = TEXTURE_SIZE;
const N_PARTICLES = SIZE * SIZE;

export class TextObject {
	public size = 150;
	public sampler: ShapeSampler;
	public geometry: ShapeGeometry;
	public material: MeshBasicMaterial = new MeshBasicMaterial({
		color: 0,
		opacity: 0.8,
		transparent: true,
		side: DoubleSide,
	});
	public mesh: Mesh;
	public positionTexture: DataTexture;

	constructor(
		public text: string,
		scene: Scene,
		computeRenderer: GPUComputationRenderer,
	) {
		const shapes: Shape[] = font.generateShapes(text, this.size);
		this.sampler = new ShapeSampler(shapes);

		this.geometry = new ShapeGeometry(shapes);

		this.geometry.computeBoundingBox();

		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.visible = false;

		scene.add(this.mesh);
		this.positionTexture = computeRenderer.createTexture();
		const data = this.positionTexture.image.data;
		const position = new Vector3();
		const offset = new Vector3();

		this.geometry.boundingBox?.getCenter(offset);
		this.geometry.translate(-offset.x, -offset.y, -offset.z);

		for (let i = 0; i < N_PARTICLES; i++) {
			this.sampler.sample(position);
			data.set([position.x - offset.x, position.y - offset.y, position.z, Math.random()], i * 4);
		}
	}

	set visible(v: boolean) {
		this.mesh.visible = v;
	}
}
