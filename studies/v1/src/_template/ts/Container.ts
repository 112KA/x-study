import { AmbientLight, GridHelper, PerspectiveCamera, Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { assertIsDefined } from "x";
import { AbstractWebGPUContainer } from "../../common/AbstractWebGPUContainer";

export class Container extends AbstractWebGPUContainer {
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;

	public ambientLight = new AmbientLight(0xffffff, 1);

	constructor(wrapper: HTMLDivElement) {
		super(wrapper);

		this.camera.position.set(0, 5, 10);

		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.scene.add(this.ambientLight);

		const grid = new GridHelper(10, 10);
		this.scene.add(grid);
	}

	public override async update() {
		super.update();

		assertIsDefined(this.camera);

		this._cameraControls.update();
		await this.renderer.renderAsync(this.scene, this.camera);
	}

	public override resize(width: number, height: number) {
		super.resize(width, height);
	}
}
