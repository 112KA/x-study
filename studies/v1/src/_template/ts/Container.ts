import { AmbientLight, BasicShadowMap, CameraHelper, GridHelper, PerspectiveCamera, Scene, SpotLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { assertIsDefined } from "x";
import { AbstractWebGPUContainer } from "../../common/AbstractWebGPUContainer";

export class Container extends AbstractWebGPUContainer {
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;

	public ambientLight = new AmbientLight(0xffffff, 1);
	public spotLight = new SpotLight(0xffffff, 500);

	constructor(wrapper: HTMLDivElement) {
		super(wrapper);

		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = BasicShadowMap;

		this.camera.position.set(0, 5, 10);

		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.scene.add(this.ambientLight);

		this.spotLight.name = "Spot Light";
		this.spotLight.angle = Math.PI / 5;
		this.spotLight.penumbra = 0.3;
		this.spotLight.position.set(10, 10, 5);
		this.spotLight.castShadow = true;
		this.spotLight.shadow.camera.near = 8;
		this.spotLight.shadow.camera.far = 30;
		this.spotLight.shadow.mapSize.width = 1024;
		this.spotLight.shadow.mapSize.height = 1024;
		this.scene.add(this.spotLight);
		this.scene.add(new CameraHelper(this.spotLight.shadow.camera));

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
