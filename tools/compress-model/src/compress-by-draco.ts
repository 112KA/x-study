import { exec } from "node:child_process";
import { promisify } from "node:util";

export const compressByDraco = async (inputFilePath: string, srcDir = "", dstDir = "") => {
	const outputFilePath = inputFilePath.replace(/(\.gltf|\.glb)$/i, ".draco$1");

	const execAsync = promisify(exec);
	const cmd = `gltf-transform draco ${srcDir}${inputFilePath} ${dstDir}${outputFilePath}`;
	console.log(`Running: ${cmd}`);

	try {
		const { stdout, stderr } = await execAsync(cmd);
		if (stdout) console.log(stdout);
		if (stderr) console.error(stderr);
	} catch (error) {
		console.error(`Error compressing ${inputFilePath}:`, error);
	}
};
