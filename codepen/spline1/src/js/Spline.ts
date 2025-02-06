import * as THREE from "three";
import { N_DIVIDE } from "./Config";
import type { Card } from "./Card";

export type NodePosition = [number, number, number];
type Point = THREE.Vector3 & {
	/**
	 * 外向きベクトル
	 */
	outward: THREE.Vector3;
	/**
	 * 進行方向ベクトル
	 */
	targetDirection: THREE.Vector3;
	quaternion: THREE.Quaternion;
};

export class Spline {
	public offsetAddScale = 1;
	public positionOffsetLength = 2;
	public points: Point[];
	public model: THREE.Line;
	public endOffset = 850;

	buildPoints(nodes: NodePosition[]) {
		const curvePoints: THREE.Vector3[] = [];
		for (const node of nodes) {
			curvePoints.push(new THREE.Vector3(node[0], node[1], node[2]));
		}

		const curve = new THREE.CatmullRomCurve3(curvePoints);
		this.points = curve.getPoints(N_DIVIDE) as Point[];

		const cardNormal = new THREE.Vector3(0, 0, 1);
		const cardDirection = new THREE.Vector3(0, 1, 0);
		const lineAB = new THREE.Vector3();
		const lineBC = new THREE.Vector3();
		const attitudeQuaternion = new THREE.Quaternion();
		const directionQuaternion = new THREE.Quaternion();
		let radians: number;

		/*
      !姿勢制御参考
      http://marupeke296.com/DXG_No16_AttitudeControl.html
    */

		for (let i = 1; i < this.points.length - 1; i++) {
			const pA = this.points[i - 1];
			const pB = this.points[i];
			const pC = this.points[i + 1];

			lineAB.subVectors(pB, pA).normalize(); // 線AB
			lineBC.subVectors(pC, pB).normalize(); // 線BC
			pB.outward = lineAB.sub(lineBC).normalize().clone(); // 点Bでの外向き単位ベクトル

			// @preserve 姿勢合わせ回転
			// verticalVector.crossVectors(cardNormal, pB.target).normalize()  //カード面の法線と目標(点B)ベクトルに垂直なベクトル
			const verticalVector = cardNormal.clone().cross(pB.outward); // カード面の法線と目標(点B)ベクトルに垂直なベクトル
			verticalVector.normalize();
			// console.log('verticalVector', i, pB.target, verticalVector)
			radians = Math.acos(cardNormal.dot(pB.outward)); // 回転角度
			attitudeQuaternion.setFromAxisAngle(verticalVector, radians);

			// !ベクトルをある平面に射影したい
			// 参考) http://www.thothchildren.com/chapter/5b670e772787593b86356103
			pB.targetDirection = lineBC.clone();
			pB.targetDirection.sub(
				pB.outward.clone().multiplyScalar(pB.outward.dot(lineBC)),
			);
			pB.targetDirection.normalize();

			// 方向合わせ回転
			const localDirection = cardDirection.clone();
			localDirection.applyQuaternion(attitudeQuaternion);

			radians = Math.acos(pB.targetDirection.dot(localDirection));

			// このときの回転角度が時計回りかどうかを調べる
			localDirection.cross(pB.targetDirection);
			const code = localDirection.dot(pB.outward) > 0 ? 1 : -1;

			directionQuaternion.setFromAxisAngle(pB.outward, code * radians);

			pB.quaternion = new THREE.Quaternion();
			pB.quaternion.multiply(directionQuaternion);
			pB.quaternion.multiply(attitudeQuaternion);
		}

		// 最初と最後の点に値代入
		this.points[0].quaternion = this.points[1].quaternion;
		this.points[0].outward = this.points[1].outward;
		this.points[this.points.length - 1].quaternion =
			this.points[this.points.length - 2].quaternion;
		this.points[this.points.length - 1].outward =
			this.points[this.points.length - 2].outward;
	}

	addCard(card: Card) {
		card.spline = this;
		card.offsetAdd = (2 + 2 * Math.random()) * this.offsetAddScale;
	}

	/**
	 * 線のモデル
	 */
	buildModel() {
		// スプラインの線
		this.model = new THREE.Line(
			new THREE.BufferGeometry().setFromPoints(this.points),
			new THREE.LineBasicMaterial({ color: 0xffffff }),
		);

		// スプライン上の分割点
		this.model.add(
			new THREE.Points(
				new THREE.BufferGeometry().setFromPoints(this.points),
				new THREE.PointsMaterial({
					// 一つ一つのサイズ
					size: 50,
					// 色
					color: 0x00ff00,
				}),
			),
		);

		const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
		// スプライン上の各分割点における外向きベクトルの線
		for (const p of this.points) {
			const outward = p.outward.clone().multiplyScalar(100);
			const points = [p, outward.addVectors(outward, p)];
			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			this.model.add(new THREE.Line(geometry, lineMaterial));
		}
	}
}
