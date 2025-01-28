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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismmath.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbWF0aC9jdWJpc212ZWN0b3IyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFb0U7QUFDdkUsSUFBTyxhQUFhLEdBQUcsb0VBQWEsQ0FBQyxhQUFhLENBQUM7QUFFNUMsSUFBVSxxQkFBcUIsQ0F1TnJDO0FBdk5ELFdBQWlCLHFCQUFxQjtJQUVsQzs7T0FFRztJQUNIO1FBME1LOztXQUVHO1FBQ0g7UUFHQSxDQUFDO1FBOU1GOzs7Ozs7O1dBT0c7UUFDSSxnQkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFXO1lBRWhELElBQUks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WSxtQ0FBYSxnQkFvS3pCO0FBQ0wsQ0FBQyxFQTVLZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTRLckMiLCJmaWxlIjoiL21hdGgvY3ViaXNtbWF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0aC50c1wiKTtcbiIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSBcIi4vY3ViaXNtdmVjdG9yMlwiO1xyXG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5pWw5YCk6KiI566X44Gq44Gp44Gr5L2/55So44GZ44KL44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRoXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56ys5LiA5byV5pWw44Gu5YCk44KS5pyA5bCP5YCk44Go5pyA5aSn5YCk44Gu56+E5Zuy44Gr5Y+O44KB44Gf5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWPjuOCgeOCieOCjOOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSBtaW4gICDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgICAgICAgKiBAcGFyYW0gbWF4ICAg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFuZ2UodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCBtaW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKTvvIjjg6njgrjjgqLjg7PvvIlcclxuICAgICAgICAgKiBAcmV0dXJuIOOCteOCpOODs+mWouaVsHNpbih4KeOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzaW4oeDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKQo44Op44K444Ki44OzKVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44K144Kk44Oz6Zai5pWwY29zKHgp44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGNvcyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNvcyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWApOOBrue1tuWvvuWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOe1tuWvvuWApOOCkuaxguOCgeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5YCk44Gu57W25a++5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGFicyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW5s+aWueaguSjjg6vjg7zjg4gp44KS5rGC44KB44KLXHJcbiAgICAgICAgICogQHBhcmFtIHggLT4g5bmz5pa55qC544KS5rGC44KB44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiDlgKTjga7lubPmlrnmoLlcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgc3FydCh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqTjg7Pjg7vjgqLjgqbjg4jmmYLjga7jgqTjg7zjgrjjg7PjgrDjgavliKnnlKjjgafjgY3jgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44Kk44O844K444Oz44Kw44KS6KGM44GG5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZ2V0RWFzaW5nU2luZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgLSAwLjUgKiB0aGlzLmNvcyh2YWx1ZSAqIE1hdGguUEkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5aSn44GN44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQg5bem6L6644Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHJpZ2h0IOWPs+i+uuOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm4g5aSn44GN44GE5pa544Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIG1heChsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgPyBsZWZ0XHJcbiAgICAgICAgICAgICAgICA6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCP44GV44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQgIOW3pui+uuOBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKTjgIBcclxuICAgICAgICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBtaW4obGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGxlZnQgPiByaWdodClcclxuICAgICAgICAgICAgICAgID8gcmlnaHRcclxuICAgICAgICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinkuW6puWApOOCkuODqeOCuOOCouODs+WApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBkZWdyZWVzICAg6KeS5bqm5YCkXHJcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonlpInmj5vjgZfjgZ/jg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFuKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkZWdyZWVzIC8gMTgwLjApICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuinkuW6puWApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByYWRpYW4gICAg44Op44K444Ki44Oz5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjg6njgrjjgqLjg7PlgKTjgYvjgonlpInmj5vjgZfjgZ/op5LluqblgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFkaWFuVG9EZWdyZWVzKHJhZGlhbjogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJhZGlhbiAqIDE4MC4wKSAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonjg6njgrjjgqLjg7PlgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvUmFkaWFuKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBxMTogbnVtYmVyID0gTWF0aC5hdGFuMih0by55LCB0by54KTtcclxuICAgICAgICAgICAgY29uc3QgcTI6IG51bWJlciA9IE1hdGguYXRhbjIoZnJvbS55LCBmcm9tLngpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJldDogbnVtYmVyID0gcTEgLSBxMjtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKHJldCA8IC1NYXRoLlBJKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gTWF0aC5QSSAqIDIuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUocmV0ID4gTWF0aC5QSSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0IC09IE1hdGguUEkgKiAyLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonop5LluqblgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g6KeS5bqm5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvRGVncmVlcyhmcm9tOiBDdWJpc21WZWN0b3IyLCB0bzogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaWFuOiBudW1iZXIgPSB0aGlzLmRpcmVjdGlvblRvUmFkaWFuKGZyb20sIHRvKTtcclxuICAgICAgICAgICAgbGV0IGRlZ3JlZTogbnVtYmVyID0gdGhpcy5yYWRpYW5Ub0RlZ3JlZXMocmFkaWFuKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodG8ueCAtIGZyb20ueCkgPiAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZSA9IC1kZWdyZWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6njgrjjgqLjg7PlgKTjgpLmlrnlkJHjg5njgq/jg4jjg6vjgavlpInmj5vjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdG90YWxBbmdsZSAgICDjg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+aWueWQkeODmeOCr+ODiOODq1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgc3RhdGljIHJhZGlhblRvRGlyZWN0aW9uKHRvdGFsQW5nbGU6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy5zaW4odG90YWxBbmdsZSk7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy5jb3ModG90YWxBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvKipcclxuICAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcclxuICAgICAgICAge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIDLmrKHlhYPjg5njgq/jg4jjg6vlnotcclxuICAgICAqIFxyXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei+OBruapn+iDveOCkuaPkOS+m+OBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtVmVjdG9yMlxyXG4gICAgeyAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB4PzogbnVtYmVyLCBwdWJsaWMgeT86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9ICh4ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gMC4wXHJcbiAgICAgICAgICAgICAgICA6IHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnkgPSAoeSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IDAuMFxyXG4gICAgICAgICAgICAgICAgOiB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7liqDnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDliqDnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOWKoOeul+e1kOaenCDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWRkKHZlY3RvcjI6IEN1YmlzbVZlY3RvcjIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoMC4wLCAwLjApO1xyXG4gICAgICAgICAgICByZXQueCA9IHRoaXMueCArIHZlY3RvcjIueDtcclxuICAgICAgICAgICAgcmV0LnkgPSB0aGlzLnkgKyB2ZWN0b3IyLnk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrua4m+eul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOa4m+eul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5rib566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdWJzdHJhY3QodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54IC0gdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAtIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5LmX566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5LmX566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHkodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54ICogdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAqIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5LmX566XKOOCueOCq+ODqeODvClcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOS5l+eul+OBmeOCi+OCueOCq+ODqeODvOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlTY2FsZXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg6Zmk566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDpmaTnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGl2aXNpb24odmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54IC8gdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSAvIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumZpOeulyjjgrnjgqvjg6njg7wpXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHNjYWxhciDpmaTnrpfjgZnjgovjgrnjgqvjg6njg7zlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbkJ5U2NhbGFyKHNjYWxhcjogbnVtYmVyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGl2aXNpb24obmV3IEN1YmlzbVZlY3RvcjIoc2NhbGFyLCBzY2FsYXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrumVt+OBleOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44OZ44Kv44OI44Or44Gu6ZW344GVXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBrui3nembouOBruWPluW+l1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOeCuVxyXG4gICAgICAgICAqIEByZXR1cm4g44OZ44Kv44OI44Or44Gu6Led6ZuiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERpc3RhbmNlV2l0aChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCgodGhpcy54IC0gYS54KSAqICh0aGlzLnggLSBhLngpKSArICgodGhpcy55IC0gYS55KSAqICh0aGlzLnkgLSBhLnkpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4njg4Pjg4jnqY3jga7oqIjnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYSDlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOe1kOaenFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkb3QoYTogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnggKiBhLngpICsgKHRoaXMueSAqIGEueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmraPopo/ljJbjga7pgannlKhcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbm9ybWFsaXplKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gTWF0aC5wb3coKHRoaXMueCAqIHRoaXMueCkgKyAodGhpcy55ICogdGhpcy55KSwgMC41KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAvIGxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC8gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog562J44GX44GV44Gu56K66KqN77yI562J44GX44GE44GL77yf77yJXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog5YCk44GM562J44GX44GE44GL77yfXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHJocyDnorroqo3jgZnjgovlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YCk44Gv562J44GX44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlgKTjga/nrYnjgZfjgY/jgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcXVhbChyaHM6IEN1YmlzbVZlY3RvcjIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueCA9PSByaHMueCkgJiYgKHRoaXMueSA9PSByaHMueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnrYnjgZfjgZXjga7norroqo3vvIjnrYnjgZfjgY/jgarjgYTjgYvvvJ/vvIlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgY/jgarjgYTjgYvvvJ9cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgY/jgarjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWApOOBr+etieOBl+OBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKHRoaXMuaXNFcXVhbChyaHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9