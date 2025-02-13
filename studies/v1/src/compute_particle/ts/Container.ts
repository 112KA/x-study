import { AmbientLight, GridHelper, PerspectiveCamera, Scene, type WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { WebGPURenderer } from "three/webgpu";
import { AbstractContainer, type RendererParams } from "../../common/AbstractContainer";

export class Container<T extends WebGLRenderer | WebGPURenderer> extends AbstractContainer<T> {
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;

	public ambientLight = new AmbientLight(0xffffff, 1);

	constructor(wrapper: HTMLDivElement, rendererClass: new (params: RendererParams) => T) {
		super(wrapper, rendererClass);

		this.camera.position.set(0, 5, 10);

		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.scene.add(this.ambientLight);

		const grid = new GridHelper(10, 10);
		this.scene.add(grid);
	}

	public override update() {
		super.update();

		this._cameraControls.update();
		this.renderer.render(this.scene, this.camera);
	}

	public override resize(width: number, height: number) {
		super.resize(width, height);
	}
}
