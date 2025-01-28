import { resolve } from "node:path";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

export default defineConfig({
	root: resolve(__dirname, "src"),
	base: "/sketches/",
	build: {
		outDir: resolve(__dirname, "../../112KA.github.io/sketches"),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				"gpgpu-particle-bravo": resolve(
					"src/gpgpu-particle-bravo",
					"index.html",
				),
				// 'gpgpu-trails': resolve('src/gpgpu-trails', 'index.html'),
				// grass: resolve('src/grass', 'index.html'),
				// gradation: resolve('src/gradation', 'index.html'),
				instanced_skinned_mesh: resolve(
					"src/instanced_skinned_mesh",
					"index.html",
				),
				// sample1: resolve('src/sample1', 'index.html'),
				// sample2: resolve('src/sample2', 'index.html'),
			},
			output: {
				manualChunks(id) {
					if (id.includes("/x/")) {
						return "x";
					}

					if (id.includes("/x3/")) {
						return "x3";
					}

					if (id.includes("node_modules")) return "vendor";

					console.log(id);
				},
			},
		},
	},
	plugins: [glslify()],
	assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.frag"],
	resolve: {
		alias: {
			x3: resolve(__dirname, "./src/x3"),
		},
	},
});
