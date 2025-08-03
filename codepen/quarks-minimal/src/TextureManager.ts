import { type Texture, TextureLoader } from "three";

/**
 * Texture loading manager
 */
export class TextureManager {
	private loader: TextureLoader;

	constructor() {
		this.loader = new TextureLoader();
	}

	/**
	 * Load texture and return promise
	 */
	public loadTexture(texturePath: string): Promise<Texture> {
		return new Promise((resolve, reject) => {
			this.loader.load(
				texturePath,
				(texture) => {
					texture.name = texturePath;
					resolve(texture);
				},
				undefined, // onProgress callback (optional)
				(error) => {
					console.error("Failed to load texture:", error);
					reject(error);
				},
			);
		});
	}
}
