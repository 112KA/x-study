import { resolve } from "node:path";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

export default defineConfig({
	root: resolve(__dirname, "src"),
	base: "/sketches/",
	build: {
		outDir: resolve(__dirname, "../../112KA.github.io/sketches"),
		emptyOutDir: false,
		rollupOptions: {
			input: {},
			output: {
				manualChunks(id) {
					if (id.includes("/x/")) {
						return "x";
					}

					if (id.includes("/x3/")) {
						return "x3";
					}

					if (id.includes("node_modules")) return "vendor";
				},
			},
		},
	},
	plugins: [glslify()],
	assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.frag"],
	resolve: {
		alias: {
			x3: resolve(__dirname, "./src/x3_src"),
		},
	},
});
