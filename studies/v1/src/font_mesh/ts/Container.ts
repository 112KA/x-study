import { AmbientLight, Color, DirectionalLight, GridHelper, PerspectiveCamera, Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { toonOutlinePass } from "three/tsl";
import { PostProcessing, type WebGPURenderer } from "three/webgpu";
import { AbstractWebGPUContainer } from "../../common/AbstractWebGPUContainer";

export class Container extends AbstractWebGPUContainer {
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;

	public ambientLight = new AmbientLight(0xffffff, 1);
	public directionalLight = new DirectionalLight(0xffffff, 1);
	public postProcessing: PostProcessing;

	constructor(wrapper: HTMLDivElement) {
		super(wrapper);

		this.renderer.setClearColor(0xfff9ee, 1);

		this.camera.position.set(0, 5, 10);
		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.directionalLight.position.set(1, 1, 1);
		this.scene.add(this.ambientLight, this.directionalLight);

		// const grid = new GridHelper(10, 10);
		// this.scene.add(grid);

		this.postProcessing = new PostProcessing(this.renderer as WebGPURenderer);
		this.postProcessing.outputNode = toonOutlinePass(this.scene, this.camera, undefined, 0.005);
	}

	public override async update() {
		super.update();

		this._cameraControls.update();
		// this.renderer.render(this.scene, this.camera);
		await this.postProcessing.renderAsync();
		// console.log('this.renderer', this.renderer);
	}

	public override resize(width: number, height: number) {
		super.resize(width, height);
	}
}
