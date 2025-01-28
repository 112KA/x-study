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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/rendering/cubismrenderer.ts");
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

/***/ "./Framework/rendering/cubismrenderer.ts":
/*!***********************************************!*\
  !*** ./Framework/rendering/cubismrenderer.ts ***!
  \***********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル描画を処理するレンダラ
     *
     * サブクラスに環境依存の描画命令を記述する。
     */
    var CubismRenderer = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismRenderer() {
            this._isCulling = false;
            this._isPremultipliedAlpha = false;
            this._anisortopy = 0.0;
            this._model = null;
            this._modelColor = new CubismTextureColor();
            // 単位行列に初期化
            this._mvpMatrix4x4 = new CubismMatrix44();
            this._mvpMatrix4x4.loadIdentity();
        }
        /**
         * レンダラのインスタンスを生成して取得する
         *
         * @return レンダラのインスタンス
         */
        CubismRenderer.create = function () {
            return null;
        };
        /**
         * レンダラのインスタンスを解放する
         */
        CubismRenderer.delete = function (renderer) {
            renderer = null;
        };
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         * @param model モデルのインスタンス
         */
        CubismRenderer.prototype.initialize = function (model) {
            this._model = model;
        };
        /**
         * モデルを描画する
         */
        CubismRenderer.prototype.drawModel = function () {
            if (this.getModel() == null)
                return;
            this.doDrawModel();
        };
        /**
         * Model-View-Projection 行列をセットする
         * 配列は複製されるので、元の配列は外で破棄して良い
         * @param matrix44 Model-View-Projection 行列
         */
        CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
            this._mvpMatrix4x4.setMatrix(matrix44.getArray());
        };
        /**
         * Model-View-Projection 行列を取得する
         * @return Model-View-Projection 行列
         */
        CubismRenderer.prototype.getMvpMatrix = function () {
            return this._mvpMatrix4x4;
        };
        /**
         * モデルの色をセットする
         * 各色0.0~1.0の間で指定する（1.0が標準の状態）
         * @param red 赤チャンネルの値
         * @param green 緑チャンネルの値
         * @param blue 青チャンネルの値
         * @param alpha αチャンネルの値
         */
        CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
            if (red < 0.0) {
                red = 0.0;
            }
            else if (red > 1.0) {
                red = 1.0;
            }
            if (green < 0.0) {
                green = 0.0;
            }
            else if (green > 1.0) {
                green = 1.0;
            }
            if (blue < 0.0) {
                blue = 0.0;
            }
            else if (blue > 1.0) {
                blue = 1.0;
            }
            if (alpha < 0.0) {
                alpha = 0.0;
            }
            else if (alpha > 1.0) {
                alpha = 1.0;
            }
            this._modelColor.R = red;
            this._modelColor.G = green;
            this._modelColor.B = blue;
            this._modelColor.A = alpha;
        };
        /**
         * モデルの色を取得する
         * 各色0.0~1.0の間で指定する(1.0が標準の状態)
         *
         * @return RGBAのカラー情報
         */
        CubismRenderer.prototype.getModelColor = function () {
            return JSON.parse(JSON.stringify(this._modelColor));
        };
        /**
         * 乗算済みαの有効・無効をセットする
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
            this._isPremultipliedAlpha = enable;
        };
        /**
         * 乗算済みαの有効・無効を取得する
         * @return true 乗算済みのα有効
         * @return false 乗算済みのα無効
         */
        CubismRenderer.prototype.isPremultipliedAlpha = function () {
            return this._isPremultipliedAlpha;
        };
        /**
         * カリング（片面描画）の有効・無効をセットする。
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsCulling = function (culling) {
            this._isCulling = culling;
        };
        /**
         * カリング（片面描画）の有効・無効を取得する。
         * @return true カリング有効
         * @return false カリング無効
         */
        CubismRenderer.prototype.isCulling = function () {
            return this._isCulling;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * パラメータ値の影響度はレンダラの実装に依存する
         * @param n パラメータの値
         */
        CubismRenderer.prototype.setAnisotropy = function (n) {
            this._anisortopy = n;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * @return 異方性フィルタリングのパラメータ
         */
        CubismRenderer.prototype.getAnisotropy = function () {
            return this._anisortopy;
        };
        /**
         * レンダリングするモデルを取得する
         * @return レンダリングするモデル
         */
        CubismRenderer.prototype.getModel = function () {
            return this._model;
        };
        return CubismRenderer;
    }());
    Live2DCubismFramework.CubismRenderer = CubismRenderer;
    var CubismBlendMode;
    (function (CubismBlendMode) {
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
    })(CubismBlendMode = Live2DCubismFramework.CubismBlendMode || (Live2DCubismFramework.CubismBlendMode = {}));
    ;
    /**
     * テクスチャの色をRGBAで扱うためのクラス
     */
    var CubismTextureColor = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTextureColor() {
            this.R = 1.0;
            this.G = 1.0;
            this.B = 1.0;
            this.A = 1.0;
        }
        return CubismTextureColor;
    }());
    Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBOFJyQztBQTlSRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBRUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSSxZQUFZO1lBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ1cs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Q0FBQztRQUVEOzs7O1dBSUc7UUFDSSxzQ0FBYSxHQUFwQixVQUFxQixDQUFTO1lBRTFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBa0RMLHFCQUFDO0lBQUQsQ0FBQztJQTVPcUIsb0NBQWMsaUJBNE9uQztJQUVELElBQVksZUFLWDtJQUxELFdBQVksZUFBZTtRQUV2Qix5RkFBMEI7UUFDMUIsNkZBQTRCO1FBQzVCLHlHQUFrQztJQUN0QyxDQUFDLEVBTFcsZUFBZSxHQUFmLHFDQUFlLEtBQWYscUNBQWUsUUFLMUI7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBTUwseUJBQUM7SUFBRCxDQUFDO0lBakJZLHdDQUFrQixxQkFpQjlCO0FBQ0wsQ0FBQyxFQWpSZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlSckMiLCJmaWxlIjoiL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRnJhbWV3b3JrL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlci50c1wiKTtcbiIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiA0eDTjga7ooYzliJdcclxuICAgICAqIFxyXG4gICAgICogNHg06KGM5YiX44Gu5L6/5Yip44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRyaXg0NFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90ciA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpOyAgICAvLyA0ICogNOOBruOCteOCpOOCulxyXG4gICAgICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Y+X44GR5Y+W44Gj44Gf77yS44Gk44Gu6KGM5YiX44Gu5LmX566X44KS6KGM44GG44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGEg6KGM5YiXYVxyXG4gICAgICAgICAqIEBwYXJhbSBiIOihjOWIl2JcclxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogRmxvYXQzMkFycmF5LCBiOiBGbG9hdDMyQXJyYXksIGRzdDogRmxvYXQzMkFycmF5KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gNDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IG47ICsrailcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs6IG51bWJlciA9IDA7IGsgPCBuOyArK2spXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjW2ogKyBpICogNF0gKz0gYVtrICsgaSAqIDRdICogYltqICsgayAqIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTY7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHN0W2ldID0gY1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyW44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvYWRJZGVudGl0eSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAxLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4KGMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KGM5YiX44KS6Kit5a6aXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHRyIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldE1hdHJpeCh0cjogRmxvYXQzMkFycmF5KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE2OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyW2ldID0gdHJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOihjOWIl+OCkua1ruWLleWwj+aVsOeCueaVsOOBrumFjeWIl+OBp+WPluW+l1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoKTogRmxvYXQzMkFycmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu5ouh5aSn546H44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNjYWxlWCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7mi6HlpKfnjofjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVZKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruenu+WLlemHj+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVYKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7np7vli5Xph4/jgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxM107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHNyYyBY6Lu444Gu5YCkXHJcbiAgICAgICAgICogQHJldHVybiDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Y6Lu444Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clswXSAqIHNyYyArIHRoaXMuX3RyWzEyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc3JjIFnou7jjga7lgKRcclxuICAgICAgICAgKiBAcmV0dXJu44CA54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWei7uOOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV0gKiBzcmMgKyB0aGlzLl90clsxM107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTJdKSAvIHRoaXMuX3RyWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1ZKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEzXSkgLyB0aGlzLl90cls1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuenu+WLlVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkui1t+eCueOBq+OBl+OBpuebuOWvvueahOOBq+enu+WLleOBmeOCi+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVJlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAxLjAsICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAxLjAsICAgIDAuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIHksICAgICAgMC4wLCAgICAxLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuenu+WLlVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKiBAcGFyYW0geSB56Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Y6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVYKHg6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Z6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVZKHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS55u45a++55qE44Gr6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2NhbGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB4LCAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICB5LCAgICAgIDAuMCwgICAgMC4wLCBcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCwgICAgMS4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLmjIflrprjgZfjgZ/lgI3njofjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzBdID0geDtcclxuICAgICAgICAgICAgdGhpcy5fdHJbNV0gPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gr6KGM5YiX44KS5LmX566XXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gbSDooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeU1hdHJpeChtOiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KG0uZ2V0QXJyYXkoKSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCquODluOCuOOCp+OCr+ODiOOBruOCs+ODlOODvOOCkueUn+aIkOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOiBDdWJpc21NYXRyaXg0NFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lTWF0cml4OiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fdHIubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsb25lTWF0cml4Ll90cltpXSA9IHRoaXMuX3RyW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVNYXRyaXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX3RyOiBGbG9hdDMyQXJyYXk7ICAgIC8vIDR4NOihjOWIl+ODh+ODvOOCv1xyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRyaXg0NH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRyaXg0NCc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tICcuLi9tb2RlbC9jdWJpc21tb2RlbCc7XHJcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xyXG5pbXBvcnQgQ3ViaXNtTWF0cml4NDQgPSBjdWJpc21tYXRyaXg0NC5DdWJpc21NYXRyaXg0NDtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXHJcbiAgICAgKiBcclxuICAgICAqIOOCteODluOCr+ODqeOCueOBq+eSsOWig+S+neWtmOOBruaPj+eUu+WRveS7pOOCkuiomOi/sOOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3ViaXNtUmVuZGVyZXJcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZfjgablj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEN1YmlzbVJlbmRlcmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIOW8leaVsOOBq+a4oeOBl+OBn+ODouODh+ODq+OBi+OCieODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOBq+W/heimgeOBquaDheWgseOCkuWPluOCiuWHuuOBmeOBk+OBqOOBjOOBp+OBjeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44KS5o+P55S744GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRyYXdNb2RlbCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdldE1vZGVsKCkgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kb0RyYXdNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOmFjeWIl+OBr+ikh+ijveOBleOCjOOCi+OBruOBp+OAgeWFg+OBrumFjeWIl+OBr+WkluOBp+egtOajhOOBl+OBpuiJr+OBhFxyXG4gICAgICAgICAqIEBwYXJhbSBtYXRyaXg0NCBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldE12cE1hdHJpeChtYXRyaXg0NDogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQuc2V0TWF0cml4KG1hdHJpeDQ0LmdldEFycmF5KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNdnBNYXRyaXgoKTogQ3ViaXNtTWF0cml4NDRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdnBNYXRyaXg0eDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KL77yIMS4w44GM5qiZ5rqW44Gu54q25oWL77yJXHJcbiAgICAgICAgICogQHBhcmFtIHJlZCDotaTjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gZ3JlZW4g57eR44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIGJsdWUg6Z2S44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIGFscGhhIM6x44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldE1vZGVsQ29sb3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHJlZCA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVkID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVkID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWQgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGdyZWVuIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmVlbiA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdyZWVuID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmVlbiA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYmx1ZSA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmx1ZSA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGJsdWUgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJsdWUgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFscGhhIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGFscGhhID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5SID0gcmVkO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkcgPSBncmVlbjtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5CID0gYmx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5BID0gYWxwaGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KLKDEuMOOBjOaomea6luOBrueKtuaFiylcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIFJHQkHjga7jgqvjg6njg7zmg4XloLFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TW9kZWxDb2xvcigpOiBDdWJpc21UZXh0dXJlQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzUHJlbXVsdGlwbGllZEFscGhhKGVuYWJsZTogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5LmX566X5riI44G/44GuzrHmnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzUHJlbXVsdGlwbGllZEFscGhhKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi+OAglxyXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRJc0N1bGxpbmcoY3VsbGluZzogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGN1bGxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgqvjg6rjg7PjgrDnhKHlirlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0N1bGxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lgKTjga7lvbHpn7/luqbjga/jg6zjg7Pjg4Djg6njga7lrp/oo4Xjgavkvp3lrZjjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbiDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0QW5pc290cm9weShuOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDnlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QW5pc290cm9weSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmlzb3J0b3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44Or44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TW9kZWwoKTogQ3ViaXNtTW9kZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xyXG5cclxuICAgICAgICAgICAgLy8g5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyWXHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjga7lrp/oo4VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZG9EcmF3TW9kZWwoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o+P55S744Kq44OW44K444Kn44Kv44OI77yI44Ki44O844OI44Oh44OD44K344Ol77yJ44KS5o+P55S744GZ44KLXHJcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXHJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol6aCC54K544Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXHJcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOODluODrOODs+ODh+OCo+ODs+OCsOOBruOCv+OCpOODl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSwgdmVydGV4QXJyYXk6IEZsb2F0MzJBcnJheSwgdXZBcnJheTogRmxvYXQzMkFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njgYzkv53mjIHjgZnjgovpnZnnmoTjgarjg6rjgr3jg7zjgrnjgpLplovmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2U6IEZ1bmN0aW9uO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xyXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWxDb2xvcjogQ3ViaXNtVGV4dHVyZUNvbG9yOyAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6voh6rkvZPjga7jgqvjg6njg7zvvIhSR0JB77yJXHJcbiAgICAgICAgcHJvdGVjdGVkIF9pc0N1bGxpbmc6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCq+ODquODs+OCsOOBjOacieWKueOBquOCiXRydWVcclxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXHJcbiAgICAgICAgcHJvdGVjdGVkIF9hbmlzb3J0b3B5OiBhbnk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWw6IEN1YmlzbU1vZGVsOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrDlr77osaHjga7jg6Ljg4fjg6tcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBDdWJpc21CbGVuZE1vZGVcclxuICAgIHtcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTm9ybWFsID0gMCwgICAgICAgICAvLyDpgJrluLhcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfQWRkaXRpdmUgPSAxLCAgICAgICAvLyDliqDnrpdcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7oibLjgpJSR0JB44Gn5omx44GG44Gf44KB44Gu44Kv44Op44K5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlIgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuRyA9IDEuMDtcclxuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLkEgPSAxLjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSOiBudW1iZXI7ICAvLyDotaTjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBHOiBudW1iZXI7ICAvLyDnt5Hjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBBOiBudW1iZXI7ICAvLyDOseODgeODo+ODs+ODjeODq1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==