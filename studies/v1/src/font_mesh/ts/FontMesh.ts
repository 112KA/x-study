import { Mesh } from "three";
import { type Font, TextGeometry } from "three/examples/jsm/Addons.js";
import { normalFlat } from "three/tsl";
import { MeshBasicNodeMaterial } from "three/webgpu";

export class FontMesh extends Mesh {
	#text = "";
	#size = 1;
	#depth = 0.05;
	#curveSegments = 3;
	#bevelEnabled = true;
	#bevelSize = 0.07;
	#bevelThickness = 0.12;
	#bevelOffset = 0;
	#bevelSegments = 4;

	constructor(
		public font: Font,
		text: string,
	) {
		super();

		this.#text = text;
		this.geometry = this.buildGeometry();
	}

	buildGeometry() {
		const geometry = new TextGeometry(this.#text, {
			font: this.font,
			size: this.#size,
			depth: this.#depth,
			curveSegments: this.#curveSegments,
			bevelEnabled: this.#bevelEnabled,
			bevelSize: this.#bevelSize,
			bevelThickness: this.#bevelThickness,
			bevelOffset: this.#bevelOffset,
			bevelSegments: this.#bevelSegments,
		});
		geometry.center();
		return geometry;
	}

	rebuildGeometry() {
		this.geometry.dispose();
		return this.buildGeometry();
	}

	set text(value: string) {
		this.#text = value;
		this.geometry = this.rebuildGeometry();
	}

	get text(): string {
		return this.#text;
	}

	set size(value: number) {
		this.#size = value;
		this.geometry = this.rebuildGeometry();
	}

	get size(): number {
		return this.#size;
	}

	set depth(value: number) {
		this.#depth = value;
		this.geometry = this.rebuildGeometry();
	}

	get depth(): number {
		return this.#depth;
	}

	set curveSegments(value: number) {
		this.#curveSegments = value;
		this.geometry = this.rebuildGeometry();
	}

	get curveSegments(): number {
		return this.#curveSegments;
	}

	set bevelEnabled(value: boolean) {
		this.#bevelEnabled = value;
		this.geometry = this.rebuildGeometry();
	}

	get bevelEnabled(): boolean {
		return this.#bevelEnabled;
	}

	set bevelSize(value: number) {
		this.#bevelSize = value;
		this.geometry = this.rebuildGeometry();
	}

	get bevelSize(): number {
		return this.#bevelSize;
	}

	set bevelThickness(value: number) {
		this.#bevelThickness = value;
		this.geometry = this.rebuildGeometry();
	}

	get bevelThickness(): number {
		return this.#bevelThickness;
	}

	set bevelOffset(value: number) {
		this.#bevelOffset = value;
		this.geometry = this.rebuildGeometry();
	}

	get bevelOffset(): number {
		return this.#bevelOffset;
	}

	set bevelSegments(value: number) {
		this.#bevelSegments = value;
		this.geometry = this.rebuildGeometry();
	}

	get bevelSegments(): number {
		return this.#bevelSegments;
	}
}
