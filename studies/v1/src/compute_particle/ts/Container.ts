import {
	AmbientLight,
	GridHelper,
	PerspectiveCamera,
	Scene,
	SpotLight,
	SpotLightHelper,
	TimestampQuery,
	type WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ShadowMapViewer } from "three/examples/jsm/utils/ShadowMapViewerGPU.js";
import { AbstractWebGPUContainer } from "../../common/AbstractWebGPUContainer";

export class Container extends AbstractWebGPUContainer {
	public scene = new Scene();
	public camera = new PerspectiveCamera(45, 1, 0.1, 10000);
	private _cameraControls: OrbitControls;

	public ambientLight = new AmbientLight(0xffffff, 1);
	spotLight = new SpotLight(0xffffff, 400, 100, Math.PI / 4, 1);
	spotLightShadowMapViewer = new ShadowMapViewer(this.spotLight);

	constructor(wrapper: HTMLDivElement) {
		super(wrapper);

		this.renderer.shadowMap.enabled = true;

		this.camera.position.set(0, 5, 10);

		this._cameraControls = new OrbitControls(this.camera, this.renderer.domElement);

		this.spotLight.castShadow = true;
		this.spotLight.angle = Math.PI / 5;
		this.spotLight.penumbra = 0.3;
		this.spotLight.position.set(8, 10, 5);
		this.spotLight.castShadow = true;
		this.spotLight.shadow.camera.near = 1;
		this.spotLight.shadow.camera.far = 1000;
		this.spotLight.shadow.mapSize.width = 2048;
		this.spotLight.shadow.mapSize.height = 2048;
		this.spotLight.shadow.bias = -0.002;
		this.spotLight.shadow.radius = 4;
		// this.spotLight.shadow.camera
		// this.spotLight.position.set(0, 3, 0);
		this.scene.add(this.ambientLight, this.spotLight);

		const spotLightHelper = new SpotLightHelper(this.spotLight);
		this.scene.add(spotLightHelper);

		const grid = new GridHelper(10, 10);
		this.scene.add(grid);
	}

	public override async update() {
		super.update();

		this._cameraControls.update();
	}

	public async render() {
		this.renderer.render(this.scene, this.camera);
		this.renderer.resolveTimestampsAsync(TimestampQuery.RENDER);

		this.spotLightShadowMapViewer.render(this.renderer);
	}

	public override resize(width: number, height: number) {
		super.resize(width, height);

		const size = width * 0.15;
		this.spotLightShadowMapViewer.position.set(100, 10);
		this.spotLightShadowMapViewer.size.width = size;
		this.spotLightShadowMapViewer.size.height = size;
		this.spotLightShadowMapViewer.update();
		this.spotLightShadowMapViewer.updateForWindowResize();
	}
}
