import { AmbientLight, Color, DirectionalLight, GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { toonOutlinePass } from "three/tsl";
import { PostProcessing, WebGPURenderer } from "three/webgpu";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import type { DeviceSize } from "x";

export type ContainerProps = {
	canvas: HTMLCanvasElement;
};
export class Container {
	public renderer: WebGPURenderer;
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;
	#stats = new Stats();

	public postProcessing: PostProcessing;

	constructor({ canvas }: ContainerProps) {
		this.renderer = new WebGPURenderer({
			canvas,
			// forceWebGL: true,
		});
		this.renderer.setClearColor(0x000000, 0);
		// this.renderer.setPixelRatio(window.devicePixelRatio)
		this.renderer.setPixelRatio(1);
		// this.renderer.shadowMap.type = PCFSoftShadowMap;
		// this.renderer.shadowMap.enabled = true;

		this.scene.background = new Color(0xfff9ee);

		this.camera.position.set(0, 5, 10);
		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		// const ambientLight = new AmbientLight(0xffffff, 1);
		// this.scene.add(ambientLight);

		const directionalLight = new DirectionalLight(0xffffff, 1);
		directionalLight.position.set(1, 1, 1);
		this.scene.add(directionalLight);

		// const grid = new GridHelper(10, 10);
		// this.scene.add(grid);

		document.querySelector("body")?.appendChild(this.#stats.dom);

		this.postProcessing = new PostProcessing(this.renderer);
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
