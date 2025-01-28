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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/model/cubismmodel.ts");
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

/***/ "./Framework/model/cubismmodel.ts":
/*!****************************************!*\
  !*** ./Framework/model/cubismmodel.ts ***!
  \****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../../Core/live2dcubismcore.d.ts" />





var CubismFramework = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismFramework;
var CubismBlendMode = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismBlendMode;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_3__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmMap;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル
     *
     * Mocデータから生成されるモデルのクラス。
     */
    var CubismModel = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param model モデル
         */
        function CubismModel(model) {
            this._model = model;
            this._parameterValues = null;
            this._parameterMaximumValues = null;
            this._parameterMinimumValues = null;
            this._partOpacities = null;
            this._savedParameters = new csmVector();
            this._parameterIds = new csmVector();
            this._drawableIds = new csmVector();
            this._partIds = new csmVector();
            this._notExistPartId = new csmMap();
            this._notExistParameterId = new csmMap();
            this._notExistParameterValues = new csmMap();
            this._notExistPartOpacities = new csmMap();
        }
        /**
         * モデルのパラメータの更新
         */
        CubismModel.prototype.update = function () {
            // Update model
            this._model.update();
            this._model.drawables.resetDynamicFlags();
        };
        /**
         * キャンバスの幅を取得する
         */
        CubismModel.prototype.getCanvasWidth = function () {
            if (this._model == null) {
                return 0.0;
            }
            return this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
        };
        /**
         * キャンバスの高さを取得する
         */
        CubismModel.prototype.getCanvasHeight = function () {
            if (this._model == null) {
                return 0.0;
            }
            return this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
        };
        /**
         * パラメータを保存する
         */
        CubismModel.prototype.saveParameters = function () {
            var parameterCount = this._model.parameters.count;
            var savedParameterCount = this._savedParameters.getSize();
            for (var i = 0; i < parameterCount; ++i) {
                if (i < savedParameterCount) {
                    this._savedParameters.set(i, this._parameterValues[i]);
                }
                else {
                    this._savedParameters.pushBack(this._parameterValues[i]);
                }
            }
        };
        /**
         * モデルを取得
         */
        CubismModel.prototype.getModel = function () {
            return this._model;
        };
        /**
         * パーツのインデックスを取得
         * @param partId パーツのID
         * @return パーツのインデックス
         */
        CubismModel.prototype.getPartIndex = function (partId) {
            var partIndex;
            var partCount = this._model.parts.count;
            for (partIndex = 0; partIndex < partCount; ++partIndex) {
                if (partId == this._partIds.at(partIndex)) {
                    return partIndex;
                }
            }
            // モデルに存在していない場合、非存在パーツIDリスト内にあるかを検索し、そのインデックスを返す
            if (this._notExistPartId.isExist(partId)) {
                return this._notExistPartId.getValue(partId);
            }
            // 非存在パーツIDリストにない場合、新しく要素を追加する
            partIndex = partCount + this._notExistPartId.getSize();
            this._notExistPartId.setValue(partId, partIndex);
            this._notExistPartOpacities.appendKey(partIndex);
            return partIndex;
        };
        /**
         * パーツの個数の取得
         * @return パーツの個数
         */
        CubismModel.prototype.getPartCount = function () {
            var partCount = this._model.parts.count;
            return partCount;
        };
        /**
         * パーツの不透明度の設定(Index)
         * @param partIndex パーツのインデックス
         * @param opacity 不透明度
         */
        CubismModel.prototype.setPartOpacityByIndex = function (partIndex, opacity) {
            if (this._notExistPartOpacities.isExist(partIndex)) {
                this._notExistPartOpacities.setValue(partIndex, opacity);
                return;
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
            this._partOpacities[partIndex] = opacity;
        };
        /**
         * パーツの不透明度の設定(Id)
         * @param partId パーツのID
         * @param opacity パーツの不透明度
         */
        CubismModel.prototype.setPartOpacityById = function (partId, opacity) {
            // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var index = this.getPartIndex(partId);
            if (index < 0) {
                return; // パーツがないのでスキップ
            }
            this.setPartOpacityByIndex(index, opacity);
        };
        /**
         * パーツの不透明度の取得(index)
         * @param partIndex パーツのインデックス
         * @return パーツの不透明度
         */
        CubismModel.prototype.getPartOpacityByIndex = function (partIndex) {
            if (this._notExistPartOpacities.isExist(partIndex)) {
                // モデルに存在しないパーツIDの場合、非存在パーツリストから不透明度を返す。
                return this._notExistPartOpacities.getValue(partIndex);
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= partIndex && partIndex < this.getPartCount());
            return this._partOpacities[partIndex];
        };
        /**
         * パーツの不透明度の取得(id)
         * @param partId パーツのＩｄ
         * @return パーツの不透明度
         */
        CubismModel.prototype.getPartOpacityById = function (partId) {
            // 高速化のためにPartIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var index = this.getPartIndex(partId);
            if (index < 0) {
                return 0; // パーツが無いのでスキップ
            }
            return this.getPartOpacityByIndex(index);
        };
        /**
         * パラメータのインデックスの取得
         * @param パラメータID
         * @return パラメータのインデックス
         */
        CubismModel.prototype.getParameterIndex = function (parameterId) {
            var parameterIndex;
            var idCount = this._model.parameters.count;
            for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
                if (parameterId != this._parameterIds.at(parameterIndex)) {
                    continue;
                }
                return parameterIndex;
            }
            // モデルに存在していない場合、非存在パラメータIDリスト内を検索し、そのインデックスを返す
            if (this._notExistParameterId.isExist(parameterId)) {
                return this._notExistParameterId.getValue(parameterId);
            }
            // 非存在パラメータIDリストにない場合新しく要素を追加する
            parameterIndex = this._model.parameters.count + this._notExistParameterId.getSize();
            this._notExistParameterId.setValue(parameterId, parameterIndex);
            this._notExistParameterValues.appendKey(parameterIndex);
            return parameterIndex;
        };
        /**
         * パラメータの個数の取得
         * @return パラメータの個数
         */
        CubismModel.prototype.getParameterCount = function () {
            return this._model.parameters.count;
        };
        /**
         * パラメータの最大値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータの最大値
         */
        CubismModel.prototype.getParameterMaximumValue = function (parameterIndex) {
            return this._model.parameters.maximumValues[parameterIndex];
        };
        /**
         * パラメータの最小値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータの最小値
         */
        CubismModel.prototype.getParameterMinimumValue = function (parameterIndex) {
            return this._model.parameters.minimumValues[parameterIndex];
        };
        /**
         * パラメータのデフォルト値の取得
         * @param parameterIndex パラメータのインデックス
         * @return パラメータのデフォルト値
         */
        CubismModel.prototype.getParameterDefaultValue = function (parameterIndex) {
            return this._model.parameters.defaultValues[parameterIndex];
        };
        /**
         * パラメータの値の取得
         * @param parameterIndex    パラメータのインデックス
         * @return パラメータの値
         */
        CubismModel.prototype.getParameterValueByIndex = function (parameterIndex) {
            if (this._notExistParameterValues.isExist(parameterIndex)) {
                return this._notExistParameterValues.getValue(parameterIndex);
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
            return this._parameterValues[parameterIndex];
        };
        /**
         * パラメータの値の取得
         * @param parameterId    パラメータのID
         * @return パラメータの値
         */
        CubismModel.prototype.getParameterValueById = function (parameterId) {
            // 高速化のためにparameterIndexを取得できる機構になっているが、外部からの設定の時は呼び出し頻度が低いため不要
            var parameterIndex = this.getParameterIndex(parameterId);
            return this.getParameterValueByIndex(parameterIndex);
        };
        /**
         * パラメータの値の設定
         * @param parameterIndex パラメータのインデックス
         * @param value パラメータの値
         * @param weight 重み
         */
        CubismModel.prototype.setParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            if (this._notExistParameterValues.isExist(parameterIndex)) {
                this._notExistParameterValues.setValue(parameterIndex, (weight == 1)
                    ? value
                    : (this._notExistParameterValues.getValue(parameterIndex) * (1 - weight)) + (value * weight));
                return;
            }
            // インデックスの範囲内検知
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(0 <= parameterIndex && parameterIndex < this.getParameterCount());
            if (this._model.parameters.maximumValues[parameterIndex] < value) {
                value = this._model.parameters.maximumValues[parameterIndex];
            }
            if (this._model.parameters.minimumValues[parameterIndex] > value) {
                value = this._model.parameters.minimumValues[parameterIndex];
            }
            this._parameterValues[parameterIndex] = (weight == 1)
                ? value
                : this._parameterValues[parameterIndex] = (this._parameterValues[parameterIndex] * (1 - weight)) + (value * weight);
        };
        /**
         * パラメータの値の設定
         * @param parameterId パラメータのID
         * @param value パラメータの値
         * @param weight 重み
         */
        CubismModel.prototype.setParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.setParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の加算(index)
         * @param parameterIndex パラメータインデックス
         * @param value 加算する値
         * @param weight 重み
         */
        CubismModel.prototype.addParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) + (value * weight)));
        };
        /**
         * パラメータの値の加算(id)
         * @param parameterId パラメータＩＤ
         * @param value 加算する値
         * @param weight 重み
         */
        CubismModel.prototype.addParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.addParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の乗算
         * @param parameterId パラメータのID
         * @param value 乗算する値
         * @param weight 重み
         */
        CubismModel.prototype.multiplyParameterValueById = function (parameterId, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            var index = this.getParameterIndex(parameterId);
            this.multiplyParameterValueByIndex(index, value, weight);
        };
        /**
         * パラメータの値の乗算
         * @param parameterIndex パラメータのインデックス
         * @param value　乗算する値
         * @param weight 重み
         */
        CubismModel.prototype.multiplyParameterValueByIndex = function (parameterIndex, value, weight) {
            if (weight === void 0) { weight = 1.0; }
            this.setParameterValueByIndex(parameterIndex, (this.getParameterValueByIndex(parameterIndex) * (1.0 + (value - 1.0) * weight)));
        };
        /**
         * Drawableのインデックスの取得
         * @param drawableId DrawableのID
         * @return Drawableのインデックス
         */
        CubismModel.prototype.getDrawableIndex = function (drawableId) {
            var drawableCount = this._model.drawables.count;
            for (var drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
                if (this._drawableIds.at(drawableIndex) == drawableId) {
                    return drawableIndex;
                }
            }
            return -1;
        };
        /**
         * Drawableの個数の取得
         * @return drawableの個数
         */
        CubismModel.prototype.getDrawableCount = function () {
            var drawableCount = this._model.drawables.count;
            return drawableCount;
        };
        /**
         * DrawableのIDを取得する
         * @param drawableIndex Drawableのインデックス
         * @return drawableのID
         */
        CubismModel.prototype.getDrawableId = function (drawableIndex) {
            var parameterIds = this._model.drawables.ids;
            return CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
        };
        /**
         * Drawableの描画順リストの取得
         * @return Drawableの描画順リスト
         */
        CubismModel.prototype.getDrawableRenderOrders = function () {
            var renderOrders = this._model.drawables.renderOrders;
            return renderOrders;
        };
        /**
         * Drawableのテクスチャインデックスリストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのテクスチャインデックスリスト
         */
        CubismModel.prototype.getDrawableTextureIndices = function (drawableIndex) {
            var textureIndices = this._model.drawables.textureIndices;
            return textureIndices[drawableIndex];
        };
        /**
         * DrawableのVertexPositionsの変化情報の取得
         *
         * 直近のCubismModel.update関数でDrawableの頂点情報が変化したかを取得する。
         *
         * @param   drawableIndex   Drawableのインデックス
         * @retval  true    Drawableの頂点情報が直近のCubismModel.update関数で変化した
         * @retval  false   Drawableの頂点情報が直近のCubismModel.update関数で変化していない
         */
        CubismModel.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの頂点インデックスの個数の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点インデックスの個数
         */
        CubismModel.prototype.getDrawableVertexIndexCount = function (drawableIndex) {
            var indexCounts = this._model.drawables.indexCounts;
            return indexCounts[drawableIndex];
        };
        /**
         * Drawableの頂点の個数の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点の個数
         */
        CubismModel.prototype.getDrawableVertexCount = function (drawableIndex) {
            var vertexCounts = this._model.drawables.vertexCounts;
            return vertexCounts[drawableIndex];
        };
        /**
         * Drawableの頂点リストの取得
         * @param drawableIndex drawableのインデックス
         * @return drawableの頂点リスト
         */
        CubismModel.prototype.getDrawableVertices = function (drawableIndex) {
            return this.getDrawableVertexPositions(drawableIndex);
        };
        /**
         * Drawableの頂点インデックスリストの取得
         * @param drarableIndex Drawableのインデックス
         * @return drawableの頂点インデックスリスト
         */
        CubismModel.prototype.getDrawableVertexIndices = function (drawableIndex) {
            var indicesArray = this._model.drawables.indices;
            return indicesArray[drawableIndex];
        };
        /**
         * Drawableの頂点リストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点リスト
         */
        CubismModel.prototype.getDrawableVertexPositions = function (drawableIndex) {
            var verticesArray = this._model.drawables.vertexPositions;
            return verticesArray[drawableIndex];
        };
        /**
         * Drawableの頂点のUVリストの取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの頂点UVリスト
         */
        CubismModel.prototype.getDrawableVertexUvs = function (drawableIndex) {
            var uvsArray = this._model.drawables.vertexUvs;
            return uvsArray[drawableIndex];
        };
        /**
         * Drawableの不透明度の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableの不透明度
         */
        CubismModel.prototype.getDrawableOpacity = function (drawableIndex) {
            var opacities = this._model.drawables.opacities;
            return opacities[drawableIndex];
        };
        /**
         * Drawableのカリング情報の取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのカリング情報
         */
        CubismModel.prototype.getDrawableCulling = function (drawableIndex) {
            var constantFlags = this._model.drawables.constantFlags;
            return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
        };
        /**
         * Drawableのブレンドモードを取得
         * @param drawableIndex Drawableのインデックス
         * @return drawableのブレンドモード
         */
        CubismModel.prototype.getDrawableBlendMode = function (drawableIndex) {
            var constantFlags = this._model.drawables.constantFlags;
            return (Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex]))
                ? CubismBlendMode.CubismBlendMode_Additive
                : (Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex]))
                    ? CubismBlendMode.CubismBlendMode_Multiplicative
                    : CubismBlendMode.CubismBlendMode_Normal;
        };
        /**
         * Drawableのクリッピングマスクリストの取得
         * @return Drawableのクリッピングマスクリスト
         */
        CubismModel.prototype.getDrawableMasks = function () {
            var masks = this._model.drawables.masks;
            return masks;
        };
        /**
         * Drawableのクリッピングマスクの個数リストの取得
         * @return Drawableのクリッピングマスクの個数リスト
         */
        CubismModel.prototype.getDrawableMaskCounts = function () {
            var maskCounts = this._model.drawables.maskCounts;
            return maskCounts;
        };
        /**
         * クリッピングマスクの使用状態
         *
         * @return true クリッピングマスクを使用している
         * @return false クリッピングマスクを使用していない
         */
        CubismModel.prototype.isUsingMasking = function () {
            for (var d = 0; d < this._model.drawables.count; ++d) {
                if (this._model.drawables.maskCounts[d] <= 0) {
                    continue;
                }
                return true;
            }
            return false;
        };
        /**
         * Drawableの表示情報を取得する
         *
         * @param drawableIndex Drawableのインデックス
         * @return true Drawableが表示
         * @return false Drawableが非表示
         */
        CubismModel.prototype.getDrawableDynamicFlagIsVisible = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
        };
        /**
         * DrawableのDrawOrderの変化情報の取得
         *
         * 直近のCubismModel.update関数でdrawableのdrawOrderが変化したかを取得する。
         * drawOrderはartMesh上で指定する0から1000の情報
         * @param drawableIndex drawableのインデックス
         * @return true drawableの不透明度が直近のCubismModel.update関数で変化した
         * @return false drawableの不透明度が直近のCubismModel.update関数で変化している
         */
        CubismModel.prototype.getDrawableDynamicFlagVisibilityDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの不透明度の変化情報の取得
         *
         * 直近のCubismModel.update関数でdrawableの不透明度が変化したかを取得する。
         *
         * @param drawableIndex drawableのインデックス
         * @return true Drawableの不透明度が直近のCubismModel.update関数で変化した
         * @return false Drawableの不透明度が直近のCubismModel.update関数で変化してない
         */
        CubismModel.prototype.getDrawableDynamicFlagOpacityDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * Drawableの描画順序の変化情報の取得
         *
         * 直近のCubismModel.update関数でDrawableの描画の順序が変化したかを取得する。
         *
         * @param drawableIndex Drawableのインデックス
         * @return true Drawableの描画の順序が直近のCubismModel.update関数で変化した
         * @return false Drawableの描画の順序が直近のCubismModel.update関数で変化してない
         */
        CubismModel.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (drawableIndex) {
            var dynamicFlags = this._model.drawables.dynamicFlags;
            return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
        };
        /**
         * 保存されたパラメータの読み込み
         */
        CubismModel.prototype.loadParameters = function () {
            var parameterCount = this._model.parameters.count;
            var savedParameterCount = this._savedParameters.getSize();
            if (parameterCount > savedParameterCount) {
                parameterCount = savedParameterCount;
            }
            for (var i = 0; i < parameterCount; ++i) {
                this._parameterValues[i] = this._savedParameters.at(i);
            }
        };
        /**
         * 初期化する
         */
        CubismModel.prototype.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_4__["CSM_ASSERT"])(this._model);
            this._parameterValues = this._model.parameters.values;
            this._partOpacities = this._model.parts.opacities;
            this._parameterMaximumValues = this._model.parameters.maximumValues;
            this._parameterMinimumValues = this._model.parameters.minimumValues;
            {
                var parameterIds = this._model.parameters.ids;
                var parameterCount = this._model.parameters.count;
                this._parameterIds.prepareCapacity(parameterCount);
                for (var i = 0; i < parameterCount; ++i) {
                    this._parameterIds.pushBack(CubismFramework.getIdManager().getId(parameterIds[i]));
                }
            }
            {
                var partIds = this._model.parts.ids;
                var partCount = this._model.parts.count;
                this._partIds.prepareCapacity(partCount);
                for (var i = 0; i < partCount; ++i) {
                    this._partIds.pushBack(CubismFramework.getIdManager().getId(partIds[i]));
                }
            }
            {
                var drawableIds = this._model.drawables.ids;
                var drawableCount = this._model.drawables.count;
                this._drawableIds.prepareCapacity(drawableCount);
                for (var i = 0; i < drawableCount; ++i) {
                    this._drawableIds.pushBack(CubismFramework.getIdManager().getId(drawableIds[i]));
                }
            }
        };
        /**
         * デストラクタ相当の処理
         */
        CubismModel.prototype.release = function () {
            this._model.release();
            this._model = null;
        };
        return CubismModel;
    }());
    Live2DCubismFramework.CubismModel = CubismModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tb2RlbC9jdWJpc21tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbW1hcC50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdXRpbHMvY3ViaXNtanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7RUFLRTtBQUVGLDBEQUEwRDtBQUMxRCxhQUFhO0FBQ2IsMERBQTBEO0FBRTFELHVDQUF1QztBQUN2QyxZQUFZO0FBQ0wsSUFBTSxxQkFBcUIsR0FBVyxDQUFDLENBQUM7QUFDL0MsY0FBYztBQUNQLElBQU0sbUJBQW1CLEdBQVcsQ0FBQyxDQUFDO0FBQzdDLGNBQWM7QUFDUCxJQUFNLGtCQUFrQixHQUFXLENBQUMsQ0FBQztBQUM1QyxZQUFZO0FBQ0wsSUFBTSxxQkFBcUIsR0FBVyxDQUFDLENBQUM7QUFDL0MsYUFBYTtBQUNOLElBQU0sbUJBQW1CLEdBQVcsQ0FBQyxDQUFDO0FBQzdDLFlBQVk7QUFDTCxJQUFNLGlCQUFpQixHQUFXLENBQUMsQ0FBQztBQUUzQzs7Ozs7RUFLRTtBQUNLLElBQU0sYUFBYSxHQUFXLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0IzRDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVrRTtBQUNyRSxJQUFPLFNBQVMsR0FBRyxxRUFBUyxDQUFDLFNBQVMsQ0FBQztBQUVoQyxJQUFVLHFCQUFxQixDQStFckM7QUEvRUQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQVVJOztXQUVHO1FBQ0gsa0JBQW1CLEVBQXNCO1lBRXJDLElBQUcsT0FBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFFBQVEsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQXBCRDs7V0FFRztRQUNJLDRCQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7UUFnQkQ7Ozs7V0FJRztRQUNJLDBCQUFPLEdBQWQsVUFBZSxDQUFnQztZQUUzQyxJQUFJLE9BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQzFCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQ0ksSUFBSSxDQUFDLFlBQVksU0FBUyxFQUMvQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztpQkFDSSxJQUFJLENBQUMsWUFBWSxRQUFRLEVBQzlCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksNkJBQVUsR0FBakIsVUFBa0IsQ0FBZ0M7WUFFOUMsSUFBSSxPQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUN6QjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBQ0ksSUFBSSxDQUFDLFlBQVksU0FBUyxFQUMvQjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO2lCQUNJLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFDOUI7Z0JBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBR0wsZUFBQztJQUFELENBQUM7SUFyRVksOEJBQVEsV0FxRXBCO0FBR0wsQ0FBQyxFQS9FZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQStFckM7Ozs7Ozs7Ozs7Ozs7QUN6RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7RUFLRTtBQUVtRTtBQUNSO0FBRzdELElBQU8sUUFBUSxHQUFHLCtEQUFRLENBQUMsUUFBUSxDQUFDO0FBQ3BDLElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRWhDLElBQVUscUJBQXFCLENBb0hyQztBQXBIRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBRUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQVksQ0FBQztRQUMxQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQ0FBTyxHQUFkO1lBRUksS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ25EO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0kscUNBQVcsR0FBbEIsVUFBbUIsR0FBMkI7WUFFMUMsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO2dCQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLG9DQUFVLEdBQWpCLFVBQWtCLEVBQXNCO1lBRXBDLElBQUksTUFBTSxHQUFhLElBQUksQ0FBQztZQUU1QixJQUFJLFFBQVEsSUFBSSxPQUFNLENBQUMsRUFBRSxDQUFDLEVBQzFCO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFDdEM7b0JBQ0ksT0FBTyxNQUFNLENBQUM7aUJBQ2pCO2dCQUVELE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7aUJBRUQ7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksK0JBQUssR0FBWixVQUFhLEVBQXNCO1lBRS9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxpQ0FBTyxHQUFkLFVBQWUsRUFBc0I7WUFFakMsSUFBSSxRQUFRLElBQUksT0FBTSxDQUFDLEVBQUUsQ0FBQyxFQUMxQjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ssZ0NBQU0sR0FBZCxVQUFlLEVBQVU7WUFFckIsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ25EO2dCQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUMxQztvQkFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNKO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUdMLHNCQUFDO0lBQUQsQ0FBQztJQTVHWSxxQ0FBZSxrQkE0RzNCO0FBQ0wsQ0FBQyxFQXBIZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9IckM7Ozs7Ozs7Ozs7Ozs7QUNsSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSCxzREFBc0Q7QUFDaUI7QUFDTztBQUNLO0FBQ0g7QUFDaEYsSUFBTyxLQUFLLEdBQUcsdUVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDaEMsSUFBTyxlQUFlLEdBQUcseUVBQWUsQ0FBQyxlQUFlLENBQUM7QUFDekQsSUFBTyxjQUFjLEdBQUcsK0VBQWMsQ0FBQyxjQUFjLENBQUM7QUFFL0MsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLE1BQWdCO0lBRTlDLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztJQUN0QixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsR0FBSSxDQUFDLEVBQUUsRUFDNUI7UUFDSSxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEMseUJBQXlCO1FBQ3pCLElBQUcsS0FBSyxJQUFFLEdBQUcsSUFBSSxLQUFLLElBQUUsR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQzNDO1lBQ0ksU0FBUztTQUNaO1FBRUosZUFBZTtRQUNaLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDaEI7WUFDQSxxQkFBcUI7WUFDakIsTUFBTTtTQUNUO1FBRUwsMEJBQTBCO1FBQ3RCLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDYjtJQUNELElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLFVBQVU7SUFFbEMsSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1g7UUFDQyxxQkFBcUI7UUFDbEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBRXJDLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVNLElBQVUscUJBQXFCLENBb09yQztBQXBPRCxXQUFpQixxQkFBcUI7SUFFbEMsa0JBQWtCO0lBRWxCLElBQUksV0FBVyxHQUFZLEtBQUssQ0FBQztJQUNqQyxJQUFJLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFDckMsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDO0lBQzVCLElBQUksaUJBQWlCLEdBQW9CLElBQUksQ0FBQztJQUU5Qzs7T0FFRztJQUNILElBQWlCLFFBQVEsQ0FJeEI7SUFKRCxXQUFpQixRQUFRO1FBRVIscUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBSyxnQkFBZ0I7UUFDOUMsbUJBQVUsR0FBVyxDQUFDLENBQUMsQ0FBTyxlQUFlO0lBQzlELENBQUMsRUFKZ0IsUUFBUSxHQUFSLDhCQUFRLEtBQVIsOEJBQVEsUUFJeEI7SUFFRCxTQUFnQixTQUFTLENBQUksT0FBVTtRQUVuQyxJQUFHLENBQUMsT0FBTyxFQUNYO1lBQ0ksT0FBTztTQUNWO1FBRUQsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFSZSwrQkFBUyxZQVF4QjtJQUVEOzs7T0FHRztJQUNIO1FBMkxJOzs7V0FHRztRQUNIO1FBR0EsQ0FBQztRQWhNRDs7Ozs7Ozs7V0FRRztRQUNXLHVCQUFPLEdBQXJCLFVBQXNCLE1BQXFCO1lBQXJCLHNDQUFxQjtZQUV2QyxJQUFHLFdBQVcsRUFDZDtnQkFDSSx3RUFBYSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0JBQzVELE9BQU8sV0FBVyxDQUFDO2FBQ3RCO1lBRUQsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUVsQixJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQ25CO2dCQUNJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDcEU7WUFFRCxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRW5CLCtCQUErQjtZQUMvQixJQUFHLFdBQVcsRUFDZDtnQkFDSSxJQUFNLE9BQU8sR0FBVyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2pFLElBQU0sS0FBSyxHQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JELElBQU0sS0FBSyxHQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JELElBQU0sS0FBSyxHQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBTSxhQUFhLEdBQVcsT0FBTyxDQUFDO2dCQUV0Qyx3RUFBYSxDQUFDLCtDQUErQyxFQUN6RCxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMxQixhQUFhLENBQ2hCLENBQUM7YUFDTDtZQUVELHdFQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUV4RCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBRUQ7OztXQUdHO1FBQ1csdUJBQU8sR0FBckI7WUFFSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQztRQUVEOzs7V0FHRztRQUNXLDBCQUFVLEdBQXhCO1lBRUkscUVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QixJQUFHLENBQUMsV0FBVyxFQUNmO2dCQUNJLDJFQUFnQixDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU87YUFDVjtZQUVELHFDQUFxQztZQUNyQyx5QkFBeUI7WUFDekIsMkNBQTJDO1lBQzNDLElBQUksZUFBZSxFQUNuQjtnQkFDSSwyRUFBZ0IsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2dCQUMvRSxPQUFPO2FBQ1Y7WUFFRCxzQkFBc0I7WUFDdEIsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7WUFFekMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUUxQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBRXZCLHdFQUFhLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNXLHVCQUFPLEdBQXJCO1lBRUkscUVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QixJQUFHLENBQUMsV0FBVyxFQUNmO2dCQUNJLDJFQUFnQixDQUFDLGlDQUFpQyxDQUFDLENBQUM7Z0JBQ3BELE9BQU87YUFDVjtZQUVELHNDQUFzQztZQUN0Qyx5Q0FBeUM7WUFDekMsSUFBRyxDQUFDLGVBQWUsRUFBSyxxQkFBcUI7YUFDN0M7Z0JBQ0ksMkVBQWdCLENBQUMscURBQXFELENBQUMsQ0FBQztnQkFDeEUsT0FBTzthQUNWO1lBRUQsS0FBSyxDQUFDLDZCQUE2QixFQUFFLENBQUM7WUFFdEMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBRXpCLCtCQUErQjtZQUMvQixjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFL0IsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUV4Qix3RUFBYSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUdEOzs7V0FHRztRQUNXLHlCQUFTLEdBQXZCO1lBRUksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7V0FHRztRQUNXLDZCQUFhLEdBQTNCO1lBRUksT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQUVEOzs7O1dBSUc7UUFDVywrQkFBZSxHQUE3QixVQUE4QixPQUFlO1lBRXpDLGtDQUFrQztZQUNsQyxJQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQ2hEO2dCQUNJLE9BQU87YUFDVjtZQUVELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRDs7OztXQUlHO1FBQ1csK0JBQWUsR0FBN0I7WUFFSSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQ3BCO2dCQUNJLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQzthQUNoQztZQUNELE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNqQyxDQUFDO1FBRUQ7OztXQUdHO1FBQ1csNEJBQVksR0FBMUI7WUFFSSxPQUFPLGlCQUFpQixDQUFDO1FBQzdCLENBQUM7UUFVTCxzQkFBQztJQUFELENBQUM7SUFuTVkscUNBQWUsa0JBbU0zQjtBQUNMLENBQUMsRUFwT2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFvT3JDO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQzs7QUFFRDs7R0FFRztBQUNILElBQVksUUFRWDtBQVJELFdBQVksUUFBUTtJQUVoQiwrREFBb0I7SUFDcEIsMkRBQWM7SUFDZCx5REFBYTtJQUNiLCtEQUFnQjtJQUNoQiwyREFBYztJQUNkLHVEQUFZLEVBQVksU0FBUztBQUNyQyxDQUFDLEVBUlcsUUFBUSxLQUFSLFFBQVEsUUFRbkI7Ozs7Ozs7Ozs7Ozs7QUM3U0Q7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUksSUFBVSxxQkFBcUIsQ0E4UnJDO0FBOVJELFdBQWlCLHFCQUFxQjtJQUVsQzs7OztPQUlHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFJLFlBQVk7WUFDaEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDVyx1QkFBUSxHQUF0QixVQUF1QixDQUFlLEVBQUUsQ0FBZSxFQUFFLEdBQWlCO1lBRXRFLElBQUksQ0FBQyxHQUFpQixJQUFJLFlBQVksQ0FDbEM7Z0JBQ0ksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRzthQUNyQixDQUNKLENBQUM7WUFFRixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7WUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDbEM7Z0JBQ0ksS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDakM7b0JBQ0ksS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDakM7d0JBQ0ksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQy9DO2lCQUNKO2FBQ0o7WUFFRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNsQztnQkFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0kscUNBQVksR0FBbkI7WUFFSSxJQUFJLENBQUMsR0FBaUIsSUFBSSxZQUFZLENBQ2xDO2dCQUNJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7YUFDckIsQ0FDSixDQUFDO1lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGtDQUFTLEdBQWhCLFVBQWlCLEVBQWdCO1lBRTdCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQzFCO2dCQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxpQ0FBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxrQ0FBUyxHQUFoQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGtDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsR0FBVztZQUV6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsR0FBVztZQUV6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUNBQWdCLEdBQXZCLFVBQXdCLEdBQVc7WUFFL0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBVztZQUUvQixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksMENBQWlCLEdBQXhCLFVBQXlCLENBQVMsRUFBRSxDQUFTO1lBRXpDLElBQUksR0FBRyxHQUFpQixJQUFJLFlBQVksQ0FDcEM7Z0JBQ0ksR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRztnQkFDM0IsR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRztnQkFDM0IsR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRztnQkFDM0IsQ0FBQyxFQUFPLENBQUMsRUFBTyxHQUFHLEVBQUssR0FBRzthQUM5QixDQUNKLENBQUM7WUFFRixjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNJLGtDQUFTLEdBQWhCLFVBQWlCLENBQVMsRUFBRSxDQUFTO1lBRWpDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsQ0FBUztZQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLG1DQUFVLEdBQWpCLFVBQWtCLENBQVM7WUFFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUdEOzs7OztXQUtHO1FBQ0ksc0NBQWEsR0FBcEIsVUFBcUIsQ0FBUyxFQUFFLENBQVE7WUFFcEMsSUFBSSxHQUFHLEdBQWlCLElBQUksWUFBWSxDQUNwQztnQkFDSSxDQUFDLEVBQU8sR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssQ0FBQyxFQUFPLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2FBQzlCLENBQ0osQ0FBQztZQUVGLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDhCQUFLLEdBQVosVUFBYSxDQUFTLEVBQUUsQ0FBUztZQUU3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHlDQUFnQixHQUF2QixVQUF3QixDQUFpQjtZQUVyQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSw4QkFBSyxHQUFaO1lBRUksSUFBSSxXQUFXLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7WUFFdkQsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMvQztnQkFDSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEM7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBR0wscUJBQUM7SUFBRCxDQUFDO0lBdFJZLG9DQUFjLGlCQXNSMUI7QUFDTCxDQUFDLEVBOVJnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBOFJyQzs7Ozs7Ozs7Ozs7OztBQ3JTRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUgseURBQXlEO0FBQzJCO0FBRUY7QUFDbkI7QUFDTTtBQUNyQjtBQUNoRCxJQUFPLGVBQWUsR0FBRyw0RUFBZSxDQUFDLGVBQWUsQ0FBQztBQUN6RCxJQUFPLGVBQWUsR0FBRywrRUFBYyxDQUFDLGVBQWUsQ0FBQztBQUN4RCxJQUFPLFNBQVMsR0FBRyxxRUFBUyxDQUFDLFNBQVMsQ0FBQztBQUN2QyxJQUFPLE1BQU0sR0FBRyxrRUFBTSxDQUFDLE1BQU0sQ0FBQztBQUd2QixJQUFVLHFCQUFxQixDQWl4QnJDO0FBanhCRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBdXRCSTs7O1dBR0c7UUFDSCxxQkFBbUIsS0FBNkI7WUFFNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksU0FBUyxFQUFVLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFNBQVMsRUFBa0IsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksU0FBUyxFQUFrQixDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQWtCLENBQUM7WUFFaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sRUFBMEIsQ0FBQztZQUM1RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxNQUFNLEVBQTBCLENBQUM7WUFDakUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksTUFBTSxFQUFrQixDQUFDO1lBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLE1BQU0sRUFBa0IsQ0FBQztRQUMvRCxDQUFDO1FBenVCRDs7V0FFRztRQUNJLDRCQUFNLEdBQWI7WUFFSSxlQUFlO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFFRDs7V0FFRztRQUNJLG9DQUFjLEdBQXJCO1lBRUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFDdkI7Z0JBQ0ksT0FBTyxHQUFHLENBQUM7YUFDZDtZQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNyRixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQ0FBZSxHQUF0QjtZQUVJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQ3ZCO2dCQUNJLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDdEYsQ0FBQztRQUVEOztXQUVHO1FBQ0ksb0NBQWMsR0FBckI7WUFFSSxJQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDNUQsSUFBTSxtQkFBbUIsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFcEUsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFDL0M7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsbUJBQW1CLEVBQzNCO29CQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxRDtxQkFFRDtvQkFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1RDthQUNKO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksOEJBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGtDQUFZLEdBQW5CLFVBQW9CLE1BQXNCO1lBRXRDLElBQUksU0FBaUIsQ0FBQztZQUN0QixJQUFNLFNBQVMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFbEQsS0FBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQ3JEO2dCQUNJLElBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUN4QztvQkFDSSxPQUFPLFNBQVMsQ0FBQztpQkFDcEI7YUFDSjtZQUVELGlEQUFpRDtZQUNqRCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUN2QztnQkFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsOEJBQThCO1lBQzlCLFNBQVMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVqRCxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksa0NBQVksR0FBbkI7WUFFSSxJQUFNLFNBQVMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbEQsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwyQ0FBcUIsR0FBNUIsVUFBNkIsU0FBaUIsRUFBRSxPQUFlO1lBRTNELElBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFDakQ7Z0JBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELE9BQU87YUFDVjtZQUVELGVBQWU7WUFDZixxRUFBVSxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksd0NBQWtCLEdBQXpCLFVBQTBCLE1BQXNCLEVBQUUsT0FBZTtZQUU3RCwwREFBMEQ7WUFDMUQsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVoRCxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQ1o7Z0JBQ0ksT0FBTyxDQUFDLGVBQWU7YUFDMUI7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMkNBQXFCLEdBQTVCLFVBQTZCLFNBQWlCO1lBRTFDLElBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFDakQ7Z0JBQ0ksd0NBQXdDO2dCQUN4QyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUQ7WUFFRCxlQUFlO1lBQ2YscUVBQVUsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUU5RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx3Q0FBa0IsR0FBekIsVUFBMEIsTUFBc0I7WUFFNUMsMERBQTBEO1lBQzFELElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEQsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUNaO2dCQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUcsZUFBZTthQUM5QjtZQUVELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksdUNBQWlCLEdBQXhCLFVBQXlCLFdBQTJCO1lBRWhELElBQUksY0FBc0IsQ0FBQztZQUMzQixJQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFckQsS0FBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQ2xFO2dCQUNJLElBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUN2RDtvQkFDSSxTQUFTO2lCQUNaO2dCQUVELE9BQU8sY0FBYyxDQUFDO2FBQ3pCO1lBRUQsK0NBQStDO1lBQy9DLElBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFDakQ7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsK0JBQStCO1lBQy9CLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRXBGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFeEQsT0FBTyxjQUFjLENBQUM7UUFDMUIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHVDQUFpQixHQUF4QjtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksOENBQXdCLEdBQS9CLFVBQWdDLGNBQXNCO1lBRWxELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksOENBQXdCLEdBQS9CLFVBQWdDLGNBQXNCO1lBRWxELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksOENBQXdCLEdBQS9CLFVBQWdDLGNBQXNCO1lBRWxELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksOENBQXdCLEdBQS9CLFVBQWdDLGNBQXNCO1lBRWxELElBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFDeEQ7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsZUFBZTtZQUNmLHFFQUFVLENBQUMsQ0FBQyxJQUFJLGNBQWMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUU3RSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDJDQUFxQixHQUE1QixVQUE2QixXQUEyQjtZQUVwRCwrREFBK0Q7WUFDL0QsSUFBTSxjQUFjLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDhDQUF3QixHQUEvQixVQUFnQyxjQUFzQixFQUFFLEtBQWEsRUFBRSxNQUFvQjtZQUFwQixxQ0FBb0I7WUFFdkYsSUFBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUN4RDtnQkFDSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUNsQyxjQUFjLEVBQ2QsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO29CQUNULENBQUMsQ0FBQyxLQUFLO29CQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FDbkcsQ0FBQztnQkFFRixPQUFPO2FBQ1Y7WUFFRCxlQUFlO1lBQ2YscUVBQVUsQ0FBQyxDQUFDLElBQUksY0FBYyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssRUFDL0Q7Z0JBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssRUFDL0Q7Z0JBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoRTtZQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2hLLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJDQUFxQixHQUE1QixVQUE2QixXQUEyQixFQUFFLEtBQWEsRUFBRSxNQUFvQjtZQUFwQixxQ0FBb0I7WUFFekYsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDhDQUF3QixHQUEvQixVQUFnQyxjQUFzQixFQUFFLEtBQWEsRUFBRSxNQUFvQjtZQUFwQixxQ0FBb0I7WUFFdkYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEgsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMkNBQXFCLEdBQTVCLFVBQTZCLFdBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQW9CO1lBQXBCLHFDQUFvQjtZQUU5RSxJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksZ0RBQTBCLEdBQWpDLFVBQWtDLFdBQTJCLEVBQUUsS0FBYSxFQUFFLE1BQW9CO1lBQXBCLHFDQUFvQjtZQUU5RixJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksbURBQTZCLEdBQXBDLFVBQXFDLGNBQXNCLEVBQUUsS0FBYSxFQUFFLE1BQW9CO1lBQXBCLHFDQUFvQjtZQUU1RixJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwSSxDQUFDO1FBR0Q7Ozs7V0FJRztRQUNJLHNDQUFnQixHQUF2QixVQUF3QixVQUEwQjtZQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFFbEQsS0FBSSxJQUFJLGFBQWEsR0FBVyxDQUFDLEVBQUUsYUFBYSxHQUFHLGFBQWEsRUFBRSxFQUFFLGFBQWEsRUFDakY7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLEVBQ3BEO29CQUNJLE9BQU8sYUFBYSxDQUFDO2lCQUN4QjthQUNKO1lBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBZ0IsR0FBdkI7WUFFSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDbEQsT0FBTyxhQUFhLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxtQ0FBYSxHQUFwQixVQUFxQixhQUFxQjtZQUV0QyxJQUFNLFlBQVksR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekQsT0FBTyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBdUIsR0FBOUI7WUFFSSxJQUFNLFlBQVksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDcEUsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwrQ0FBeUIsR0FBaEMsVUFBaUMsYUFBcUI7WUFFbEQsSUFBTSxjQUFjLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQ3hFLE9BQU8sY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLG9FQUE4QyxHQUFyRCxVQUFzRCxhQUFxQjtZQUV2RSxJQUFNLFlBQVksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDcEUsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxpREFBMkIsR0FBbEMsVUFBbUMsYUFBcUI7WUFFcEQsSUFBTSxXQUFXLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQ2xFLE9BQU8sV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksNENBQXNCLEdBQTdCLFVBQThCLGFBQXFCO1lBRS9DLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUN4RCxPQUFPLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHlDQUFtQixHQUExQixVQUEyQixhQUFxQjtZQUU1QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDhDQUF3QixHQUEvQixVQUFnQyxhQUFxQjtZQUVqRCxJQUFNLFlBQVksR0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xFLE9BQU8sWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksZ0RBQTBCLEdBQWpDLFVBQWtDLGFBQXFCO1lBRW5ELElBQU0sYUFBYSxHQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7WUFDNUUsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwwQ0FBb0IsR0FBM0IsVUFBNEIsYUFBcUI7WUFFN0MsSUFBTSxRQUFRLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNqRSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHdDQUFrQixHQUF6QixVQUEwQixhQUFxQjtZQUUzQyxJQUFNLFNBQVMsR0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ2hFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksd0NBQWtCLEdBQXpCLFVBQTBCLGFBQXFCO1lBRTNDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUUxRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMENBQW9CLEdBQTNCLFVBQTRCLGFBQXFCO1lBRTdDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUUxRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDLENBQUMsZUFBZSxDQUFDLHdCQUF3QjtnQkFDMUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNsRixDQUFDLENBQUMsZUFBZSxDQUFDLDhCQUE4QjtvQkFDaEQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQWdCLEdBQXZCO1lBRUksSUFBTSxLQUFLLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN4RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksMkNBQXFCLEdBQTVCO1lBRUksSUFBTSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ2hFLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLG9DQUFjLEdBQXJCO1lBRUksS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFDM0Q7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMzQztvQkFDSSxTQUFTO2lCQUNaO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0kscURBQStCLEdBQXRDLFVBQXVDLGFBQXFCO1lBRXhELElBQU0sWUFBWSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNwRSxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0ksK0RBQXlDLEdBQWhELFVBQWlELGFBQXFCO1lBRWxFLElBQU0sWUFBWSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNwRSxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDSSw0REFBc0MsR0FBN0MsVUFBOEMsYUFBcUI7WUFFL0QsSUFBTSxZQUFZLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3BFLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLGdFQUEwQyxHQUFqRCxVQUFrRCxhQUFxQjtZQUVuRSxJQUFNLFlBQVksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDcEUsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUVEOztXQUVHO1FBQ0ksb0NBQWMsR0FBckI7WUFFSSxJQUFJLGNBQWMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDMUQsSUFBTSxtQkFBbUIsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFcEUsSUFBRyxjQUFjLEdBQUcsbUJBQW1CLEVBQ3ZDO2dCQUNJLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQzthQUN4QztZQUVELEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQzlDO2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksZ0NBQVUsR0FBakI7WUFFSSxxRUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUVwRTtnQkFDSSxJQUFNLFlBQVksR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELElBQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFFNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25ELEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQzlDO29CQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEY7YUFDSjtZQUVEO2dCQUNJLElBQU0sT0FBTyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDaEQsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUVsRCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekMsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFDekM7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1RTthQUNKO1lBRUQ7Z0JBQ0ksSUFBTSxXQUFXLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUN4RCxJQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBRTFELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUM3QztvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BGO2FBQ0o7UUFDTCxDQUFDO1FBd0JEOztXQUVHO1FBQ0ksNkJBQU8sR0FBZDtZQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQXFCTCxrQkFBQztJQUFELENBQUM7SUF6d0JZLGlDQUFXLGNBeXdCdkI7QUFDTCxDQUFDLEVBanhCZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWl4QnJDOzs7Ozs7Ozs7Ozs7O0FDcnlCRDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUU0RTtBQUcvRSxJQUFPLGNBQWMsR0FBRywwRUFBYyxDQUFDLGNBQWMsQ0FBQztBQUUvQyxJQUFVLHFCQUFxQixDQWlSckM7QUFqUkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQTRMSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztZQUU1QyxXQUFXO1lBQ1gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQXhNRDs7OztXQUlHO1FBQ1cscUJBQU0sR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDVyxxQkFBTSxHQUFwQixVQUFxQixRQUF3QjtZQUV6QyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsS0FBa0I7WUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksa0NBQVMsR0FBaEI7WUFFSSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFFbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0kscUNBQVksR0FBbkIsVUFBb0IsUUFBd0I7WUFFeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHFDQUFZLEdBQW5CO1lBRUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksc0NBQWEsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtZQUV4RSxJQUFHLEdBQUcsR0FBRyxHQUFHLEVBQ1o7Z0JBQ0ksR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNiO2lCQUNJLElBQUcsR0FBRyxHQUFHLEdBQUcsRUFDakI7Z0JBQ0ksR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNiO1lBRUQsSUFBRyxLQUFLLEdBQUcsR0FBRyxFQUNkO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtpQkFDSSxJQUFHLEtBQUssR0FBRyxHQUFHLEVBQ25CO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtZQUVELElBQUcsSUFBSSxHQUFHLEdBQUcsRUFDYjtnQkFDSSxJQUFJLEdBQUcsR0FBRyxDQUFDO2FBQ2Q7aUJBQ0ksSUFBRyxJQUFJLEdBQUcsR0FBRyxFQUNsQjtnQkFDSSxJQUFJLEdBQUcsR0FBRyxDQUFDO2FBQ2Q7WUFFRCxJQUFHLEtBQUssR0FBRyxHQUFHLEVBQ2Q7Z0JBQ0ksS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNmO2lCQUNJLElBQUcsS0FBSyxHQUFHLEdBQUcsRUFDbkI7Z0JBQ0ksS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNmO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHNDQUFhLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVEOzs7V0FHRztRQUNJLGdEQUF1QixHQUE5QixVQUErQixNQUFlO1lBRTFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUM7UUFDeEMsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2Q0FBb0IsR0FBM0I7WUFFSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0kscUNBQVksR0FBbkIsVUFBb0IsT0FBZ0I7WUFFaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxrQ0FBUyxHQUFoQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHNDQUFhLEdBQXBCLFVBQXFCLENBQVM7WUFFMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHNDQUFhLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxpQ0FBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFrREwscUJBQUM7SUFBRCxDQUFDO0lBNU9xQixvQ0FBYyxpQkE0T25DO0lBRUQsSUFBWSxlQUtYO0lBTEQsV0FBWSxlQUFlO1FBRXZCLHlGQUEwQjtRQUMxQiw2RkFBNEI7UUFDNUIseUdBQWtDO0lBQ3RDLENBQUMsRUFMVyxlQUFlLEdBQWYscUNBQWUsS0FBZixxQ0FBZSxRQUsxQjtJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNIO1FBRUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUM7UUFNTCx5QkFBQztJQUFELENBQUM7SUFqQlksd0NBQWtCLHFCQWlCOUI7QUFDTCxDQUFDLEVBalJnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBaVJyQzs7Ozs7Ozs7Ozs7OztBQzdSRDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVtRDtBQUUvQyxJQUFVLHFCQUFxQixDQTRWckM7QUE1VkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7T0FHRztJQUNIO1FBRUk7Ozs7V0FJRztRQUNILGlCQUFtQixHQUFXLEVBQUUsS0FBYTtZQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUVWLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO2dCQUM5QixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hCLENBQUM7UUFJTCxjQUFDO0lBQUQsQ0FBQztJQXBCWSw2QkFBTyxVQW9CbkI7SUFFRDs7T0FFRztJQUNIO1FBRUk7OztXQUdHO1FBQ0gsZ0JBQW1CLElBQWE7WUFFNUIsSUFBRyxJQUFJLElBQUksU0FBUyxFQUNwQjtnQkFDSSxJQUFHLElBQUksR0FBRyxDQUFDLEVBQ1g7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2xCO3FCQUVEO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNKO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0JBQU8sR0FBZDtZQUVJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksMEJBQVMsR0FBaEIsVUFBaUIsR0FBVTtZQUV2QixxQkFBcUI7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDM0QsNEJBQTRCO1lBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSx5QkFBUSxHQUFmLFVBQWdCLEdBQVU7WUFFdEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFZixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDMUM7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQ2xDO29CQUNJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1YsTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBRyxLQUFLLElBQUksQ0FBQyxFQUNiO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDeEM7aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNqRDtRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ0kseUJBQVEsR0FBZixVQUFnQixHQUFVLEVBQUUsS0FBWTtZQUVwQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVmLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFDbEM7b0JBQ0ksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDVixNQUFNO2lCQUNUO2FBQ0o7WUFFRCxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQ2I7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3pDO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO2dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNsRDtRQUNMLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHdCQUFPLEdBQWQsVUFBZSxHQUFVO1lBRXJCLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFDbEM7b0JBQ0ksT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFLLEdBQVo7WUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUU5QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHdCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxnQ0FBZSxHQUF0QixVQUF1QixPQUFlLEVBQUUsU0FBa0I7WUFFdEQsSUFBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQ25DO2dCQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUM5QjtvQkFDSSxJQUFHLENBQUMsU0FBUyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVzt3QkFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2lCQUNwQztxQkFFRDtvQkFDSSxJQUFHLENBQUMsU0FBUyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFDcEM7YUFDSjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFLLEdBQVo7WUFFSSxJQUFJLEdBQUcsR0FBMkIsSUFBSSxRQUFRLENBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOztXQUVHO1FBQ0ksb0JBQUcsR0FBVjtZQUVJLElBQUksR0FBRyxHQUEyQixJQUFJLFFBQVEsQ0FBZSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNyRixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksc0JBQUssR0FBWixVQUFhLEdBQTJCO1lBRXBDLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUNuQztnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVE7YUFDdkI7WUFFRCxLQUFLO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUViLElBQUksSUFBSSxHQUEyQixJQUFJLFFBQVEsQ0FBZSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2pGLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDBCQUFTLEdBQWhCO1lBRUksS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ2xDO2dCQUNJLHlFQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMseUVBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtRQUNMLENBQUM7UUFFc0Isa0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7UUFJakUsYUFBQztLQUFBO0lBbE9ZLDRCQUFNLFNBa09sQjtJQUdEOztPQUVHO0lBQ0g7UUFFSTs7V0FFRztRQUNILGtCQUFZLENBQXdCLEVBQUUsR0FBWTtZQUU5QyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFnQixDQUFDO1lBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUM1QixDQUFDLENBQUMsR0FBRztnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUcsR0FBVixVQUFXLEdBQTJCO1lBRWxDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVksR0FBbkI7WUFFSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQjtZQUVJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFTLEdBQWhCO1lBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQWUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFFLFNBQVM7WUFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBUyxHQUFoQjtZQUVJLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFlLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMxRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFHLEdBQVY7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBUSxHQUFmLFVBQWdCLEdBQTJCO1lBRXZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFJTCxlQUFDO0lBQUQsQ0FBQztJQXBGWSw4QkFBUSxXQW9GcEI7QUFDTCxDQUFDLEVBNVZnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNFZyQzs7Ozs7Ozs7Ozs7OztBQ3JXRDtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQTZHckM7QUE3R0QsV0FBaUIscUJBQXFCO0lBRWxDOztPQUVHO0lBQ0g7UUE4Rkk7O1dBRUc7UUFDSCxtQkFBbUIsQ0FBUztZQUV4QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUM7UUFsR0Q7Ozs7O1dBS0c7UUFDSSwwQkFBTSxHQUFiLFVBQWMsQ0FBUyxFQUFFLE1BQWU7WUFFcEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFUixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSw2QkFBUyxHQUFoQixVQUFpQixNQUFjLEVBQUUsQ0FBUztZQUV0QyxJQUFJLEdBQUcsR0FBYyxJQUFJLENBQUM7WUFFMUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDOUI7Z0JBQ0ksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQVEsR0FBZjtZQUVJLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ25FLENBQUM7UUFFRDs7V0FFRztRQUNJLDZCQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwwQkFBTSxHQUFiLFVBQWMsQ0FBWTtZQUV0QixPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwyQkFBTyxHQUFkLFVBQWUsQ0FBWTtZQUV2QixPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwyQkFBTyxHQUFkLFVBQWUsQ0FBUztZQUVwQixPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFXTCxnQkFBQztJQUFELENBQUM7SUF2R1ksK0JBQVMsWUF1R3JCO0FBQ0wsQ0FBQyxFQTdHZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTZHckM7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUksSUFBVSxxQkFBcUIsQ0FpWXJDO0FBallELFdBQWlCLHFCQUFxQjtJQUVsQzs7T0FFRztJQUNIO1FBRUk7Ozs7V0FJRztRQUNILG1CQUFZLGVBQTJCO1lBQTNCLHFEQUEyQjtZQUVuQyxJQUFHLGVBQWUsR0FBRyxDQUFDLEVBQ3RCO2dCQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsQjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFFLEdBQVQsVUFBVSxLQUFhO1lBRW5CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHVCQUFHLEdBQVYsVUFBVyxLQUFhLEVBQUUsS0FBUTtZQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBRyxHQUFWLFVBQVcsTUFBa0I7WUFBbEIsbUNBQWtCO1lBRXpCLElBQUksR0FBRyxHQUFRLElBQUksS0FBSyxFQUFLLENBQUM7WUFDOUIsS0FBSSxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO2dCQUNJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksNEJBQVEsR0FBZixVQUFnQixLQUFRO1lBRXBCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUMvQjtnQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVGO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQUssR0FBWjtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxPQUFlLEVBQUUsS0FBUTtZQUVuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUcsT0FBTyxHQUFHLE9BQU8sRUFDcEI7Z0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFFLGFBQWE7YUFDaEQ7WUFFRCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QztnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7V0FFRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxPQUFlLEVBQUUsS0FBZTtZQUFmLG9DQUFlO1lBRTFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSw4QkFBVSxHQUFqQixVQUFrQixPQUFlLEVBQUUsS0FBaUIsRUFBRSxnQkFBZ0M7WUFBbkQsb0NBQWlCO1lBQUUsMERBQWdDO1lBRWxGLElBQUksT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFakMsSUFBRyxPQUFPLEdBQUcsT0FBTyxFQUNwQjtnQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsYUFBYTtnQkFFN0MsSUFBRyxnQkFBZ0IsRUFDbkI7b0JBQ0ksS0FBSSxJQUFJLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ2hEO3dCQUNJLElBQUcsT0FBTyxLQUFLLElBQUksVUFBVSxFQUFHLE1BQU07eUJBQ3RDOzRCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUMxRDs2QkFDSSxnQkFBZ0I7eUJBQ3JCOzRCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO3lCQUN4QjtxQkFDSjtpQkFDSjtxQkFFRDtvQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDaEQ7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ3hCO2lCQUNKO2FBQ0o7aUJBRUQ7Z0JBQ0ksd0JBQXdCO2dCQUN4QixLQUFLO2dCQUNMLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFJLFlBQVk7YUFDM0Q7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwwQkFBTSxHQUFiLFVBQWMsUUFBcUIsRUFBRSxLQUFrQixFQUFFLEdBQWdCO1lBRXJFLElBQUksS0FBSyxHQUFXLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxLQUFLLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBRS9CLElBQUksUUFBUSxHQUFXLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLHVCQUF1QjtZQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFHLE9BQU8sR0FBRyxDQUFDLEVBQ2Q7Z0JBQ0ksS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDdkM7b0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0o7WUFFRCxLQUFJLElBQUksQ0FBQyxHQUFXLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUNsRDtnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwwQkFBTSxHQUFiLFVBQWMsS0FBYTtZQUV2QixJQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQ25DO2dCQUNJLE9BQU8sS0FBSyxDQUFDLENBQUcsUUFBUTthQUMzQjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFYixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0kseUJBQUssR0FBWixVQUFhLEdBQWdCO1lBRXpCLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUNuQztnQkFDSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVE7YUFDdkI7WUFFRCxLQUFLO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUViLElBQUksSUFBSSxHQUFnQixJQUFJLFFBQVEsQ0FBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRyxLQUFLO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxtQ0FBZSxHQUF0QixVQUF1QixPQUFlO1lBRWxDLElBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQzNCO2dCQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQ3RCO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2lCQUM1QjtxQkFFRDtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2lCQUM1QjthQUNKO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQUssR0FBWjtZQUVJLElBQUksR0FBRyxHQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixDQUFDLENBQUMsSUFBSSxRQUFRLENBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQUcsR0FBVjtZQUVJLElBQUksR0FBRyxHQUFnQixJQUFJLFFBQVEsQ0FBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVNLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWM7WUFFM0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUssQ0FBQztZQUNuQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTlDLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFNZSx1QkFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQjtRQUMzRCxnQkFBQztLQUFBO0lBaFNZLCtCQUFTLFlBZ1NyQjtJQUVEO1FBRUk7O1dBRUc7UUFDSCxrQkFBbUIsQ0FBZ0IsRUFBRSxLQUFjO1lBRS9DLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFHLEdBQVYsVUFBVyxHQUFnQjtZQUV2QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CO1lBRUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVksR0FBbkI7WUFFSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBUyxHQUFoQjtZQUVJLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBUyxHQUFoQjtZQUVJLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBRSxTQUFTO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUcsR0FBVjtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CLFVBQW9CLEdBQWdCO1lBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQVEsR0FBZixVQUFnQixHQUFnQjtZQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBSUwsZUFBQztJQUFELENBQUM7SUF6RlksOEJBQVEsV0F5RnBCO0FBQ0wsQ0FBQyxFQWpZZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlZckM7Ozs7Ozs7Ozs7Ozs7QUN4WUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFeUY7QUFDdUU7QUFHNUosSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFlLEVBQUUsR0FBVyxFQUFFLElBQVc7SUFFcEUscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRU0sSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQWUsRUFBRSxHQUFXLEVBQUUsSUFBVztJQUV0RSxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVNLElBQUksVUFBVSxHQUFHLFVBQUMsSUFBUztJQUU5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQztBQUdLLElBQUksZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO0lBQUUsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZiw2QkFBZTs7QUFBTSxDQUFDLENBQUM7QUFDNUQsSUFBSSxjQUFjLEdBQUcsVUFBQyxHQUFXO0lBQUUsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZiw2QkFBZTs7QUFBTSxDQUFDLENBQUM7QUFDMUQsSUFBSSxhQUFhLEdBQUcsVUFBQyxHQUFXO0lBQUUsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZiw2QkFBZTs7QUFBTSxDQUFDLENBQUM7QUFDekQsSUFBSSxnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7SUFBRSxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDZCQUFlOztBQUFNLENBQUMsQ0FBQztBQUM1RCxJQUFJLGNBQWMsR0FBRyxVQUFDLEdBQVc7SUFBRSxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDZCQUFlOztBQUFNLENBQUMsQ0FBQztBQUVqRSxJQUFHLG9FQUFhLElBQUksNEVBQXFCLEVBQ3pDO0lBQ0ksZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFNUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztJQUVGLGFBQWEsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUV6QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQztJQUVGLGdCQUFnQixHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTVDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7SUFFRixjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7Q0FDTDtLQUNJLElBQUcsb0VBQWEsSUFBSSwwRUFBbUIsRUFDNUM7SUFDSSxjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFRixhQUFhLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFekMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUM7SUFFRixnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUU1QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0lBRUYsY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0w7S0FDSSxJQUFHLG9FQUFhLElBQUkseUVBQWtCLEVBQzNDO0lBQ0ksYUFBYSxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRXpDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFNUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztDQUNMO0tBQ0ksSUFBRyxvRUFBYSxJQUFJLDRFQUFxQixFQUM5QztJQUNJLGdCQUFnQixHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTVDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7SUFFRixjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7Q0FDTDtLQUNJLElBQUcsb0VBQWEsSUFBSSwwRUFBbUIsRUFDNUM7SUFDSSxjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7Q0FDTDtBQUVELDRDQUE0QztBQUNyQyxJQUFVLHFCQUFxQixDQXFFckM7QUFyRUQsV0FBaUIscUJBQXFCO0lBR2xDOzs7T0FHRztJQUNIO1FBc0RJOztXQUVHO1FBQ0g7UUFHQSxDQUFDO1FBMUREOzs7Ozs7O1dBT0c7UUFDVyxpQkFBSyxHQUFuQixVQUFvQixRQUFrQixFQUFFLE1BQWMsRUFBRSxJQUFZO1lBRWhFLG1DQUFtQztZQUNuQyxJQUFHLFFBQVEsR0FBRyw0RUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFDL0Q7Z0JBQ0ksT0FBTzthQUNWO1lBRUQsSUFBTSxRQUFRLEdBQW9DLDRFQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQztZQUVsRyxJQUFJLENBQUMsUUFBUTtnQkFDVCxPQUFPO1lBRVgsSUFBSSxNQUFNLEdBQ04sTUFBTSxDQUFDLE9BQU8sQ0FDVixZQUFZLEVBQ1osVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFFRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQ0osQ0FBQztZQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNXLHFCQUFTLEdBQXZCLFVBQXdCLFFBQWtCLEVBQUUsSUFBZ0IsRUFBRSxNQUFjO1lBRXhFLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO2dCQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFTTCxrQkFBQztJQUFELENBQUM7SUE3RFksaUNBQVcsY0E2RHZCO0FBQ0wsQ0FBQyxFQXJFZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQXFFckM7QUFFRCw0Q0FBNEM7Ozs7Ozs7Ozs7Ozs7QUMvTDVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7Ozs7Ozs7Ozs7Ozs7O0FBRWtFO0FBQ047QUFDTTtBQUN6QjtBQUNJO0FBQ2hELElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRXZDLElBQU8sTUFBTSxHQUFHLGtFQUFNLENBQUMsTUFBTSxDQUFDO0FBRTlCLElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRWhDLElBQVUscUJBQXFCLENBNnpDckM7QUE3ekNELFdBQWlCLHFCQUFxQjtJQUVsQywyQ0FBMkM7SUFDM0MsSUFBTSw0QkFBNEIsR0FBVyxzQkFBc0IsQ0FBQztJQUNwRSxJQUFNLDhCQUE4QixHQUFXLDRCQUE0QixDQUFDO0lBRzVFOztPQUVHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1FBR0EsQ0FBQztRQU9EOztXQUVHO1FBQ0ksNEJBQVksR0FBbkIsVUFBb0IsWUFBcUIsRUFBRSxNQUFlO1lBRXRELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVEOztXQUVHO1FBQ0kscUJBQUssR0FBWixVQUFhLFlBQXdCO1lBQXhCLCtDQUF3QjtZQUVqQyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBTyxHQUFkLFVBQWUsWUFBd0I7WUFBeEIsK0NBQXdCO1lBRW5DLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFTLEdBQWhCLFVBQWlCLFlBQTZCO1lBQTdCLG1EQUE2QjtZQUUxQyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBTyxHQUFkO1lBRUksT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3QkFBUSxHQUFmLFVBQWdCLFlBQTRCO1lBQTVCLGtEQUE0QjtZQUV4QyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBUyxHQUFoQixVQUFpQixZQUErQjtZQUU1QyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBTSxHQUFiLFVBQWMsWUFBb0M7WUFFOUMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQWUsR0FBdEIsVUFBdUIsS0FBYTtZQUVoQyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxnQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBcUI7WUFFekMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx1QkFBTyxHQUFkO1lBRUksT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzdCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFPLEdBQWQ7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBTSxHQUFiO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQU0sR0FBYjtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFPLEdBQWQ7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3QkFBUSxHQUFmO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQU8sR0FBZDtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHFCQUFLLEdBQVo7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBU00sc0JBQU0sR0FBYixVQUFjLEtBQVU7WUFFcEIsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0JBQVEsR0FBZjtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHdDQUF3QixHQUEvQixVQUFnQyxRQUFnQjtZQUU1QyxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQztRQUVEOztXQUVHO1FBQ1csc0NBQWdDLEdBQTlDO1lBRUksV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhELFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUVyQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksU0FBUyxFQUFVLENBQUM7UUFDaEQsQ0FBQztRQUVEOztXQUVHO1FBQ1csbUNBQTZCLEdBQTNDO1lBRUksV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0IsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDNUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFekIsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0IsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDNUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQztRQVFMLFlBQUM7SUFBRCxDQUFDO0lBbk9xQiwyQkFBSyxRQW1PMUI7SUFFRDs7Ozs7Ozs7T0FRRztJQUNIO1FBRUk7O1dBRUc7UUFDSCxvQkFBbUIsTUFBb0IsRUFBRSxNQUFlO1lBRXBELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRWxCLElBQUcsTUFBTSxJQUFJLFNBQVMsRUFDdEI7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbkM7UUFDTCxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ1csaUJBQU0sR0FBcEIsVUFBcUIsTUFBbUIsRUFBRSxJQUFZO1lBRWxELElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFDNUIsSUFBTSxTQUFTLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFekQsSUFBRyxDQUFDLFNBQVMsRUFDYjtnQkFDSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQzthQUNmO2lCQUVEO2dCQUNJLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNXLGlCQUFNLEdBQXBCLFVBQXFCLFFBQW9CO1lBRXJDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSx3Q0FBbUIsR0FBMUIsVUFBMkIsTUFBbUI7WUFFMUMsSUFBSSxVQUFVLEdBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO1lBRXJCLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLEdBQUcsR0FBVyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQ3BFO2dCQUNJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsR0FBRyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOztXQUVHO1FBQ0ssd0JBQUcsR0FBWCxVQUFZLENBQVM7WUFFakIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNULENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDO1FBQUEsQ0FBQztRQUVGOzs7Ozs7V0FNRztRQUNJLCtCQUFVLEdBQWpCLFVBQWtCLE1BQW1CLEVBQUUsSUFBWTtZQUUvQyxJQUFJLE1BQU0sR0FBYSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDbkQsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU1RCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7Z0JBQ0ksSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDO2dCQUMxQixNQUFNLEdBQUcsMkJBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEMsa0VBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLEtBQUssQ0FBQzthQUNoQjtpQkFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUMxQjtnQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtnQkFDOUYsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxrQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxtQ0FBYyxHQUFyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVEOzs7Ozs7Ozs7V0FTRztRQUNPLCtCQUFVLEdBQXBCLFVBQXFCLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQW1CO1lBRW5GLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUssT0FBTyxJQUFJLENBQUM7WUFFaEMsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFXLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQVMsQ0FBQztZQUVkLE9BQU8sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDdEI7Z0JBQ0ksSUFBSSxDQUFDLEdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixRQUFPLENBQUMsRUFDUjtvQkFDQSxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLEdBQUc7d0JBQ0o7NEJBQ0ksSUFBSSxXQUFXLEdBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZOzRCQUN0RCxDQUFDLEdBQUcscUVBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUN6QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDOUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDM0I7b0JBQ0wsS0FBSyxJQUFJO3dCQUNMLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQzNGLEtBQUssR0FBRzt3QkFDSixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3RELE9BQU8sQ0FBQyxDQUFDO29CQUNiLEtBQUssR0FBRzt3QkFDSixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3ZELE9BQU8sQ0FBQyxDQUFDO29CQUNiLEtBQUssR0FBRyxFQUFFLFlBQVk7d0JBQ2xCLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQ2pCOzRCQUNJLENBQUMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUksYUFBYTs0QkFDekMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUVEOzRCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO3lCQUM5Qjt3QkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDYixLQUFLLEdBQUcsRUFBRSxZQUFZO3dCQUNsQixJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUNqQjs0QkFDSSxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQzs0QkFDMUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUVEOzRCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO3lCQUM5Qjt3QkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDYixLQUFLLEdBQUcsRUFBRSxhQUFhO3dCQUNuQixJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUNqQjs0QkFDSSxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQzs0QkFDM0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUVEOzRCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7eUJBQ3hDO3dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNiLEtBQUssR0FBRyxFQUFFLGtCQUFrQjt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQzt3QkFDckMsT0FBTyxJQUFJLENBQUM7b0JBQ2hCLEtBQUssR0FBRyxFQUFFLG9DQUFvQzt3QkFDMUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLFdBQVc7d0JBQzlCLE9BQU8sSUFBSSxDQUFDO29CQUNoQixLQUFLLElBQUk7d0JBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixLQUFLLEdBQUcsQ0FBQztvQkFDVCxLQUFLLElBQUksQ0FBQztvQkFDVixLQUFLLElBQUksQ0FBQztvQkFDVixTQUFTLE9BQU87d0JBQ1osTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDTyxnQ0FBVyxHQUFyQixVQUFzQixNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxTQUFtQjtZQUVwRixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBRTdCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNkLElBQUksQ0FBUyxFQUFFLEVBQVUsQ0FBQztZQUMxQixJQUFJLEdBQUcsR0FBYyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxJQUFJLFFBQVEsR0FBVyxLQUFLLENBQUMsQ0FBQyx1QkFBdUI7WUFFckQsT0FBTyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN0QjtnQkFDSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVkLFFBQU8sQ0FBQyxFQUNSO29CQUNBLEtBQUssSUFBSSxFQUFFLCtCQUErQjt3QkFDdEM7NEJBQ0ksU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRSxTQUFTOzRCQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7NEJBQ2xFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDaEI7b0JBQ0wsS0FBSyxJQUFJLEVBQUcsV0FBVzt3QkFDbkI7NEJBQ0ksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhOzRCQUVsQixJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUNuQjtnQ0FDSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7NkJBQ3JFOzRCQUNELFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9COzRCQUV0QyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQ2Q7Z0NBQ0ksRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FFZixRQUFPLEVBQUUsRUFDVDtvQ0FDQSxLQUFLLElBQUk7d0NBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxJQUFJO3dDQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3Q0FDdEIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixJQUFJLENBQUMsTUFBTSxHQUFHLDJDQUEyQyxDQUFDO3dDQUMxRCxNQUFNO29DQUNWO3dDQUNJLE1BQU07aUNBQ1Q7NkJBQ0o7aUNBRUQ7Z0NBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRywyQkFBMkIsQ0FBQzs2QkFDN0M7eUJBQ0o7b0JBQ0w7d0JBQ0k7NEJBQ0ksTUFBTTt5QkFDVDtpQkFDSjthQUNKO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRywwQkFBMEIsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDTyxnQ0FBVyxHQUFyQixVQUFzQixNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxTQUFtQjtZQUVwRixJQUFHLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7WUFFakMsYUFBYTtZQUNiLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBVyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksZUFBZSxHQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLEVBQUUsR0FBWSxLQUFLLENBQUM7WUFFeEIsYUFBYTtZQUNiLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDckI7Z0JBQ0ksUUFBUSxFQUFFLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDL0I7b0JBQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFZCxRQUFPLENBQUMsRUFDUjt3QkFDQSxLQUFLLElBQUk7NEJBQ0wsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDOzRCQUMvRCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7Z0NBQ0ksT0FBTyxJQUFJLENBQUM7NkJBQ2Y7NEJBRUQsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQzs0QkFDVixNQUFNLFFBQVEsQ0FBQyxDQUFDLGFBQWE7d0JBQ2pDLEtBQUssR0FBRyxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSTt3QkFDcEIsS0FBSyxHQUFHOzRCQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7NEJBQ3JDLE1BQU07d0JBQ1YsS0FBSyxJQUFJOzRCQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDdEI7NEJBQ0ksTUFBTSxDQUFFLFdBQVc7cUJBQ3RCO2lCQUNKO2dCQUNELElBQUcsQ0FBQyxFQUFFLEVBQ047b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7b0JBQzlCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUVELEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBRVgsVUFBVTtnQkFDVixTQUFTLEVBQUUsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNoQztvQkFDSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVkLFFBQU8sQ0FBQyxFQUNSO3dCQUNBLEtBQUssR0FBRzs0QkFDSixFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUNWLENBQUMsRUFBRSxDQUFDOzRCQUNKLE1BQU0sU0FBUyxDQUFDO3dCQUNwQixLQUFLLEdBQUc7NEJBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQzs0QkFDckMsTUFBTTt3QkFDVixLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDekIsbUNBQW1DO3dCQUN2Qzs0QkFDSSxNQUFNLENBQUUsV0FBVztxQkFDdEI7aUJBQ0o7Z0JBRUQsSUFBRyxDQUFDLEVBQUUsRUFDTjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztvQkFDOUIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBRUQsU0FBUztnQkFDVCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUN2RSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7b0JBQ0ksT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBRUQsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkIsdUJBQXVCO2dCQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFcEIsU0FBUyxFQUFFLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDaEM7b0JBQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFZCxRQUFPLENBQUMsRUFDUjt3QkFDQSxLQUFLLEdBQUc7NEJBQ0osTUFBTSxTQUFTLENBQUM7d0JBQ3BCLEtBQUssR0FBRzs0QkFDSixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPO3dCQUN2QixLQUFLLElBQUk7NEJBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN0Qjs0QkFDSSxNQUFNLENBQUUsT0FBTztxQkFDbEI7aUJBQ0o7YUFDSjtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDTywrQkFBVSxHQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxTQUFtQjtZQUVuRixJQUFHLElBQUksQ0FBQyxNQUFNO2dCQUFHLE9BQU8sSUFBSSxDQUFDO1lBQzdCLElBQUksR0FBRyxHQUFhLElBQUksU0FBUyxFQUFFLENBQUM7WUFFcEMsY0FBYztZQUNkLElBQUksQ0FBQyxHQUFXLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQVMsQ0FBQztZQUNkLElBQUksZUFBZSxHQUFhLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdDLGFBQWE7WUFDYixPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3JCO2dCQUNJLFVBQVU7Z0JBQ1YsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFFdkUsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO29CQUNJLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLElBQUcsS0FBSyxFQUNSO29CQUNJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xCO2dCQUVELGFBQWE7Z0JBQ2IsNkJBQTZCO2dCQUM3QixRQUFRLEVBQUUsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMvQjtvQkFDSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVkLFFBQU8sQ0FBQyxFQUNSO3dCQUNJLEtBQUssR0FBRzs0QkFDSixvQkFBb0I7NEJBQ3BCLDBCQUEwQjs0QkFDMUIsTUFBTSxRQUFRLENBQUM7d0JBQ25CLEtBQUssR0FBRzs0QkFDSixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLO3dCQUNyQixLQUFLLElBQUk7NEJBQ0wsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUNsQixpQ0FBaUM7d0JBQ3JDOzRCQUNJLE1BQU0sQ0FBQyxPQUFPO3FCQUNyQjtpQkFDSjthQUNKO1lBRUQsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBNEIsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBS0wsaUJBQUM7SUFBRCxDQUFDO0lBdGdCWSxnQ0FBVSxhQXNnQnRCO0lBRUQ7O09BRUc7SUFDSDtRQUErQiw2QkFBSztRQUVoQzs7V0FFRztRQUNILG1CQUFZLENBQVM7WUFBckIsWUFFSSxpQkFBTyxTQUdWO1lBREcsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1FBQ3BCLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw2QkFBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBRTVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBSyxHQUFaLFVBQWEsWUFBd0I7WUFBeEIsK0NBQXdCO1lBRWpDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkLFVBQWUsWUFBMEI7WUFBMUIsaURBQTBCO1lBRXJDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBU00sMEJBQU0sR0FBYixVQUFjLEtBQVU7WUFFcEIsSUFBSSxRQUFRLEtBQUssT0FBTSxDQUFDLEtBQUssQ0FBQyxFQUM5QjtnQkFDSSxNQUFNO2dCQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDckI7b0JBQ0ksT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELFFBQVE7cUJBRVI7b0JBQ0ksT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDL0I7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFHTCxnQkFBQztJQUFELENBQUMsQ0ExRThCLEtBQUssR0EwRW5DO0lBMUVZLCtCQUFTLFlBMEVyQjtJQUVEOztPQUVHO0lBQ0g7UUFBaUMsK0JBQUs7UUF1RGxDOztXQUVHO1FBQ0gscUJBQW1CLENBQVU7WUFBN0IsWUFFSSxpQkFBTyxTQUdWO1lBREcsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7O1FBQ3hCLENBQUM7UUE1REQ7O1dBRUc7UUFDSSw0QkFBTSxHQUFiO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVMsR0FBaEIsVUFBaUIsWUFBNkI7WUFBN0IsbURBQTZCO1lBRTFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFDNUIsQ0FBQyxDQUFDLE1BQU07Z0JBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUVsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQVNNLDRCQUFNLEdBQWIsVUFBYyxLQUFVO1lBRXBCLElBQUksU0FBUyxLQUFLLE9BQU0sQ0FBQyxLQUFLLENBQUMsRUFDL0I7Z0JBQ0ksT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNuQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLDhCQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBZ0JMLGtCQUFDO0lBQUQsQ0FBQyxDQXJFZ0MsS0FBSyxHQXFFckM7SUFyRVksaUNBQVcsY0FxRXZCO0lBRUQ7O09BRUc7SUFDSDtRQUFnQyw4QkFBSztRQU9qQyxvQkFBbUIsQ0FBTTtZQUF6QixZQUVJLGlCQUFPLFNBV1Y7WUFURyxJQUFHLFFBQVEsS0FBSyxPQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3pCO2dCQUNJLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO1lBRUQsSUFBRyxDQUFDLFlBQVksU0FBUyxFQUN6QjtnQkFDSSxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7O1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDhCQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQVNNLDJCQUFNLEdBQWIsVUFBYyxLQUFVO1lBRXBCLElBQUksUUFBUSxLQUFLLE9BQU0sQ0FBQyxLQUFLLENBQUMsRUFDOUI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQzthQUN0QztZQUVELElBQUksS0FBSyxZQUFZLFNBQVMsRUFDOUI7Z0JBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FBQyxDQTNEK0IsS0FBSyxHQTJEcEM7SUEzRFksZ0NBQVUsYUEyRHRCO0lBRUQ7O09BRUc7SUFDSDtRQUErQiw2QkFBVTtRQW1CckM7O1dBRUc7UUFDSCxtQkFBbUIsQ0FBbUIsRUFBRSxRQUFpQjtZQUF6RCxpQkFXQztZQVRHLElBQUcsUUFBUSxLQUFLLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFDekI7Z0JBQ0ksMEJBQU0sQ0FBQyxDQUFDLFNBQUM7YUFDWjtpQkFFRDtnQkFDSSwwQkFBTSxDQUFDLENBQUMsU0FBQzthQUNaO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7O1FBQzlCLENBQUM7UUEvQkQ7O1dBRUc7UUFDSSw0QkFBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRDQUF3QixHQUEvQixVQUFnQyxDQUFTO1lBRXJDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFrQkQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUlMLGdCQUFDO0lBQUQsQ0FBQyxDQTdDOEIsVUFBVSxHQTZDeEM7SUE3Q1ksK0JBQVMsWUE2Q3JCO0lBRUQ7O09BRUc7SUFDSDtRQUFtQyxpQ0FBSztRQTBCcEM7O1dBRUc7UUFDSDtZQUFBLFlBRUksaUJBQU8sU0FHVjtZQURHLEtBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDOztRQUNyQyxDQUFDO1FBaENEOztXQUVHO1FBQ0ksOEJBQU0sR0FBYjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGlDQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksZ0NBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFZTCxvQkFBQztJQUFELENBQUMsQ0FwQ2tDLEtBQUssR0FvQ3ZDO0lBcENZLG1DQUFhLGdCQW9DekI7SUFFRDs7T0FFRztJQUNIO1FBQStCLDZCQUFLO1FBRWhDOztXQUVHO1FBQ0g7WUFBQSxZQUVJLGlCQUFPLFNBRVY7WUFERyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFTLENBQUM7O1FBQ3pDLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxLQUFJLElBQUksR0FBRyxHQUE4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFDakg7Z0JBQ0ksSUFBSSxDQUFDLEdBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUV6QixJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDckI7b0JBQ0ksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUNYLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ1o7YUFDSjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxtQ0FBZSxHQUF0QixVQUF1QixLQUFhO1lBRWhDLElBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssRUFDOUM7Z0JBQ0ksT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDcEY7WUFFRCxJQUFJLENBQUMsR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxJQUFHLENBQUMsSUFBSSxJQUFJLEVBQ1o7Z0JBQ0ksT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQzFCO1lBRUQsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxvQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBcUI7WUFFekMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELElBQUksWUFBWSxHQUFXLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFMUMsS0FBSSxJQUFJLEdBQUcsR0FBOEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQzlHO2dCQUNJLElBQUksQ0FBQyxHQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN4RTtZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFbkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSx1QkFBRyxHQUFWLFVBQVcsQ0FBUTtZQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRDs7V0FFRztRQUNJLDZCQUFTLEdBQWhCLFVBQWlCLFlBQXFDO1lBQXJDLGtEQUFxQztZQUVsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBR0wsZ0JBQUM7SUFBRCxDQUFDLENBNUc4QixLQUFLLEdBNEduQztJQTVHWSwrQkFBUyxZQTRHckI7SUFFRDs7T0FFRztJQUNIO1FBQTZCLDJCQUFLO1FBRTlCOztXQUVHO1FBQ0g7WUFBQSxZQUVJLGlCQUFPLFNBRVY7WUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFpQixDQUFDOztRQUM1QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksSUFBTSxHQUFHLEdBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7Z0JBQ0ksSUFBSSxDQUFDLEdBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFFaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3JCO29CQUNJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNaO2dCQUVELEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0QjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFLLEdBQVo7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxrQ0FBZ0IsR0FBdkIsVUFBd0IsQ0FBcUI7WUFFekMsSUFBRyxDQUFDLFlBQVksU0FBUyxFQUN6QjtnQkFDSSxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUcsR0FBRyxJQUFJLElBQUksRUFDZDtvQkFDSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQzFCO2dCQUNELE9BQU8sR0FBRyxDQUFDO2FBQ2Q7WUFFRCxLQUFJLElBQUksSUFBSSxHQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDckg7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDeEI7b0JBQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksRUFDNUI7d0JBQ0ksT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDO3FCQUMxQjtvQkFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQzVCO2FBQ0o7WUFFRCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDM0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksaUNBQWUsR0FBdEIsVUFBdUIsS0FBYTtZQUVoQyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXBDLElBQU0sR0FBRyxHQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlELE9BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ25DO2dCQUNJLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxHQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLElBQUksQ0FBQyxhQUFhLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDdkYsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXJDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3QkFBTSxHQUFiLFVBQWMsWUFBb0M7WUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7V0FFRztRQUNJLHFCQUFHLEdBQVYsVUFBVyxHQUFXLEVBQUUsQ0FBUTtZQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQU8sR0FBZDtZQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNmO2dCQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQVUsQ0FBQztnQkFFckMsSUFBTSxHQUFHLEdBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTlELE9BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ25DO29CQUNJLElBQU0sR0FBRyxHQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBS0wsY0FBQztJQUFELENBQUMsQ0FwSjRCLEtBQUssR0FvSmpDO0lBcEpZLDZCQUFPLFVBb0puQjtBQUNMLENBQUMsRUE3ekNnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNnpDckMiLCJmaWxlIjoiL21vZGVsL2N1YmlzbW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvbW9kZWwvY3ViaXNtbW9kZWwudHNcIik7XG4iLCIvKlxyXG4qIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qXHJcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiovXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICDjg63jgrDlh7rlipvplqLmlbDjga7oqK3lrppcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8tLS0tLS0tLS0tIOODreOCsOWHuuWKm+ODrOODmeODqyDpgbjmip7poIXnm64g5a6a576pIC0tLS0tLS0tLS1cclxuLy8vIOips+e0sOODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9WRVJCT1NFOiBudW1iZXIgPSAwO1xyXG4vLy8g44OH44OQ44OD44Kw44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0RFQlVHOiBudW1iZXIgPSAxO1xyXG4vLy8gSW5mb+ODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9JTkZPOiBudW1iZXIgPSAyO1xyXG4vLy8g6K2m5ZGK44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1dBUk5JTkc6IG51bWJlciA9IDM7XHJcbi8vLyDjgqjjg6njg7zjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfRVJST1I6IG51bWJlciA9IDQ7XHJcbi8vLyDjg63jgrDlh7rlipvjgqrjg5XoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfT0ZGOiBudW1iZXIgPSA1O1xyXG5cclxuLyoqXHJcbiog44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44CCXHJcbipcclxuKiDlvLfliLbnmoTjgavjg63jgrDlh7rlipvjg6zjg5njg6vjgpLlpInjgYjjgovmmYLjgavlrprnvqnjgpLmnInlirnjgavjgZnjgovjgIJcclxuKiBDU01fTE9HX0xFVkVMX1ZFUkJPU0Ug772eIENTTV9MT0dfTEVWRUxfT0ZGIOOCkumBuOaKnuOBmeOCi+OAglxyXG4qL1xyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTDogbnVtYmVyID0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFOyIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyBXHJcbiAgICAgKiBcclxuICAgICAqIOODkeODqeODoeODvOOCv+WQjeODu+ODkeODvOODhOWQjeODu0RyYXdhYmxl5ZCN44KS5L+d5oyB44GZ44KL44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZFxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZygpOiBjc21TdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YoaWQpID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWQgPSBuZXcgY3NtU3RyaW5nKGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlk44KS5q+U6LyDXHJcbiAgICAgICAgICogQHBhcmFtIGMg5q+U6LyD44GZ44KLaWRcclxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcXVhbChjOiBzdHJpbmcgfCBjc21TdHJpbmcgfCBDdWJpc21JZCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYykgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaWTjgpLmr5TovINcclxuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxyXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjLnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2lkOiBjc21TdHJpbmc7IC8vIElE5ZCNXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlY2xhcmUgdHlwZSBDdWJpc21JZEhhbmRsZSA9IEN1YmlzbUlkO1xyXG59IiwiLypcclxuKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKlxyXG4qIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4qL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuL2N1YmlzbWlkXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XHJcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xyXG5pbXBvcnQgQ3ViaXNtSWQgPSBjdWJpc21pZC5DdWJpc21JZDtcclxuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIElE5ZCN44Gu566h55CGXHJcbiAgICAgKiBcclxuICAgICAqIElE5ZCN44KS566h55CG44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZE1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZD4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWRzLnNldChpLCB2b2lkIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lkcyA9ICBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOCkuODquOCueODiOOBi+OCieeZu+mMslxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZHMgSUTlkI3jg6rjgrnjg4hcclxuICAgICAgICAgKiBAcGFyYW0gY291bnQgSUTjga7lgIvmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZHMoaWRzOiBzdHJpbmdbXSB8IGNzbVN0cmluZ1tdKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVySWQoaWRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgpLnmbvpjLJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJJZChpZDogc3RyaW5nIHwgY3NtU3RyaW5nKTogQ3ViaXNtSWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IEN1YmlzbUlkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCA9IHRoaXMuZmluZElkKGlkKSkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDdWJpc21JZChpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMucHVzaEJhY2socmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldElkKGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBDdWJpc21JZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOBi+OCiUlE44Gu56K66KqNXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWtmOWcqOOBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXhpc3QoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZpbmRJZChpZCkgIT0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFeGlzdChpZC5zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLmpJzntKLjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cclxuICAgICAgICAgKiBAcmV0dXJuIOeZu+mMsuOBleOCjOOBpuOBhOOCi0lE44CC44Gq44GR44KM44GwTlVMTOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgZmluZElkKGlkOiBzdHJpbmcpOiBDdWJpc21JZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9pZHMuYXQoaSkuZ2V0U3RyaW5nKCkuaXNFcXVhbChpZCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkcy5hdChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pZHM6IGNzbVZlY3RvcjxDdWJpc21JZD47ICAgLy8g55m76Yyy44GV44KM44Gm44GE44KLSUTjga7jg6rjgrnjg4hcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvcmUvbGl2ZTJkY3ViaXNtY29yZS5kLnRzXCIgLz5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtanNvbn0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtanNvblwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZG1hbmFnZXJ9IGZyb20gXCIuL2lkL2N1YmlzbWlkbWFuYWdlclwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21yZW5kZXJlcn0gZnJvbSBcIi4vcmVuZGVyaW5nL2N1YmlzbXJlbmRlcmVyXCI7XHJcbmltcG9ydCB7Q3ViaXNtTG9nSW5mbywgQ3ViaXNtTG9nV2FybmluZywgQ1NNX0FTU0VSVH0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcclxuaW1wb3J0IFZhbHVlID0gY3ViaXNtanNvbi5WYWx1ZTtcclxuaW1wb3J0IEN1YmlzbUlkTWFuYWdlciA9IGN1YmlzbWlkbWFuYWdlci5DdWJpc21JZE1hbmFnZXI7XHJcbmltcG9ydCBDdWJpc21SZW5kZXJlciA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbVJlbmRlcmVyO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cnRvZChzOiBzdHJpbmcsIGVuZFB0cjogc3RyaW5nW10pOiBudW1iZXJcclxue1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgZm9yKGxldCBpOiBudW1iZXIgPSAxOyA7IGkrKylcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVzdEM6IHN0cmluZyA9IHMuc2xpY2UoaSAtIDEsIGkpO1xyXG5cclxuICAgICAgICAvLyDmjIfmlbDjg7vjg57jgqTjg4rjgrnjga7lj6/og73mgKfjgYzjgYLjgovjga7jgafjgrnjgq3jg4Pjg5fjgZnjgotcclxuICAgICAgICBpZih0ZXN0Qz09J2UnIHx8IHRlc3RDPT0nLScgfHwgdGVzdEMgPT0gJ0UnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxu44CA44CA44CAICAvLyDmloflrZfliJfjga7nr4Tlm7LjgpLluoPjgZLjgabjgYTjgY9cclxuICAgICAgICBsZXQgdGVzdDogc3RyaW5nID0gcy5zdWJzdHJpbmcoMCwgaSk7XHJcbiAgICAgICAgbGV0IG51bWJlcjogbnVtYmVyID0gTnVtYmVyKHRlc3QpO1xyXG4gICAgICAgIGlmKGlzTmFOKG51bWJlcikpXHJcbiAgICAgICAge1xyXG7jgIDjgIDjgIDjgIAgICAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbuOAgOOAgOOAgCAvLyDmnIDlvozjgavmlbDlgKTjgajjgZfjgabjgafjgY3jgZ9pbmRleOOCkuagvOe0jeOBl+OBpuOBiuOBj1xyXG4gICAgICAgIGluZGV4ID0gaTtcclxuICAgIH1cclxuICAgIGxldCBkID0gcGFyc2VGbG9hdChzKTsgIC8vIOODkeODvOOCueOBl+OBn+aVsOWApFxyXG5cclxuICAgIGlmKGlzTmFOKGQpKVxyXG4gICAge1xyXG7jgIDjgIDjgIDjgIAgLy8g5pWw5YCk44Go44GX44Gm6KqN6K2Y44Gn44GN44Gq44GP44Gq44Gj44Gf44Gu44Gn57WC5LqGXHJcbiAgICAgICAgZCA9IE5hTjtcclxuICAgIH1cclxuXHJcbiAgICBlbmRQdHJbMF0gPSBzLnNsaWNlKGluZGV4KTvjgIAvLyDlvozntprjga7mloflrZfliJdcclxuXHJcbiAgICByZXR1cm4gZDtcclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLy8g44OV44Kh44Kk44Or44K544Kz44O844OX44Gu5aSJ5pWw44KS5Yid5pyf5YyWXHJcbiAgICBcclxuICAgIGxldCBzX2lzU3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGV0IHNfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGV0IHNfb3B0aW9uOiBPcHRpb24gPSBudWxsO1xyXG4gICAgbGV0IHNfY3ViaXNtSWRNYW5hZ2VyOiBDdWJpc21JZE1hbmFnZXIgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEZyYW1ld29ya+WGheOBp+S9v+OBhuWumuaVsOOBruWuo+iogFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbnN0YW50XHJcbiAgICB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleE9mZnNldDogbnVtYmVyID0gMDsgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCquODleOCu+ODg+ODiOWApFxyXG4gICAgICAgIGV4cG9ydCBjb25zdCB2ZXJ0ZXhTdGVwOiBudW1iZXIgPSAyOyAgICAgICAvLyDjg6Hjg4Pjgrfjg6XpoILngrnjga7jgrnjg4bjg4Pjg5flgKRcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gY3NtRGVsZXRlPFQ+KGFkZHJlc3M6IFQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIWFkZHJlc3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRyZXNzID0gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGl2ZTJEIEN1YmlzbTMgT3JpZ2luYWwgV29ya2Zsb3cgU0RL44Gu44Ko44Oz44OI44Oq44Od44Kk44Oz44OIXHJcbiAgICAgKiDliKnnlKjplovlp4vmmYLjga9DdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp44KS5ZG844Gz44CBQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKeOBp+e1guS6huOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRnJhbWV3b3JrXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOWPr+iDveOBq+OBmeOCi+OAglxyXG4gICAgICAgICAqICBBUEnjgpLlrp/ooYzjgZnjgovliY3jgavlv4XjgZrjgZPjga7plqLmlbDjgpLlrp/ooYzjgZnjgovjgZPjgajjgIJcclxuICAgICAgICAgKiAg5LiA5bqm5rqW5YKZ44GM5a6M5LqG44GX44Gm5Lul6ZmN44Gv44CB5YaN44Gz5a6f6KGM44GX44Gm44KC5YaF6YOo5Yem55CG44GM44K544Kt44OD44OX44GV44KM44G+44GZ44CCXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gICAgb3B0aW9uICAgICAgT3B0aW9u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuICAg5rqW5YKZ5Yem55CG44GM5a6M5LqG44GX44Gf44KJdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRVcChvcHRpb246IE9wdGlvbiA9IG51bGwpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc19vcHRpb24gPSBvcHRpb247XHJcblxyXG4gICAgICAgICAgICBpZihzX29wdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtU2V0TG9nRnVuY3Rpb24oc19vcHRpb24ubG9nRnVuY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzX2lzU3RhcnRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXZlMkQgQ3ViaXNtIENvcmXjg5Djg7zjgrjjg6fjg7Pmg4XloLHjgpLooajnpLpcclxuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb246IG51bWJlciA9IExpdmUyREN1YmlzbUNvcmUuVmVyc2lvbi5jc21HZXRWZXJzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWpvcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHhGRjAwMDAwMCkgPj4gMjQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlub3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDBGRjAwMDApID4+IDE2KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGNoOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweDAwMDBGRkZGKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uTnVtYmVyOiBudW1iZXIgPSB2ZXJzaW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oYExpdmUyRCBDdWJpc20gQ29yZSB2ZXJzaW9uOiB7MH0uezF9LnsyfSAoezN9KWAsIFxyXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWFqb3IpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1pbm9yKS5zbGljZSgtMiksXHJcbiAgICAgICAgICAgICAgICAgICAgKCcwMDAwJyArIHBhdGNoKS5zbGljZSgtNCksXHJcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbk51bWJlclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgY29tcGxldGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RhcnRVcCgp44Gn5Yid5pyf5YyW44GX44GfQ3ViaXNtRnJhbWV3b3Jr44Gu5ZCE44OR44Op44Oh44O844K/44KS44Kv44Oq44Ki44GX44G+44GZ44CCXHJcbiAgICAgICAgICogRGlzcG9zZSgp44GX44GfQ3ViaXNtRnJhbWV3b3Jr44KS5YaN5Yip55So44GZ44KL6Zqb44Gr5Yip55So44GX44Gm44GP44Gg44GV44GE44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjbGVhblVwKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzX29wdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7jg6rjgr3jg7zjgrnjgpLliJ3mnJ/ljJbjgZfjgabjg6Ljg4fjg6vjgpLooajnpLrlj6/og73jgarnirbmhYvjgavjgZfjgb7jgZnjgII8YnI+XHJcbiAgICAgICAgICogICAgIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcclxuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+mAo+e2muWIneacn+WMluOCrOODvOODiSAtLS1cclxuICAgICAgICAgICAgLy8g6YCj57aa44GX44Gm44Oq44K944O844K556K65L+d44GM6KGM44KP44KM44Gq44GE44KI44GG44Gr44GZ44KL44CCXHJcbiAgICAgICAgICAgIC8vIOWGjeW6pkluaXRpYWxpemUoKeOBmeOCi+OBq+OBr+WFiOOBq0Rpc3Bvc2UoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxyXG4gICAgICAgICAgICBpZiAoc19pc0luaXRpYWxpemVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBza2lwcGVkLCBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8tLS0tIHN0YXRpYyDliJ3mnJ/ljJYgLS0tLVxyXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgpO1xyXG5cclxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBuZXcgQ3ViaXNtSWRNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCkgaXMgY29tcGxldGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruWFqOOBpuOBruODquOCveODvOOCueOCkuino+aUvuOBl+OBvuOBmeOAglxyXG4gICAgICAgICAqICAgICAg44Gf44Gg44GX44CB5aSW6YOo44Gn56K65L+d44GV44KM44Gf44Oq44K944O844K544Gr44Gk44GE44Gm44Gv6Kej5pS+44GX44G+44Gb44KT44CCXHJcbiAgICAgICAgICogICAgICDlpJbpg6jjgafpganliIfjgavnoLTmo4TjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3Bvc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XHJcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovmnKrliJ3mnJ/ljJbop6PmlL7jgqzjg7zjg4kgLS0tXHJcbiAgICAgICAgICAgIC8vIGRpc3Bvc2UoKeOBmeOCi+OBq+OBr+WFiOOBq2luaXRpYWxpemUoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxyXG4gICAgICAgICAgICBpZighc19pc0luaXRpYWxpemVkKSAgICAvLyBmYWxzZS4uLuODquOCveODvOOCueacqueiuuS/neOBruWgtOWQiFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBza2lwcGVkLCBub3QgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBWYWx1ZS5zdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpO1xyXG5cclxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6njga7pnZnnmoTjg6rjgr3jg7zjgrnvvIjjgrfjgqfjg7zjg4Djg5fjg63jgrDjg6njg6Dku5bvvInjgpLop6PmlL7jgZnjgotcclxuICAgICAgICAgICAgQ3ViaXNtUmVuZGVyZXIuc3RhdGljUmVsZWFzZSgpO1xyXG5cclxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBpcyBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gf44GL44Gp44GG44GLXHJcbiAgICAgICAgICogQHJldHVybiBBUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44Gu44Oq44K944O844K55Yid5pyf5YyW44GM44GZ44Gn44Gr6KGM44KP44KM44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICAgICAgICogQHJldHVybiDjg6rjgr3jg7zjgrnnorrkv53jgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzX2lzSW5pdGlhbGl6ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb3JlIEFQSeOBq+ODkOOCpOODs+ODieOBl+OBn+ODreOCsOmWouaVsOOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwcmFyYW0gbWVzc2FnZSDjg63jgrDjg6Hjg4Pjgrvjg7zjgrhcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvcmVMb2dGdW5jdGlvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gaWYgbG9nZ2luZyBub3QgcG9zc2libGUuXHJcbiAgICAgICAgICAgIGlmKCFMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKShtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCk44KS6L+U44GZ44CCXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuICDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExvZ2dpbmdMZXZlbCgpOiBMb2dMZXZlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHNfb3B0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzX29wdGlvbi5sb2dnaW5nTGV2ZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIExvZ0xldmVsLkxvZ0xldmVsX09mZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE44Oe44ON44O844K444Oj44Gu44Kk44Oz44K544K/44Oz44K544KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBDdWJpc21NYW5hZ2Vy44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJZE1hbmFnZXIoKTogQ3ViaXNtSWRNYW5hZ2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc19jdWJpc21JZE1hbmFnZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDpnZnnmoTjgq/jg6njgrnjgajjgZfjgabkvb/nlKjjgZnjgotcclxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZXjgZvjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGlvblxyXG57XHJcbiAgICBsb2dGdW5jdGlvbjogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbjsgICAvLyDjg63jgrDlh7rlipvjga7plqLmlbDjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgIGxvZ2dpbmdMZXZlbDogTG9nTGV2ZWw7ICAvLyDjg63jgrDlh7rlipvjg6zjg5njg6vjga7oqK3lrppcclxufVxyXG5cclxuLyoqXHJcbiAqIOODreOCsOWHuuWKm+OBruODrOODmeODq1xyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWxcclxue1xyXG4gICAgTG9nTGV2ZWxfVmVyYm9zZSA9IDAsICAgLy8g6Kmz57Sw44Ot44KwXHJcbiAgICBMb2dMZXZlbF9EZWJ1ZywgICAgICAgICAvLyDjg4fjg5Djg4PjgrDjg63jgrBcclxuICAgIExvZ0xldmVsX0luZm8sICAgICAgICAgIC8vIEluZm/jg63jgrBcclxuICAgIExvZ0xldmVsX1dhcm5pbmcsICAgICAgIC8vIOitpuWRiuODreOCsFxyXG4gICAgTG9nTGV2ZWxfRXJyb3IsICAgICAgICAgLy8g44Ko44Op44O844Ot44KwXHJcbiAgICBMb2dMZXZlbF9PZmYgICAgICAgICAgICAvLyDjg63jgrDlh7rlipvnhKHlirlcclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogNHg044Gu6KGM5YiXXHJcbiAgICAgKiBcclxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTWF0cml4NDRcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcclxuICAgICAgICAgICAgdGhpcy5sb2FkSWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPl+OBkeWPluOBo+OBn++8kuOBpOOBruihjOWIl+OBruS5l+eul+OCkuihjOOBhuOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOihjOWIl2FcclxuICAgICAgICAgKiBAcGFyYW0gYiDooYzliJdiXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IEZsb2F0MzJBcnJheSwgYjogRmxvYXQzMkFycmF5LCBkc3Q6IEZsb2F0MzJBcnJheSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IDQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo6IG51bWJlciA9IDA7IGogPCBuOyArK2opXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgbjsgKytrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDE2OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRzdFtpXSA9IGNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBsb2FkSWRlbnRpdHkoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGM6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeChjKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOihjOWIl+OCkuioreWumlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB0ciAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRNYXRyaXgodHI6IEZsb2F0MzJBcnJheSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxNjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cltpXSA9IHRyW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooYzliJfjgpLmta7li5XlsI/mlbDngrnmlbDjga7phY3liJfjgaflj5blvpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIDE25YCL44Gu5rWu5YuV5bCP5pWw54K55pWw44Gn6KGo44GV44KM44KLNHg044Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEFycmF5KCk6IEZsb2F0MzJBcnJheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruaLoeWkp+eOh+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWOi7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5ouh5aSn546H44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNjYWxlWSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7np7vli5Xph4/jgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90clsxMl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWOi7uOOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm4g54++5Zyo44Gu6KGM5YiX44Gn6KiI566X44GV44KM44GfWOi7uOOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHNyYyBZ6Lu444Gu5YCkXHJcbiAgICAgICAgICogQHJldHVybuOAgOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1nou7jjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzVdICogc3JjICsgdGhpcy5fdHJbMTNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnZlcnRUcmFuc2Zvcm1YKHNyYzogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHNyYyAtIHRoaXMuX3RyWzEyXSkgLyB0aGlzLl90clswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFnou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxM10pIC8gdGhpcy5fdHJbNV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnp7vli5VcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnm7jlr77nmoTjgavnp7vli5XjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVSZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMS4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMS4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICB5LCAgICAgIDAuMCwgICAgMS4wXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLnp7vli5VcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICogQHBhcmFtIHkgeei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xyXG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWOi7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWCh4OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxMl0gPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44GuWei7uOOBruS9jee9ruOCkuaMh+WumuOBl+OBn+S9jee9ruOBuOenu+WLleOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWSh5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuebuOWvvueahOOBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNjYWxlUmVsYXRpdmUoeDogbnVtYmVyLCB5Om51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0cjE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgeSwgICAgICAwLjAsICAgIDAuMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAwLjAsICAgIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS5oyH5a6a44GX44Gf5YCN546H44Gr6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90clswXSA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyWzVdID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBq+ihjOWIl+OCkuS5l+eul1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIG0g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5QnlNYXRyaXgobTogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseShtLmdldEFycmF5KCksIHRoaXMuX3RyLCB0aGlzLl90cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqrjg5bjgrjjgqfjgq/jg4jjga7jgrPjg5Tjg7zjgpLnlJ/miJDjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2xvbmUoKTogQ3ViaXNtTWF0cml4NDRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZU1hdHJpeDogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3RyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZU1hdHJpeC5fdHJbaV0gPSB0aGlzLl90cltpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNsb25lTWF0cml4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF90cjogRmxvYXQzMkFycmF5OyAgICAvLyA0eDTooYzliJfjg4fjg7zjgr9cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0NvcmUvbGl2ZTJkY3ViaXNtY29yZS5kLnRzXCIgLz5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtcmVuZGVyZXJ9IGZyb20gXCIuLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWR9IGZyb20gXCIuLi9pZC9jdWJpc21pZFwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmt9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcclxuaW1wb3J0IHtDU01fQVNTRVJUfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcclxuaW1wb3J0IEN1YmlzbUZyYW1ld29yayA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcms7XHJcbmltcG9ydCBDdWJpc21CbGVuZE1vZGUgPSBjdWJpc21yZW5kZXJlci5DdWJpc21CbGVuZE1vZGU7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcclxuaW1wb3J0IEN1YmlzbUlkSGFuZGxlID0gY3ViaXNtaWQuQ3ViaXNtSWRIYW5kbGU7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODouODh+ODq1xyXG4gICAgICogXHJcbiAgICAgKiBNb2Pjg4fjg7zjgr/jgYvjgonnlJ/miJDjgZXjgozjgovjg6Ljg4fjg6vjga7jgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1vZGVsXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44Gu44OR44Op44Oh44O844K/44Gu5pu05pawXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgbW9kZWxcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5kcmF3YWJsZXMucmVzZXREeW5hbWljRmxhZ3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCreODo+ODs+ODkOOCueOBruW5heOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDYW52YXNXaWR0aCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2RlbCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWwuY2FudmFzaW5mby5DYW52YXNXaWR0aCAvIHRoaXMuX21vZGVsLmNhbnZhc2luZm8uUGl4ZWxzUGVyVW5pdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCreODo+ODs+ODkOOCueOBrumrmOOBleOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLmNhbnZhc2luZm8uQ2FudmFzSGVpZ2h0IC8gdGhpcy5fbW9kZWwuY2FudmFzaW5mby5QaXhlbHNQZXJVbml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/44KS5L+d5a2Y44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNhdmVQYXJhbWV0ZXJzKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLmNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlZFBhcmFtZXRlckNvdW50OiBudW1iZXIgPSB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuZ2V0U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgc2F2ZWRQYXJhbWV0ZXJDb3VudClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuc2V0KGksIHRoaXMuX3BhcmFtZXRlclZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRQYXJhbWV0ZXJzLnB1c2hCYWNrKHRoaXMuX3BhcmFtZXRlclZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OCkuWPluW+l1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBMaXZlMkRDdWJpc21Db3JlLk1vZGVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjg4Tjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLlj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gcGFydElkIOODkeODvOODhOOBrklEXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjg4Tjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFydEluZGV4KHBhcnRJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0SW5kZXg6IG51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgcGFydENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJ0cy5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIGZvcihwYXJ0SW5kZXggPSAwOyBwYXJ0SW5kZXggPCBwYXJ0Q291bnQ7ICsrcGFydEluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXJ0SWQgPT0gdGhpcy5fcGFydElkcy5hdChwYXJ0SW5kZXgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOODouODh+ODq+OBq+WtmOWcqOOBl+OBpuOBhOOBquOBhOWgtOWQiOOAgemdnuWtmOWcqOODkeODvOODhElE44Oq44K544OI5YaF44Gr44GC44KL44GL44KS5qSc57Si44GX44CB44Gd44Gu44Kk44Oz44OH44OD44Kv44K544KS6L+U44GZXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFydElkLmlzRXhpc3QocGFydElkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vdEV4aXN0UGFydElkLmdldFZhbHVlKHBhcnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOmdnuWtmOWcqOODkeODvOODhElE44Oq44K544OI44Gr44Gq44GE5aC05ZCI44CB5paw44GX44GP6KaB57Sg44KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICAgIHBhcnRJbmRleCA9IHBhcnRDb3VudCArIHRoaXMuX25vdEV4aXN0UGFydElkLmdldFNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJ0SWQuc2V0VmFsdWUocGFydElkLCBwYXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl9ub3RFeGlzdFBhcnRPcGFjaXRpZXMuYXBwZW5kS2V5KHBhcnRJbmRleCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcGFydEluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844OE44Gu5YCL5pWw44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjg4Tjga7lgIvmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFydENvdW50KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJ0cy5jb3VudDtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOODhOOBruS4jemAj+aYjuW6puOBruioreWumihJbmRleClcclxuICAgICAgICAgKiBAcGFyYW0gcGFydEluZGV4IOODkeODvOODhOOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSBvcGFjaXR5IOS4jemAj+aYjuW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRQYXJ0T3BhY2l0eUJ5SW5kZXgocGFydEluZGV4OiBudW1iZXIsIG9wYWNpdHk6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcy5pc0V4aXN0KHBhcnRJbmRleCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFydE9wYWNpdGllcy5zZXRWYWx1ZShwYXJ0SW5kZXgsb3BhY2l0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueOBruevhOWbsuWGheaknOefpVxyXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAgPD0gcGFydEluZGV4ICYmIHBhcnRJbmRleCA8IHRoaXMuZ2V0UGFydENvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcGFydE9wYWNpdGllc1twYXJ0SW5kZXhdID0gb3BhY2l0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOODhOOBruS4jemAj+aYjuW6puOBruioreWumihJZClcclxuICAgICAgICAgKiBAcGFyYW0gcGFydElkIOODkeODvOODhOOBrklEXHJcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg44OR44O844OE44Gu5LiN6YCP5piO5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFBhcnRPcGFjaXR5QnlJZChwYXJ0SWQ6IEN1YmlzbUlkSGFuZGxlLCBvcGFjaXR5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDpq5jpgJ/ljJbjga7jgZ/jgoHjgatQYXJ0SW5kZXjjgpLlj5blvpfjgafjgY3jgovmqZ/mp4vjgavjgarjgaPjgabjgYTjgovjgYzjgIHlpJbpg6jjgYvjgonjga7oqK3lrprjga7mmYLjga/lkbzjgbPlh7rjgZfpoLvluqbjgYzkvY7jgYTjgZ/jgoHkuI3opoFcclxuICAgICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFydEluZGV4KHBhcnRJZCk7XHJcblxyXG4gICAgICAgICAgICBpZihpbmRleCA8IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8g44OR44O844OE44GM44Gq44GE44Gu44Gn44K544Kt44OD44OXXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFydE9wYWNpdHlCeUluZGV4KGluZGV4LCBvcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOODhOOBruS4jemAj+aYjuW6puOBruWPluW+lyhpbmRleClcclxuICAgICAgICAgKiBAcGFyYW0gcGFydEluZGV4IOODkeODvOODhOOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844OE44Gu5LiN6YCP5piO5bqmXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFBhcnRPcGFjaXR5QnlJbmRleChwYXJ0SW5kZXg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fbm90RXhpc3RQYXJ0T3BhY2l0aWVzLmlzRXhpc3QocGFydEluZGV4KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a2Y5Zyo44GX44Gq44GE44OR44O844OESUTjga7loLTlkIjjgIHpnZ7lrZjlnKjjg5Hjg7zjg4Tjg6rjgrnjg4jjgYvjgonkuI3pgI/mmI7luqbjgpLov5TjgZnjgIJcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub3RFeGlzdFBhcnRPcGFjaXRpZXMuZ2V0VmFsdWUocGFydEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g44Kk44Oz44OH44OD44Kv44K544Gu56+E5Zuy5YaF5qSc55+lXHJcbiAgICAgICAgICAgIENTTV9BU1NFUlQoMCA8PSBwYXJ0SW5kZXggJiYgcGFydEluZGV4IDwgdGhpcy5nZXRQYXJ0Q291bnQoKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFydE9wYWNpdGllc1twYXJ0SW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844OE44Gu5LiN6YCP5piO5bqm44Gu5Y+W5b6XKGlkKVxyXG4gICAgICAgICAqIEBwYXJhbSBwYXJ0SWQg44OR44O844OE44Gu77yp772EXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjg4Tjga7kuI3pgI/mmI7luqZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFydE9wYWNpdHlCeUlkKHBhcnRJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOmrmOmAn+WMluOBruOBn+OCgeOBq1BhcnRJbmRleOOCkuWPluW+l+OBp+OBjeOCi+apn+ani+OBq+OBquOBo+OBpuOBhOOCi+OBjOOAgeWklumDqOOBi+OCieOBruioreWumuOBruaZguOBr+WRvOOBs+WHuuOBl+mgu+W6puOBjOS9juOBhOOBn+OCgeS4jeimgVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5nZXRQYXJ0SW5kZXgocGFydElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgLy8g44OR44O844OE44GM54Sh44GE44Gu44Gn44K544Kt44OD44OXXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhcnRPcGFjaXR5QnlJbmRleChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0g44OR44Op44Oh44O844K/SURcclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJJbmRleChwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJJbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgICBjb25zdCBpZENvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgZm9yKHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBpZENvdW50OyArK3BhcmFtZXRlckluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXJhbWV0ZXJJZCAhPSB0aGlzLl9wYXJhbWV0ZXJJZHMuYXQocGFyYW1ldGVySW5kZXgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g44Oi44OH44Or44Gr5a2Y5Zyo44GX44Gm44GE44Gq44GE5aC05ZCI44CB6Z2e5a2Y5Zyo44OR44Op44Oh44O844K/SUTjg6rjgrnjg4jlhoXjgpLmpJzntKLjgZfjgIHjgZ3jga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLov5TjgZlcclxuICAgICAgICAgICAgaWYodGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJJZC5pc0V4aXN0KHBhcmFtZXRlcklkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVySWQuZ2V0VmFsdWUocGFyYW1ldGVySWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDpnZ7lrZjlnKjjg5Hjg6njg6Hjg7zjgr9JROODquOCueODiOOBq+OBquOBhOWgtOWQiOaWsOOBl+OBj+imgee0oOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJJbmRleCA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuY291bnQgKyB0aGlzLl9ub3RFeGlzdFBhcmFtZXRlcklkLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVySWQuc2V0VmFsdWUocGFyYW1ldGVySWQsIHBhcmFtZXRlckluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJWYWx1ZXMuYXBwZW5kS2V5KHBhcmFtZXRlckluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWAi+aVsOOBruWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/44Gu5YCL5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFBhcmFtZXRlckNvdW50KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlpKflgKTjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySW5kZXgg44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7mnIDlpKflgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVyTWF4aW11bVZhbHVlKHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXNbcGFyYW1ldGVySW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5pyA5bCP5YCk44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/44Gu5pyA5bCP5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFBhcmFtZXRlck1pbmltdW1WYWx1ZShwYXJhbWV0ZXJJbmRleDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5taW5pbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruODh+ODleOCqeODq+ODiOWApOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJbmRleCDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv+OBruODh+ODleOCqeODq+ODiOWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJEZWZhdWx0VmFsdWUocGFyYW1ldGVySW5kZXg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsLnBhcmFtZXRlcnMuZGVmYXVsdFZhbHVlc1twYXJhbWV0ZXJJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySW5kZXggICAg44OR44Op44Oh44O844K/44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzLmlzRXhpc3QocGFyYW1ldGVySW5kZXgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJWYWx1ZXMuZ2V0VmFsdWUocGFyYW1ldGVySW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDjgqTjg7Pjg4fjg4Pjgq/jgrnjga7nr4Tlm7LlhoXmpJznn6VcclxuICAgICAgICAgICAgQ1NNX0FTU0VSVCgwIDw9IHBhcmFtZXRlckluZGV4ICYmIHBhcmFtZXRlckluZGV4IDwgdGhpcy5nZXRQYXJhbWV0ZXJDb3VudCgpKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyVmFsdWVzW3BhcmFtZXRlckluZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJZCAgICDjg5Hjg6njg6Hjg7zjgr/jga5JRFxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFBhcmFtZXRlclZhbHVlQnlJZChwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOmrmOmAn+WMluOBruOBn+OCgeOBq3BhcmFtZXRlckluZGV444KS5Y+W5b6X44Gn44GN44KL5qmf5qeL44Gr44Gq44Gj44Gm44GE44KL44GM44CB5aSW6YOo44GL44KJ44Gu6Kit5a6a44Gu5pmC44Gv5ZG844Gz5Ye644GX6aC75bqm44GM5L2O44GE44Gf44KB5LiN6KaBXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckluZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhcmFtZXRlckluZGV4KHBhcmFtZXRlcklkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbWV0ZXJJbmRleCDjg5Hjg6njg6Hjg7zjgr/jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44OR44Op44Oh44O844K/44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHdlaWdodCDph43jgb9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJWYWx1ZXMuaXNFeGlzdChwYXJhbWV0ZXJJbmRleCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdEV4aXN0UGFyYW1ldGVyVmFsdWVzLnNldFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICh3ZWlnaHQgPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLl9ub3RFeGlzdFBhcmFtZXRlclZhbHVlcy5nZXRWYWx1ZShwYXJhbWV0ZXJJbmRleCkgKiAoMSAtIHdlaWdodCkpICsgKHZhbHVlICogd2VpZ2h0KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOOCpOODs+ODh+ODg+OCr+OCueOBruevhOWbsuWGheaknOefpVxyXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAgPD0gcGFyYW1ldGVySW5kZXggJiYgcGFyYW1ldGVySW5kZXggPCB0aGlzLmdldFBhcmFtZXRlckNvdW50KCkpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5fbW9kZWwucGFyYW1ldGVycy5tYXhpbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XSA8IHZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMubWF4aW11bVZhbHVlc1twYXJhbWV0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5fbW9kZWwucGFyYW1ldGVycy5taW5pbXVtVmFsdWVzW3BhcmFtZXRlckluZGV4XSA+IHZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX21vZGVsLnBhcmFtZXRlcnMubWluaW11bVZhbHVlc1twYXJhbWV0ZXJJbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlclZhbHVlc1twYXJhbWV0ZXJJbmRleF0gPSAod2VpZ2h0ID09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3BhcmFtZXRlclZhbHVlc1twYXJhbWV0ZXJJbmRleF0gPSAodGhpcy5fcGFyYW1ldGVyVmFsdWVzW3BhcmFtZXRlckluZGV4XSAqICgxIC0gd2VpZ2h0KSkgKyAodmFsdWUgKiB3ZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5YCk44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcklkIOODkeODqeODoeODvOOCv+OBrklEXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOODkeODqeODoeODvOOCv+OBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFBhcmFtZXRlclZhbHVlQnlJZChwYXJhbWV0ZXJJZDogQ3ViaXNtSWRIYW5kbGUsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuZ2V0UGFyYW1ldGVySW5kZXgocGFyYW1ldGVySWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlclZhbHVlQnlJbmRleChpbmRleCwgdmFsdWUsIHdlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7liqDnrpcoaW5kZXgpXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDliqDnrpfjgZnjgovlgKRcclxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgocGFyYW1ldGVySW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIgPSAxLjApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhcmFtZXRlclZhbHVlQnlJbmRleChwYXJhbWV0ZXJJbmRleCwgKHRoaXMuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4KSArICh2YWx1ZSAqIHdlaWdodCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+OBruWApOOBruWKoOeulyhpZClcclxuICAgICAgICAgKiBAcGFyYW0gcGFyYW1ldGVySWQg44OR44Op44Oh44O844K/77yp77ykXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWKoOeul+OBmeOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZFBhcmFtZXRlclZhbHVlQnlJZChwYXJhbWV0ZXJJZDogYW55LCB2YWx1ZTogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciA9IDEuMCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLmdldFBhcmFtZXRlckluZGV4KHBhcmFtZXRlcklkKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgoaW5kZXgsIHZhbHVlLCB3ZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5YCk44Gu5LmX566XXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlcklkIOODkeODqeODoeODvOOCv+OBrklEXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS5l+eul+OBmeOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5UGFyYW1ldGVyVmFsdWVCeUlkKHBhcmFtZXRlcklkOiBDdWJpc21JZEhhbmRsZSwgdmFsdWU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIgPSAxLjApOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5nZXRQYXJhbWV0ZXJJbmRleChwYXJhbWV0ZXJJZCk7XHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbHlQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgoaW5kZXgsIHZhbHVlLCB3ZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/44Gu5YCk44Gu5LmX566XXHJcbiAgICAgICAgICogQHBhcmFtIHBhcmFtZXRlckluZGV4IOODkeODqeODoeODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZeOAgOS5l+eul+OBmeOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG11bHRpcGx5UGFyYW1ldGVyVmFsdWVCeUluZGV4KHBhcmFtZXRlckluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHdlaWdodDogbnVtYmVyID0gMS4wKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJWYWx1ZUJ5SW5kZXgocGFyYW1ldGVySW5kZXgsICh0aGlzLmdldFBhcmFtZXRlclZhbHVlQnlJbmRleChwYXJhbWV0ZXJJbmRleCkgKiAoMS4wICsgKHZhbHVlIC0gMS4wKSAqIHdlaWdodCkpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCueOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUlkIERyYXdhYmxl44GuSURcclxuICAgICAgICAgKiBAcmV0dXJuIERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlSW5kZXgoZHJhd2FibGVJZDogQ3ViaXNtSWRIYW5kbGUpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlQ291bnQgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGRyYXdhYmxlSW5kZXg6IG51bWJlciA9IDA7IGRyYXdhYmxlSW5kZXggPCBkcmF3YWJsZUNvdW50OyArK2RyYXdhYmxlSW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RyYXdhYmxlSWRzLmF0KGRyYXdhYmxlSW5kZXgpID09IGRyYXdhYmxlSWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyYXdhYmxlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyYXdhYmxl44Gu5YCL5pWw44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBruWAi+aVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUNvdW50KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZHJhd2FibGVDb3VudCA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5jb3VudDtcclxuICAgICAgICAgICAgcmV0dXJuIGRyYXdhYmxlQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBrklE44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKiBAcmV0dXJuIGRyYXdhYmxl44GuSURcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVJZChkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBDdWJpc21JZEhhbmRsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVySWRzOiBzdHJpbmdbXSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5pZHM7XHJcbiAgICAgICAgICAgIHJldHVybiBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQocGFyYW1ldGVySWRzW2RyYXdhYmxlSW5kZXhdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyYXdhYmxl44Gu5o+P55S76aCG44Oq44K544OI44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBEcmF3YWJsZeOBruaPj+eUu+mghuODquOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVJlbmRlck9yZGVycygpOiBJbnQzMkFycmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJPcmRlcnM6IEludDMyQXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMucmVuZGVyT3JkZXJzO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyT3JkZXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7jg4bjgq/jgrnjg4Hjg6PjgqTjg7Pjg4fjg4Pjgq/jgrnjg6rjgrnjg4jjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7jg4bjgq/jgrnjg4Hjg6PjgqTjg7Pjg4fjg4Pjgq/jgrnjg6rjgrnjg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVUZXh0dXJlSW5kaWNlcyhkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRpY2VzOiBJbnQzMkFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLnRleHR1cmVJbmRpY2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUluZGljZXNbZHJhd2FibGVJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBrlZlcnRleFBvc2l0aW9uc+OBruWkieWMluaDheWgseOBruWPluW+l1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICog55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44GnRHJhd2FibGXjga7poILngrnmg4XloLHjgYzlpInljJbjgZfjgZ/jgYvjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgIGRyYXdhYmxlSW5kZXggICBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR2YWwgIHRydWUgICAgRHJhd2FibGXjga7poILngrnmg4XloLHjgYznm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgaflpInljJbjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dmFsICBmYWxzZSAgIERyYXdhYmxl44Gu6aCC54K55oOF5aCx44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlRHluYW1pY0ZsYWdWZXJ0ZXhQb3NpdGlvbnNEaWRDaGFuZ2UoZHJhd2FibGVJbmRleDogbnVtYmVyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZsYWdzOiBVaW50OEFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmR5bmFtaWNGbGFncztcclxuICAgICAgICAgICAgcmV0dXJuIExpdmUyREN1YmlzbUNvcmUuVXRpbHMuaGFzVmVydGV4UG9zaXRpb25zRGlkQ2hhbmdlQml0KGR5bmFtaWNGbGFnc1tkcmF3YWJsZUluZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBrumggueCueOCpOODs+ODh+ODg+OCr+OCueOBruWAi+aVsOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBrumggueCueOCpOODs+ODh+ODg+OCr+OCueOBruWAi+aVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRleEluZGV4Q291bnQoZHJhd2FibGVJbmRleDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleENvdW50czogSW50MzJBcnJheSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5pbmRleENvdW50cztcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4Q291bnRzW2RyYXdhYmxlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7poILngrnjga7lgIvmlbDjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7poILngrnjga7lgIvmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVWZXJ0ZXhDb3VudChkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleENvdW50cyA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy52ZXJ0ZXhDb3VudHM7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb3VudHNbZHJhd2FibGVJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBrumggueCueODquOCueODiOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IGRyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBrumggueCueODquOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRpY2VzKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IEZsb2F0MzJBcnJheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RHJhd2FibGVWZXJ0ZXhQb3NpdGlvbnMoZHJhd2FibGVJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBrumggueCueOCpOODs+ODh+ODg+OCr+OCueODquOCueODiOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmFyYWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBrumggueCueOCpOODs+ODh+ODg+OCr+OCueODquOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZVZlcnRleEluZGljZXMoZHJhd2FibGVJbmRleDogbnVtYmVyKTogVWludDE2QXJyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZXNBcnJheTogVWludDE2QXJyYXlbXSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5pbmRpY2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kaWNlc0FycmF5W2RyYXdhYmxlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7poILngrnjg6rjgrnjg4jjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7poILngrnjg6rjgrnjg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVWZXJ0ZXhQb3NpdGlvbnMoZHJhd2FibGVJbmRleDogbnVtYmVyKTogRmxvYXQzMkFycmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlc0FycmF5OiBGbG9hdDMyQXJyYXlbXSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy52ZXJ0ZXhQb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNlc0FycmF5W2RyYXdhYmxlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7poILngrnjga5VVuODquOCueODiOOBruWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBrumggueCuVVW44Oq44K544OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlVmVydGV4VXZzKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IEZsb2F0MzJBcnJheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdXZzQXJyYXk6IEZsb2F0MzJBcnJheVtdID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLnZlcnRleFV2cztcclxuICAgICAgICAgICAgcmV0dXJuIHV2c0FycmF5W2RyYXdhYmxlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7kuI3pgI/mmI7luqbjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7kuI3pgI/mmI7luqZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVPcGFjaXR5KGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0aWVzOiBGbG9hdDMyQXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMub3BhY2l0aWVzO1xyXG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0aWVzW2RyYXdhYmxlSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7jgqvjg6rjg7PjgrDmg4XloLHjga7lj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gZHJhd2FibGXjga7jgqvjg6rjg7PjgrDmg4XloLFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVDdWxsaW5nKGRyYXdhYmxlSW5kZXg6IG51bWJlcik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0YW50RmxhZ3MgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuY29uc3RhbnRGbGFncztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAhTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNJc0RvdWJsZVNpZGVkQml0KGNvbnN0YW50RmxhZ3NbZHJhd2FibGVJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBruODluODrOODs+ODieODouODvOODieOCkuWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IERyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiBkcmF3YWJsZeOBruODluODrOODs+ODieODouODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUJsZW5kTW9kZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBDdWJpc21CbGVuZE1vZGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0YW50RmxhZ3MgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuY29uc3RhbnRGbGFncztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNCbGVuZEFkZGl0aXZlQml0KGNvbnN0YW50RmxhZ3NbZHJhd2FibGVJbmRleF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEN1YmlzbUJsZW5kTW9kZS5DdWJpc21CbGVuZE1vZGVfQWRkaXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNCbGVuZE11bHRpcGxpY2F0aXZlQml0KGNvbnN0YW50RmxhZ3NbZHJhd2FibGVJbmRleF0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEN1YmlzbUJsZW5kTW9kZS5DdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBDdWJpc21CbGVuZE1vZGUuQ3ViaXNtQmxlbmRNb2RlX05vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyYXdhYmxl44Gu44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Oq44K544OI44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBEcmF3YWJsZeOBruOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+ODquOCueODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZU1hc2tzKCk6IEludDMyQXJyYXlbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbWFza3M6IEludDMyQXJyYXlbXSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5tYXNrcztcclxuICAgICAgICAgICAgcmV0dXJuIG1hc2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7jgq/jg6rjg4Pjg5Tjg7PjgrDjg57jgrnjgq/jga7lgIvmlbDjg6rjgrnjg4jjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIERyYXdhYmxl44Gu44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu5YCL5pWw44Oq44K544OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlTWFza0NvdW50cygpOiBJbnQzMkFycmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBtYXNrQ291bnRzOiBJbnQzMkFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLm1hc2tDb3VudHM7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXNrQ291bnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44Gu5L2/55So54q25oWLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCr+ODquODg+ODlOODs+OCsOODnuOCueOCr+OCkuS9v+eUqOOBl+OBpuOBhOOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kv44Oq44OD44OU44Oz44Kw44Oe44K544Kv44KS5L2/55So44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzVXNpbmdNYXNraW5nKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgZDogbnVtYmVyID0gMDsgZCA8IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5jb3VudDsgKytkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9tb2RlbC5kcmF3YWJsZXMubWFza0NvdW50c1tkXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7ooajnpLrmg4XloLHjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBEcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSBEcmF3YWJsZeOBjOihqOekulxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2UgRHJhd2FibGXjgYzpnZ7ooajnpLpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVEeW5hbWljRmxhZ0lzVmlzaWJsZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBkeW5hbWljRmxhZ3M6IFVpbnQ4QXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuZHluYW1pY0ZsYWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNJc1Zpc2libGVCaXQoZHluYW1pY0ZsYWdzW2RyYXdhYmxlSW5kZXhdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERyYXdhYmxl44GuRHJhd09yZGVy44Gu5aSJ5YyW5oOF5aCx44Gu5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44GnZHJhd2FibGXjga5kcmF3T3JkZXLjgYzlpInljJbjgZfjgZ/jgYvjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgKiBkcmF3T3JkZXLjga9hcnRNZXNo5LiK44Gn5oyH5a6a44GZ44KLMOOBi+OCiTEwMDDjga7mg4XloLFcclxuICAgICAgICAgKiBAcGFyYW0gZHJhd2FibGVJbmRleCBkcmF3YWJsZeOBruOCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSBkcmF3YWJsZeOBruS4jemAj+aYjuW6puOBjOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp+WkieWMluOBl+OBn1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2UgZHJhd2FibGXjga7kuI3pgI/mmI7luqbjgYznm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgaflpInljJbjgZfjgabjgYTjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHJhd2FibGVEeW5hbWljRmxhZ1Zpc2liaWxpdHlEaWRDaGFuZ2UoZHJhd2FibGVJbmRleDogbnVtYmVyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZsYWdzOiBVaW50OEFycmF5ID0gdGhpcy5fbW9kZWwuZHJhd2FibGVzLmR5bmFtaWNGbGFncztcclxuICAgICAgICAgICAgcmV0dXJuIExpdmUyREN1YmlzbUNvcmUuVXRpbHMuaGFzVmlzaWJpbGl0eURpZENoYW5nZUJpdChkeW5hbWljRmxhZ3NbZHJhd2FibGVJbmRleF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHJhd2FibGXjga7kuI3pgI/mmI7luqbjga7lpInljJbmg4XloLHjga7lj5blvpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDnm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgadkcmF3YWJsZeOBruS4jemAj+aYjuW6puOBjOWkieWMluOBl+OBn+OBi+OCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBkcmF3YWJsZUluZGV4IGRyYXdhYmxl44Gu44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIERyYXdhYmxl44Gu5LiN6YCP5piO5bqm44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44GfXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSBEcmF3YWJsZeOBruS4jemAj+aYjuW6puOBjOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp+WkieWMluOBl+OBpuOBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXREcmF3YWJsZUR5bmFtaWNGbGFnT3BhY2l0eURpZENoYW5nZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBkeW5hbWljRmxhZ3M6IFVpbnQ4QXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuZHluYW1pY0ZsYWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNPcGFjaXR5RGlkQ2hhbmdlQml0KGR5bmFtaWNGbGFnc1tkcmF3YWJsZUluZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEcmF3YWJsZeOBruaPj+eUu+mghuW6j+OBruWkieWMluaDheWgseOBruWPluW+l1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOebtOi/keOBrkN1YmlzbU1vZGVsLnVwZGF0ZemWouaVsOOBp0RyYXdhYmxl44Gu5o+P55S744Gu6aCG5bqP44GM5aSJ5YyW44GX44Gf44GL44KS5Y+W5b6X44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGRyYXdhYmxlSW5kZXggRHJhd2FibGXjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUgRHJhd2FibGXjga7mj4/nlLvjga7poIbluo/jgYznm7Tov5Hjga5DdWJpc21Nb2RlbC51cGRhdGXplqLmlbDjgaflpInljJbjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIERyYXdhYmxl44Gu5o+P55S744Gu6aCG5bqP44GM55u06L+R44GuQ3ViaXNtTW9kZWwudXBkYXRl6Zai5pWw44Gn5aSJ5YyW44GX44Gm44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldERyYXdhYmxlRHluYW1pY0ZsYWdSZW5kZXJPcmRlckRpZENoYW5nZShkcmF3YWJsZUluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBkeW5hbWljRmxhZ3M6IFVpbnQ4QXJyYXkgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuZHluYW1pY0ZsYWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtQ29yZS5VdGlscy5oYXNSZW5kZXJPcmRlckRpZENoYW5nZUJpdChkeW5hbWljRmxhZ3NbZHJhd2FibGVJbmRleF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5L+d5a2Y44GV44KM44Gf44OR44Op44Oh44O844K/44Gu6Kqt44G/6L6844G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvYWRQYXJhbWV0ZXJzKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5jb3VudDtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRQYXJhbWV0ZXJDb3VudDogbnVtYmVyID0gdGhpcy5fc2F2ZWRQYXJhbWV0ZXJzLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBhcmFtZXRlckNvdW50ID4gc2F2ZWRQYXJhbWV0ZXJDb3VudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyQ291bnQgPSBzYXZlZFBhcmFtZXRlckNvdW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbWV0ZXJDb3VudDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJWYWx1ZXNbaV0gPSB0aGlzLl9zYXZlZFBhcmFtZXRlcnMuYXQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneacn+WMluOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENTTV9BU1NFUlQodGhpcy5fbW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyVmFsdWVzID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy52YWx1ZXM7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnRPcGFjaXRpZXMgPSB0aGlzLl9tb2RlbC5wYXJ0cy5vcGFjaXRpZXM7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlck1heGltdW1WYWx1ZXMgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1heGltdW1WYWx1ZXM7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlck1pbmltdW1WYWx1ZXMgPSB0aGlzLl9tb2RlbC5wYXJhbWV0ZXJzLm1pbmltdW1WYWx1ZXM7XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJJZHM6IHN0cmluZ1tdID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5pZHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJDb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWwucGFyYW1ldGVycy5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJJZHMucHJlcGFyZUNhcGFjaXR5KHBhcmFtZXRlckNvdW50KTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtZXRlckNvdW50OyArK2kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVySWRzLnB1c2hCYWNrKEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChwYXJhbWV0ZXJJZHNbaV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydElkczogc3RyaW5nW10gPSB0aGlzLl9tb2RlbC5wYXJ0cy5pZHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0Q291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsLnBhcnRzLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnRJZHMucHJlcGFyZUNhcGFjaXR5KHBhcnRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJ0Q291bnQ7ICsraSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0SWRzLnB1c2hCYWNrKEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChwYXJ0SWRzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdhYmxlSWRzOiBzdHJpbmdbXSA9IHRoaXMuX21vZGVsLmRyYXdhYmxlcy5pZHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3YWJsZUNvdW50OiBudW1iZXIgPSB0aGlzLl9tb2RlbC5kcmF3YWJsZXMuY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd2FibGVJZHMucHJlcGFyZUNhcGFjaXR5KGRyYXdhYmxlQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZHJhd2FibGVDb3VudDsgKytpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdhYmxlSWRzLnB1c2hCYWNrKEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChkcmF3YWJsZUlkc1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKG1vZGVsOiBMaXZlMkRDdWJpc21Db3JlLk1vZGVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyVmFsdWVzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyTWF4aW11bVZhbHVlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlck1pbmltdW1WYWx1ZXMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJ0T3BhY2l0aWVzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZWRQYXJhbWV0ZXJzID0gbmV3IGNzbVZlY3RvcjxudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtZXRlcklkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdhYmxlSWRzID0gbmV3IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT4oKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFydElkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ub3RFeGlzdFBhcnRJZCA9IG5ldyBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJJZCA9IG5ldyBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fbm90RXhpc3RQYXJhbWV0ZXJWYWx1ZXMgPSBuZXcgY3NtTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICB0aGlzLl9ub3RFeGlzdFBhcnRPcGFjaXRpZXMgPSBuZXcgY3NtTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9ub3RFeGlzdFBhcnRPcGFjaXRpZXM6IGNzbU1hcDxudW1iZXIsIG51bWJlcj47IC8vIOWtmOWcqOOBl+OBpuOBhOOBquOBhOODkeODvOODhOOBruS4jemAj+aYjuW6puOBruODquOCueODiFxyXG4gICAgICAgIHByaXZhdGUgX25vdEV4aXN0UGFydElkOiBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj47ICAvLyDlrZjlnKjjgZfjgabjgYTjgarjgYTjg5Hjg7zjg4RJROOBruODquOCueODiFxyXG5cclxuICAgICAgICBwcml2YXRlIF9ub3RFeGlzdFBhcmFtZXRlclZhbHVlczogY3NtTWFwPG51bWJlciwgbnVtYmVyPjsgICAvLyDlrZjlnKjjgZfjgabjgYTjgarjgYTjg5Hjg6njg6Hjg7zjgr/jga7lgKTjga7jg6rjgrnjg4hcclxuICAgICAgICBwcml2YXRlIF9ub3RFeGlzdFBhcmFtZXRlcklkOiBjc21NYXA8Q3ViaXNtSWRIYW5kbGUsIG51bWJlcj47IC8vIOWtmOWcqOOBl+OBpuOBhOOBquOBhOODkeODqeODoeODvOOCv0lE44Gu44Oq44K544OIXHJcblxyXG4gICAgICAgIHByaXZhdGUgX3NhdmVkUGFyYW1ldGVyczogY3NtVmVjdG9yPG51bWJlcj47ICAgICAgICAgICAgLy8g5L+d5a2Y44GV44KM44Gf44OR44Op44Oh44O844K/XHJcblxyXG4gICAgICAgIHByaXZhdGUgX21vZGVsOiBMaXZlMkRDdWJpc21Db3JlLk1vZGVsOyAgICAgICAgICAgICAvLyDjg6Ljg4fjg6tcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVyVmFsdWVzOiBGbG9hdDMyQXJyYXk7ICAgICAgICAgICAgLy8g44OR44Op44Oh44O844K/44Gu5YCk44Gu44Oq44K544OIXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVyTWF4aW11bVZhbHVlczogRmxvYXQzMkFycmF5OyAgICAgLy8g44OR44Op44Oh44O844K/44Gu5pyA5aSn5YCk44Gu44Oq44K544OIXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVyTWluaW11bVZhbHVlczogRmxvYXQzMkFycmF5OyAgICAgLy8g44OR44Op44Oh44O844K/44Gu5pyA5bCP5YCk44Gu44Oq44K544OIXHJcblxyXG4gICAgICAgIHByaXZhdGUgX3BhcnRPcGFjaXRpZXM6IEZsb2F0MzJBcnJheTsgICAgICAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjg4Tjga7kuI3pgI/mmI7luqbjga7jg6rjgrnjg4hcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFyYW1ldGVySWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+O1xyXG4gICAgICAgIHByaXZhdGUgX3BhcnRJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT47XHJcbiAgICAgICAgcHJpdmF0ZSBfZHJhd2FibGVJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT47XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1hdHJpeDQ0fSBmcm9tICcuLi9tYXRoL2N1YmlzbW1hdHJpeDQ0JztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcclxuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XHJcbmltcG9ydCBDdWJpc21NYXRyaXg0NCA9IGN1YmlzbW1hdHJpeDQ0LkN1YmlzbU1hdHJpeDQ0O1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjgpLlh6bnkIbjgZnjgovjg6zjg7Pjg4Djg6lcclxuICAgICAqIFxyXG4gICAgICog44K144OW44Kv44Op44K544Gr55Kw5aKD5L6d5a2Y44Gu5o+P55S75ZG95Luk44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdWJpc21SZW5kZXJlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBl+OBpuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtUmVuZGVyZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUocmVuZGVyZXI6IEN1YmlzbVJlbmRlcmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXHJcbiAgICAgICAgICogQHBhcmFtIG1vZGVsIOODouODh+ODq+OBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZHJhd01vZGVsKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0TW9kZWwoKSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvRHJhd01vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog6YWN5YiX44Gv6KSH6KO944GV44KM44KL44Gu44Gn44CB5YWD44Gu6YWN5YiX44Gv5aSW44Gn56C05qOE44GX44Gm6Imv44GEXHJcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDQ0IE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TXZwTWF0cml4KG1hdHJpeDQ0OiBDdWJpc21NYXRyaXg0NCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5zZXRNYXRyaXgobWF0cml4NDQuZ2V0QXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiX44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE12cE1hdHJpeCgpOiBDdWJpc21NYXRyaXg0NFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX212cE1hdHJpeDR4NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgovvvIgxLjDjgYzmqJnmupbjga7nirbmhYvvvIlcclxuICAgICAgICAgKiBAcGFyYW0gcmVkIOi1pOODgeODo+ODs+ODjeODq+OBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSBncmVlbiDnt5Hjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gYmx1ZSDpnZLjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gYWxwaGEgzrHjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TW9kZWxDb2xvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocmVkIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWQgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyZWQgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZCA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZ3JlZW4gPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdyZWVuID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZ3JlZW4gPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdyZWVuID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihibHVlIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBibHVlID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYmx1ZSA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmx1ZSA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxwaGEgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFscGhhID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYWxwaGEgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFscGhhID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLlIgPSByZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuRyA9IGdyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkIgPSBibHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkEgPSBhbHBoYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgosoMS4w44GM5qiZ5rqW44Gu54q25oWLKVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbENvbG9yKCk6IEN1YmlzbVRleHR1cmVDb2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fbW9kZWxDb2xvcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0SXNQcmVtdWx0aXBsaWVkQWxwaGEoZW5hYmxlOiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBlbmFibGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5LmX566X5riI44G/44GuzrHnhKHlirlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXHJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gY3VsbGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjgqvjg6rjg7PjgrDmnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOOCq+ODquODs+OCsOeEoeWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0N1bGxpbmcoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOODkeODqeODoeODvOOCv+WApOOBruW9semfv+W6puOBr+ODrOODs+ODgOODqeOBruWun+ijheOBq+S+neWtmOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRBbmlzb3Ryb3B5KG46IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSBuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOeVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBbmlzb3Ryb3B5KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvcnRvcHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6vjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNb2RlbCgpOiBDdWJpc21Nb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IgPSBuZXcgQ3ViaXNtVGV4dHVyZUNvbG9yKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJZcclxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NC5sb2FkSWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+aPj+eUu+OBruWun+ijhVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkb0RyYXdNb2RlbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jvvIjjgqLjg7zjg4jjg6Hjg4Pjgrfjg6XvvInjgpLmj4/nlLvjgZnjgotcclxuICAgICAgICAgKiDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjgajjg4bjgq/jgrnjg4Hjg6Pnlarlj7fjgpLjgrvjg4Pjg4jjgafmuKHjgZnjgIJcclxuICAgICAgICAgKiBAcGFyYW0gdGV4dHVyZU5vIOaPj+eUu+OBmeOCi+ODhuOCr+OCueODgeODo+eVquWPt1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleENvdW50IOaPj+eUu+OCquODluOCuOOCp+OCr+ODiOOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6XpoILngrnjga7jgqTjg7Pjg4fjg4Pjgq/jgrnphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gb3BhY2l0eSDkuI3pgI/mmI7luqZcclxuICAgICAgICAgKiBAcGFyYW0gY29sb3JCbGVuZE1vZGUg44Kr44Op44O844OW44Os44Oz44OH44Kj44Oz44Kw44Gu44K/44Kk44OXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRyYXdNZXNoKHRleHR1cmVObzogbnVtYmVyLCBpbmRleENvdW50OiBudW1iZXIsIHZlcnRleENvdW50OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4QXJyYXk6IFVpbnQxNkFycmF5LCB2ZXJ0ZXhBcnJheTogRmxvYXQzMkFycmF5LCB1dkFycmF5OiBGbG9hdDMyQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlciwgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZTogRnVuY3Rpb247XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfbXZwTWF0cml4NHg0OiBDdWJpc21NYXRyaXg0NDsgICAgICAgICAgICAgICAgICAvLyBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbENvbG9yOiBDdWJpc21UZXh0dXJlQ29sb3I7ICAgICAgICAgICAgICAgIC8vIOODouODh+ODq+iHquS9k+OBruOCq+ODqeODvO+8iFJHQkHvvIlcclxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxyXG4gICAgICAgIHByb3RlY3RlZCBfaXNQcmVtdWx0aXBsaWVkQWxwaGE6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAvLyDkuZfnrpfmuIjjgb/OseOBquOCiXRydWVcclxuICAgICAgICBwcm90ZWN0ZWQgX2FuaXNvcnRvcHk6IGFueTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XHJcbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9Ob3JtYWwgPSAwLCAgICAgICAgIC8vIOmAmuW4uFxyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xyXG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9NdWx0aXBsaWNhdGl2ZSA9IDIsIC8vIOS5l+eul1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOODhuOCr+OCueODgeODo+OBruiJsuOCklJHQkHjgafmibHjgYbjgZ/jgoHjga7jgq/jg6njgrlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbVRleHR1cmVDb2xvclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUiA9IDEuMDtcclxuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLkIgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuQSA9IDEuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFI6IG51bWJlcjsgIC8vIOi1pOODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEI6IG51bWJlcjsgIC8vIOmdkuODgeODo+ODs+ODjeODq1xyXG4gICAgICAgIEE6IG51bWJlcjsgIC8vIM6x44OB44Oj44Oz44ON44OrXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEN1YmlzbUxvZ0RlYnVnIH0gZnJvbSBcIi4uL3V0aWxzL2N1YmlzbWRlYnVnXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIEtleS1WYWx1ZeOBruODmuOCouOCkuWumue+qeOBmeOCi+OCr+ODqeOCuVxyXG4gICAgICogY3NtTWFw44Kv44Op44K544Gu5YaF6YOo44OH44O844K/44Gn5L2/55So44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjc21QYWlyPF9LZXlULCBfVmFsVD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKiBAcGFyYW0ga2V5IEtleeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihrZXk/OiBfS2V5VCwgdmFsdWU/OiBfVmFsVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSAoa2V5ID09IHVuZGVmaW5lZCkgXHJcbiAgICAgICAgICAgICAgICA/IG51bGwgXHJcbiAgICAgICAgICAgICAgICA6IGtleTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gKHZhbHVlID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiB2YWx1ZTsgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmaXJzdDogX0tleVQ7ICAgLy8ga2V544Go44GX44Gm55So44GE44KL5aSJ5pWwXHJcbiAgICAgICAgcHVibGljIHNlY29uZDogX1ZhbFQ7ICAvLyB2YWx1ZeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Oe44OD44OX5Z6LXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjc21NYXA8X0tleVQsIF9WYWxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOWIneacn+WMluaZgueCueOBp+eiuuS/neOBmeOCi+OCteOCpOOCulxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplPzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc2l6ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHNpemUgPCAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheShzaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgq3jg7zjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOaWsOOBn+OBq+i/veWKoOOBmeOCi+OCreODvFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhcHBlbmRLZXkoa2V5OiBfS2V5VCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBj0tleS9WYWx1ZeOBruODmuOCouOCkuS9nOOCi1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgMSwgZmFsc2UpOyAvLyAx44Gk5Lul5LiK5YWl44KL6ZqZ6ZaT44KS5L2c44KLXHJcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBhGtleS92YWx1ZeOBruOCpOODs+ODh+ODg+OCr+OCueOBr19zaXplXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZV0gPSBuZXcgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+KGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKGdldClcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlKGtleTogX0tleVQpOiBfVmFsVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShzZXQpXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDku6PlhaXjgZnjgotWYWx1ZeWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRWYWx1ZShrZXk6IF9LZXlULCB2YWx1ZTogX1ZhbFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZEtleShrZXkpOyAvLyDmlrDopo/jgq3jg7zjgpLov73liqBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gn5rih44GX44GfS2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KL44GLXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDlrZjlnKjjgpLnorroqo3jgZnjgotrZXlcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlvJXmlbDjgafmuKHjgZfjgZ9rZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFeGlzdChrZXk6IF9LZXlUKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICoga2V5VmFsdWXjga7jg53jgqTjg7Pjgr/jgpLlhajjgabop6PmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gdm9pZCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrrjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruOCteOCpOOCulxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYTjgIJcclxuICAgICAgICAgKiBAcGFyYW0gZml0VG9TaXplIHRydWXjgarjgonmjIflrprjgZfjgZ/jgrXjgqTjgrrjgavlkIjjgo/jgZvjgovjgIJmYWxzZeOBquOCieOCteOCpOOCuuOCkjLlgI3norrkv53jgZfjgabjgYrjgY/jgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlciwgZml0VG9TaXplOiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2tleVZhbHVlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCBjc21NYXAuRGVmYXVsdFNpemUpIG5ld1NpemUgPSBjc21NYXAuRGVmYXVsdFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDIpIG5ld1NpemUgPSB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIHRoaXMuX3NpemUpOyAvLyDntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVyYXNlKGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliYrpmaRcclxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgaW5kZXgpOyAvLyDntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lgKTjgpIzMuODk+ODg+ODiOespuWPt+S7mOOBjeaVtOaVsOWei+OBp+ODgOODs+ODl+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkdW1wQXNJbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJ7MH0gLFwiLCB0aGlzLl9rZXlWYWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK44Gu5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XHJcbiAgICAgICAgcHVibGljIF9rZXlWYWx1ZXM6IGNzbVBhaXI8X0tleVQsIF9WYWxUPltdOy8vIGtleS12YWx1ZeODmuOCouOBrumFjeWIl1xyXG4gICAgICAgIHB1YmxpYyBfZHVtbXlWYWx1ZTogX1ZhbFQ7ICAvLyDnqbrjga7lgKTjgpLov5TjgZnngrrjga7jg4Djg5/jg7xcclxuICAgICAgICBwdWJsaWMgX3NpemU6IG51bWJlcjsgICAgICAgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3NtTWFwPFQ+44Gu44Kk44OG44Os44O844K/XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3Iodj86IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+LCBpZHg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSAodiAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IHZcclxuICAgICAgICAgICAgICAgIDogbmV3IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpZHggIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyBpZHhcclxuICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0KGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlLl9tYXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICsrdGhpcy5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KyspOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZW9sZC5fbWFwO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KTsgLy8g5Y+k44GE5YCk44KS5L+d5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZW9sZC5fbWFwO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogKua8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwdHIoKTogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwLl9rZXlWYWx1ZXNbdGhpcy5faW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIT3mvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbm90RXF1YWwoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbmRleCAhPSBpdGUuX2luZGV4KSB8fCAodGhpcy5fbWFwICE9IGl0ZS5fbWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9pbmRleDogbnVtYmVyOyAgICAgICAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICBfbWFwOiBjc21NYXA8X0tleVQsIF9WYWxUPjsgLy8g44Kz44Oz44OG44OKXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5paH5a2X5YiX44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjc21TdHJpbmdcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjgpLlvozmlrnjgavov73liqDjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucyArPSAobGVuZ3RoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcclxuICAgICAgICAgICAgICAgIDogYztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X44K144Kk44K644KS5ouh5by144GX44Gm5paH5a2X44KS5Z+L44KB44KLXHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDmi6HlvLXjgZnjgovmloflrZfmlbBcclxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xyXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX44Gu6ZW344GV44KS44OQ44Kk44OI5pWw44Gn5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnMpIC5yZXBsYWNlKC8lLi4vZywgXCJ4XCIpLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRMZW5ndGgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8g+OAgDxcclxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTGVzcyhzOiBjc21TdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyDID5cclxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA+IHMucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxyXG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go562J44GX44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcXVhbChzOiBzdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID09IHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjgYznqbrjgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6IOWApOOBjOioreWumuOBleOCjOOBpuOBhOOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoID09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zID0gcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHM6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDjg5njgq/jgr/jg7zlnovvvIjlj6/lpInphY3liJflnovvvIlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmlpdGFsQ2FwYWNpdHkg5Yid5pyf5YyW5b6M44Gu44Kt44Oj44OR44K344OG44Kj44CC44OH44O844K/44K144Kk44K644GvX2NhcGFjaXR5ICogc2l6ZW9mKFQpXHJcbiAgICAgICAgICogQHBhcmFtIHplcm9DbGVhciB0cnVl44Gq44KJ5Yid5pyf5YyW5pmC44Gr56K65L+d44GX44Gf6aCY5Z+f44KSMOOBp+Wfi+OCgeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRpYWxDYXBhY2l0eTogbnVtYmVyID0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhdChpbmRleDogbnVtYmVyKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B0cltpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrvjg4Pjg4hcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOOCu+ODg+ODiOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wdHJbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0KG9mZnNldDogbnVtYmVyID0gMCk6IFRbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogVFtdID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IG9mZnNldDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5fcHRyW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHVzaEJhY2vlh6bnkIbjgIHjgrPjg7Pjg4bjg4rjgavmlrDjgZ/jgaropoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgUHVzaEJhY2vlh6bnkIbjgafov73liqDjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHVzaEJhY2sodmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9jYXBhY2l0eSA9PSAwID8gY3NtVmVjdG9yLnNfZGVmYXVsdFNpemUgOiB0aGlzLl9jYXBhY2l0eSAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9wdHJbdGhpcy5fc2l6ZSsrXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOS7o+WFpeWHpueQhuW+jOOBruOCteOCpOOCulxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDopoHntKDjgavku6PlhaXjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXNzaWduKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUobmV3U2l6ZSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogYW55ID0gbnVsbCwgY2FsbFBsYWNlbWVudE5ldzogYm9vbGVhbiA9IHRydWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VyU2l6ZTogbnVtYmVyID0gdGhpcy5fc2l6ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2FsbFBsYWNlbWVudE5ldylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgIC8vIG5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5ldyB2YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV3U2l6ZSA8PSB0aGlzLl9zaXplXHJcbiAgICAgICAgICAgICAgICAvLy0tLVxyXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZSh0aGlzLl9zaXplIC0gc3ViLCBzdWIpOyAgICAvLyDkuI3opoHjgarjga7jgafnoLTmo4TjgZnjgotcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBq+OCs+ODs+ODhuODiuimgee0oOOCkuaMv+WFpeOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBwb3NpdGlvbiDmjL/lhaXjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gZW5kIOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrue1guerr+S9jee9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZHN0U2k6IG51bWJlciA9IHBvc2l0aW9uLl9pbmRleDtcclxuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBzcmNFaTogbnVtYmVyID0gZW5kLl9pbmRleDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyBhZGRDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmjL/lhaXnlKjjga7ml6LlrZjjg4fjg7zjgr/jgpLjgrfjg5Xjg4jjgZfjgabpmpnplpPjgpLkvZzjgotcclxuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSB0aGlzLl9zaXplIC0gZHN0U2k7XHJcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhZGRTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShkc3RTaSArIGksIDAsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHNyY1NpOyBpIDwgc3JjRWk7IGkrKywgZHN0U2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2RzdFNpXSA9IGJlZ2luLl92ZWN0b3IuX3B0cltpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX3NpemUgKyBhZGRDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkuWJiumZpOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5YmK6Zmk5a6f6KGMXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliYrpmaRcclxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobmV3U2l6ZSA+IHRoaXMuX2NhcGFjaXR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShuZXdTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgaXRlcmF0b3I8VD4odGhpcywgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCB0aGlzLl9zaXplKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXdWZWN0b3IgPSBuZXcgY3NtVmVjdG9yPFQ+KCk7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcclxuICAgICAgICAgICAgbmV3VmVjdG9yLl9zaXplID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fY2FwYWNpdHkgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdWZWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfcHRyOiBUW107ICAgIC8vIOOCs+ODs+ODhuODiuOBruWFiOmgreOCouODieODrOOCuVxyXG4gICAgICAgIF9zaXplOiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxyXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcclxuXHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IHNfZGVmYXVsdFNpemUgPSAxMDsgLy8g44Kz44Oz44OG44OK5Yid5pyf5YyW44Gu44OH44OV44Kp44Or44OI44K144Kk44K6XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY/OiBjc21WZWN0b3I8VD4sIGluZGV4PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IChpbmRleCAhPSB1bmRlZmluZWQpID8gaW5kZXggOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Luj5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlSW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlRGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4KyspO1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2QXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHRyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB0cigpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVjdG9yLl9wdHJbdGhpcy5faW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdWJzdGl0dXRpb24oaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICE95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl92ZWN0b3IgIT0gaXRlLl92ZWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luZGV4OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7Q1NNX0xPR19MRVZFTCwgQ1NNX0xPR19MRVZFTF9WRVJCT1NFLCBDU01fTE9HX0xFVkVMX0RFQlVHLCBDU01fTE9HX0xFVkVMX0lORk8sIENTTV9MT0dfTEVWRUxfV0FSTklORywgQ1NNX0xPR19MRVZFTF9FUlJPUn0gZnJvbSBcIi4uL2N1YmlzbWZyYW1ld29ya2NvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludCA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT4gXHJcbntcclxuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XHJcbntcclxuICAgIEN1YmlzbUxvZ1ByaW50KGxldmVsLCBmbXQgKyBcIlxcblwiLCBhcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBDU01fQVNTRVJUID0gKGV4cHI6IGFueSkgPT5cclxue1xyXG4gICAgY29uc29sZS5hc3NlcnQoZXhwcik7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGxldCBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuXHJcbmlmKENTTV9MT0dfTEVWRUwgPD0gQ1NNX0xPR19MRVZFTF9WRVJCT1NFKVxyXG57XHJcbiAgICBDdWJpc21Mb2dWZXJib3NlID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9ERUJVRylcclxue1xyXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxyXG57XHJcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX1dBUk5JTkcpXHJcbntcclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9FUlJPUilcclxue1xyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxyXG4gICAgICog44Ot44Kw44Gu5Ye65Yqb44CB44OQ44Kk44OI44Gu44OA44Oz44OX44Gq44GpXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxyXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGZvcm1hdCDmm7jlvI/ku5jjgY3mloflrZfliJdcclxuICAgICAgICAgKiBAcGFyYW0gYXJncyDlj6/lpInplbflvJXmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHByaW50KGxvZ0xldmVsOiBMb2dMZXZlbCwgZm9ybWF0OiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxyXG4gICAgICAgICAgICBpZihsb2dMZXZlbCA8IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcmsuZ2V0TG9nZ2luZ0xldmVsKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG9nUHJpbnQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyOiBzdHJpbmcgPSBcclxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9cXHsoXFxkKylcXH0vZyxcclxuICAgICAgICAgICAgICAgICAgICAobSwgaykgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxvZ1ByaW50KGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjg7zjgr/jgYvjgonmjIflrprjgZfjgZ/plbfjgZXjgaDjgZHjg4Djg7Pjg5flh7rlipvjgZnjgovjgIJcclxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xyXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGgg44OA44Oz44OX44GZ44KL6ZW344GVXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJSAxNiA9PSAwICYmIGkgPiAwKSB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgJSA4ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiICBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHByaXZhdGUg44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tIExJVkUyRCBOQU1FU1BBQ0UgLS0tLS0tLS0tLS0tIiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xyXG5pbXBvcnQge0N1YmlzbUxvZ0luZm99IGZyb20gXCIuL2N1YmlzbWRlYnVnXCI7XHJcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5pbXBvcnQgY3NtVmVjdG9yX2l0ZXJhdG9yID0gY3NtdmVjdG9yLml0ZXJhdG9yO1xyXG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcclxuaW1wb3J0IGNzbU1hcF9pdGVyYXRvciA9IGNzbW1hcC5pdGVyYXRvcjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXHJcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIOiBzdHJpbmcgPSBcIkVycm9yOiB0eXBlIG1pc21hdGNoXCI7XHJcbiAgICBjb25zdCBDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFM6IHN0cmluZyA9IFwiRXJyb3I6IGluZGV4IG91dCBvZiBib3VuZHNcIjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UmF3U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoZGVmYXVsdFZhbHVlLCBpbmRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLphY3liJfjgafov5TjgZkoVmFsdWVbXSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU/OiBjc21WZWN0b3I8VmFsdWU+KTogY3NtVmVjdG9yPFZhbHVlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuODnuODg+ODl+OBp+i/lOOBmShjc21NYXA8Y3NtU3RyaW5nLCBWYWx1ZT4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oe44OD44OX44Gu44Kt44O85LiA6Kan44KS44Kz44Oz44OG44OK44Gn6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg57jg4Pjg5fjga7jgq3jg7zjga7kuIDopqdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLnNfZHVtbXlLZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYxudWxs44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc051bGwoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaWh+Wtl+WIl+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZeOAgemdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBq+OCqOODqeODvOWApOOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSnNvbkVycm9yLmVycm9yVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbih0cnVlKTtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG5ldyBKc29uQm9vbGVhbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG5ldyBKc29uRXJyb3IoXCJFUlJPUlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5udWxsVmFsdWUgPSBuZXcgSnNvbk51bGx2YWx1ZSgpO1xyXG5cclxuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBuZXcgY3NtVmVjdG9yPHN0cmluZz4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oq44Oq44O844K555So44Oh44K944OD44OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlTm90Rm9yQ2xpZW50Q2FsbCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX3N0cmluZ0J1ZmZlcjogc3RyaW5nOyAvLyDmloflrZfliJfjg5Djg4Pjg5XjgqFcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBlcnJvclZhbHVlOiBWYWx1ZTsgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZnjgqjjg6njg7zjgIIgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc2NpaeaWh+Wtl+OBruOBv+WvvuW/nOOBl+OBn+acgOWwj+mZkOOBrui7vemHj0pTT07jg5Hjg7zjgrXjgIJcclxuICAgICAqIOS7leanmOOBr0pTT07jga7jgrXjg5bjgrvjg4Pjg4jjgajjgarjgovjgIJcclxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcclxuICAgICAqIFxyXG4gICAgICogW+acquWvvuW/nOmgheebrl1cclxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXHJcbiAgICAgKiDjg7tl44Gr44KI44KL5oyH5pWw6KGo54++XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGJ1ZmZlcj86IEFycmF5QnVmZmVyLCBsZW5ndGg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYoYnVmZmVyICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZUJ5dGVzKGJ1ZmZlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDjg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcclxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgILlpLHmlZfjgZfjgZ/jgolOVUxMXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGpzb24gPSBuZXcgQ3ViaXNtSnNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFzdWNjZWVkZWQpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Kc29uLmRlbGV0ZShqc29uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqrjg5bjgrjjgqfjgq/jg4jjga7op6PmlL7lh6bnkIZcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2UgQ3ViaXNtSnNvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSb290KCk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICBVbmljb2Rl44Gu44OQ44Kk44OK44Oq44KSU3RyaW5n44Gr5aSJ5o+bXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciDlpInmj5vjgZnjgovjg5DjgqTjg4rjg6rjg4fjg7zjgr9cclxuICAgICAgICAgKiBAcmV0dXJuIOWkieaPm+W+jOOBruaWh+Wtl+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgICAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gKFwiJVwiICsgdGhpcy5wYWQodWludDhBcnJheVtpXS50b1N0cmluZygxNikpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqjjg7PjgrPjg7zjg4njgIHjg5Hjg4fjgqPjg7PjgrBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuLmxlbmd0aCA8IDJcclxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXHJcbiAgICAgICAgICAgICAgICA6IG47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOBruODkeODvOOCueOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXHJcbiAgICAgICAgICogQHBhcmFtIHNpemUgICAgICDjg4fjg7zjgr/jg5DjgqTjg4jjga7jgrXjgqTjgrpcclxuICAgICAgICAgKiByZXR1cm4gdHJ1ZSA6IOaIkOWKn1xyXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBhcnNlQnl0ZXMoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGVuZFBvczogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgemFjeWIl1xyXG4gICAgICAgICAgICBsZXQgZGVjb2RlQnVmZmVyOiBzdHJpbmcgPSB0aGlzLmFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XHJcbiAgICAgICAgICAgICAgICBzdHJidWYgPSBcIkpzb24gcGFyc2UgZXJyb3IgOiBAbGluZSBcIiArICh0aGlzLl9saW5lQ291bnQgKyAxKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcclxuXHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiezB9XCIsIHRoaXMuX3Jvb3QuZ2V0UmF3U3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5fcm9vdCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25FcnJvcihuZXcgY3NtU3RyaW5nKHRoaXMuX2Vycm9yKSwgZmFsc2UpOyAvLyByb29044Gv6Kej5pS+44GV44KM44KL44Gu44Gn44Ko44Op44O844Kq44OW44K444Kn44Kv44OI44KS5Yil6YCU5L2c5oiQ44GZ44KLXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjgrnmmYLjga7jgqjjg6njg7zlgKTjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UGFyc2VFcnJvcigpOiBzdHJpbmcgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6vjg7zjg4jopoHntKDjga7mrKHjga7opoHntKDjgYzjg5XjgqHjgqTjg6vjga7ntYLnq6/jgaDjgaPjgZ/jgol0cnVl44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290LmdldEFycmF5KClbMV0uZXF1YWxzKFwiRU9GXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xyXG4gICAgICAgICAqIOOCqOODrOODoeODs+ODiOOBruabuOW8j+OBq+W/nOOBmOOBpuWGhemDqOOBp1BhcnNlU3RyaW5nKCksIFBhcnNlT2JqZWN0KCksIFBhcnNlQXJyYXkoKeOCkuWRvOOBtlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxyXG4gICAgICAgICAqIEBwYXJhbSAgIGxlbmd0aCAgICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxyXG4gICAgICAgICAqIEByZXR1cm4gICAgICDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbzogVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XHJcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gYnVmZmVyW2ldO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWZ0ZXJTdHJpbmc6IHN0cmluZ1tdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gYnVmZmVyLmluZGV4T2YoYWZ0ZXJTdHJpbmdbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25GbG9hdChmKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpzb25TdHJpbmcodGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcykpOyAvLyBcXFwi44Gu5qyh44Gu5paH5a2X44GL44KJXHJcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcclxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZUFycmF5KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgbnVsbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOiAvLyB0cnVl5Lul5aSW44Gr44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4udHJ1ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHRydWVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmJzogLy8gZmFsc2Xku6XlpJbjgavjgarjgYRcclxuICAgICAgICAgICAgICAgICAgICBpZihpICsgNCA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi5mYWxzZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xyXG4gICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGk7ICAvLyDlkIzjgZjmloflrZfjgpLlho3lh6bnkIZcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgdmFsdWVcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxyXG4gICAgICAgICAqICAgICAgXHJcbiAgICAgICAgICogQHBhcmFtICAgc3RyaW5nICAtPiAg44OR44O844K55a++6LGh44Gu5paH5a2X5YiXXHJcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXHJcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAtPiAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtICBvdXRFbmRQb3MgICAtPiAg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VTdHJpbmcoc3RyaW5nOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcclxuICAgICAgICAgICAgbGV0IGM6IHN0cmluZywgYzI6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IHJldDogY3NtU3RyaW5nID0gbmV3IGNzbVN0cmluZyhcIlwiKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxyXG5cclxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYyA9IHN0cmluZ1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOuOAgC8vIOe1guerr+OBruKAneOAgeOCqOOCueOCseODvOODl+aWh+Wtl+OBr+WIpeOBq+WHpueQhuOBleOCjOOCi+OBruOBp+OBk+OBk+OBq+adpeOBquOBhFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxOyAgLy8g4oCd44Gu5qyh44Gu5paH5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJy8vJzogIC8vIOOCqOOCueOCseODvOODl+OBruWgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrOyAvLyDvvJLmloflrZfjgpLjgrvjg4Pjg4jjgafmibHjgYZcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmU3RhcnQgPSBpICsgMTsgLy8g44Ko44K544Kx44O844OX77yI77yS5paH5a2XKeOBruasoeOBruaWh+Wtl+OBi+OCiVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMiA9IHN0cmluZ1tpXTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcXCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvdW5pY29yZCBlc2NhcGUgbm90IHN1cHBvcnRlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2lsbGVnYWwgZW5kXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZU9iamVjdChidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBKc29uTWFwID0gbmV3IEpzb25NYXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEtleTogVmFsdWVcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kUG9zMjogbnVtYmVyW10gPSBBcnJheSgxKTtcclxuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xyXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QOyAvLy0tIGxvb3DjgYvjgonlh7rjgotcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDnqbpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJzonIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFvaylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwia2V5IG5vdCBmb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cclxuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJ30nIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICcgJzogY2FzZSAnXFx0JyA6IGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5fjgZnjgovmloflrZdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIW9rKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCInOicgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5YCk44KS44OB44Kn44OD44KvXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0LnB1dChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgRk9SX0xPT1AzOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh44Gu44CMXCLjgI3jgb7jgafjga7mloflrZfliJfjgpLjg5Hjg7zjgrnjgZnjgovjgIJcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgLy8ga2V5IDogdmFsdWVcclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRwb3MyOiBudW1iZXJbXSA9IG5ldyBBcnJheSgxKTtcclxuXHJcbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXHJcbiAgICAgICAgICAgIGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gOiDjgpLjg4Hjgqfjg4Pjgq9cclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBsZW5ndGgsIGksIGxvY2FsUmV0RW5kcG9zMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRwb3MyWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcclxuICAgICAgICAgICAgICAgIC8vIGJvb2xlYW4gYnJlYWtmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7IC8vIOasoeOBrktFWSwgVkFsVUXjgbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3RoaXMuX2xpbmVDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FzZSAnICc6IGNhc2UgJ1xcdCc6IGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIOOCueOCreODg+ODl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGFyc2VPYmplY3RcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfZXJyb3I6IHN0cmluZzsgICAgIC8vIOODkeODvOOCueaZguOBruOCqOODqeODvFxyXG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXHJcbiAgICAgICAgX3Jvb3Q6IFZhbHVlOyAgICAgICAvLyDjg5Hjg7zjgrnjgZXjgozjgZ/jg6vjg7zjg4jopoHntKBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJmbG9hdOWApOOBqOOBl+OBpuaJseOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkZsb2F0IGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRmxvYXQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmJ1ZjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl92YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwLjApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gaW50XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yb3VuZCh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZmxvYXRcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkJvb2xlYW4gZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvQm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9ib29sVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImZhbHNlXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX2Jvb2xWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Jvb2xWYWx1ZSA9IHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdHJ1ZVZhbHVlOiBKc29uQm9vbGVhbjsgIC8vIHRydWVcclxuICAgICAgICBzdGF0aWMgZmFsc2VWYWx1ZTogSnNvbkJvb2xlYW47IC8vIGZhbHNlXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2Jvb2xWYWx1ZTogYm9vbGVhbjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLmloflrZfliJfjgajjgZfjgabmibHjgYZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25TdHJpbmcgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBjc21TdHJpbmcpXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzLnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9zdHJpbmdCdWZmZXIgPT0gdmFsdWUucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uRXJyb3IgZXh0ZW5kcyBKc29uU3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCqOODqeODvOaDheWgseOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoXCJzdHJpbmdcIiA9PT0gdHlwZW9mKHMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhdGljID0gaXNTdGF0aWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOOCqOODqeODvOWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX2lzU3RhdGljOiBib29sZWFuOyAvLyDpnZnnmoTjgapWYWx1ZeOBi+OBqeOBhuOBi1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkk5VTEzlgKTjgajjgZfjgabmjIHjgaRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25OdWxsdmFsdWUgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GMTlVMTOWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBcIk51bGxWYWx1ZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS6YWN5YiX44Go44GX44Gm5oyB44GkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJheSA9IG5ldyBjc21WZWN0b3I8VmFsdWU+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2ICYmICF2LmlzU3RhdGljKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzphY3liJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9hcnJheS5nZXRTaXplKCkgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9JTkRFWF9PRl9CT1VORFMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdjogVmFsdWUgPSB0aGlzLl9hcnJheS5hdChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogY3NtVmVjdG9yX2l0ZXJhdG9yPFZhbHVlPiA9IHRoaXMuX2FycmF5LmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9hcnJheS5lbmQoKSk7IGl0ZS5pbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwiXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiBcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJpbmdCdWZmZXIgKyBpbmRlbnQgKyBcIl1cXG5cIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDphY3liJfopoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWRkKHY6IFZhbHVlKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYXJyYXkucHVzaEJhY2sodik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoY3NtVmVjdG9yPFZhbHVlPilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZTogY3NtVmVjdG9yPFZhbHVlPiA9IG51bGwpOiBjc21WZWN0b3I8VmFsdWU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjga7mlbDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheS5nZXRTaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9hcnJheTogY3NtVmVjdG9yPFZhbHVlPjsgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbk1hcCBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBjc21NYXA8c3RyaW5nLCBWYWx1ZT4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjE1hcOWei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmV0OiBWYWx1ZSA9IHRoaXMuX21hcC5nZXRWYWx1ZShzLnMpO1xyXG4gICAgICAgICAgICAgICAgaWYocmV0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5maXJzdCA9PSBzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZXIucHRyKCkuc2Vjb25kID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlci5wdHIoKS5zZWNvbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbaW5kZXhdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBpbmRlbnQgKyBcIntcXG5cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCkuc2Vjb25kO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xyXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJ9XFxuXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KSTWFw5Z6L44Gn6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHV0KGtleTogc3RyaW5nLCB2OiBWYWx1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXRWYWx1ZShrZXksIHYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFw44GL44KJ44Kt44O844Gu44Oq44K544OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEtleXMoKTogY3NtVmVjdG9yPHN0cmluZz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBpdGUucHRyKCkuZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcOOBruimgee0oOaVsOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfbWFwOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT47ICAgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgICAgIHByaXZhdGUgX2tleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAgICAgICAgICAgICAgIC8vIEpTT07opoHntKDjga7lgKRcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=