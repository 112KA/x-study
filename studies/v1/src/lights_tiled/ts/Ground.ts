import { Mesh, PlaneGeometry, RepeatWrapping, type Texture } from "three";
import { normalMap, texture, uv } from "three/tsl";
import { MeshPhongNodeMaterial } from "three/webgpu";

export class Ground extends Mesh {
	constructor(
		diffuseTexture: Texture,
		normalTexture: Texture,
		size = 1000,
		uvScale = 10,
	) {
		const uvTile = uv().mul(uvScale);

		const geometry = new PlaneGeometry(size, size);
		const material = new MeshPhongNodeMaterial({
			colorNode: texture(diffuseTexture, uvTile),
			normalNode: normalMap(texture(normalTexture, uvTile)),
		});

		super(geometry, material);

		// 地面として配置
		this.rotation.x = -Math.PI / 2;
		this.position.y = 0;
	}
}
