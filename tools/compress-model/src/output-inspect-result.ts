import { exec } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

export const outputInspectResult = (inputFilePath: string, srcDir = "") => {
	const outputDir = join(dirname(srcDir + inputFilePath), "inspect");
	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}
	const outputFilePath = join(outputDir, basename(inputFilePath).replace(/(\.gltf|\.glb)$/i, ".md"));

	return new Promise<void>((resolve, reject) => {
		exec(
			`gltf-transform inspect ${srcDir}${inputFilePath} --format md`,
			{ encoding: "utf8" },
			(err, stdout, stderr) => {
				if (err || stderr) {
					console.error(`stderr: ${stderr}`);
					reject(err || new Error(stderr));
					return;
				}
				writeFileSync(outputFilePath, stdout, "utf8");
				resolve();
			},
		);
	});
};
