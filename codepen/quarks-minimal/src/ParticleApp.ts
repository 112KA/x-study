import { AxesHelper, Clock, GridHelper, PerspectiveCamera, Scene, type Texture, WebGLRenderer } from "three";
import { BatchedRenderer, type Vector4 } from "three.quarks";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { ParticleSystemGroup } from "./ParticleSystemGroupBase";
import { SimpleParticleSystemGroup } from "./SimpleParticleSystemGroup";
import { TextureManager } from "./TextureManager";
import { TrailParticleSystemGroup } from "./TrailParticleSystemGroup";

/**
 * Configuration for the particle system
 */
export interface ParticleConfig {
	duration: number;
	maxParticles: number;
	emissionRate: number;
	tileCount: { u: number; v: number };
	life: { min: number; max: number };
	speed: { min: number; max: number };
	size: { min: number; max: number };
	colors: {
		start: Vector4;
		end: Vector4;
	};
}

/**
 * パーティクルシステムの種類
 */
export enum ParticleSystemType {
	SIMPLE = "simple",
	TRAIL = "trail",
}

/**
 * Main application class for the particle system
 */
export class ParticleApp {
	private scene: Scene;
	private camera: PerspectiveCamera;
	private renderer: WebGLRenderer;
	private clock: Clock;
	private batchRenderer: BatchedRenderer;
	private animationId?: number;
	private controls!: OrbitControls;

	private readonly texturePath: string;
	private textureManager: TextureManager;

	private currentParticleSystemGroup!: ParticleSystemGroup;
	private currentTexture?: Texture;

	static readonly InitialParticleSystemType = ParticleSystemType.TRAIL;

	constructor(texturePath = "texture1.png") {
		this.texturePath = texturePath;
		this.textureManager = new TextureManager();

		this.scene = new Scene();
		this.camera = new PerspectiveCamera();
		this.renderer = new WebGLRenderer();
		this.clock = new Clock();
		this.batchRenderer = new BatchedRenderer();

		this.initializeScene();
		this.setupUI();
		this.setupEventListeners();
	}

	/**
	 * Initialize the Three.js scene, camera, and renderer
	 */
	private initializeScene(): void {
		// Setup camera
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.set(0, 0, 5);

		// Setup renderer
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		// Setup OrbitControls
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.25;

		// Add batch renderer to scene
		this.scene.add(this.batchRenderer);

		const gridHelper = new GridHelper(10, 10);
		this.scene.add(gridHelper);

		const axesHelper = new AxesHelper(5);
		this.scene.add(axesHelper);
	}

	/**
	 * UIボタンを作成
	 */
	private setupUI(): void {
		const particleSystemTypeSelect = document.getElementById("particle-system-type") as HTMLSelectElement;
		particleSystemTypeSelect.value = ParticleApp.InitialParticleSystemType;
		particleSystemTypeSelect.onchange = () => {
			const selectedValue = particleSystemTypeSelect.value as ParticleSystemType;
			this.switchParticleSystem(selectedValue);
		};
	}

	/**
	 * Setup particle system with the loaded texture
	 */
	private setupParticleSystem(texture: Texture): void {
		this.currentTexture = texture;
		this.currentParticleSystemGroup = this.createParticleSystem(ParticleApp.InitialParticleSystemType, texture);

		this.batchRenderer.addSystem(this.currentParticleSystemGroup.particleSystem);
		this.scene.add(this.currentParticleSystemGroup);

		this.currentParticleSystemGroup.restart();

		this.startAnimationLoop();
	}

	/**
	 * パーティクルシステムを切り替え
	 */
	private switchParticleSystem(type: ParticleSystemType): void {
		if (this.currentParticleSystemGroup.type === type || !this.currentTexture) {
			return;
		}

		// 現在のパーティクルシステムを削除
		if (this.currentParticleSystemGroup) {
			this.batchRenderer.deleteSystem(this.currentParticleSystemGroup.particleSystem);
			this.scene.remove(this.currentParticleSystemGroup);
		}

		// 新しいパーティクルシステムを作成
		this.currentParticleSystemGroup = this.createParticleSystem(type, this.currentTexture);

		this.batchRenderer.addSystem(this.currentParticleSystemGroup.particleSystem);
		this.scene.add(this.currentParticleSystemGroup);
		this.currentParticleSystemGroup.restart();
	}

	/**
	 * パーティクルシステムのインスタンスを作成
	 */
	private createParticleSystem(type: ParticleSystemType, texture: Texture): ParticleSystemGroup {
		switch (type) {
			case ParticleSystemType.SIMPLE:
				return new SimpleParticleSystemGroup(texture);
			case ParticleSystemType.TRAIL:
				return new TrailParticleSystemGroup(texture);
			default:
				return new SimpleParticleSystemGroup(texture);
		}
	}

	/**
	 * Main animation loop
	 */
	private startAnimationLoop(): void {
		const animate = (): void => {
			const dt = this.clock.getDelta();
			if (this.currentParticleSystemGroup.update) {
				this.currentParticleSystemGroup.update(dt);
			}
			this.controls.update();
			this.animationId = requestAnimationFrame(animate);
			this.batchRenderer.update(dt);
			this.renderer.render(this.scene, this.camera);
		};
		animate();
	}

	/**
	 * Handle window resize events
	 */
	private handleResize = (): void => {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	};

	/**
	 * Setup event listeners
	 */
	private setupEventListeners(): void {
		window.addEventListener("resize", this.handleResize);
	}

	/**
	 * Initialize and start the application
	 */
	public async start(): Promise<void> {
		try {
			const texture = await this.textureManager.loadTexture(this.texturePath);
			this.setupParticleSystem(texture);
		} catch (error) {
			console.error("Failed to start particle application:", error);
		}
	}

	/**
	 * Stop the animation and clean up resources
	 */
	public stop(): void {
		if (this.animationId) {
			cancelAnimationFrame(this.animationId);
			this.animationId = undefined;
		}

		// Clean up particle system
		if (this.currentParticleSystemGroup) {
			this.batchRenderer.deleteSystem(this.currentParticleSystemGroup.particleSystem);
			this.scene.remove(this.currentParticleSystemGroup);
		}

		// Clean up OrbitControls
		this.controls.dispose();

		// Remove event listeners
		window.removeEventListener("resize", this.handleResize);

		// Clean up renderer
		if (this.renderer.domElement.parentNode) {
			this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
		}
		this.renderer.dispose();
	}
}
