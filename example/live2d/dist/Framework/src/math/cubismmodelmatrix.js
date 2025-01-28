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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/math/cubismmodelmatrix.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/math/cubismmatrix44.ts":
/*!******************************************!*\
  !*** ./Framework/math/cubismmatrix44.ts ***!
  \******************************************/
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
     * 4x4の行列
     *
     * 4x4行列の便利クラス。
     */
    var CubismMatrix44 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMatrix44() {
            this._tr = new Float32Array(16); // 4 * 4のサイズ
            this.loadIdentity();
        }
        /**
         * 受け取った２つの行列の乗算を行う。
         *
         * @param a 行列a
         * @param b 行列b
         * @return 乗算結果の行列
         */
        CubismMatrix44.multiply = function (a, b, dst) {
            var c = new Float32Array([
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0
            ]);
            var n = 4;
            for (var i = 0; i < n; ++i) {
                for (var j = 0; j < n; ++j) {
                    for (var k = 0; k < n; ++k) {
                        c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                    }
                }
            }
            for (var i = 0; i < 16; ++i) {
                dst[i] = c[i];
            }
        };
        /**
         * 単位行列に初期化する
         */
        CubismMatrix44.prototype.loadIdentity = function () {
            var c = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            this.setMatrix(c);
        };
        /**
         * 行列を設定
         *
         * @param tr 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.setMatrix = function (tr) {
            for (var i = 0; i < 16; ++i) {
                this._tr[i] = tr[i];
            }
        };
        /**
         * 行列を浮動小数点数の配列で取得
         *
         * @return 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.getArray = function () {
            return this._tr;
        };
        /**
         * X軸の拡大率を取得
         * @return X軸の拡大率
         */
        CubismMatrix44.prototype.getScaleX = function () {
            return this._tr[0];
        };
        /**
         * Y軸の拡大率を取得する
         *
         * @return Y軸の拡大率
         */
        CubismMatrix44.prototype.getScaleY = function () {
            return this._tr[5];
        };
        /**
         * X軸の移動量を取得
         * @return X軸の移動量
         */
        CubismMatrix44.prototype.getTranslateX = function () {
            return this._tr[12];
        };
        /**
         * Y軸の移動量を取得
         * @return Y軸の移動量
         */
        CubismMatrix44.prototype.getTranslateY = function () {
            return this._tr[13];
        };
        /**
         * X軸の値を現在の行列で計算
         *
         * @param src X軸の値
         * @return 現在の行列で計算されたX軸の値
         */
        CubismMatrix44.prototype.transformX = function (src) {
            return this._tr[0] * src + this._tr[12];
        };
        /**
         * Y軸の値を現在の行列で計算
         *
         * @param src Y軸の値
         * @return　現在の行列で計算されたY軸の値
         */
        CubismMatrix44.prototype.transformY = function (src) {
            return this._tr[5] * src + this._tr[13];
        };
        /**
         * X軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformX = function (src) {
            return (src - this._tr[12]) / this._tr[0];
        };
        /**
         * Y軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformY = function (src) {
            return (src - this._tr[13]) / this._tr[5];
        };
        /**
         * 現在の行列の位置を起点にして移動
         *
         * 現在の行列の位置を起点にして相対的に移動する。
         *
         * @param x X軸の移動量
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateRelative = function (x, y) {
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                x, y, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の位置を移動
         *
         * 現在の行列の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         * @param y y軸の移動量
         */
        CubismMatrix44.prototype.translate = function (x, y) {
            this._tr[12] = x;
            this._tr[13] = y;
        };
        /**
         * 現在の行列のX軸の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         */
        CubismMatrix44.prototype.translateX = function (x) {
            this._tr[12] = x;
        };
        /**
         * 現在の行列のY軸の位置を指定した位置へ移動する
         *
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateY = function (y) {
            this._tr[13] = y;
        };
        /**
         * 現在の行列の拡大率を相対的に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scaleRelative = function (x, y) {
            var tr1 = new Float32Array([
                x, 0.0, 0.0, 0.0,
                0.0, y, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の拡大率を指定した倍率に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scale = function (x, y) {
            this._tr[0] = x;
            this._tr[5] = y;
        };
        /**
         * 現在の行列に行列を乗算
         *
         * @param m 行列
         */
        CubismMatrix44.prototype.multiplyByMatrix = function (m) {
            CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
        };
        /**
         * オブジェクトのコピーを生成する
         */
        CubismMatrix44.prototype.clone = function () {
            var cloneMatrix = new CubismMatrix44();
            for (var i = 0; i < this._tr.length; i++) {
                cloneMatrix._tr[i] = this._tr[i];
            }
            return cloneMatrix;
        };
        return CubismMatrix44;
    }());
    Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/math/cubismmodelmatrix.ts":
/*!*********************************************!*\
  !*** ./Framework/math/cubismmodelmatrix.ts ***!
  \*********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CubismMatrix44 = _cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル座標設定用の4x4行列
     *
     * モデル座標設定用の4x4行列クラス
     */
    var CubismModelMatrix = /** @class */ (function (_super) {
        __extends(CubismModelMatrix, _super);
        /**
         * コンストラクタ
         *
         * @param w 横幅
         * @param h 縦幅
         */
        function CubismModelMatrix(w, h) {
            var _this = _super.call(this) || this;
            _this._width = (w !== undefined)
                ? w
                : 0.0;
            _this._height = (h !== undefined)
                ? h
                : 0.0;
            // 原点(0, 0)を中心にして、画面に納まるような大きさで初期化
            if (_this._width > _this._height) {
                _this.setWidth(_this._height / _this._width);
            }
            else {
                _this.setHeight(1.0);
            }
            return _this;
        }
        /**
         * 横幅を設定
         *
         * @param w 横幅
         */
        CubismModelMatrix.prototype.setWidth = function (w) {
            var scaleX = w / this._width;
            var scaleY = scaleX;
            this.scale(scaleX, scaleY);
        };
        /**
         * 縦幅を設定
         * @param h 縦幅
         */
        CubismModelMatrix.prototype.setHeight = function (h) {
            var scaleX = h / this._height;
            var scaleY = scaleX;
            this.scale(scaleX, scaleY);
        };
        /**
         * 位置を設定
         *
         * @param x X軸の位置
         * @param y Y軸の位置
         */
        CubismModelMatrix.prototype.setPosition = function (x, y) {
            this.translate(x, y);
        };
        /**
         * 中心位置を設定
         *
         * @param x X軸の中心位置
         * @param y Y軸の中心位置
         *
         * @note widthかheightを設定したあとでないと、拡大率が正しく取得できないためずれる。
         */
        CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
            this.centerX(x);
            this.centerY(y);
        };
        /**
         * 上辺の位置を設定する
         *
         * @param y 上辺のY軸位置
         */
        CubismModelMatrix.prototype.top = function (y) {
            this.setY(y);
        };
        /**
         * 下辺の位置を設定する
         *
         * @param y 下辺のY軸位置
         */
        CubismModelMatrix.prototype.bottom = function (y) {
            var h = this._height * this.getScaleY();
            this.translateY(y - h);
        };
        /**
         * 左辺の位置を設定
         *
         * @param x 左辺のX軸位置
         */
        CubismModelMatrix.prototype.left = function (x) {
            this.setX(x);
        };
        /**
         * 右辺の位置を設定
         *
         * @param x 右辺のX軸位置
         */
        CubismModelMatrix.prototype.right = function (x) {
            var w = this._width * this.getScaleX();
            this.translateX(x - w);
        };
        /**
         * X軸の中心位置を設定
         *
         * @param x X軸の中心位置
         */
        CubismModelMatrix.prototype.centerX = function (x) {
            var w = this._width * this.getScaleX();
            this.translateX(x - (w / 2.0));
        };
        /**
         * X軸の位置を設定
         *
         * @param x X軸の位置
         */
        CubismModelMatrix.prototype.setX = function (x) {
            this.translateX(x);
        };
        /**
         * Y軸の中心位置を設定
         *
         * @param y Y軸の中心位置
         */
        CubismModelMatrix.prototype.centerY = function (y) {
            var h = this._height * this.getScaleY();
            this.translateY(y - (h / 2.0));
        };
        /**
         * Y軸の位置を設定する
         *
         * @param y Y軸の位置
         */
        CubismModelMatrix.prototype.setY = function (y) {
            this.translateY(y);
        };
        /**
         * レイアウト情報から位置を設定
         *
         * @param layout レイアウト情報
         */
        CubismModelMatrix.prototype.setupFromLayout = function (layout) {
            var keyWidth = "width";
            var keyHeight = "height";
            var keyX = "x";
            var keyY = "y";
            var keyCenterX = "center_x";
            var keyCenterY = "center_y";
            var keyTop = "top";
            var keyBottom = "bottom";
            var keyLeft = "left";
            var keyRight = "right";
            for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                var key = ite.ptr().first;
                var value = ite.ptr().second;
                if (key == keyWidth) {
                    this.setWidth(value);
                }
                else if (key == keyHeight) {
                    this.setHeight(value);
                }
            }
            for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
                var key = ite.ptr().first;
                var value = ite.ptr().second;
                if (key == keyX) {
                    this.setX(value);
                }
                else if (key == keyY) {
                    this.setY(value);
                }
                else if (key == keyCenterX) {
                    this.centerX(value);
                }
                else if (key == keyCenterY) {
                    this.centerY(value);
                }
                else if (key == keyTop) {
                    this.top(value);
                }
                else if (key == keyBottom) {
                    this.bottom(value);
                }
                else if (key == keyLeft) {
                    this.left(value);
                }
                else if (key == keyRight) {
                    this.right(value);
                }
            }
        };
        return CubismModelMatrix;
    }(CubismMatrix44));
    Live2DCubismFramework.CubismModelMatrix = CubismModelMatrix;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbW9kZWxtYXRyaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQThSckM7QUE5UkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksWUFBWTtZQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNXLHVC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Q0FBQyxDQWpQc0MsY0FBYyxHQWlQcEQ7SUFqUFksdUNBQWlCLG9CQWlQN0I7QUFDTCxDQUFDLEVBelBnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBeVByQyIsImZpbGUiOiIvbWF0aC9jdWJpc21tb2RlbG1hdHJpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbW9kZWxtYXRyaXgudHNcIik7XG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogNHg044Gu6KGM5YiXXHJcbiAgICAgKiBcclxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcclxuICAgICAgICAgICAgdGhpcy5sb2FkSWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOihjOWIl2FcclxuICAgICAgICAgKiBAcGFyYW0gYiDooYzliJdiXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IEZsb2F0MzJBcnJheSwgYjogRmxvYXQzMkFycmF5LCBkc3Q6IEZsb2F0MzJBcnJheSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IDQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBuOyArK2opXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgbjsgKytrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE2OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRzdFtpXSA9IGNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBsb2FkSWRlbnRpdHkoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeChjKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOihjOWIl+OCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB0ciAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRNYXRyaXgodHI6IEZsb2F0MzJBcnJheSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cltpXSA9IHRyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooYzliJfjgpLmta7li5XlsI/mlbDngrnmlbDjga7phY3liJfjgaflj5blvpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEFycmF5KCk6IEZsb2F0MzJBcnJheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruaLoeWkp+eOh+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5ouh5aSn546H44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNjYWxlWSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7np7vli5Xph4/jgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxMl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWOi7uOOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHNyYyBZ6Lu444Gu5YCkXHJcbiAgICAgICAgICogQHJldHVybuOAgOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1nou7jjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdICogc3JjICsgdGhpcy5fdHJbMTNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEyXSkgLyB0aGlzLl90clswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxM10pIC8gdGhpcy5fdHJbNV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnp7vli5VcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnm7jlr77nmoTjgavnp7vli5XjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICB5LCAgICAgIDAuMCwgICAgMS4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLnp7vli5VcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xyXG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWei7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWSh5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuebuOWvvueahOOBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNjYWxlUmVsYXRpdmUoeDogbnVtYmVyLCB5Om51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgeSwgICAgICAwLjAsICAgIDAuMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS5oyH5a6a44GX44Gf5YCN546H44Gr6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clswXSA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzVdID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBq+ihjOWIl+OCkuS5l+eul1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIG0g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlNYXRyaXgobTogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseShtLmdldEFycmF5KCksIHRoaXMuX3RyLCB0aGlzLl90cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2xvbmUoKTogQ3ViaXNtTWF0cml4NDRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZU1hdHJpeDogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZU1hdHJpeC5fdHJbaV0gPSB0aGlzLl90cltpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNsb25lTWF0cml4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF90cjogRmxvYXQzMkFycmF5OyAgICAvLyA0eDTooYzliJfjg4fjg7zjgr9cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gXCIuL2N1YmlzbW1hdHJpeDQ0XCI7XHJcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xyXG5pbXBvcnQgaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XHJcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xyXG5cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44Oi44OH44Or5bqn5qiZ6Kit5a6a55So44GuNHg06KGM5YiXXHJcbiAgICAgKiBcclxuICAgICAqIOODouODh+ODq+W6p+aomeioreWumueUqOOBrjR4NOihjOWIl+OCr+ODqeOCuVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW9kZWxNYXRyaXggZXh0ZW5kcyBDdWJpc21NYXRyaXg0NFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB3IOaoquW5hVxyXG4gICAgICAgICAqIEBwYXJhbSBoIOe4puW5hVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHc/OiBudW1iZXIsIGg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSAodyAhPT0gdW5kZWZpbmVkKSBcclxuICAgICAgICAgICAgICAgID8gd1xyXG4gICAgICAgICAgICAgICAgOiAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IChoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IGhcclxuICAgICAgICAgICAgICAgIDogMC4wO1xyXG5cclxuICAgICAgICAgICAgLy8g5Y6f54K5KDAsIDAp44KS5Lit5b+D44Gr44GX44Gm44CB55S76Z2i44Gr57SN44G+44KL44KI44GG44Gq5aSn44GN44GV44Gn5Yid5pyf5YyWXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl93aWR0aCA+IHRoaXMuX2hlaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLl9oZWlnaHQgLyB0aGlzLl93aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhlaWdodCgxLjApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmqKrluYXjgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdyDmqKrluYVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0V2lkdGgodzogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYOiBudW1iZXIgPSB3IC8gdGhpcy5fd2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWTogbnVtYmVyID0gc2NhbGVYO1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOe4puW5heOCkuioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBoIOe4puW5hVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRIZWlnaHQoaDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVYOiBudW1iZXIgPSBoIC8gdGhpcy5faGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZVk6IG51bWJlciA9IHNjYWxlWDtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkvY3nva7jgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Lit5b+D5L2N572u44KS6Kit5a6aXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruS4reW/g+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7kuK3lv4PkvY3nva5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAbm90ZSB3aWR0aOOBi2hlaWdodOOCkuioreWumuOBl+OBn+OBguOBqOOBp+OBquOBhOOBqOOAgeaLoeWkp+eOh+OBjOato+OBl+OBj+WPluW+l+OBp+OBjeOBquOBhOOBn+OCgeOBmuOCjOOCi+OAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRDZW50ZXJQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCh4KTtcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZKHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LiK6L6644Gu5L2N572u44KS6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHkg5LiK6L6644GuWei7uOS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b3AoeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRZKHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuIvovrrjga7kvY3nva7jgpLoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geSDkuIvovrrjga5Z6Lu45L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGJvdHRvbSh5OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBoOiBudW1iZXIgPSB0aGlzLl9oZWlnaHQgKiB0aGlzLmdldFNjYWxlWSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZKHkgLSBoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW3pui+uuOBruS9jee9ruOCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOW3pui+uuOBrljou7jkvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbGVmdCh4OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFgoeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj7Povrrjga7kvY3nva7jgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDlj7Povrrjga5Y6Lu45L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJpZ2h0KHg6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLl93aWR0aCAqIHRoaXMuZ2V0U2NhbGVYKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVgoeCAtIHcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruS4reW/g+S9jee9ruOCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7kuK3lv4PkvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2VudGVyWCh4OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gdGhpcy5fd2lkdGggKiB0aGlzLmdldFNjYWxlWCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVYKHggLSAodyAvIDIuMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruS9jee9ruOCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7kvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0WCh4OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVgoeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5Lit5b+D5L2N572u44KS6Kit5a6aXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruS4reW/g+S9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjZW50ZXJZKHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGg6IG51bWJlciA9IHRoaXMuX2hlaWdodCAqIHRoaXMuZ2V0U2NhbGVZKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoeSAtIChoIC8gMi4wKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5L2N572u44KS6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruS9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRZKHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWSh5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOOCouOCpuODiOaDheWgseOBi+OCieS9jee9ruOCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBsYXlvdXQg44Os44Kk44Ki44Km44OI5oOF5aCxXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldHVwRnJvbUxheW91dChsYXlvdXQ6IGNzbU1hcDxzdHJpbmcsIG51bWJlcj4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlXaWR0aCA9IFwid2lkdGhcIjtcclxuICAgICAgICAgICAgY29uc3Qga2V5SGVpZ2h0ID0gXCJoZWlnaHRcIjtcclxuICAgICAgICAgICAgY29uc3Qga2V5WCA9IFwieFwiO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlZID0gXCJ5XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUNlbnRlclggPSBcImNlbnRlcl94XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUNlbnRlclkgPSBcImNlbnRlcl95XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVRvcCA9IFwidG9wXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUJvdHRvbSA9IFwiYm90dG9tXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUxlZnQgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgY29uc3Qga2V5UmlnaHQgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IoY29uc3QgaXRlOiBpdGVyYXRvcjxzdHJpbmcsIG51bWJlcj4gPSBsYXlvdXQuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKGxheW91dC5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gaXRlLnB0cigpLnNlY29uZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0ga2V5V2lkdGgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PSBrZXlIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRIZWlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IoY29uc3QgaXRlOiBpdGVyYXRvcjxzdHJpbmcsIG51bWJlcj4gPSBsYXlvdXQuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKGxheW91dC5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gaXRlLnB0cigpLnNlY29uZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0ga2V5WClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFgodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5WSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5Q2VudGVyWClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclgodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5Q2VudGVyWSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlclkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihrZXkgPT0ga2V5VG9wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoa2V5ID09IGtleUJvdHRvbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PSBrZXlMZWZ0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGtleSA9PSBrZXlSaWdodClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjsgICAgIC8vIOaoquW5hVxyXG4gICAgICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyOyAgICAvLyDnuKbluYVcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=