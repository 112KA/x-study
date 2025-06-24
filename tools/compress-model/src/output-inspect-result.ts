import { exec } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { promisify } from "node:util";

export const outputInspectResult = async (inputFilePath: string, srcDir = "") => {
	const outputDir = join(dirname(srcDir + inputFilePath), "inspect");
	if (!existsSync(outputDir)) {
		mkdirSync(outputDir, { recursive: true });
	}
	const outputFilePath = join(outputDir, basename(inputFilePath).replace(/(\.gltf|\.glb)$/i, ".md"));

	const execAsync = promisify(exec);
	const cmd = `gltf-transform inspect ${srcDir}${inputFilePath} --format md`;
	console.log(`Running: ${cmd}`);

	try {
		const { stdout, stderr } = await execAsync(cmd, { encoding: "utf8" });
		if (stdout) console.log(stdout);
		if (stderr) console.error(stderr);

		writeFileSync(outputFilePath, stdout, "utf8");
	} catch (error) {
		console.error(`Error inspecting ${inputFilePath}:`, error);
	}
};
