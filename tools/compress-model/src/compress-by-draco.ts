import { exec } from "node:child_process";

export const compressByDraco = async (inputFileName: string) => {
	const outputFileName = inputFileName.replace(/(\.gltf|\.glb)$/i, ".draco$1");

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform draco ${inputFileName} ${outputFileName}`, (err, _stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			resolve();
		});
	});
};
