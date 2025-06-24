import { exec } from "node:child_process";
import { promisify } from "node:util";
import { listModelFiles } from "./utils.js";

const srcDir = process.argv[2] || "models/";
const dstDir = process.argv[3] || "models/";

const modelFiles = await listModelFiles(srcDir);
console.log({ srcDir, dstDir, modelFiles });

if (modelFiles.length === 0) {
	console.warn(`[${srcDir}] No model files found.`);
	process.exit(1);
}

const execAsync = promisify(exec);

for (const file of modelFiles) {
	const cmd = `pnpm compress "${file}" "${srcDir}" "${dstDir}"`;
	try {
		console.log(`Running: ${cmd}`);
		const { stdout, stderr } = await execAsync(cmd);
		if (stdout) console.log(stdout);
		if (stderr) console.error(stderr);
	} catch (error) {
		console.error(`Error compressing ${file}:`, error);
	}
}
