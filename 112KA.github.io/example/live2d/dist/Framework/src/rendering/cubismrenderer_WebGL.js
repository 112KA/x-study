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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/rendering/cubismrenderer_WebGL.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/cubismframeworkconfig.ts":
/*!********************************************!*\
  !*** ./Framework/cubismframeworkconfig.ts ***!
  \********************************************/
/*! exports provided: CSM_LOG_LEVEL_VERBOSE, CSM_LOG_LEVEL_DEBUG, CSM_LOG_LEVEL_INFO, CSM_LOG_LEVEL_WARNING, CSM_LOG_LEVEL_ERROR, CSM_LOG_LEVEL_OFF, CSM_LOG_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_VERBOSE", function() { return CSM_LOG_LEVEL_VERBOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_DEBUG", function() { return CSM_LOG_LEVEL_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_INFO", function() { return CSM_LOG_LEVEL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_WARNING", function() { return CSM_LOG_LEVEL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_ERROR", function() { return CSM_LOG_LEVEL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_OFF", function() { return CSM_LOG_LEVEL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL", function() { return CSM_LOG_LEVEL; });
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/
//========================================================
//  ログ出力関数の設定
//========================================================
//---------- ログ出力レベル 選択項目 定義 ----------
/// 詳細ログ出力設定
var CSM_LOG_LEVEL_VERBOSE = 0;
/// デバッグログ出力設定
var CSM_LOG_LEVEL_DEBUG = 1;
/// Infoログ出力設定
var CSM_LOG_LEVEL_INFO = 2;
/// 警告ログ出力設定
var CSM_LOG_LEVEL_WARNING = 3;
/// エラーログ出力設定
var CSM_LOG_LEVEL_ERROR = 4;
/// ログ出力オフ設定
var CSM_LOG_LEVEL_OFF = 5;
/**
* ログ出力レベル設定。
*
* 強制的にログ出力レベルを変える時に定義を有効にする。
* CSM_LOG_LEVEL_VERBOSE ～ CSM_LOG_LEVEL_OFF を選択する。
*/
var CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;


/***/ }),

/***/ "./Framework/id/cubismid.ts":
/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * パラメータ名・パーツ名・Drawable名を保持
     *
     * パラメータ名・パーツ名・Drawable名を保持するクラス。
     */
    var CubismId = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismId(id) {
            if (typeof (id) === 'string') {
                this._id = new csmString(id);
                return;
            }
            this._id = id;
        }
        /**
         * ID名を取得する
         */
        CubismId.prototype.getString = function () {
            return this._id;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isEqual = function (c) {
            if (typeof (c) === 'string') {
                return this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return this._id.isEqual(c._id.s);
            }
            return false;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isNotEqual = function (c) {
            if (typeof (c) == 'string') {
                return !this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return !this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return !this._id.isEqual(c._id.s);
            }
            return false;
        };
        return CubismId;
    }());
    Live2DCubismFramework.CubismId = CubismId;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/id/cubismidmanager.ts":
/*!*****************************************!*\
  !*** ./Framework/id/cubismidmanager.ts ***!
  \*****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismid */ "./Framework/id/cubismid.ts");
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/


var CubismId = _cubismid__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismId;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * ID名の管理
     *
     * ID名を管理する。
     */
    var CubismIdManager = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismIdManager() {
            this._ids = new csmVector();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismIdManager.prototype.release = function () {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                this._ids.set(i, void 0);
            }
            this._ids = null;
        };
        /**
         * ID名をリストから登録
         *
         * @param ids ID名リスト
         * @param count IDの個数
         */
        CubismIdManager.prototype.registerIds = function (ids) {
            for (var i = 0; i < ids.length; i++) {
                this.registerId(ids[i]);
            }
        };
        /**
         * ID名を登録
         *
         * @param id ID名
         */
        CubismIdManager.prototype.registerId = function (id) {
            var result = null;
            if ('string' == typeof (id)) {
                if ((result = this.findId(id)) != null) {
                    return result;
                }
                result = new CubismId(id);
                this._ids.pushBack(result);
            }
            else {
                return this.registerId(id.s);
            }
            return result;
        };
        /**
         * ID名からIDを取得する
         *
         * @param id ID名
         */
        CubismIdManager.prototype.getId = function (id) {
            return this.registerId(id);
        };
        /**
         * ID名からIDの確認
         *
         * @return true 存在する
         * @return false 存在しない
         */
        CubismIdManager.prototype.isExist = function (id) {
            if ('string' == typeof (id)) {
                return (this.findId(id) != null);
            }
            return this.isExist(id.s);
        };
        /**
         * ID名からIDを検索する。
         *
         * @param id ID名
         * @return 登録されているID。なければNULL。
         */
        CubismIdManager.prototype.findId = function (id) {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                if (this._ids.at(i).getString().isEqual(id)) {
                    return this._ids.at(i);
                }
            }
            return null;
        };
        return CubismIdManager;
    }());
    Live2DCubismFramework.CubismIdManager = CubismIdManager;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/live2dcubismframework.ts":
/*!********************************************!*\
  !*** ./Framework/live2dcubismframework.ts ***!
  \********************************************/
/*! exports provided: strtod, Live2DCubismFramework, Option, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strtod", function() { return strtod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id/cubismidmanager */ "./Framework/id/cubismidmanager.ts");
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../Core/live2dcubismcore.d.ts" />




var Value = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Value;
var CubismIdManager = _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismIdManager;
var CubismRenderer = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
function strtod(s, endPtr) {
    var index = 0;
    for (var i = 1;; i++) {
        var testC = s.slice(i - 1, i);
        // 指数・マイナスの可能性があるのでスキップする
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        }
        // 文字列の範囲を広げていく
        var test = s.substring(0, i);
        var number = Number(test);
        if (isNaN(number)) {
            // 数値として認識できなくなったので終了
            break;
        }
        // 最後に数値としてできたindexを格納しておく
        index = i;
    }
    var d = parseFloat(s); // パースした数値
    if (isNaN(d)) {
        // 数値として認識できなくなったので終了
        d = NaN;
    }
    endPtr[0] = s.slice(index); // 後続の文字列
    return d;
}
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // ファイルスコープの変数を初期化
    var s_isStarted = false;
    var s_isInitialized = false;
    var s_option = null;
    var s_cubismIdManager = null;
    /**
     * Framework内で使う定数の宣言
     */
    var Constant;
    (function (Constant) {
        Constant.vertexOffset = 0; // メッシュ頂点のオフセット値
        Constant.vertexStep = 2; // メッシュ頂点のステップ値
    })(Constant = Live2DCubismFramework.Constant || (Live2DCubismFramework.Constant = {}));
    function csmDelete(address) {
        if (!address) {
            return;
        }
        address = void 0;
    }
    Live2DCubismFramework.csmDelete = csmDelete;
    /**
     * Live2D Cubism3 Original Workflow SDKのエントリポイント
     * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
     */
    var CubismFramework = /** @class */ (function () {
        /**
         * 静的クラスとして使用する
         * インスタンス化させない
         */
        function CubismFramework() {
        }
        /**
         * Cubism FrameworkのAPIを使用可能にする。
         *  APIを実行する前に必ずこの関数を実行すること。
         *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
         *
         * @param    option      Optionクラスのインスタンス
         *
         * @return   準備処理が完了したらtrueが返ります。
         */
        CubismFramework.startUp = function (option) {
            if (option === void 0) { option = null; }
            if (s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is already done.");
                return s_isStarted;
            }
            s_option = option;
            if (s_option != null) {
                Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
            }
            s_isStarted = true;
            // Live2D Cubism Coreバージョン情報を表示
            if (s_isStarted) {
                var version = Live2DCubismCore.Version.csmGetVersion();
                var major = ((version & 0xFF000000) >> 24);
                var minor = ((version & 0x00FF0000) >> 16);
                var patch = ((version & 0x0000FFFF));
                var versionNumber = version;
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
            }
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is complete.");
            return s_isStarted;
        };
        /**
         * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
         * Dispose()したCubismFrameworkを再利用する際に利用してください。
         */
        CubismFramework.cleanUp = function () {
            s_isStarted = false;
            s_isInitialized = false;
            s_option = null;
            s_cubismIdManager = null;
        };
        /**
         * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
         *     再度Initialize()するには先にDispose()を実行する必要があります。
         */
        CubismFramework.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる連続初期化ガード ---
            // 連続してリソース確保が行われないようにする。
            // 再度Initialize()するには先にDispose()を実行する必要がある。
            if (s_isInitialized) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.initialize() skipped, already initialized.");
                return;
            }
            //---- static 初期化 ----
            Value.staticInitializeNotForClientCall();
            s_cubismIdManager = new CubismIdManager();
            s_isInitialized = true;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.initialize() is complete.");
        };
        /**
         * Cubism Framework内の全てのリソースを解放します。
         *      ただし、外部で確保されたリソースについては解放しません。
         *      外部で適切に破棄する必要があります。
         */
        CubismFramework.dispose = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる未初期化解放ガード ---
            // dispose()するには先にinitialize()を実行する必要がある。
            if (!s_isInitialized) // false...リソース未確保の場合
             {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.dispose() skipped, not initialized.");
                return;
            }
            Value.staticReleaseNotForClientCall();
            s_cubismIdManager.release();
            s_cubismIdManager = null;
            // レンダラの静的リソース（シェーダプログラム他）を解放する
            CubismRenderer.staticRelease();
            s_isInitialized = false;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.dispose() is complete.");
        };
        /**
         * Cubism FrameworkのAPIを使用する準備が完了したかどうか
         * @return APIを使用する準備が完了していればtrueが返ります。
         */
        CubismFramework.isStarted = function () {
            return s_isStarted;
        };
        /**
         * Cubism Frameworkのリソース初期化がすでに行われているかどうか
         * @return リソース確保が完了していればtrueが返ります
         */
        CubismFramework.isInitialized = function () {
            return s_isInitialized;
        };
        /**
         * Core APIにバインドしたログ関数を実行する
         *
         * @praram message ログメッセージ
         */
        CubismFramework.coreLogFunction = function (message) {
            // Return if logging not possible.
            if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
                return;
            }
            Live2DCubismCore.Logging.csmGetLogFunction()(message);
        };
        /**
         * 現在のログ出力レベル設定の値を返す。
         *
         * @return  現在のログ出力レベル設定の値
         */
        CubismFramework.getLoggingLevel = function () {
            if (s_option != null) {
                return s_option.loggingLevel;
            }
            return LogLevel.LogLevel_Off;
        };
        /**
         * IDマネージャのインスタンスを取得する
         * @return CubismManagerクラスのインスタンス
         */
        CubismFramework.getIdManager = function () {
            return s_cubismIdManager;
        };
        return CubismFramework;
    }());
    Live2DCubismFramework.CubismFramework = CubismFramework;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());

/**
 * ログ出力のレベル
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
})(LogLevel || (LogLevel = {}));


/***/ }),

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


/***/ }),

/***/ "./Framework/rendering/cubismrenderer_WebGL.ts":
/*!*****************************************************!*\
  !*** ./Framework/rendering/cubismrenderer_WebGL.ts ***!
  \*****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _type_csmrectf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmrectf */ "./Framework/type/csmrectf.ts");
/* harmony import */ var _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
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







var Constant = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Constant;
var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].CubismMatrix44;
var csmRect = _type_csmrectf__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmRect;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_4__["Live2DCubismFramework"].csmMap;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_5__["Live2DCubismFramework"].csmVector;
var CubismRenderer = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
var CubismBlendMode = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismBlendMode;
var CubismTextureColor = _cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismTextureColor;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var ColorChannelCount = 4; // 実験時に1チャンネルの場合は1、RGBだけの場合は3、アルファも含める場合は4
    var shaderCount = 7; // シェーダーの数 = マスク生成用 + (通常用 + 加算 + 乗算) * (マスク無の乗算済アルファ対応版 + マスク有の乗算済アルファ対応版)
    var s_instance;
    var s_viewport;
    var s_fbo;
    /**
     * クリッピングマスクの処理を実行するクラス
     */
    var CubismClippingManager_WebGL = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismClippingManager_WebGL() {
            this._maskRenderTexture = null;
            this._colorBuffer = null;
            this._currentFrameNo = 0;
            this._clippingMaskBufferSize = 256;
            this._clippingContextListForMask = new csmVector();
            this._clippingContextListForDraw = new csmVector();
            this._channelColors = new csmVector();
            this._tmpBoundsOnModel = new csmRect();
            this._tmpMatrix = new CubismMatrix44();
            this._tmpMatrixForMask = new CubismMatrix44();
            this._tmpMatrixForDraw = new CubismMatrix44();
            this._maskTexture = null;
            var tmp = new CubismTextureColor();
            tmp.R = 1.0;
            tmp.G = 0.0;
            tmp.B = 0.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 1.0;
            tmp.B = 0.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 0.0;
            tmp.B = 1.0;
            tmp.A = 0.0;
            this._channelColors.pushBack(tmp);
            tmp = new CubismTextureColor();
            tmp.R = 0.0;
            tmp.G = 0.0;
            tmp.B = 0.0;
            tmp.A = 1.0;
            this._channelColors.pushBack(tmp);
        }
        /**
         * カラーチャンネル（RGBA）のフラグを取得する
         * @param channelNo カラーチャンネル（RGBA）の番号（0:R, 1:G, 2:B, 3:A）
         */
        CubismClippingManager_WebGL.prototype.getChannelFlagAsColor = function (channelNo) {
            return this._channelColors.at(channelNo);
        };
        /**
         * テンポラリのレンダーテクスチャのアドレスを取得する
         * FrameBufferObjectが存在しない場合、新しく生成する
         *
         * @return レンダーテクスチャのアドレス
         */
        CubismClippingManager_WebGL.prototype.getMaskRenderTexture = function () {
            var ret = 0;
            // テンポラリのRenderTextureを取得する
            if (this._maskTexture && this._maskTexture.texture != 0) // 前回使ったものを返す
             {
                this._maskTexture.frameNo = this._currentFrameNo;
                ret = this._maskTexture.texture;
            }
            if (ret == 0) {
                // FrameBufferObjectが存在しない場合、新しく生成する
                // クリッピングバッファサイズを取得
                var size = this._clippingMaskBufferSize;
                this._colorBuffer = this.gl.createTexture();
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
                this.gl.bindTexture(this.gl.TEXTURE_2D, null);
                ret = this.gl.createFramebuffer();
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
                this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
            }
            return ret;
        };
        /**
         * WebGLレンダリングコンテキストを設定する
         * @param gl WebGLレンダリングコンテキスト
         */
        CubismClippingManager_WebGL.prototype.setGL = function (gl) {
            this.gl = gl;
        };
        /**
         * マスクされる描画オブジェクト群全体を囲む矩形（モデル座標系）を計算する
         * @param model モデルのインスタンス
         * @param clippingContext クリッピングマスクのコンテキスト
         */
        CubismClippingManager_WebGL.prototype.calcClippedDrawTotalBounds = function (model, clippingContext) {
            // 被クリッピングマスク（マスクされる描画オブジェクト）の全体の矩形
            var clippedDrawTotalMinX = Number.MAX_VALUE;
            var clippedDrawTotalMinY = Number.MAX_VALUE;
            var clippedDrawTotalMaxX = Number.MIN_VALUE;
            var clippedDrawTotalMaxY = Number.MIN_VALUE;
            // このマスクが実際に必要か判定する
            // このクリッピングを利用する「描画オブジェクト」がひとつでも使用可能であればマスクを生成する必要がある
            var clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
            for (var clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
                // マスクを使用する描画オブジェクトの描画される矩形を求める
                var drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
                var drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
                var drawableVertexes = model.getDrawableVertices(drawableIndex);
                var minX = Number.MAX_VALUE;
                var minY = Number.MAX_VALUE;
                var maxX = Number.MIN_VALUE;
                var maxY = Number.MIN_VALUE;
                var loop = drawableVertexCount * Constant.vertexStep;
                for (var pi = Constant.vertexOffset; pi < loop; pi += Constant.vertexStep) {
                    var x = drawableVertexes[pi];
                    var y = drawableVertexes[pi + 1];
                    if (x < minX) {
                        minX = x;
                    }
                    if (x > maxX) {
                        maxX = x;
                    }
                    if (y < minY) {
                        minY = y;
                    }
                    if (y > maxY) {
                        maxY = y;
                    }
                }
                // 有効な点が一つも取れなかったのでスキップ
                if (minX == Number.MAX_VALUE) {
                    continue;
                }
                //　全体の矩形に反映
                if (minX < clippedDrawTotalMinX) {
                    clippedDrawTotalMinX = minX;
                }
                if (minY < clippedDrawTotalMinY) {
                    clippedDrawTotalMinY = minY;
                }
                if (maxX > clippedDrawTotalMaxX) {
                    clippedDrawTotalMaxX = maxX;
                }
                if (maxY > clippedDrawTotalMaxY) {
                    clippedDrawTotalMaxY = maxY;
                }
                if (clippedDrawTotalMinX == Number.MAX_VALUE) {
                    clippingContext._allClippedDrawRect.x = 0.0;
                    clippingContext._allClippedDrawRect.y = 0.0;
                    clippingContext._allClippedDrawRect.width = 0.0;
                    clippingContext._allClippedDrawRect.height = 0.0;
                    clippingContext._isUsing = false;
                }
                else {
                    clippingContext._isUsing = true;
                    var w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
                    var h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
                    clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
                    clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
                    clippingContext._allClippedDrawRect.width = w;
                    clippingContext._allClippedDrawRect.height = h;
                }
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismClippingManager_WebGL.prototype.release = function () {
            for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                if (this._clippingContextListForMask.at(i)) {
                    this._clippingContextListForMask.at(i).release();
                    this._clippingContextListForMask.set(i, void 0);
                }
                this._clippingContextListForMask.set(i, null);
            }
            this._clippingContextListForMask = null;
            // _clippingContextListForDrawは_clippingContextListForMaskにあるインスタンスを指している。上記の処理により要素ごとのDELETEは不要。
            for (var i = 0; i < this._clippingContextListForDraw.getSize(); i++) {
                this._clippingContextListForDraw.set(i, null);
            }
            this._clippingContextListForDraw = null;
            if (this._maskTexture) {
                this.gl.deleteFramebuffer(this._maskTexture.texture);
                this._maskTexture = null;
            }
            for (var i = 0; i < this._channelColors.getSize(); i++) {
                this._channelColors.set(i, null);
            }
            this._channelColors = null;
            // テクスチャ解放
            this.gl.deleteTexture(this._colorBuffer);
            this._colorBuffer = null;
        };
        /**
         * マネージャの初期化処理
         * クリッピングマスクを使う描画オブジェクトの登録を行う
         * @param model モデルのインスタンス
         * @param drawableCount 描画オブジェクトの数
         * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのインデックスのリスト
         * @param drawableCounts 描画オブジェクトをマスクする描画オブジェクトの数
         */
        CubismClippingManager_WebGL.prototype.initialize = function (model, drawableCount, drawableMasks, drawableMaskCounts) {
            // クリッピングマスクを使う描画オブジェクトをすべて登録する
            // クリッピングマスクは、通常数個程度に限定して使うものとする
            for (var i = 0; i < drawableCount; i++) {
                if (drawableMaskCounts[i] <= 0) {
                    // クリッピングマスクが使用されていないアートメッシュ（多くの場合使用しない）
                    this._clippingContextListForDraw.pushBack(null);
                    continue;
                }
                // 既にあるClipContextと同じかチェックする
                var clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
                if (clippingContext == null) {
                    // 同一のマスクが存在していない場合は生成する
                    clippingContext = new CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
                    this._clippingContextListForMask.pushBack(clippingContext);
                }
                clippingContext.addClippedDrawable(i);
                this._clippingContextListForDraw.pushBack(clippingContext);
            }
        };
        /**
         * クリッピングコンテキストを作成する。モデル描画時に実行する。
         * @param model モデルのインスタンス
         * @param renderer レンダラのインスタンス
         */
        CubismClippingManager_WebGL.prototype.setupClippingContext = function (model, renderer) {
            this._currentFrameNo++;
            // 全てのクリッピングを用意する
            // 同じクリップ（複数の場合はまとめて一つのクリップ）を使う場合は1度だけ設定する
            var usingClipCount = 0;
            for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
                // 1つのクリッピングマスクに関して
                var cc = this._clippingContextListForMask.at(clipIndex);
                // このクリップを利用する描画オブジェクト群全体を囲む矩形を計算
                this.calcClippedDrawTotalBounds(model, cc);
                if (cc._isUsing) {
                    usingClipCount++; // 使用中としてカウント
                }
            }
            // マスク作成処理
            if (usingClipCount > 0) {
                // 生成したFrameBufferと同じサイズでビューポートを設定
                this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
                // マスクをactiveにする
                this._maskRenderTexture = this.getMaskRenderTexture();
                // モデル描画時にDrawMeshNowに渡される変換(モデルtoワールド座標変換)
                var modelToWorldF = renderer.getMvpMatrix();
                renderer.preDraw(); // バッファをクリアする
                // 各マスクのレイアウトを決定していく
                this.setupLayoutBounds(usingClipCount);
                // ---------- マスク描画処理 ----------
                // マスク用RenderTextureをactiveにセット
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
                // マスクをクリアする
                // (仮仕様) 1が無効（描かれない）領域、0が有効（描かれる）領域。（シェーダーCd*Csで0に近い値をかけてマスクを作る。1をかけると何も起こらない）
                this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                // 実際にマスクを生成する
                // 全てのマスクをどのようにレイアウトして描くかを決定し、ClipContext, ClippedDrawContextに記憶する
                for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
                    // --- 実際に1つのマスクを描く ---
                    var clipContext = this._clippingContextListForMask.at(clipIndex);
                    var allClipedDrawRect = clipContext._allClippedDrawRect; // このマスクを使う、すべての描画オブジェクトの論理座標上の囲み矩形
                    var layoutBoundsOnTex01 = clipContext._layoutBounds; // この中にマスクを収める
                    // モデル座標上の矩形を、適宜マージンを付けて使う
                    var MARGIN = 0.05;
                    this._tmpBoundsOnModel.setRect(allClipedDrawRect);
                    this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
                    //########## 本来は割り当てられた領域の全体を使わず必要最低限のサイズがよい
                    // シェーダ用の計算式を求める。回転を考慮しない場合は以下のとおり
                    // movePeriod' = movePeriod * scaleX + offX		  [[ movePeriod' = (movePeriod - tmpBoundsOnModel.movePeriod)*scale + layoutBoundsOnTex01.movePeriod ]]
                    var scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                    var scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                    // マスク生成時に使う行列を求める
                    {
                        // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                        this._tmpMatrix.loadIdentity();
                        {
                            // layout0..1 を -1..1に変換
                            this._tmpMatrix.translateRelative(-1.0, -1.0);
                            this._tmpMatrix.scaleRelative(2.0, 2.0);
                        }
                        {
                            // view to layout0..1
                            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                            this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                            // new = [translate][scale][translate]
                        }
                        // tmpMatrixForMaskが計算結果
                        this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
                    }
                    //--------- draw時の mask 参照用行列を計算
                    {
                        // シェーダに渡す行列を求める <<<<<<<<<<<<<<<<<<<<<<<< 要最適化（逆順に計算すればシンプルにできる）
                        this._tmpMatrix.loadIdentity();
                        {
                            this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                            this._tmpMatrix.scaleRelative(scaleX, scaleY); // new = [translate][scale]
                            this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                            // new = [translate][scale][translate]
                        }
                        this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
                    }
                    clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                    clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                    var clipDrawCount = clipContext._clippingIdCount;
                    for (var i = 0; i < clipDrawCount; i++) {
                        var clipDrawIndex = clipContext._clippingIdList[i];
                        // 頂点情報が更新されておらず、信頼性がない場合は描画をパスする
                        if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                            continue;
                        }
                        renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
                        // 今回専用の変換を適用して描く
                        // チャンネルも切り替える必要がある(A,R,G,B)
                        renderer.setClippingContextBufferForMask(clipContext);
                        renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), model.getDrawableVertexIndexCount(clipDrawIndex), model.getDrawableVertexCount(clipDrawIndex), model.getDrawableVertexIndices(clipDrawIndex), model.getDrawableVertices(clipDrawIndex), model.getDrawableVertexUvs(clipDrawIndex), model.getDrawableOpacity(clipDrawIndex), CubismBlendMode.CubismBlendMode_Normal // クリッピングは通常描画を強制
                        );
                    }
                }
                // --- 後処理 ---
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo); // 描画対象を戻す
                renderer.setClippingContextBufferForMask(null);
                this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
            }
        };
        /**
         * 既にマスクを作っているかを確認
         * 作っている様であれば該当するクリッピングマスクのインスタンスを返す
         * 作っていなければNULLを返す
         * @param drawableMasks 描画オブジェクトをマスクする描画オブジェクトのリスト
         * @param drawableMaskCounts 描画オブジェクトをマスクする描画オブジェクトの数
         * @return 該当するクリッピングマスクが存在すればインスタンスを返し、なければNULLを返す
         */
        CubismClippingManager_WebGL.prototype.findSameClip = function (drawableMasks, drawableMaskCounts) {
            // 作成済みClippingContextと一致するか確認
            for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                var clippingContext = this._clippingContextListForMask.at(i);
                var count = clippingContext._clippingIdCount;
                // 個数が違う場合は別物
                if (count != drawableMaskCounts) {
                    continue;
                }
                var sameCount = 0;
                // 同じIDを持つか確認。配列の数が同じなので、一致した個数が同じなら同じ物を持つとする
                for (var j = 0; j < count; j++) {
                    var clipId = clippingContext._clippingIdList[j];
                    for (var k = 0; k < count; k++) {
                        if (drawableMasks[k] == clipId) {
                            sameCount++;
                            break;
                        }
                    }
                }
                if (sameCount == count) {
                    return clippingContext;
                }
            }
            return null; // 見つからなかった
        };
        /**
         * クリッピングコンテキストを配置するレイアウト
         * 一つのレンダーテクスチャを極力いっぱいに使ってマスクをレイアウトする
         * マスクグループの数が4以下ならRGBA各チャンネルに一つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する。
         *
         * @param usingClipCount 配置するクリッピングコンテキストの数
         */
        CubismClippingManager_WebGL.prototype.setupLayoutBounds = function (usingClipCount) {
            // ひとつのRenderTextureを極力いっぱいに使ってマスクをレイアウトする
            // マスクグループの数が4以下ならRGBA各チャンネルに1つずつマスクを配置し、5以上6以下ならRGBAを2,2,1,1と配置する
            // RGBAを順番に使っていく
            var div = usingClipCount / ColorChannelCount; //　1チャンネルに配置する基本のマスク
            var mod = usingClipCount % ColorChannelCount; // 余り、この番号のチャンネルまでに一つずつ配分する
            // 小数点は切り捨てる
            div = ~~div;
            mod = ~~mod;
            // RGBAそれぞれのチャンネルを用意していく（0:R, 1:G, 2:B, 3:A）
            var curClipIndex = 0; // 順番に設定していく
            for (var channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
                // このチャンネルにレイアウトする数
                var layoutCount = div + (channelNo < mod ? 1 : 0);
                // 分割方法を決定する
                if (layoutCount == 0) {
                    // 何もしない
                }
                else if (layoutCount == 1) {
                    // 全てをそのまま使う
                    var clipContext = this._clippingContextListForMask.at(curClipIndex++);
                    clipContext._layoutChannelNo = channelNo;
                    clipContext._layoutBounds.x = 0.0;
                    clipContext._layoutBounds.y = 0.0;
                    clipContext._layoutBounds.width = 1.0;
                    clipContext._layoutBounds.height = 1.0;
                }
                else if (layoutCount == 2) {
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = 0.0;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 1.0;
                        // UVを2つに分解して使う
                    }
                }
                else if (layoutCount <= 4) {
                    // 4分割して使う
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 2;
                        var ypos = i / 2;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos * 0.5;
                        cc._layoutBounds.y = ypos * 0.5;
                        cc._layoutBounds.width = 0.5;
                        cc._layoutBounds.height = 0.5;
                    }
                }
                else if (layoutCount <= 9) {
                    // 9分割して使う
                    for (var i = 0; i < layoutCount; i++) {
                        var xpos = i % 3;
                        var ypos = i / 3;
                        // 小数点は切り捨てる
                        xpos = ~~xpos;
                        ypos = ~~ypos;
                        var cc = this._clippingContextListForMask.at(curClipIndex++);
                        cc._layoutChannelNo = channelNo;
                        cc._layoutBounds.x = xpos / 3.0;
                        cc._layoutBounds.y = ypos / 3.0;
                        cc._layoutBounds.width = 1.0 / 3.0;
                        cc._layoutBounds.height = 1.0 / 3.0;
                    }
                }
                else {
                    Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("not supported mask count : {0}", layoutCount);
                }
            }
        };
        /**
         * カラーバッファを取得する
         * @return カラーバッファ
         */
        CubismClippingManager_WebGL.prototype.getColorBuffer = function () {
            return this._colorBuffer;
        };
        /**
         * 画面描画に使用するクリッピングマスクのリストを取得する
         * @return 画面描画に使用するクリッピングマスクのリスト
         */
        CubismClippingManager_WebGL.prototype.getClippingContextListForDraw = function () {
            return this._clippingContextListForDraw;
        };
        /**
         * クリッピングマスクバッファのサイズを設定する
         * @param size クリッピングマスクバッファのサイズ
         */
        CubismClippingManager_WebGL.prototype.setClippingMaskBufferSize = function (size) {
            this._clippingMaskBufferSize = size;
        };
        /**
         * クリッピングマスクバッファのサイズを取得する
         * @return クリッピングマスクバッファのサイズ
         */
        CubismClippingManager_WebGL.prototype.getClippingMaskBufferSize = function () {
            return this._clippingMaskBufferSize;
        };
        return CubismClippingManager_WebGL;
    }());
    Live2DCubismFramework.CubismClippingManager_WebGL = CubismClippingManager_WebGL;
    /**
     * レンダーテクスチャのリソースを定義する構造体
     * クリッピングマスクで使用する
     */
    var CubismRenderTextureResource = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param frameNo レンダラーのフレーム番号
         * @param texture テクスチャのアドレス
         */
        function CubismRenderTextureResource(frameNo, texture) {
            this.frameNo = frameNo;
            this.texture = texture;
        }
        return CubismRenderTextureResource;
    }());
    Live2DCubismFramework.CubismRenderTextureResource = CubismRenderTextureResource;
    /**
     * クリッピングマスクのコンテキスト
     */
    var CubismClippingContext = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function CubismClippingContext(manager, clippingDrawableIndices, clipCount) {
            this._owner = manager;
            // クリップしている（＝マスク用の）Drawableのインデックスリスト
            this._clippingIdList = clippingDrawableIndices;
            // マスクの数
            this._clippingIdCount = clipCount;
            this._allClippedDrawRect = new csmRect();
            this._layoutBounds = new csmRect();
            this._clippedDrawableIndexList = new Array();
            this._matrixForMask = new CubismMatrix44();
            this._matrixForDraw = new CubismMatrix44();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismClippingContext.prototype.release = function () {
            if (this._layoutBounds != null) {
                this._layoutBounds = null;
            }
            if (this._allClippedDrawRect != null) {
                this._allClippedDrawRect = null;
            }
            if (this._clippedDrawableIndexList != null) {
                this._clippedDrawableIndexList = null;
            }
        };
        /**
         * このマスクにクリップされる描画オブジェクトを追加する
         *
         * @param drawableIndex クリッピング対象に追加する描画オブジェクトのインデックス
         */
        CubismClippingContext.prototype.addClippedDrawable = function (drawableIndex) {
            this._clippedDrawableIndexList.push(drawableIndex);
        };
        /**
         * このマスクを管理するマネージャのインスタンスを取得する
         * @return クリッピングマネージャのインスタンス
         */
        CubismClippingContext.prototype.getClippingManager = function () {
            return this._owner;
        };
        CubismClippingContext.prototype.setGl = function (gl) {
            this._owner.setGL(gl);
        };
        return CubismClippingContext;
    }());
    Live2DCubismFramework.CubismClippingContext = CubismClippingContext;
    /**
     * WebGL用のシェーダープログラムを生成・破棄するクラス
     * シングルトンなクラスであり、CubismShader_WebGL.getInstanceからアクセスする。
     */
    var CubismShader_WebGL = /** @class */ (function () {
        /**
         * privateなコンストラクタ
         */
        function CubismShader_WebGL() {
            this._shaderSets = new csmVector();
        }
        /**
         * インスタンスを取得する（シングルトン）
         * @return インスタンス
         */
        CubismShader_WebGL.getInstance = function () {
            if (s_instance == null) {
                s_instance = new CubismShader_WebGL();
                return s_instance;
            }
            return s_instance;
        };
        /**
         * インスタンスを開放する（シングルトン）
         */
        CubismShader_WebGL.deleteInstance = function () {
            if (s_instance) {
                s_instance.release();
                s_instance = null;
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismShader_WebGL.prototype.release = function () {
            this.releaseShaderProgram();
        };
        /**
         * シェーダープログラムの一連のセットアップを実行する
         * @param renderer レンダラのインスタンス
         * @param textureId GPUのテクスチャID
         * @param vertexCount ポリゴンメッシュの頂点数
         * @param vertexArray ポリゴンメッシュの頂点配列
         * @param indexArray　インデックスバッファの頂点配列
         * @param uvArray uv配列
         * @param opacity 不透明度
         * @param colorBlendMode カラーブレンディングのタイプ
         * @param baseColor ベースカラー
         * @param isPremultipliedAlpha 乗算済みアルファかどうか
         * @param matrix4x4 Model-View-Projection行列
         */
        CubismShader_WebGL.prototype.setupShaderProgram = function (renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4) {
            if (!isPremultipliedAlpha) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("NoPremultipliedAlpha is not allowed");
            }
            if (this._shaderSets.getSize() == 0) {
                this.generateShaders();
            }
            // Blending
            var SRC_COLOR;
            var DST_COLOR;
            var SRC_ALPHA;
            var DST_ALPHA;
            if (renderer.getClippingContextBufferForMask() != null) // マスク生成時
             {
                var shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_SetupMask);
                this.gl.useProgram(shaderSet.shaderProgram);
                // テクスチャ設定
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
                this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
                // 頂点配列の設定(VBO)
                if (bufferData.vertex == null) {
                    bufferData.vertex = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
                this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
                // テクスチャ頂点の設定
                if (bufferData.uv == null) {
                    bufferData.uv = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
                this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
                // チャンネル
                var channelNo = renderer.getClippingContextBufferForMask()._layoutChannelNo;
                var colorChannel = renderer.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(channelNo);
                this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
                this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForMask()._matrixForMask.getArray());
                var rect = renderer.getClippingContextBufferForMask()._layoutBounds;
                this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
                SRC_COLOR = this.gl.ZERO;
                DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
                SRC_ALPHA = this.gl.ZERO;
                DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
            }
            else // マスク生成以外の場合
             {
                var masked = renderer.getClippingContextBufferForDraw() != null; // この描画オブジェクトはマスク対象か
                var offset = (masked ? 1 : 0);
                var shaderSet = new CubismShaderSet();
                switch (colorBlendMode) {
                    case CubismBlendMode.CubismBlendMode_Normal:
                    default:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.ONE;
                        DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                        SRC_ALPHA = this.gl.ONE;
                        DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
                        break;
                    case CubismBlendMode.CubismBlendMode_Additive:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_AddPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.ONE;
                        DST_COLOR = this.gl.ONE;
                        SRC_ALPHA = this.gl.ZERO;
                        DST_ALPHA = this.gl.ONE;
                        break;
                    case CubismBlendMode.CubismBlendMode_Multiplicative:
                        shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_MultPremultipliedAlpha + offset);
                        SRC_COLOR = this.gl.DST_COLOR;
                        DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                        SRC_ALPHA = this.gl.ZERO;
                        DST_ALPHA = this.gl.ONE;
                        break;
                }
                this.gl.useProgram(shaderSet.shaderProgram);
                // 頂点配列の設定
                if (bufferData.vertex == null) {
                    bufferData.vertex = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
                this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
                // テクスチャ頂点の設定
                if (bufferData.uv == null) {
                    bufferData.uv = this.gl.createBuffer();
                }
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
                this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
                this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
                if (masked) {
                    this.gl.activeTexture(this.gl.TEXTURE1);
                    var tex = renderer.getClippingContextBufferForDraw().getClippingManager().getColorBuffer();
                    this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
                    this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
                    // view座標をClippingContextの座標に変換するための行列を設定
                    this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForDraw()._matrixForDraw.getArray());
                    // 使用するカラーチャンネルを設定
                    var channelNo = renderer.getClippingContextBufferForDraw()._layoutChannelNo;
                    var colorChannel = renderer.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(channelNo);
                    this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
                }
                // テクスチャ設定
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
                this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
                // 座標変換
                this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
                this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
            }
            // IBOを作成し、データを転送
            if (bufferData.index == null) {
                bufferData.index = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
            this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
        };
        /**
         * シェーダープログラムを解放する
         */
        CubismShader_WebGL.prototype.releaseShaderProgram = function () {
            for (var i = 0; i < this._shaderSets.getSize(); i++) {
                this.gl.deleteProgram(this._shaderSets.at(i).shaderProgram);
                this._shaderSets.at(i).shaderProgram = 0;
                this._shaderSets.set(i, void 0);
                this._shaderSets.set(i, null);
            }
        };
        /**
         * シェーダープログラムを初期化する
         * @param vertShaderSrc 頂点シェーダのソース
         * @param fragShaderSrc フラグメントシェーダのソース
         */
        CubismShader_WebGL.prototype.generateShaders = function () {
            for (var i = 0; i < shaderCount; i++) {
                this._shaderSets.pushBack(new CubismShaderSet());
            }
            this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcSetupMask, Live2DCubismFramework.fragmentShaderSrcsetupMask);
            this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrc, Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha);
            this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(Live2DCubismFramework.vertexShaderSrcMasked, Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha);
            // 加算も通常と同じシェーダーを利用する
            this._shaderSets.at(3).shaderProgram = this._shaderSets.at(1).shaderProgram;
            this._shaderSets.at(4).shaderProgram = this._shaderSets.at(2).shaderProgram;
            // 乗算も通常と同じシェーダーを利用する
            this._shaderSets.at(5).shaderProgram = this._shaderSets.at(1).shaderProgram;
            this._shaderSets.at(6).shaderProgram = this._shaderSets.at(2).shaderProgram;
            // SetupMask
            this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position");
            this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord");
            this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0");
            this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag");
            this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor");
            // 通常（PremultipliedAlpha）
            this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position");
            this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord");
            this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0");
            this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix");
            this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor");
            // 通常（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position");
            this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord");
            this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0");
            this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1");
            this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix");
            this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag");
            this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor");
            // 加算（PremultipliedAlpha）
            this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position");
            this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord");
            this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0");
            this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix");
            this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor");
            // 加算（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position");
            this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord");
            this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0");
            this._shaderSets.at(4).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture1");
            this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix");
            this._shaderSets.at(4).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(4).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_channelFlag");
            this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor");
            // 乗算（PremultipliedAlpha）
            this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position");
            this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord");
            this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0");
            this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix");
            this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor");
            // 乗算（クリッピング、PremultipliedAlpha）
            this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position");
            this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord");
            this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0");
            this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1");
            this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix");
            this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix");
            this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag");
            this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor");
        };
        /**
         * シェーダプログラムをロードしてアドレスを返す
         * @param vertexShaderSource    頂点シェーダのソース
         * @param fragmentShaderSource  フラグメントシェーダのソース
         * @return シェーダプログラムのアドレス
         */
        CubismShader_WebGL.prototype.loadShaderProgram = function (vertexShaderSource, fragmentShaderSource) {
            // Create Shader Program
            var shaderProgram = this.gl.createProgram();
            var vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
            if (!vertShader) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Vertex shader compile error!");
                return 0;
            }
            var fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
            if (!fragShader) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Vertex shader compile error!");
                return 0;
            }
            // Attach vertex shader to program
            this.gl.attachShader(shaderProgram, vertShader);
            // Attach fragment shader to program
            this.gl.attachShader(shaderProgram, fragShader);
            // link program
            this.gl.linkProgram(shaderProgram);
            var linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
            // リンクに失敗したらシェーダーを削除
            if (!linkStatus) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Failed to link program: {0}", shaderProgram);
                this.gl.deleteShader(vertShader);
                vertShader = 0;
                this.gl.deleteShader(fragShader);
                fragShader = 0;
                if (shaderProgram) {
                    this.gl.deleteProgram(shaderProgram);
                    shaderProgram = 0;
                }
                return 0;
            }
            // Release vertex and fragment shaders.
            this.gl.deleteShader(vertShader);
            this.gl.deleteShader(fragShader);
            return shaderProgram;
        };
        /**
         * シェーダープログラムをコンパイルする
         * @param shaderType シェーダタイプ(Vertex/Fragment)
         * @param shaderSource シェーダソースコード
         *
         * @return コンパイルされたシェーダープログラム
         */
        CubismShader_WebGL.prototype.compileShaderSource = function (shaderType, shaderSource) {
            var source = shaderSource;
            var shader = this.gl.createShader(shaderType);
            this.gl.shaderSource(shader, source);
            this.gl.compileShader(shader);
            if (!shader) {
                var log = this.gl.getShaderInfoLog(shader);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_6__["CubismLogError"])("Shader compile log: {0} ", log);
            }
            var status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
            if (!status) {
                this.gl.deleteShader(shader);
                return null;
            }
            return shader;
        };
        CubismShader_WebGL.prototype.setGl = function (gl) {
            this.gl = gl;
        };
        return CubismShader_WebGL;
    }());
    Live2DCubismFramework.CubismShader_WebGL = CubismShader_WebGL;
    /**
     * CubismShader_WebGLのインナークラス
     */
    var CubismShaderSet = /** @class */ (function () {
        function CubismShaderSet() {
        }
        return CubismShaderSet;
    }());
    Live2DCubismFramework.CubismShaderSet = CubismShaderSet;
    var ShaderNames;
    (function (ShaderNames) {
        // SetupMask
        ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
        // Normal
        ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
        // Add
        ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 3] = "ShaderNames_AddPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipledAlpha"] = 4] = "ShaderNames_AddMaskedPremultipledAlpha";
        // Mult
        ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 5] = "ShaderNames_MultPremultipliedAlpha";
        ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 6] = "ShaderNames_MultMaskedPremultipliedAlpha";
    })(ShaderNames = Live2DCubismFramework.ShaderNames || (Live2DCubismFramework.ShaderNames = {}));
    ;
    Live2DCubismFramework.vertexShaderSrcSetupMask = "attribute vec4     a_position;" +
        "attribute vec2     a_texCoord;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_myPos;" +
        "uniform mat4       u_clipMatrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_clipMatrix * a_position;" +
        "   v_myPos = u_clipMatrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    Live2DCubismFramework.fragmentShaderSrcsetupMask = "precision mediump float;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_myPos;" +
        "uniform vec4       u_baseColor;" +
        "uniform vec4       u_channelFlag;" +
        "uniform sampler2D  s_texture0;" +
        "void main()" +
        "{" +
        "   float isInside = " +
        "       step(u_baseColor.x, v_myPos.x/v_myPos.w)" +
        "       * step(u_baseColor.y, v_myPos.y/v_myPos.w)" +
        "       * step(v_myPos.x/v_myPos.w, u_baseColor.z)" +
        "       * step(v_myPos.y/v_myPos.w, u_baseColor.w);" +
        "   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;" +
        "}";
    //----- バーテックスシェーダプログラム -----
    // Normal & Add & Mult 共通
    Live2DCubismFramework.vertexShaderSrc = "attribute vec4     a_position;" + //v.vertex
        "attribute vec2     a_texCoord;" + //v.texcoord
        "varying vec2       v_texCoord;" + //v2f.texcoord
        "uniform mat4       u_matrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_matrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    // Normal & Add & Mult 共通（クリッピングされたものの描画用）
    Live2DCubismFramework.vertexShaderSrcMasked = "attribute vec4     a_position;" +
        "attribute vec2     a_texCoord;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_clipPos;" +
        "uniform mat4       u_matrix;" +
        "uniform mat4       u_clipMatrix;" +
        "void main()" +
        "{" +
        "   gl_Position = u_matrix * a_position;" +
        "   v_clipPos = u_clipMatrix * a_position;" +
        "   v_texCoord = a_texCoord;" +
        "   v_texCoord.y = 1.0 - v_texCoord.y;" +
        "}";
    //----- フラグメントシェーダプログラム -----
    // Normal & Add & Mult 共通 （PremultipliedAlpha）
    Live2DCubismFramework.fragmentShaderSrcPremultipliedAlpha = "precision mediump float;" +
        "varying vec2       v_texCoord;" + //v2f.texcoord
        "uniform vec4       u_baseColor;" +
        "uniform sampler2D  s_texture0;" + //_MainTex
        "void main()" +
        "{" +
        "   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;" +
        "}";
    // Normal （クリッピングされたものの描画用、PremultipliedAlpha兼用）
    Live2DCubismFramework.fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;" +
        "varying vec2       v_texCoord;" +
        "varying vec4       v_clipPos;" +
        "uniform vec4       u_baseColor;" +
        "uniform vec4       u_channelFlag;" +
        "uniform sampler2D  s_texture0;" +
        "uniform sampler2D  s_texture1;" +
        "void main()" +
        "{" +
        "   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;" +
        "   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;" +
        "   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;" +
        "   col_formask = col_formask * maskVal;" +
        "   gl_FragColor = col_formask;" +
        "}";
    /**
     * WebGL用の描画命令を実装したクラス
     */
    var CubismRenderer_WebGL = /** @class */ (function (_super) {
        __extends(CubismRenderer_WebGL, _super);
        /**
         * コンストラクタ
         */
        function CubismRenderer_WebGL() {
            var _this = _super.call(this) || this;
            _this._clippingContextBufferForMask = null;
            _this._clippingContextBufferForDraw = null;
            _this._clippingManager = new CubismClippingManager_WebGL();
            _this.firstDraw = true;
            _this._textures = new csmMap();
            _this._sortedDrawableIndexList = new csmVector();
            _this._bufferData = {
                vertex: WebGLBuffer = null,
                uv: WebGLBuffer = null,
                index: WebGLBuffer = null
            };
            // テクスチャ対応マップの容量を確保しておく
            _this._textures.prepareCapacity(32, true);
            return _this;
        }
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         *
         * @param model モデルのインスタンス
         */
        CubismRenderer_WebGL.prototype.initialize = function (model) {
            if (model.isUsingMasking()) {
                this._clippingManager = new CubismClippingManager_WebGL(); // クリッピングマスク・バッファ前処理方式を初期化
                this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
            }
            this._sortedDrawableIndexList.resize(model.getDrawableCount(), 0);
            _super.prototype.initialize.call(this, model); // 親クラスの処理を呼ぶ
        };
        /**
         * WebGLテクスチャのバインド処理
         * CubismRendererにテクスチャを設定し、CubismRenderer内でその画像を参照するためのIndex値を戻り値とする
         * @param modelTextureNo セットするモデルテクスチャの番号
         * @param glTextureNo WebGLテクスチャの番号
         */
        CubismRenderer_WebGL.prototype.bindTexture = function (modelTextureNo, glTexture) {
            this._textures.setValue(modelTextureNo, glTexture);
        };
        /**
         * WebGLにバインドされたテクスチャのリストを取得する
         * @return テクスチャのリスト
         */
        CubismRenderer_WebGL.prototype.getBindedTextures = function () {
            return this._textures;
        };
        /**
         * クリッピングマスクバッファのサイズを設定する
         * マスク用のFrameBufferを破棄、再作成する為処理コストは高い
         * @param size クリッピングマスクバッファのサイズ
         */
        CubismRenderer_WebGL.prototype.setClippingMaskBufferSize = function (size) {
            // FrameBufferのサイズを変更するためにインスタンスを破棄・再作成する
            this._clippingManager.release();
            this._clippingManager = void 0;
            this._clippingManager = null;
            this._clippingManager = new CubismClippingManager_WebGL();
            this._clippingManager.setClippingMaskBufferSize(size);
            this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
        };
        /**
         * クリッピングマスクバッファのサイズを取得する
         * @return クリッピングマスクバッファのサイズ
         */
        CubismRenderer_WebGL.prototype.getClippingMaskBufferSize = function () {
            return this._clippingManager.getClippingMaskBufferSize();
        };
        /**
         * デストラクタ相当の処理
         */
        CubismRenderer_WebGL.prototype.release = function () {
            this._clippingManager.release();
            this._clippingManager = void 0;
            this._clippingManager = null;
            this.gl.deleteBuffer(this._bufferData.vertex);
            this._bufferData.vertex = null;
            this.gl.deleteBuffer(this._bufferData.uv);
            this._bufferData.uv = null;
            this.gl.deleteBuffer(this._bufferData.index);
            this._bufferData.index = null;
            this._bufferData = null;
            this._textures = null;
        };
        /**
         * モデルを描画する実際の処理
         */
        CubismRenderer_WebGL.prototype.doDrawModel = function () {
            //------------ クリッピングマスク・バッファ前処理方式の場合 ------------
            if (this._clippingManager != null) {
                this.preDraw();
                this._clippingManager.setupClippingContext(this.getModel(), this);
            }
            // 上記クリッピング処理内でも一度PreDrawを呼ぶので注意!!
            this.preDraw();
            var drawableCount = this.getModel().getDrawableCount();
            var renderOrder = this.getModel().getDrawableRenderOrders();
            // インデックスを描画順でソート
            for (var i = 0; i < drawableCount; ++i) {
                var order = renderOrder[i];
                this._sortedDrawableIndexList.set(order, i);
            }
            // 描画
            for (var i = 0; i < drawableCount; ++i) {
                var drawableIndex = this._sortedDrawableIndexList.at(i);
                // Drawableが表示状態でなければ処理をパスする
                if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
                    continue;
                }
                // クリッピングマスクをセットする
                this.setClippingContextBufferForDraw((this._clippingManager != null)
                    ? (this._clippingManager.getClippingContextListForDraw()).at(drawableIndex)
                    : null);
                this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
                this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), this.getModel().getDrawableVertexIndexCount(drawableIndex), this.getModel().getDrawableVertexCount(drawableIndex), this.getModel().getDrawableVertexIndices(drawableIndex), this.getModel().getDrawableVertices(drawableIndex), this.getModel().getDrawableVertexUvs(drawableIndex), this.getModel().getDrawableOpacity(drawableIndex), this.getModel().getDrawableBlendMode(drawableIndex));
            }
        };
        /**
         * [オーバーライド]
         * 描画オブジェクト（アートメッシュ）を描画する。
         * ポリゴンメッシュとテクスチャ番号をセットで渡す。
         * @param textureNo 描画するテクスチャ番号
         * @param indexCount 描画オブジェクトのインデックス値
         * @param vertexCount ポリゴンメッシュの頂点数
         * @param indexArray ポリゴンメッシュのインデックス配列
         * @param vertexArray ポリゴンメッシュの頂点配列
         * @param uvArray uv配列
         * @param opacity 不透明度
         * @param colorBlendMode カラー合成タイプ
         */
        CubismRenderer_WebGL.prototype.drawMesh = function (textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode) {
            // 裏面描画の有効・無効
            if (this.isCulling()) {
                this.gl.enable(this.gl.CULL_FACE);
            }
            else {
                this.gl.disable(this.gl.CULL_FACE);
            }
            this.gl.frontFace(this.gl.CCW); // Cubism3 OpenGLはマスク・アートメッシュ共にCCWが表面
            var modelColorRGBA = this.getModelColor();
            if (this.getClippingContextBufferForMask() == null) // マスク生成時以外
             {
                modelColorRGBA.A *= opacity;
                if (this.isPremultipliedAlpha()) {
                    modelColorRGBA.R *= modelColorRGBA.A;
                    modelColorRGBA.G *= modelColorRGBA.A;
                    modelColorRGBA.B *= modelColorRGBA.A;
                }
            }
            var drawtexture; // シェーダに渡すテクスチャ
            // テクスチャマップからバインド済みテクスチャＩＤを取得
            // バインドされていなければダミーのテクスチャIDをセットする
            if (this._textures.getValue(textureNo) != null) {
                drawtexture = this._textures.getValue(textureNo);
            }
            else {
                drawtexture = null;
            }
            CubismShader_WebGL.getInstance().setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), this.getMvpMatrix());
            // ポリゴンメッシュを描画する
            this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
            // 後処理
            this.gl.useProgram(null);
            this.setClippingContextBufferForDraw(null);
            this.setClippingContextBufferForMask(null);
        };
        /**
         * レンダラが保持する静的なリソースを解放する
         * WebGLの静的なシェーダープログラムを解放する
         */
        CubismRenderer_WebGL.doStaticRelease = function () {
            CubismShader_WebGL.deleteInstance();
        };
        /**
         * レンダーステートを設定する
         * @param fbo アプリケーション側で指定しているフレームバッファ
         * @param viewport ビューポート
         */
        CubismRenderer_WebGL.prototype.setRenderState = function (fbo, viewport) {
            s_fbo = fbo;
            s_viewport = viewport;
        };
        /**
         * 描画開始時の追加処理
         * モデルを描画する前にクリッピングマスクに必要な処理を実装している
         */
        CubismRenderer_WebGL.prototype.preDraw = function () {
            if (this.firstDraw) {
                this.firstDraw = false;
                // 拡張機能を有効にする
                this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") ||
                    this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                    this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
            }
            this.gl.disable(this.gl.SCISSOR_TEST);
            this.gl.disable(this.gl.STENCIL_TEST);
            this.gl.disable(this.gl.DEPTH_TEST);
            // カリング（1.0beta3）
            this.gl.frontFace(this.gl.CW);
            this.gl.enable(this.gl.BLEND);
            this.gl.colorMask(true, true, true, true);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null); // 前にバッファがバインドされていたら破棄する必要がある
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
        };
        /**
         * マスクテクスチャに描画するクリッピングコンテキストをセットする
         */
        CubismRenderer_WebGL.prototype.setClippingContextBufferForMask = function (clip) {
            this._clippingContextBufferForMask = clip;
        };
        /**
         * マスクテクスチャに描画するクリッピングコンテキストを取得する
         * @return マスクテクスチャに描画するクリッピングコンテキスト
         */
        CubismRenderer_WebGL.prototype.getClippingContextBufferForMask = function () {
            return this._clippingContextBufferForMask;
        };
        /**
         * 画面上に描画するクリッピングコンテキストをセットする
         */
        CubismRenderer_WebGL.prototype.setClippingContextBufferForDraw = function (clip) {
            this._clippingContextBufferForDraw = clip;
        };
        /**
         * 画面上に描画するクリッピングコンテキストを取得する
         * @return 画面上に描画するクリッピングコンテキスト
         */
        CubismRenderer_WebGL.prototype.getClippingContextBufferForDraw = function () {
            return this._clippingContextBufferForDraw;
        };
        /**
         * glの設定
         */
        CubismRenderer_WebGL.prototype.startUp = function (gl) {
            this.gl = gl;
            this._clippingManager.setGL(gl);
            CubismShader_WebGL.getInstance().setGl(gl);
        };
        return CubismRenderer_WebGL;
    }(CubismRenderer));
    Live2DCubismFramework.CubismRenderer_WebGL = CubismRenderer_WebGL;
    /**
     * レンダラが保持する静的なリソースを開放する
     */
    CubismRenderer.staticRelease = function () {
        CubismRenderer_WebGL.doStaticRelease();
    };
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmmap.ts":
/*!**********************************!*\
  !*** ./Framework/type/csmmap.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * Key-Valueのペアを定義するクラス
     * csmMapクラスの内部データで使用する。
     */
    var csmPair = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param key Keyとしてセットする値
         * @param value Valueとしてセットする値
         */
        function csmPair(key, value) {
            this.first = (key == undefined)
                ? null
                : key;
            this.second = (value == undefined)
                ? null
                : value;
        }
        return csmPair;
    }());
    Live2DCubismFramework.csmPair = csmPair;
    /**
     * マップ型
     */
    var csmMap = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param size 初期化時点で確保するサイズ
         */
        function csmMap(size) {
            if (size != undefined) {
                if (size < 1) {
                    this._keyValues = new Array();
                    this._dummyValue = null;
                    this._size = 0;
                }
                else {
                    this._keyValues = new Array(size);
                    this._size = size;
                }
            }
            else {
                this._keyValues = new Array();
                this._dummyValue = null;
                this._size = 0;
            }
        }
        /**
         * デストラクタ
         */
        csmMap.prototype.release = function () {
            this.clear();
        };
        /**
         * キーを追加する
         * @param key 新たに追加するキー
         */
        csmMap.prototype.appendKey = function (key) {
            // 新しくKey/Valueのペアを作る
            this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
            // 新しいkey/valueのインデックスは_size
            this._keyValues[this._size] = new csmPair(key);
            this._size += 1;
        };
        /**
         * 添字演算子[key]のオーバーロード(get)
         * @param key 添字から特定されるValue値
         */
        csmMap.prototype.getValue = function (key) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                return this._keyValues[found].second;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                return this._keyValues[this._size - 1].second;
            }
        };
        /**
         * 添字演算子[key]のオーバーロード(set)
         * @param key 添字から特定されるValue値
         * @param value 代入するValue値
         */
        csmMap.prototype.setValue = function (key, value) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                this._keyValues[found].second = value;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                this._keyValues[this._size - 1].second = value;
            }
        };
        /**
         * 引数で渡したKeyを持つ要素が存在するか
         * @param key 存在を確認するkey
         * @return true 引数で渡したkeyを持つ要素が存在する
         * @return false 引数で渡したkeyを持つ要素が存在しない
         */
        csmMap.prototype.isExist = function (key) {
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    return true;
                }
            }
            return false;
        };
        /**
         * keyValueのポインタを全て解放する
         */
        csmMap.prototype.clear = function () {
            this._keyValues = void 0;
            this._keyValues = null;
            this._keyValues = new Array();
            this._size = 0;
        };
        /**
         * コンテナのサイズを取得する
         *
         * @return コンテナのサイズ
         */
        csmMap.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
         * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
         */
        csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
            if (newSize > this._keyValues.length) {
                if (this._keyValues.length == 0) {
                    if (!fitToSize && newSize < csmMap.DefaultSize)
                        newSize = csmMap.DefaultSize;
                    this._keyValues.length = newSize;
                }
                else {
                    if (!fitToSize && newSize < this._keyValues.length * 2)
                        newSize = this._keyValues.length * 2;
                    this._keyValues.length = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmMap.prototype.begin = function () {
            var ite = new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmMap.prototype.end = function () {
            var ite = new iterator(this, this._size); // 終了
            return ite;
        };
        /**
         * コンテナから要素を削除する
         *
         * @param ite 削除する要素
         */
        csmMap.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._keyValues.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナの値を32ビット符号付き整数型でダンプする
         */
        csmMap.prototype.dumpAsInt = function () {
            for (var i = 0; i < this._size; i++) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("{0} ,", this._keyValues[i]);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("\n");
            }
        };
        csmMap.DefaultSize = 10; // コンテナの初期化のデフォルトサイズ
        return csmMap;
    }());
    Live2DCubismFramework.csmMap = csmMap;
    /**
     * csmMap<T>のイテレータ
     */
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, idx) {
            this._map = (v != undefined)
                ? v
                : new csmMap();
            this._index = (idx != undefined)
                ? idx
                : 0;
        }
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._map = ite._map;
            return this;
        };
        /**
         * 前置き++演算子のオーバーロード
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算子のオーバーロード
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子のオーバーロード
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._map, this._index++); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子のオーバーロード
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._map, this._index); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * *演算子のオーバーロード
         */
        iterator.prototype.ptr = function () {
            return this._map._keyValues[this._index];
        };
        /**
         * !=演算
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._map != ite._map);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmrectf.ts":
/*!************************************!*\
  !*** ./Framework/type/csmrectf.ts ***!
  \************************************/
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
     * 矩形形状（座標・長さはfloat値）を定義するクラス
     */
    var csmRect = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param x 左端X座標
         * @param y 上端Y座標
         * @param w 幅
         * @param h 高さ
         */
        function csmRect(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
        /**
         * 矩形中央のX座標を取得する
         */
        csmRect.prototype.getCenterX = function () {
            return this.x + 0.5 * this.width;
        };
        /**
         * 矩形中央のY座標を取得する
         */
        csmRect.prototype.getCenterY = function () {
            return this.y + 0.5 * this.height;
        };
        /**
         * 右側のX座標を取得する
         */
        csmRect.prototype.getRight = function () {
            return this.x + this.width;
        };
        /**
         * 下端のY座標を取得する
         */
        csmRect.prototype.getBottom = function () {
            return this.y + this.height;
        };
        /**
         * 矩形に値をセットする
         * @param r 矩形のインスタンス
         */
        csmRect.prototype.setRect = function (r) {
            this.x = r.x;
            this.y = r.y;
            this.width = r.width;
            this.height = r.height;
        };
        /**
         * 矩形中央を軸にして縦横を拡縮する
         * @param w 幅方向に拡縮する量
         * @param h 高さ方向に拡縮する量
         */
        csmRect.prototype.expand = function (w, h) {
            this.x -= w;
            this.y -= h;
            this.width += w * 2.0;
            this.height += h * 2.0;
        };
        return csmRect;
    }());
    Live2DCubismFramework.csmRect = csmRect;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmstring.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmstring.ts ***!
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
     * 文字列クラス。
     */
    var csmString = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function csmString(s) {
            this.s = s;
        }
        /**
         * 文字列を後方に追加する
         *
         * @param c 追加する文字列
         * @return 更新された文字列
         */
        csmString.prototype.append = function (c, length) {
            this.s += (length !== undefined)
                ? c.substr(0, length)
                : c;
            return this;
        };
        /**
         * 文字サイズを拡張して文字を埋める
         * @param length    拡張する文字数
         * @param v         埋める文字
         * @return 更新された文字列
         */
        csmString.prototype.expansion = function (length, v) {
            var ret = this;
            for (var i = 0; i < length; i++) {
                ret.append(v);
            }
            return ret;
        };
        /**
         * 文字列の長さをバイト数で取得する
         */
        csmString.prototype.getBytes = function () {
            return encodeURIComponent(this.s).replace(/%../g, "x").length;
        };
        /**
         * 文字列の長さを返す
         */
        csmString.prototype.getLength = function () {
            return this.s.length;
        };
        /**
         * 文字列比較　<
         * @param s 比較する文字列
         * @return true:    比較する文字列より小さい
         * @return false:   比較する文字列より大きい
         */
        csmString.prototype.isLess = function (s) {
            return this.s < s.s;
        };
        /**
         * 文字列比較 >
         * @param s 比較する文字列
         * @return true:    比較する文字列より大きい
         * @return false:   比較する文字列より小さい
         */
        csmString.prototype.isGreat = function (s) {
            return this.s > s.s;
        };
        /**
         * 文字列比較 ==
         * @param s 比較する文字列
         * @return true:    比較する文字列と等しい
         * @return false:   比較する文字列と異なる
         */
        csmString.prototype.isEqual = function (s) {
            return this.s == s;
        };
        /**
         * 文字列が空かどうか
         * @return true: 空の文字列
         * @return false: 値が設定されている
         */
        csmString.prototype.isEmpty = function () {
            return this.s.length == 0;
        };
        return csmString;
    }());
    Live2DCubismFramework.csmString = csmString;
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


/***/ }),

/***/ "./Framework/utils/cubismdebug.ts":
/*!****************************************!*\
  !*** ./Framework/utils/cubismdebug.ts ***!
  \****************************************/
/*! exports provided: CubismLogPrint, CubismLogPrintIn, CSM_ASSERT, CubismLogVerbose, CubismLogDebug, CubismLogInfo, CubismLogWarning, CubismLogError, Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrint", function() { return CubismLogPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrintIn", function() { return CubismLogPrintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_ASSERT", function() { return CSM_ASSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogVerbose", function() { return CubismLogVerbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogDebug", function() { return CubismLogDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogInfo", function() { return CubismLogInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogWarning", function() { return CubismLogWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogError", function() { return CubismLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cubismframeworkconfig */ "./Framework/cubismframeworkconfig.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismLogPrint = function (level, fmt, args) {
    Live2DCubismFramework.CubismDebug.print(level, "[CSM]" + fmt, args);
};
var CubismLogPrintIn = function (level, fmt, args) {
    CubismLogPrint(level, fmt + "\n", args);
};
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
var CubismLogVerbose = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogDebug = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogInfo = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogWarning = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogError = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] <= _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_VERBOSE"]) {
    CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose, "[V]" + fmt, args);
    };
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_DEBUG"]) {
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_INFO"]) {
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_WARNING"]) {
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_ERROR"]) {
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
//------------ LIVE2D NAMESPACE ------------
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * デバッグ用のユーティリティクラス。
     * ログの出力、バイトのダンプなど
     */
    var CubismDebug = /** @class */ (function () {
        /**
         * private コンストラクタ
         */
        function CubismDebug() {
        }
        /**
         * ログを出力する。第一引数にログレベルを設定する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param format 書式付き文字列
         * @param args 可変長引数
         */
        CubismDebug.print = function (logLevel, format, args) {
            // オプションで設定されたログ出力レベルを下回る場合はログに出さない
            if (logLevel < _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.getLoggingLevel()) {
                return;
            }
            var logPrint = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.coreLogFunction;
            if (!logPrint)
                return;
            var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
                return args[k];
            });
            logPrint(buffer);
        };
        /**
         * データから指定した長さだけダンプ出力する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param data ダンプするデータ
         * @param length ダンプする長さ
         */
        CubismDebug.dumpBytes = function (logLevel, data, length) {
            for (var i = 0; i < length; i++) {
                if (i % 16 == 0 && i > 0)
                    this.print(logLevel, "\n");
                else if (i % 8 == 0 && i > 0)
                    this.print(logLevel, "  ");
                this.print(logLevel, "{0} ", [(data[i] & 0xFF)]);
            }
            this.print(logLevel, "\n");
        };
        return CubismDebug;
    }());
    Live2DCubismFramework.CubismDebug = CubismDebug;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
//------------ LIVE2D NAMESPACE ------------


/***/ }),

/***/ "./Framework/utils/cubismjson.ts":
/*!***************************************!*\
  !*** ./Framework/utils/cubismjson.ts ***!
  \***************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismdebug */ "./Framework/utils/cubismdebug.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
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





var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmMap;
var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // StaticInitializeNotForClientCall()で初期化する
    var CSM_JSON_ERROR_TYPE_MISMATCH = "Error: type mismatch";
    var CSM_JSON_ERROR_INDEX_OF_BOUNDS = "Error: index out of bounds";
    /**
     * パースしたJSONエレメントの要素の基底クラス。
     */
    var Value = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function Value() {
        }
        /**
         * 要素を文字列型で返す(string)
         */
        Value.prototype.getRawString = function (defaultValue, indent) {
            return this.getString(defaultValue, indent);
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        Value.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return defaultValue;
        };
        /**
         * サイズを返す
         */
        Value.prototype.getSize = function () {
            return 0;
        };
        /**
         * 要素を配列で返す(Value[])
         */
        Value.prototype.getArray = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return defaultValue;
        };
        /**
         * 要素をコンテナで返す(array)
         */
        Value.prototype.getVector = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 要素をマップで返す(csmMap<csmString, Value>)
         */
        Value.prototype.getMap = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 添字演算子[index]
         */
        Value.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 添字演算子[string | csmString]
         */
        Value.prototype.getValueByString = function (s) {
            return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * マップのキー一覧をコンテナで返す
         *
         * @return マップのキーの一覧
         */
        Value.prototype.getKeys = function () {
            return Value.s_dummyKeys;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        Value.prototype.isError = function () {
            return false;
        };
        /**
         * Valueの種類がnullならtrue
         */
        Value.prototype.isNull = function () {
            return false;
        };
        /**
         * Valueの種類が真偽値ならtrue
         */
        Value.prototype.isBool = function () {
            return false;
        };
        /**
         * Valueの種類が数値型ならtrue
         */
        Value.prototype.isFloat = function () {
            return false;
        };
        /**
         * Valueの種類が文字列ならtrue
         */
        Value.prototype.isString = function () {
            return false;
        };
        /**
         * Valueの種類が配列ならtrue
         */
        Value.prototype.isArray = function () {
            return false;
        };
        /**
         * Valueの種類がマップ型ならtrue
         */
        Value.prototype.isMap = function () {
            return false;
        };
        Value.prototype.equals = function (value) {
            return false;
        };
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        Value.prototype.isStatic = function () {
            return false;
        };
        /**
         * Valueにエラー値をセットする
         */
        Value.prototype.setErrorNotForClientCall = function (errorStr) {
            return JsonError.errorValue;
        };
        /**
         * 初期化用メソッド
         */
        Value.staticInitializeNotForClientCall = function () {
            JsonBoolean.trueValue = new JsonBoolean(true);
            JsonBoolean.falseValue = new JsonBoolean(false);
            JsonError.errorValue = new JsonError("ERROR", true);
            this.nullValue = new JsonNullvalue();
            Value.s_dummyKeys = new csmVector();
        };
        /**
         * リリース用メソッド
         */
        Value.staticReleaseNotForClientCall = function () {
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
        };
        return Value;
    }());
    Live2DCubismFramework.Value = Value;
    /**
     * Ascii文字のみ対応した最小限の軽量JSONパーサ。
     * 仕様はJSONのサブセットとなる。
     * 設定ファイル(model3.json)などのロード用
     *
     * [未対応項目]
     * ・日本語などの非ASCII文字
     * ・eによる指数表現
     */
    var CubismJson = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismJson(buffer, length) {
            this._error = null;
            this._lineCount = 0;
            this._root = null;
            if (buffer != undefined) {
                this.parseBytes(buffer, length);
            }
        }
        /**
         * バイトデータから直接ロードしてパースする
         *
         * @param buffer バッファ
         * @param size バッファサイズ
         * @return CubismJsonクラスのインスタンス。失敗したらNULL
         */
        CubismJson.create = function (buffer, size) {
            var json = new CubismJson();
            var succeeded = json.parseBytes(buffer, size);
            if (!succeeded) {
                CubismJson.delete(json);
                return null;
            }
            else {
                return json;
            }
        };
        /**
         * パースしたJSONオブジェクトの解放処理
         *
         * @param instance CubismJsonクラスのインスタンス
         */
        CubismJson.delete = function (instance) {
            instance = null;
        };
        /**
         * パースしたJSONのルート要素を返す
         */
        CubismJson.prototype.getRoot = function () {
            return this._root;
        };
        /**
         *  UnicodeのバイナリをStringに変換
         *
         * @param buffer 変換するバイナリデータ
         * @return 変換後の文字列
         */
        CubismJson.prototype.arrayBufferToString = function (buffer) {
            var uint8Array = new Uint8Array(buffer);
            var str = "";
            for (var i = 0, len = uint8Array.length; i < len; ++i) {
                str += ("%" + this.pad(uint8Array[i].toString(16)));
            }
            str = decodeURIComponent(str);
            return str;
        };
        /**
         * エンコード、パディング
         */
        CubismJson.prototype.pad = function (n) {
            return n.length < 2
                ? "0" + n
                : n;
        };
        ;
        /**
         * JSONのパースを実行する
         * @param buffer    パース対象のデータバイト
         * @param size      データバイトのサイズ
         * return true : 成功
         * return false: 失敗
         */
        CubismJson.prototype.parseBytes = function (buffer, size) {
            var endPos = new Array(1); // 参照渡しにするため配列
            var decodeBuffer = this.arrayBufferToString(buffer);
            this._root = this.parseValue(decodeBuffer, size, 0, endPos);
            if (this._error) {
                var strbuf = '\0';
                strbuf = "Json parse error : @line " + (this._lineCount + 1) + "\n";
                this._root = new JsonString(strbuf);
                Object(_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("{0}", this._root.getRawString());
                return false;
            }
            else if (this._root == null) {
                this._root = new JsonError(new csmString(this._error), false); // rootは解放されるのでエラーオブジェクトを別途作成する
                return false;
            }
            return true;
        };
        /**
         * パース時のエラー値を返す
         */
        CubismJson.prototype.getParseError = function () {
            return this._error;
        };
        /**
         * ルート要素の次の要素がファイルの終端だったらtrueを返す
         */
        CubismJson.prototype.checkEndOfFile = function () {
            return this._root.getArray()[1].equals("EOF");
        };
        /**
         * JSONエレメントからValue(float,String,Value*,Array,null,true,false)をパースする
         * エレメントの書式に応じて内部でParseString(), ParseObject(), ParseArray()を呼ぶ
         *
         * @param   buffer      JSONエレメントのバッファ
         * @param   length      パースする長さ
         * @param   begin       パースを開始する位置
         * @param   outEndPos   パース終了時の位置
         * @return      パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var o = null;
            var i = begin;
            var f;
            for (; i < length; i++) {
                var c = buffer[i];
                switch (c) {
                    case '-':
                    case '.':
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        {
                            var afterString = new Array(1); // 参照渡しにするため
                            f = Object(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__["strtod"])(buffer.slice(i), afterString);
                            outEndPos[0] = buffer.indexOf(afterString[0]);
                            return new JsonFloat(f);
                        }
                    case '\"':
                        return new JsonString(this.parseString(buffer, length, i + 1, outEndPos)); // \"の次の文字から
                    case '[':
                        o = this.parseArray(buffer, length, i + 1, outEndPos);
                        return o;
                    case '{':
                        o = this.parseObject(buffer, length, i + 1, outEndPos);
                        return o;
                    case 'n': // null以外にない
                        if (i + 3 < length) {
                            o = new JsonNullvalue(); // 解放できるようにする
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse null";
                        }
                        return o;
                    case 't': // true以外にない
                        if (i + 3 < length) {
                            o = JsonBoolean.trueValue;
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse true";
                        }
                        return o;
                    case 'f': // false以外にない
                        if (i + 4 < length) {
                            o = JsonBoolean.falseValue;
                            outEndPos[0] = i + 5;
                        }
                        else {
                            this._error = "illegal ',' position";
                        }
                        return o;
                    case ',': // Array separator
                        this._error = "illegal ',' position";
                        return null;
                    case ']': // 不正な｝だがスキップする。配列の最後に不要な , があると思われる
                        outEndPos[0] = i; // 同じ文字を再処理
                        return null;
                    case '\n':
                        this._lineCount++;
                    case ' ':
                    case '\t':
                    case '\r':
                    default: // スキップ
                        break;
                }
            }
            this._error = "illegal end of value";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         *
         * @param   string  ->  パース対象の文字列
         * @param   length  ->  パースする長さ
         * @param   begin   ->  パースを開始する位置
         * @param  outEndPos   ->  パース終了時の位置
         * @return      パースした文F字列要素
         */
        CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
            if (this._error)
                return null;
            var i = begin;
            var c, c2;
            var ret = new csmString("");
            var bufStart = begin; // sbufに登録されていない文字の開始位置
            for (; i < length; i++) {
                c = string[i];
                switch (c) {
                    case '\"': // 終端の”、エスケープ文字は別に処理されるのでここに来ない
                        {
                            outEndPos[0] = i + 1; // ”の次の文字
                            ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            return ret.s;
                        }
                    case '//': // エスケープの場合
                        {
                            i++; // ２文字をセットで扱う
                            if (i - 1 > bufStart) {
                                ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            }
                            bufStart = i + 1; // エスケープ（２文字)の次の文字から
                            if (i < length) {
                                c2 = string[i];
                                switch (c2) {
                                    case '\\':
                                        ret.expansion(1, '\\');
                                        break;
                                    case '\"':
                                        ret.expansion(1, '\"');
                                        break;
                                    case '/':
                                        ret.expansion(1, '/');
                                        break;
                                    case 'b':
                                        ret.expansion(1, '\b');
                                        break;
                                    case 'f':
                                        ret.expansion(1, '\f');
                                        break;
                                    case 'n':
                                        ret.expansion(1, '\n');
                                        break;
                                    case 'r':
                                        ret.expansion(1, '\r');
                                        break;
                                    case 't':
                                        ret.expansion(1, '\t');
                                        break;
                                    case 'u':
                                        this._error = "parse string/unicord escape not supported";
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else {
                                this._error = "parse string/escape error";
                            }
                        }
                    default:
                        {
                            break;
                        }
                }
            }
            this._error = "parse string/illegal end";
            return null;
        };
        /**
         * JSONのオブジェクトエレメントをパースしてValueオブジェクトを返す
         *
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonMap();
            // Key: Value
            var key = "";
            var i = begin;
            var c = "";
            var localRetEndPos2 = Array(1);
            var ok = false;
            // , が続く限りループ
            for (; i < length; i++) {
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case '\"':
                            key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                            if (this._error) {
                                return null;
                            }
                            i = localRetEndPos2[0];
                            ok = true;
                            break FOR_LOOP; //-- loopから出る
                        case '}': // 閉じカッコ
                            outEndPos[0] = i + 1;
                            return ret; // 空
                        case ':':
                            this._error = "illegal ':' position";
                            break;
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "key not found";
                    return null;
                }
                ok = false;
                // : をチェック
                FOR_LOOP2: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ':':
                            ok = true;
                            i++;
                            break FOR_LOOP2;
                        case '}':
                            this._error = "illegal '}' position";
                            break;
                        case '\n': this._lineCount++;
                        // case ' ': case '\t' : case '\r':
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "':' not found";
                    return null;
                }
                // 値をチェック
                var value = this.parseValue(buffer, length, i, localRetEndPos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndPos2[0];
                // ret.put(key, value);
                ret.put(key, value);
                FOR_LOOP3: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            break FOR_LOOP3;
                        case '}':
                            outEndPos[0] = i + 1;
                            return ret; // 正常終了
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップ
                    }
                }
            }
            this._error = "illegal end of perseObject";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonArray();
            // key : value
            var i = begin;
            var c;
            var localRetEndpos2 = new Array(1);
            // , が続く限りループ
            for (; i < length; i++) {
                // : をチェック
                var value = this.parseValue(buffer, length, i, localRetEndpos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndpos2[0];
                if (value) {
                    ret.add(value);
                }
                // FOR_LOOP3:
                // boolean breakflag = false;
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            // breakflag = true;
                            // break; // 次のKEY, VAlUEへ
                            break FOR_LOOP;
                        case ']':
                            outEndPos[0] = i + 1;
                            return ret; // 終了
                        case '\n':
                            ++this._lineCount;
                        //case ' ': case '\t': case '\r':
                        default:
                            break; // スキップ
                    }
                }
            }
            ret = void 0;
            this._error = "illegal end of parseObject";
            return null;
        };
        return CubismJson;
    }());
    Live2DCubismFramework.CubismJson = CubismJson;
    /**
     * パースしたJSONの要素をfloat値として扱う
     */
    var JsonFloat = /** @class */ (function (_super) {
        __extends(JsonFloat, _super);
        /**
         * コンストラクタ
         */
        function JsonFloat(v) {
            var _this = _super.call(this) || this;
            _this._value = v;
            return _this;
        }
        /**
         * Valueの種類が数値型ならtrue
         */
        JsonFloat.prototype.isFloat = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonFloat.prototype.getString = function (defaultValue, indent) {
            var strbuf = '\0';
            this._value = parseFloat(strbuf);
            this._stringBuffer = strbuf;
            return this._stringBuffer;
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return parseInt(this._value.toString());
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0.0; }
            return this._value;
        };
        JsonFloat.prototype.equals = function (value) {
            if ('number' === typeof (value)) {
                // int
                if (Math.round(value)) {
                    return false;
                }
                // float
                else {
                    return value == this._value;
                }
            }
            return false;
        };
        return JsonFloat;
    }(Value));
    Live2DCubismFramework.JsonFloat = JsonFloat;
    /**
     * パースしたJSONの要素を真偽値として扱う
     */
    var JsonBoolean = /** @class */ (function (_super) {
        __extends(JsonBoolean, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonBoolean(v) {
            var _this = _super.call(this) || this;
            _this._boolValue = v;
            return _this;
        }
        /**
         * Valueの種類が真偽値ならtrue
         */
        JsonBoolean.prototype.isBool = function () {
            return true;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        JsonBoolean.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return this._boolValue;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonBoolean.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = this._boolValue
                ? "true"
                : "false";
            return this._stringBuffer;
        };
        JsonBoolean.prototype.equals = function (value) {
            if ('boolean' === typeof (value)) {
                return value == this._boolValue;
            }
            return false;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonBoolean.prototype.isStatic = function () {
            return true;
        };
        return JsonBoolean;
    }(Value));
    Live2DCubismFramework.JsonBoolean = JsonBoolean;
    /**
     * パースしたJSONの要素を文字列として扱う
     */
    var JsonString = /** @class */ (function (_super) {
        __extends(JsonString, _super);
        function JsonString(s) {
            var _this = _super.call(this) || this;
            if ('string' === typeof (s)) {
                _this._stringBuffer = s;
            }
            if (s instanceof csmString) {
                _this._stringBuffer = s.s;
            }
            return _this;
        }
        /**
         * Valueの種類が文字列ならtrue
         */
        JsonString.prototype.isString = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonString.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        JsonString.prototype.equals = function (value) {
            if ('string' === typeof (value)) {
                return this._stringBuffer == value;
            }
            if (value instanceof csmString) {
                return (this._stringBuffer == value.s);
            }
            return false;
        };
        return JsonString;
    }(Value));
    Live2DCubismFramework.JsonString = JsonString;
    /**
     * JSONパース時のエラー結果。文字列型のようにふるまう
     */
    var JsonError = /** @class */ (function (_super) {
        __extends(JsonError, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonError(s, isStatic) {
            var _this = this;
            if ("string" === typeof (s)) {
                _this = _super.call(this, s) || this;
            }
            else {
                _this = _super.call(this, s) || this;
            }
            _this._isStatic = isStatic;
            return _this;
        }
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        JsonError.prototype.isStatic = function () {
            return this._isStatic;
        };
        /**
         * エラー情報をセットする
         */
        JsonError.prototype.setErrorNotForClientCall = function (s) {
            this._stringBuffer = s;
            return this;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        JsonError.prototype.isError = function () {
            return true;
        };
        return JsonError;
    }(JsonString));
    Live2DCubismFramework.JsonError = JsonError;
    /**
     * パースしたJSONの要素をNULL値として持つ
     */
    var JsonNullvalue = /** @class */ (function (_super) {
        __extends(JsonNullvalue, _super);
        /**
         * コンストラクタ
         */
        function JsonNullvalue() {
            var _this = _super.call(this) || this;
            _this._stringBuffer = "NullValue";
            return _this;
        }
        /**
         * Valueの種類がNULL値ならtrue
         */
        JsonNullvalue.prototype.isNull = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonNullvalue.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonNullvalue.prototype.isStatic = function () {
            return true;
        };
        return JsonNullvalue;
    }(Value));
    Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
    /**
     * パースしたJSONの要素を配列として持つ
     */
    var JsonArray = /** @class */ (function (_super) {
        __extends(JsonArray, _super);
        /**
         * コンストラクタ
         */
        function JsonArray() {
            var _this = _super.call(this) || this;
            _this._array = new csmVector();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonArray.prototype.release = function () {
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
                var v = ite.ptr();
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
            }
        };
        /**
         * Valueの種類が配列ならtrue
         */
        JsonArray.prototype.isArray = function () {
            return true;
        };
        /**
         * 添字演算子[index]
         */
        JsonArray.prototype.getValueByIndex = function (index) {
            if (index < 0 || this._array.getSize() <= index) {
                return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
            }
            var v = this._array.at(index);
            if (v == null) {
                return Value.nullValue;
            }
            return v;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonArray.prototype.getValueByString = function (s) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonArray.prototype.getString = function (defaultValue, indent) {
            var stringBuffer = indent + "[\n";
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
                var v = ite.ptr();
                this._stringBuffer += indent + "" + v.getString(indent + " ") + "\n";
            }
            this._stringBuffer = stringBuffer + indent + "]\n";
            return this._stringBuffer;
        };
        /**
         * 配列要素を追加する
         * @param v 追加する要素
         */
        JsonArray.prototype.add = function (v) {
            this._array.pushBack(v);
        };
        /**
         * 要素をコンテナで返す(csmVector<Value>)
         */
        JsonArray.prototype.getVector = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return this._array;
        };
        /**
         * 要素の数を返す
         */
        JsonArray.prototype.getSize = function () {
            return this._array.getSize();
        };
        return JsonArray;
    }(Value));
    Live2DCubismFramework.JsonArray = JsonArray;
    /**
     * パースしたJSONの要素をマップとして持つ
     */
    var JsonMap = /** @class */ (function (_super) {
        __extends(JsonMap, _super);
        /**
         * コンストラクタ
         */
        function JsonMap() {
            var _this = _super.call(this) || this;
            _this._map = new csmMap();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonMap.prototype.release = function () {
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var v = ite.ptr().second;
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
                ite.preIncrement();
            }
        };
        /**
         * Valueの値がMap型ならtrue
         */
        JsonMap.prototype.isMap = function () {
            return true;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonMap.prototype.getValueByString = function (s) {
            if (s instanceof csmString) {
                var ret = this._map.getValue(s.s);
                if (ret == null) {
                    return Value.nullValue;
                }
                return ret;
            }
            for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
                if (iter.ptr().first == s) {
                    if (iter.ptr().second == null) {
                        return Value.nullValue;
                    }
                    return iter.ptr().second;
                }
            }
            return Value.nullValue;
        };
        /**
         * 添字演算子[index]
         */
        JsonMap.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonMap.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = indent + "{\n";
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var key = ite.ptr().first;
                var v = ite.ptr().second;
                this._stringBuffer += indent + " " + key + " : " + v.getString(indent + "   ") + " \n";
                ite.preIncrement();
            }
            this._stringBuffer += indent + "}\n";
            return this._stringBuffer;
        };
        /**
         * 要素をMap型で返す
         */
        JsonMap.prototype.getMap = function (defaultValue) {
            return this._map;
        };
        /**
         * Mapに要素を追加する
         */
        JsonMap.prototype.put = function (key, v) {
            this._map.setValue(key, v);
        };
        /**
         * Mapからキーのリストを取得する
         */
        JsonMap.prototype.getKeys = function () {
            if (!this._keys) {
                this._keys = new csmVector();
                var ite = this._map.begin();
                while (ite.notEqual(this._map.end())) {
                    var key = ite.ptr().first;
                    this._keys.pushBack(key);
                    ite.preIncrement();
                }
            }
            return this._keys;
        };
        /**
         * Mapの要素数を取得する
         */
        JsonMap.prototype.getSize = function () {
            return this._keys.getSize();
        };
        return JsonMap;
    }(Value));
    Live2DCubismFramework.JsonMap = JsonMap;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlcl9XZWJHTC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtcmVjdGYudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXZlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWpzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7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Q0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDcEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDdEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFbEkseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2pJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2pJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2hJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzVILElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRWxJLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNoSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNoSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENB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QUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Y7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBVSxDQUFDO2dCQUVyQyxJQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7b0JBQ0ksSUFBTSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFLTCxjQUFDO0lBQUQsQ0FBQyxDQXBKNEIsS0FBSyxHQW9KakM7SUFwSlksNkJBQU8sVUFvSm5CO0FBQ0wsQ0FBQyxFQTd6Q2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2ekNyQyIsImZpbGUiOiIvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyX1dlYkdMLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyX1dlYkdMLnRzXCIpO1xuIiwiLypcclxuKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKlxyXG4qIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4qL1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAg44Ot44Kw5Ye65Yqb6Zai5pWw44Gu6Kit5a6aXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vLS0tLS0tLS0tLSDjg63jgrDlh7rlipvjg6zjg5njg6sg6YG45oqe6aCF55uuIOWumue+qSAtLS0tLS0tLS0tXHJcbi8vLyDoqbPntLDjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfVkVSQk9TRTogbnVtYmVyID0gMDtcclxuLy8vIOODh+ODkOODg+OCsOODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9ERUJVRzogbnVtYmVyID0gMTtcclxuLy8vIEluZm/jg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfSU5GTzogbnVtYmVyID0gMjtcclxuLy8vIOitpuWRiuODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9XQVJOSU5HOiBudW1iZXIgPSAzO1xyXG4vLy8g44Ko44Op44O844Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0VSUk9SOiBudW1iZXIgPSA0O1xyXG4vLy8g44Ot44Kw5Ye65Yqb44Kq44OV6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX09GRjogbnVtYmVyID0gNTtcclxuXHJcbi8qKlxyXG4qIOODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOAglxyXG4qXHJcbiog5by35Yi255qE44Gr44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5aSJ44GI44KL5pmC44Gr5a6a576p44KS5pyJ5Yq544Gr44GZ44KL44CCXHJcbiogQ1NNX0xPR19MRVZFTF9WRVJCT1NFIO+9niBDU01fTE9HX0xFVkVMX09GRiDjgpLpgbjmip7jgZnjgovjgIJcclxuKi9cclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUw6IG51bWJlciA9IENTTV9MT0dfTEVWRUxfVkVSQk9TRTsiLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XHJcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgVxyXG4gICAgICogXHJcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgeOBmeOCi+OCr+ODqeOCueOAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoKTogY3NtU3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nIHwgY3NtU3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKGlkKSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbmV3IGNzbVN0cmluZyhpZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZOOCkuavlOi8g1xyXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXHJcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlk44KS5q+U6LyDXHJcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcclxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNOb3RFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pZDogY3NtU3RyaW5nOyAvLyBJROWQjVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWNsYXJlIHR5cGUgQ3ViaXNtSWRIYW5kbGUgPSBDdWJpc21JZDtcclxufSIsIi8qXHJcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbipcclxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkfSBmcm9tIFwiLi9jdWJpc21pZFwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xyXG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcclxuaW1wb3J0IEN1YmlzbUlkID0gY3ViaXNtaWQuQ3ViaXNtSWQ7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBJROWQjeOBrueuoeeQhlxyXG4gICAgICogXHJcbiAgICAgKiBJROWQjeOCkueuoeeQhuOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSWRNYW5hZ2VyXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWQ+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5zZXQoaSwgdm9pZCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pZHMgPSAgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgpLjg6rjgrnjg4jjgYvjgonnmbvpjLJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaWRzIElE5ZCN44Oq44K544OIXHJcbiAgICAgICAgICogQHBhcmFtIGNvdW50IElE44Gu5YCL5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWRzKGlkczogc3RyaW5nW10gfCBjc21TdHJpbmdbXSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcklkKGlkc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44KS55m76YyyXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWQoaWQ6IHN0cmluZyB8IGNzbVN0cmluZyk6IEN1YmlzbUlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBDdWJpc21JZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgPSB0aGlzLmZpbmRJZChpZCkpICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ3ViaXNtSWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnB1c2hCYWNrKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkLnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRJZChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogQ3ViaXNtSWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOBrueiuuiqjVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlrZjlnKjjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mKGlkKSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5maW5kSWQoaWQpICE9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXhpc3QoaWQucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5qSc57Si44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXHJcbiAgICAgICAgICogQHJldHVybiDnmbvpjLLjgZXjgozjgabjgYTjgotJROOAguOBquOBkeOCjOOBsE5VTEzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGZpbmRJZChpZDogc3RyaW5nKTogQ3ViaXNtSWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5faWRzLmF0KGkpLmdldFN0cmluZygpLmlzRXF1YWwoaWQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHMuYXQoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaWRzOiBjc21WZWN0b3I8Q3ViaXNtSWQ+OyAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44Gu44Oq44K544OIXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db3JlL2xpdmUyZGN1YmlzbWNvcmUuZC50c1wiIC8+XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWpzb259IGZyb20gXCIuL3V0aWxzL2N1YmlzbWpzb25cIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWRtYW5hZ2VyfSBmcm9tIFwiLi9pZC9jdWJpc21pZG1hbmFnZXJcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtcmVuZGVyZXJ9IGZyb20gXCIuL3JlbmRlcmluZy9jdWJpc21yZW5kZXJlclwiO1xyXG5pbXBvcnQge0N1YmlzbUxvZ0luZm8sIEN1YmlzbUxvZ1dhcm5pbmcsIENTTV9BU1NFUlR9IGZyb20gXCIuL3V0aWxzL2N1YmlzbWRlYnVnXCI7XHJcbmltcG9ydCBWYWx1ZSA9IGN1YmlzbWpzb24uVmFsdWU7XHJcbmltcG9ydCBDdWJpc21JZE1hbmFnZXIgPSBjdWJpc21pZG1hbmFnZXIuQ3ViaXNtSWRNYW5hZ2VyO1xyXG5pbXBvcnQgQ3ViaXNtUmVuZGVyZXIgPSBjdWJpc21yZW5kZXJlci5DdWJpc21SZW5kZXJlcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJ0b2Qoczogc3RyaW5nLCBlbmRQdHI6IHN0cmluZ1tdKTogbnVtYmVyXHJcbntcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMTsgOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlc3RDOiBzdHJpbmcgPSBzLnNsaWNlKGkgLSAxLCBpKTtcclxuXHJcbiAgICAgICAgLy8g5oyH5pWw44O744Oe44Kk44OK44K544Gu5Y+v6IO95oCn44GM44GC44KL44Gu44Gn44K544Kt44OD44OX44GZ44KLXHJcbiAgICAgICAgaWYodGVzdEM9PSdlJyB8fCB0ZXN0Qz09Jy0nIHx8IHRlc3RDID09ICdFJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbuOAgOOAgOOAgCAgLy8g5paH5a2X5YiX44Gu56+E5Zuy44KS5bqD44GS44Gm44GE44GPXHJcbiAgICAgICAgbGV0IHRlc3Q6IHN0cmluZyA9IHMuc3Vic3RyaW5nKDAsIGkpO1xyXG4gICAgICAgIGxldCBudW1iZXI6IG51bWJlciA9IE51bWJlcih0ZXN0KTtcclxuICAgICAgICBpZihpc05hTihudW1iZXIpKVxyXG4gICAgICAgIHtcclxu44CA44CA44CA44CAICAgIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG7jgIDjgIDjgIAgLy8g5pyA5b6M44Gr5pWw5YCk44Go44GX44Gm44Gn44GN44GfaW5kZXjjgpLmoLzntI3jgZfjgabjgYrjgY9cclxuICAgICAgICBpbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgICBsZXQgZCA9IHBhcnNlRmxvYXQocyk7ICAvLyDjg5Hjg7zjgrnjgZfjgZ/mlbDlgKRcclxuXHJcbiAgICBpZihpc05hTihkKSlcclxuICAgIHtcclxu44CA44CA44CA44CAIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxyXG4gICAgICAgIGQgPSBOYU47XHJcbiAgICB9XHJcblxyXG4gICAgZW5kUHRyWzBdID0gcy5zbGljZShpbmRleCk744CALy8g5b6M57aa44Gu5paH5a2X5YiXXHJcblxyXG4gICAgcmV0dXJuIGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8vIOODleOCoeOCpOODq+OCueOCs+ODvOODl+OBruWkieaVsOOCkuWIneacn+WMllxyXG4gICAgXHJcbiAgICBsZXQgc19pc1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBzX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBzX29wdGlvbjogT3B0aW9uID0gbnVsbDtcclxuICAgIGxldCBzX2N1YmlzbUlkTWFuYWdlcjogQ3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBGcmFtZXdvcmvlhoXjgafkvb/jgYblrprmlbDjga7lrqPoqIBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb25zdGFudFxyXG4gICAge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhPZmZzZXQ6IG51bWJlciA9IDA7ICAgICAvLyDjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqrjg5Xjgrvjg4Pjg4jlgKRcclxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4U3RlcDogbnVtYmVyID0gMjsgICAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44K544OG44OD44OX5YCkXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNzbURlbGV0ZTxUPihhZGRyZXNzOiBUKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCFhZGRyZXNzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkcmVzcyA9IHZvaWQgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpdmUyRCBDdWJpc20zIE9yaWdpbmFsIFdvcmtmbG93IFNES+OBruOCqOODs+ODiOODquODneOCpOODs+ODiFxyXG4gICAgICog5Yip55So6ZaL5aeL5pmC44GvQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeOCkuWRvOOBs+OAgUN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCnjgafntYLkuobjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUZyYW1ld29ya1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjlj6/og73jgavjgZnjgovjgIJcclxuICAgICAgICAgKiAgQVBJ44KS5a6f6KGM44GZ44KL5YmN44Gr5b+F44Ga44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44CCXHJcbiAgICAgICAgICogIOS4gOW6pua6luWCmeOBjOWujOS6huOBl+OBpuS7pemZjeOBr+OAgeWGjeOBs+Wun+ihjOOBl+OBpuOCguWGhemDqOWHpueQhuOBjOOCueOCreODg+ODl+OBleOCjOOBvuOBmeOAglxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICAgIG9wdGlvbiAgICAgIE9wdGlvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiAgIOa6luWCmeWHpueQhuOBjOWujOS6huOBl+OBn+OCiXRydWXjgYzov5Tjgorjgb7jgZnjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXJ0VXAob3B0aW9uOiBPcHRpb24gPSBudWxsKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGFscmVhZHkgZG9uZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNfb3B0aW9uID0gb3B0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYoc19vcHRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbVNldExvZ0Z1bmN0aW9uKHNfb3B0aW9uLmxvZ0Z1bmN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gTGl2ZTJEIEN1YmlzbSBDb3Jl44OQ44O844K444On44Oz5oOF5aCx44KS6KGo56S6XHJcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uOiBudW1iZXIgPSBMaXZlMkRDdWJpc21Db3JlLlZlcnNpb24uY3NtR2V0VmVyc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFqb3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4RkYwMDAwMDApID4+IDI0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbm9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweDAwRkYwMDAwKSA+PiAxNik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaDogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMDAwRkZGRikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbk51bWJlcjogbnVtYmVyID0gdmVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKGBMaXZlMkQgQ3ViaXNtIENvcmUgdmVyc2lvbjogezB9LnsxfS57Mn0gKHszfSlgLCBcclxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1ham9yKS5zbGljZSgtMiksXHJcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtaW5vcikuc2xpY2UoLTIpLFxyXG4gICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBwYXRjaCkuc2xpY2UoLTQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb25OdW1iZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuc3RhcnRVcCgpIGlzIGNvbXBsZXRlLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0VXAoKeOBp+WIneacn+WMluOBl+OBn0N1YmlzbUZyYW1ld29ya+OBruWQhOODkeODqeODoeODvOOCv+OCkuOCr+ODquOCouOBl+OBvuOBmeOAglxyXG4gICAgICAgICAqIERpc3Bvc2UoKeOBl+OBn0N1YmlzbUZyYW1ld29ya+OCkuWGjeWIqeeUqOOBmeOCi+mam+OBq+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2xlYW5VcCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc19vcHRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu44Oq44K944O844K544KS5Yid5pyf5YyW44GX44Gm44Oi44OH44Or44KS6KGo56S65Y+v6IO944Gq54q25oWL44Gr44GX44G+44GZ44CCPGJyPlxyXG4gICAgICAgICAqICAgICDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XHJcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovpgKPntprliJ3mnJ/ljJbjgqzjg7zjg4kgLS0tXHJcbiAgICAgICAgICAgIC8vIOmAo+e2muOBl+OBpuODquOCveODvOOCueeiuuS/neOBjOihjOOCj+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICAgICAgICAvLyDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcclxuICAgICAgICAgICAgaWYgKHNfaXNJbml0aWFsaXplZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgc2tpcHBlZCwgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vLS0tLSBzdGF0aWMg5Yid5pyf5YyWIC0tLS1cclxuICAgICAgICAgICAgVmFsdWUuc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTtcclxuXHJcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbmV3IEN1YmlzbUlkTWFuYWdlcigpO1xyXG5cclxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIGlzIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7lhajjgabjga7jg6rjgr3jg7zjgrnjgpLop6PmlL7jgZfjgb7jgZnjgIJcclxuICAgICAgICAgKiAgICAgIOOBn+OBoOOBl+OAgeWklumDqOOBp+eiuuS/neOBleOCjOOBn+ODquOCveODvOOCueOBq+OBpOOBhOOBpuOBr+ino+aUvuOBl+OBvuOBm+OCk+OAglxyXG4gICAgICAgICAqICAgICAg5aSW6YOo44Gn6YGp5YiH44Gr56C05qOE44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkaXNwb3NlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xyXG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL5pyq5Yid5pyf5YyW6Kej5pS+44Ks44O844OJIC0tLVxyXG4gICAgICAgICAgICAvLyBkaXNwb3NlKCnjgZnjgovjgavjga/lhYjjgatpbml0aWFsaXplKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcclxuICAgICAgICAgICAgaWYoIXNfaXNJbml0aWFsaXplZCkgICAgLy8gZmFsc2UuLi7jg6rjgr3jg7zjgrnmnKrnorrkv53jga7loLTlkIhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgc2tpcHBlZCwgbm90IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVmFsdWUuc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTtcclxuXHJcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8g44Os44Oz44OA44Op44Gu6Z2Z55qE44Oq44K944O844K577yI44K344Kn44O844OA44OX44Ot44Kw44Op44Og5LuW77yJ44KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICAgIEN1YmlzbVJlbmRlcmVyLnN0YXRpY1JlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgaXMgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBn+OBi+OBqeOBhuOBi1xyXG4gICAgICAgICAqIEByZXR1cm4gQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNTdGFydGVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBruODquOCveODvOOCueWIneacn+WMluOBjOOBmeOBp+OBq+ihjOOCj+OCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Oq44K944O844K556K65L+d44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNJbml0aWFsaXplZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc19pc0luaXRpYWxpemVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29yZSBBUEnjgavjg5DjgqTjg7Pjg4njgZfjgZ/jg63jgrDplqLmlbDjgpLlrp/ooYzjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcHJhcmFtIG1lc3NhZ2Ug44Ot44Kw44Oh44OD44K744O844K4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjb3JlTG9nRnVuY3Rpb24obWVzc2FnZTogc3RyaW5nKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGlmIGxvZ2dpbmcgbm90IHBvc3NpYmxlLlxyXG4gICAgICAgICAgICBpZighTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbUdldExvZ0Z1bmN0aW9uKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTGl2ZTJEQ3ViaXNtQ29yZS5Mb2dnaW5nLmNzbUdldExvZ0Z1bmN0aW9uKCkobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApOOCkui/lOOBmeOAglxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiAg54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMb2dnaW5nTGV2ZWwoKTogTG9nTGV2ZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChzX29wdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc19vcHRpb24ubG9nZ2luZ0xldmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5Mb2dMZXZlbF9PZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROODnuODjeODvOOCuOODo+OBruOCpOODs+OCueOCv+ODs+OCueOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtTWFuYWdlcuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SWRNYW5hZ2VyKCk6IEN1YmlzbUlkTWFuYWdlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNfY3ViaXNtSWRNYW5hZ2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6Z2Z55qE44Kv44Op44K544Go44GX44Gm5L2/55So44GZ44KLXHJcbiAgICAgICAgICog44Kk44Oz44K544K/44Oz44K55YyW44GV44Gb44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25cclxue1xyXG4gICAgbG9nRnVuY3Rpb246IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb247ICAgLy8g44Ot44Kw5Ye65Yqb44Gu6Zai5pWw44Kq44OW44K444Kn44Kv44OIXHJcbiAgICBsb2dnaW5nTGV2ZWw6IExvZ0xldmVsOyAgLy8g44Ot44Kw5Ye65Yqb44Os44OZ44Or44Gu6Kit5a6aXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDjg63jgrDlh7rlipvjga7jg6zjg5njg6tcclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsXHJcbntcclxuICAgIExvZ0xldmVsX1ZlcmJvc2UgPSAwLCAgIC8vIOips+e0sOODreOCsFxyXG4gICAgTG9nTGV2ZWxfRGVidWcsICAgICAgICAgLy8g44OH44OQ44OD44Kw44Ot44KwXHJcbiAgICBMb2dMZXZlbF9JbmZvLCAgICAgICAgICAvLyBJbmZv44Ot44KwXHJcbiAgICBMb2dMZXZlbF9XYXJuaW5nLCAgICAgICAvLyDorablkYrjg63jgrBcclxuICAgIExvZ0xldmVsX0Vycm9yLCAgICAgICAgIC8vIOOCqOODqeODvOODreOCsFxyXG4gICAgTG9nTGV2ZWxfT2ZmICAgICAgICAgICAgLy8g44Ot44Kw5Ye65Yqb54Sh5Yq5XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIDR4NOOBruihjOWIl1xyXG4gICAgICogXHJcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdHJpeDQ0XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XHJcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj5fjgZHlj5bjgaPjgZ/vvJLjgaTjga7ooYzliJfjga7kuZfnrpfjgpLooYzjgYbjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXHJcbiAgICAgICAgICogQHBhcmFtIGIg6KGM5YiXYlxyXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBGbG9hdDMyQXJyYXksIGI6IEZsb2F0MzJBcnJheSwgZHN0OiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbjsgKytqKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbG9hZElkZW50aXR5KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooYzliJfjgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTY7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruenu+WLlemHj+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVZKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1jou7jjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdICogc3JjICsgdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm55u45a++55qE44Gr56e75YuV44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzY2FsZVJlbGF0aXZlKHg6IG51bWJlciwgeTpudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsIFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLCAgICAxLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xyXG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdHJpeDQ0fSBmcm9tICcuLi9tYXRoL2N1YmlzbW1hdHJpeDQ0JztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcclxuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XHJcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjgpLlh6bnkIbjgZnjgovjg6zjg7Pjg4Djg6lcclxuICAgICAqIFxyXG4gICAgICog44K144OW44Kv44Op44K544Gr55Kw5aKD5L6d5a2Y44Gu5o+P55S75ZG95Luk44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdWJpc21SZW5kZXJlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBl+OBpuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtUmVuZGVyZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUocmVuZGVyZXI6IEN1YmlzbVJlbmRlcmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZHJhd01vZGVsKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0TW9kZWwoKSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvRHJhd01vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog6YWN5YiX44Gv6KSH6KO944GV44KM44KL44Gu44Gn44CB5YWD44Gu6YWN5YiX44Gv5aSW44Gn56C05qOE44GX44Gm6Imv44GEXHJcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDQ0IE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TXZwTWF0cml4KG1hdHJpeDQ0OiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5zZXRNYXRyaXgobWF0cml4NDQuZ2V0QXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE12cE1hdHJpeCgpOiBDdWJpc21NYXRyaXg0NFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX212cE1hdHJpeDR4NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgovvvIgxLjDjgYzmqJnmupbjga7nirbmhYvvvIlcclxuICAgICAgICAgKiBAcGFyYW0gcmVkIOi1pOODgeODo+ODs+ODjeODq+OBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSBncmVlbiDnt5Hjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gYmx1ZSDpnZLjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gYWxwaGEgzrHjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TW9kZWxDb2xvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocmVkIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWQgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyZWQgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZCA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZ3JlZW4gPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdyZWVuID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ3JlZW4gPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdyZWVuID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihibHVlIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBibHVlID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYmx1ZSA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmx1ZSA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxwaGEgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFscGhhID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYWxwaGEgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFscGhhID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLlIgPSByZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuRyA9IGdyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkIgPSBibHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkEgPSBhbHBoYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgosoMS4w44GM5qiZ5rqW44Gu54q25oWLKVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbENvbG9yKCk6IEN1YmlzbVRleHR1cmVDb2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fbW9kZWxDb2xvcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0SXNQcmVtdWx0aXBsaWVkQWxwaGEoZW5hYmxlOiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBlbmFibGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5LmX566X5riI44G/44GuzrHnhKHlirlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXHJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gY3VsbGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgqvjg6rjg7PjgrDmnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCq+ODquODs+OCsOeEoeWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0N1bGxpbmcoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+WApOOBruW9semfv+W6puOBr+ODrOODs+ODgOODqeOBruWun+ijheOBq+S+neWtmOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRBbmlzb3Ryb3B5KG46IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSBuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOeVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBbmlzb3Ryb3B5KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvcnRvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6vjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBDdWJpc21Nb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IgPSBuZXcgQ3ViaXNtVGV4dHVyZUNvbG9yKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJZcclxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5sb2FkSWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+aPj+eUu+OBruWun+ijhVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkb0RyYXdNb2RlbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvIjjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvInjgpLmj4/nlLvjgZnjgotcclxuICAgICAgICAgKiDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjgajjg4bjgq/jgrnjg4Hjg6Pnlarlj7fjgpLjgrvjg4Pjg4jjgafmuKHjgZnjgIJcclxuICAgICAgICAgKiBAcGFyYW0gdGV4dHVyZU5vIOaPj+eUu+OBmeOCi+ODhuOCr+OCueODgeODo+eVquWPt1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleENvdW50IOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrnphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcclxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O844OW44Os44Oz44OH44Kj44Oz44Kw44Gu44K/44Kk44OXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRyYXdNZXNoKHRleHR1cmVObzogbnVtYmVyLCBpbmRleENvdW50OiBudW1iZXIsIHZlcnRleENvdW50OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LCB2ZXJ0ZXhBcnJheTogRmxvYXQzMkFycmF5LCB1dkFycmF5OiBGbG9hdDMyQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlciwgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZTogRnVuY3Rpb247XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfbXZwTWF0cml4NHg0OiBDdWJpc21NYXRyaXg0NDsgICAgICAgICAgICAgICAgICAvLyBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbENvbG9yOiBDdWJpc21UZXh0dXJlQ29sb3I7ICAgICAgICAgICAgICAgIC8vIOODouODh+ODq+iHquS9k+OBruOCq+ODqeODvO+8iFJHQkHvvIlcclxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxyXG4gICAgICAgIHByb3RlY3RlZCBfaXNQcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAvLyDkuZfnrpfmuIjjgb/OseOBquOCiXRydWVcclxuICAgICAgICBwcm90ZWN0ZWQgX2FuaXNvcnRvcHk6IGFueTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XHJcbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9Ob3JtYWwgPSAwLCAgICAgICAgIC8vIOmAmuW4uFxyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZSA9IDIsIC8vIOS5l+eul1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOODhuOCr+OCueODgeODo+OBruiJsuOCklJHQkHjgafmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVRleHR1cmVDb2xvclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUiA9IDEuMDtcclxuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLkIgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuQSA9IDEuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFI6IG51bWJlcjsgIC8vIOi1pOODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEI6IG51bWJlcjsgIC8vIOmdkuODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEE6IG51bWJlcjsgIC8vIM6x44OB44Oj44Oz44ON44OrXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29ya30gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21yZWN0fSBmcm9tIFwiLi4vdHlwZS9jc21yZWN0ZlwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4vY3ViaXNtcmVuZGVyZXJcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gXCIuLi9tb2RlbC9jdWJpc21tb2RlbFwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJzaW1tYXRyaXg0NH0gZnJvbSBcIi4uL21hdGgvY3ViaXNtbWF0cml4NDRcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcclxuaW1wb3J0IHtDdWJpc21Mb2dFcnJvcn0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWRlYnVnXCI7XHJcbmltcG9ydCBDb25zdGFudCA9IGN1YmlzbWZyYW1ld29yay5Db25zdGFudDtcclxuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3Vic2ltbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XHJcbmltcG9ydCBjc21SZWN0ID0gY3NtcmVjdC5jc21SZWN0O1xyXG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcclxuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XHJcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xyXG5pbXBvcnQgQ3ViaXNtUmVuZGVyZXIgPSBjdWJpc21yZW5kZXJlci5DdWJpc21SZW5kZXJlcjtcclxuaW1wb3J0IEN1YmlzbUJsZW5kTW9kZSA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbUJsZW5kTW9kZTtcclxuaW1wb3J0IEN1YmlzbVRleHR1cmVDb2xvciA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbVRleHR1cmVDb2xvcjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIGNvbnN0IENvbG9yQ2hhbm5lbENvdW50OiBudW1iZXIgPSA0OyAgICAvLyDlrp/pqJPmmYLjgasx44OB44Oj44Oz44ON44Or44Gu5aC05ZCI44GvMeOAgVJHQuOBoOOBkeOBruWgtOWQiOOBrzPjgIHjgqLjg6vjg5XjgqHjgoLlkKvjgoHjgovloLTlkIjjga80XHJcblxyXG4gICAgY29uc3Qgc2hhZGVyQ291bnQ6IG51bWJlciA9IDc7IC8vIOOCt+OCp+ODvOODgOODvOOBruaVsCA9IOODnuOCueOCr+eUn+aIkOeUqCArICjpgJrluLjnlKggKyDliqDnrpcgKyDkuZfnrpcpICogKOODnuOCueOCr+eEoeOBruS5l+eul+a4iOOCouODq+ODleOCoeWvvuW/nOeJiCArIOODnuOCueOCr+acieOBruS5l+eul+a4iOOCouODq+ODleOCoeWvvuW/nOeJiClcclxuICAgIGxldCBzX2luc3RhbmNlOiBDdWJpc21TaGFkZXJfV2ViR0w7XHJcbiAgICBsZXQgc192aWV3cG9ydDogbnVtYmVyW107XHJcbiAgICBsZXQgc19mYm86IFdlYkdMRnJhbWVidWZmZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7lh6bnkIbjgpLlrp/ooYzjgZnjgovjgq/jg6njgrlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUNsaXBwaW5nTWFuYWdlcl9XZWJHTFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODqeODvOODgeODo+ODs+ODjeODq++8iFJHQkHvvInjga7jg5Xjg6njgrDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gY2hhbm5lbE5vIOOCq+ODqeODvOODgeODo+ODs+ODjeODq++8iFJHQkHvvInjga7nlarlj7fvvIgwOlIsIDE6RywgMjpCLCAzOkHvvIlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0Q2hhbm5lbEZsYWdBc0NvbG9yKGNoYW5uZWxObzogbnVtYmVyKTogQ3ViaXNtVGV4dHVyZUNvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbENvbG9ycy5hdChjaGFubmVsTm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OG44Oz44Od44Op44Oq44Gu44Os44Oz44OA44O844OG44Kv44K544OB44Oj44Gu44Ki44OJ44Os44K544KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogRnJhbWVCdWZmZXJPYmplY3TjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjgIHmlrDjgZfjgY/nlJ/miJDjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODvOODhuOCr+OCueODgeODo+OBruOCouODieODrOOCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNYXNrUmVuZGVyVGV4dHVyZSgpOiBXZWJHTEZyYW1lYnVmZmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBXZWJHTEZyYW1lYnVmZmVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIOODhuODs+ODneODqeODquOBrlJlbmRlclRleHR1cmXjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgICAgaWYodGhpcy5fbWFza1RleHR1cmUgJiYgdGhpcy5fbWFza1RleHR1cmUudGV4dHVyZSAhPSAwKSAgLy8g5YmN5Zue5L2/44Gj44Gf44KC44Gu44KS6L+U44GZXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hc2tUZXh0dXJlLmZyYW1lTm8gPSB0aGlzLl9jdXJyZW50RnJhbWVObztcclxuICAgICAgICAgICAgICAgIHJldCA9IHRoaXMuX21hc2tUZXh0dXJlLnRleHR1cmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJldCA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBGcmFtZUJ1ZmZlck9iamVjdOOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOAgeaWsOOBl+OBj+eUn+aIkOOBmeOCi1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODkOODg+ODleOCoeOCteOCpOOCuuOCkuWPluW+l1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZTogbnVtYmVyID0gdGhpcy5fY2xpcHBpbmdNYXNrQnVmZmVyU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuX2NvbG9yQnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAgLHRoaXMuZ2wuUkdCQSwgc2l6ZSwgc2l6ZSwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5nbC5MSU5FQVIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTElORUFSKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXQgPSB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCByZXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCh0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmdsLkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuX2NvbG9yQnVmZmVyLCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHNfZmJvKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrVGV4dHVyZSA9IG5ldyBDdWJpc21SZW5kZXJUZXh0dXJlUmVzb3VyY2UodGhpcy5fY3VycmVudEZyYW1lTm8sIHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXZWJHTOODrOODs+ODgOODquODs+OCsOOCs+ODs+ODhuOCreOCueODiOOCkuioreWumuOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBnbCBXZWJHTOODrOODs+ODgOODquODs+OCsOOCs+ODs+ODhuOCreOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRHTChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oe44K544Kv44GV44KM44KL5o+P55S744Kq44OW44K444Kn44Kv44OI576k5YWo5L2T44KS5Zuy44KA55+p5b2i77yI44Oi44OH44Or5bqn5qiZ57O777yJ44KS6KiI566X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSBjbGlwcGluZ0NvbnRleHQg44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Kz44Oz44OG44Kt44K544OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNhbGNDbGlwcGVkRHJhd1RvdGFsQm91bmRzKG1vZGVsOiBDdWJpc21Nb2RlbCwgY2xpcHBpbmdDb250ZXh0OiBDdWJpc21DbGlwcGluZ0NvbnRleHQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDooqvjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/vvIjjg57jgrnjgq/jgZXjgozjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvInjga7lhajkvZPjga7nn6nlvaJcclxuICAgICAgICAgICAgbGV0IGNsaXBwZWREcmF3VG90YWxNaW5YOiBudW1iZXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICBsZXQgY2xpcHBlZERyYXdUb3RhbE1pblk6IG51bWJlciA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgIGxldCBjbGlwcGVkRHJhd1RvdGFsTWF4WDogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcclxuICAgICAgICAgICAgbGV0IGNsaXBwZWREcmF3VG90YWxNYXhZOiBudW1iZXIgPSBOdW1iZXIuTUlOX1ZBTFVFO1xyXG5cclxuICAgICAgICAgICAgLy8g44GT44Gu44Oe44K544Kv44GM5a6f6Zqb44Gr5b+F6KaB44GL5Yik5a6a44GZ44KLXHJcbiAgICAgICAgICAgIC8vIOOBk+OBruOCr+ODquODg+ODlOODs+OCsOOCkuWIqeeUqOOBmeOCi+OAjOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOAjeOBjOOBsuOBqOOBpOOBp+OCguS9v+eUqOWPr+iDveOBp+OBguOCjOOBsOODnuOCueOCr+OCkueUn+aIkOOBmeOCi+W/heimgeOBjOOBguOCi1xyXG4gICAgICAgICAgICBjb25zdCBjbGlwcGVkRHJhd0NvdW50OiBudW1iZXIgPSBjbGlwcGluZ0NvbnRleHQuX2NsaXBwZWREcmF3YWJsZUluZGV4TGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGNsaXBwZWREcmF3YWJsZUluZGV4OiBudW1iZXIgPSAwOyBjbGlwcGVkRHJhd2FibGVJbmRleCA8IGNsaXBwZWREcmF3Q291bnQ7IGNsaXBwZWREcmF3YWJsZUluZGV4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIOODnuOCueOCr+OCkuS9v+eUqOOBmeOCi+aPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruaPj+eUu+OBleOCjOOCi+efqeW9ouOCkuaxguOCgeOCi1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd2FibGVJbmRleDogbnVtYmVyID0gY2xpcHBpbmdDb250ZXh0Ll9jbGlwcGVkRHJhd2FibGVJbmRleExpc3RbY2xpcHBlZERyYXdhYmxlSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlVmVydGV4Q291bnQ6IG51bWJlciA9IG1vZGVsLmdldERyYXdhYmxlVmVydGV4Q291bnQoZHJhd2FibGVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHJhd2FibGVWZXJ0ZXhlczogRmxvYXQzMkFycmF5ID0gbW9kZWwuZ2V0RHJhd2FibGVWZXJ0aWNlcyhkcmF3YWJsZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWluWDogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5ZOiBudW1iZXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1heFg6IG51bWJlciA9IE51bWJlci5NSU5fVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4WTogbnVtYmVyID0gTnVtYmVyLk1JTl9WQUxVRTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9vcDogbnVtYmVyID0gZHJhd2FibGVWZXJ0ZXhDb3VudCAqIENvbnN0YW50LnZlcnRleFN0ZXA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHBpOiBudW1iZXIgPSBDb25zdGFudC52ZXJ0ZXhPZmZzZXQ7IHBpIDwgbG9vcDsgcGkgKz0gQ29uc3RhbnQudmVydGV4U3RlcClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeDogbnVtYmVyID0gZHJhd2FibGVWZXJ0ZXhlc1twaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHk6IG51bWJlciA9IGRyYXdhYmxlVmVydGV4ZXNbcGkgKyAxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeCA8IG1pblgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5YID0geDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeCA+IG1heFgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhYID0geDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeSA8IG1pblkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5ZID0geTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeSA+IG1heFkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhZID0geTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5pyJ5Yq544Gq54K544GM5LiA44Gk44KC5Y+W44KM44Gq44GL44Gj44Gf44Gu44Gn44K544Kt44OD44OXXHJcbiAgICAgICAgICAgICAgICBpZihtaW5YID09IE51bWJlci5NQVhfVkFMVUUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/jgIDlhajkvZPjga7nn6nlvaLjgavlj43mmKBcclxuICAgICAgICAgICAgICAgIGlmKG1pblggPCBjbGlwcGVkRHJhd1RvdGFsTWluWClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwcGVkRHJhd1RvdGFsTWluWCA9IG1pblg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihtaW5ZIDwgY2xpcHBlZERyYXdUb3RhbE1pblkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBlZERyYXdUb3RhbE1pblkgPSBtaW5ZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobWF4WCA+IGNsaXBwZWREcmF3VG90YWxNYXhYKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwZWREcmF3VG90YWxNYXhYID0gbWF4WDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKG1heFkgPiBjbGlwcGVkRHJhd1RvdGFsTWF4WSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwcGVkRHJhd1RvdGFsTWF4WSA9IG1heFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2xpcHBlZERyYXdUb3RhbE1pblggPT0gTnVtYmVyLk1BWF9WQUxVRSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwcGluZ0NvbnRleHQuX2FsbENsaXBwZWREcmF3UmVjdC54ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5fYWxsQ2xpcHBlZERyYXdSZWN0LnkgPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3Qud2lkdGggPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QuaGVpZ2h0ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5faXNVc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5faXNVc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHc6IG51bWJlciA9IGNsaXBwZWREcmF3VG90YWxNYXhYIC0gY2xpcHBlZERyYXdUb3RhbE1pblg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGg6IG51bWJlciA9IGNsaXBwZWREcmF3VG90YWxNYXhZIC0gY2xpcHBlZERyYXdUb3RhbE1pblk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QueCA9IGNsaXBwZWREcmF3VG90YWxNaW5YO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5fYWxsQ2xpcHBlZERyYXdSZWN0LnkgPSBjbGlwcGVkRHJhd1RvdGFsTWluWTtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwcGluZ0NvbnRleHQuX2FsbENsaXBwZWREcmF3UmVjdC53aWR0aCA9IHc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcHBpbmdDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3QuaGVpZ2h0ID0gaDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXNrUmVuZGVyVGV4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yQnVmZmVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lTm8gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hc2tCdWZmZXJTaXplID0gMjU2O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzayA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtQ2xpcHBpbmdDb250ZXh0PigpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtQ2xpcHBpbmdDb250ZXh0PigpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsQ29sb3JzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21UZXh0dXJlQ29sb3I+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RtcEJvdW5kc09uTW9kZWwgPSBuZXcgY3NtUmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90bXBNYXRyaXggPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4Rm9yTWFzayA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90bXBNYXRyaXhGb3JEcmF3ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hc2tUZXh0dXJlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0bXA6IEN1YmlzbVRleHR1cmVDb2xvciA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcclxuICAgICAgICAgICAgdG1wLlIgPSAxLjA7XHJcbiAgICAgICAgICAgIHRtcC5HID0gMC4wO1xyXG4gICAgICAgICAgICB0bXAuQiA9IDAuMDtcclxuICAgICAgICAgICAgdG1wLkEgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMucHVzaEJhY2sodG1wKTtcclxuXHJcbiAgICAgICAgICAgIHRtcCA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcclxuICAgICAgICAgICAgdG1wLlIgPSAwLjA7XHJcbiAgICAgICAgICAgIHRtcC5HID0gMS4wO1xyXG4gICAgICAgICAgICB0bXAuQiA9IDAuMDtcclxuICAgICAgICAgICAgdG1wLkEgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMucHVzaEJhY2sodG1wKTtcclxuXHJcbiAgICAgICAgICAgIHRtcCA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcclxuICAgICAgICAgICAgdG1wLlIgPSAwLjA7XHJcbiAgICAgICAgICAgIHRtcC5HID0gMC4wO1xyXG4gICAgICAgICAgICB0bXAuQiA9IDEuMDtcclxuICAgICAgICAgICAgdG1wLkEgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMucHVzaEJhY2sodG1wKTtcclxuXHJcbiAgICAgICAgICAgIHRtcCA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcclxuICAgICAgICAgICAgdG1wLlIgPSAwLjA7XHJcbiAgICAgICAgICAgIHRtcC5HID0gMC4wO1xyXG4gICAgICAgICAgICB0bXAuQiA9IDAuMDtcclxuICAgICAgICAgICAgdG1wLkEgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMucHVzaEJhY2sodG1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmdldFNpemUoKTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChpKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChpKS5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suc2V0KGksIHZvaWQgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5zZXQoaSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2sgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gX2NsaXBwaW5nQ29udGV4dExpc3RGb3JEcmF344GvX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNr44Gr44GC44KL44Kk44Oz44K544K/44Oz44K544KS5oyH44GX44Gm44GE44KL44CC5LiK6KiY44Gu5Yem55CG44Gr44KI44KK6KaB57Sg44GU44Go44GuREVMRVRF44Gv5LiN6KaB44CCXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JEcmF3LmdldFNpemUoKTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdy5zZXQoaSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5fbWFza1RleHR1cmUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5fbWFza1RleHR1cmUudGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrVGV4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2NoYW5uZWxDb2xvcnMuZ2V0U2l6ZSgpOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDb2xvcnMuc2V0KGksIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsQ29sb3JzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+ino+aUvlxyXG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5fY29sb3JCdWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvckJ1ZmZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg57jg43jg7zjgrjjg6Pjga7liJ3mnJ/ljJblh6bnkIZcclxuICAgICAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgpLkvb/jgYbmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7nmbvpjLLjgpLooYzjgYZcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlQ291bnQg5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu5pWwXHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlTWFza3Mg5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44Oe44K544Kv44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K544Gu44Oq44K544OIXHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlQ291bnRzIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOCkuODnuOCueOCr+OBmeOCi+aPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCwgZHJhd2FibGVDb3VudDogbnVtYmVyLCBkcmF3YWJsZU1hc2tzOiBJbnQzMkFycmF5W10sIGRyYXdhYmxlTWFza0NvdW50czogSW50MzJBcnJheSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OCkuS9v+OBhuaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOCkuOBmeOBueOBpueZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga/jgIHpgJrluLjmlbDlgIvnqIvluqbjgavpmZDlrprjgZfjgabkvb/jgYbjgoLjga7jgajjgZnjgotcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZHJhd2FibGVDb3VudDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihkcmF3YWJsZU1hc2tDb3VudHNbaV0gPD0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgYzkvb/nlKjjgZXjgozjgabjgYTjgarjgYTjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvIjlpJrjgY/jga7loLTlkIjkvb/nlKjjgZfjgarjgYTvvIlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdy5wdXNoQmFjayhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDml6LjgavjgYLjgotDbGlwQ29udGV4dOOBqOWQjOOBmOOBi+ODgeOCp+ODg+OCr+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXBwaW5nQ29udGV4dDogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5maW5kU2FtZUNsaXAoZHJhd2FibGVNYXNrc1tpXSwgZHJhd2FibGVNYXNrQ291bnRzW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmKGNsaXBwaW5nQ29udGV4dCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjOS4gOOBruODnuOCueOCr+OBjOWtmOWcqOOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+eUn+aIkOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dCA9IG5ldyBDdWJpc21DbGlwcGluZ0NvbnRleHQodGhpcywgZHJhd2FibGVNYXNrc1tpXSwgZHJhd2FibGVNYXNrQ291bnRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5wdXNoQmFjayhjbGlwcGluZ0NvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNsaXBwaW5nQ29udGV4dC5hZGRDbGlwcGVkRHJhd2FibGUoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcucHVzaEJhY2soY2xpcHBpbmdDb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44KS5L2c5oiQ44GZ44KL44CC44Oi44OH44Or5o+P55S75pmC44Gr5a6f6KGM44GZ44KL44CCXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSByZW5kZXJlciDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0dXBDbGlwcGluZ0NvbnRleHQobW9kZWw6IEN1YmlzbU1vZGVsLCByZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXJfV2ViR0wpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWVObysrO1xyXG5cclxuICAgICAgICAgICAgLy8g5YWo44Gm44Gu44Kv44Oq44OD44OU44Oz44Kw44KS55So5oSP44GZ44KLXHJcbiAgICAgICAgICAgIC8vIOWQjOOBmOOCr+ODquODg+ODl++8iOikh+aVsOOBruWgtOWQiOOBr+OBvuOBqOOCgeOBpuS4gOOBpOOBruOCr+ODquODg+ODl++8ieOCkuS9v+OBhuWgtOWQiOOBrzHluqbjgaDjgZHoqK3lrprjgZnjgotcclxuICAgICAgICAgICAgbGV0IHVzaW5nQ2xpcENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGNsaXBJbmRleCA9IDA7IGNsaXBJbmRleCA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmdldFNpemUoKTsgY2xpcEluZGV4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIDHjgaTjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgavplqLjgZfjgaZcclxuICAgICAgICAgICAgICAgIGxldCBjYzogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY2xpcEluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDjgZPjga7jgq/jg6rjg4Pjg5fjgpLliKnnlKjjgZnjgovmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jnvqTlhajkvZPjgpLlm7LjgoDnn6nlvaLjgpLoqIjnrpdcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY0NsaXBwZWREcmF3VG90YWxCb3VuZHMobW9kZWwsIGNjKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjYy5faXNVc2luZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2luZ0NsaXBDb3VudCsrOyAvLyDkvb/nlKjkuK3jgajjgZfjgabjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g44Oe44K544Kv5L2c5oiQ5Yem55CGXHJcbiAgICAgICAgICAgIGlmKHVzaW5nQ2xpcENvdW50ID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g55Sf5oiQ44GX44GfRnJhbWVCdWZmZXLjgajlkIzjgZjjgrXjgqTjgrrjgafjg5Pjg6Xjg7zjg53jg7zjg4jjgpLoqK3lrppcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5fY2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSwgdGhpcy5fY2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g44Oe44K544Kv44KSYWN0aXZl44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrUmVuZGVyVGV4dHVyZSA9IHRoaXMuZ2V0TWFza1JlbmRlclRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6vmj4/nlLvmmYLjgatEcmF3TWVzaE5vd+OBq+a4oeOBleOCjOOCi+WkieaPmyjjg6Ljg4fjg6t0b+ODr+ODvOODq+ODieW6p+aomeWkieaPmylcclxuICAgICAgICAgICAgICAgIGxldCBtb2RlbFRvV29ybGRGOiBDdWJpc21NYXRyaXg0NCA9IHJlbmRlcmVyLmdldE12cE1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnByZURyYXcoKTsgLy8g44OQ44OD44OV44Kh44KS44Kv44Oq44Ki44GZ44KLXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5ZCE44Oe44K544Kv44Gu44Os44Kk44Ki44Km44OI44KS5rG65a6a44GX44Gm44GE44GPXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwTGF5b3V0Qm91bmRzKHVzaW5nQ2xpcENvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tIOODnuOCueOCr+aPj+eUu+WHpueQhiAtLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAvLyDjg57jgrnjgq/nlKhSZW5kZXJUZXh0dXJl44KSYWN0aXZl44Gr44K744OD44OIXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLl9tYXNrUmVuZGVyVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g44Oe44K544Kv44KS44Kv44Oq44Ki44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyAo5Luu5LuV5qeYKSAx44GM54Sh5Yq577yI5o+P44GL44KM44Gq44GE77yJ6aCY5Z+f44CBMOOBjOacieWKue+8iOaPj+OBi+OCjOOCi++8iemgmOWfn+OAgu+8iOOCt+OCp+ODvOODgOODvENkKkNz44GnMOOBq+i/keOBhOWApOOCkuOBi+OBkeOBpuODnuOCueOCr+OCkuS9nOOCi+OAgjHjgpLjgYvjgZHjgovjgajkvZXjgoLotbfjgZPjgonjgarjgYTvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigxLjAsIDEuMCwgMS4wLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWun+mam+OBq+ODnuOCueOCr+OCkueUn+aIkOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8g5YWo44Gm44Gu44Oe44K544Kv44KS44Gp44Gu44KI44GG44Gr44Os44Kk44Ki44Km44OI44GX44Gm5o+P44GP44GL44KS5rG65a6a44GX44CBQ2xpcENvbnRleHQsIENsaXBwZWREcmF3Q29udGV4dOOBq+iomOaGtuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjbGlwSW5kZXg6IG51bWJlciA9IDA7IGNsaXBJbmRleCA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmdldFNpemUoKTsgY2xpcEluZGV4KyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tIOWun+mam+OBqzHjgaTjga7jg57jgrnjgq/jgpLmj4/jgY8gLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaXBDb250ZXh0OiBDdWJpc21DbGlwcGluZ0NvbnRleHQgPSB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChjbGlwSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbGxDbGlwZWREcmF3UmVjdDogY3NtUmVjdCA9IGNsaXBDb250ZXh0Ll9hbGxDbGlwcGVkRHJhd1JlY3Q7ICAgLy8g44GT44Gu44Oe44K544Kv44KS5L2/44GG44CB44GZ44G544Gm44Gu5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu6KuW55CG5bqn5qiZ5LiK44Gu5Zuy44G/55+p5b2iXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheW91dEJvdW5kc09uVGV4MDE6IGNzbVJlY3QgPSBjbGlwQ29udGV4dC5fbGF5b3V0Qm91bmRzOyAvLyDjgZPjga7kuK3jgavjg57jgrnjgq/jgpLlj47jgoHjgotcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or5bqn5qiZ5LiK44Gu55+p5b2i44KS44CB6YGp5a6c44Oe44O844K444Oz44KS5LuY44GR44Gm5L2/44GGXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgTUFSR0lOOiBudW1iZXIgPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcEJvdW5kc09uTW9kZWwuc2V0UmVjdChhbGxDbGlwZWREcmF3UmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wQm91bmRzT25Nb2RlbC5leHBhbmQoYWxsQ2xpcGVkRHJhd1JlY3Qud2lkdGggKiBNQVJHSU4sIGFsbENsaXBlZERyYXdSZWN0LmhlaWdodCAqIE1BUkdJTik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8jIyMjIyMjIyMjIOacrOadpeOBr+WJsuOCiuW9k+OBpuOCieOCjOOBn+mgmOWfn+OBruWFqOS9k+OCkuS9v+OCj+OBmuW/heimgeacgOS9jumZkOOBruOCteOCpOOCuuOBjOOCiOOBhFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4DnlKjjga7oqIjnrpflvI/jgpLmsYLjgoHjgovjgILlm57ou6LjgpLogIPmha7jgZfjgarjgYTloLTlkIjjga/ku6XkuIvjga7jgajjgYrjgopcclxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlUGVyaW9kJyA9IG1vdmVQZXJpb2QgKiBzY2FsZVggKyBvZmZYXHRcdCAgW1sgbW92ZVBlcmlvZCcgPSAobW92ZVBlcmlvZCAtIHRtcEJvdW5kc09uTW9kZWwubW92ZVBlcmlvZCkqc2NhbGUgKyBsYXlvdXRCb3VuZHNPblRleDAxLm1vdmVQZXJpb2QgXV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FsZVg6IG51bWJlciA9IGxheW91dEJvdW5kc09uVGV4MDEud2lkdGggLyB0aGlzLl90bXBCb3VuZHNPbk1vZGVsLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlWTogbnVtYmVyID0gbGF5b3V0Qm91bmRzT25UZXgwMS5oZWlnaHQgLyB0aGlzLl90bXBCb3VuZHNPbk1vZGVsLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44Oe44K544Kv55Sf5oiQ5pmC44Gr5L2/44GG6KGM5YiX44KS5rGC44KB44KLXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjgrfjgqfjg7zjg4DjgavmuKHjgZnooYzliJfjgpLmsYLjgoHjgosgPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8IOimgeacgOmBqeWMlu+8iOmAhumghuOBq+ioiOeul+OBmeOCjOOBsOOCt+ODs+ODl+ODq+OBq+OBp+OBjeOCi++8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dDAuLjEg44KSIC0xLi4x44Gr5aSJ5o+bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUoLTEuMCwgLTEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXguc2NhbGVSZWxhdGl2ZSgyLjAsIDIuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmlldyB0byBsYXlvdXQwLi4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUobGF5b3V0Qm91bmRzT25UZXgwMS54LCBsYXlvdXRCb3VuZHNPblRleDAxLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LnNjYWxlUmVsYXRpdmUoc2NhbGVYLCBzY2FsZVkpOyAgLy8gbmV3ID0gW3RyYW5zbGF0ZV1bc2NhbGVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUoLXRoaXMuX3RtcEJvdW5kc09uTW9kZWwueCwgLXRoaXMuX3RtcEJvdW5kc09uTW9kZWwueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXcgPSBbdHJhbnNsYXRlXVtzY2FsZV1bdHJhbnNsYXRlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRtcE1hdHJpeEZvck1hc2vjgYzoqIjnrpfntZDmnpxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4Rm9yTWFzay5zZXRNYXRyaXgodGhpcy5fdG1wTWF0cml4LmdldEFycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0gZHJhd+aZguOBriBtYXNrIOWPgueFp+eUqOihjOWIl+OCkuioiOeul1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44K344Kn44O844OA44Gr5rih44GZ6KGM5YiX44KS5rGC44KB44KLIDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PCDopoHmnIDpganljJbvvIjpgIbpoIbjgavoqIjnrpfjgZnjgozjgbDjgrfjg7Pjg5fjg6vjgavjgafjgY3jgovvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUobGF5b3V0Qm91bmRzT25UZXgwMS54LCBsYXlvdXRCb3VuZHNPblRleDAxLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG1wTWF0cml4LnNjYWxlUmVsYXRpdmUoc2NhbGVYLCBzY2FsZVkpOyAgLy8gbmV3ID0gW3RyYW5zbGF0ZV1bc2NhbGVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90bXBNYXRyaXgudHJhbnNsYXRlUmVsYXRpdmUoLXRoaXMuX3RtcEJvdW5kc09uTW9kZWwueCwgLXRoaXMuX3RtcEJvdW5kc09uTW9kZWwueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXcgPSBbdHJhbnNsYXRlXVtzY2FsZV1bdHJhbnNsYXRlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RtcE1hdHJpeEZvckRyYXcuc2V0TWF0cml4KHRoaXMuX3RtcE1hdHJpeC5nZXRBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX21hdHJpeEZvck1hc2suc2V0TWF0cml4KHRoaXMuX3RtcE1hdHJpeEZvck1hc2suZ2V0QXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX21hdHJpeEZvckRyYXcuc2V0TWF0cml4KHRoaXMuX3RtcE1hdHJpeEZvckRyYXcuZ2V0QXJyYXkoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBEcmF3Q291bnQ6IG51bWJlciA9IGNsaXBDb250ZXh0Ll9jbGlwcGluZ0lkQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgY2xpcERyYXdDb3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpcERyYXdJbmRleDogbnVtYmVyID0gY2xpcENvbnRleHQuX2NsaXBwaW5nSWRMaXN0W2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6aCC54K55oOF5aCx44GM5pu05paw44GV44KM44Gm44GK44KJ44Ga44CB5L+h6aC85oCn44GM44Gq44GE5aC05ZCI44Gv5o+P55S744KS44OR44K544GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFtb2RlbC5nZXREcmF3YWJsZUR5bmFtaWNGbGFnVmVydGV4UG9zaXRpb25zRGlkQ2hhbmdlKGNsaXBEcmF3SW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIuc2V0SXNDdWxsaW5nKG1vZGVsLmdldERyYXdhYmxlQ3VsbGluZyhjbGlwRHJhd0luZGV4KSAhPSBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDku4rlm57lsILnlKjjga7lpInmj5vjgpLpgannlKjjgZfjgabmj4/jgY9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OB44Oj44Oz44ON44Or44KC5YiH44KK5pu/44GI44KL5b+F6KaB44GM44GC44KLKEEsUixHLEIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soY2xpcENvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5kcmF3TWVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldERyYXdhYmxlVGV4dHVyZUluZGljZXMoY2xpcERyYXdJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZVZlcnRleEluZGV4Q291bnQoY2xpcERyYXdJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZVZlcnRleENvdW50KGNsaXBEcmF3SW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVWZXJ0ZXhJbmRpY2VzKGNsaXBEcmF3SW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVWZXJ0aWNlcyhjbGlwRHJhd0luZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldERyYXdhYmxlVmVydGV4VXZzKGNsaXBEcmF3SW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVPcGFjaXR5KGNsaXBEcmF3SW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9Ob3JtYWwgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjga/pgJrluLjmj4/nlLvjgpLlvLfliLZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLS0tIOW+jOWHpueQhiAtLS1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHNfZmJvKTsgICAvLyDmj4/nlLvlr77osaHjgpLmiLvjgZlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2sobnVsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52aWV3cG9ydChzX3ZpZXdwb3J0WzBdLCBzX3ZpZXdwb3J0WzFdLCBzX3ZpZXdwb3J0WzJdLCBzX3ZpZXdwb3J0WzNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pei44Gr44Oe44K544Kv44KS5L2c44Gj44Gm44GE44KL44GL44KS56K66KqNXHJcbiAgICAgICAgICog5L2c44Gj44Gm44GE44KL5qeY44Gn44GC44KM44Gw6Kmy5b2T44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Kk44Oz44K544K/44Oz44K544KS6L+U44GZXHJcbiAgICAgICAgICog5L2c44Gj44Gm44GE44Gq44GR44KM44GwTlVMTOOCkui/lOOBmVxyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZU1hc2tzIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOCkuODnuOCueOCr+OBmeOCi+aPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruODquOCueODiFxyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZU1hc2tDb3VudHMg5o+P55S744Kq44OW44K444Kn44Kv44OI44KS44Oe44K544Kv44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu5pWwXHJcbiAgICAgICAgICogQHJldHVybiDoqbLlvZPjgZnjgovjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgYzlrZjlnKjjgZnjgozjgbDjgqTjg7Pjgrnjgr/jg7PjgrnjgpLov5TjgZfjgIHjgarjgZHjgozjgbBOVUxM44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGZpbmRTYW1lQ2xpcChkcmF3YWJsZU1hc2tzOiBJbnQzMkFycmF5LCBkcmF3YWJsZU1hc2tDb3VudHM6IG51bWJlcik6IEN1YmlzbUNsaXBwaW5nQ29udGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5L2c5oiQ5riI44G/Q2xpcHBpbmdDb250ZXh044Go5LiA6Ie044GZ44KL44GL56K66KqNXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmdldFNpemUoKTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcHBpbmdDb250ZXh0OiBDdWJpc21DbGlwcGluZ0NvbnRleHQgPSB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yTWFzay5hdChpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSBjbGlwcGluZ0NvbnRleHQuX2NsaXBwaW5nSWRDb3VudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g5YCL5pWw44GM6YGV44GG5aC05ZCI44Gv5Yil54mpXHJcbiAgICAgICAgICAgICAgICBpZihjb3VudCAhPSBkcmF3YWJsZU1hc2tDb3VudHMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNhbWVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5ZCM44GYSUTjgpLmjIHjgaTjgYvnorroqo3jgILphY3liJfjga7mlbDjgYzlkIzjgZjjgarjga7jgafjgIHkuIDoh7TjgZfjgZ/lgIvmlbDjgYzlkIzjgZjjgarjgonlkIzjgZjnianjgpLmjIHjgaTjgajjgZnjgotcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IGNvdW50OyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpcElkOiBudW1iZXIgPSBjbGlwcGluZ0NvbnRleHQuX2NsaXBwaW5nSWRMaXN0W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IGNvdW50OyBrKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkcmF3YWJsZU1hc2tzW2tdID09IGNsaXBJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzYW1lQ291bnQgPT0gY291bnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaXBwaW5nQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIOimi+OBpOOBi+OCieOBquOBi+OBo+OBn1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44KS6YWN572u44GZ44KL44Os44Kk44Ki44Km44OIXHJcbiAgICAgICAgICog5LiA44Gk44Gu44Os44Oz44OA44O844OG44Kv44K544OB44Oj44KS5qW15Yqb44GE44Gj44Gx44GE44Gr5L2/44Gj44Gm44Oe44K544Kv44KS44Os44Kk44Ki44Km44OI44GZ44KLXHJcbiAgICAgICAgICog44Oe44K544Kv44Kw44Or44O844OX44Gu5pWw44GMNOS7peS4i+OBquOCiVJHQkHlkITjg4Hjg6Pjg7Pjg43jg6vjgavkuIDjgaTjgZrjgaTjg57jgrnjgq/jgpLphY3nva7jgZfjgIE15Lul5LiKNuS7peS4i+OBquOCiVJHQkHjgpIyLDIsMSwx44Go6YWN572u44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHVzaW5nQ2xpcENvdW50IOmFjee9ruOBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXR1cExheW91dEJvdW5kcyh1c2luZ0NsaXBDb3VudDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g44Gy44Go44Gk44GuUmVuZGVyVGV4dHVyZeOCkualteWKm+OBhOOBo+OBseOBhOOBq+S9v+OBo+OBpuODnuOCueOCr+OCkuODrOOCpOOCouOCpuODiOOBmeOCi1xyXG4gICAgICAgICAgICAvLyDjg57jgrnjgq/jgrDjg6vjg7zjg5fjga7mlbDjgYw05Lul5LiL44Gq44KJUkdCQeWQhOODgeODo+ODs+ODjeODq+OBqzHjgaTjgZrjgaTjg57jgrnjgq/jgpLphY3nva7jgZfjgIE15Lul5LiKNuS7peS4i+OBquOCiVJHQkHjgpIyLDIsMSwx44Go6YWN572u44GZ44KLXHJcblxyXG4gICAgICAgICAgICAvLyBSR0JB44KS6aCG55Wq44Gr5L2/44Gj44Gm44GE44GPXHJcbiAgICAgICAgICAgIGxldCBkaXY6IG51bWJlciA9IHVzaW5nQ2xpcENvdW50IC8gQ29sb3JDaGFubmVsQ291bnQ7IC8v44CAMeODgeODo+ODs+ODjeODq+OBq+mFjee9ruOBmeOCi+WfuuacrOOBruODnuOCueOCr1xyXG4gICAgICAgICAgICBsZXQgbW9kOiBudW1iZXIgPSB1c2luZ0NsaXBDb3VudCAlIENvbG9yQ2hhbm5lbENvdW50OyAvLyDkvZnjgorjgIHjgZPjga7nlarlj7fjga7jg4Hjg6Pjg7Pjg43jg6vjgb7jgafjgavkuIDjgaTjgZrjgaTphY3liIbjgZnjgotcclxuXHJcbiAgICAgICAgICAgIC8vIOWwj+aVsOeCueOBr+WIh+OCiuaNqOOBpuOCi1xyXG4gICAgICAgICAgICBkaXYgPSB+fmRpdjtcclxuICAgICAgICAgICAgbW9kID0gfn5tb2Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSR0JB44Gd44KM44Ge44KM44Gu44OB44Oj44Oz44ON44Or44KS55So5oSP44GX44Gm44GE44GP77yIMDpSLCAxOkcsIDI6QiwgMzpB77yJXHJcbiAgICAgICAgICAgIGxldCBjdXJDbGlwSW5kZXg6IG51bWJlciA9IDA7IC8vIOmghueVquOBq+ioreWumuOBl+OBpuOBhOOBj1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBjaGFubmVsTm86IG51bWJlciA9IDA7IGNoYW5uZWxObyA8IENvbG9yQ2hhbm5lbENvdW50OyBjaGFubmVsTm8rKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g44GT44Gu44OB44Oj44Oz44ON44Or44Gr44Os44Kk44Ki44Km44OI44GZ44KL5pWwXHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5b3V0Q291bnQ6IG51bWJlciA9IGRpdiArIChjaGFubmVsTm8gPCBtb2QgPyAxIDogMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5YiG5Ymy5pa55rOV44KS5rG65a6a44GZ44KLXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRDb3VudCA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS9leOCguOBl+OBquOBhFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRDb3VudCA9PSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFqOOBpuOCkuOBneOBruOBvuOBvuS9v+OBhlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGlwQ29udGV4dDogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY3VyQ2xpcEluZGV4KyspO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9sYXlvdXRDaGFubmVsTm8gPSBjaGFubmVsTm87XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcENvbnRleHQuX2xheW91dEJvdW5kcy54ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9sYXlvdXRCb3VuZHMueSA9IDAuMDtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwQ29udGV4dC5fbGF5b3V0Qm91bmRzLndpZHRoID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb250ZXh0Ll9sYXlvdXRCb3VuZHMuaGVpZ2h0ID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRDb3VudCA9PSAyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxheW91dENvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeHBvczogbnVtYmVyID0gaSAlIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/mlbDngrnjga/liIfjgormjajjgabjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYzogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY3VyQ2xpcEluZGV4KyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Q2hhbm5lbE5vID0gY2hhbm5lbE5vO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy54ID0geHBvcyAqIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy55ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Qm91bmRzLndpZHRoID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Qm91bmRzLmhlaWdodCA9IDEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVbjgpIy44Gk44Gr5YiG6Kej44GX44Gm5L2/44GGXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRDb3VudCA8PSA0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIDTliIblibLjgZfjgabkvb/jgYZcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsYXlvdXRDb3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhwb3M6IG51bWJlciA9IGkgJSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeXBvczogbnVtYmVyID0gaSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/mlbDngrnjga/liIfjgormjajjgabjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgeXBvcyA9IH5+eXBvcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYyA9IHRoaXMuX2NsaXBwaW5nQ29udGV4dExpc3RGb3JNYXNrLmF0KGN1ckNsaXBJbmRleCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dENoYW5uZWxObyA9IGNoYW5uZWxObztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMueCA9IHhwb3MgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMueSA9IHlwb3MgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMud2lkdGggPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLl9sYXlvdXRCb3VuZHMuaGVpZ2h0ID0gMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0Q291bnQgPD0gOSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyA55YiG5Ymy44GX44Gm5L2/44GGXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGF5b3V0Q291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4cG9zID0gaSAlIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5cG9zID0gaSAvIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/mlbDngrnjga/liIfjgormjajjgabjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHBvcyA9IH5+eHBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgeXBvcyA9IH5+eXBvcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYzogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0ID0gdGhpcy5fY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2suYXQoY3VyQ2xpcEluZGV4KyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5fbGF5b3V0Q2hhbm5lbE5vID0gY2hhbm5lbE5vO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy54ID0geHBvcyAvIDMuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy55ID0geXBvcyAvIDMuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy53aWR0aCA9IDEuMCAvIDMuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuX2xheW91dEJvdW5kcy5oZWlnaHQgPSAxLjAgLyAzLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFwibm90IHN1cHBvcnRlZCBtYXNrIGNvdW50IDogezB9XCIsIGxheW91dENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODqeODvOODkOODg+ODleOCoeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Kr44Op44O844OQ44OD44OV44KhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldENvbG9yQnVmZmVyKCk6IFdlYkdMVGV4dHVyZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55S76Z2i5o+P55S744Gr5L2/55So44GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDnlLvpnaLmj4/nlLvjgavkvb/nlKjjgZnjgovjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7jg6rjgrnjg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0Q2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXcoKTogY3NtVmVjdG9yPEN1YmlzbUNsaXBwaW5nQ29udGV4dD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCuuOCkuioreWumuOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCulxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRDbGlwcGluZ01hc2tCdWZmZXJTaXplKHNpemU6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFza0J1ZmZlclNpemUgPSBzaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0Q2xpcHBpbmdNYXNrQnVmZmVyU2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbGlwcGluZ01hc2tCdWZmZXJTaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIF9tYXNrUmVuZGVyVGV4dHVyZTogV2ViR0xGcmFtZWJ1ZmZlcjsgLy8g44Oe44K544Kv55So44Os44Oz44OA44O844OG44Kv44K544OB44Oj44Gu44Ki44OJ44Os44K5XHJcbiAgICAgICAgcHVibGljIF9jb2xvckJ1ZmZlcjogV2ViR0xUZXh0dXJlOyAgICAgICAvLyDjg57jgrnjgq/nlKjjgqvjg6njg7zjg5Djg4Pjg5XjgqHjg7zjga7jgqLjg4njg6zjgrlcclxuICAgICAgICBwdWJsaWMgX2N1cnJlbnRGcmFtZU5vOiBudW1iZXI7ICAgIC8vIOODnuOCueOCr+ODhuOCr+OCueODgeODo+OBq+S4juOBiOOCi+ODleODrOODvOODoOeVquWPt1xyXG5cclxuICAgICAgICBwdWJsaWMgX2NoYW5uZWxDb2xvcnM6IGNzbVZlY3RvcjxDdWJpc21UZXh0dXJlQ29sb3I+O1xyXG4gICAgICAgIHB1YmxpYyBfbWFza1RleHR1cmU6IEN1YmlzbVJlbmRlclRleHR1cmVSZXNvdXJjZTsgICAgICAgICAgIC8vIOODnuOCueOCr+eUqOOBruODhuOCr+OCueODgeODo+ODquOCveODvOOCueOBruODquOCueODiFxyXG4gICAgICAgIHB1YmxpYyBfY2xpcHBpbmdDb250ZXh0TGlzdEZvck1hc2s6IGNzbVZlY3RvcjxDdWJpc21DbGlwcGluZ0NvbnRleHQ+OyAgIC8vIOODnuOCueOCr+eUqOOCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOBruODquOCueODiFxyXG4gICAgICAgIHB1YmxpYyBfY2xpcHBpbmdDb250ZXh0TGlzdEZvckRyYXc6IGNzbVZlY3RvcjxDdWJpc21DbGlwcGluZ0NvbnRleHQ+OyAgIC8vIOaPj+eUu+eUqOOCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOBruODquOCueODiFxyXG4gICAgICAgIHB1YmxpYyBfY2xpcHBpbmdNYXNrQnVmZmVyU2l6ZTogbnVtYmVyOyAgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7jg5Djg4Pjg5XjgqHjgrXjgqTjgrrvvIjliJ3mnJ/lgKQ6MjU277yJXHJcblxyXG4gICAgICAgIHByaXZhdGUgX3RtcE1hdHJpeDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgLy8g44Oe44K544Kv6KiI566X55So44Gu6KGM5YiXXHJcbiAgICAgICAgcHJpdmF0ZSBfdG1wTWF0cml4Rm9yTWFzazogQ3ViaXNtTWF0cml4NDQ7ICAvLyDjg57jgrnjgq/oqIjnrpfnlKjjga7ooYzliJdcclxuICAgICAgICBwcml2YXRlIF90bXBNYXRyaXhGb3JEcmF3OiBDdWJpc21NYXRyaXg0NDsgIC8vIOODnuOCueOCr+ioiOeul+eUqOOBruihjOWIl1xyXG4gICAgICAgIHByaXZhdGUgX3RtcEJvdW5kc09uTW9kZWw6IGNzbVJlY3Q7ICAgICAgICAgLy8g44Oe44K544Kv6YWN572u6KiI566X55So44Gu55+p5b2iXHJcblxyXG4gICAgICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7ICAvLyBXZWJHTOODrOODs+ODgOODquODs+OCsOOCs+ODs+ODhuOCreOCueODiFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Os44Oz44OA44O844OG44Kv44K544OB44Oj44Gu44Oq44K944O844K544KS5a6a576p44GZ44KL5qeL6YCg5L2TXHJcbiAgICAgKiDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgafkvb/nlKjjgZnjgotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVJlbmRlclRleHR1cmVSZXNvdXJjZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBmcmFtZU5vIOODrOODs+ODgOODqeODvOOBruODleODrOODvOODoOeVquWPt1xyXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlIOODhuOCr+OCueODgeODo+OBruOCouODieODrOOCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihmcmFtZU5vOiBudW1iZXIsIHRleHR1cmU6IFdlYkdMRnJhbWVidWZmZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lTm8gPSBmcmFtZU5vO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZyYW1lTm86IG51bWJlcjsgICAgLy8g44Os44Oz44OA44Op44Gu44OV44Os44O844Og55Wq5Y+3XHJcbiAgICAgICAgcHVibGljIHRleHR1cmU6IFdlYkdMRnJhbWVidWZmZXI7ICAgIC8vIOODhuOCr+OCueODgeODo+OBruOCouODieODrOOCuVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu44Kz44Oz44OG44Kt44K544OIXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21DbGlwcGluZ0NvbnRleHRcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IobWFuYWdlcjogQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMLCBjbGlwcGluZ0RyYXdhYmxlSW5kaWNlczogSW50MzJBcnJheSwgY2xpcENvdW50OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9vd25lciA9IG1hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICAvLyDjgq/jg6rjg4Pjg5fjgZfjgabjgYTjgovvvIjvvJ3jg57jgrnjgq/nlKjjga7vvIlEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCueODquOCueODiFxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0lkTGlzdCA9IGNsaXBwaW5nRHJhd2FibGVJbmRpY2VzO1xyXG5cclxuICAgICAgICAgICAgLy8g44Oe44K544Kv44Gu5pWwXHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nSWRDb3VudCA9IGNsaXBDb3VudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FsbENsaXBwZWREcmF3UmVjdCA9IG5ldyBjc21SZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xheW91dEJvdW5kcyA9IG5ldyBjc21SZWN0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGVkRHJhd2FibGVJbmRleExpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21hdHJpeEZvck1hc2sgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcclxuICAgICAgICAgICAgdGhpcy5fbWF0cml4Rm9yRHJhdyA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fbGF5b3V0Qm91bmRzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xheW91dEJvdW5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2FsbENsaXBwZWREcmF3UmVjdCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDbGlwcGVkRHJhd1JlY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLl9jbGlwcGVkRHJhd2FibGVJbmRleExpc3QgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBlZERyYXdhYmxlSW5kZXhMaXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44GT44Gu44Oe44K544Kv44Gr44Kv44Oq44OD44OX44GV44KM44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXgg44Kv44Oq44OD44OU44Oz44Kw5a++6LGh44Gr6L+95Yqg44GZ44KL5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZENsaXBwZWREcmF3YWJsZShkcmF3YWJsZUluZGV4OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGVkRHJhd2FibGVJbmRleExpc3QucHVzaChkcmF3YWJsZUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOBk+OBruODnuOCueOCr+OCkueuoeeQhuOBmeOCi+ODnuODjeODvOOCuOODo+OBruOCpOODs+OCueOCv+ODs+OCueOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Kv44Oq44OD44OU44Oz44Kw44Oe44ON44O844K444Oj44Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldENsaXBwaW5nTWFuYWdlcigpOiBDdWJpc21DbGlwcGluZ01hbmFnZXJfV2ViR0xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRHbChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fb3duZXIuc2V0R0woZ2wpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIF9pc1VzaW5nOiBib29sZWFuOyAgLy8g54++5Zyo44Gu5o+P55S754q25oWL44Gn44Oe44K544Kv44Gu5rqW5YKZ44GM5b+F6KaB44Gq44KJdHJ1ZVxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBfY2xpcHBpbmdJZExpc3Q6IEludDMyQXJyYXk7ICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OBrklE44Oq44K544OIXHJcbiAgICAgICAgcHVibGljIF9jbGlwcGluZ0lkQ291bnQ6IG51bWJlcjsgICAvLyDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7mlbBcclxuICAgICAgICBwdWJsaWMgX2xheW91dENoYW5uZWxObzogbnVtYmVyOyAgLy8gUkdCQeOBruOBhOOBmuOCjOOBruODgeODo+ODs+ODjeODq+OBq+OBk+OBruOCr+ODquODg+ODl+OCkumFjee9ruOBmeOCi+OBi++8iDA6UiwgMTpHLCAyOkIsIDM6Qe+8iVxyXG4gICAgICAgIHB1YmxpYyBfbGF5b3V0Qm91bmRzOiBjc21SZWN0OyAvLyDjg57jgrnjgq/nlKjjg4Hjg6Pjg7Pjg43jg6vjga7jganjga7poJjln5/jgavjg57jgrnjgq/jgpLlhaXjgozjgovjgYvvvIhWaWV35bqn5qiZLTF+MSwgVVbjga8wfjHjgavnm7TjgZnvvIlcclxuICAgICAgICBwdWJsaWMgX2FsbENsaXBwZWREcmF3UmVjdDogY3NtUmVjdDsgICAvLyDjgZPjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjgafjgIHjgq/jg6rjg4Pjg5Tjg7PjgrDjgZXjgozjgovjgZnjgbnjgabjga7mj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7lm7Ljgb/nn6nlvaLvvIjmr47lm57mm7TmlrDvvIlcclxuICAgICAgICBwdWJsaWMgX21hdHJpeEZvck1hc2s6IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg57jgrnjgq/jga7kvY3nva7oqIjnrpfntZDmnpzjgpLkv53mjIHjgZnjgovooYzliJdcclxuICAgICAgICBwdWJsaWMgX21hdHJpeEZvckRyYXc6IEN1YmlzbU1hdHJpeDQ0OyAvLyDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7kvY3nva7oqIjnrpfntZDmnpzjgpLkv53mjIHjgZnjgovooYzliJdcclxuICAgICAgICBwdWJsaWMgX2NsaXBwZWREcmF3YWJsZUluZGV4TGlzdDogbnVtYmVyW107IC8vIOOBk+OBruODnuOCueOCr+OBq+OCr+ODquODg+ODl+OBleOCjOOCi+aPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruODquOCueODiFxyXG5cclxuICAgICAgICBwcml2YXRlIF9vd25lcjogQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMOyAgICAvLyDjgZPjga7jg57jgrnjgq/jgpLnrqHnkIbjgZfjgabjgYTjgovjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlYkdM55So44Gu44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44KS55Sf5oiQ44O756C05qOE44GZ44KL44Kv44Op44K5XHJcbiAgICAgKiDjgrfjg7PjgrDjg6vjg4jjg7Pjgarjgq/jg6njgrnjgafjgYLjgorjgIFDdWJpc21TaGFkZXJfV2ViR0wuZ2V0SW5zdGFuY2XjgYvjgonjgqLjgq/jgrvjgrnjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVNoYWRlcl9XZWJHTFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueOCkuWPluW+l+OBmeOCi++8iOOCt+ODs+OCsOODq+ODiOODs++8iVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDdWJpc21TaGFkZXJfV2ViR0xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc19pbnN0YW5jZSA9IG5ldyBDdWJpc21TaGFkZXJfV2ViR0woKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc19pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueOCkumWi+aUvuOBmeOCi++8iOOCt+ODs+OCsOODq+ODiOODs++8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlSW5zdGFuY2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc19pbnN0YW5jZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc19pbnN0YW5jZS5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBzX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHJpdmF0ZeOBquOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtU2hhZGVyU2V0PigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlU2hhZGVyUHJvZ3JhbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44Gu5LiA6YCj44Gu44K744OD44OI44Ki44OD44OX44KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVyIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlSWQgR1BV44Gu44OG44Kv44K544OB44OjSURcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleEFycmF544CA44Kk44Oz44OH44OD44Kv44K544OQ44OD44OV44Kh44Gu6aCC54K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcclxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O844OW44Os44Oz44OH44Kj44Oz44Kw44Gu44K/44Kk44OXXHJcbiAgICAgICAgICogQHBhcmFtIGJhc2VDb2xvciDjg5njg7zjgrnjgqvjg6njg7xcclxuICAgICAgICAgKiBAcGFyYW0gaXNQcmVtdWx0aXBsaWVkQWxwaGEg5LmX566X5riI44G/44Ki44Or44OV44Kh44GL44Gp44GG44GLXHJcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDR4NCBNb2RlbC1WaWV3LVByb2plY3Rpb27ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0dXBTaGFkZXJQcm9ncmFtKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcl9XZWJHTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUlkOiBXZWJHTFRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleENvdW50OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dkFycmF5OiBGbG9hdDMyQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleDogV2ViR0xCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1djogV2ViR0xCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogV2ViR0xCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yOiBDdWJpc21UZXh0dXJlQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXg0eDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIWlzUHJlbXVsdGlwbGllZEFscGhhKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcIk5vUHJlbXVsdGlwbGllZEFscGhhIGlzIG5vdCBhbGxvd2VkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLl9zaGFkZXJTZXRzLmdldFNpemUoKSA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlU2hhZGVycygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCbGVuZGluZ1xyXG4gICAgICAgICAgICBsZXQgU1JDX0NPTE9SOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBEU1RfQ09MT1I6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IFNSQ19BTFBIQTogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgRFNUX0FMUEhBOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZihyZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCkgIT0gbnVsbCkgIC8vIOODnuOCueOCr+eUn+aIkOaZglxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhZGVyU2V0OiBDdWJpc21TaGFkZXJTZXQgPSB0aGlzLl9zaGFkZXJTZXRzLmF0KFNoYWRlck5hbWVzLlNoYWRlck5hbWVzX1NldHVwTWFzayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0oc2hhZGVyU2V0LnNoYWRlclByb2dyYW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+ioreWumlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRleHR1cmVJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaShzaGFkZXJTZXQuc2FtcGxlclRleHR1cmUwTG9jYXRpb24sIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmggueCuemFjeWIl+OBruioreWumihWQk8pXHJcbiAgICAgICAgICAgICAgICBpZihidWZmZXJEYXRhLnZlcnRleCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGEudmVydGV4ID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS52ZXJ0ZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhBcnJheSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJTZXQuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyU2V0LmF0dHJpYnV0ZVBvc2l0aW9uTG9jYXRpb24sIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PpoILngrnjga7oqK3lrppcclxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudXYgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJEYXRhLnV2ID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS51dik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHV2QXJyYXksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2hhZGVyU2V0LmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclNldC5hdHRyaWJ1dGVUZXhDb29yZExvY2F0aW9uLCAyLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g44OB44Oj44Oz44ON44OrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsTm86IG51bWJlciA9IHJlbmRlcmVyLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soKS5fbGF5b3V0Q2hhbm5lbE5vO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yQ2hhbm5lbDogQ3ViaXNtVGV4dHVyZUNvbG9yID0gcmVuZGVyZXIuZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzaygpLmdldENsaXBwaW5nTWFuYWdlcigpLmdldENoYW5uZWxGbGFnQXNDb2xvcihjaGFubmVsTm8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoc2hhZGVyU2V0LnVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uLCBjb2xvckNoYW5uZWwuUiwgY29sb3JDaGFubmVsLkcsIGNvbG9yQ2hhbm5lbC5CLCBjb2xvckNoYW5uZWwuQSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHNoYWRlclNldC51bmlmb3JtQ2xpcE1hdHJpeExvY2F0aW9uLCBmYWxzZSwgcmVuZGVyZXIuZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzaygpLl9tYXRyaXhGb3JNYXNrLmdldEFycmF5KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWN0OiBjc21SZWN0ID0gcmVuZGVyZXIuZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzaygpLl9sYXlvdXRCb3VuZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyU2V0LnVuaWZvcm1CYXNlQ29sb3JMb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICByZWN0LnggKiAyLjAgLSAxLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdC55ICogMi4wIC0gMS4wLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QuZ2V0UmlnaHQoKSAqIDIuMCAtIDEuMCxcclxuICAgICAgICAgICAgICAgICAgICByZWN0LmdldEJvdHRvbSgpICogMi4wIC0gMS4wXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIFNSQ19DT0xPUiA9IHRoaXMuZ2wuWkVSTztcclxuICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19DT0xPUjtcclxuICAgICAgICAgICAgICAgIFNSQ19BTFBIQSA9IHRoaXMuZ2wuWkVSTztcclxuICAgICAgICAgICAgICAgIERTVF9BTFBIQSA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIC8vIOODnuOCueOCr+eUn+aIkOS7peWkluOBruWgtOWQiFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXNrZWQ6IGJvb2xlYW4gPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkgIT0gbnVsbDsgLy8g44GT44Gu5o+P55S744Kq44OW44K444Kn44Kv44OI44Gv44Oe44K544Kv5a++6LGh44GLXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQ6IG51bWJlciA9IChtYXNrZWQgPyAxIDogMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRlclNldDogQ3ViaXNtU2hhZGVyU2V0ID0gbmV3IEN1YmlzbVNoYWRlclNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaChjb2xvckJsZW5kTW9kZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEN1YmlzbUJsZW5kTW9kZS5DdWJpc21CbGVuZE1vZGVfTm9ybWFsOlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlclNldCA9IHRoaXMuX3NoYWRlclNldHMuYXQoU2hhZGVyTmFtZXMuU2hhZGVyTmFtZXNfTm9ybWFsUHJlbXVsdGlwbGllZEFscGhhICsgb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0NPTE9SID0gdGhpcy5nbC5PTkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0FMUEhBID0gdGhpcy5nbC5PTkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9BTFBIQSA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyU2V0ID0gdGhpcy5fc2hhZGVyU2V0cy5hdChTaGFkZXJOYW1lcy5TaGFkZXJOYW1lc19BZGRQcmVtdWx0aXBsaWVkQWxwaGEgKyBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTUkNfQ09MT1IgPSB0aGlzLmdsLk9ORTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFNUX0NPTE9SID0gdGhpcy5nbC5PTkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNSQ19BTFBIQSA9IHRoaXMuZ2wuWkVSTztcclxuICAgICAgICAgICAgICAgICAgICAgICAgRFNUX0FMUEhBID0gdGhpcy5nbC5PTkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ3ViaXNtQmxlbmRNb2RlLkN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyU2V0ID0gdGhpcy5fc2hhZGVyU2V0cy5hdChTaGFkZXJOYW1lcy5TaGFkZXJOYW1lc19NdWx0UHJlbXVsdGlwbGllZEFscGhhICsgb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0NPTE9SID0gdGhpcy5nbC5EU1RfQ09MT1I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERTVF9DT0xPUiA9IHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU1JDX0FMUEhBID0gdGhpcy5nbC5aRVJPO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEU1RfQUxQSEEgPSB0aGlzLmdsLk9ORTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHNoYWRlclNldC5zaGFkZXJQcm9ncmFtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpoILngrnphY3liJfjga7oqK3lrppcclxuICAgICAgICAgICAgICAgIGlmKGJ1ZmZlckRhdGEudmVydGV4ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyRGF0YS52ZXJ0ZXggPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJEYXRhLnZlcnRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5BUlJBWV9CVUZGRVIsIHZlcnRleEFycmF5LCB0aGlzLmdsLkRZTkFNSUNfRFJBVyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclNldC5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJTZXQuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiwgMiwgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+mggueCueOBruioreWumlxyXG4gICAgICAgICAgICAgICAgaWYoYnVmZmVyRGF0YS51diA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckRhdGEudXYgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJEYXRhLnV2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdXZBcnJheSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJTZXQuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyU2V0LmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24sIDIsIHRoaXMuZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtYXNrZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXg6IFdlYkdMVGV4dHVyZSA9IHJlbmRlcmVyLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoKS5nZXRDbGlwcGluZ01hbmFnZXIoKS5nZXRDb2xvckJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0ZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNoYWRlclNldC5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZpZXfluqfmqJnjgpJDbGlwcGluZ0NvbnRleHTjga7luqfmqJnjgavlpInmj5vjgZnjgovjgZ/jgoHjga7ooYzliJfjgpLoqK3lrppcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoc2hhZGVyU2V0LnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24sIGZhbHNlLHJlbmRlcmVyLmdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoKS5fbWF0cml4Rm9yRHJhdy5nZXRBcnJheSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55So44GZ44KL44Kr44Op44O844OB44Oj44Oz44ON44Or44KS6Kit5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbE5vOiBudW1iZXIgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkuX2xheW91dENoYW5uZWxObztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3JDaGFubmVsOiBDdWJpc21UZXh0dXJlQ29sb3IgPSByZW5kZXJlci5nZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3KCkuZ2V0Q2xpcHBpbmdNYW5hZ2VyKCkuZ2V0Q2hhbm5lbEZsYWdBc0NvbG9yKGNoYW5uZWxObyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoc2hhZGVyU2V0LnVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uLCBjb2xvckNoYW5uZWwuUiwgY29sb3JDaGFubmVsLkcsIGNvbG9yQ2hhbm5lbC5CLCBjb2xvckNoYW5uZWwuQSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj6Kit5a6aXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZUlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNoYWRlclNldC5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5bqn5qiZ5aSJ5o+bXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoc2hhZGVyU2V0LnVuaWZvcm1NYXRyaXhMb2NhdGlvbiwgZmFsc2UsIG1hdHJpeDR4NC5nZXRBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGYoc2hhZGVyU2V0LnVuaWZvcm1CYXNlQ29sb3JMb2NhdGlvbiwgYmFzZUNvbG9yLlIsIGJhc2VDb2xvci5HLCBiYXNlQ29sb3IuQiwgYmFzZUNvbG9yLkEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJQk/jgpLkvZzmiJDjgZfjgIHjg4fjg7zjgr/jgpLou6LpgIFcclxuICAgICAgICAgICAgaWYoYnVmZmVyRGF0YS5pbmRleCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJEYXRhLmluZGV4ID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVyRGF0YS5pbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRleEFycmF5LCB0aGlzLmdsLkRZTkFNSUNfRFJBVyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmxlbmRGdW5jU2VwYXJhdGUoU1JDX0NPTE9SLCBEU1RfQ09MT1IsIFNSQ19BTFBIQSwgRFNUX0FMUEhBKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlU2hhZGVyUHJvZ3JhbSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaGFkZXJTZXRzLmdldFNpemUoKTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5fc2hhZGVyU2V0cy5hdChpKS5zaGFkZXJQcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoaSkuc2hhZGVyUHJvZ3JhbSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLnNldChpLCB2b2lkIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5zZXQoaSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOCkuWIneacn+WMluOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0U2hhZGVyU3JjIOmggueCueOCt+OCp+ODvOODgOOBruOCveODvOOCuVxyXG4gICAgICAgICAqIEBwYXJhbSBmcmFnU2hhZGVyU3JjIOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOOBruOCveODvOOCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZW5lcmF0ZVNoYWRlcnMoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2hhZGVyQ291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5wdXNoQmFjayhuZXcgQ3ViaXNtU2hhZGVyU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0gPSB0aGlzLmxvYWRTaGFkZXJQcm9ncmFtKHZlcnRleFNoYWRlclNyY1NldHVwTWFzaywgZnJhZ21lbnRTaGFkZXJTcmNzZXR1cE1hc2spO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtID0gdGhpcy5sb2FkU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTcmMsIGZyYWdtZW50U2hhZGVyU3JjUHJlbXVsdGlwbGllZEFscGhhKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zaGFkZXJQcm9ncmFtID0gdGhpcy5sb2FkU2hhZGVyUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTcmNNYXNrZWQsIGZyYWdtZW50U2hhZGVyU3JjTWFza1ByZW11bHRpcGxpZWRBbHBoYSk7XHJcblxyXG4gICAgICAgICAgICAvLyDliqDnrpfjgoLpgJrluLjjgajlkIzjgZjjgrfjgqfjg7zjg4Djg7zjgpLliKnnlKjjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtID0gdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0gPSB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW07XHJcblxyXG4gICAgICAgICAgICAvLyDkuZfnrpfjgoLpgJrluLjjgajlkIzjgZjjgrfjgqfjg7zjg4Djg7zjgpLliKnnlKjjgZnjgotcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5zaGFkZXJQcm9ncmFtID0gdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0gPSB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXR1cE1hc2tcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5hdHRyaWJ1dGVUZXhDb29yZExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwiYV90ZXhDb29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMCkuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDApLnVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zaGFkZXJQcm9ncmFtLCBcInVfY2hhbm5lbEZsYWdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMCkudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgwKS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g6YCa5bi477yIUHJlbXVsdGlwbGllZEFscGhh77yJXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkuc2FtcGxlclRleHR1cmUwTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnNoYWRlclByb2dyYW0sIFwic190ZXh0dXJlMFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgxKS51bmlmb3JtTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDEpLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMSkudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgxKS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g6YCa5bi477yI44Kv44Oq44OD44OU44Oz44Kw44CBUHJlbXVsdGlwbGllZEFscGhh77yJXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMikuYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zaGFkZXJQcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMikuYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zaGFkZXJQcm9ncmFtLCBcImFfdGV4Q29vcmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2FtcGxlclRleHR1cmUwTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnNoYWRlclByb2dyYW0sIFwic190ZXh0dXJlMFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zYW1wbGVyVGV4dHVyZTFMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUxXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnVuaWZvcm1NYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS51bmlmb3JtQ2xpcE1hdHJpeExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgyKS5zaGFkZXJQcm9ncmFtLCBcInVfY2xpcE1hdHJpeFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCgyKS51bmlmb3JtQ2hhbm5lbEZsYWdMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NoYW5uZWxGbGFnXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDIpLnVuaWZvcm1CYXNlQ29sb3JMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMikuc2hhZGVyUHJvZ3JhbSwgXCJ1X2Jhc2VDb2xvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWKoOeul++8iFByZW11bHRpcGxpZWRBbHBoYe+8iVxyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLmF0dHJpYnV0ZVBvc2l0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMykuc2hhZGVyUHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMykuc2hhZGVyUHJvZ3JhbSwgXCJhX3RleENvb3JkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoMykudW5pZm9ybU1hdHJpeExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCgzKS5zaGFkZXJQcm9ncmFtLCBcInVfbWF0cml4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDMpLnVuaWZvcm1CYXNlQ29sb3JMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoMykuc2hhZGVyUHJvZ3JhbSwgXCJ1X2Jhc2VDb2xvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWKoOeul++8iOOCr+ODquODg+ODlOODs+OCsOOAgVByZW11bHRpcGxpZWRBbHBoYe+8iVxyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLmF0dHJpYnV0ZVBvc2l0aW9uTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLmF0dHJpYnV0ZVRleENvb3JkTG9jYXRpb24gPSB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJhX3RleENvb3JkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNhbXBsZXJUZXh0dXJlMExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg0KS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2FtcGxlclRleHR1cmUxTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwic190ZXh0dXJlMVwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS51bmlmb3JtTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9tYXRyaXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNCkudW5pZm9ybUNsaXBNYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNCkuc2hhZGVyUHJvZ3JhbSwgXCJ1X2NsaXBNYXRyaXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNCkudW5pZm9ybUNoYW5uZWxGbGFnTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9jaGFubmVsRmxhZ1wiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg0KS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDQpLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XHJcblxyXG4gICAgICAgICAgICAvLyDkuZfnrpfvvIhQcmVtdWx0aXBsaWVkQWxwaGHvvIlcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5hdHRyaWJ1dGVUZXhDb29yZExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNoYWRlclByb2dyYW0sIFwiYV90ZXhDb29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNSkuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnVuaWZvcm1NYXRyaXhMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNSkuc2hhZGVyUHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg1KS51bmlmb3JtQmFzZUNvbG9yTG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDUpLnNoYWRlclByb2dyYW0sIFwidV9iYXNlQ29sb3JcIik7XHJcblxyXG4gICAgICAgICAgICAvLyDkuZfnrpfvvIjjgq/jg6rjg4Pjg5Tjg7PjgrDjgIFQcmVtdWx0aXBsaWVkQWxwaGHvvIlcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5hdHRyaWJ1dGVQb3NpdGlvbkxvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5hdHRyaWJ1dGVUZXhDb29yZExvY2F0aW9uID0gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwiYV90ZXhDb29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zYW1wbGVyVGV4dHVyZTBMb2NhdGlvbiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3NoYWRlclNldHMuYXQoNikuc2hhZGVyUHJvZ3JhbSwgXCJzX3RleHR1cmUwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNhbXBsZXJUZXh0dXJlMUxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zaGFkZXJQcm9ncmFtLCBcInNfdGV4dHVyZTFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNikudW5pZm9ybU1hdHJpeExvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zaGFkZXJQcm9ncmFtLCBcInVfbWF0cml4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnNoYWRlclByb2dyYW0sIFwidV9jbGlwTWF0cml4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFkZXJTZXRzLmF0KDYpLnVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zaGFkZXJQcm9ncmFtLCBcInVfY2hhbm5lbEZsYWdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlclNldHMuYXQoNikudW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5fc2hhZGVyU2V0cy5hdCg2KS5zaGFkZXJQcm9ncmFtLCBcInVfYmFzZUNvbG9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K344Kn44O844OA44OX44Ot44Kw44Op44Og44KS44Ot44O844OJ44GX44Gm44Ki44OJ44Os44K544KS6L+U44GZXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleFNoYWRlclNvdXJjZSAgICDpoILngrnjgrfjgqfjg7zjg4Djga7jgr3jg7zjgrlcclxuICAgICAgICAgKiBAcGFyYW0gZnJhZ21lbnRTaGFkZXJTb3VyY2UgIOODleODqeOCsOODoeODs+ODiOOCt+OCp+ODvOODgOOBruOCveODvOOCuVxyXG4gICAgICAgICAqIEByZXR1cm4g44K344Kn44O844OA44OX44Ot44Kw44Op44Og44Gu44Ki44OJ44Os44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvYWRTaGFkZXJQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNoYWRlclNvdXJjZTogc3RyaW5nKTogV2ViR0xQcm9ncmFtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgU2hhZGVyIFByb2dyYW1cclxuICAgICAgICAgICAgbGV0IHNoYWRlclByb2dyYW06IFdlYkdMUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZlcnRTaGFkZXIgPSB0aGlzLmNvbXBpbGVTaGFkZXJTb3VyY2UodGhpcy5nbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXZlcnRTaGFkZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0Vycm9yKFwiVmVydGV4IHNoYWRlciBjb21waWxlIGVycm9yIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJhZ1NoYWRlciA9IHRoaXMuY29tcGlsZVNoYWRlclNvdXJjZSh0aGlzLmdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgICAgICBpZighZnJhZ1NoYWRlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJWZXJ0ZXggc2hhZGVyIGNvbXBpbGUgZXJyb3IhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGFjaCB2ZXJ0ZXggc2hhZGVyIHRvIHByb2dyYW1cclxuICAgICAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydFNoYWRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBBdHRhY2ggZnJhZ21lbnQgc2hhZGVyIHRvIHByb2dyYW1cclxuICAgICAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ1NoYWRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBsaW5rIHByb2dyYW1cclxuICAgICAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKVxyXG4gICAgICAgICAgICBsZXQgbGlua1N0YXR1cyA9IHRoaXMuZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCB0aGlzLmdsLkxJTktfU1RBVFVTKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIOODquODs+OCr+OBq+WkseaVl+OBl+OBn+OCieOCt+OCp+ODvOODgOODvOOCkuWJiumZpFxyXG4gICAgICAgICAgICBpZighbGlua1N0YXR1cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRXJyb3IoXCJGYWlsZWQgdG8gbGluayBwcm9ncmFtOiB7MH1cIiwgc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodmVydFNoYWRlcik7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0U2hhZGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcihmcmFnU2hhZGVyKTtcclxuICAgICAgICAgICAgICAgIGZyYWdTaGFkZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNoYWRlclByb2dyYW0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlclByb2dyYW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZWxlYXNlIHZlcnRleCBhbmQgZnJhZ21lbnQgc2hhZGVycy5cclxuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodmVydFNoYWRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKGZyYWdTaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgpLjgrPjg7Pjg5HjgqTjg6vjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gc2hhZGVyVHlwZSDjgrfjgqfjg7zjg4Djgr/jgqTjg5coVmVydGV4L0ZyYWdtZW50KVxyXG4gICAgICAgICAqIEBwYXJhbSBzaGFkZXJTb3VyY2Ug44K344Kn44O844OA44K944O844K544Kz44O844OJXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg5HjgqTjg6vjgZXjgozjgZ/jgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6BcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29tcGlsZVNoYWRlclNvdXJjZShzaGFkZXJUeXBlOiBHTGVudW0sIHNoYWRlclNvdXJjZTogc3RyaW5nKTogV2ViR0xQcm9ncmFtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2U6IHN0cmluZyA9IHNoYWRlclNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaGFkZXI6IFdlYkdMUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXNoYWRlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvZzogc3RyaW5nID0gdGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dFcnJvcihcIlNoYWRlciBjb21waWxlIGxvZzogezB9IFwiLCBsb2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzOiBhbnkgPSB0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpO1xyXG4gICAgICAgICAgICBpZighc3RhdHVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0R2woZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9zaGFkZXJTZXRzOiBjc21WZWN0b3I8Q3ViaXNtU2hhZGVyU2V0PjsgLy8g44Ot44O844OJ44GX44Gf44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44KS5L+d5oyB44GZ44KL5aSJ5pWwXHJcbiAgICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDsgIC8vIHdlYmds44Kz44Oz44OG44Kt44K544OIXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdWJpc21TaGFkZXJfV2ViR0zjga7jgqTjg7Pjg4rjg7zjgq/jg6njgrlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVNoYWRlclNldFxyXG4gICAge1xyXG4gICAgICAgIHNoYWRlclByb2dyYW06IFdlYkdMUHJvZ3JhbTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44K344Kn44O844OA44O844OX44Ot44Kw44Op44Og44Gu44Ki44OJ44Os44K5XHJcbiAgICAgICAgYXR0cmlidXRlUG9zaXRpb25Mb2NhdGlvbjogR0x1aW50OyAgICAgICAgICAgICAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iFBvc2l0aW9u77yJXHJcbiAgICAgICAgYXR0cmlidXRlVGV4Q29vcmRMb2NhdGlvbjogR0x1aW50OyAgICAgICAgICAgICAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iFRleENvb3Jk77yJXHJcbiAgICAgICAgdW5pZm9ybU1hdHJpeExvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjsgICAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iE1hdHJpeO+8iVxyXG4gICAgICAgIHVuaWZvcm1DbGlwTWF0cml4TG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uOyAgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgavmuKHjgZnlpInmlbDjga7jgqLjg4njg6zjgrnvvIhDbGlwTWF0cml477yJXHJcbiAgICAgICAgc2FtcGxlclRleHR1cmUwTG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uOyAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iFRleHR1cmUw77yJXHJcbiAgICAgICAgc2FtcGxlclRleHR1cmUxTG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uOyAgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iFRleHR1cmUx77yJXHJcbiAgICAgICAgdW5pZm9ybUJhc2VDb2xvckxvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjsgICAgIC8vIOOCt+OCp+ODvOODgOODvOODl+ODreOCsOODqeODoOOBq+a4oeOBmeWkieaVsOOBruOCouODieODrOOCue+8iEJhc2VDb2xvcu+8iVxyXG4gICAgICAgIHVuaWZvcm1DaGFubmVsRmxhZ0xvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjsgICAvLyDjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgavmuKHjgZnlpInmlbDjga7jgqLjg4njg6zjgrnvvIhDaGFubmVsRmxhZ++8iVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIFNoYWRlck5hbWVzXHJcbiAgICB7XHJcbiAgICAgICAgLy8gU2V0dXBNYXNrXHJcbiAgICAgICAgU2hhZGVyTmFtZXNfU2V0dXBNYXNrLFxyXG5cclxuICAgICAgICAvLyBOb3JtYWxcclxuICAgICAgICBTaGFkZXJOYW1lc19Ob3JtYWxQcmVtdWx0aXBsaWVkQWxwaGEsXHJcbiAgICAgICAgU2hhZGVyTmFtZXNfTm9ybWFsTWFza2VkUHJlbXVsdGlwbGllZEFscGhhLFxyXG5cclxuICAgICAgICAvLyBBZGRcclxuICAgICAgICBTaGFkZXJOYW1lc19BZGRQcmVtdWx0aXBsaWVkQWxwaGEsXHJcbiAgICAgICAgU2hhZGVyTmFtZXNfQWRkTWFza2VkUHJlbXVsdGlwbGVkQWxwaGEsXHJcblxyXG4gICAgICAgIC8vIE11bHRcclxuICAgICAgICBTaGFkZXJOYW1lc19NdWx0UHJlbXVsdGlwbGllZEFscGhhLFxyXG4gICAgICAgIFNoYWRlck5hbWVzX011bHRNYXNrZWRQcmVtdWx0aXBsaWVkQWxwaGEsXHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhTaGFkZXJTcmNTZXR1cE1hc2sgPVxyXG4gICAgICAgIFwiYXR0cmlidXRlIHZlYzQgICAgIGFfcG9zaXRpb247XCIgK1xyXG4gICAgICAgIFwiYXR0cmlidXRlIHZlYzIgICAgIGFfdGV4Q29vcmQ7XCIgK1xyXG4gICAgICAgIFwidmFyeWluZyB2ZWMyICAgICAgIHZfdGV4Q29vcmQ7XCIgK1xyXG4gICAgICAgIFwidmFyeWluZyB2ZWM0ICAgICAgIHZfbXlQb3M7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBtYXQ0ICAgICAgIHVfY2xpcE1hdHJpeDtcIiArXHJcbiAgICAgICAgXCJ2b2lkIG1haW4oKVwiICtcclxuICAgICAgICBcIntcIiArXHJcbiAgICAgICAgXCIgICBnbF9Qb3NpdGlvbiA9IHVfY2xpcE1hdHJpeCAqIGFfcG9zaXRpb247XCIgK1xyXG4gICAgICAgIFwiICAgdl9teVBvcyA9IHVfY2xpcE1hdHJpeCAqIGFfcG9zaXRpb247XCIgK1xyXG4gICAgICAgIFwiICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XCIgK1xyXG4gICAgICAgIFwiICAgdl90ZXhDb29yZC55ID0gMS4wIC0gdl90ZXhDb29yZC55O1wiICtcclxuICAgICAgICBcIn1cIjtcclxuICAgIGV4cG9ydCBjb25zdCBmcmFnbWVudFNoYWRlclNyY3NldHVwTWFzayA9XHJcbiAgICAgICAgXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIiArXHJcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzIgICAgICAgdl90ZXhDb29yZDtcIiArXHJcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzQgICAgICAgdl9teVBvcztcIiArXHJcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSB2ZWM0ICAgICAgIHVfY2hhbm5lbEZsYWc7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgIHNfdGV4dHVyZTA7XCIgK1xyXG4gICAgICAgIFwidm9pZCBtYWluKClcIiArXHJcbiAgICAgICAgXCJ7XCIgK1xyXG4gICAgICAgIFwiICAgZmxvYXQgaXNJbnNpZGUgPSBcIiArXHJcbiAgICAgICAgXCIgICAgICAgc3RlcCh1X2Jhc2VDb2xvci54LCB2X215UG9zLngvdl9teVBvcy53KVwiICtcclxuICAgICAgICBcIiAgICAgICAqIHN0ZXAodV9iYXNlQ29sb3IueSwgdl9teVBvcy55L3ZfbXlQb3MudylcIiArXHJcbiAgICAgICAgXCIgICAgICAgKiBzdGVwKHZfbXlQb3MueC92X215UG9zLncsIHVfYmFzZUNvbG9yLnopXCIgK1xyXG4gICAgICAgIFwiICAgICAgICogc3RlcCh2X215UG9zLnkvdl9teVBvcy53LCB1X2Jhc2VDb2xvci53KTtcIiArXHJcbiAgICAgICAgXCIgICBnbF9GcmFnQ29sb3IgPSB1X2NoYW5uZWxGbGFnICogdGV4dHVyZTJEKHNfdGV4dHVyZTAsIHZfdGV4Q29vcmQpLmEgKiBpc0luc2lkZTtcIiArXHJcbiAgICAgICAgXCJ9XCI7XHJcblxyXG4gICAgLy8tLS0tLSDjg5Djg7zjg4bjg4Pjgq/jgrnjgrfjgqfjg7zjg4Djg5fjg63jgrDjg6njg6AgLS0tLS1cclxuICAgIC8vIE5vcm1hbCAmIEFkZCAmIE11bHQg5YWx6YCaXHJcbiAgICBleHBvcnQgY29uc3QgdmVydGV4U2hhZGVyU3JjID1cclxuICAgICAgICBcImF0dHJpYnV0ZSB2ZWM0ICAgICBhX3Bvc2l0aW9uO1wiICsgLy92LnZlcnRleFxyXG4gICAgICAgIFwiYXR0cmlidXRlIHZlYzIgICAgIGFfdGV4Q29vcmQ7XCIgKyAvL3YudGV4Y29vcmRcclxuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICsgLy92MmYudGV4Y29vcmRcclxuICAgICAgICBcInVuaWZvcm0gbWF0NCAgICAgICB1X21hdHJpeDtcIiArXHJcbiAgICAgICAgXCJ2b2lkIG1haW4oKVwiICtcclxuICAgICAgICBcIntcIiArXHJcbiAgICAgICAgXCIgICBnbF9Qb3NpdGlvbiA9IHVfbWF0cml4ICogYV9wb3NpdGlvbjtcIiArXHJcbiAgICAgICAgXCIgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcIiArXHJcbiAgICAgICAgXCIgICB2X3RleENvb3JkLnkgPSAxLjAgLSB2X3RleENvb3JkLnk7XCIgK1xyXG4gICAgICAgIFwifVwiO1xyXG5cclxuICAgIC8vIE5vcm1hbCAmIEFkZCAmIE11bHQg5YWx6YCa77yI44Kv44Oq44OD44OU44Oz44Kw44GV44KM44Gf44KC44Gu44Gu5o+P55S755So77yJXHJcbiAgICBleHBvcnQgY29uc3QgdmVydGV4U2hhZGVyU3JjTWFza2VkID1cclxuICAgICAgICBcImF0dHJpYnV0ZSB2ZWM0ICAgICBhX3Bvc2l0aW9uO1wiICtcclxuICAgICAgICBcImF0dHJpYnV0ZSB2ZWMyICAgICBhX3RleENvb3JkO1wiICtcclxuICAgICAgICBcInZhcnlpbmcgdmVjMiAgICAgICB2X3RleENvb3JkO1wiICtcclxuICAgICAgICBcInZhcnlpbmcgdmVjNCAgICAgICB2X2NsaXBQb3M7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBtYXQ0ICAgICAgIHVfbWF0cml4O1wiICtcclxuICAgICAgICBcInVuaWZvcm0gbWF0NCAgICAgICB1X2NsaXBNYXRyaXg7XCIgK1xyXG4gICAgICAgIFwidm9pZCBtYWluKClcIiArXHJcbiAgICAgICAgXCJ7XCIgK1xyXG4gICAgICAgIFwiICAgZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIGFfcG9zaXRpb247XCIgK1xyXG4gICAgICAgIFwiICAgdl9jbGlwUG9zID0gdV9jbGlwTWF0cml4ICogYV9wb3NpdGlvbjtcIiArXHJcbiAgICAgICAgXCIgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcIiArXHJcbiAgICAgICAgXCIgICB2X3RleENvb3JkLnkgPSAxLjAgLSB2X3RleENvb3JkLnk7XCIgK1xyXG4gICAgICAgIFwifVwiO1xyXG5cclxuICAgIC8vLS0tLS0g44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44OX44Ot44Kw44Op44OgIC0tLS0tXHJcbiAgICAvLyBOb3JtYWwgJiBBZGQgJiBNdWx0IOWFsemAmiDvvIhQcmVtdWx0aXBsaWVkQWxwaGHvvIlcclxuICAgIGV4cG9ydCBjb25zdCBmcmFnbWVudFNoYWRlclNyY1ByZW11bHRpcGxpZWRBbHBoYSA9XHJcbiAgICAgICAgXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIiArXHJcbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzIgICAgICAgdl90ZXhDb29yZDtcIiArIC8vdjJmLnRleGNvb3JkXHJcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgIHNfdGV4dHVyZTA7XCIgKyAvL19NYWluVGV4XHJcbiAgICAgICAgXCJ2b2lkIG1haW4oKVwiICtcclxuICAgICAgICBcIntcIiArXHJcbiAgICAgICAgXCIgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoc190ZXh0dXJlMCAsIHZfdGV4Q29vcmQpICogdV9iYXNlQ29sb3I7XCIgK1xyXG4gICAgICAgIFwifVwiO1xyXG5cclxuICAgIC8vIE5vcm1hbCDvvIjjgq/jg6rjg4Pjg5Tjg7PjgrDjgZXjgozjgZ/jgoLjga7jga7mj4/nlLvnlKjjgIFQcmVtdWx0aXBsaWVkQWxwaGHlhbznlKjvvIlcclxuICAgIGV4cG9ydCBjb25zdCBmcmFnbWVudFNoYWRlclNyY01hc2tQcmVtdWx0aXBsaWVkQWxwaGEgPVxyXG4gICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIgK1xyXG4gICAgICAgIFwidmFyeWluZyB2ZWMyICAgICAgIHZfdGV4Q29vcmQ7XCIgK1xyXG4gICAgICAgIFwidmFyeWluZyB2ZWM0ICAgICAgIHZfY2xpcFBvcztcIiArXHJcbiAgICAgICAgXCJ1bmlmb3JtIHZlYzQgICAgICAgdV9iYXNlQ29sb3I7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSB2ZWM0ICAgICAgIHVfY2hhbm5lbEZsYWc7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgIHNfdGV4dHVyZTA7XCIgK1xyXG4gICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgIHNfdGV4dHVyZTE7XCIgK1xyXG4gICAgICAgIFwidm9pZCBtYWluKClcIiArXHJcbiAgICAgICAgXCJ7XCIgK1xyXG4gICAgICAgIFwiICAgdmVjNCBjb2xfZm9ybWFzayA9IHRleHR1cmUyRChzX3RleHR1cmUwICwgdl90ZXhDb29yZCkgKiB1X2Jhc2VDb2xvcjtcIiArXHJcbiAgICAgICAgXCIgICB2ZWM0IGNsaXBNYXNrID0gKDEuMCAtIHRleHR1cmUyRChzX3RleHR1cmUxLCB2X2NsaXBQb3MueHkgLyB2X2NsaXBQb3MudykpICogdV9jaGFubmVsRmxhZztcIiArXHJcbiAgICAgICAgXCIgICBmbG9hdCBtYXNrVmFsID0gY2xpcE1hc2suciArIGNsaXBNYXNrLmcgKyBjbGlwTWFzay5iICsgY2xpcE1hc2suYTtcIiArXHJcbiAgICAgICAgXCIgICBjb2xfZm9ybWFzayA9IGNvbF9mb3JtYXNrICogbWFza1ZhbDtcIiArXHJcbiAgICAgICAgXCIgICBnbF9GcmFnQ29sb3IgPSBjb2xfZm9ybWFzaztcIiArXHJcbiAgICAgICAgXCJ9XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZWJHTOeUqOOBruaPj+eUu+WRveS7pOOCkuWun+ijheOBl+OBn+OCr+ODqeOCuVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtUmVuZGVyZXJfV2ViR0wgZXh0ZW5kcyBDdWJpc21SZW5kZXJlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIOW8leaVsOOBq+a4oeOBl+OBn+ODouODh+ODq+OBi+OCieODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOBq+W/heimgeOBquaDheWgseOCkuWPluOCiuWHuuOBmeOBk+OBqOOBjOOBp+OBjeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihtb2RlbC5pc1VzaW5nTWFza2luZygpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIgPSBuZXcgQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMKCk7IC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODu+ODkOODg+ODleOCoeWJjeWHpueQhuaWueW8j+OCkuWIneacn+WMllxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLmluaXRpYWxpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHJhd2FibGVDb3VudCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldERyYXdhYmxlTWFza3MoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXREcmF3YWJsZU1hc2tDb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc29ydGVkRHJhd2FibGVJbmRleExpc3QucmVzaXplKG1vZGVsLmdldERyYXdhYmxlQ291bnQoKSwgMCk7XHJcblxyXG4gICAgICAgICAgICBzdXBlci5pbml0aWFsaXplKG1vZGVsKTsgLy8g6Kaq44Kv44Op44K544Gu5Yem55CG44KS5ZG844G2XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXZWJHTOODhuOCr+OCueODgeODo+OBruODkOOCpOODs+ODieWHpueQhlxyXG4gICAgICAgICAqIEN1YmlzbVJlbmRlcmVy44Gr44OG44Kv44K544OB44Oj44KS6Kit5a6a44GX44CBQ3ViaXNtUmVuZGVyZXLlhoXjgafjgZ3jga7nlLvlg4/jgpLlj4LnhafjgZnjgovjgZ/jgoHjga5JbmRleOWApOOCkuaIu+OCiuWApOOBqOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbFRleHR1cmVObyDjgrvjg4Pjg4jjgZnjgovjg6Ljg4fjg6vjg4bjgq/jgrnjg4Hjg6Pjga7nlarlj7dcclxuICAgICAgICAgKiBAcGFyYW0gZ2xUZXh0dXJlTm8gV2ViR0zjg4bjgq/jgrnjg4Hjg6Pjga7nlarlj7dcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmluZFRleHR1cmUobW9kZWxUZXh0dXJlTm86IG51bWJlciwgZ2xUZXh0dXJlOiBXZWJHTFRleHR1cmUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlcy5zZXRWYWx1ZShtb2RlbFRleHR1cmVObywgZ2xUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdlYkdM44Gr44OQ44Kk44Oz44OJ44GV44KM44Gf44OG44Kv44K544OB44Oj44Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDjg4bjgq/jgrnjg4Hjg6Pjga7jg6rjgrnjg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QmluZGVkVGV4dHVyZXMoKTogY3NtTWFwPG51bWJlciwgV2ViR0xUZXh0dXJlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K644KS6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICog44Oe44K544Kv55So44GuRnJhbWVCdWZmZXLjgpLnoLTmo4TjgIHlho3kvZzmiJDjgZnjgovngrrlh6bnkIbjgrPjgrnjg4jjga/pq5jjgYRcclxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0Q2xpcHBpbmdNYXNrQnVmZmVyU2l6ZShzaXplOiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBGcmFtZUJ1ZmZlcuOBruOCteOCpOOCuuOCkuWkieabtOOBmeOCi+OBn+OCgeOBq+OCpOODs+OCueOCv+ODs+OCueOCkuegtOajhOODu+WGjeS9nOaIkOOBmeOCi1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIgPSBuZXcgQ3ViaXNtQ2xpcHBpbmdNYW5hZ2VyX1dlYkdMKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIuc2V0Q2xpcHBpbmdNYXNrQnVmZmVyU2l6ZShzaXplKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlci5pbml0aWFsaXplKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlQ291bnQoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZU1hc2tzKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVNYXNrQ291bnRzKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODkOODg+ODleOCoeOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44OQ44OD44OV44Kh44Gu44K144Kk44K6XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldENsaXBwaW5nTWFza0J1ZmZlclNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLmdldENsaXBwaW5nTWFza0J1ZmZlclNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IG5ldyBDdWJpc21DbGlwcGluZ01hbmFnZXJfV2ViR0woKTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdERyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlcyA9IG5ldyBjc21NYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0ID0gbmV3IGNzbVZlY3RvcjxudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXg6IFdlYkdMQnVmZmVyID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIHV2OiBXZWJHTEJ1ZmZlciA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogV2ViR0xCdWZmZXIgPSBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Plr77lv5zjg57jg4Pjg5fjga7lrrnph4/jgpLnorrkv53jgZfjgabjgYrjgY9cclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXMucHJlcGFyZUNhcGFjaXR5KDMyLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlci5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsaXBwaW5nTWFuYWdlciA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlckRhdGEudmVydGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YS52ZXJ0ZXggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLl9idWZmZXJEYXRhLnV2KTtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YS51diA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuX2J1ZmZlckRhdGEuaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJEYXRhLmluZGV4ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlcyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovlrp/pmpvjga7lh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZG9EcmF3TW9kZWwoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44O744OQ44OD44OV44Kh5YmN5Yem55CG5pa55byP44Gu5aC05ZCIIC0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBpZih0aGlzLl9jbGlwcGluZ01hbmFnZXIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlwcGluZ01hbmFnZXIuc2V0dXBDbGlwcGluZ0NvbnRleHQodGhpcy5nZXRNb2RlbCgpLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5LiK6KiY44Kv44Oq44OD44OU44Oz44Kw5Yem55CG5YaF44Gn44KC5LiA5bqmUHJlRHJhd+OCkuWRvOOBtuOBruOBp+azqOaEjyEhXHJcbiAgICAgICAgICAgIHRoaXMucHJlRHJhdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVDb3VudDogbnVtYmVyID0gdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlQ291bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyT3JkZXI6IEludDMyQXJyYXkgPSB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVSZW5kZXJPcmRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueOCkuaPj+eUu+mghuOBp+OCveODvOODiFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkcmF3YWJsZUNvdW50OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyOiBudW1iZXIgPSByZW5kZXJPcmRlcltpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0LnNldChvcmRlciwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOaPj+eUu1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkcmF3YWJsZUNvdW50OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlSW5kZXg6IG51bWJlciA9IHRoaXMuX3NvcnRlZERyYXdhYmxlSW5kZXhMaXN0LmF0KGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERyYXdhYmxl44GM6KGo56S654q25oWL44Gn44Gq44GR44KM44Gw5Yem55CG44KS44OR44K544GZ44KLXHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlRHluYW1pY0ZsYWdJc1Zpc2libGUoZHJhd2FibGVJbmRleCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX2NsaXBwaW5nTWFuYWdlciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgID8gKHRoaXMuX2NsaXBwaW5nTWFuYWdlci5nZXRDbGlwcGluZ0NvbnRleHRMaXN0Rm9yRHJhdygpKS5hdChkcmF3YWJsZUluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldElzQ3VsbGluZyh0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVDdWxsaW5nKGRyYXdhYmxlSW5kZXgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdNZXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzKGRyYXdhYmxlSW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5nZXREcmF3YWJsZVZlcnRleEluZGV4Q291bnQoZHJhd2FibGVJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlVmVydGV4Q291bnQoZHJhd2FibGVJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlVmVydGV4SW5kaWNlcyhkcmF3YWJsZUluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVWZXJ0aWNlcyhkcmF3YWJsZUluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVWZXJ0ZXhVdnMoZHJhd2FibGVJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLmdldERyYXdhYmxlT3BhY2l0eShkcmF3YWJsZUluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuZ2V0RHJhd2FibGVCbGVuZE1vZGUoZHJhd2FibGVJbmRleClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFvjgqrjg7zjg5Djg7zjg6njgqTjg4ldXHJcbiAgICAgICAgICog5o+P55S744Kq44OW44K444Kn44Kv44OI77yI44Ki44O844OI44Oh44OD44K344Ol77yJ44KS5o+P55S744GZ44KL44CCXHJcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXHJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXHJcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOWQiOaIkOOCv+OCpOODl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSwgdmVydGV4QXJyYXk6IEZsb2F0MzJBcnJheSwgdXZBcnJheTogRmxvYXQzMkFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDoo4/pnaLmj4/nlLvjga7mnInlirnjg7vnhKHlirlcclxuICAgICAgICAgICAgaWYodGhpcy5pc0N1bGxpbmcoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC5mcm9udEZhY2UodGhpcy5nbC5DQ1cpOyAgICAvLyBDdWJpc20zIE9wZW5HTOOBr+ODnuOCueOCr+ODu+OCouODvOODiOODoeODg+OCt+ODpeWFseOBq0NDV+OBjOihqOmdolxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGVsQ29sb3JSR0JBOiBDdWJpc21UZXh0dXJlQ29sb3IgPSB0aGlzLmdldE1vZGVsQ29sb3IoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzaygpID09IG51bGwpICAvLyDjg57jgrnjgq/nlJ/miJDmmYLku6XlpJZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxDb2xvclJHQkEuQSAqPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1ByZW11bHRpcGxpZWRBbHBoYSgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsQ29sb3JSR0JBLlIgKj0gbW9kZWxDb2xvclJHQkEuQTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbENvbG9yUkdCQS5HICo9IG1vZGVsQ29sb3JSR0JBLkE7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxDb2xvclJHQkEuQiAqPSBtb2RlbENvbG9yUkdCQS5BO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZHJhd3RleHR1cmU6IFdlYkdMVGV4dHVyZTsgIC8vIOOCt+OCp+ODvOODgOOBq+a4oeOBmeODhuOCr+OCueODgeODo1xyXG5cclxuICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Oe44OD44OX44GL44KJ44OQ44Kk44Oz44OJ5riI44G/44OG44Kv44K544OB44Oj77yp77yk44KS5Y+W5b6XXHJcbiAgICAgICAgICAgIC8vIOODkOOCpOODs+ODieOBleOCjOOBpuOBhOOBquOBkeOCjOOBsOODgOODn+ODvOOBruODhuOCr+OCueODgeODo0lE44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3RleHR1cmVzLmdldFZhbHVlKHRleHR1cmVObykgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHJhd3RleHR1cmUgPSB0aGlzLl90ZXh0dXJlcy5nZXRWYWx1ZSh0ZXh0dXJlTm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHJhd3RleHR1cmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDdWJpc21TaGFkZXJfV2ViR0wuZ2V0SW5zdGFuY2UoKS5zZXR1cFNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICB0aGlzLCBkcmF3dGV4dHVyZSwgdmVydGV4Q291bnQsIHZlcnRleEFycmF5LCBpbmRleEFycmF5LCB1dkFycmF5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyRGF0YSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHksIGNvbG9yQmxlbmRNb2RlLCBtb2RlbENvbG9yUkdCQSwgdGhpcy5pc1ByZW11bHRpcGxpZWRBbHBoYSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNdnBNYXRyaXgoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g44Od44Oq44K044Oz44Oh44OD44K344Ol44KS5o+P55S744GZ44KLXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLCBpbmRleENvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW+jOWHpueQhlxyXG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0obnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdyhudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44GM5L+d5oyB44GZ44KL6Z2Z55qE44Gq44Oq44K944O844K544KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICogV2ViR0zjga7pnZnnmoTjgarjgrfjgqfjg7zjg4Djg7zjg5fjg63jgrDjg6njg6DjgpLop6PmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRvU3RhdGljUmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDdWJpc21TaGFkZXJfV2ViR0wuZGVsZXRlSW5zdGFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODvOOCueODhuODvOODiOOCkuioreWumuOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBmYm8g44Ki44OX44Oq44Kx44O844K344On44Oz5YG044Gn5oyH5a6a44GX44Gm44GE44KL44OV44Os44O844Og44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtIHZpZXdwb3J0IOODk+ODpeODvOODneODvOODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRSZW5kZXJTdGF0ZShmYm86IFdlYkdMRnJhbWVidWZmZXIsIHZpZXdwb3J0OiBudW1iZXJbXSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfZmJvID0gZmJvO1xyXG4gICAgICAgICAgICBzX3ZpZXdwb3J0ID0gdmlld3BvcnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmj4/nlLvplovlp4vmmYLjga7ov73liqDlh6bnkIZcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgovliY3jgavjgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jgavlv4XopoHjgarlh6bnkIbjgpLlrp/oo4XjgZfjgabjgYTjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlRHJhdygpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmZpcnN0RHJhdylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdERyYXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmi6HlvLXmqZ/og73jgpLmnInlirnjgavjgZnjgotcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSB0aGlzLmdsLmdldEV4dGVuc2lvbihcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuU0NJU1NPUl9URVNUKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuU1RFTkNJTF9URVNUKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgICAgICAgICAvLyDjgqvjg6rjg7PjgrDvvIgxLjBiZXRhM++8iVxyXG4gICAgICAgICAgICB0aGlzLmdsLmZyb250RmFjZSh0aGlzLmdsLkNXKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7ICAvLyDliY3jgavjg5Djg4Pjg5XjgqHjgYzjg5DjgqTjg7Pjg4njgZXjgozjgabjgYTjgZ/jgonnoLTmo4TjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oe44K544Kv44OG44Kv44K544OB44Oj44Gr5o+P55S744GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OI44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2soY2xpcDogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yTWFzayA9IGNsaXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg57jgrnjgq/jg4bjgq/jgrnjg4Hjg6Pjgavmj4/nlLvjgZnjgovjgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODnuOCueOCr+ODhuOCr+OCueODgeODo+OBq+aPj+eUu+OBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrKCk6IEN1YmlzbUNsaXBwaW5nQ29udGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsaXBwaW5nQ29udGV4dEJ1ZmZlckZvck1hc2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnlLvpnaLkuIrjgavmj4/nlLvjgZnjgovjgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0Q2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdyhjbGlwOiBDdWJpc21DbGlwcGluZ0NvbnRleHQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JEcmF3ID0gY2xpcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeUu+mdouS4iuOBq+aPj+eUu+OBmeOCi+OCr+ODquODg+ODlOODs+OCsOOCs+ODs+ODhuOCreOCueODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g55S76Z2i5LiK44Gr5o+P55S744GZ44KL44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldENsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXcoKTogQ3ViaXNtQ2xpcHBpbmdDb250ZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2xpcHBpbmdDb250ZXh0QnVmZmVyRm9yRHJhdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGds44Gu6Kit5a6aXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXJ0VXAoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICAgICAgdGhpcy5fY2xpcHBpbmdNYW5hZ2VyLnNldEdMKGdsKTtcclxuICAgICAgICAgICAgQ3ViaXNtU2hhZGVyX1dlYkdMLmdldEluc3RhbmNlKCkuc2V0R2woZ2wpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3RleHR1cmVzOiBjc21NYXA8bnVtYmVyLCBXZWJHTFRleHR1cmU+OyAgICAgICAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6vjgYzlj4LnhafjgZnjgovjg4bjgq/jgrnjg4Hjg6Pjgajjg6zjg7Pjg4Djg6njgafjg5DjgqTjg7Pjg4njgZfjgabjgYTjgovjg4bjgq/jgrnjg4Hjg6Pjgajjga7jg57jg4Pjg5dcclxuICAgICAgICBfc29ydGVkRHJhd2FibGVJbmRleExpc3Q6IGNzbVZlY3RvcjxudW1iZXI+OyAgICAgICAgICAgICAvLyDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLmj4/nlLvpoIbjgavkuKbjgbnjgZ/jg6rjgrnjg4hcclxuICAgICAgICBfY2xpcHBpbmdNYW5hZ2VyOiBDdWJpc21DbGlwcGluZ01hbmFnZXJfV2ViR0w7ICAgICAgICAgIC8vIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+euoeeQhuOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgIF9jbGlwcGluZ0NvbnRleHRCdWZmZXJGb3JNYXNrOiBDdWJpc21DbGlwcGluZ0NvbnRleHQ7ICAgLy8g44Oe44K544Kv44OG44Kv44K544OB44Oj44Gr5o+P55S744GZ44KL44Gf44KB44Gu44Kv44Oq44OD44OU44Oz44Kw44Kz44Oz44OG44Kt44K544OIXHJcbiAgICAgICAgX2NsaXBwaW5nQ29udGV4dEJ1ZmZlckZvckRyYXc6IEN1YmlzbUNsaXBwaW5nQ29udGV4dDsgICAvLyDnlLvpnaLkuIrmj4/nlLvjgZnjgovjgZ/jgoHjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjgrPjg7Pjg4bjgq3jgrnjg4hcclxuICAgICAgICBmaXJzdERyYXc6IGJvb2xlYW47XHJcbiAgICAgICAgX2J1ZmZlckRhdGE6IHtcclxuICAgICAgICAgICAgdmVydGV4OiBXZWJHTEJ1ZmZlcixcclxuICAgICAgICAgICAgdXY6IFdlYkdMQnVmZmVyLFxyXG4gICAgICAgICAgICBpbmRleDogV2ViR0xCdWZmZXJcclxuICAgICAgICB9OyAvLyDpoILngrnjg5Djg4Pjg5XjgqHjg4fjg7zjgr9cclxuICAgICAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0OyAgLy8gd2ViZ2zjgrPjg7Pjg4bjgq3jgrnjg4hcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xyXG4gICAgICovXHJcbiAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlID0gKCk6IHZvaWQgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21SZW5kZXJlcl9XZWJHTC5kb1N0YXRpY1JlbGVhc2UoKTtcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ3ViaXNtTG9nRGVidWcgfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogS2V5LVZhbHVl44Gu44Oa44Ki44KS5a6a576p44GZ44KL44Kv44Op44K5XHJcbiAgICAgKiBjc21NYXDjgq/jg6njgrnjga7lhoXpg6jjg4fjg7zjgr/jgafkvb/nlKjjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVBhaXI8X0tleVQsIF9WYWxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgS2V544Go44GX44Gm44K744OD44OI44GZ44KL5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFZhbHVl44Go44GX44Gm44K744OD44OI44GZ44KL5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGtleT86IF9LZXlULCB2YWx1ZT86IF9WYWxUKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdCA9IChrZXkgPT0gdW5kZWZpbmVkKSBcclxuICAgICAgICAgICAgICAgID8gbnVsbCBcclxuICAgICAgICAgICAgICAgIDoga2V5O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IHZhbHVlOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZpcnN0OiBfS2V5VDsgICAvLyBrZXnjgajjgZfjgabnlKjjgYTjgovlpInmlbBcclxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg57jg4Pjg5flnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICogQHBhcmFtIHNpemUg5Yid5pyf5YyW5pmC54K544Gn56K65L+d44GZ44KL44K144Kk44K6XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzaXplICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc2l6ZSA8IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCreODvOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5paw44Gf44Gr6L+95Yqg44GZ44KL44Kt44O8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFwcGVuZEtleShrZXk6IF9LZXlUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5paw44GX44GPS2V5L1ZhbHVl44Gu44Oa44Ki44KS5L2c44KLXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyAxLCBmYWxzZSk7IC8vIDHjgaTku6XkuIrlhaXjgovpmpnplpPjgpLkvZzjgotcclxuICAgICAgICAgICAgLy8g5paw44GX44GEa2V5L3ZhbHVl44Gu44Kk44Oz44OH44OD44Kv44K544GvX3NpemVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplXSA9IG5ldyBjc21QYWlyPF9LZXlULCBfVmFsVD4oa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koZ2V0KVxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUoa2V5OiBfS2V5VCk6IF9WYWxUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKHNldClcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS7o+WFpeOBmeOCi1ZhbHVl5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFZhbHVlKGtleTogX0tleVQsIHZhbHVlOiBfVmFsVCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgafmuKHjgZfjgZ9LZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgovjgYtcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlvJXmlbDjgafmuKHjgZfjgZ9rZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGtleTogX0tleVQpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBrZXlWYWx1ZeOBruODneOCpOODs+OCv+OCkuWFqOOBpuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu44K144Kk44K6XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhOOAglxyXG4gICAgICAgICAqIEBwYXJhbSBmaXRUb1NpemUgdHJ1ZeOBquOCieaMh+WumuOBl+OBn+OCteOCpOOCuuOBq+WQiOOCj+OBm+OCi+OAgmZhbHNl44Gq44KJ44K144Kk44K644KSMuWAjeeiuuS/neOBl+OBpuOBiuOBj+OAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyLCBmaXRUb1NpemU6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaXRUb1NpemUgJiYgbmV3U2l6ZSA8IGNzbU1hcC5EZWZhdWx0U2l6ZSkgbmV3U2l6ZSA9IGNzbU1hcC5EZWZhdWx0U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMikgbmV3U2l6ZSA9IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgdGhpcy5fc2l6ZSk7IC8vIOe1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWJiumZpFxyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCBpbmRleCk7IC8vIOe1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWApOOCkjMy44OT44OD44OI56ym5Y+35LuY44GN5pW05pWw5Z6L44Gn44OA44Oz44OX44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcInswfSAsXCIsIHRoaXMuX2tleVZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcIlxcblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcclxuICAgICAgICBwdWJsaWMgX2tleVZhbHVlczogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+W107Ly8ga2V5LXZhbHVl44Oa44Ki44Gu6YWN5YiXXHJcbiAgICAgICAgcHVibGljIF9kdW1teVZhbHVlOiBfVmFsVDsgIC8vIOepuuOBruWApOOCkui/lOOBmeeCuuOBruODgOODn+ODvFxyXG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjc21NYXA8VD7jga7jgqTjg4bjg6zjg7zjgr9cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9ICh2ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gdlxyXG4gICAgICAgICAgICAgICAgOiBuZXcgY3NtTWFwPF9LZXlULCBfVmFsVD4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IGlkeFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGUuX21hcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgrKyk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgpOyAvLyDlj6TjgYTlgKTjgpLkv53lrZhcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAq5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB0cigpOiBjc21QYWlyPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhPea8lOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl9tYXAgIT0gaXRlLl9tYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luZGV4OiBudW1iZXI7ICAgICAgICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDnn6nlvaLlvaLnirbvvIjluqfmqJnjg7vplbfjgZXjga9mbG9hdOWApO+8ieOCkuWumue+qeOBmeOCi+OCr+ODqeOCuVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgY3NtUmVjdFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSB4IOW3puerr1jluqfmqJlcclxuICAgICAgICAgKiBAcGFyYW0geSDkuIrnq69Z5bqn5qiZXHJcbiAgICAgICAgICogQHBhcmFtIHcg5bmFXHJcbiAgICAgICAgICogQHBhcmFtIGgg6auY44GVXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55+p5b2i5Lit5aSu44GuWOW6p+aomeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDZW50ZXJYKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueCArIDAuNSAqIHRoaXMud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnn6nlvaLkuK3lpK7jga5Z5bqn5qiZ44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldENlbnRlclkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgMC41ICogdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj7PlgbTjga5Y5bqn5qiZ44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFJpZ2h0KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuIvnq6/jga5Z5bqn5qiZ44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJvdHRvbSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOefqeW9ouOBq+WApOOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSByIOefqeW9ouOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRSZWN0KHI6IGNzbVJlY3QpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSByLng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHIueTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHIud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gci5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnn6nlvaLkuK3lpK7jgpLou7jjgavjgZfjgabnuKbmqKrjgpLmi6HnuK7jgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdyDluYXmlrnlkJHjgavmi6HnuK7jgZnjgovph49cclxuICAgICAgICAgKiBAcGFyYW0gaCDpq5jjgZXmlrnlkJHjgavmi6HnuK7jgZnjgovph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXhwYW5kKHc6IG51bWJlciwgaDogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54IC09IHc7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSBoO1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHcgKiAyLjA7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICs9IGggKiAyLjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyOyAgICAgIC8vIOW3puerr1jluqfmqJlcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyOyAgICAgIC8vIOS4iuerr1nluqfmqJlcclxuICAgICAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjsgIC8vIOW5hVxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjsgLy8g6auY44GVXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5paH5a2X5YiX44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjc21TdHJpbmdcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjgpLlvozmlrnjgavov73liqDjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucyArPSAobGVuZ3RoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcclxuICAgICAgICAgICAgICAgIDogYztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X44K144Kk44K644KS5ouh5by144GX44Gm5paH5a2X44KS5Z+L44KB44KLXHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDmi6HlvLXjgZnjgovmloflrZfmlbBcclxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xyXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX44Gu6ZW344GV44KS44OQ44Kk44OI5pWw44Gn5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnMpIC5yZXBsYWNlKC8lLi4vZywgXCJ4XCIpLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8g+OAgDxcclxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTGVzcyhzOiBjc21TdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyDID5cclxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA+IHMucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxyXG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go562J44GX44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcXVhbChzOiBzdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID09IHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjgYznqbrjgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6IOWApOOBjOioreWumuOBleOCjOOBpuOBhOOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoID09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zID0gcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHM6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg5njgq/jgr/jg7zlnovvvIjlj6/lpInphY3liJflnovvvIlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmlpdGFsQ2FwYWNpdHkg5Yid5pyf5YyW5b6M44Gu44Kt44Oj44OR44K344OG44Kj44CC44OH44O844K/44K144Kk44K644GvX2NhcGFjaXR5ICogc2l6ZW9mKFQpXHJcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRpYWxDYXBhY2l0eTogbnVtYmVyID0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B0cltpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOOCu+ODg+ODiOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogVFtdID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5fcHRyW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHVzaEJhY2vlh6bnkIbjgIHjgrPjg7Pjg4bjg4rjgavmlrDjgZ/jgaropoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHVzaEJhY2sodmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOS7o+WFpeWHpueQhuW+jOOBruOCteOCpOOCulxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXNzaWduKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZTogbnVtYmVyID0gdGhpcy5fc2l6ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2FsbFBsYWNlbWVudE5ldylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ldyB2YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV3U2l6ZSA8PSB0aGlzLl9zaXplXHJcbiAgICAgICAgICAgICAgICAvLy0tLVxyXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZSh0aGlzLl9zaXplIC0gc3ViLCBzdWIpOyAgICAvLyDkuI3opoHjgarjga7jgafnoLTmo4TjgZnjgotcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBq+OCs+ODs+ODhuODiuimgee0oOOCkuaMv+WFpeOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gZW5kIOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrue1guerr+S9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcclxuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBzcmNFaTogbnVtYmVyID0gZW5kLl9pbmRleDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmjL/lhaXnlKjjga7ml6LlrZjjg4fjg7zjgr/jgpLjgrfjg5Xjg4jjgZfjgabpmpnplpPjgpLkvZzjgotcclxuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XHJcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShkc3RTaSArIGksIDAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2RzdFNpXSA9IGJlZ2luLl92ZWN0b3IuX3B0cltpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX3NpemUgKyBhZGRDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YmK6Zmk5a6f6KGMXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliYrpmaRcclxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgaXRlcmF0b3I8VD4odGhpcywgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCB0aGlzLl9zaXplKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWZWN0b3IgPSBuZXcgY3NtVmVjdG9yPFQ+KCk7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcclxuICAgICAgICAgICAgbmV3VmVjdG9yLl9zaXplID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fY2FwYWNpdHkgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdWZWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfcHRyOiBUW107ICAgIC8vIOOCs+ODs+ODhuODiuOBruWFiOmgreOCouODieODrOOCuVxyXG4gICAgICAgIF9zaXplOiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxyXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcclxuXHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IHNfZGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY/OiBjc21WZWN0b3I8VD4sIGluZGV4PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpbmRleCAhPSB1bmRlZmluZWQpID8gaW5kZXggOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Luj5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4KyspO1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHRyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB0cigpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICE95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7Q1NNX0xPR19MRVZFTCwgQ1NNX0xPR19MRVZFTF9WRVJCT1NFLCBDU01fTE9HX0xFVkVMX0RFQlVHLCBDU01fTE9HX0xFVkVMX0lORk8sIENTTV9MT0dfTEVWRUxfV0FSTklORywgQ1NNX0xPR19MRVZFTF9FUlJPUn0gZnJvbSBcIi4uL2N1YmlzbWZyYW1ld29ya2NvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludCA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gXHJcbntcclxuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XHJcbntcclxuICAgIEN1YmlzbUxvZ1ByaW50KGxldmVsLCBmbXQgKyBcIlxcblwiLCBhcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBDU01fQVNTRVJUID0gKGV4cHI6IGFueSkgPT5cclxue1xyXG4gICAgY29uc29sZS5hc3NlcnQoZXhwcik7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGxldCBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuXHJcbmlmKENTTV9MT0dfTEVWRUwgPD0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFKVxyXG57XHJcbiAgICBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9ERUJVRylcclxue1xyXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxyXG57XHJcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX1dBUk5JTkcpXHJcbntcclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9FUlJPUilcclxue1xyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxyXG4gICAgICog44Ot44Kw44Gu5Ye65Yqb44CB44OQ44Kk44OI44Gu44OA44Oz44OX44Gq44GpXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxyXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGZvcm1hdCDmm7jlvI/ku5jjgY3mloflrZfliJdcclxuICAgICAgICAgKiBAcGFyYW0gYXJncyDlj6/lpInplbflvJXmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHByaW50KGxvZ0xldmVsOiBMb2dMZXZlbCwgZm9ybWF0OiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxyXG4gICAgICAgICAgICBpZihsb2dMZXZlbCA8IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcmsuZ2V0TG9nZ2luZ0xldmVsKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9nUHJpbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyOiBzdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9cXHsoXFxkKylcXH0vZyxcclxuICAgICAgICAgICAgICAgICAgICAobSwgaykgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxvZ1ByaW50KGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjg7zjgr/jgYvjgonmjIflrprjgZfjgZ/plbfjgZXjgaDjgZHjg4Djg7Pjg5flh7rlipvjgZnjgovjgIJcclxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xyXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGgg44OA44Oz44OX44GZ44KL6ZW344GVXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJSAxNiA9PSAwICYmIGkgPiAwKSB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgJSA4ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiICBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHByaXZhdGUg44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tIiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xyXG5pbXBvcnQge0N1YmlzbUxvZ0luZm99IGZyb20gXCIuL2N1YmlzbWRlYnVnXCI7XHJcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5pbXBvcnQgY3NtVmVjdG9yX2l0ZXJhdG9yID0gY3NtdmVjdG9yLml0ZXJhdG9yO1xyXG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcclxuaW1wb3J0IGNzbU1hcF9pdGVyYXRvciA9IGNzbW1hcC5pdGVyYXRvcjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXHJcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIOiBzdHJpbmcgPSBcIkVycm9yOiB0eXBlIG1pc21hdGNoXCI7XHJcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFM6IHN0cmluZyA9IFwiRXJyb3I6IGluZGV4IG91dCBvZiBib3VuZHNcIjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UmF3U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoZGVmYXVsdFZhbHVlLCBpbmRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLphY3liJfjgafov5TjgZkoVmFsdWVbXSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU/OiBjc21WZWN0b3I8VmFsdWU+KTogY3NtVmVjdG9yPFZhbHVlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuODnuODg+ODl+OBp+i/lOOBmShjc21NYXA8Y3NtU3RyaW5nLCBWYWx1ZT4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oe44OD44OX44Gu44Kt44O85LiA6Kan44KS44Kz44Oz44OG44OK44Gn6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg57jg4Pjg5fjga7jgq3jg7zjga7kuIDopqdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLnNfZHVtbXlLZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYxudWxs44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc051bGwoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaWh+Wtl+WIl+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZeOAgemdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBq+OCqOODqeODvOWApOOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSnNvbkVycm9yLmVycm9yVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbih0cnVlKTtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG5ldyBKc29uRXJyb3IoXCJFUlJPUlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5udWxsVmFsdWUgPSBuZXcgSnNvbk51bGx2YWx1ZSgpO1xyXG5cclxuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBuZXcgY3NtVmVjdG9yPHN0cmluZz4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oq44Oq44O844K555So44Oh44K944OD44OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX3N0cmluZ0J1ZmZlcjogc3RyaW5nOyAvLyDmloflrZfliJfjg5Djg4Pjg5XjgqFcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBlcnJvclZhbHVlOiBWYWx1ZTsgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZnjgqjjg6njg7zjgIIgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc2NpaeaWh+Wtl+OBruOBv+WvvuW/nOOBl+OBn+acgOWwj+mZkOOBrui7vemHj0pTT07jg5Hjg7zjgrXjgIJcclxuICAgICAqIOS7leanmOOBr0pTT07jga7jgrXjg5bjgrvjg4Pjg4jjgajjgarjgovjgIJcclxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcclxuICAgICAqIFxyXG4gICAgICogW+acquWvvuW/nOmgheebrl1cclxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXHJcbiAgICAgKiDjg7tl44Gr44KI44KL5oyH5pWw6KGo54++XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGJ1ZmZlcj86IEFycmF5QnVmZmVyLCBsZW5ndGg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYoYnVmZmVyICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZUJ5dGVzKGJ1ZmZlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDjg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcclxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgILlpLHmlZfjgZfjgZ/jgolOVUxMXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSBuZXcgQ3ViaXNtSnNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFzdWNjZWVkZWQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Kc29uLmRlbGV0ZShqc29uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqrjg5bjgrjjgqfjgq/jg4jjga7op6PmlL7lh6bnkIZcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgQ3ViaXNtSnNvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSb290KCk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICBVbmljb2Rl44Gu44OQ44Kk44OK44Oq44KSU3RyaW5n44Gr5aSJ5o+bXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDlpInmj5vjgZnjgovjg5DjgqTjg4rjg6rjg4fjg7zjgr9cclxuICAgICAgICAgKiBAcmV0dXJuIOWkieaPm+W+jOOBruaWh+Wtl+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgICAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gKFwiJVwiICsgdGhpcy5wYWQodWludDhBcnJheVtpXS50b1N0cmluZygxNikpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqjjg7PjgrPjg7zjg4njgIHjg5Hjg4fjgqPjg7PjgrBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuLmxlbmd0aCA8IDJcclxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXHJcbiAgICAgICAgICAgICAgICA6IG47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOBruODkeODvOOCueOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXHJcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICDjg4fjg7zjgr/jg5DjgqTjg4jjga7jgrXjgqTjgrpcclxuICAgICAgICAgKiByZXR1cm4gdHJ1ZSA6IOaIkOWKn1xyXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBhcnNlQnl0ZXMoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGVuZFBvczogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgemFjeWIl1xyXG4gICAgICAgICAgICBsZXQgZGVjb2RlQnVmZmVyOiBzdHJpbmcgPSB0aGlzLmFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XHJcbiAgICAgICAgICAgICAgICBzdHJidWYgPSBcIkpzb24gcGFyc2UgZXJyb3IgOiBAbGluZSBcIiArICh0aGlzLl9saW5lQ291bnQgKyAxKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcclxuXHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiezB9XCIsIHRoaXMuX3Jvb3QuZ2V0UmF3U3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5fcm9vdCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25FcnJvcihuZXcgY3NtU3RyaW5nKHRoaXMuX2Vycm9yKSwgZmFsc2UpOyAvLyByb29044Gv6Kej5pS+44GV44KM44KL44Gu44Gn44Ko44Op44O844Kq44OW44K444Kn44Kv44OI44KS5Yil6YCU5L2c5oiQ44GZ44KLXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjgrnmmYLjga7jgqjjg6njg7zlgKTjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFyc2VFcnJvcigpOiBzdHJpbmcgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6vjg7zjg4jopoHntKDjga7mrKHjga7opoHntKDjgYzjg5XjgqHjgqTjg6vjga7ntYLnq6/jgaDjgaPjgZ/jgol0cnVl44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290LmdldEFycmF5KClbMV0uZXF1YWxzKFwiRU9GXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xyXG4gICAgICAgICAqIOOCqOODrOODoeODs+ODiOOBruabuOW8j+OBq+W/nOOBmOOBpuWGhemDqOOBp1BhcnNlU3RyaW5nKCksIFBhcnNlT2JqZWN0KCksIFBhcnNlQXJyYXkoKeOCkuWRvOOBtlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxyXG4gICAgICAgICAqIEBwYXJhbSAgIGxlbmd0aCAgICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxyXG4gICAgICAgICAqIEByZXR1cm4gICAgICDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbzogVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XHJcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gYnVmZmVyW2ldO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTdHJpbmc6IHN0cmluZ1tdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gYnVmZmVyLmluZGV4T2YoYWZ0ZXJTdHJpbmdbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25GbG9hdChmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25TdHJpbmcodGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcykpOyAvLyBcXFwi44Gu5qyh44Gu5paH5a2X44GL44KJXHJcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcclxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZUFycmF5KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgbnVsbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiAvLyB0cnVl5Lul5aSW44Gr44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4udHJ1ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHRydWVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogLy8gZmFsc2Xku6XlpJbjgavjgarjgYRcclxuICAgICAgICAgICAgICAgICAgICBpZihpICsgNCA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi5mYWxzZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xyXG4gICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGk7ICAvLyDlkIzjgZjmloflrZfjgpLlho3lh6bnkIZcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgdmFsdWVcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxyXG4gICAgICAgICAqICAgICAgXHJcbiAgICAgICAgICogQHBhcmFtICAgc3RyaW5nICAtPiAg44OR44O844K55a++6LGh44Gu5paH5a2X5YiXXHJcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXHJcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAtPiAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtICBvdXRFbmRQb3MgICAtPiAg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VTdHJpbmcoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcclxuICAgICAgICAgICAgbGV0IGM6IHN0cmluZywgYzI6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IHJldDogY3NtU3RyaW5nID0gbmV3IGNzbVN0cmluZyhcIlwiKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxyXG5cclxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyA9IHN0cmluZ1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOuOAgC8vIOe1guerr+OBruKAneOAgeOCqOOCueOCseODvOODl+aWh+Wtl+OBr+WIpeOBq+WHpueQhuOBleOCjOOCi+OBruOBp+OBk+OBk+OBq+adpeOBquOBhFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxOyAgLy8g4oCd44Gu5qyh44Gu5paH5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJy8vJzogIC8vIOOCqOOCueOCseODvOODl+OBruWgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrOyAvLyDvvJLmloflrZfjgpLjgrvjg4Pjg4jjgafmibHjgYZcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmU3RhcnQgPSBpICsgMTsgLy8g44Ko44K544Kx44O844OX77yI77yS5paH5a2XKeOBruasoeOBruaWh+Wtl+OBi+OCiVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMiA9IHN0cmluZ1tpXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcXCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvdW5pY29yZCBlc2NhcGUgbm90IHN1cHBvcnRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2lsbGVnYWwgZW5kXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZU9iamVjdChidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBKc29uTWFwID0gbmV3IEpzb25NYXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEtleTogVmFsdWVcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kUG9zMjogbnVtYmVyW10gPSBBcnJheSgxKTtcclxuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xyXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QOyAvLy0tIGxvb3DjgYvjgonlh7rjgotcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDnqbpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJzonIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFvaylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwia2V5IG5vdCBmb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cclxuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJ30nIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICcgJzogY2FzZSAnXFx0JyA6IGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5fjgZnjgovmloflrZdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIW9rKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCInOicgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5YCk44KS44OB44Kn44OD44KvXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0LnB1dChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgRk9SX0xPT1AzOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh44Gu44CMXCLjgI3jgb7jgafjga7mloflrZfliJfjgpLjg5Hjg7zjgrnjgZnjgovjgIJcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgLy8ga2V5IDogdmFsdWVcclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRwb3MyOiBudW1iZXJbXSA9IG5ldyBBcnJheSgxKTtcclxuXHJcbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXHJcbiAgICAgICAgICAgIGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBsZW5ndGgsIGksIGxvY2FsUmV0RW5kcG9zMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRwb3MyWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcclxuICAgICAgICAgICAgICAgIC8vIGJvb2xlYW4gYnJlYWtmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7IC8vIOasoeOBrktFWSwgVkFsVUXjgbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuX2xpbmVDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FzZSAnICc6IGNhc2UgJ1xcdCc6IGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGFyc2VPYmplY3RcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfZXJyb3I6IHN0cmluZzsgICAgIC8vIOODkeODvOOCueaZguOBruOCqOODqeODvFxyXG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXHJcbiAgICAgICAgX3Jvb3Q6IFZhbHVlOyAgICAgICAvLyDjg5Hjg7zjgrnjgZXjgozjgZ/jg6vjg7zjg4jopoHntKBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJmbG9hdOWApOOBqOOBl+OBpuaJseOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkZsb2F0IGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRmxvYXQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmJ1ZjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl92YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwLjApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gaW50XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmxvYXRcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkJvb2xlYW4gZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvQm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9ib29sVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImZhbHNlXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX2Jvb2xWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Jvb2xWYWx1ZSA9IHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdHJ1ZVZhbHVlOiBKc29uQm9vbGVhbjsgIC8vIHRydWVcclxuICAgICAgICBzdGF0aWMgZmFsc2VWYWx1ZTogSnNvbkJvb2xlYW47IC8vIGZhbHNlXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2Jvb2xWYWx1ZTogYm9vbGVhbjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLmloflrZfliJfjgajjgZfjgabmibHjgYZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25TdHJpbmcgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBjc21TdHJpbmcpXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzLnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWUucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uRXJyb3IgZXh0ZW5kcyBKc29uU3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCqOODqeODvOaDheWgseOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoXCJzdHJpbmdcIiA9PT0gdHlwZW9mKHMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhdGljID0gaXNTdGF0aWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOOCqOODqeODvOWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX2lzU3RhdGljOiBib29sZWFuOyAvLyDpnZnnmoTjgapWYWx1ZeOBi+OBqeOBhuOBi1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkk5VTEzlgKTjgajjgZfjgabmjIHjgaRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25OdWxsdmFsdWUgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GMTlVMTOWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBcIk51bGxWYWx1ZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS6YWN5YiX44Go44GX44Gm5oyB44GkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJheSA9IG5ldyBjc21WZWN0b3I8VmFsdWU+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2ICYmICF2LmlzU3RhdGljKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9hcnJheS5nZXRTaXplKCkgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdjogVmFsdWUgPSB0aGlzLl9hcnJheS5hdChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5pbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwiXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiBcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJpbmdCdWZmZXIgKyBpbmRlbnQgKyBcIl1cXG5cIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDphY3liJfopoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWRkKHY6IFZhbHVlKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYXJyYXkucHVzaEJhY2sodik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoY3NtVmVjdG9yPFZhbHVlPilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZTogY3NtVmVjdG9yPFZhbHVlPiA9IG51bGwpOiBjc21WZWN0b3I8VmFsdWU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjga7mlbDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheS5nZXRTaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hcnJheTogY3NtVmVjdG9yPFZhbHVlPjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbk1hcCBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBjc21NYXA8c3RyaW5nLCBWYWx1ZT4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjE1hcOWei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0OiBWYWx1ZSA9IHRoaXMuX21hcC5nZXRWYWx1ZShzLnMpO1xyXG4gICAgICAgICAgICAgICAgaWYocmV0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5maXJzdCA9PSBzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZXIucHRyKCkuc2Vjb25kID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlci5wdHIoKS5zZWNvbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBpbmRlbnQgKyBcIntcXG5cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCkuc2Vjb25kO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJ9XFxuXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KSTWFw5Z6L44Gn6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHV0KGtleTogc3RyaW5nLCB2OiBWYWx1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXRWYWx1ZShrZXksIHYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFw44GL44KJ44Kt44O844Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEtleXMoKTogY3NtVmVjdG9yPHN0cmluZz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcOOBruimgee0oOaVsOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfbWFwOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT47ICAgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgICAgIHByaXZhdGUgX2tleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAgICAgICAgICAgICAgIC8vIEpTT07opoHntKDjga7lgKRcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=