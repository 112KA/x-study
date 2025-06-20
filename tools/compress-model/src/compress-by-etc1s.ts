import { exec } from "node:child_process";

export const compressByEtc1s = async (inputFileName: string) => {
	const outputFileName = inputFileName.replace(/(\.gltf|\.glb)$/i, ".etc1s$1");

	return new Promise<void>((resolve, reject) => {
		exec(`gltf-transform etc1s ${inputFileName} ${outputFileName}`, (err, _stdout, stderr) => {
			if (err || stderr) {
				console.error(`stderr: ${stderr}`);
				reject(err || new Error(stderr));
				return;
			}
			resolve();
		});
	});
};
