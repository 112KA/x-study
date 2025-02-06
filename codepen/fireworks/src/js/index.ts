// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { LumaSplatsThree } from "@lumaai/luma-web";
import * as THREE from "three";
import { CameraControls } from "./CameraControls.js";
import { Fireworks } from "./Fireworks.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ antialias: false });
// renderer.setClearColor(0xff0000)
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	10000,
);
camera.position.set(0, 2, 7);

const controls = new CameraControls(camera, renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.maxPolarAngle = Math.PI / 2
// controls.autoRotate = true
// controls.autoRotateSpeed = 0.3

// const cameraScaleDelta = 0

const splat = new LumaSplatsThree({
	source: "https://lumalabs.ai/capture/d73e294a-b07a-4e97-b84b-8da3bb34ab5c",
});
scene.add(splat);

const fireworks = new Fireworks();
fireworks.start();
scene.add(fireworks.renderer);
scene.add(fireworks.baseSystem.emitter);
scene.add(fireworks.flowerSystem.emitter);

const clock = new THREE.Clock();
clock.start();

// let frame = 0
// let flag = false
// const radius0 = controls.getDistance()
// let targetRadius = radius0
// let radius = radius0

function step() {
	const dt = clock.getDelta();
	controls.update(dt);
	// console.log('x', controls.object.position.x)
	fireworks.update(dt);

	// const isSet = frame++ % 60 * 5 === 0
	// if (isSet) {
	//   targetRadius = flag ? 0.5 : 2
	//   flag = !flag
	// }

	// radius += (targetRadius - radius) * 0.1
	// console.log({ radius0, radius })

	// camera.position.setScalar(radius0 * radius / radius0)

	renderer.render(scene, camera);

	window.requestAnimationFrame(step);
}

step();

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", resize);
resize();
