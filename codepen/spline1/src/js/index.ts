import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { Torch } from "./Torch";

const scene = new THREE.Scene();
scene.position.y = -500;

const renderer = new THREE.WebGLRenderer({ antialias: false });
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	10000,
);
camera.position.z = 900;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 2;
controls.enableAutoRotate = true;

const torch = new Torch();
scene.add(torch);

function step() {
	torch.tick();

	controls.update();

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
