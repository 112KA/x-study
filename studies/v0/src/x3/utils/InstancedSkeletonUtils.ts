import { type Bone, type Object3D, Shader, SkinnedMesh } from "three";
import { InstancedSkinnedMeshBasicMaterial } from "x3/materials/InstancedSkinnedMeshBasicMaterial";
import { InstancedSkeleton } from "x3/objects/InstancedSkeleton";
import { InstancedSkinnedMesh } from "x3/objects/InstancedSkinnedMesh";

export const InstancedSkeletonUtils = {
	convertToInstancedObject(source: Object3D, count: number): Object3D {
		// console.log('convertToInstancedObject', { source: source.children, clone: clone.children })

		const clone = InstancedSkeletonUtils.replaceInstancedObject(source, count);

		const sourceLookup = new Map<Object3D, Object3D>();
		const cloneLookup = new Map<Object3D, Object3D>();

		InstancedSkeletonUtils.parallelTraverse(source, clone, (sourceNode: Object3D, clonedNode: Object3D) => {
			sourceLookup.set(clonedNode, sourceNode);
			cloneLookup.set(sourceNode, clonedNode);
		});

		clone.traverse((node: Object3D) => {
			// console.log('traverse', { node })
			if (node instanceof InstancedSkinnedMesh) {
				const clonedMesh = node;
				const sourceMesh = sourceLookup.get(node);
				const sourceBones = (sourceMesh as SkinnedMesh).skeleton.bones;

				clonedMesh.skeleton.bones = sourceBones.map((bone: Bone) => {
					const clonedBone = cloneLookup.get(bone);
					clonedBone?.matrixWorld.copy(bone.matrixWorld);
					return clonedBone as Bone;
				});
			}
		});

		return clone;
	},

	replaceInstancedObject(source: Object3D, count: number): Object3D {
		// console.log('convertToInstancedObject', { source, count })
		let clone: Object3D;
		if (source instanceof SkinnedMesh) {
			const { geometry, material } = source;
			const m = new InstancedSkinnedMesh(geometry, material, count).copy(source);
			m.material = new InstancedSkinnedMeshBasicMaterial({
				map: material.map,
			});

			const { bones, boneInverses } = source.skeleton;
			const skeleton = new InstancedSkeleton(bones, boneInverses, count);
			m.bind(skeleton, source.bindMatrix);
			clone = m;
		} else {
			clone = source.clone(false);
		}

		for (let i = 0; i < source.children.length; i++) {
			const child = InstancedSkeletonUtils.replaceInstancedObject(source.children[i], count);
			clone.add(child);
		}
		return clone;
	},

	parallelTraverse(a: Object3D, b: Object3D, callback: (a: Object3D, b: Object3D) => void) {
		callback(a, b);
		a;
		for (let i = 0; i < a.children.length; i++) {
			InstancedSkeletonUtils.parallelTraverse(a.children[i], b.children[i], callback);
		}
	},
};
