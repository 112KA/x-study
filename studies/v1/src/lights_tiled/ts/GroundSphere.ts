import { Mesh, SphereGeometry, type Texture } from "three";
import { normalMap, texture, uv } from "three/tsl";
import { MeshPhongNodeMaterial } from "three/webgpu";

export class GroundSphere extends Mesh {
	constructor(
		diffuseTexture: Texture,
		normalTexture: Texture,
		radius = 100,
		uvScale = 5,
	) {
		const uvTile = uv().mul(uvScale);

		const geometry = new SphereGeometry(radius, 64, 64);
		const material = new MeshPhongNodeMaterial({
			colorNode: texture(diffuseTexture, uvTile),
			normalNode: normalMap(texture(normalTexture, uvTile)),
		});

		super(geometry, material);
	}
}
