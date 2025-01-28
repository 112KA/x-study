/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismtargetpoint.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/math/cubismmath.ts":
/*!**************************************!*\
  !*** ./Framework/math/cubismmath.ts ***!
  \**************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismvector2 */ "./Framework/math/cubismvector2.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismVector2 = _cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 数値計算などに使用するユーティリティクラス
     */
    var CubismMath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMath() {
        }
        /**
         * 第一引数の値を最小値と最大値の範囲に収めた値を返す
         *
         * @param value 収められる値
         * @param min   範囲の最小値
         * @param max   範囲の最大値
         * @return 最小値と最大値の範囲に収めた値
         */
        CubismMath.range = function (value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        };
        /**
         * サイン関数の値を求める
         *
         * @param x 角度値（ラジアン）
         * @return サイン関数sin(x)の値
         */
        CubismMath.sin = function (x) {
            return Math.sin(x);
        };
        /**
         * コサイン関数の値を求める
         *
         * @param x 角度値(ラジアン)
         * @return コサイン関数cos(x)の値
         */
        CubismMath.cos = function (x) {
            return Math.cos(x);
        };
        /**
         * 値の絶対値を求める
         *
         * @param x 絶対値を求める値
         * @return 値の絶対値
         */
        CubismMath.abs = function (x) {
            return Math.abs(x);
        };
        /**
         * 平方根(ルート)を求める
         * @param x -> 平方根を求める値
         * @return 値の平方根
         */
        CubismMath.sqrt = function (x) {
            return Math.sqrt(x);
        };
        /**
         * イージング処理されたサインを求める
         * フェードイン・アウト時のイージングに利用できる
         *
         * @param value イージングを行う値
         * @return イージング処理されたサイン値
         */
        CubismMath.getEasingSine = function (value) {
            if (value < 0.0) {
                return 0.0;
            }
            else if (value > 1.0) {
                return 1.0;
            }
            return 0.5 - 0.5 * this.cos(value * Math.PI);
        };
        /**
         * 大きい方の値を返す
         *
         * @param left 左辺の値
         * @param right 右辺の値
         * @return 大きい方の値
         */
        CubismMath.max = function (left, right) {
            return (left > right)
                ? left
                : right;
        };
        /**
         * 小さい方の値を返す
         *
         * @param left  左辺の値
         * @param right 右辺の値
         * @return 小さい方の値
         */
        CubismMath.min = function (left, right) {
            return (left > right)
                ? right
                : left;
        };
        /**
         * 角度値をラジアン値に変換する
         *
         * @param degrees   角度値
         * @return 角度値から変換したラジアン値
         */
        CubismMath.degreesToRadian = function (degrees) {
            return (degrees / 180.0) * Math.PI;
        };
        /**
         * ラジアン値を角度値に変換する
         *
         * @param radian    ラジアン値
         * @return ラジアン値から変換した角度値
         */
        CubismMath.radianToDegrees = function (radian) {
            return (radian * 180.0) / Math.PI;
        };
        /**
         * ２つのベクトルからラジアン値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return ラジアン値から求めた方向ベクトル
         */
        CubismMath.directionToRadian = function (from, to) {
            var q1 = Math.atan2(to.y, to.x);
            var q2 = Math.atan2(from.y, from.x);
            var ret = q1 - q2;
            while (ret < -Math.PI) {
                ret += Math.PI * 2.0;
            }
            while (ret > Math.PI) {
                ret -= Math.PI * 2.0;
            }
            return ret;
        };
        /**
         * ２つのベクトルから角度値を求める
         *
         * @param from  始点ベクトル
         * @param to    終点ベクトル
         * @return 角度値から求めた方向ベクトル
         */
        CubismMath.directionToDegrees = function (from, to) {
            var radian = this.directionToRadian(from, to);
            var degree = this.radianToDegrees(radian);
            if ((to.x - from.x) > 0.0) {
                degree = -degree;
            }
            return degree;
        };
        /**
         * ラジアン値を方向ベクトルに変換する。
         *
         * @param totalAngle    ラジアン値
         * @return ラジアン値から変換した方向ベクトル
         */
        CubismMath.radianToDirection = function (totalAngle) {
            var ret = new CubismVector2();
            ret.x = this.sin(totalAngle);
            ret.y = this.cos(totalAngle);
            return ret;
        };
        return CubismMath;
    }());
    Live2DCubismFramework.CubismMath = CubismMath;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismtargetpoint.ts":
/*!*********************************************!*\
  !*** ./Framework/math/cubismtargetpoint.ts ***!
  \*********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmath */ "./Framework/math/cubismmath.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMath = _cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var FrameRate = 30;
    var Epsilon = 0.01;
    /**
     * 顔の向きの制御機能
     *
     * 顔の向きの制御機能を提供するクラス。
     */
    var CubismTargetPoint = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTargetPoint() {
            this._faceTargetX = 0.0;
            this._faceTargetY = 0.0;
            this._faceX = 0.0;
            this._faceY = 0.0;
            this._faceVX = 0.0;
            this._faceVY = 0.0;
            this._lastTimeSeconds = 0.0;
            this._userTimeSeconds = 0.0;
        }
        /**
         * 更新処理
         */
        CubismTargetPoint.prototype.update = function (deltaTimeSeconds) {
            // デルタ時間を加算する
            this._userTimeSeconds += deltaTimeSeconds;
            // 首を中央から左右に振るときの平均的な速さは　秒速度。加速・減速を考慮して、その２倍を最高速度とする
            // 顔の振り具合を、中央（0.0）から、左右は（+-1.0）とする
            var faceParamMaxV = 40.0 / 10.0; // 7.5秒間に40分移動(5.3/sc)
            var maxV = faceParamMaxV * 1.0 / FrameRate; // 1frameあたりに変化できる速度の上限
            if (this._lastTimeSeconds == 0.0) {
                this._lastTimeSeconds = this._userTimeSeconds;
                return;
            }
            var deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
            this._lastTimeSeconds = this._userTimeSeconds;
            // 最高速度になるまでの時間を
            var timeToMaxSpeed = 0.15;
            var frameToMaxSpeed = timeToMaxSpeed * FrameRate; // sec * frame/sec
            var maxA = deltaTimeWeight * maxV / frameToMaxSpeed; // 1frameあたりの加速度
            // 目指す向きは、（dx, dy）方向のベクトルとなる
            var dx = this._faceTargetX - this._faceX;
            var dy = this._faceTargetY - this._faceY;
            if (CubismMath.abs(dx) <= Epsilon && CubismMath.abs(dy) <= Epsilon) {
                return; // 変化なし
            }
            // 速度の最大よりも大きい場合は、速度を落とす
            var d = CubismMath.sqrt((dx * dx) + (dy * dy));
            // 進行方向の最大速度ベクトル
            var vx = maxV * dx / d;
            var vy = maxV * dy / d;
            // 現在の速度から、新規速度への変化（加速度）を求める
            var ax = vx - this._faceVX;
            var ay = vy - this._faceVY;
            var a = CubismMath.sqrt((ax * ax) + (ay * ay));
            // 加速のとき
            if (a < -maxA || a > maxA) {
                ax *= maxA / a;
                ay *= maxA / a;
            }
            // 加速度を元の速度に足して、新速度とする
            this._faceVX += ax;
            this._faceVY += ay;
            // 目的の方向に近づいたとき、滑らかに減速するための処理
            // 設定された加速度で止まる事の出来る距離と速度の関係から
            // 現在とりうる最高速度を計算し、それ以上の時は速度を落とす
            // ※本来、人間は筋力で力（加速度）を調整できるため、より自由度が高いが、簡単な処理で済ませている
            {
                // 加速度、速度、距離の関係式。
                //            2  6           2               3
                //      sqrt(a  t  + 16 a h t  - 8 a h) - a t
                // v = --------------------------------------
                //                    2
                //                 4 t  - 2
                // (t=1)
                // 	時刻tは、あらかじめ加速度、速度を1/60(フレームレート、単位なし)で
                // 	考えているので、t＝１として消してよい（※未検証）
                var maxV_1 = 0.5 * (CubismMath.sqrt((maxA * maxA) + 16.0 * maxA * d - 8.0 * maxA * d) - maxA);
                var curV = CubismMath.sqrt((this._faceVX * this._faceVX) + (this._faceVY * this._faceVY));
                if (curV > maxV_1) {
                    // 現在の速度 > 最高速度のとき、最高速度まで減速
                    this._faceVX *= maxV_1 / curV;
                    this._faceVY *= maxV_1 / curV;
                }
            }
            this._faceX += this._faceVX;
            this._faceY += this._faceVY;
        };
        /**
         * X軸の顔の向きの値を取得
         *
         * @return X軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.getX = function () {
            return this._faceX;
        };
        /**
         * Y軸の顔の向きの値を取得
         *
         * @return Y軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.getY = function () {
            return this._faceY;
        };
        /**
         * 顔の向きの目標値を設定
         *
         * @param x X軸の顔の向きの値（-1.0 ~ 1.0）
         * @param y Y軸の顔の向きの値（-1.0 ~ 1.0）
         */
        CubismTargetPoint.prototype.set = function (x, y) {
            this._faceTargetX = x;
            this._faceTargetY = y;
        };
        return CubismTargetPoint;
    }());
    Live2DCubismFramework.CubismTargetPoint = CubismTargetPoint;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismvector2.ts":
/*!*****************************************!*\
  !*** ./Framework/math/cubismvector2.ts ***!
  \*****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 2次元ベクトル型
     *
     * 2次元ベクトル型の機能を提供する。
     */
    var CubismVector2 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismVector2(x, y) {
            this.x = x;
            this.y = y;
            this.x = (x == undefined)
                ? 0.0
                : x;
            this.y = (y == undefined)
                ? 0.0
                : y;
        }
        /**
         * ベクトルの加算
         *
         * @param vector2 加算するベクトル値
         * @return 加算結果 ベクトル値
         */
        CubismVector2.prototype.add = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x + vector2.x;
            ret.y = this.y + vector2.y;
            return ret;
        };
        /**
         * ベクトルの減算
         *
         * @param vector2 減算するベクトル値
         * @return 減算結果 ベクトル値
         */
        CubismVector2.prototype.substract = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x - vector2.x;
            ret.y = this.y - vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算
         *
         * @param vector2 乗算するベクトル値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiply = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x * vector2.x;
            ret.y = this.y * vector2.y;
            return ret;
        };
        /**
         * ベクトルの乗算(スカラー)
         *
         * @param scalar 乗算するスカラー値
         * @return 乗算結果　ベクトル値
         */
        CubismVector2.prototype.multiplyByScaler = function (scalar) {
            return this.multiply(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの除算
         *
         * @param vector2 除算するベクトル値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.division = function (vector2) {
            var ret = new CubismVector2(0.0, 0.0);
            ret.x = this.x / vector2.x;
            ret.y = this.y / vector2.y;
            return ret;
        };
        /**
         * ベクトルの除算(スカラー)
         *
         * @param scalar 除算するスカラー値
         * @return 除算結果　ベクトル値
         */
        CubismVector2.prototype.divisionByScalar = function (scalar) {
            return this.division(new CubismVector2(scalar, scalar));
        };
        /**
         * ベクトルの長さを取得する
         *
         * @return ベクトルの長さ
         */
        CubismVector2.prototype.getLength = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        /**
         * ベクトルの距離の取得
         *
         * @param a 点
         * @return ベクトルの距離
         */
        CubismVector2.prototype.getDistanceWith = function (a) {
            return Math.sqrt(((this.x - a.x) * (this.x - a.x)) + ((this.y - a.y) * (this.y - a.y)));
        };
        /**
         * ドット積の計算
         *
         * @param a 値
         * @return 結果
         */
        CubismVector2.prototype.dot = function (a) {
            return (this.x * a.x) + (this.y * a.y);
        };
        /**
         * 正規化の適用
         */
        CubismVector2.prototype.normalize = function () {
            var length = Math.pow((this.x * this.x) + (this.y * this.y), 0.5);
            this.x = this.x / length;
            this.y = this.y / length;
        };
        /**
         * 等しさの確認（等しいか？）
         *
         * 値が等しいか？
         *
         * @param rhs 確認する値
         * @return true 値は等しい
         * @return false 値は等しくない
         */
        CubismVector2.prototype.isEqual = function (rhs) {
            return (this.x == rhs.x) && (this.y == rhs.y);
        };
        /**
         * 等しさの確認（等しくないか？）
         *
         * 値が等しくないか？
         *
         * @param rhs 確認する値
         * @return true 値は等しくない
         * @return false 値は等しい
         */
        CubismVector2.prototype.isNotEqual = function (rhs) {
            return !(this.isEqual(rhs));
        };
        return CubismVector2;
    }());
    Live2DCubismFramework.CubismVector2 = CubismVector2;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbWF0aC9jdWJpc210YXJnZXRwb2ludC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbWF0aC9jdWJpc212ZWN0b3IyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFb0U7QUFDdkUsSUFBTyxhQUFhLEdBQUcsb0VBQWEsQ0FBQyxhQUFhLENBQUM7QUFFNUMsSUFBVSxxQkFBcUIsQ0F1TnJDO0FBdk5ELFdBQWlCLHFCQUFxQjtJQUVsQzs7T0FFRztJQUNIO1FBME1LOztXQUVHO1FBQ0g7UUFHQSxDQUFDO1FBOU1GOzs7Ozs7O1dBT0c7UUFDSSxn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LEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFNUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzdCLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLCtCQUFPLEdBQWQsVUFBZSxHQUFrQjtZQUU3QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDSSxrQ0FBVSxHQUFqQixVQUFrQixHQUFrQjtZQUVoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FBQztJQXBLWSxtQ0FBYSxnQkFvS3pCO0FBQ0wsQ0FBQyxFQTVLZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTRLckMiLCJmaWxlIjoiL21hdGgvY3ViaXNtdGFyZ2V0cG9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tYXRoL2N1YmlzbXRhcmdldHBvaW50LnRzXCIpO1xuIiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc212ZWN0b3IyfSBmcm9tIFwiLi9jdWJpc212ZWN0b3IyXCI7XHJcbmltcG9ydCBDdWJpc21WZWN0b3IyID0gY3ViaXNtdmVjdG9yMi5DdWJpc21WZWN0b3IyO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDlgKToqIjnrpfjgarjganjgavkvb/nlKjjgZnjgovjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdGhcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnrKzkuIDlvJXmlbDjga7lgKTjgpLmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKTjgpLov5TjgZlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Y+O44KB44KJ44KM44KL5YCkXHJcbiAgICAgICAgICogQHBhcmFtIG1pbiAgIOevhOWbsuOBruacgOWwj+WApFxyXG4gICAgICAgICAqIEBwYXJhbSBtYXggICDnr4Tlm7Ljga7mnIDlpKflgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOacgOWwj+WApOOBqOacgOWkp+WApOOBruevhOWbsuOBq+WPjuOCgeOBn+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyByYW5nZSh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IG1pbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbWF4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOODs+mWouaVsOOBruWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOinkuW6puWApO+8iOODqeOCuOOCouODs++8iVxyXG4gICAgICAgICAqIEByZXR1cm4g44K144Kk44Oz6Zai5pWwc2luKHgp44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIHNpbih4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNpbih4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+OCteOCpOODs+mWouaVsOOBruWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOinkuW6puWApCjjg6njgrjjgqLjg7MpXHJcbiAgICAgICAgICogQHJldHVybiDjgrPjgrXjgqTjg7PplqLmlbBjb3MoeCnjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgY29zKHg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY29zKHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YCk44Gu57W25a++5YCk44KS5rGC44KB44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHgg57W25a++5YCk44KS5rGC44KB44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiDlgKTjga7ntbblr77lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgYWJzKHg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bmz5pa55qC5KOODq+ODvOODiCnjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBAcGFyYW0geCAtPiDlubPmlrnmoLnjgpLmsYLjgoHjgovlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOWApOOBruW5s+aWueaguVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzcXJ0KHg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODvOOCuOODs+OCsOWHpueQhuOBleOCjOOBn+OCteOCpOODs+OCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+ODu+OCouOCpuODiOaZguOBruOCpOODvOOCuOODs+OCsOOBq+WIqeeUqOOBp+OBjeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgqTjg7zjgrjjg7PjgrDjgpLooYzjgYblgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOOCpOODvOOCuOODs+OCsOWHpueQhuOBleOCjOOBn+OCteOCpOODs+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBnZXRFYXNpbmdTaW5lKHZhbHVlOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuMDtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAtIDAuNSAqIHRoaXMuY29zKHZhbHVlICogTWF0aC5QSSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpKfjgY3jgYTmlrnjga7lgKTjgpLov5TjgZlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbGVmdCDlt6bovrrjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gcmlnaHQg5Y+z6L6644Gu5YCkXHJcbiAgICAgICAgICogQHJldHVybiDlpKfjgY3jgYTmlrnjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgbWF4KGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChsZWZ0ID4gcmlnaHQpXHJcbiAgICAgICAgICAgICAgICA/IGxlZnRcclxuICAgICAgICAgICAgICAgIDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlsI/jgZXjgYTmlrnjga7lgKTjgpLov5TjgZlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbGVmdCAg5bem6L6644Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHJpZ2h0IOWPs+i+uuOBruWApOOAgFxyXG4gICAgICAgICAqIEByZXR1cm4g5bCP44GV44GE5pa544Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIG1pbihsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgPyByaWdodFxyXG4gICAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KeS5bqm5YCk44KS44Op44K444Ki44Oz5YCk44Gr5aSJ5o+b44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGRlZ3JlZXMgICDop5LluqblgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOinkuW6puWApOOBi+OCieWkieaPm+OBl+OBn+ODqeOCuOOCouODs+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBkZWdyZWVzVG9SYWRpYW4oZGVncmVlczogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGRlZ3JlZXMgLyAxODAuMCkgKiBNYXRoLlBJO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Op44K444Ki44Oz5YCk44KS6KeS5bqm5YCk44Gr5aSJ5o+b44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHJhZGlhbiAgICDjg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+inkuW6puWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyByYWRpYW5Ub0RlZ3JlZXMocmFkaWFuOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAocmFkaWFuICogMTgwLjApIC8gTWF0aC5QSTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIO+8kuOBpOOBruODmeOCr+ODiOODq+OBi+OCieODqeOCuOOCouODs+WApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBmcm9tICDlp4vngrnjg5njgq/jg4jjg6tcclxuICAgICAgICAgKiBAcGFyYW0gdG8gICAg57WC54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHJldHVybiDjg6njgrjjgqLjg7PlgKTjgYvjgonmsYLjgoHjgZ/mlrnlkJHjg5njgq/jg4jjg6tcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZGlyZWN0aW9uVG9SYWRpYW4oZnJvbTogQ3ViaXNtVmVjdG9yMiwgdG86IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHExOiBudW1iZXIgPSBNYXRoLmF0YW4yKHRvLnksIHRvLngpO1xyXG4gICAgICAgICAgICBjb25zdCBxMjogbnVtYmVyID0gTWF0aC5hdGFuMihmcm9tLnksIGZyb20ueCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmV0OiBudW1iZXIgPSBxMSAtIHEyO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUocmV0IDwgLU1hdGguUEkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBNYXRoLlBJICogMi4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZShyZXQgPiBNYXRoLlBJKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQgLT0gTWF0aC5QSSAqIDIuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIO+8kuOBpOOBruODmeOCr+ODiOODq+OBi+OCieinkuW6puWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBmcm9tICDlp4vngrnjg5njgq/jg4jjg6tcclxuICAgICAgICAgKiBAcGFyYW0gdG8gICAg57WC54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonmsYLjgoHjgZ/mlrnlkJHjg5njgq/jg4jjg6tcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZGlyZWN0aW9uVG9EZWdyZWVzKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpYW46IG51bWJlciA9IHRoaXMuZGlyZWN0aW9uVG9SYWRpYW4oZnJvbSwgdG8pO1xyXG4gICAgICAgICAgICBsZXQgZGVncmVlOiBudW1iZXIgPSB0aGlzLnJhZGlhblRvRGVncmVlcyhyYWRpYW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCh0by54IC0gZnJvbS54KSA+IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVncmVlID0gLWRlZ3JlZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuaWueWQkeODmeOCr+ODiOODq+OBq+WkieaPm+OBmeOCi+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB0b3RhbEFuZ2xlICAgIOODqeOCuOOCouODs+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5aSJ5o+b44GX44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICBzdGF0aWMgcmFkaWFuVG9EaXJlY3Rpb24odG90YWxBbmdsZTogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigpO1xyXG5cclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnNpbih0b3RhbEFuZ2xlKTtcclxuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLmNvcyh0b3RhbEFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8qKlxyXG4gICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgICovXHJcbiAgICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxyXG4gICAgICAgICB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdGh9IGZyb20gXCIuL2N1YmlzbW1hdGhcIjtcclxuaW1wb3J0IEN1YmlzbU1hdGggPSBjdWJpc21tYXRoLkN1YmlzbU1hdGg7XHJcblxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgY29uc3QgRnJhbWVSYXRlOiBudW1iZXIgPSAzMDtcclxuICAgIGNvbnN0IEVwc2lsb246IG51bWJlciA9IDAuMDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpoZTjga7lkJHjgY3jga7liLblvqHmqZ/og71cclxuICAgICAqIFxyXG4gICAgICog6aGU44Gu5ZCR44GN44Gu5Yi25b6h5qmf6IO944KS5o+Q5L6b44GZ44KL44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UYXJnZXRQb2ludFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9mYWNlVGFyZ2V0WCA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fZmFjZVRhcmdldFkgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VYID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9mYWNlWSA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fZmFjZVZYID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9mYWNlVlkgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lU2Vjb25kcyA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmm7TmlrDlh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlKGRlbHRhVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOODh+ODq+OCv+aZgumWk+OCkuWKoOeul+OBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKz0gZGVsdGFUaW1lU2Vjb25kcztcclxuXHJcbiAgICAgICAgICAgIC8vIOmmluOCkuS4reWkruOBi+OCieW3puWPs+OBq+aMr+OCi+OBqOOBjeOBruW5s+Wdh+eahOOBqumAn+OBleOBr+OAgOenkumAn+W6puOAguWKoOmAn+ODu+a4m+mAn+OCkuiAg+aFruOBl+OBpuOAgeOBneOBru+8kuWAjeOCkuacgOmrmOmAn+W6puOBqOOBmeOCi1xyXG4gICAgICAgICAgICAvLyDpoZTjga7mjK/jgorlhbflkIjjgpLjgIHkuK3lpK7vvIgwLjDvvInjgYvjgonjgIHlt6blj7Pjga/vvIgrLTEuMO+8ieOBqOOBmeOCi1xyXG4gICAgICAgICAgICBjb25zdCBmYWNlUGFyYW1NYXhWOiBudW1iZXIgPSA0MC4wIC8gMTAuMDsgICAgICAgICAgICAgIC8vIDcuNeenkumWk+OBqzQw5YiG56e75YuVKDUuMy9zYylcclxuICAgICAgICAgICAgY29uc3QgbWF4VjogbnVtYmVyID0gZmFjZVBhcmFtTWF4ViAqIDEuMCAvIEZyYW1lUmF0ZTsgICAvLyAxZnJhbWXjgYLjgZ/jgorjgavlpInljJbjgafjgY3jgovpgJ/luqbjga7kuIrpmZBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2xhc3RUaW1lU2Vjb25kcyA9PSAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lU2Vjb25kcyA9IHRoaXMuX3VzZXJUaW1lU2Vjb25kcztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lV2VpZ2h0OiBudW1iZXIgPSAodGhpcy5fdXNlclRpbWVTZWNvbmRzIC0gdGhpcy5fbGFzdFRpbWVTZWNvbmRzKSAqIEZyYW1lUmF0ZTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWVTZWNvbmRzID0gdGhpcy5fdXNlclRpbWVTZWNvbmRzO1xyXG5cclxuICAgICAgICAgICAgLy8g5pyA6auY6YCf5bqm44Gr44Gq44KL44G+44Gn44Gu5pmC6ZaT44KSXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVUb01heFNwZWVkOiBudW1iZXIgPSAwLjE1O1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZVRvTWF4U3BlZWQ6IG51bWJlciA9IHRpbWVUb01heFNwZWVkICogRnJhbWVSYXRlOyAgICAgLy8gc2VjICogZnJhbWUvc2VjXHJcbiAgICAgICAgICAgIGNvbnN0IG1heEE6IG51bWJlciA9IGRlbHRhVGltZVdlaWdodCAqIG1heFYgLyBmcmFtZVRvTWF4U3BlZWQ7ICAvLyAxZnJhbWXjgYLjgZ/jgorjga7liqDpgJ/luqZcclxuXHJcbiAgICAgICAgICAgIC8vIOebruaMh+OBmeWQkeOBjeOBr+OAge+8iGR4LCBkee+8ieaWueWQkeOBruODmeOCr+ODiOODq+OBqOOBquOCi1xyXG4gICAgICAgICAgICBjb25zdCBkeDogbnVtYmVyID0gdGhpcy5fZmFjZVRhcmdldFggLSB0aGlzLl9mYWNlWDtcclxuICAgICAgICAgICAgY29uc3QgZHk6IG51bWJlciA9IHRoaXMuX2ZhY2VUYXJnZXRZIC0gdGhpcy5fZmFjZVk7XHJcblxyXG4gICAgICAgICAgICBpZihDdWJpc21NYXRoLmFicyhkeCkgPD0gRXBzaWxvbiAmJiBDdWJpc21NYXRoLmFicyhkeSkgPD0gRXBzaWxvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDlpInljJbjgarjgZdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g6YCf5bqm44Gu5pyA5aSn44KI44KK44KC5aSn44GN44GE5aC05ZCI44Gv44CB6YCf5bqm44KS6JC944Go44GZXHJcbiAgICAgICAgICAgIGNvbnN0IGQ6IG51bWJlciA9IEN1YmlzbU1hdGguc3FydCgoZHggKiBkeCkgKyAoZHkgKiBkeSkpO1xyXG5cclxuICAgICAgICAgICAgLy8g6YCy6KGM5pa55ZCR44Gu5pyA5aSn6YCf5bqm44OZ44Kv44OI44OrXHJcbiAgICAgICAgICAgIGNvbnN0IHZ4OiBudW1iZXIgPSBtYXhWICogZHggLyBkO1xyXG4gICAgICAgICAgICBjb25zdCB2eTogbnVtYmVyID0gbWF4ViAqIGR5IC8gZDtcclxuXHJcbiAgICAgICAgICAgIC8vIOePvuWcqOOBrumAn+W6puOBi+OCieOAgeaWsOimj+mAn+W6puOBuOOBruWkieWMlu+8iOWKoOmAn+W6pu+8ieOCkuaxguOCgeOCi1xyXG4gICAgICAgICAgICBsZXQgYXg6IG51bWJlciA9IHZ4IC0gdGhpcy5fZmFjZVZYO1xyXG4gICAgICAgICAgICBsZXQgYXk6IG51bWJlciA9IHZ5IC0gdGhpcy5fZmFjZVZZO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYTogbnVtYmVyID0gQ3ViaXNtTWF0aC5zcXJ0KChheCAqIGF4KSArIChheSAqIGF5KSk7XHJcblxyXG4gICAgICAgICAgICAvLyDliqDpgJ/jga7jgajjgY1cclxuICAgICAgICAgICAgaWYoYSA8IC1tYXhBIHx8IGEgPiBtYXhBKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheCAqPSBtYXhBIC8gYTtcclxuICAgICAgICAgICAgICAgIGF5ICo9IG1heEEgLyBhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliqDpgJ/luqbjgpLlhYPjga7pgJ/luqbjgavotrPjgZfjgabjgIHmlrDpgJ/luqbjgajjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5fZmFjZVZYICs9IGF4O1xyXG4gICAgICAgICAgICB0aGlzLl9mYWNlVlkgKz0gYXk7XHJcblxyXG4gICAgICAgICAgICAvLyDnm67nmoTjga7mlrnlkJHjgavov5HjgaXjgYTjgZ/jgajjgY3jgIHmu5HjgonjgYvjgavmuJvpgJ/jgZnjgovjgZ/jgoHjga7lh6bnkIZcclxuICAgICAgICAgICAgLy8g6Kit5a6a44GV44KM44Gf5Yqg6YCf5bqm44Gn5q2i44G+44KL5LqL44Gu5Ye65p2l44KL6Led6Zui44Go6YCf5bqm44Gu6Zai5L+C44GL44KJXHJcbiAgICAgICAgICAgIC8vIOePvuWcqOOBqOOCiuOBhuOCi+acgOmrmOmAn+W6puOCkuioiOeul+OBl+OAgeOBneOCjOS7peS4iuOBruaZguOBr+mAn+W6puOCkuiQveOBqOOBmVxyXG4gICAgICAgICAgICAvLyDigLvmnKzmnaXjgIHkurrplpPjga/nrYvlipvjgaflipvvvIjliqDpgJ/luqbvvInjgpLoqr/mlbTjgafjgY3jgovjgZ/jgoHjgIHjgojjgoroh6rnlLHluqbjgYzpq5jjgYTjgYzjgIHnsKHljZjjgarlh6bnkIbjgafmuIjjgb7jgZvjgabjgYTjgotcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g5Yqg6YCf5bqm44CB6YCf5bqm44CB6Led6Zui44Gu6Zai5L+C5byP44CCXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIDIgIDYgICAgICAgICAgIDIgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIHNxcnQoYSAgdCAgKyAxNiBhIGggdCAgLSA4IGEgaCkgLSBhIHRcclxuICAgICAgICAgICAgICAgIC8vIHYgPSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA0IHQgIC0gMlxyXG4gICAgICAgICAgICAgICAgLy8gKHQ9MSlcclxuICAgICAgICAgICAgICAgIC8vIFx05pmC5Yi7dOOBr+OAgeOBguOCieOBi+OBmOOCgeWKoOmAn+W6puOAgemAn+W6puOCkjEvNjAo44OV44Os44O844Og44Os44O844OI44CB5Y2Y5L2N44Gq44GXKeOBp1xyXG4gICAgICAgICAgICAgICAgLy8gXHTogIPjgYjjgabjgYTjgovjga7jgafjgIF077yd77yR44Go44GX44Gm5raI44GX44Gm44KI44GE77yI4oC75pyq5qSc6Ki877yJXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4VjogbnVtYmVyID0gMC41ICogKEN1YmlzbU1hdGguc3FydCgobWF4QSAqIG1heEEpICsgMTYuMCAqIG1heEEgKiBkIC0gOC4wICogbWF4QSAqIGQpIC0gbWF4QSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJWOiBudW1iZXIgPSBDdWJpc21NYXRoLnNxcnQoKHRoaXMuX2ZhY2VWWCAqIHRoaXMuX2ZhY2VWWCkgKyAodGhpcy5fZmFjZVZZICogdGhpcy5fZmFjZVZZKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGN1clYgPiBtYXhWKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOePvuWcqOOBrumAn+W6piA+IOacgOmrmOmAn+W6puOBruOBqOOBjeOAgeacgOmrmOmAn+W6puOBvuOBp+a4m+mAn1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZhY2VWWCAqPSBtYXhWIC8gY3VyVjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYWNlVlkgKj0gbWF4ViAvIGN1clY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VYICs9IHRoaXMuX2ZhY2VWWDtcclxuICAgICAgICAgICAgdGhpcy5fZmFjZVkgKz0gdGhpcy5fZmFjZVZZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBrumhlOOBruWQkeOBjeOBruWApOOCkuWPluW+l1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBrumhlOOBruWQkeOBjeOBruWApO+8iC0xLjAgfiAxLjDvvIlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0WCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYWNlWDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7poZTjga7lkJHjgY3jga7lgKTjgpLlj5blvpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7poZTjga7lkJHjgY3jga7lgKTvvIgtMS4wIH4gMS4w77yJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmFjZVk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpoZTjga7lkJHjgY3jga7nm67mqJnlgKTjgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu6aGU44Gu5ZCR44GN44Gu5YCk77yILTEuMCB+IDEuMO+8iVxyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7poZTjga7lkJHjgY3jga7lgKTvvIgtMS4wIH4gMS4w77yJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VUYXJnZXRYID0geDtcclxuICAgICAgICAgICAgdGhpcy5fZmFjZVRhcmdldFkgPSB5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2ZhY2VUYXJnZXRYOiBudW1iZXI7ICAgICAgIC8vIOmhlOOBruWQkeOBjeOBrljnm67mqJnlgKTvvIjjgZPjga7lgKTjgavov5HjgaXjgYTjgabjgYTjgY/vvIlcclxuICAgICAgICBwcml2YXRlIF9mYWNlVGFyZ2V0WTogbnVtYmVyOyAgICAgICAvLyDpoZTjga7lkJHjgY3jga5Z55uu5qiZ5YCk77yI44GT44Gu5YCk44Gr6L+R44Gl44GE44Gm44GE44GP77yJXHJcbiAgICAgICAgcHJpdmF0ZSBfZmFjZVg6IG51bWJlcjsgICAgICAgICAgICAgLy8g6aGU44Gu5ZCR44GNWO+8iC0xLjAgfiAxLjDvvIlcclxuICAgICAgICBwcml2YXRlIF9mYWNlWTogbnVtYmVyOyAgICAgICAgICAgICAvLyDpoZTjga7lkJHjgY1Z77yILTEuMCB+IDEuMO+8iVxyXG4gICAgICAgIHByaXZhdGUgX2ZhY2VWWDogbnVtYmVyOyAgICAgICAgICAgIC8vIOmhlOOBruWQkeOBjeOBruWkieWMlumAn+W6plhcclxuICAgICAgICBwcml2YXRlIF9mYWNlVlk6IG51bWJlcjsgICAgICAgICAgICAvLyDpoZTjga7lkJHjgY3jga7lpInljJbpgJ/luqZZXHJcbiAgICAgICAgcHJpdmF0ZSBfbGFzdFRpbWVTZWNvbmRzOiBudW1iZXI7ICAgLy8g5pyA5b6M44Gu5a6f6KGM5pmC6ZaTW+enkl1cclxuICAgICAgICBwcml2YXRlIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjsgICAvLyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxyXG5cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6LXHJcbiAgICAgKiBcclxuICAgICAqIDLmrKHlhYPjg5njgq/jg4jjg6vlnovjga7mqZ/og73jgpLmj5DkvpvjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVZlY3RvcjJcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeD86IG51bWJlciwgcHVibGljIHk/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAoeCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IDAuMFxyXG4gICAgICAgICAgICAgICAgOiB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy55ID0gKHkgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyAwLjBcclxuICAgICAgICAgICAgICAgIDogeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5Yqg566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5Yqg566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDliqDnrpfntZDmnpwg44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKyB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICsgdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7muJvnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDmuJvnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOa4m+eul+e1kOaenCDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3Vic3RyYWN0KHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xyXG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCAtIHZlY3RvcjIueDtcclxuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgLSB2ZWN0b3IyLnk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruS5l+eul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOS5l+eul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5KHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xyXG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCAqIHZlY3RvcjIueDtcclxuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgKiB2ZWN0b3IyLnk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruS5l+eulyjjgrnjgqvjg6njg7wpXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHNjYWxhciDkuZfnrpfjgZnjgovjgrnjgqvjg6njg7zlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5U2NhbGVyKHNjYWxhcjogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobmV3IEN1YmlzbVZlY3RvcjIoc2NhbGFyLCBzY2FsYXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumZpOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOmZpOeul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g6Zmk566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRpdmlzaW9uKHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xyXG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCAvIHZlY3RvcjIueDtcclxuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgLyB2ZWN0b3IyLnk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7pmaTnrpco44K544Kr44Op44O8KVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzY2FsYXIg6Zmk566X44GZ44KL44K544Kr44Op44O85YCkXHJcbiAgICAgICAgICogQHJldHVybiDpmaTnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGl2aXNpb25CeVNjYWxhcihzY2FsYXI6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpdmlzaW9uKG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7plbfjgZXjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOODmeOCr+ODiOODq+OBrumVt+OBlVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7ot53pm6Ljga7lj5blvpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYSDngrlcclxuICAgICAgICAgKiBAcmV0dXJuIOODmeOCr+ODiOODq+OBrui3nembolxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREaXN0YW5jZVdpdGgoYTogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoKHRoaXMueCAtIGEueCkgKiAodGhpcy54IC0gYS54KSkgKyAoKHRoaXMueSAtIGEueSkgKiAodGhpcy55IC0gYS55KSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OJ44OD44OI56mN44Gu6KiI566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGEg5YCkXHJcbiAgICAgICAgICogQHJldHVybiDntZDmnpxcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZG90KGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ICogYS54KSArICh0aGlzLnkgKiBhLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5q2j6KaP5YyW44Gu6YGp55SoXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG5vcm1hbGl6ZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IE1hdGgucG93KCh0aGlzLnggKiB0aGlzLngpICsgKHRoaXMueSAqIHRoaXMueSksIDAuNSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLyBsZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAvIGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBhOOBi++8n++8iVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBhOOBi++8n1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWApOOBr+etieOBl+OBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GP44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXF1YWwocmhzOiBDdWJpc21WZWN0b3IyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnggPT0gcmhzLngpICYmICh0aGlzLnkgPT0gcmhzLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog562J44GX44GV44Gu56K66KqN77yI562J44GX44GP44Gq44GE44GL77yf77yJXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog5YCk44GM562J44GX44GP44Gq44GE44GL77yfXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHJocyDnorroqo3jgZnjgovlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YCk44Gv562J44GX44GP44Gq44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlgKTjga/nrYnjgZfjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChyaHM6IEN1YmlzbVZlY3RvcjIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gISh0aGlzLmlzRXF1YWwocmhzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==