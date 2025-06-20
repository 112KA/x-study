import { exec } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

export const outputInspectResult = (inputFileName: string) => {
	const outputDir = join(dirname(inputFileName), "inspect");
	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}
	const outputFileName = join(outputDir, basename(inputFileName).replace(/(\.gltf|\.glb)$/i, ".md"));

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform inspect ${inputFileName} --format md`, { encoding: "utf8" }, (err, stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			writeFileSync(outputFileName, stdout, "utf8");
			resolve();
		});
	});
};
