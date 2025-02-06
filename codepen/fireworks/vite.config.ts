import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	build: {
		minify: false,
		outDir: "../dist",
		assetsDir: ".",
		emptyOutDir: true,
		modulePreload: {
			polyfill: false,
		},
		rollupOptions: {
			output: {
				chunkFileNames: "vendor/[hash].js",
				entryFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
				minifyInternalExports: false, // importしたクラス名を省略しない設定
				manualChunks: {
					three: ["three"],
					threeAddons: ["three/addons/controls/OrbitControls.js"],
					lumaWeb: ["@lumaai/luma-web"],
					threeQuarks: ["three.quarks"],
				},
			},
		},
	},
});
