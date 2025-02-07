import { AmbientLight, Color, DirectionalLight, GridHelper, PerspectiveCamera, Scene, type WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { toonOutlinePass } from "three/tsl";
import { PostProcessing, type WebGPURenderer } from "three/webgpu";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import type { DeviceSize } from "x";

export type ContainerProps = {
	renderer: WebGPURenderer | WebGLRenderer;
};
export class Container {
	public renderer: WebGPURenderer | WebGLRenderer;
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;
	#stats = new Stats();

	public ambientLight = new AmbientLight(0xffffff, 1);
	public directionalLight = new DirectionalLight(0xffffff, 1);
	public postProcessing: PostProcessing;

	constructor({ renderer }: ContainerProps) {
		this.renderer = renderer;
		this.renderer.setClearColor(0xfff9ee, 1);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.camera.position.set(0, 5, 10);
		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.directionalLight.position.set(1, 1, 1);
		this.scene.add(this.ambientLight, this.directionalLight);

		// const grid = new GridHelper(10, 10);
		// this.scene.add(grid);

		document.querySelector("body")?.appendChild(this.#stats.dom);

		this.postProcessing = new PostProcessing(this.renderer as WebGPURenderer);
		this.postProcessing.outputNode = toonOutlinePass(this.scene, this.camera, undefined, 0.005);
	}

	render() {
		this._cameraControls.update();
		// this.renderer.render(this.scene, this.camera);
		this.postProcessing.render();
		this.#stats.update();
		// console.log('this.renderer', this.renderer);
	}

	resize() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		this.renderer.setSize(width, height);

		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
	}

	setDeviceSize(deviceSize: DeviceSize) {
		console.log({ deviceSize });
	}
}
