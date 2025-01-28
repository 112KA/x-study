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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/physics/cubismphysicsinternal.ts");
/******/ })
/************************************************************************/
/******/ ({

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


/***/ }),

/***/ "./Framework/physics/cubismphysicsinternal.ts":
/*!****************************************************!*\
  !*** ./Framework/physics/cubismphysicsinternal.ts ***!
  \****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismvector2 */ "./Framework/math/cubismvector2.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
var CubismVector2 = _math_cubismvector2__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 物理演算の適用先の種類
     */
    var CubismPhysicsTargetType;
    (function (CubismPhysicsTargetType) {
        CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
    })(CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType || (Live2DCubismFramework.CubismPhysicsTargetType = {}));
    /**
     * 物理演算の入力の種類
     */
    var CubismPhysicsSource;
    (function (CubismPhysicsSource) {
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle";
    })(CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource || (Live2DCubismFramework.CubismPhysicsSource = {}));
    /**
     * @brief 物理演算で使用する外部の力
     *
     * 物理演算で使用する外部の力。
     */
    var PhysicsJsonEffectiveForces = /** @class */ (function () {
        function PhysicsJsonEffectiveForces() {
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return PhysicsJsonEffectiveForces;
    }());
    Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
    /**
     * 物理演算のパラメータ情報
     */
    var CubismPhysicsParameter = /** @class */ (function () {
        function CubismPhysicsParameter() {
        }
        return CubismPhysicsParameter;
    }());
    Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
    /**
     * 物理演算の正規化情報
     */
    var CubismPhysicsNormalization = /** @class */ (function () {
        function CubismPhysicsNormalization() {
        }
        return CubismPhysicsNormalization;
    }());
    Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
    /**
     * 物理演算の演算委使用する物理点の情報
     */
    var CubismPhysicsParticle = /** @class */ (function () {
        function CubismPhysicsParticle() {
            this.initialPosition = new CubismVector2(0, 0);
            this.position = new CubismVector2(0, 0);
            this.lastPosition = new CubismVector2(0, 0);
            this.lastGravity = new CubismVector2(0, 0);
            this.force = new CubismVector2(0, 0);
            this.velocity = new CubismVector2(0, 0);
        }
        return CubismPhysicsParticle;
    }());
    Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
    /**
     * 物理演算の物理点の管理
     */
    var CubismPhysicsSubRig = /** @class */ (function () {
        function CubismPhysicsSubRig() {
            this.normalizationPosition = new CubismPhysicsNormalization();
            this.normalizationAngle = new CubismPhysicsNormalization();
        }
        return CubismPhysicsSubRig;
    }());
    Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
    /**
     * 物理演算の入力情報
     */
    var CubismPhysicsInput = /** @class */ (function () {
        function CubismPhysicsInput() {
            this.source = new CubismPhysicsParameter();
        }
        return CubismPhysicsInput;
    }());
    Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
    /**
     * @brief 物理演算の出力情報
     *
     * 物理演算の出力情報。
     */
    var CubismPhysicsOutput = /** @class */ (function () {
        function CubismPhysicsOutput() {
            this.destination = new CubismPhysicsParameter();
            this.translationScale = new CubismVector2(0, 0);
        }
        return CubismPhysicsOutput;
    }());
    Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
    /**
     * @brief 物理演算のデータ
     *
     * 物理演算のデータ。
     */
    var CubismPhysicsRig = /** @class */ (function () {
        function CubismPhysicsRig() {
            this.settings = new csmVector();
            this.inputs = new csmVector();
            this.outputs = new csmVector();
            this.particles = new csmVector();
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return CubismPhysicsRig;
    }());
    Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
    ;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmvector.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmvector.ts ***!
  \*************************************/
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
     * ベクター型（可変配列型）
     */
    var csmVector = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
         * @param zeroClear trueなら初期化時に確保した領域を0で埋める
         */
        function csmVector(initialCapacity) {
            if (initialCapacity === void 0) { initialCapacity = 0; }
            if (initialCapacity < 1) {
                this._ptr = new Array();
                this._capacity = 0;
                this._size = 0;
            }
            else {
                this._ptr = new Array(initialCapacity);
                this._capacity = initialCapacity;
                this._size = 0;
            }
        }
        /**
         * インデックスで指定した要素を返す
         */
        csmVector.prototype.at = function (index) {
            return this._ptr[index];
        };
        /**
         * 要素をセット
         * @param index 要素をセットするインデックス
         * @param value セットする要素
         */
        csmVector.prototype.set = function (index, value) {
            this._ptr[index] = value;
        };
        /**
         * コンテナを取得する
         */
        csmVector.prototype.get = function (offset) {
            if (offset === void 0) { offset = 0; }
            var ret = new Array();
            for (var i = offset; i < this._size; i++) {
                ret.push(this._ptr[i]);
            }
            return ret;
        };
        /**
         * pushBack処理、コンテナに新たな要素を追加する
         * @param value PushBack処理で追加する値
         */
        csmVector.prototype.pushBack = function (value) {
            if (this._size >= this._capacity) {
                this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
            }
            this._ptr[this._size++] = value;
        };
        /**
         * コンテナの全要素を解放する
         */
        csmVector.prototype.clear = function () {
            this._ptr.length = 0;
            this._size = 0;
        };
        /**
         * コンテナの要素数を返す
         * @return コンテナの要素数
         */
        csmVector.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナの全要素に対して代入処理を行う
         * @param newSize 代入処理後のサイズ
         * @param value 要素に代入する値
         */
        csmVector.prototype.assign = function (newSize, value) {
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
            }
            for (var i = 0; i < newSize; i++) {
                this._ptr[i] = value;
            }
            this._size = newSize;
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.resize = function (newSize, value) {
            if (value === void 0) { value = null; }
            this.updateSize(newSize, value, true);
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
            if (value === void 0) { value = null; }
            if (callPlacementNew === void 0) { callPlacementNew = true; }
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
                if (callPlacementNew) {
                    for (var i = this._size; i < newSize; i++) {
                        if (typeof value == 'function') // new
                         {
                            this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                        }
                        else // プリミティブ型なので値渡し
                         {
                            this._ptr[i] = value;
                        }
                    }
                }
                else {
                    for (var i = this._size; i < newSize; i++) {
                        this._ptr[i] = value;
                    }
                }
            }
            else {
                // newSize <= this._size
                //---
                var sub = this._size - newSize;
                this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
            }
            this._size = newSize;
        };
        /**
         * コンテナにコンテナ要素を挿入する
         * @param position 挿入する位置
         * @param begin　挿入するコンテナの開始位置
         * @param end 挿入するコンテナの終端位置
         */
        csmVector.prototype.insert = function (position, begin, end) {
            var dstSi = position._index;
            var srcSi = begin._index;
            var srcEi = end._index;
            var addCount = srcEi - srcSi;
            this.prepareCapacity(this._size + addCount);
            // 挿入用の既存データをシフトして隙間を作る
            var addSize = this._size - dstSi;
            if (addSize > 0) {
                for (var i = 0; i < addSize; i++) {
                    this._ptr.splice(dstSi + i, 0, null);
                }
            }
            for (var i = srcSi; i < srcEi; i++, dstSi++) {
                this._ptr[dstSi] = begin._vector._ptr[i];
            }
            this._size = this._size + addCount;
        };
        /**
         * コンテナからインデックスで指定した要素を削除する
         * @param index インデックス値
         * @return true 削除実行
         * @return false 削除範囲外
         */
        csmVector.prototype.remove = function (index) {
            if (index < 0 || this._size <= index) {
                return false; // 削除範囲外
            }
            this._ptr.splice(index, 1);
            --this._size;
            return true;
        };
        /**
         * コンテナから要素を削除して他の要素をシフトする
         * @param ite 削除する要素
         */
        csmVector.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._ptr.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
         */
        csmVector.prototype.prepareCapacity = function (newSize) {
            if (newSize > this._capacity) {
                if (this._capacity == 0) {
                    this._ptr = new Array(newSize);
                    this._capacity = newSize;
                }
                else {
                    this._ptr.length = newSize;
                    this._capacity = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmVector.prototype.begin = function () {
            var ite = (this._size == 0)
                ? this.end()
                : new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmVector.prototype.end = function () {
            var ite = new iterator(this, this._size);
            return ite;
        };
        csmVector.prototype.getOffset = function (offset) {
            var newVector = new csmVector();
            newVector._ptr = this.get(offset);
            newVector._size = this.get(offset).length;
            newVector._capacity = this.get(offset).length;
            return newVector;
        };
        csmVector.s_defaultSize = 10; // コンテナ初期化のデフォルトサイズ
        return csmVector;
    }());
    Live2DCubismFramework.csmVector = csmVector;
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, index) {
            this._vector = (v != undefined) ? v : null;
            this._index = (index != undefined) ? index : 0;
        }
        /**
         * 代入
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * 前置き++演算
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._vector, this._index++);
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._vector, this._index--); // 古い値を保存
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * ptr
         */
        iterator.prototype.ptr = function () {
            return this._vector._ptr[this._index];
        };
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.substitution = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * !=演算子のオーバーロード
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._vector != ite._vector);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcGh5c2ljcy9jdWJpc21waHlzaWNzaW50ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUksSUFBVSxxQkFBcUIsQ0E0S3JDO0FBNUtELFdBQWlCLHFCQUFxQjtJQUVsQzs7OztPQUlHO0lBQ0g7UUFFSTs7V0FFRztRQUNILHVCQUEwQixDQUFVLEVBQVMsQ0FBVTtZQUE3QixNQUFDLEdBQUQsQ0FBQyxDQUFTO1lBQVMsTUFBQyxHQUFELENBQUMsQ0FBUztZQUVuRCxJ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QztRQUVEOztXQUVHO1FBQ0ksMkJBQVEsR0FBZixVQUFnQixHQUFnQjtZQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBSUwsZUFBQztJQUFELENBQUM7SUF6RlksOEJBQVEsV0F5RnBCO0FBQ0wsQ0FBQyxFQWpZZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlZckMiLCJmaWxlIjoiL3BoeXNpY3MvY3ViaXNtcGh5c2ljc2ludGVybmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvcGh5c2ljcy9jdWJpc21waHlzaWNzaW50ZXJuYWwudHNcIik7XG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei1xyXG4gICAgICogXHJcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6L44Gu5qmf6IO944KS5o+Q5L6b44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21WZWN0b3IyXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHg/OiBudW1iZXIsIHB1YmxpYyB5PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gKHggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyAwLjBcclxuICAgICAgICAgICAgICAgIDogeDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMueSA9ICh5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gMC4wXHJcbiAgICAgICAgICAgICAgICA6IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruWKoOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOWKoOeul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5Yqg566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54ICsgdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSArIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5rib566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5rib566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmuJvnrpfntZDmnpwg44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN1YnN0cmFjdCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLSB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC0gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDkuZfnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKiB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICogdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpco44K544Kr44Op44O8KVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzY2FsYXIg5LmX566X44GZ44KL44K544Kr44Op44O85YCkXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeVNjYWxlcihzY2FsYXI6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7pmaTnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDpmaTnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbih2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLyB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC8gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XKOOCueOCq+ODqeODvClcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOmZpOeul+OBmeOCi+OCueOCq+ODqeODvOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g6Zmk566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRpdmlzaW9uQnlTY2FsYXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpc2lvbihuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6ZW344GV44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7plbfjgZVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Led6Zui44Gu5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGEg54K5XHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7ot53pm6JcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RGlzdGFuY2VXaXRoKGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoKCh0aGlzLnggLSBhLngpICogKHRoaXMueCAtIGEueCkpICsgKCh0aGlzLnkgLSBhLnkpICogKHRoaXMueSAtIGEueSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODieODg+ODiOepjeOBruioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g57WQ5p6cXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRvdChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueCAqIGEueCkgKyAodGhpcy55ICogYS55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOato+imj+WMluOBrumBqeeUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3JtYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBNYXRoLnBvdygodGhpcy54ICogdGhpcy54KSArICh0aGlzLnkgKiB0aGlzLnkpLCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnrYnjgZfjgZXjga7norroqo3vvIjnrYnjgZfjgYTjgYvvvJ/vvIlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgYTjgYvvvJ9cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ID09IHJocy54KSAmJiAodGhpcy55ID09IHJocy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBj+OBquOBhOOBi++8n++8iVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBj+OBquOBhOOBi++8n1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwocmhzOiBDdWJpc21WZWN0b3IyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5pc0VxdWFsKHJocykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSAnLi4vbWF0aC9jdWJpc212ZWN0b3IyJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gJy4uL2lkL2N1YmlzbWlkJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tICcuLi90eXBlL2NzbXZlY3Rvcic7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcclxuaW1wb3J0IEN1YmlzbVZlY3RvcjIgPSBjdWJpc212ZWN0b3IyLkN1YmlzbVZlY3RvcjI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOeJqeeQhua8lOeul+OBrumBqeeUqOWFiOOBrueorumhnlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZW51bSBDdWJpc21QaHlzaWNzVGFyZ2V0VHlwZVxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbVBoeXNpY3NUYXJnZXRUeXBlX1BhcmFtZXRlciwgIC8vIOODkeODqeODoeODvOOCv+OBq+WvvuOBl+OBpumBqeeUqFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mp55CG5ryU566X44Gu5YWl5Yqb44Gu56iu6aGeXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbVBoeXNpY3NTb3VyY2VcclxuICAgIHtcclxuICAgICAgICBDdWJpc21QaHlzaWNzU291cmNlX1gsICAgICAgICAgIC8vIFjou7jjga7kvY3nva7jgYvjgolcclxuICAgICAgICBDdWJpc21QaHlzaWNzU291cmNlX1ksICAgICAgICAgIC8vIFnou7jjga7kvY3nva7jgYvjgolcclxuICAgICAgICBDdWJpc21QaHlzaWNzU291cmNlX0FuZ2xlLCAgICAgIC8vIOinkuW6puOBi+OCiVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGJyaWVmIOeJqeeQhua8lOeul+OBp+S9v+eUqOOBmeOCi+WklumDqOOBruWKm1xyXG4gICAgICogXHJcbiAgICAgKiDniannkIbmvJTnrpfjgafkvb/nlKjjgZnjgovlpJbpg6jjga7lipvjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFBoeXNpY3NKc29uRWZmZWN0aXZlRm9yY2VzXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5ID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZCA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmF2aXR5OiAgICBDdWJpc21WZWN0b3IyOyAgICAgICAgICAvLy88IOmHjeWKm1xyXG4gICAgICAgIHdpbmQ6ICAgICAgIEN1YmlzbVZlY3RvcjI7ICAgICAgICAgIC8vLzwg6aKoXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniannkIbmvJTnrpfjga7jg5Hjg6njg6Hjg7zjgr/mg4XloLFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXJcclxuICAgIHtcclxuICAgICAgICBpZDogQ3ViaXNtSWRIYW5kbGU7ICAgLy8g44OR44Op44Oh44O844K/XHJcbiAgICAgICAgdGFyZ2V0VHlwZTogQ3ViaXNtUGh5c2ljc1RhcmdldFR5cGU7ICAgIC8vIOmBqeeUqOWFiOOBrueorumhnlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mp55CG5ryU566X44Gu5q2j6KaP5YyW5oOF5aCxXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvblxyXG4gICAge1xyXG4gICAgICAgIG1pbmltdW06IG51bWJlcjsgICAgLy8g5pyA5aSn5YCkXHJcbiAgICAgICAgbWF4aW11bTogbnVtYmVyOyAgICAvLyDmnIDlsI/lgKRcclxuICAgICAgICBkZWZhbHV0OiBudW1iZXI7ICAgIC8vIOODh+ODleOCqeODq+ODiOWApFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mp55CG5ryU566X44Gu5ryU566X5aeU5L2/55So44GZ44KL54mp55CG54K544Gu5oOF5aCxXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzUGFydGljbGVcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEdyYXZpdHkgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IEN1YmlzbVZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0aWFsUG9zaXRpb246IEN1YmlzbVZlY3RvcjI7IC8vIOWIneacn+S9jee9rlxyXG4gICAgICAgIG1vYmlsaXR5OiBudW1iZXI7ICAgICAgICAgICAgICAgLy8g5YuV44GN44KE44GZ44GVXHJcbiAgICAgICAgZGVsYXk6IG51bWJlcjsgICAgICAgICAgICAgICAgICAvLyDpgYXjgoxcclxuICAgICAgICBhY2NlbGVyYXRpb246IG51bWJlcjsgICAgICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgIHJhZGl1czogbnVtYmVyOyAgICAgICAgICAgICAgICAgLy8g6Led6ZuiXHJcbiAgICAgICAgcG9zaXRpb246IEN1YmlzbVZlY3RvcjI7ICAgICAgICAvLyDnj77lnKjjga7kvY3nva5cclxuICAgICAgICBsYXN0UG9zaXRpb246IEN1YmlzbVZlY3RvcjI7ICAgIC8vIOacgOW+jOOBruS9jee9rlxyXG4gICAgICAgIGxhc3RHcmF2aXR5OiBDdWJpc21WZWN0b3IyOyAgICAgLy8g5pyA5b6M44Gu6YeN5YqbXHJcbiAgICAgICAgZm9yY2U6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAgICAvLyDnj77lnKjjgYvjgYvjgaPjgabjgYTjgovliptcclxuICAgICAgICB2ZWxvY2l0eTogQ3ViaXNtVmVjdG9yMjsgICAgICAgIC8vIOePvuWcqOOBrumAn+W6plxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mp55CG5ryU566X44Gu54mp55CG54K544Gu566h55CGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzU3ViUmlnXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemF0aW9uUG9zaXRpb24gPSBuZXcgQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemF0aW9uQW5nbGUgPSBuZXcgQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRDb3VudDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFpeWKm+OBruWAi+aVsFxyXG4gICAgICAgIG91dHB1dENvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh7rlipvjga7lgIvmlbBcclxuICAgICAgICBwYXJ0aWNsZUNvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g54mp55CG54K544Gu5YCL5pWwXHJcbiAgICAgICAgYmFzZUlucHV0SW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFpeWKm+OBruacgOWIneOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgIGJhc2VPdXRwdXRJbmRleDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh7rlipvjga7mnIDliJ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICBiYXNlUGFydGljbGVJbmRleDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g54mp55CG54K544Gu5pyA5Yid44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgbm9ybWFsaXphdGlvblBvc2l0aW9uOiBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbjsgIC8vIOato+imj+WMluOBleOCjOOBn+S9jee9rlxyXG4gICAgICAgIG5vcm1hbGl6YXRpb25BbmdsZTogQ3ViaXNtUGh5c2ljc05vcm1hbGl6YXRpb247ICAgICAvLyDmraPopo/ljJbjgZXjgozjgZ/op5LluqZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOato+imj+WMluOBleOCjOOBn+ODkeODqeODoeODvOOCv+OBruWPluW+l+mWouaVsOOBruWuo+iogFxyXG4gICAgICogQHBhcmFtIHRhcmdldFRyYW5zbGF0aW9uICAgICAvLyDmvJTnrpfntZDmnpzjga7np7vli5XlgKRcclxuICAgICAqIEBwYXJhbSB0YXJnZXRBbmdsZSAgICAgICAgICAgLy8g5ryU566X57WQ5p6c44Gu6KeS5bqmXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgICAgICAgICAgICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBruWApFxyXG4gICAgICogQHBhcmFtIHBhcmFtZXRlck1pbmltdW5WYWx1ZSAvLyDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlsI/lgKRcclxuICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJNYXhpbXVtVmFsdWUgLy8g44OR44Op44Oh44O844K/44Gu5pyA5aSn5YCkXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVyRGVmYXVsdFZhbHVlIC8vIOODkeODqeODoeODvOOCv+OBruODh+ODleOCqeODq+ODiOWApFxyXG4gICAgICogQHBhcmFtIG5vcm1hbGl6YXRpb25Qb3NpdGlvbiAvLyDmraPopo/ljJbjgZXjgozjgZ/kvY3nva5cclxuICAgICAqIEBwYXJhbSBub3JtYWxpemF0aW9uQW5nbGUgICAgLy8g5q2j6KaP5YyW44GV44KM44Gf6KeS5bqmXHJcbiAgICAgKiBAcGFyYW0gaXNJbnZlcnRlZCAgICAgICAgICAgIC8vIOWApOOBjOWPjei7ouOBleOCjOOBpuOBhOOCi+OBi++8n1xyXG4gICAgICogQHBhcmFtIHdlaWdodCAgICAgICAgICAgICAgICAvLyDph43jgb9cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBub3JtYWxpemVkUGh5c2ljc1BhcmFtZXRlclZhbHVlR2V0dGVyXHJcbiAgICB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICB0YXJnZXRUcmFuc2xhdGlvbjogQ3ViaXNtVmVjdG9yMixcclxuICAgICAgICAgICAgdGFyZ2V0QW5nbGU6IHthbmdsZTogbnVtYmVyfSxcclxuICAgICAgICAgICAgdmFsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgcGFyYW1ldGVyTWluaW11blZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlck1heGltdW1WYWx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJEZWZhdWx0VmFsdWU6IG51bWJlcixcclxuICAgICAgICAgICAgbm9ybWFsaXphdGlvblBvc2l0aW9uOiBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbixcclxuICAgICAgICAgICAgbm9ybWFsaXphdGlvbkFuZ2xlOiBDdWJpc21QaHlzaWNzTm9ybWFsaXphdGlvbixcclxuICAgICAgICAgICAgaXNJbnZlcnRlZDogYm9vbGVhbixcclxuICAgICAgICAgICAgd2VpZ2h0OiBudW1iZXJcclxuICAgICAgICApOiB2b2lkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniannkIbmvJTnrpfjga7lgKTjga7lj5blvpfplqLmlbDjga7lrqPoqIBcclxuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbiDnp7vli5XlgKRcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZXMg54mp55CG54K544Gu44Oq44K544OIXHJcbiAgICAgKiBAcGFyYW0gaXNJbnZlcnRlZCDlgKTjgYzlj43mmKDjgZXjgozjgabjgYTjgovjgYtcclxuICAgICAqIEBwYXJhbSBwYXJlbnRHcmF2aXR5IOmHjeWKm1xyXG4gICAgICogQHJldHVybiDlgKRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBwaHlzaWNzVmFsdWVHZXR0ZXJcclxuICAgIHtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uOiBDdWJpc21WZWN0b3IyLFxyXG4gICAgICAgICAgICBwYXJ0aWNsZXM6IEN1YmlzbVBoeXNpY3NQYXJ0aWNsZVtdLFxyXG4gICAgICAgICAgICBwYXJ0aWNsZUluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGlzSW52ZXJ0ZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIHBhcmVudEdyYXZpdHk6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICApOiBudW1iZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJqeeQhua8lOeul+OBruOCueOCseODvOODq+OBruWPluW+l+mWouaVsOOBruWuo+iogFxyXG4gICAgICogQHBhcmFtIHRyYW5zbGF0aW9uU2NhbGUg56e75YuV5YCk44Gu44K544Kx44O844OrXHJcbiAgICAgKiBAcGFyYW0gYW5nbGVTY2FsZSAgICDop5Lluqbjga7jgrnjgrHjg7zjg6tcclxuICAgICAqIEByZXR1cm4g44K544Kx44O844Or5YCkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgcGh5c2ljc1NjYWxlR2V0dGVyXHJcbiAgICB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblNjYWxlOiBDdWJpc21WZWN0b3IyLFxyXG4gICAgICAgICAgICBhbmdsZVNjYWxlOiBudW1iZXJcclxuICAgICAgICApOiBudW1iZXI7XHJcbiAgICB9IFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mp55CG5ryU566X44Gu5YWl5Yqb5oOF5aCxXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzSW5wdXRcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IG5ldyBDdWJpc21QaHlzaWNzUGFyYW1ldGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvdXJjZTogQ3ViaXNtUGh5c2ljc1BhcmFtZXRlcjsgICAgIC8vIOWFpeWKm+WFg+OBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgIHNvdXJjZVBhcmFtZXRlckluZGV4OiBudW1iZXI7ICAgICAgIC8vIOWFpeWKm+WFg+OBruODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgIHdlaWdodDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeOBv1xyXG4gICAgICAgIHR5cGU6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFpeWKm+OBrueorumhnlxyXG4gICAgICAgIHJlZmxlY3Q6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgIC8vIOWApOOBjOWPjei7ouOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAgICAgIGdldE5vcm1hbGl6ZWRQYXJhbWV0ZXJWYWx1ZTogbm9ybWFsaXplZFBoeXNpY3NQYXJhbWV0ZXJWYWx1ZUdldHRlcjsgICAvLyDmraPopo/ljJbjgZXjgozjgZ/jg5Hjg6njg6Hjg7zjgr/lgKTjga7lj5blvpfplqLmlbBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBicmllZiDniannkIbmvJTnrpfjga7lh7rlipvmg4XloLFcclxuICAgICAqIFxyXG4gICAgICog54mp55CG5ryU566X44Gu5Ye65Yqb5oOF5aCx44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21QaHlzaWNzT3V0cHV0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBDdWJpc21QaHlzaWNzUGFyYW1ldGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25TY2FsZSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVzdGluYXRpb246IEN1YmlzbVBoeXNpY3NQYXJhbWV0ZXI7ICAgICAgICAvLy88IOWHuuWKm+WFiOOBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgIGRlc3RpbmF0aW9uUGFyYW1ldGVySW5kZXg6IG51bWJlcjsgICAgICAgICAgLy8vPCDlh7rlipvlhYjjga7jg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICB2ZXJ0ZXhJbmRleDogbnVtYmVyOyAgICAgICAgICAgICAgICAgICAgICAgIC8vLzwg5oyv44KK5a2Q44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgdHJhbnNsYXRpb25TY2FsZTogQ3ViaXNtVmVjdG9yMjsgICAgICAgICAgICAvLy88IOenu+WLleWApOOBruOCueOCseODvOODq1xyXG4gICAgICAgIGFuZ2xlU2NhbGU6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgLy8vPCDop5Lluqbjga7jgrnjgrHjg7zjg6tcclxuICAgICAgICB3ZWlnaHQ6IG51bWJlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLyDph43jgb9cclxuICAgICAgICB0eXBlOiBDdWJpc21QaHlzaWNzU291cmNlOyAgICAgICAgICAgICAgICAgIC8vLzwg5Ye65Yqb44Gu56iu6aGeXHJcbiAgICAgICAgcmVmbGVjdDogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy88IOWApOOBjOWPjei7ouOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAgICAgIHZhbHVlQmVsb3dNaW5pbXVtOiBudW1iZXI7ICAgICAgICAgICAgICAgICAgLy8vPCDmnIDlsI/lgKTjgpLkuIvlm57jgaPjgZ/mmYLjga7lgKRcclxuICAgICAgICB2YWx1ZUV4Y2VlZGVkTWF4aW11bTogbnVtYmVyOyAgICAgICAgICAgICAgIC8vLzwg5pyA5aSn5YCk44KS44GT44GI44Gf5pmC44Gu5YCkXHJcbiAgICAgICAgZ2V0VmFsdWU6IHBoeXNpY3NWYWx1ZUdldHRlcjsgICAgICAgICAgICAgLy8vPCDniannkIbmvJTnrpfjga7lgKTjga7lj5blvpfplqLmlbBcclxuICAgICAgICBnZXRTY2FsZTogcGh5c2ljc1NjYWxlR2V0dGVyOyAgICAgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBruOCueOCseODvOODq+WApOOBruWPluW+l+mWouaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGJyaWVmIOeJqeeQhua8lOeul+OBruODh+ODvOOCv1xyXG4gICAgICogXHJcbiAgICAgKiDniannkIbmvJTnrpfjga7jg4fjg7zjgr/jgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVBoeXNpY3NSaWdcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzU3ViUmlnPigpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0cyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtUGh5c2ljc0lucHV0PigpO1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbVBoeXNpY3NPdXRwdXQ+KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzUGFydGljbGU+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSA9IG5ldyBDdWJpc21WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLndpbmQgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1YlJpZ0NvdW50OiBudW1iZXI7ICAgICAgICAgICAgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBrueJqeeQhueCueOBruWAi+aVsFxyXG4gICAgICAgIHNldHRpbmdzOiBjc21WZWN0b3I8Q3ViaXNtUGh5c2ljc1N1YlJpZz47ICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBrueJqeeQhueCueOBrueuoeeQhuOBruODquOCueODiFxyXG4gICAgICAgIGlucHV0czogY3NtVmVjdG9yPEN1YmlzbVBoeXNpY3NJbnB1dD47ICAgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBruWFpeWKm+OBruODquOCueODiFxyXG4gICAgICAgIG91dHB1dHM6IGNzbVZlY3RvcjxDdWJpc21QaHlzaWNzT3V0cHV0PjsgICAgICAgICAvLy88IOeJqeeQhua8lOeul+OBruWHuuWKm+OBruODquOCueODiFxyXG4gICAgICAgIHBhcnRpY2xlczogY3NtVmVjdG9yPEN1YmlzbVBoeXNpY3NQYXJ0aWNsZT47ICAgICAvLy88IOeJqeeQhua8lOeul+OBrueJqeeQhueCueOBruODquOCueODiFxyXG4gICAgICAgIGdyYXZpdHk6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAgICAgICAgICAvLy88IOmHjeWKm1xyXG4gICAgICAgIHdpbmQ6IEN1YmlzbVZlY3RvcjI7ICAgICAgICAgICAgICAgICAgICAvLy88IOmiqFxyXG4gICAgfTtcclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg5njgq/jgr/jg7zlnovvvIjlj6/lpInphY3liJflnovvvIlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmlpdGFsQ2FwYWNpdHkg5Yid5pyf5YyW5b6M44Gu44Kt44Oj44OR44K344OG44Kj44CC44OH44O844K/44K144Kk44K644GvX2NhcGFjaXR5ICogc2l6ZW9mKFQpXHJcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRpYWxDYXBhY2l0eTogbnVtYmVyID0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B0cltpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOOCu+ODg+ODiOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogVFtdID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5fcHRyW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHVzaEJhY2vlh6bnkIbjgIHjgrPjg7Pjg4bjg4rjgavmlrDjgZ/jgaropoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHVzaEJhY2sodmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOS7o+WFpeWHpueQhuW+jOOBruOCteOCpOOCulxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXNzaWduKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZTogbnVtYmVyID0gdGhpcy5fc2l6ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2FsbFBsYWNlbWVudE5ldylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ldyB2YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV3U2l6ZSA8PSB0aGlzLl9zaXplXHJcbiAgICAgICAgICAgICAgICAvLy0tLVxyXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZSh0aGlzLl9zaXplIC0gc3ViLCBzdWIpOyAgICAvLyDkuI3opoHjgarjga7jgafnoLTmo4TjgZnjgotcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBq+OCs+ODs+ODhuODiuimgee0oOOCkuaMv+WFpeOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gZW5kIOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrue1guerr+S9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcclxuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBzcmNFaTogbnVtYmVyID0gZW5kLl9pbmRleDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmjL/lhaXnlKjjga7ml6LlrZjjg4fjg7zjgr/jgpLjgrfjg5Xjg4jjgZfjgabpmpnplpPjgpLkvZzjgotcclxuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XHJcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShkc3RTaSArIGksIDAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2RzdFNpXSA9IGJlZ2luLl92ZWN0b3IuX3B0cltpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX3NpemUgKyBhZGRDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YmK6Zmk5a6f6KGMXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliYrpmaRcclxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgaXRlcmF0b3I8VD4odGhpcywgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCB0aGlzLl9zaXplKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWZWN0b3IgPSBuZXcgY3NtVmVjdG9yPFQ+KCk7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcclxuICAgICAgICAgICAgbmV3VmVjdG9yLl9zaXplID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fY2FwYWNpdHkgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdWZWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfcHRyOiBUW107ICAgIC8vIOOCs+ODs+ODhuODiuOBruWFiOmgreOCouODieODrOOCuVxyXG4gICAgICAgIF9zaXplOiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxyXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcclxuXHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IHNfZGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY/OiBjc21WZWN0b3I8VD4sIGluZGV4PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpbmRleCAhPSB1bmRlZmluZWQpID8gaW5kZXggOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Luj5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4KyspO1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHRyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB0cigpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICE95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==