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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/motion/cubismmotionqueuemanager.ts");
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

/***/ "./Framework/motion/acubismmotion.ts":
/*!*******************************************!*\
  !*** ./Framework/motion/acubismmotion.ts ***!
  \*******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmath */ "./Framework/math/cubismmath.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */



var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
var CubismMath = _math_cubismmath__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMath;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モーションの抽象基底クラス
     *
     * モーションの抽象基底クラス。MotionQueueManagerによってモーションの再生を管理する。
     */
    var ACubismMotion = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function ACubismMotion() {
            this._fadeInSeconds = -1.0;
            this._fadeOutSeconds = -1.0;
            this._weight = 1.0;
            this._offsetSeconds = 0.0; // 再生の開始時刻
            this._firedEventValues = new csmVector();
        }
        /**
         * インスタンスの破棄
         */
        ACubismMotion.delete = function (motion) {
            motion.release();
            motion = void 0;
            motion = null;
        };
        /**
         * デストラクタ相当の処理
         */
        ACubismMotion.prototype.release = function () {
            this._weight = 0.0;
        };
        /**
         * モデルのパラメータ
         * @param model 対象のモデル
         * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
         * @param userTimeSeconds デルタ時間の積算値[秒]
         */
        ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
            if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
                return;
            }
            if (!motionQueueEntry.isStarted()) {
                motionQueueEntry.setIsStarted(true);
                motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds); // モーションの開始時刻を記録
                motionQueueEntry.setFadeInStartTime(userTimeSeconds); // フェードインの開始時刻
                var duration = this.getDuration();
                if (motionQueueEntry.getEndTime() < 0) {
                    // 開始していないうちに終了設定している場合がある。
                    motionQueueEntry.setEndTime((duration <= 0) ? -1 : motionQueueEntry.getStartTime() + duration);
                    // duration == -1 の場合はループする
                }
            }
            var fadeWeight = this._weight; // 現在の値と掛け合わせる割合
            //---- フェードイン・アウトの処理 ----
            // 単純なサイン関数でイージングする
            var fadeIn = this._fadeInSeconds == 0.0
                ? 1.0
                : CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) / this._fadeInSeconds);
            var fadeOut = (this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0)
                ? 1.0
                : CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) / this._fadeOutSeconds);
            fadeWeight = fadeWeight * fadeIn * fadeOut;
            motionQueueEntry.setState(userTimeSeconds, fadeWeight);
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_2__["CSM_ASSERT"])(0.0 <= fadeWeight && fadeWeight <= 1.0);
            //---- 全てのパラメータIDをループする ----
            this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
            // 後処理
            // 終了時刻を過ぎたら終了フラグを立てる(CubismMotionQueueManager)
            if ((motionQueueEntry.getEndTime() > 0) && (motionQueueEntry.getEndTime() < userTimeSeconds)) {
                motionQueueEntry.setIsFinished(true); // 終了
            }
        };
        /**
         * フェードインの時間を設定する
         * @param fadeInSeconds フェードインにかかる時間[秒]
         */
        ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
            this._fadeInSeconds = fadeInSeconds;
        };
        /**
         * フェードアウトの時間を設定する
         * @param fadeOutSeconds フェードアウトにかかる時間[秒]
         */
        ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
            this._fadeOutSeconds = fadeOutSeconds;
        };
        /**
         * フェードアウトにかかる時間の取得
         * @return フェードアウトにかかる時間[秒]
         */
        ACubismMotion.prototype.getFadeOutTime = function () {
            return this._fadeOutSeconds;
        };
        /**
         * フェードインにかかる時間の取得
         * @return フェードインにかかる時間[秒]
         */
        ACubismMotion.prototype.getFadeInTime = function () {
            return this._fadeInSeconds;
        };
        /**
         * モーション適用の重みの設定
         * @param weight 重み（0.0 - 1.0）
         */
        ACubismMotion.prototype.setWeight = function (weight) {
            this._weight = weight;
        };
        /**
         * モーション適用の重みの取得
         * @return 重み（0.0 - 1.0）
         */
        ACubismMotion.prototype.getWeight = function () {
            return this._weight;
        };
        /**
         * モーションの長さの取得
         * @return モーションの長さ[秒]
         *
         * @note ループの時は「-1」。
         *       ループでない場合は、オーバーライドする。
         *       正の値の時は取得される時間で終了する。
         *       「-1」の時は外部から停止命令がない限り終わらない処理となる。
         */
        ACubismMotion.prototype.getDuration = function () {
            return -1.0;
        };
        /**
         * モーションのループ1回分の長さの取得
         * @return モーションのループ一回分の長さ[秒]
         *
         * @note ループしない場合は、getDuration()と同じ値を返す
         *       ループ一回分の長さが定義できない場合(プログラム的に動き続けるサブクラスなど)の場合は「-1」を返す
         */
        ACubismMotion.prototype.getLoopDuration = function () {
            return -1.0;
        };
        /**
         * モーション再生の開始時刻の設定
         * @param offsetSeconds モーション再生の開始時刻[秒]
         */
        ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
            this._offsetSeconds = offsetSeconds;
        };
        /**
         * モデルのパラメータ更新
         *
         * イベント発火のチェック。
         * 入力する時間は呼ばれるモーションタイミングを０とした秒数で行う。
         *
         * @param beforeCheckTimeSeconds 前回のイベントチェック時間[秒]
         * @param motionTimeSeconds 今回の再生時間[秒]
         */
        ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
            return this._firedEventValues;
        };
        return ACubismMotion;
    }());
    Live2DCubismFramework.ACubismMotion = ACubismMotion;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/cubismmotionqueueentry.ts":
/*!****************************************************!*\
  !*** ./Framework/motion/cubismmotionqueueentry.ts ***!
  \****************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _acubismmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acubismmotion */ "./Framework/motion/acubismmotion.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var ACubismMotion = _acubismmotion__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].ACubismMotion;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * CubismMotionQueueManagerで再生している各モーションの管理クラス。
     */
    var CubismMotionQueueEntry = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMotionQueueEntry() {
            this._autoDelete = false;
            this._motion = null;
            this._available = true;
            this._finished = false;
            this._started = false;
            this._startTimeSeconds = -1.0;
            this._fadeInStartTimeSeconds = 0.0;
            this._endTimeSeconds = -1.0;
            this._stateTimeSeconds = 0.0;
            this._stateWeight = 0.0;
            this._lastEventCheckSeconds = 0.0;
            this._motionQueueEntryHandle = this;
        }
        /**
         * デストラクタ相当の処理
         */
        CubismMotionQueueEntry.prototype.release = function () {
            if (this._autoDelete && this._motion) {
                ACubismMotion.delete(this._motion); //
            }
        };
        /**
         * フェードアウトの開始
         * @param fadeOutSeconds フェードアウトにかかる時間[秒]
         * @param userTimeSeconds デルタ時間の積算値[秒]
         */
        CubismMotionQueueEntry.prototype.startFadeout = function (fadeoutSeconds, userTimeSeconds) {
            var newEndTimeSeconds = userTimeSeconds + fadeoutSeconds;
            if (this._endTimeSeconds < 0.0 || newEndTimeSeconds < this._endTimeSeconds) {
                this._endTimeSeconds = newEndTimeSeconds;
            }
        };
        /**
         * モーションの終了の確認
         *
         * @return true モーションが終了した
         * @return false 終了していない
         */
        CubismMotionQueueEntry.prototype.isFinished = function () {
            return this._finished;
        };
        /**
         * モーションの開始の確認
         * @return true モーションが開始した
         * @return false 開始していない
         */
        CubismMotionQueueEntry.prototype.isStarted = function () {
            return this._started;
        };
        /**
         * モーションの開始時刻の取得
         * @return モーションの開始時刻[秒]
         */
        CubismMotionQueueEntry.prototype.getStartTime = function () {
            return this._startTimeSeconds;
        };
        /**
         * フェードインの開始時刻の取得
         * @return フェードインの開始時刻[秒]
         */
        CubismMotionQueueEntry.prototype.getFadeInStartTime = function () {
            return this._fadeInStartTimeSeconds;
        };
        /**
         * フェードインの終了時刻の取得
         * @return フェードインの終了時刻の取得
         */
        CubismMotionQueueEntry.prototype.getEndTime = function () {
            return this._endTimeSeconds;
        };
        /**
         * モーションの開始時刻の設定
         * @param startTime モーションの開始時刻
         */
        CubismMotionQueueEntry.prototype.setStartTime = function (startTime) {
            this._startTimeSeconds = startTime;
        };
        /**
         * フェードインの開始時刻の設定
         * @param startTime フェードインの開始時刻[秒]
         */
        CubismMotionQueueEntry.prototype.setFadeInStartTime = function (startTime) {
            this._fadeInStartTimeSeconds = startTime;
        };
        /**
         * フェードインの終了時刻の設定
         * @param endTime フェードインの終了時刻[秒]
         */
        CubismMotionQueueEntry.prototype.setEndTime = function (endTime) {
            this._endTimeSeconds = endTime;
        };
        /**
         * モーションの終了の設定
         * @param f trueならモーションの終了
         */
        CubismMotionQueueEntry.prototype.setIsFinished = function (f) {
            this._finished = f;
        };
        /**
         * モーション開始の設定
         * @param f trueならモーションの開始
         */
        CubismMotionQueueEntry.prototype.setIsStarted = function (f) {
            this._started = f;
        };
        /**
         * モーションの有効性の確認
         * @return true モーションは有効
         * @return false モーションは無効
         */
        CubismMotionQueueEntry.prototype.isAvailable = function () {
            return this._available;
        };
        /**
         * モーションの有効性の設定
         * @param v trueならモーションは有効
         */
        CubismMotionQueueEntry.prototype.setIsAvailable = function (v) {
            this._available = v;
        };
        /**
         * モーションの状態の設定
         * @param timeSeconds 現在時刻[秒]
         * @param weight モーション尾重み
         */
        CubismMotionQueueEntry.prototype.setState = function (timeSeconds, weight) {
            this._stateTimeSeconds = timeSeconds;
            this._stateWeight = weight;
        };
        /**
         * モーションの現在時刻の取得
         * @return モーションの現在時刻[秒]
         */
        CubismMotionQueueEntry.prototype.getStateTime = function () {
            return this._stateTimeSeconds;
        };
        /**
         * モーションの重みの取得
         * @return モーションの重み
         */
        CubismMotionQueueEntry.prototype.getStateWeight = function () {
            return this._stateWeight;
        };
        /**
         * 最後にイベントの発火をチェックした時間を取得
         *
         * @return 最後にイベントの発火をチェックした時間[秒]
         */
        CubismMotionQueueEntry.prototype.getLastCheckEventTime = function () {
            return this._lastEventCheckSeconds;
        };
        /**
         * 最後にイベントをチェックした時間を設定
         * @param checkTime 最後にイベントをチェックした時間[秒]
         */
        CubismMotionQueueEntry.prototype.setLastCheckEventTime = function (checkTime) {
            this._lastEventCheckSeconds = checkTime;
        };
        return CubismMotionQueueEntry;
    }());
    Live2DCubismFramework.CubismMotionQueueEntry = CubismMotionQueueEntry;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/motion/cubismmotionqueuemanager.ts":
/*!******************************************************!*\
  !*** ./Framework/motion/cubismmotionqueuemanager.ts ***!
  \******************************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubismmotionqueueentry */ "./Framework/motion/cubismmotionqueueentry.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmVector;
var CubismMotionQueueEntry = _cubismmotionqueueentry__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMotionQueueEntry;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モーション再生の管理
     *
     * モーション再生の管理用クラス。CubismMotionモーションなどACubismMotionのサブクラスを再生するために使用する。
     *
     * @note 再生中に別のモーションが StartMotion()された場合は、新しいモーションに滑らかに変化し旧モーションは中断する。
     *       表情用モーション、体用モーションなどを分けてモーション化した場合など、
     *       複数のモーションを同時に再生させる場合は、複数のCubismMotionQueueManagerインスタンスを使用する。
     */
    var CubismMotionQueueManager = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMotionQueueManager() {
            this._userTimeSeconds = 0.0;
            this._eventCallBack = null;
            this._eventCustomData = null;
            this._motions = new csmVector();
        }
        /**
         * デストラクタ
         */
        CubismMotionQueueManager.prototype.release = function () {
            for (var i = 0; i < this._motions.getSize(); ++i) {
                if (this._motions.at(i)) {
                    this._motions.at(i).release();
                    this._motions.set(i, void 0);
                    this._motions.set(i, null);
                }
            }
            this._motions = null;
        };
        /**
         * 指定したモーションの開始
         *
         * 指定したモーションを開始する。同じタイプのモーションが既にある場合は、既存のモーションに終了フラグを立て、フェードアウトを開始させる。
         *
         * @param   motion          開始するモーション
         * @param   autoDelete      再生が終了したモーションのインスタンスを削除するなら true
         * @param   userTimeSeconds デルタ時間の積算値[秒]
         * @return                      開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するIsFinished()の引数で使用する。開始できない時は「-1」
         */
        CubismMotionQueueManager.prototype.startMotion = function (motion, autoDelete, userTimeSeconds) {
            if (motion == null) {
                return Live2DCubismFramework.InvalidMotionQueueEntryHandleValue;
            }
            var motionQueueEntry = null;
            // 既にモーションがあれば終了フラグを立てる
            for (var i = 0; i < this._motions.getSize(); ++i) {
                motionQueueEntry = this._motions.at(i);
                if (motionQueueEntry == null) {
                    continue;
                }
                motionQueueEntry.startFadeout(motionQueueEntry._motion.getFadeOutTime(), userTimeSeconds); // フェードアウトを開始し終了する
            }
            motionQueueEntry = new CubismMotionQueueEntry(); // 終了時に破棄する
            motionQueueEntry._autoDelete = autoDelete;
            motionQueueEntry._motion = motion;
            this._motions.pushBack(motionQueueEntry);
            return motionQueueEntry._motionQueueEntryHandle;
        };
        /**
         * 全てのモーションの終了の確認
         * @return true 全て終了している
         * @return false 終了していない
         */
        CubismMotionQueueManager.prototype.isFinished = function () {
            // ------- 処理を行う -------
            // 既にモーションがあれば終了フラグを立てる
            for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                var motionQueueEntry = ite.ptr();
                if (motionQueueEntry == null) {
                    ite = this._motions.erase(ite); // 削除
                    continue;
                }
                var motion = motionQueueEntry._motion;
                if (motion == null) {
                    motionQueueEntry.release();
                    motionQueueEntry = void 0;
                    motionQueueEntry = null;
                    ite = this._motions.erase(ite); // 削除
                    continue;
                }
                // ----- 終了済みの処理があれば削除する ------
                if (!motionQueueEntry.isFinished()) {
                    return false;
                }
                else {
                    ite.preIncrement();
                }
            }
            return true;
        };
        /**
         * 指定したモーションの終了の確認
         * @param motionQueueEntryNumber モーションの識別番号
         * @return true 全て終了している
         * @return false 終了していない
         */
        CubismMotionQueueManager.prototype.isFinishedByHandle = function (motionQueueEntryNumber) {
            // 既にモーションがあれば終了フラグを立てる
            for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()) {
                var motionQueueEntry = ite.ptr();
                if (motionQueueEntry == null) {
                    continue;
                }
                if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber && !motionQueueEntry.isFinished()) {
                    return false;
                }
            }
            return true;
        };
        /**
         * 全てのモーションを停止する
         */
        CubismMotionQueueManager.prototype.stopAllMotions = function () {
            // ------- 処理を行う -------
            // 既にモーションがあれば終了フラグを立てる
            for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                var motionQueueEntry = ite.ptr();
                if (motionQueueEntry == null) {
                    ite = this._motions.erase(ite);
                    continue;
                }
                // ----- 終了済みの処理があれば削除する ------
                motionQueueEntry.release();
                motionQueueEntry = void 0;
                motionQueueEntry = null;
                ite = this._motions.erase(ite); // 削除
            }
        };
        /**
         * 指定したCubismMotionQueueEntryの取得

         * @param   motionQueueEntryNumber  モーションの識別番号
         * @return  指定したCubismMotionQueueEntry
         * @return  null   見つからなかった
         */
        CubismMotionQueueManager.prototype.getCubismMotionQueueEntry = function (motionQueueEntryNumber) {
            //------- 処理を行う -------
            // 既にモーションがあれば終了フラグを立てる
            for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()) {
                var motionQueueEntry = ite.ptr();
                if (motionQueueEntry == null) {
                    continue;
                }
                if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
                    return motionQueueEntry;
                }
            }
            return null;
        };
        /**
         * イベントを受け取るCallbackの登録
         *
         * @param callback コールバック関数
         * @param customData コールバックに返されるデータ
         */
        CubismMotionQueueManager.prototype.setEventCallback = function (callback, customData) {
            if (customData === void 0) { customData = null; }
            this._eventCallBack = callback;
            this._eventCustomData = customData;
        };
        /**
         * モーションを更新して、モデルにパラメータ値を反映する。
         *
         * @param   model   対象のモデル
         * @param   userTimeSeconds   デルタ時間の積算値[秒]
         * @return  true    モデルへパラメータ値の反映あり
         * @return  false   モデルへパラメータ値の反映なし(モーションの変化なし)
         */
        CubismMotionQueueManager.prototype.doUpdateMotion = function (model, userTimeSeconds) {
            var updated = false;
            // ------- 処理を行う --------
            // 既にモーションがあれば終了フラグを立てる
            for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
                var motionQueueEntry = ite.ptr();
                if (motionQueueEntry == null) {
                    ite = this._motions.erase(ite); // 削除
                    continue;
                }
                var motion = motionQueueEntry._motion;
                if (motion == null) {
                    motionQueueEntry.release();
                    motionQueueEntry = void 0;
                    motionQueueEntry = null;
                    ite = this._motions.erase(ite); // 削除
                    continue;
                }
                // ------ 値を反映する ------
                motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
                updated = true;
                // ------ ユーザトリガーイベントを検査する ----
                var firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventTime() - motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
                for (var i = 0; i < firedList.getSize(); ++i) {
                    this._eventCallBack(this, firedList.at(i), this._eventCustomData);
                }
                motionQueueEntry.setLastCheckEventTime(userTimeSeconds);
                // ------ 終了済みの処理があれば削除する ------
                if (motionQueueEntry.isFinished()) {
                    motionQueueEntry.release();
                    motionQueueEntry = void 0;
                    motionQueueEntry = null;
                    ite = this._motions.erase(ite); // 削除
                }
                else {
                    ite.preIncrement();
                }
            }
            return updated;
        };
        return CubismMotionQueueManager;
    }());
    Live2DCubismFramework.CubismMotionQueueManager = CubismMotionQueueManager;
    Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtbWFwLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc212ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztFQUtFO0FBRUYsMERBQTBEO0FBQzFELGFBQWE7QUFDYiwwREFBMEQ7QUFFMUQsdUNBQXVDO0FBQ3ZDLFlBQVk7QUFDTCxJQUFNLHFCQUFxQixHQUFXLENBQUMsQ0FBQztBQUMvQyxjQUFjO0FBQ1AsSUFBTSxtQkFBbUIsR0FBVyxDQUFDLENBQUM7QUFDN0MsY0FBYztBQUNQLElBQU0sa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO0FBQzVDLFlBQVk7QUFDTCxJQUFNLHFCQUFxQixHQUFXLENBQUMsQ0FBQztBQUMvQyxhQUFhO0FBQ04sSUFBTSxtQkFBbUIsR0FBVyxDQUFDLENBQUM7QUFDN0MsWUFBWTtBQUNMLElBQU0saUJBQWlCLEdBQVcsQ0FBQyxDQUFDO0FBRTNDOzs7OztFQUtFO0FBQ0ssSUFBTSxhQUFhLEdBQVcscUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQjNEO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRWtFO0FBQ3JFLElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRWhDLElBQVUscUJBQXFCLENBK0VyQztBQS9FRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBVUk7O1dBRUc7UUFDSCxrQkFBbUIsRUFBc0I7WUFFckMsSUFBRyxPQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUMxQjtnQkFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBcEJEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQWdCRDs7OztXQUlHO1FBQ0ksMEJBQU8sR0FBZCxVQUFlLENBQWdDO1lBRTNDLElBQUksT0FBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFDMUI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFDSSxJQUFJLENBQUMsWUFBWSxTQUFTLEVBQy9CO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO2lCQUNJLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFDOUI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2QkFBVSxHQUFqQixVQUFrQixDQUFnQztZQUU5QyxJQUFJLE9BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQ3pCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFDSSxJQUFJLENBQUMsWUFBWSxTQUFTLEVBQy9CO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQ0ksSUFBSSxDQUFDLFlBQVksUUFBUSxFQUM5QjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFHTCxlQUFDO0lBQUQsQ0FBQztJQXJFWSw4QkFBUSxXQXFFcEI7QUFHTCxDQUFDLEVBL0VnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBK0VyQzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztFQUtFO0FBRW1FO0FBQ1I7QUFHN0QsSUFBTyxRQUFRLEdBQUcsK0RBQVEsQ0FBQyxRQUFRLENBQUM7QUFDcEMsSUFBTyxTQUFTLEdBQUcscUVBQVMsQ0FBQyxTQUFTLENBQUM7QUFFaEMsSUFBVSxxQkFBcUIsQ0FvSHJDO0FBcEhELFdBQWlCLHFCQUFxQjtJQUVsQzs7OztPQUlHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBWSxDQUFDO1FBQzFDLENBQUM7UUFFRDs7V0FFRztRQUNJLGlDQUFPLEdBQWQ7WUFFSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxxQ0FBVyxHQUFsQixVQUFtQixHQUEyQjtZQUUxQyxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDMUM7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksb0NBQVUsR0FBakIsVUFBa0IsRUFBc0I7WUFFcEMsSUFBSSxNQUFNLEdBQWEsSUFBSSxDQUFDO1lBRTVCLElBQUksUUFBUSxJQUFJLE9BQU0sQ0FBQyxFQUFFLENBQUMsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUN0QztvQkFDSSxPQUFPLE1BQU0sQ0FBQztpQkFDakI7Z0JBRUQsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtpQkFFRDtnQkFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwrQkFBSyxHQUFaLFVBQWEsRUFBc0I7WUFFL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGlDQUFPLEdBQWQsVUFBZSxFQUFzQjtZQUVqQyxJQUFJLFFBQVEsSUFBSSxPQUFNLENBQUMsRUFBRSxDQUFDLEVBQzFCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSyxnQ0FBTSxHQUFkLFVBQWUsRUFBVTtZQUVyQixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkQ7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzFDO29CQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBR0wsc0JBQUM7SUFBRCxDQUFDO0lBNUdZLHFDQUFlLGtCQTRHM0I7QUFDTCxDQUFDLEVBcEhnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBb0hyQzs7Ozs7Ozs7Ozs7OztBQ2xJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVILHNEQUFzRDtBQUNpQjtBQUNPO0FBQ0s7QUFDSDtBQUNoRixJQUFPLEtBQUssR0FBRyx1RUFBVSxDQUFDLEtBQUssQ0FBQztBQUNoQyxJQUFPLGVBQWUsR0FBRyx5RUFBZSxDQUFDLGVBQWUsQ0FBQztBQUN6RCxJQUFPLGNBQWMsR0FBRywrRUFBYyxDQUFDLGNBQWMsQ0FBQztBQUUvQyxTQUFTLE1BQU0sQ0FBQyxDQUFTLEVBQUUsTUFBZ0I7SUFFOUMsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxHQUFJLENBQUMsRUFBRSxFQUM1QjtRQUNJLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0Qyx5QkFBeUI7UUFDekIsSUFBRyxLQUFLLElBQUUsR0FBRyxJQUFJLEtBQUssSUFBRSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsRUFDM0M7WUFDSSxTQUFTO1NBQ1o7UUFFSixlQUFlO1FBQ1osSUFBSSxJQUFJLEdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNoQjtZQUNBLHFCQUFxQjtZQUNqQixNQUFNO1NBQ1Q7UUFFTCwwQkFBMEI7UUFDdEIsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBQ0QsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVTtJQUVsQyxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDWDtRQUNDLHFCQUFxQjtRQUNsQixDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1g7SUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFFckMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRU0sSUFBVSxxQkFBcUIsQ0FvT3JDO0FBcE9ELFdBQWlCLHFCQUFxQjtJQUVsQyxrQkFBa0I7SUFFbEIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO0lBQ2pDLElBQUksZUFBZSxHQUFZLEtBQUssQ0FBQztJQUNyQyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUM7SUFDNUIsSUFBSSxpQkFBaUIsR0FBb0IsSUFBSSxDQUFDO0lBRTlDOztPQUVHO0lBQ0gsSUFBaUIsUUFBUSxDQUl4QjtJQUpELFdBQWlCLFFBQVE7UUFFUixxQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFLLGdCQUFnQjtRQUM5QyxtQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFPLGVBQWU7SUFDOUQsQ0FBQyxFQUpnQixRQUFRLEdBQVIsOEJBQVEsS0FBUiw4QkFBUSxRQUl4QjtJQUVELFNBQWdCLFNBQVMsQ0FBSSxPQUFVO1FBRW5DLElBQUcsQ0FBQyxPQUFPLEVBQ1g7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVJlLCtCQUFTLFlBUXhCO0lBRUQ7OztPQUdHO0lBQ0g7UUEyTEk7OztXQUdHO1FBQ0g7UUFHQSxDQUFDO1FBaE1EOzs7Ozs7OztXQVFHO1FBQ1csdUJBQU8sR0FBckIsVUFBc0IsTUFBcUI7WUFBckIsc0NBQXFCO1lBRXZDLElBQUcsV0FBVyxFQUNkO2dCQUNJLHdFQUFhLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxXQUFXLENBQUM7YUFDdEI7WUFFRCxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBRWxCLElBQUcsUUFBUSxJQUFJLElBQUksRUFDbkI7Z0JBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRTtZQUVELFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFbkIsK0JBQStCO1lBQy9CLElBQUcsV0FBVyxFQUNkO2dCQUNJLElBQU0sT0FBTyxHQUFXLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDakUsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFNLGFBQWEsR0FBVyxPQUFPLENBQUM7Z0JBRXRDLHdFQUFhLENBQUMsK0NBQStDLEVBQ3pELENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFCLGFBQWEsQ0FDaEIsQ0FBQzthQUNMO1lBRUQsd0VBQWEsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBRXhELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7O1dBR0c7UUFDVyx1QkFBTyxHQUFyQjtZQUVJLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO1FBRUQ7OztXQUdHO1FBQ1csMEJBQVUsR0FBeEI7WUFFSSxxRUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hCLElBQUcsQ0FBQyxXQUFXLEVBQ2Y7Z0JBQ0ksMkVBQWdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBRUQscUNBQXFDO1lBQ3JDLHlCQUF5QjtZQUN6QiwyQ0FBMkM7WUFDM0MsSUFBSSxlQUFlLEVBQ25CO2dCQUNJLDJFQUFnQixDQUFDLDREQUE0RCxDQUFDLENBQUM7Z0JBQy9FLE9BQU87YUFDVjtZQUVELHNCQUFzQjtZQUN0QixLQUFLLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUV6QyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBRTFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFdkIsd0VBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRDs7OztXQUlHO1FBQ1csdUJBQU8sR0FBckI7WUFFSSxxRUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hCLElBQUcsQ0FBQyxXQUFXLEVBQ2Y7Z0JBQ0ksMkVBQWdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBRUQsc0NBQXNDO1lBQ3RDLHlDQUF5QztZQUN6QyxJQUFHLENBQUMsZUFBZSxFQUFLLHFCQUFxQjthQUM3QztnQkFDSSwyRUFBZ0IsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUV0QyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFFekIsK0JBQStCO1lBQy9CLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUvQixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRXhCLHdFQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBR0Q7OztXQUdHO1FBQ1cseUJBQVMsR0FBdkI7WUFFSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBRUQ7OztXQUdHO1FBQ1csNkJBQWEsR0FBM0I7WUFFSSxPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNXLCtCQUFlLEdBQTdCLFVBQThCLE9BQWU7WUFFekMsa0NBQWtDO1lBQ2xDLElBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFDaEQ7Z0JBQ0ksT0FBTzthQUNWO1lBRUQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDVywrQkFBZSxHQUE3QjtZQUVJLElBQUksUUFBUSxJQUFJLElBQUksRUFDcEI7Z0JBQ0ksT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ2pDLENBQUM7UUFFRDs7O1dBR0c7UUFDVyw0QkFBWSxHQUExQjtZQUVJLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsQ0FBQztRQVVMLHNCQUFDO0lBQUQsQ0FBQztJQW5NWSxxQ0FBZSxrQkFtTTNCO0FBQ0wsQ0FBQyxFQXBPZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9PckM7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDOztBQUVEOztHQUVHO0FBQ0gsSUFBWSxRQVFYO0FBUkQsV0FBWSxRQUFRO0lBRWhCLCtEQUFvQjtJQUNwQiwyREFBYztJQUNkLHlEQUFhO0lBQ2IsK0RBQWdCO0lBQ2hCLDJEQUFjO0lBQ2QsdURBQVksRUFBWSxTQUFTO0FBQ3JDLENBQUMsRUFSVyxRQUFRLEtBQVIsUUFBUSxRQVFuQjs7Ozs7Ozs7Ozs7OztBQzdTRDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVvRTtBQUN2RSxJQUFPLGFBQWEsR0FBRyxvRUFBYSxDQUFDLGFBQWEsQ0FBQztBQUU1QyxJQUFVLHFCQUFxQixDQXVOckM7QUF2TkQsV0FBaUIscUJBQXFCO0lBRWxDOztPQUVHO0lBQ0g7UUEwTUs7O1dBRUc7UUFDSDtRQUdBLENBQUM7UUE5TUY7Ozs7Ozs7V0FPRztRQUNJLGdCQUFLLEdBQVosVUFBYSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7WUFFaEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNmO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtpQkFDSSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQ3BCO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksZUFBSSxHQUFYLFVBQVksQ0FBUztZQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLHdCQUFhLEdBQXBCLFVBQXFCLEtBQWE7WUFFOUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNmO2dCQUNJLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7aUJBQ0ksSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNwQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQzthQUNkO1lBRUQsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksY0FBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWE7WUFFbEMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLGNBQUcsR0FBVixVQUFXLElBQVksRUFBRSxLQUFhO1lBRWxDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsS0FBSztnQkFDUCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQWUsR0FBdEIsVUFBdUIsT0FBZTtZQUVsQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQWUsR0FBdEIsVUFBdUIsTUFBYztZQUVqQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLDRCQUFpQixHQUF4QixVQUF5QixJQUFtQixFQUFFLEVBQWlCO1lBRTNELElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLEdBQUcsR0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBRTFCLE9BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDcEI7Z0JBQ0ksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO1lBRUQsT0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDbkI7Z0JBQ0ksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksNkJBQWtCLEdBQXpCLFVBQTBCLElBQW1CLEVBQUUsRUFBaUI7WUFFNUQsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3pCO2dCQUNJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUVLLDRCQUFpQixHQUF4QixVQUF5QixVQUFrQjtZQUV4QyxJQUFJLEdBQUcsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUU3QyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTdCLE9BQU8sR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQVNOLGlCQUFDO0lBQUQsQ0FBQztJQWpOWSxnQ0FBVSxhQWlOdEI7QUFDTCxDQUFDLEVBdk5nQixxQkFBcUIsS0FBckIscUJBQXFCLFFBdU5yQzs7Ozs7Ozs7Ozs7OztBQ2pPRDtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQThSckM7QUE5UkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksWUFBWTtZQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNXLHVCQUFRLEdBQXRCLFVBQXVCLENBQWUsRUFBRSxDQUFlLEVBQUUsR0FBaUI7WUFFdEUsSUFBSSxDQUFDLEdBQWlCLElBQUksWUFBWSxDQUNsQztnQkFDSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2FBQ3JCLENBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztZQUVsQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNsQztnQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNqQztvQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNqQzt3QkFDSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDL0M7aUJBQ0o7YUFDSjtZQUVELEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2xDO2dCQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQ0FBWSxHQUFuQjtZQUVJLElBQUksQ0FBQyxHQUFpQixJQUFJLFlBQVksQ0FDbEM7Z0JBQ0ksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRzthQUNyQixDQUNKLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksa0NBQVMsR0FBaEIsVUFBaUIsRUFBZ0I7WUFFN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGlDQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLGtDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksa0NBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHNDQUFhLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixHQUFXO1lBRXpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixHQUFXO1lBRXpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBVztZQUUvQixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRDs7V0FFRztRQUNJLHlDQUFnQixHQUF2QixVQUF3QixHQUFXO1lBRS9CLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDSSwwQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBUyxFQUFFLENBQVM7WUFFekMsSUFBSSxHQUFHLEdBQWlCLElBQUksWUFBWSxDQUNwQztnQkFDSSxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixDQUFDLEVBQU8sQ0FBQyxFQUFPLEdBQUcsRUFBSyxHQUFHO2FBQzlCLENBQ0osQ0FBQztZQUVGLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksa0NBQVMsR0FBaEIsVUFBaUIsQ0FBUyxFQUFFLENBQVM7WUFFakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixDQUFTO1lBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsQ0FBUztZQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBR0Q7Ozs7O1dBS0c7UUFDSSxzQ0FBYSxHQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUTtZQUVwQyxJQUFJLEdBQUcsR0FBaUIsSUFBSSxZQUFZLENBQ3BDO2dCQUNJLENBQUMsRUFBTyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxDQUFDLEVBQU8sR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7YUFDOUIsQ0FDSixDQUFDO1lBRUYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksOEJBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1lBRTdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0kseUNBQWdCLEdBQXZCLFVBQXdCLENBQWlCO1lBRXJDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRDs7V0FFRztRQUNJLDhCQUFLLEdBQVo7WUFFSSxJQUFJLFdBQVcsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUV2RCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9DO2dCQUNJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUVELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFHTCxxQkFBQztJQUFELENBQUM7SUF0Ulksb0NBQWMsaUJBc1IxQjtBQUNMLENBQUMsRUE5UmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE4UnJDOzs7Ozs7Ozs7Ozs7O0FDclNEO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBNEtyQztBQTVLRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBRUk7O1dBRUc7UUFDSCx1QkFBMEIsQ0FBVSxFQUFTLENBQVU7WUFBN0IsTUFBQyxHQUFELENBQUMsQ0FBUztZQUFTLE1BQUMsR0FBRCxDQUFDLENBQVM7WUFFbkQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFUixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFHLEdBQVYsVUFBVyxPQUFzQjtZQUU3QixJQUFJLEdBQUcsR0FBa0IsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksaUNBQVMsR0FBaEIsVUFBaUIsT0FBc0I7WUFFbkMsSUFBSSxHQUFHLEdBQWtCLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGdDQUFRLEdBQWYsVUFBZ0IsT0FBc0I7WUFFbEMsSUFBSSxHQUFHLEdBQWtCLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHdDQUFnQixHQUF2QixVQUF3QixNQUFjO1lBRWxDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxnQ0FBUSxHQUFmLFVBQWdCLE9BQXNCO1lBRWxDLElBQUksR0FBRyxHQUFrQixJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSx3Q0FBZ0IsR0FBdkIsVUFBd0IsTUFBYztZQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxpQ0FBUyxHQUFoQjtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksdUNBQWUsR0FBdEIsVUFBdUIsQ0FBZ0I7WUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFHLEdBQVYsVUFBVyxDQUFnQjtZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQ0FBUyxHQUFoQjtZQUVJLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTVFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDSSwrQkFBTyxHQUFkLFVBQWUsR0FBa0I7WUFFN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0ksa0NBQVUsR0FBakIsVUFBa0IsR0FBa0I7WUFFaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxvQkFBQztJQUFELENBQUM7SUFwS1ksbUNBQWEsZ0JBb0t6QjtBQUNMLENBQUMsRUE1S2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE0S3JDOzs7Ozs7Ozs7Ozs7O0FDbkxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVvRTtBQUlGO0FBQ25CO0FBQ2xELElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBSXZDLElBQU8sVUFBVSxHQUFHLHNFQUFVLENBQUMsVUFBVSxDQUFDO0FBRW5DLElBQVUscUJBQXFCLENBMk5yQztBQTNORCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBWUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFFLFVBQVU7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksU0FBUyxFQUFhLENBQUM7UUFDeEQsQ0FBQztRQXBCRDs7V0FFRztRQUNXLG9CQUFNLEdBQXBCLFVBQXFCLE1BQXFCO1lBRXRDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixDQUFDO1FBY0Q7O1dBRUc7UUFDSSwrQkFBTyxHQUFkO1lBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksd0NBQWdCLEdBQXZCLFVBQXdCLEtBQWtCLEVBQUUsZ0JBQXdDLEVBQUUsZUFBdUI7WUFFekcsSUFBRyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNuRTtnQkFDSSxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEVBQ2hDO2dCQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ3RGLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBYztnQkFFcEUsSUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU1QyxJQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFDcEM7b0JBQ0ksMkJBQTJCO29CQUMzQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztvQkFDL0YsMkJBQTJCO2lCQUM5QjthQUNKO1lBRUQsSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQjtZQUV2RCx5QkFBeUI7WUFDekIsbUJBQW1CO1lBQ25CLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxjQUFjLElBQUksR0FBRztnQkFDekMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVwSCxJQUFNLE9BQU8sR0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0csVUFBVSxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBRTNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFdkQscUVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUVuRCw0QkFBNEI7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFOUUsTUFBTTtZQUNOLCtDQUErQztZQUMvQyxJQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFDM0Y7Z0JBQ0ksZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzthQUM5QztRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBYSxHQUFwQixVQUFxQixhQUFxQjtZQUV0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQWMsR0FBckIsVUFBc0IsY0FBc0I7WUFFeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDMUMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHNDQUFjLEdBQXJCO1lBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVMsR0FBaEIsVUFBaUIsTUFBYztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0ksbUNBQVcsR0FBbEI7WUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSx1Q0FBZSxHQUF0QjtZQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHFDQUFhLEdBQXBCLFVBQXFCLGFBQXFCO1lBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLHFDQUFhLEdBQXBCLFVBQXFCLHNCQUE4QixFQUFFLGlCQUF5QjtZQUUxRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO1FBb0JMLG9CQUFDO0lBQUQsQ0FBQztJQW5OcUIsbUNBQWEsZ0JBbU5sQztBQUNMLENBQUMsRUEzTmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUEyTnJDOzs7Ozs7Ozs7Ozs7O0FDOU9EO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRW9FO0FBR3ZFLElBQU8sYUFBYSxHQUFHLG9FQUFhLENBQUMsYUFBYSxDQUFDO0FBRTVDLElBQVUscUJBQXFCLENBbU9yQztBQW5PRCxXQUFpQixxQkFBcUI7SUFFbEM7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztZQUNsQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7V0FFRztRQUNJLHdDQUFPLEdBQWQ7WUFFSSxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDbkM7Z0JBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3pDO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2Q0FBWSxHQUFuQixVQUFvQixjQUFzQixFQUFFLGVBQXVCO1lBRS9ELElBQU0saUJBQWlCLEdBQVcsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUVuRSxJQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQ3pFO2dCQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7YUFDNUM7UUFDTCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwyQ0FBVSxHQUFqQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDBDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxtREFBa0IsR0FBekI7WUFFSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUN4QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksMkNBQVUsR0FBakI7WUFFSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLDZDQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1lBRWpDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDdkMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLG1EQUFrQixHQUF6QixVQUEwQixTQUFpQjtZQUV2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwyQ0FBVSxHQUFqQixVQUFrQixPQUFlO1lBRTdCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ25DLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw4Q0FBYSxHQUFwQixVQUFxQixDQUFVO1lBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQixVQUFvQixDQUFVO1lBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksNENBQVcsR0FBbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUVEOzs7V0FHRztRQUNJLCtDQUFjLEdBQXJCLFVBQXNCLENBQVU7WUFFNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx5Q0FBUSxHQUFmLFVBQWdCLFdBQW1CLEVBQUUsTUFBYztZQUUvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQy9CLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwrQ0FBYyxHQUFyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHNEQUFxQixHQUE1QjtZQUVJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzREFBcUIsR0FBNUIsVUFBNkIsU0FBaUI7WUFFMUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztRQUM1QyxDQUFDO1FBZ0JMLDZCQUFDO0lBQUQsQ0FBQztJQTdOWSw0Q0FBc0IseUJBNk5sQztBQUNMLENBQUMsRUFuT2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFtT3JDOzs7Ozs7Ozs7Ozs7O0FDL09EO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFHc0Y7QUFDcEI7QUFLckUsSUFBTyxTQUFTLEdBQUcscUVBQVMsQ0FBQyxTQUFTLENBQUM7QUFFdkMsSUFBTyxzQkFBc0IsR0FBRyw2RUFBc0IsQ0FBQyxzQkFBc0IsQ0FBQztBQUd2RSxJQUFVLHFCQUFxQixDQW1VckM7QUFuVUQsV0FBaUIscUJBQXFCO0lBRWxDOzs7Ozs7OztPQVFHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQTBCLENBQUM7UUFDNUQsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMENBQU8sR0FBZDtZQUVJLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN2RDtnQkFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN0QjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7Ozs7Ozs7O1dBU0c7UUFDSSw4Q0FBVyxHQUFsQixVQUFtQixNQUFxQixFQUFFLFVBQW1CLEVBQUUsZUFBdUI7WUFFbEYsSUFBRyxNQUFNLElBQUksSUFBSSxFQUNqQjtnQkFDSSxPQUFPLHdEQUFrQyxDQUFDO2FBQzdDO1lBRUQsSUFBSSxnQkFBZ0IsR0FBMkIsSUFBSSxDQUFDO1lBRXBELHVCQUF1QjtZQUN2QixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDdkQ7Z0JBQ0ksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUcsZ0JBQWdCLElBQUksSUFBSSxFQUMzQjtvQkFDSSxTQUFTO2lCQUNaO2dCQUVELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7YUFDaEg7WUFFRCxnQkFBZ0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxXQUFXO1lBQzVELGdCQUFnQixDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDMUMsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUVsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7UUFDcEQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2Q0FBVSxHQUFqQjtZQUVJLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFFdkIsS0FBSSxJQUFJLEdBQUcsR0FBcUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FDeEc7Z0JBQ0ksSUFBSSxnQkFBZ0IsR0FBMkIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUV6RCxJQUFHLGdCQUFnQixJQUFJLElBQUksRUFDM0I7b0JBQ0ksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDckMsU0FBUztpQkFDWjtnQkFFRCxJQUFJLE1BQU0sR0FBa0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2dCQUVyRCxJQUFHLE1BQU0sSUFBSSxJQUFJLEVBQ2pCO29CQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixnQkFBZ0IsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO29CQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNyQyxTQUFTO2lCQUNaO2dCQUVELCtCQUErQjtnQkFDL0IsSUFBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNqQztvQkFDSSxPQUFPLEtBQUssQ0FBQztpQkFDaEI7cUJBRUQ7b0JBQ0ksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0kscURBQWtCLEdBQXpCLFVBQTBCLHNCQUFvRDtZQUUxRSx1QkFBdUI7WUFDdkIsS0FBSSxJQUFJLEdBQUcsR0FBcUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQ3hIO2dCQUNJLElBQUksZ0JBQWdCLEdBQTJCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFekQsSUFBRyxnQkFBZ0IsSUFBSSxJQUFJLEVBQzNCO29CQUNJLFNBQVM7aUJBQ1o7Z0JBRUQsSUFBRyxnQkFBZ0IsQ0FBQyx1QkFBdUIsSUFBSSxzQkFBc0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUN2RztvQkFDSSxPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGlEQUFjLEdBQXJCO1lBRUksd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUV2QixLQUFJLElBQUksR0FBRyxHQUFxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUN4RztnQkFDSSxJQUFJLGdCQUFnQixHQUEyQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXpELElBQUcsZ0JBQWdCLElBQUksSUFBSSxFQUMzQjtvQkFDSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9CLFNBQVM7aUJBQ1o7Z0JBRUQsK0JBQStCO2dCQUMvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSzthQUN4QztRQUNMLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSw0REFBeUIsR0FBaEMsVUFBaUMsc0JBQTJCO1lBRXhELHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIsS0FBSSxJQUFJLEdBQUcsR0FBcUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQzVIO2dCQUNJLElBQUksZ0JBQWdCLEdBQTJCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFekQsSUFBRyxnQkFBZ0IsSUFBSSxJQUFJLEVBQzNCO29CQUNJLFNBQVM7aUJBQ1o7Z0JBRUQsSUFBRyxnQkFBZ0IsQ0FBQyx1QkFBdUIsSUFBSSxzQkFBc0IsRUFDckU7b0JBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztpQkFDM0I7YUFDSjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLG1EQUFnQixHQUF2QixVQUF3QixRQUFtQyxFQUFFLFVBQXNCO1lBQXRCLDhDQUFzQjtZQUUvRSxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksaURBQWMsR0FBckIsVUFBc0IsS0FBa0IsRUFBRSxlQUF1QjtZQUU3RCxJQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7WUFFN0IseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUV2QixLQUFJLElBQUksR0FBRyxHQUFxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUN4RztnQkFDSSxJQUFJLGdCQUFnQixHQUEyQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXpELElBQUcsZ0JBQWdCLElBQUksSUFBSSxFQUMzQjtvQkFDSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNyQyxTQUFTO2lCQUNaO2dCQUVELElBQUksTUFBTSxHQUFrQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBRXJELElBQUcsTUFBTSxJQUFJLElBQUksRUFDakI7b0JBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzNCLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMxQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBRXJDLFNBQVM7aUJBQ1o7Z0JBRUQsdUJBQXVCO2dCQUN2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUVmLCtCQUErQjtnQkFDL0IsSUFBTSxTQUFTLEdBQXlCLE1BQU0sQ0FBQyxhQUFhLENBQ3hELGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEVBQzFFLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FDcEQsQ0FBQztnQkFFRixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNuRDtvQkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNyRTtnQkFFRCxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFeEQsZ0NBQWdDO2dCQUNoQyxJQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNoQztvQkFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDM0IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztpQkFDeEM7cUJBRUQ7b0JBQ0ksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQU1MLCtCQUFDO0lBQUQsQ0FBQztJQTdSWSw4Q0FBd0IsMkJBNlJwQztJQTBCWSx3REFBa0MsR0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFDdkYsQ0FBQyxFQW5VZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW1VckM7Ozs7Ozs7Ozs7Ozs7QUN0VkQ7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFNEU7QUFHL0UsSUFBTyxjQUFjLEdBQUcsMEVBQWMsQ0FBQyxjQUFjLENBQUM7QUFFL0MsSUFBVSxxQkFBcUIsQ0FpUnJDO0FBalJELFdBQWlCLHFCQUFxQjtJQUVsQzs7OztPQUlHO0lBQ0g7UUE0TEk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7WUFFNUMsV0FBVztZQUNYLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUF4TUQ7Ozs7V0FJRztRQUNXLHFCQUFNLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ1cscUJBQU0sR0FBcEIsVUFBcUIsUUFBd0I7WUFFekMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLG1DQUFVLEdBQWpCLFVBQWtCLEtBQWtCO1lBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGtDQUFTLEdBQWhCO1lBRUksSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBRW5DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHFDQUFZLEdBQW5CLFVBQW9CLFFBQXdCO1lBRXhDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNJLHNDQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7WUFFeEUsSUFBRyxHQUFHLEdBQUcsR0FBRyxFQUNaO2dCQUNJLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDYjtpQkFDSSxJQUFHLEdBQUcsR0FBRyxHQUFHLEVBQ2pCO2dCQUNJLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFDYjtZQUVELElBQUcsS0FBSyxHQUFHLEdBQUcsRUFDZDtnQkFDSSxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7aUJBQ0ksSUFBRyxLQUFLLEdBQUcsR0FBRyxFQUNuQjtnQkFDSSxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7WUFFRCxJQUFHLElBQUksR0FBRyxHQUFHLEVBQ2I7Z0JBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUNkO2lCQUNJLElBQUcsSUFBSSxHQUFHLEdBQUcsRUFDbEI7Z0JBQ0ksSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUNkO1lBRUQsSUFBRyxLQUFLLEdBQUcsR0FBRyxFQUNkO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtpQkFDSSxJQUFHLEtBQUssR0FBRyxHQUFHLEVBQ25CO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRDs7O1dBR0c7UUFDSSxnREFBdUIsR0FBOUIsVUFBK0IsTUFBZTtZQUUxQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksNkNBQW9CLEdBQTNCO1lBRUksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHFDQUFZLEdBQW5CLFVBQW9CLE9BQWdCO1lBRWhDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzlCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksa0NBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxzQ0FBYSxHQUFwQixVQUFxQixDQUFTO1lBRTFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBa0RMLHFCQUFDO0lBQUQsQ0FBQztJQTVPcUIsb0NBQWMsaUJBNE9uQztJQUVELElBQVksZUFLWDtJQUxELFdBQVksZUFBZTtRQUV2Qix5RkFBMEI7UUFDMUIsNkZBQTRCO1FBQzVCLHlHQUFrQztJQUN0QyxDQUFDLEVBTFcsZUFBZSxHQUFmLHFDQUFlLEtBQWYscUNBQWUsUUFLMUI7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBTUwseUJBQUM7SUFBRCxDQUFDO0lBakJZLHdDQUFrQixxQkFpQjlCO0FBQ0wsQ0FBQyxFQWpSZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlSckM7Ozs7Ozs7Ozs7Ozs7QUM3UkQ7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFbUQ7QUFFL0MsSUFBVSxxQkFBcUIsQ0E0VnJDO0FBNVZELFdBQWlCLHFCQUFxQjtJQUVsQzs7O09BR0c7SUFDSDtRQUVJOzs7O1dBSUc7UUFDSCxpQkFBbUIsR0FBVyxFQUFFLEtBQWE7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFFVixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQixDQUFDO1FBSUwsY0FBQztJQUFELENBQUM7SUFwQlksNkJBQU8sVUFvQm5CO0lBRUQ7O09BRUc7SUFDSDtRQUVJOzs7V0FHRztRQUNILGdCQUFtQixJQUFhO1lBRTVCLElBQUcsSUFBSSxJQUFJLFNBQVMsRUFDcEI7Z0JBQ0ksSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUNYO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjtxQkFFRDtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDckI7YUFDSjtpQkFFRDtnQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsQjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLHdCQUFPLEdBQWQ7WUFFSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLDBCQUFTLEdBQWhCLFVBQWlCLEdBQVU7WUFFdkIscUJBQXFCO1lBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQzNELDRCQUE0QjtZQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBZSxHQUFHLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0kseUJBQVEsR0FBZixVQUFnQixHQUFVO1lBRXRCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWYsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO2dCQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUNsQztvQkFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNWLE1BQU07aUJBQ1Q7YUFDSjtZQUVELElBQUcsS0FBSyxJQUFJLENBQUMsRUFDYjtnQkFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3hDO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDakQ7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHlCQUFRLEdBQWYsVUFBZ0IsR0FBVSxFQUFFLEtBQVk7WUFFcEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFZixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDMUM7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQ2xDO29CQUNJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1YsTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBRyxLQUFLLElBQUksQ0FBQyxFQUNiO2dCQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN6QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDbEQ7UUFDTCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSx3QkFBTyxHQUFkLFVBQWUsR0FBVTtZQUVyQixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDMUM7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQ2xDO29CQUNJLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBSyxHQUFaO1lBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFFOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx3QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksZ0NBQWUsR0FBdEIsVUFBdUIsT0FBZSxFQUFFLFNBQWtCO1lBRXRELElBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUNuQztnQkFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDOUI7b0JBQ0ksSUFBRyxDQUFDLFNBQVMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVc7d0JBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFDcEM7cUJBRUQ7b0JBQ0ksSUFBRyxDQUFDLFNBQVMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7aUJBQ3BDO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBSyxHQUFaO1lBRUksSUFBSSxHQUFHLEdBQTJCLElBQUksUUFBUSxDQUFlLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7V0FFRztRQUNJLG9CQUFHLEdBQVY7WUFFSSxJQUFJLEdBQUcsR0FBMkIsSUFBSSxRQUFRLENBQWUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDckYsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHNCQUFLLEdBQVosVUFBYSxHQUEyQjtZQUVwQyxJQUFJLEtBQUssR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFDbkM7Z0JBQ0ksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRO2FBQ3ZCO1lBRUQsS0FBSztZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFYixJQUFJLElBQUksR0FBMkIsSUFBSSxRQUFRLENBQWUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNqRixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwwQkFBUyxHQUFoQjtZQUVJLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNsQztnQkFDSSx5RUFBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLHlFQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7UUFDTCxDQUFDO1FBRXNCLGtCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsb0JBQW9CO1FBSWpFLGFBQUM7S0FBQTtJQWxPWSw0QkFBTSxTQWtPbEI7SUFHRDs7T0FFRztJQUNIO1FBRUk7O1dBRUc7UUFDSCxrQkFBWSxDQUF3QixFQUFFLEdBQVk7WUFFOUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBZ0IsQ0FBQztZQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFHLEdBQVYsVUFBVyxHQUEyQjtZQUVsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CO1lBRUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVksR0FBbkI7WUFFSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBUyxHQUFoQjtZQUVJLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFlLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBRSxTQUFTO1lBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBZSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBRyxHQUFWO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQVEsR0FBZixVQUFnQixHQUEyQjtZQUV2QyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBSUwsZUFBQztJQUFELENBQUM7SUFwRlksOEJBQVEsV0FvRnBCO0FBQ0wsQ0FBQyxFQTVWZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTRWckM7Ozs7Ozs7Ozs7Ozs7QUNyV0Q7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUksSUFBVSxxQkFBcUIsQ0E2R3JDO0FBN0dELFdBQWlCLHFCQUFxQjtJQUVsQzs7T0FFRztJQUNIO1FBOEZJOztXQUVHO1FBQ0gsbUJBQW1CLENBQVM7WUFFeEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDO1FBbEdEOzs7OztXQUtHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLENBQVMsRUFBRSxNQUFlO1lBRXBDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO2dCQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRVIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLENBQVM7WUFFdEMsSUFBSSxHQUFHLEdBQWMsSUFBSSxDQUFDO1lBRTFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzlCO2dCQUNJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFFRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFRLEdBQWY7WUFFSSxPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRSxDQUFDO1FBRUQ7O1dBRUc7UUFDSSw2QkFBUyxHQUFoQjtZQUVJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLENBQVk7WUFFdEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMkJBQU8sR0FBZCxVQUFlLENBQVk7WUFFdkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMkJBQU8sR0FBZCxVQUFlLENBQVM7WUFFcEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBV0wsZ0JBQUM7SUFBRCxDQUFDO0lBdkdZLCtCQUFTLFlBdUdyQjtBQUNMLENBQUMsRUE3R2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2R3JDOzs7Ozs7Ozs7Ozs7O0FDcEhEO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBaVlyQztBQWpZRCxXQUFpQixxQkFBcUI7SUFFbEM7O09BRUc7SUFDSDtRQUVJOzs7O1dBSUc7UUFDSCxtQkFBWSxlQUEyQjtZQUEzQixxREFBMkI7WUFFbkMsSUFBRyxlQUFlLEdBQUcsQ0FBQyxFQUN0QjtnQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFFRDtnQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBRSxHQUFULFVBQVUsS0FBYTtZQUVuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx1QkFBRyxHQUFWLFVBQVcsS0FBYSxFQUFFLEtBQVE7WUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQUcsR0FBVixVQUFXLE1BQWtCO1lBQWxCLG1DQUFrQjtZQUV6QixJQUFJLEdBQUcsR0FBUSxJQUFJLEtBQUssRUFBSyxDQUFDO1lBQzlCLEtBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUN2QztnQkFDSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7V0FHRztRQUNJLDRCQUFRLEdBQWYsVUFBZ0IsS0FBUTtZQUVwQixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDL0I7Z0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1RjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFLLEdBQVo7WUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwwQkFBTSxHQUFiLFVBQWMsT0FBZSxFQUFFLEtBQVE7WUFFbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV6QixJQUFHLE9BQU8sR0FBRyxPQUFPLEVBQ3BCO2dCQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRSxhQUFhO2FBQ2hEO1lBRUQsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwwQkFBTSxHQUFiLFVBQWMsT0FBZSxFQUFFLEtBQWU7WUFBZixvQ0FBZTtZQUUxQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVEOztXQUVHO1FBQ0ksOEJBQVUsR0FBakIsVUFBa0IsT0FBZSxFQUFFLEtBQWlCLEVBQUUsZ0JBQWdDO1lBQW5ELG9DQUFpQjtZQUFFLDBEQUFnQztZQUVsRixJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRWpDLElBQUcsT0FBTyxHQUFHLE9BQU8sRUFDcEI7Z0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFFLGFBQWE7Z0JBRTdDLElBQUcsZ0JBQWdCLEVBQ25CO29CQUNJLEtBQUksSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUNoRDt3QkFDSSxJQUFHLE9BQU8sS0FBSyxJQUFJLFVBQVUsRUFBRyxNQUFNO3lCQUN0Qzs0QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDMUQ7NkJBQ0ksZ0JBQWdCO3lCQUNyQjs0QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzt5QkFDeEI7cUJBQ0o7aUJBQ0o7cUJBRUQ7b0JBQ0ksS0FBSSxJQUFJLENBQUMsR0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ2hEO3dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUN4QjtpQkFDSjthQUNKO2lCQUVEO2dCQUNJLHdCQUF3QjtnQkFDeEIsS0FBSztnQkFDTCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBSSxZQUFZO2FBQzNEO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLFFBQXFCLEVBQUUsS0FBa0IsRUFBRSxHQUFnQjtZQUVyRSxJQUFJLEtBQUssR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksS0FBSyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxLQUFLLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUUvQixJQUFJLFFBQVEsR0FBVyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQztZQUU1Qyx1QkFBdUI7WUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBRyxPQUFPLEdBQUcsQ0FBQyxFQUNkO2dCQUNJLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO29CQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN4QzthQUNKO1lBRUQsS0FBSSxJQUFJLENBQUMsR0FBVyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFDbEQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLEtBQWE7WUFFdkIsSUFBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUNuQztnQkFDSSxPQUFPLEtBQUssQ0FBQyxDQUFHLFFBQVE7YUFDM0I7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRWIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHlCQUFLLEdBQVosVUFBYSxHQUFnQjtZQUV6QixJQUFJLEtBQUssR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFDbkM7Z0JBQ0ksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRO2FBQ3ZCO1lBRUQsS0FBSztZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFYixJQUFJLElBQUksR0FBZ0IsSUFBSSxRQUFRLENBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUcsS0FBSztZQUM3RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksbUNBQWUsR0FBdEIsVUFBdUIsT0FBZTtZQUVsQyxJQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUMzQjtnQkFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUN0QjtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztpQkFDNUI7cUJBRUQ7b0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztpQkFDNUI7YUFDSjtRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFLLEdBQVo7WUFFSSxJQUFJLEdBQUcsR0FBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFHLEdBQVY7WUFFSSxJQUFJLEdBQUcsR0FBZ0IsSUFBSSxRQUFRLENBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFTSw2QkFBUyxHQUFoQixVQUFpQixNQUFjO1lBRTNCLElBQUksU0FBUyxHQUFHLElBQUksU0FBUyxFQUFLLENBQUM7WUFDbkMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUU5QyxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBTWUsdUJBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFDM0QsZ0JBQUM7S0FBQTtJQWhTWSwrQkFBUyxZQWdTckI7SUFFRDtRQUVJOztXQUVHO1FBQ0gsa0JBQW1CLENBQWdCLEVBQUUsS0FBYztZQUUvQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBRyxHQUFWLFVBQVcsR0FBZ0I7WUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQjtZQUVJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CO1lBRUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUUsU0FBUztZQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFHLEdBQVY7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQixVQUFvQixHQUFnQjtZQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFRLEdBQWYsVUFBZ0IsR0FBZ0I7WUFFNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUlMLGVBQUM7SUFBRCxDQUFDO0lBekZZLDhCQUFRLFdBeUZwQjtBQUNMLENBQUMsRUFqWWdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFpWXJDOzs7Ozs7Ozs7Ozs7O0FDeFlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRXlGO0FBQ3VFO0FBRzVKLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBZSxFQUFFLEdBQVcsRUFBRSxJQUFXO0lBRXBFLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUVNLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUFlLEVBQUUsR0FBVyxFQUFFLElBQVc7SUFFdEUsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFTSxJQUFJLFVBQVUsR0FBRyxVQUFDLElBQVM7SUFFOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFHSyxJQUFJLGdCQUFnQixHQUFHLFVBQUMsR0FBVztJQUFFLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYsNkJBQWU7O0FBQU0sQ0FBQyxDQUFDO0FBQzVELElBQUksY0FBYyxHQUFHLFVBQUMsR0FBVztJQUFFLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYsNkJBQWU7O0FBQU0sQ0FBQyxDQUFDO0FBQzFELElBQUksYUFBYSxHQUFHLFVBQUMsR0FBVztJQUFFLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYsNkJBQWU7O0FBQU0sQ0FBQyxDQUFDO0FBQ3pELElBQUksZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO0lBQUUsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZiw2QkFBZTs7QUFBTSxDQUFDLENBQUM7QUFDNUQsSUFBSSxjQUFjLEdBQUcsVUFBQyxHQUFXO0lBQUUsY0FBZTtTQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7UUFBZiw2QkFBZTs7QUFBTSxDQUFDLENBQUM7QUFFakUsSUFBRyxvRUFBYSxJQUFJLDRFQUFxQixFQUN6QztJQUNJLGdCQUFnQixHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTVDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7SUFFRixjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFRixhQUFhLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFekMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUM7SUFFRixnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUU1QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0lBRUYsY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0w7S0FDSSxJQUFHLG9FQUFhLElBQUksMEVBQW1CLEVBQzVDO0lBQ0ksY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBRUYsYUFBYSxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRXpDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFNUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztDQUNMO0tBQ0ksSUFBRyxvRUFBYSxJQUFJLHlFQUFrQixFQUMzQztJQUNJLGFBQWEsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUV6QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQztJQUVGLGdCQUFnQixHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTVDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7SUFFRixjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7Q0FDTDtLQUNJLElBQUcsb0VBQWEsSUFBSSw0RUFBcUIsRUFDOUM7SUFDSSxnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUU1QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0lBRUYsY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0w7S0FDSSxJQUFHLG9FQUFhLElBQUksMEVBQW1CLEVBQzVDO0lBQ0ksY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0w7QUFFRCw0Q0FBNEM7QUFDckMsSUFBVSxxQkFBcUIsQ0FxRXJDO0FBckVELFdBQWlCLHFCQUFxQjtJQUdsQzs7O09BR0c7SUFDSDtRQXNESTs7V0FFRztRQUNIO1FBR0EsQ0FBQztRQTFERDs7Ozs7OztXQU9HO1FBQ1csaUJBQUssR0FBbkIsVUFBb0IsUUFBa0IsRUFBRSxNQUFjLEVBQUUsSUFBWTtZQUVoRSxtQ0FBbUM7WUFDbkMsSUFBRyxRQUFRLEdBQUcsNEVBQWUsQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQy9EO2dCQUNJLE9BQU87YUFDVjtZQUVELElBQU0sUUFBUSxHQUFvQyw0RUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFFbEcsSUFBSSxDQUFDLFFBQVE7Z0JBQ1QsT0FBTztZQUVYLElBQUksTUFBTSxHQUNOLE1BQU0sQ0FBQyxPQUFPLENBQ1YsWUFBWSxFQUNaLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRUQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUNKLENBQUM7WUFDTixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDVyxxQkFBUyxHQUF2QixVQUF3QixRQUFrQixFQUFFLElBQWdCLEVBQUUsTUFBYztZQUV4RSxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN2QztnQkFDSSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBU0wsa0JBQUM7SUFBRCxDQUFDO0lBN0RZLGlDQUFXLGNBNkR2QjtBQUNMLENBQUMsRUFyRWdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFxRXJDO0FBRUQsNENBQTRDOzs7Ozs7Ozs7Ozs7O0FDL0w1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHOzs7Ozs7Ozs7Ozs7OztBQUVrRTtBQUNOO0FBQ007QUFDekI7QUFDSTtBQUNoRCxJQUFPLFNBQVMsR0FBRyxxRUFBUyxDQUFDLFNBQVMsQ0FBQztBQUV2QyxJQUFPLE1BQU0sR0FBRyxrRUFBTSxDQUFDLE1BQU0sQ0FBQztBQUU5QixJQUFPLFNBQVMsR0FBRyxxRUFBUyxDQUFDLFNBQVMsQ0FBQztBQUVoQyxJQUFVLHFCQUFxQixDQTZ6Q3JDO0FBN3pDRCxXQUFpQixxQkFBcUI7SUFFbEMsMkNBQTJDO0lBQzNDLElBQU0sNEJBQTRCLEdBQVcsc0JBQXNCLENBQUM7SUFDcEUsSUFBTSw4QkFBOEIsR0FBVyw0QkFBNEIsQ0FBQztJQUc1RTs7T0FFRztJQUNIO1FBRUk7O1dBRUc7UUFDSDtRQUdBLENBQUM7UUFPRDs7V0FFRztRQUNJLDRCQUFZLEdBQW5CLFVBQW9CLFlBQXFCLEVBQUUsTUFBZTtZQUV0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFFRDs7V0FFRztRQUNJLHFCQUFLLEdBQVosVUFBYSxZQUF3QjtZQUF4QiwrQ0FBd0I7WUFFakMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQU8sR0FBZCxVQUFlLFlBQXdCO1lBQXhCLCtDQUF3QjtZQUVuQyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBUyxHQUFoQixVQUFpQixZQUE2QjtZQUE3QixtREFBNkI7WUFFMUMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQU8sR0FBZDtZQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0JBQVEsR0FBZixVQUFnQixZQUE0QjtZQUE1QixrREFBNEI7WUFFeEMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQVMsR0FBaEIsVUFBaUIsWUFBK0I7WUFFNUMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQU0sR0FBYixVQUFjLFlBQW9DO1lBRTlDLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFlLEdBQXRCLFVBQXVCLEtBQWE7WUFFaEMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVEOztXQUVHO1FBQ0ksZ0NBQWdCLEdBQXZCLFVBQXdCLENBQXFCO1lBRXpDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksdUJBQU8sR0FBZDtZQUVJLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM3QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBTyxHQUFkO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQU0sR0FBYjtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFNLEdBQWI7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBTyxHQUFkO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0JBQVEsR0FBZjtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFPLEdBQWQ7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQkFBSyxHQUFaO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQVNNLHNCQUFNLEdBQWIsVUFBYyxLQUFVO1lBRXBCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHdCQUFRLEdBQWY7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3Q0FBd0IsR0FBL0IsVUFBZ0MsUUFBZ0I7WUFFNUMsT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7V0FFRztRQUNXLHNDQUFnQyxHQUE5QztZQUVJLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVoRCxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7WUFFckMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLFNBQVMsRUFBVSxDQUFDO1FBQ2hELENBQUM7UUFFRDs7V0FFRztRQUNXLG1DQUE2QixHQUEzQztZQUVJLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRXpCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7UUFRTCxZQUFDO0lBQUQsQ0FBQztJQW5PcUIsMkJBQUssUUFtTzFCO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSDtRQUVJOztXQUVHO1FBQ0gsb0JBQW1CLE1BQW9CLEVBQUUsTUFBZTtZQUVwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFHLE1BQU0sSUFBSSxTQUFTLEVBQ3RCO2dCQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNXLGlCQUFNLEdBQXBCLFVBQXFCLE1BQW1CLEVBQUUsSUFBWTtZQUVsRCxJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzVCLElBQU0sU0FBUyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXpELElBQUcsQ0FBQyxTQUFTLEVBQ2I7Z0JBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFFRDtnQkFDSSxPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDVyxpQkFBTSxHQUFwQixVQUFxQixRQUFvQjtZQUVyQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksd0NBQW1CLEdBQTFCLFVBQTJCLE1BQW1CO1lBRTFDLElBQUksVUFBVSxHQUFlLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztZQUVyQixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxHQUFHLEdBQVcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUNwRTtnQkFDSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RDtZQUVELEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7V0FFRztRQUNLLHdCQUFHLEdBQVgsVUFBWSxDQUFTO1lBRWpCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUFBLENBQUM7UUFFRjs7Ozs7O1dBTUc7UUFDSSwrQkFBVSxHQUFqQixVQUFrQixNQUFtQixFQUFFLElBQVk7WUFFL0MsSUFBSSxNQUFNLEdBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQ25ELElBQUksWUFBWSxHQUFXLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFNUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO2dCQUNJLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztnQkFDMUIsTUFBTSxHQUFHLDJCQUEyQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXBDLGtFQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxLQUFLLENBQUM7YUFDaEI7aUJBQ0ksSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywrQkFBK0I7Z0JBQzlGLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksa0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksbUNBQWMsR0FBckI7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRDs7Ozs7Ozs7O1dBU0c7UUFDTywrQkFBVSxHQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxTQUFtQjtZQUVuRixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFLLE9BQU8sSUFBSSxDQUFDO1lBRWhDLElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBVyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFTLENBQUM7WUFFZCxPQUFPLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3RCO2dCQUNJLElBQUksQ0FBQyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsUUFBTyxDQUFDLEVBQ1I7b0JBQ0EsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxHQUFHO3dCQUNKOzRCQUNJLElBQUksV0FBVyxHQUFhLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTs0QkFDdEQsQ0FBQyxHQUFHLHFFQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDekMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzNCO29CQUNMLEtBQUssSUFBSTt3QkFDTCxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUMzRixLQUFLLEdBQUc7d0JBQ0osQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0RCxPQUFPLENBQUMsQ0FBQztvQkFDYixLQUFLLEdBQUc7d0JBQ0osQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN2RCxPQUFPLENBQUMsQ0FBQztvQkFDYixLQUFLLEdBQUcsRUFBRSxZQUFZO3dCQUNsQixJQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUNqQjs0QkFDSSxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFJLGFBQWE7NEJBQ3pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN4Qjs2QkFFRDs0QkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQzt5QkFDOUI7d0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxHQUFHLEVBQUUsWUFBWTt3QkFDbEIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFDakI7NEJBQ0ksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7NEJBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN4Qjs2QkFFRDs0QkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQzt5QkFDOUI7d0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxHQUFHLEVBQUUsYUFBYTt3QkFDbkIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFDakI7NEJBQ0ksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7NEJBQzNCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN4Qjs2QkFFRDs0QkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO3lCQUN4Qzt3QkFDRCxPQUFPLENBQUMsQ0FBQztvQkFDYixLQUFLLEdBQUcsRUFBRSxrQkFBa0I7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7d0JBQ3JDLE9BQU8sSUFBSSxDQUFDO29CQUNoQixLQUFLLEdBQUcsRUFBRSxvQ0FBb0M7d0JBQzFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRSxXQUFXO3dCQUM5QixPQUFPLElBQUksQ0FBQztvQkFDaEIsS0FBSyxJQUFJO3dCQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsS0FBSyxHQUFHLENBQUM7b0JBQ1QsS0FBSyxJQUFJLENBQUM7b0JBQ1YsS0FBSyxJQUFJLENBQUM7b0JBQ1YsU0FBUyxPQUFPO3dCQUNaLE1BQU07aUJBQ1Q7YUFDSjtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ08sZ0NBQVcsR0FBckIsVUFBc0IsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhLEVBQUUsU0FBbUI7WUFFcEYsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU3QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDZCxJQUFJLENBQVMsRUFBRSxFQUFVLENBQUM7WUFDMUIsSUFBSSxHQUFHLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQVcsS0FBSyxDQUFDLENBQUMsdUJBQXVCO1lBRXJELE9BQU8sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDdEI7Z0JBQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFZCxRQUFPLENBQUMsRUFDUjtvQkFDQSxLQUFLLElBQUksRUFBRSwrQkFBK0I7d0JBQ3RDOzRCQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsU0FBUzs0QkFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjOzRCQUNsRSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ2hCO29CQUNMLEtBQUssSUFBSSxFQUFHLFdBQVc7d0JBQ25COzRCQUNJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYTs0QkFFbEIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFDbkI7Z0NBQ0ksR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjOzZCQUNyRTs0QkFDRCxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjs0QkFFdEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUNkO2dDQUNJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBRWYsUUFBTyxFQUFFLEVBQ1Q7b0NBQ0EsS0FBSyxJQUFJO3dDQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssSUFBSTt3Q0FDTCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0NBQ3RCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRywyQ0FBMkMsQ0FBQzt3Q0FDMUQsTUFBTTtvQ0FDVjt3Q0FDSSxNQUFNO2lDQUNUOzZCQUNKO2lDQUVEO2dDQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLENBQUM7NkJBQzdDO3lCQUNKO29CQUNMO3dCQUNJOzRCQUNJLE1BQU07eUJBQ1Q7aUJBQ0o7YUFDSjtZQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsMEJBQTBCLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ08sZ0NBQVcsR0FBckIsVUFBc0IsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhLEVBQUUsU0FBbUI7WUFFcEYsSUFBRyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUM1QixJQUFJLEdBQUcsR0FBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRWpDLGFBQWE7WUFDYixJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLGVBQWUsR0FBYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxFQUFFLEdBQVksS0FBSyxDQUFDO1lBRXhCLGFBQWE7WUFDYixPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3JCO2dCQUNJLFFBQVEsRUFBRSxPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9CO29CQUNJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWQsUUFBTyxDQUFDLEVBQ1I7d0JBQ0EsS0FBSyxJQUFJOzRCQUNMLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQzs0QkFDL0QsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO2dDQUNJLE9BQU8sSUFBSSxDQUFDOzZCQUNmOzRCQUVELENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEVBQUUsR0FBRyxJQUFJLENBQUM7NEJBQ1YsTUFBTSxRQUFRLENBQUMsQ0FBQyxhQUFhO3dCQUNqQyxLQUFLLEdBQUcsRUFBRSxRQUFROzRCQUNkLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUk7d0JBQ3BCLEtBQUssR0FBRzs0QkFDSixJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDOzRCQUNyQyxNQUFNO3dCQUNWLEtBQUssSUFBSTs0QkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3RCOzRCQUNJLE1BQU0sQ0FBRSxXQUFXO3FCQUN0QjtpQkFDSjtnQkFDRCxJQUFHLENBQUMsRUFBRSxFQUNOO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO29CQUM5QixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFFRCxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUVYLFVBQVU7Z0JBQ1YsU0FBUyxFQUFFLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDaEM7b0JBQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFZCxRQUFPLENBQUMsRUFDUjt3QkFDQSxLQUFLLEdBQUc7NEJBQ0osRUFBRSxHQUFHLElBQUksQ0FBQzs0QkFDVixDQUFDLEVBQUUsQ0FBQzs0QkFDSixNQUFNLFNBQVMsQ0FBQzt3QkFDcEIsS0FBSyxHQUFHOzRCQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7NEJBQ3JDLE1BQU07d0JBQ1YsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3pCLG1DQUFtQzt3QkFDdkM7NEJBQ0ksTUFBTSxDQUFFLFdBQVc7cUJBQ3RCO2lCQUNKO2dCQUVELElBQUcsQ0FBQyxFQUFFLEVBQ047b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7b0JBQzlCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUVELFNBQVM7Z0JBQ1QsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDdkUsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO29CQUNJLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUVELENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZCLHVCQUF1QjtnQkFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXBCLFNBQVMsRUFBRSxPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2hDO29CQUNJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWQsUUFBTyxDQUFDLEVBQ1I7d0JBQ0EsS0FBSyxHQUFHOzRCQUNKLE1BQU0sU0FBUyxDQUFDO3dCQUNwQixLQUFLLEdBQUc7NEJBQ0osU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTzt3QkFDdkIsS0FBSyxJQUFJOzRCQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDdEI7NEJBQ0ksTUFBTSxDQUFFLE9BQU87cUJBQ2xCO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ08sK0JBQVUsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhLEVBQUUsU0FBbUI7WUFFbkYsSUFBRyxJQUFJLENBQUMsTUFBTTtnQkFBRyxPQUFPLElBQUksQ0FBQztZQUM3QixJQUFJLEdBQUcsR0FBYSxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBRXBDLGNBQWM7WUFDZCxJQUFJLENBQUMsR0FBVyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFTLENBQUM7WUFDZCxJQUFJLGVBQWUsR0FBYSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU3QyxhQUFhO1lBQ2IsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNyQjtnQkFDSSxVQUFVO2dCQUNWLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBRXZFLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtvQkFDSSxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QixJQUFHLEtBQUssRUFDUjtvQkFDSSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQjtnQkFFRCxhQUFhO2dCQUNiLDZCQUE2QjtnQkFDN0IsUUFBUSxFQUFFLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDL0I7b0JBQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFZCxRQUFPLENBQUMsRUFDUjt3QkFDSSxLQUFLLEdBQUc7NEJBQ0osb0JBQW9COzRCQUNwQiwwQkFBMEI7NEJBQzFCLE1BQU0sUUFBUSxDQUFDO3dCQUNuQixLQUFLLEdBQUc7NEJBQ0osU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSzt3QkFDckIsS0FBSyxJQUFJOzRCQUNMLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDbEIsaUNBQWlDO3dCQUNyQzs0QkFDSSxNQUFNLENBQUMsT0FBTztxQkFDckI7aUJBQ0o7YUFDSjtZQUVELEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUtMLGlCQUFDO0lBQUQsQ0FBQztJQXRnQlksZ0NBQVUsYUFzZ0J0QjtJQUVEOztPQUVHO0lBQ0g7UUFBK0IsNkJBQUs7UUFFaEM7O1dBRUc7UUFDSCxtQkFBWSxDQUFTO1lBQXJCLFlBRUksaUJBQU8sU0FHVjtZQURHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztRQUNwQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUU1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQUssR0FBWixVQUFhLFlBQXdCO1lBQXhCLCtDQUF3QjtZQUVqQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZCxVQUFlLFlBQTBCO1lBQTFCLGlEQUEwQjtZQUVyQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQVNNLDBCQUFNLEdBQWIsVUFBYyxLQUFVO1lBRXBCLElBQUksUUFBUSxLQUFLLE9BQU0sQ0FBQyxLQUFLLENBQUMsRUFDOUI7Z0JBQ0ksTUFBTTtnQkFDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ3JCO29CQUNJLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxRQUFRO3FCQUVSO29CQUNJLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQy9CO2FBQ0o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBR0wsZ0JBQUM7SUFBRCxDQUFDLENBMUU4QixLQUFLLEdBMEVuQztJQTFFWSwrQkFBUyxZQTBFckI7SUFFRDs7T0FFRztJQUNIO1FBQWlDLCtCQUFLO1FBdURsQzs7V0FFRztRQUNILHFCQUFtQixDQUFVO1lBQTdCLFlBRUksaUJBQU8sU0FHVjtZQURHLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOztRQUN4QixDQUFDO1FBNUREOztXQUVHO1FBQ0ksNEJBQU0sR0FBYjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFTLEdBQWhCLFVBQWlCLFlBQTZCO1lBQTdCLG1EQUE2QjtZQUUxQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQzVCLENBQUMsQ0FBQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFTTSw0QkFBTSxHQUFiLFVBQWMsS0FBVTtZQUVwQixJQUFJLFNBQVMsS0FBSyxPQUFNLENBQUMsS0FBSyxDQUFDLEVBQy9CO2dCQUNJLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDbkM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw4QkFBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQWdCTCxrQkFBQztJQUFELENBQUMsQ0FyRWdDLEtBQUssR0FxRXJDO0lBckVZLGlDQUFXLGNBcUV2QjtJQUVEOztPQUVHO0lBQ0g7UUFBZ0MsOEJBQUs7UUFPakMsb0JBQW1CLENBQU07WUFBekIsWUFFSSxpQkFBTyxTQVdWO1lBVEcsSUFBRyxRQUFRLEtBQUssT0FBTSxDQUFDLENBQUMsQ0FBQyxFQUN6QjtnQkFDSSxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUcsQ0FBQyxZQUFZLFNBQVMsRUFDekI7Z0JBQ0ksS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCOztRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNJLDZCQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw4QkFBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFTTSwyQkFBTSxHQUFiLFVBQWMsS0FBVTtZQUVwQixJQUFJLFFBQVEsS0FBSyxPQUFNLENBQUMsS0FBSyxDQUFDLEVBQzlCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7YUFDdEM7WUFFRCxJQUFJLEtBQUssWUFBWSxTQUFTLEVBQzlCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDTCxpQkFBQztJQUFELENBQUMsQ0EzRCtCLEtBQUssR0EyRHBDO0lBM0RZLGdDQUFVLGFBMkR0QjtJQUVEOztPQUVHO0lBQ0g7UUFBK0IsNkJBQVU7UUFtQnJDOztXQUVHO1FBQ0gsbUJBQW1CLENBQW1CLEVBQUUsUUFBaUI7WUFBekQsaUJBV0M7WUFURyxJQUFHLFFBQVEsS0FBSyxPQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3pCO2dCQUNJLDBCQUFNLENBQUMsQ0FBQyxTQUFDO2FBQ1o7aUJBRUQ7Z0JBQ0ksMEJBQU0sQ0FBQyxDQUFDLFNBQUM7YUFDWjtZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOztRQUM5QixDQUFDO1FBL0JEOztXQUVHO1FBQ0ksNEJBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0Q0FBd0IsR0FBL0IsVUFBZ0MsQ0FBUztZQUVyQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBa0JEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFJTCxnQkFBQztJQUFELENBQUMsQ0E3QzhCLFVBQVUsR0E2Q3hDO0lBN0NZLCtCQUFTLFlBNkNyQjtJQUVEOztPQUVHO0lBQ0g7UUFBbUMsaUNBQUs7UUEwQnBDOztXQUVHO1FBQ0g7WUFBQSxZQUVJLGlCQUFPLFNBR1Y7WUFERyxLQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQzs7UUFDckMsQ0FBQztRQWhDRDs7V0FFRztRQUNJLDhCQUFNLEdBQWI7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQ0FBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7V0FFRztRQUNJLGdDQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBWUwsb0JBQUM7SUFBRCxDQUFDLENBcENrQyxLQUFLLEdBb0N2QztJQXBDWSxtQ0FBYSxnQkFvQ3pCO0lBRUQ7O09BRUc7SUFDSDtRQUErQiw2QkFBSztRQUVoQzs7V0FFRztRQUNIO1lBQUEsWUFFSSxpQkFBTyxTQUVWO1lBREcsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBUyxDQUFDOztRQUN6QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksS0FBSSxJQUFJLEdBQUcsR0FBOEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQ2pIO2dCQUNJLElBQUksQ0FBQyxHQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFekIsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3JCO29CQUNJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNaO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksbUNBQWUsR0FBdEIsVUFBdUIsS0FBYTtZQUVoQyxJQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxLQUFLLEVBQzlDO2dCQUNJLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ3BGO1lBRUQsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckMsSUFBRyxDQUFDLElBQUksSUFBSSxFQUNaO2dCQUNJLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUMxQjtZQUVELE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksb0NBQWdCLEdBQXZCLFVBQXdCLENBQXFCO1lBRXpDLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRDs7V0FFRztRQUNJLDZCQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxJQUFJLFlBQVksR0FBVyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRTFDLEtBQUksSUFBSSxHQUFHLEdBQThCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUM5RztnQkFDSSxJQUFJLENBQUMsR0FBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDeEU7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRW5ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksdUJBQUcsR0FBVixVQUFXLENBQVE7WUFFZixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw2QkFBUyxHQUFoQixVQUFpQixZQUFxQztZQUFyQyxrREFBcUM7WUFFbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUdMLGdCQUFDO0lBQUQsQ0FBQyxDQTVHOEIsS0FBSyxHQTRHbkM7SUE1R1ksK0JBQVMsWUE0R3JCO0lBRUQ7O09BRUc7SUFDSDtRQUE2QiwyQkFBSztRQUU5Qjs7V0FFRztRQUNIO1lBQUEsWUFFSSxpQkFBTyxTQUVWO1lBREcsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBaUIsQ0FBQzs7UUFDNUMsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQU8sR0FBZDtZQUVJLElBQU0sR0FBRyxHQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTlELE9BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ25DO2dCQUNJLElBQUksQ0FBQyxHQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBRWhDLElBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNyQjtvQkFDSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDWjtnQkFFRCxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdEI7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBSyxHQUFaO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksa0NBQWdCLEdBQXZCLFVBQXdCLENBQXFCO1lBRXpDLElBQUcsQ0FBQyxZQUFZLFNBQVMsRUFDekI7Z0JBQ0ksSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFHLEdBQUcsSUFBSSxJQUFJLEVBQ2Q7b0JBQ0ksT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEdBQUcsQ0FBQzthQUNkO1lBRUQsS0FBSSxJQUFJLElBQUksR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQ3JIO2dCQUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQ3hCO29CQUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQzVCO3dCQUNJLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztxQkFDMUI7b0JBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUM1QjthQUNKO1lBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFFRDs7V0FFRztRQUNJLGlDQUFlLEdBQXRCLFVBQXVCLEtBQWE7WUFFaEMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVwQyxJQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5RCxPQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNuQztnQkFDSSxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsR0FBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUVoQyxJQUFJLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZGLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxhQUFhLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0JBQU0sR0FBYixVQUFjLFlBQW9DO1lBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLENBQVE7WUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFPLEdBQWQ7WUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZjtnQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFVLENBQUM7Z0JBRXJDLElBQU0sR0FBRyxHQUFtQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU5RCxPQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNuQztvQkFDSSxJQUFNLEdBQUcsR0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUtMLGNBQUM7SUFBRCxDQUFDLENBcEo0QixLQUFLLEdBb0pqQztJQXBKWSw2QkFBTyxVQW9KbkI7QUFDTCxDQUFDLEVBN3pDZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQTZ6Q3JDIiwiZmlsZSI6Ii9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVtYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9GcmFtZXdvcmsvbW90aW9uL2N1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlci50c1wiKTtcbiIsIi8qXHJcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbipcclxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuKi9cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxyXG4vLy8g6Kmz57Sw44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1ZFUkJPU0U6IG51bWJlciA9IDA7XHJcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfREVCVUc6IG51bWJlciA9IDE7XHJcbi8vLyBJbmZv44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XHJcbi8vLyDorablkYrjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfV0FSTklORzogbnVtYmVyID0gMztcclxuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9FUlJPUjogbnVtYmVyID0gNDtcclxuLy8vIOODreOCsOWHuuWKm+OCquODleioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XHJcblxyXG4vKipcclxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcclxuKlxyXG4qIOW8t+WItueahOOBq+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuWkieOBiOOCi+aZguOBq+Wumue+qeOCkuacieWKueOBq+OBmeOCi+OAglxyXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXHJcbiovXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMOiBudW1iZXIgPSBDU01fTE9HX0xFVkVMX1ZFUkJPU0U7IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xyXG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIFcclxuICAgICAqIFxyXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIHjgZnjgovjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IGNzbVN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZyB8IGNzbVN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihpZCkgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG5ldyBjc21TdHJpbmcoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaWTjgpLmr5TovINcclxuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxyXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZOOCkuavlOi8g1xyXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXHJcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaWQ6IGNzbVN0cmluZzsgLy8gSUTlkI1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbUlkSGFuZGxlID0gQ3ViaXNtSWQ7XHJcbn0iLCIvKlxyXG4qIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qXHJcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xyXG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogSUTlkI3jga7nrqHnkIZcclxuICAgICAqIFxyXG4gICAgICogSUTlkI3jgpLnrqHnkIbjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMuc2V0KGksIHZvaWQgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faWRzID0gIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGlkcyBJROWQjeODquOCueODiFxyXG4gICAgICAgICAqIEBwYXJhbSBjb3VudCBJROOBruWAi+aVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkcyhpZHM6IHN0cmluZ1tdIHwgY3NtU3RyaW5nW10pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJZChpZHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOCkueZu+mMslxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBDdWJpc21JZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogQ3ViaXNtSWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5maW5kSWQoaWQpKSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEN1YmlzbUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5wdXNoQmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZC5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFeGlzdChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmluZElkKGlkKSAhPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0V4aXN0KGlkLnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuaknOe0ouOBmeOCi+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxyXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5kSWQoaWQ6IHN0cmluZyk6IEN1YmlzbUlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWRzLmF0KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29yZS9saXZlMmRjdWJpc21jb3JlLmQudHNcIiAvPlxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tIFwiLi91dGlscy9jdWJpc21qc29uXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkbWFuYWdlcn0gZnJvbSBcIi4vaWQvY3ViaXNtaWRtYW5hZ2VyXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXJlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcclxuaW1wb3J0IHtDdWJpc21Mb2dJbmZvLCBDdWJpc21Mb2dXYXJuaW5nLCBDU01fQVNTRVJUfSBmcm9tIFwiLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xyXG5pbXBvcnQgVmFsdWUgPSBjdWJpc21qc29uLlZhbHVlO1xyXG5pbXBvcnQgQ3ViaXNtSWRNYW5hZ2VyID0gY3ViaXNtaWRtYW5hZ2VyLkN1YmlzbUlkTWFuYWdlcjtcclxuaW1wb3J0IEN1YmlzbVJlbmRlcmVyID0gY3ViaXNtcmVuZGVyZXIuQ3ViaXNtUmVuZGVyZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RydG9kKHM6IHN0cmluZywgZW5kUHRyOiBzdHJpbmdbXSk6IG51bWJlclxyXG57XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZXN0Qzogc3RyaW5nID0gcy5zbGljZShpIC0gMSwgaSk7XHJcblxyXG4gICAgICAgIC8vIOaMh+aVsOODu+ODnuOCpOODiuOCueOBruWPr+iDveaAp+OBjOOBguOCi+OBruOBp+OCueOCreODg+ODl+OBmeOCi1xyXG4gICAgICAgIGlmKHRlc3RDPT0nZScgfHwgdGVzdEM9PSctJyB8fCB0ZXN0QyA9PSAnRScpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG7jgIDjgIDjgIAgIC8vIOaWh+Wtl+WIl+OBruevhOWbsuOCkuW6g+OBkuOBpuOBhOOBj1xyXG4gICAgICAgIGxldCB0ZXN0OiBzdHJpbmcgPSBzLnN1YnN0cmluZygwLCBpKTtcclxuICAgICAgICBsZXQgbnVtYmVyOiBudW1iZXIgPSBOdW1iZXIodGVzdCk7XHJcbiAgICAgICAgaWYoaXNOYU4obnVtYmVyKSlcclxuICAgICAgICB7XHJcbuOAgOOAgOOAgOOAgCAgICAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxu44CA44CA44CAIC8vIOacgOW+jOOBq+aVsOWApOOBqOOBl+OBpuOBp+OBjeOBn2luZGV444KS5qC857SN44GX44Gm44GK44GPXHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgfVxyXG4gICAgbGV0IGQgPSBwYXJzZUZsb2F0KHMpOyAgLy8g44OR44O844K544GX44Gf5pWw5YCkXHJcblxyXG4gICAgaWYoaXNOYU4oZCkpXHJcbiAgICB7XHJcbuOAgOOAgOOAgOOAgCAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcclxuICAgICAgICBkID0gTmFOO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZFB0clswXSA9IHMuc2xpY2UoaW5kZXgpO+OAgC8vIOW+jOe2muOBruaWh+Wtl+WIl1xyXG5cclxuICAgIHJldHVybiBkO1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvLyDjg5XjgqHjgqTjg6vjgrnjgrPjg7zjg5fjga7lpInmlbDjgpLliJ3mnJ/ljJZcclxuICAgIFxyXG4gICAgbGV0IHNfaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgc19pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgc19vcHRpb246IE9wdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgc19jdWJpc21JZE1hbmFnZXI6IEN1YmlzbUlkTWFuYWdlciA9IG51bGw7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29uc3RhbnRcclxuICAgIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4T2Zmc2V0OiBudW1iZXIgPSAwOyAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44Kq44OV44K744OD44OI5YCkXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleFN0ZXA6IG51bWJlciA9IDI7ICAgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCueODhuODg+ODl+WApFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjc21EZWxldGU8VD4oYWRkcmVzczogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighYWRkcmVzcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXZlMkQgQ3ViaXNtMyBPcmlnaW5hbCBXb3JrZmxvdyBTREvjga7jgqjjg7Pjg4jjg6rjg53jgqTjg7Pjg4hcclxuICAgICAqIOWIqeeUqOmWi+Wni+aZguOBr0N1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnjgpLlkbzjgbPjgIFDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgp44Gn57WC5LqG44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21GcmFtZXdvcmtcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So5Y+v6IO944Gr44GZ44KL44CCXHJcbiAgICAgICAgICogIEFQSeOCkuWun+ihjOOBmeOCi+WJjeOBq+W/heOBmuOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOAglxyXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgICBvcHRpb24gICAgICBPcHRpb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4gICDmupblgpnlh6bnkIbjgYzlrozkuobjgZfjgZ/jgol0cnVl44GM6L+U44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBhbHJlYWR5IGRvbmUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzX29wdGlvbiA9IG9wdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKHNfb3B0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpdmUyRCBDdWJpc20gQ29yZeODkOODvOOCuOODp+ODs+aDheWgseOCkuihqOekulxyXG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbjogbnVtYmVyID0gTGl2ZTJEQ3ViaXNtQ29yZS5WZXJzaW9uLmNzbUdldFZlcnNpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5vcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMEZGMDAwMCkgPj4gMTYpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2g6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDAwMEZGRkYpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XHJcblxyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhgTGl2ZTJEIEN1YmlzbSBDb3JlIHZlcnNpb246IHswfS57MX0uezJ9ICh7M30pYCwgXHJcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtYWpvcikuc2xpY2UoLTIpLFxyXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWlub3IpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgcGF0Y2gpLnNsaWNlKC00KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBjb21wbGV0ZS5cIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydFVwKCnjgafliJ3mnJ/ljJbjgZfjgZ9DdWJpc21GcmFtZXdvcmvjga7lkITjg5Hjg6njg6Hjg7zjgr/jgpLjgq/jg6rjgqLjgZfjgb7jgZnjgIJcclxuICAgICAgICAgKiBEaXNwb3NlKCnjgZfjgZ9DdWJpc21GcmFtZXdvcmvjgpLlho3liKnnlKjjgZnjgovpmpvjgavliKnnlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFuVXAoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNfb3B0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruODquOCveODvOOCueOCkuWIneacn+WMluOBl+OBpuODouODh+ODq+OCkuihqOekuuWPr+iDveOBqueKtuaFi+OBq+OBl+OBvuOBmeOAgjxicj5cclxuICAgICAgICAgKiAgICAg5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xyXG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL6YCj57aa5Yid5pyf5YyW44Ks44O844OJIC0tLVxyXG4gICAgICAgICAgICAvLyDpgKPntprjgZfjgabjg6rjgr3jg7zjgrnnorrkv53jgYzooYzjgo/jgozjgarjgYTjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgICAgICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXHJcbiAgICAgICAgICAgIGlmIChzX2lzSW5pdGlhbGl6ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLy0tLS0gc3RhdGljIOWIneacn+WMliAtLS0tXHJcbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk7XHJcblxyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG5ldyBDdWJpc21JZE1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBpcyBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXHJcbiAgICAgICAgICogICAgICDjgZ/jgaDjgZfjgIHlpJbpg6jjgafnorrkv53jgZXjgozjgZ/jg6rjgr3jg7zjgrnjgavjgaTjgYTjgabjga/op6PmlL7jgZfjgb7jgZvjgpPjgIJcclxuICAgICAgICAgKiAgICAgIOWklumDqOOBp+mBqeWIh+OBq+egtOajhOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcclxuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+acquWIneacn+WMluino+aUvuOCrOODvOODiSAtLS1cclxuICAgICAgICAgICAgLy8gZGlzcG9zZSgp44GZ44KL44Gr44Gv5YWI44GraW5pdGlhbGl6ZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXHJcbiAgICAgICAgICAgIGlmKCFzX2lzSW5pdGlhbGl6ZWQpICAgIC8vIGZhbHNlLi4u44Oq44K944O844K55pyq56K65L+d44Gu5aC05ZCIXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIHNraXBwZWQsIG5vdCBpbml0aWFsaXplZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk7XHJcblxyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlci5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIOODrOODs+ODgOODqeOBrumdmeeahOODquOCveODvOOCue+8iOOCt+OCp+ODvOODgOODl+ODreOCsOODqeODoOS7lu+8ieOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIGlzIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIEFQSeOCkuS9v+eUqOOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZnjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga7jg6rjgr3jg7zjgrnliJ3mnJ/ljJbjgYzjgZnjgafjgavooYzjgo/jgozjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIOODquOCveODvOOCueeiuuS/neOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNfaXNJbml0aWFsaXplZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvcmUgQVBJ44Gr44OQ44Kk44Oz44OJ44GX44Gf44Ot44Kw6Zai5pWw44KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHByYXJhbSBtZXNzYWdlIOODreOCsOODoeODg+OCu+ODvOOCuFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29yZUxvZ0Z1bmN0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cclxuICAgICAgICAgICAgaWYoIUxpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKTjgpLov5TjgZnjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4gIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9nZ2luZ0xldmVsKCk6IExvZ0xldmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc19vcHRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfb3B0aW9uLmxvZ2dpbmdMZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuTG9nTGV2ZWxfT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbU1hbmFnZXLjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldElkTWFuYWdlcigpOiBDdWJpc21JZE1hbmFnZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzX2N1YmlzbUlkTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmdmeeahOOCr+ODqeOCueOBqOOBl+OBpuS9v+eUqOOBmeOCi1xyXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueWMluOBleOBm+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uXHJcbntcclxuICAgIGxvZ0Z1bmN0aW9uOiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uOyAgIC8vIOODreOCsOWHuuWKm+OBrumWouaVsOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgbG9nZ2luZ0xldmVsOiBMb2dMZXZlbDsgIC8vIOODreOCsOWHuuWKm+ODrOODmeODq+OBruioreWumlxyXG59XHJcblxyXG4vKipcclxuICog44Ot44Kw5Ye65Yqb44Gu44Os44OZ44OrXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbFxyXG57XHJcbiAgICBMb2dMZXZlbF9WZXJib3NlID0gMCwgICAvLyDoqbPntLDjg63jgrBcclxuICAgIExvZ0xldmVsX0RlYnVnLCAgICAgICAgIC8vIOODh+ODkOODg+OCsOODreOCsFxyXG4gICAgTG9nTGV2ZWxfSW5mbywgICAgICAgICAgLy8gSW5mb+ODreOCsFxyXG4gICAgTG9nTGV2ZWxfV2FybmluZywgICAgICAgLy8g6K2m5ZGK44Ot44KwXHJcbiAgICBMb2dMZXZlbF9FcnJvciwgICAgICAgICAvLyDjgqjjg6njg7zjg63jgrBcclxuICAgIExvZ0xldmVsX09mZiAgICAgICAgICAgIC8vIOODreOCsOWHuuWKm+eEoeWKuVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSBcIi4vY3ViaXNtdmVjdG9yMlwiO1xyXG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5pWw5YCk6KiI566X44Gq44Gp44Gr5L2/55So44GZ44KL44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRoXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56ys5LiA5byV5pWw44Gu5YCk44KS5pyA5bCP5YCk44Go5pyA5aSn5YCk44Gu56+E5Zuy44Gr5Y+O44KB44Gf5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWPjuOCgeOCieOCjOOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSBtaW4gICDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgICAgICAgKiBAcGFyYW0gbWF4ICAg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFuZ2UodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCBtaW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKTvvIjjg6njgrjjgqLjg7PvvIlcclxuICAgICAgICAgKiBAcmV0dXJuIOOCteOCpOODs+mWouaVsHNpbih4KeOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzaW4oeDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKQo44Op44K444Ki44OzKVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44K144Kk44Oz6Zai5pWwY29zKHgp44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGNvcyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNvcyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWApOOBrue1tuWvvuWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOe1tuWvvuWApOOCkuaxguOCgeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5YCk44Gu57W25a++5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGFicyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW5s+aWueaguSjjg6vjg7zjg4gp44KS5rGC44KB44KLXHJcbiAgICAgICAgICogQHBhcmFtIHggLT4g5bmz5pa55qC544KS5rGC44KB44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiDlgKTjga7lubPmlrnmoLlcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgc3FydCh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqTjg7Pjg7vjgqLjgqbjg4jmmYLjga7jgqTjg7zjgrjjg7PjgrDjgavliKnnlKjjgafjgY3jgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44Kk44O844K444Oz44Kw44KS6KGM44GG5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZ2V0RWFzaW5nU2luZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgLSAwLjUgKiB0aGlzLmNvcyh2YWx1ZSAqIE1hdGguUEkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5aSn44GN44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQg5bem6L6644Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHJpZ2h0IOWPs+i+uuOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm4g5aSn44GN44GE5pa544Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIG1heChsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgPyBsZWZ0XHJcbiAgICAgICAgICAgICAgICA6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCP44GV44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQgIOW3pui+uuOBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKTjgIBcclxuICAgICAgICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBtaW4obGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGxlZnQgPiByaWdodClcclxuICAgICAgICAgICAgICAgID8gcmlnaHRcclxuICAgICAgICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinkuW6puWApOOCkuODqeOCuOOCouODs+WApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBkZWdyZWVzICAg6KeS5bqm5YCkXHJcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonlpInmj5vjgZfjgZ/jg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFuKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkZWdyZWVzIC8gMTgwLjApICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuinkuW6puWApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByYWRpYW4gICAg44Op44K444Ki44Oz5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjg6njgrjjgqLjg7PlgKTjgYvjgonlpInmj5vjgZfjgZ/op5LluqblgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFkaWFuVG9EZWdyZWVzKHJhZGlhbjogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJhZGlhbiAqIDE4MC4wKSAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonjg6njgrjjgqLjg7PlgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvUmFkaWFuKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBxMTogbnVtYmVyID0gTWF0aC5hdGFuMih0by55LCB0by54KTtcclxuICAgICAgICAgICAgY29uc3QgcTI6IG51bWJlciA9IE1hdGguYXRhbjIoZnJvbS55LCBmcm9tLngpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJldDogbnVtYmVyID0gcTEgLSBxMjtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKHJldCA8IC1NYXRoLlBJKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gTWF0aC5QSSAqIDIuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUocmV0ID4gTWF0aC5QSSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0IC09IE1hdGguUEkgKiAyLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonop5LluqblgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g6KeS5bqm5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvRGVncmVlcyhmcm9tOiBDdWJpc21WZWN0b3IyLCB0bzogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaWFuOiBudW1iZXIgPSB0aGlzLmRpcmVjdGlvblRvUmFkaWFuKGZyb20sIHRvKTtcclxuICAgICAgICAgICAgbGV0IGRlZ3JlZTogbnVtYmVyID0gdGhpcy5yYWRpYW5Ub0RlZ3JlZXMocmFkaWFuKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodG8ueCAtIGZyb20ueCkgPiAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZSA9IC1kZWdyZWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6njgrjjgqLjg7PlgKTjgpLmlrnlkJHjg5njgq/jg4jjg6vjgavlpInmj5vjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdG90YWxBbmdsZSAgICDjg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+aWueWQkeODmeOCr+ODiOODq1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgc3RhdGljIHJhZGlhblRvRGlyZWN0aW9uKHRvdGFsQW5nbGU6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy5zaW4odG90YWxBbmdsZSk7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy5jb3ModG90YWxBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvKipcclxuICAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcclxuICAgICAgICAge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIDR4NOOBruihjOWIl1xyXG4gICAgICogXHJcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdHJpeDQ0XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XHJcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj5fjgZHlj5bjgaPjgZ/vvJLjgaTjga7ooYzliJfjga7kuZfnrpfjgpLooYzjgYbjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXHJcbiAgICAgICAgICogQHBhcmFtIGIg6KGM5YiXYlxyXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBGbG9hdDMyQXJyYXksIGI6IEZsb2F0MzJBcnJheSwgZHN0OiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbjsgKytqKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbG9hZElkZW50aXR5KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooYzliJfjgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTY7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruenu+WLlemHj+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVZKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1jou7jjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdICogc3JjICsgdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm55u45a++55qE44Gr56e75YuV44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzY2FsZVJlbGF0aXZlKHg6IG51bWJlciwgeTpudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsIFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLCAgICAxLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xyXG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei1xyXG4gICAgICogXHJcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6L44Gu5qmf6IO944KS5o+Q5L6b44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21WZWN0b3IyXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHg/OiBudW1iZXIsIHB1YmxpYyB5PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gKHggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyAwLjBcclxuICAgICAgICAgICAgICAgIDogeDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMueSA9ICh5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gMC4wXHJcbiAgICAgICAgICAgICAgICA6IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruWKoOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOWKoOeul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5Yqg566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54ICsgdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSArIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5rib566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5rib566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmuJvnrpfntZDmnpwg44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN1YnN0cmFjdCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLSB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC0gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDkuZfnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKiB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICogdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpco44K544Kr44Op44O8KVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzY2FsYXIg5LmX566X44GZ44KL44K544Kr44Op44O85YCkXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeVNjYWxlcihzY2FsYXI6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7pmaTnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDpmaTnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbih2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLyB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC8gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XKOOCueOCq+ODqeODvClcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOmZpOeul+OBmeOCi+OCueOCq+ODqeODvOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g6Zmk566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRpdmlzaW9uQnlTY2FsYXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpc2lvbihuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6ZW344GV44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7plbfjgZVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Led6Zui44Gu5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGEg54K5XHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7ot53pm6JcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RGlzdGFuY2VXaXRoKGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoKCh0aGlzLnggLSBhLngpICogKHRoaXMueCAtIGEueCkpICsgKCh0aGlzLnkgLSBhLnkpICogKHRoaXMueSAtIGEueSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODieODg+ODiOepjeOBruioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g57WQ5p6cXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRvdChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueCAqIGEueCkgKyAodGhpcy55ICogYS55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOato+imj+WMluOBrumBqeeUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3JtYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBNYXRoLnBvdygodGhpcy54ICogdGhpcy54KSArICh0aGlzLnkgKiB0aGlzLnkpLCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnrYnjgZfjgZXjga7norroqo3vvIjnrYnjgZfjgYTjgYvvvJ/vvIlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgYTjgYvvvJ9cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ID09IHJocy54KSAmJiAodGhpcy55ID09IHJocy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBj+OBquOBhOOBi++8n++8iVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBj+OBquOBhOOBi++8n1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwocmhzOiBDdWJpc21WZWN0b3IyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5pc0VxdWFsKHJocykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0aH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRoJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9ucXVldWVlbnRyeX0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5JztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tICcuLi90eXBlL2NzbXN0cmluZyc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSAnLi4vdHlwZS9jc212ZWN0b3InO1xyXG5pbXBvcnQgeyBDU01fQVNTRVJUIH0gZnJvbSAnLi4vdXRpbHMvY3ViaXNtZGVidWcnO1xyXG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcbmltcG9ydCBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gY3ViaXNtbW90aW9ucXVldWVlbnRyeS5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5O1xyXG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcclxuaW1wb3J0IEN1YmlzbU1hdGggPSBjdWJpc21tYXRoLkN1YmlzbU1hdGg7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODouODvOOCt+ODp+ODs+OBruaKveixoeWfuuW6leOCr+ODqeOCuVxyXG4gICAgICogXHJcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7mir3osaHln7rlupXjgq/jg6njgrnjgIJNb3Rpb25RdWV1ZU1hbmFnZXLjgavjgojjgaPjgabjg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLnrqHnkIbjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFDdWJpc21Nb3Rpb25cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjga7noLTmo4RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShtb3Rpb246IEFDdWJpc21Nb3Rpb24pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBtb3Rpb24gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIG1vdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU2Vjb25kcyA9IC0xLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gLTEuMDtcclxuICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZzZXRTZWNvbmRzID0gMC4wOyAgLy8g5YaN55Sf44Gu6ZaL5aeL5pmC5Yi7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXMgPSBuZXcgY3NtVmVjdG9yPGNzbVN0cmluZz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlaWdodCA9IDAuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDlr77osaHjga7jg6Ljg4fjg6tcclxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uUXVldWVFbnRyeSBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXLjgafnrqHnkIbjgZXjgozjgabjgYTjgovjg6Ljg7zjgrfjg6fjg7NcclxuICAgICAgICAgKiBAcGFyYW0gdXNlclRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVBhcmFtZXRlcnMobW9kZWw6IEN1YmlzbU1vZGVsLCBtb3Rpb25RdWV1ZUVudHJ5OiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5LCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFtb3Rpb25RdWV1ZUVudHJ5LmlzQXZhaWxhYmxlKCkgfHwgbW90aW9uUXVldWVFbnRyeS5pc0ZpbmlzaGVkKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW1vdGlvblF1ZXVlRW50cnkuaXNTdGFydGVkKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNTdGFydGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRTdGFydFRpbWUodXNlclRpbWVTZWNvbmRzIC0gdGhpcy5fb2Zmc2V0U2Vjb25kcyk7IC8vIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu+OCkuiomOmMslxyXG4gICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRGYWRlSW5TdGFydFRpbWUodXNlclRpbWVTZWNvbmRzKTsgLy8g44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb246IG51bWJlciA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZaL5aeL44GX44Gm44GE44Gq44GE44GG44Gh44Gr57WC5LqG6Kit5a6a44GX44Gm44GE44KL5aC05ZCI44GM44GC44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRFbmRUaW1lKChkdXJhdGlvbiA8PSAwKSA/IC0xIDogbW90aW9uUXVldWVFbnRyeS5nZXRTdGFydFRpbWUoKSArIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkdXJhdGlvbiA9PSAtMSDjga7loLTlkIjjga/jg6vjg7zjg5fjgZnjgotcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZhZGVXZWlnaHQ6IG51bWJlciA9IHRoaXMuX3dlaWdodDsgLy8g54++5Zyo44Gu5YCk44Go5o6b44GR5ZCI44KP44Gb44KL5Ymy5ZCIXHJcblxyXG4gICAgICAgICAgICAvLy0tLS0g44OV44Kn44O844OJ44Kk44Oz44O744Ki44Km44OI44Gu5Yem55CGIC0tLS1cclxuICAgICAgICAgICAgLy8g5Y2Y57SU44Gq44K144Kk44Oz6Zai5pWw44Gn44Kk44O844K444Oz44Kw44GZ44KLXHJcbiAgICAgICAgICAgIGNvbnN0IGZhZGVJbjogbnVtYmVyID0gdGhpcy5fZmFkZUluU2Vjb25kcyA9PSAwLjBcclxuICAgICAgICAgICAgICAgICAgICA/IDEuMFxyXG4gICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtTWF0aC5nZXRFYXNpbmdTaW5lKCh1c2VyVGltZVNlY29uZHMgLSBtb3Rpb25RdWV1ZUVudHJ5LmdldEZhZGVJblN0YXJ0VGltZSgpKSAvIHRoaXMuX2ZhZGVJblNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmFkZU91dDogbnVtYmVyID0gKHRoaXMuX2ZhZGVPdXRTZWNvbmRzID09IDAuMCB8fCBtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDAuMClcclxuICAgICAgICAgICAgICAgICAgICA/IDEuMFxyXG4gICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtTWF0aC5nZXRFYXNpbmdTaW5lKChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSAtIHVzZXJUaW1lU2Vjb25kcykgLyB0aGlzLl9mYWRlT3V0U2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICBmYWRlV2VpZ2h0ID0gZmFkZVdlaWdodCAqIGZhZGVJbiAqIGZhZGVPdXQ7XHJcblxyXG4gICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnNldFN0YXRlKHVzZXJUaW1lU2Vjb25kcywgZmFkZVdlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAuMCA8PSBmYWRlV2VpZ2h0ICYmIGZhZGVXZWlnaHQgPD0gMS4wKTtcclxuXHJcbiAgICAgICAgICAgIC8vLS0tLSDlhajjgabjga7jg5Hjg6njg6Hjg7zjgr9JROOCkuODq+ODvOODl+OBmeOCiyAtLS0tXHJcbiAgICAgICAgICAgIHRoaXMuZG9VcGRhdGVQYXJhbWV0ZXJzKG1vZGVsLCB1c2VyVGltZVNlY29uZHMsIGZhZGVXZWlnaHQsIG1vdGlvblF1ZXVlRW50cnkpO1xyXG5cclxuICAgICAgICAgICAgLy8g5b6M5Yem55CGXHJcbiAgICAgICAgICAgIC8vIOe1guS6huaZguWIu+OCkumBjuOBjuOBn+OCiee1guS6huODleODqeOCsOOCkueri+OBpuOCiyhDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIpXHJcbiAgICAgICAgICAgIGlmKChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA+IDApICYmIChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IHVzZXJUaW1lU2Vjb25kcykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNGaW5pc2hlZCh0cnVlKTsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+OBruaZgumWk+OCkuioreWumuOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBmYWRlSW5TZWNvbmRzIOODleOCp+ODvOODieOCpOODs+OBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEZhZGVJblRpbWUoZmFkZUluU2Vjb25kczogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU2Vjb25kcyA9IGZhZGVJblNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7mmYLplpPjgpLoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gZmFkZU91dFNlY29uZHMg44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RmFkZU91dFRpbWUoZmFkZU91dFNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gZmFkZU91dFNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgavjgYvjgYvjgovmmYLplpPjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEZhZGVPdXRUaW1lKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZhZGVPdXRTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaT44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7PjgavjgYvjgYvjgovmmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRGYWRlSW5UaW1lKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZhZGVJblNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PpgannlKjjga7ph43jgb/jga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv++8iDAuMCAtIDEuMO+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PpgannlKjjga7ph43jgb/jga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOmHjeOBv++8iDAuMCAtIDEuMO+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRXZWlnaHQoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu6ZW344GV44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZVb56eSXVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBub3RlIOODq+ODvOODl+OBruaZguOBr+OAjC0x44CN44CCXHJcbiAgICAgICAgICogICAgICAg44Or44O844OX44Gn44Gq44GE5aC05ZCI44Gv44CB44Kq44O844OQ44O844Op44Kk44OJ44GZ44KL44CCXHJcbiAgICAgICAgICogICAgICAg5q2j44Gu5YCk44Gu5pmC44Gv5Y+W5b6X44GV44KM44KL5pmC6ZaT44Gn57WC5LqG44GZ44KL44CCXHJcbiAgICAgICAgICogICAgICAg44CMLTHjgI3jga7mmYLjga/lpJbpg6jjgYvjgonlgZzmraLlkb3ku6TjgYzjgarjgYTpmZDjgorntYLjgo/jgonjgarjgYTlh6bnkIbjgajjgarjgovjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHVyYXRpb24oKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTEuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODlzHlm57liIbjga7plbfjgZXjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODl+S4gOWbnuWIhuOBrumVt+OBlVvnp5JdXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQG5vdGUg44Or44O844OX44GX44Gq44GE5aC05ZCI44Gv44CBZ2V0RHVyYXRpb24oKeOBqOWQjOOBmOWApOOCkui/lOOBmVxyXG4gICAgICAgICAqICAgICAgIOODq+ODvOODl+S4gOWbnuWIhuOBrumVt+OBleOBjOWumue+qeOBp+OBjeOBquOBhOWgtOWQiCjjg5fjg63jgrDjg6njg6DnmoTjgavli5XjgY3ntprjgZHjgovjgrXjg5bjgq/jg6njgrnjgarjgakp44Gu5aC05ZCI44Gv44CMLTHjgI3jgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TG9vcER1cmF0aW9uKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xLjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLliLvjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRPZmZzZXRUaW1lKG9mZnNldFNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZnNldFNlY29uZHMgPSBvZmZzZXRTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44Gu44OR44Op44Oh44O844K/5pu05pawXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog44Kk44OZ44Oz44OI55m654Gr44Gu44OB44Kn44OD44Kv44CCXHJcbiAgICAgICAgICog5YWl5Yqb44GZ44KL5pmC6ZaT44Gv5ZG844Gw44KM44KL44Oi44O844K344On44Oz44K/44Kk44Of44Oz44Kw44KS77yQ44Go44GX44Gf56eS5pWw44Gn6KGM44GG44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJlZm9yZUNoZWNrVGltZVNlY29uZHMg5YmN5Zue44Gu44Kk44OZ44Oz44OI44OB44Kn44OD44Kv5pmC6ZaTW+enkl1cclxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uVGltZVNlY29uZHMg5LuK5Zue44Gu5YaN55Sf5pmC6ZaTW+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RmlyZWRFdmVudChiZWZvcmVDaGVja1RpbWVTZWNvbmRzOiBudW1iZXIsIG1vdGlvblRpbWVTZWNvbmRzOiBudW1iZXIpOiBjc21WZWN0b3I8Y3NtU3RyaW5nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgpLmm7TmlrDjgZfjgabjgIHjg6Ljg4fjg6vjgavjg5Hjg6njg6Hjg7zjgr/lgKTjgpLlj43mmKDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg5a++6LGh44Gu44Oi44OH44OrXHJcbiAgICAgICAgICogQHBhcmFtIHVzZXJUaW1lU2Vjb25kcyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgICogQHBhcmFtIG1vdGlvblF1ZXVlRW50cnkgQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn566h55CG44GV44KM44Gm44GE44KL44Oi44O844K344On44OzXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOODouODh+ODq+OBuOODkeODqeODoeODvOOCv+WApOOBruWPjeaYoOOBguOCilxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Oi44OH44Or44G444Gu44OR44Op44Oh44O844K/5YCk44Gu5Y+N5pig44Gq44GX77yI44Oi44O844K344On44Oz44Gu5aSJ5YyW44Gq44GX77yJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvVXBkYXRlUGFyYW1ldGVycyhtb2RlbDogQ3ViaXNtTW9kZWwsIHVzZXJUaW1lU2Vjb25kczogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciwgbW90aW9uUXVldWVFbnRyeTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeSk6IHZvaWQ7XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgX2ZhZGVJblNlY29uZHM6IG51bWJlcjsgLy8g44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICBwdWJsaWMgX2ZhZGVPdXRTZWNvbmRzOiBudW1iZXI7IC8vIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgcHVibGljIF93ZWlnaHQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgcHVibGljIF9vZmZzZXRTZWNvbmRzOiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+WGjeeUn+OBrumWi+Wni+aZgumWk1vnp5JdXHJcblxyXG4gICAgICAgIHB1YmxpYyBfZmlyZWRFdmVudFZhbHVlczogY3NtVmVjdG9yPGNzbVN0cmluZz47XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGFjdWJpc21tb3Rpb259IGZyb20gJy4vYWN1YmlzbW1vdGlvbic7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlcn0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZW1hbmFnZXInO1xyXG5pbXBvcnQgQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSA9IGN1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlci5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlO1xyXG5pbXBvcnQgQUN1YmlzbU1vdGlvbiA9IGFjdWJpc21tb3Rpb24uQUN1YmlzbU1vdGlvbjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn5YaN55Sf44GX44Gm44GE44KL5ZCE44Oi44O844K344On44Oz44Gu566h55CG44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9EZWxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fbW90aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWVTZWNvbmRzID0gLTEuMDtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU3RhcnRUaW1lU2Vjb25kcyA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kVGltZVNlY29uZHMgPSAtMS4wO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVRpbWVTZWNvbmRzID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVdlaWdodCA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEV2ZW50Q2hlY2tTZWNvbmRzID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2F1dG9EZWxldGUgJiYgdGhpcy5fbW90aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBQ3ViaXNtTW90aW9uLmRlbGV0ZSh0aGlzLl9tb3Rpb24pOyAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7plovlp4tcclxuICAgICAgICAgKiBAcGFyYW0gZmFkZU91dFNlY29uZHMg44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICAgKiBAcGFyYW0gdXNlclRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXJ0RmFkZW91dChmYWRlb3V0U2Vjb25kczogbnVtYmVyLCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0VuZFRpbWVTZWNvbmRzOiBudW1iZXIgPSB1c2VyVGltZVNlY29uZHMgKyBmYWRlb3V0U2Vjb25kcztcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2VuZFRpbWVTZWNvbmRzIDwgMC4wIHx8IG5ld0VuZFRpbWVTZWNvbmRzIDwgdGhpcy5fZW5kVGltZVNlY29uZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZFRpbWVTZWNvbmRzID0gbmV3RW5kVGltZVNlY29uZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrue1guS6huOBrueiuuiqjVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOe1guS6huOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0ZpbmlzaGVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+OBrueiuuiqjVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7PjgYzplovlp4vjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOmWi+Wni+OBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4vmmYLliLvjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0YXJ0VGltZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWVTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7Pjga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRGYWRlSW5TdGFydFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmFkZUluU3RhcnRUaW1lU2Vjb25kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+OBrue1guS6huaZguWIu+OBruWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEVuZFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5kVGltZVNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4vmmYLliLvjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gc3RhcnRUaW1lIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRTdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWVTZWNvbmRzID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHN0YXJ0VGltZSDjg5Xjgqfjg7zjg4njgqTjg7Pjga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRGYWRlSW5TdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9mYWRlSW5TdGFydFRpbWVTZWNvbmRzID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi744Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGVuZFRpbWUg44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi7W+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RW5kVGltZShlbmRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRUaW1lU2Vjb25kcyA9IGVuZFRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7ntYLkuobjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gZiB0cnVl44Gq44KJ44Oi44O844K344On44Oz44Gu57WC5LqGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzRmluaXNoZWQoZjogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBmIHRydWXjgarjgonjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0SXNTdGFydGVkKGY6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydGVkID0gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruacieWKueaAp+OBrueiuuiqjVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7Pjga/mnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOODouODvOOCt+ODp+ODs+OBr+eEoeWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu5pyJ5Yq55oCn44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHYgdHJ1ZeOBquOCieODouODvOOCt+ODp+ODs+OBr+acieWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRJc0F2YWlsYWJsZSh2OiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrueKtuaFi+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSB0aW1lU2Vjb25kcyDnj77lnKjmmYLliLtb56eSXVxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg44Oi44O844K344On44Oz5bC+6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFN0YXRlKHRpbWVTZWNvbmRzOiBudW1iZXIsIHdlaWdodDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVUaW1lU2Vjb25kcyA9IHRpbWVTZWNvbmRzO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVdlaWdodCA9IHdlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu54++5Zyo5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7nj77lnKjmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0ZVRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVUaW1lU2Vjb25kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrumHjeOBv+OBruWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0YXRlV2VpZ2h0KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlV2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pyA5b6M44Gr44Kk44OZ44Oz44OI44Gu55m654Gr44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaT44KS5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDmnIDlvozjgavjgqTjg5njg7Pjg4jjga7nmbrngavjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRMYXN0Q2hlY2tFdmVudFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFzdEV2ZW50Q2hlY2tTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pyA5b6M44Gr44Kk44OZ44Oz44OI44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaT44KS6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGNoZWNrVGltZSDmnIDlvozjgavjgqTjg5njg7Pjg4jjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRMYXN0Q2hlY2tFdmVudFRpbWUoY2hlY2tUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RXZlbnRDaGVja1NlY29uZHMgPSBjaGVja1RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfYXV0b0RlbGV0ZTogYm9vbGVhbjsgICAgICAgICAgICAgICAvLyDoh6rli5XliYrpmaRcclxuICAgICAgICBfbW90aW9uOiBBQ3ViaXNtTW90aW9uOyAgICAgICAgICAgICAvLyDjg6Ljg7zjgrfjg6fjg7NcclxuXHJcbiAgICAgICAgX2F2YWlsYWJsZTogYm9vbGVhbjsgICAgICAgICAgICAgICAgLy8g5pyJ5Yq55YyW44OV44Op44KwXHJcbiAgICAgICAgX2ZpbmlzaGVkOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g57WC5LqG44OV44Op44KwXHJcbiAgICAgICAgX3N0YXJ0ZWQ6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgLy8g6ZaL5aeL44OV44Op44KwXHJcbiAgICAgICAgX3N0YXJ0VGltZVNlY29uZHM6IG51bWJlcjsgICAgICAgICAgLy8g44Oi44O844K344On44Oz5YaN55Sf6ZaL5aeL5pmC5Yi7W+enkl1cclxuICAgICAgICBfZmFkZUluU3RhcnRUaW1lU2Vjb25kczogbnVtYmVyOyAgICAvLyDjg5Xjgqfjg7zjg4njgqTjg7Pplovlp4vmmYLliLvvvIjjg6vjg7zjg5fjga7mmYLjga/liJ3lm57jga7jgb/vvIlb56eSXVxyXG4gICAgICAgIF9lbmRUaW1lU2Vjb25kczogbnVtYmVyOyAgICAgICAgICAgIC8vIOe1guS6huS6iOWumuaZguWIu1vnp5JdXHJcbiAgICAgICAgX3N0YXRlVGltZVNlY29uZHM6IG51bWJlcjsgICAgICAgICAgLy8g5pmC5Yi744Gu54q25oWLW+enkl1cclxuICAgICAgICBfc3RhdGVXZWlnaHQ6IG51bWJlcjvjgIAgICAgICAgICAgICAgLy8g6YeN44G/44Gu54q25oWLXHJcbiAgICAgICAgX2xhc3RFdmVudENoZWNrU2Vjb25kczogbnVtYmVyOyAgICAgLy8g5pyA57WC44GuTW90aW9u5YG044Gu44OB44Kn44OD44Kv44GX44Gf5pmC6ZaTXHJcblxyXG4gICAgICAgIF9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlOyAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnjgZTjgajjgavkuIDmhI/jga7lgKTjgpLmjIHjgaTorZjliKXnlarlj7dcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgYWN1YmlzbW1vdGlvbn0gZnJvbSAnLi9hY3ViaXNtbW90aW9uJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9ucXVldWVlbnRyeX0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5JztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tICcuLi90eXBlL2NzbXZlY3Rvcic7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tICcuLi9tb2RlbC9jdWJpc21tb2RlbCc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSAnLi4vdHlwZS9jc21zdHJpbmcnO1xyXG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcclxuaW1wb3J0IEN1YmlzbU1vZGVsID0gY3ViaXNtbW9kZWwuQ3ViaXNtTW9kZWw7XHJcbmltcG9ydCBjc21WZWN0b3IgPSBjc212ZWN0b3IuY3NtVmVjdG9yO1xyXG5pbXBvcnQgaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XHJcbmltcG9ydCBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gY3ViaXNtbW90aW9ucXVldWVlbnRyeS5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5O1xyXG5pbXBvcnQgQUN1YmlzbU1vdGlvbiA9IGFjdWJpc21tb3Rpb24uQUN1YmlzbU1vdGlvbjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44Oi44O844K344On44Oz5YaN55Sf44Gu566h55CGXHJcbiAgICAgKlxyXG4gICAgICog44Oi44O844K344On44Oz5YaN55Sf44Gu566h55CG55So44Kv44Op44K544CCQ3ViaXNtTW90aW9u44Oi44O844K344On44Oz44Gq44GpQUN1YmlzbU1vdGlvbuOBruOCteODluOCr+ODqeOCueOCkuWGjeeUn+OBmeOCi+OBn+OCgeOBq+S9v+eUqOOBmeOCi+OAglxyXG4gICAgICpcclxuICAgICAqIEBub3RlIOWGjeeUn+S4reOBq+WIpeOBruODouODvOOCt+ODp+ODs+OBjCBTdGFydE1vdGlvbigp44GV44KM44Gf5aC05ZCI44Gv44CB5paw44GX44GE44Oi44O844K344On44Oz44Gr5ruR44KJ44GL44Gr5aSJ5YyW44GX5pen44Oi44O844K344On44Oz44Gv5Lit5pat44GZ44KL44CCXHJcbiAgICAgKiAgICAgICDooajmg4XnlKjjg6Ljg7zjgrfjg6fjg7PjgIHkvZPnlKjjg6Ljg7zjgrfjg6fjg7PjgarjganjgpLliIbjgZHjgabjg6Ljg7zjgrfjg6fjg7PljJbjgZfjgZ/loLTlkIjjgarjganjgIFcclxuICAgICAqICAgICAgIOikh+aVsOOBruODouODvOOCt+ODp+ODs+OCkuWQjOaZguOBq+WGjeeUn+OBleOBm+OCi+WgtOWQiOOBr+OAgeikh+aVsOOBrkN1YmlzbU1vdGlvblF1ZXVlTWFuYWdlcuOCpOODs+OCueOCv+ODs+OCueOCkuS9v+eUqOOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2VyXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRDYWxsQmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50Q3VzdG9tRGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbnMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbU1vdGlvblF1ZXVlRW50cnk+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9tb3Rpb25zLmdldFNpemUoKTsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9tb3Rpb25zLmF0KGkpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbnMuYXQoaSkucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdGlvbnMuc2V0KGksIHZvaWQgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW90aW9ucy5zZXQoaSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21vdGlvbnMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5oyH5a6a44GX44Gf44Oi44O844K344On44Oz44Gu6ZaL5aeLXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiDmjIflrprjgZfjgZ/jg6Ljg7zjgrfjg6fjg7PjgpLplovlp4vjgZnjgovjgILlkIzjgZjjgr/jgqTjg5fjga7jg6Ljg7zjgrfjg6fjg7PjgYzml6LjgavjgYLjgovloLTlkIjjga/jgIHml6LlrZjjga7jg6Ljg7zjgrfjg6fjg7PjgavntYLkuobjg5Xjg6njgrDjgpLnq4vjgabjgIHjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgpLplovlp4vjgZXjgZvjgovjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgIG1vdGlvbiAgICAgICAgICDplovlp4vjgZnjgovjg6Ljg7zjgrfjg6fjg7NcclxuICAgICAgICAgKiBAcGFyYW0gICBhdXRvRGVsZXRlICAgICAg5YaN55Sf44GM57WC5LqG44GX44Gf44Oi44O844K344On44Oz44Gu44Kk44Oz44K544K/44Oz44K544KS5YmK6Zmk44GZ44KL44Gq44KJIHRydWVcclxuICAgICAgICAgKiBAcGFyYW0gICB1c2VyVGltZVNlY29uZHMg44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cclxuICAgICAgICAgKiBAcmV0dXJuICAgICAgICAgICAgICAgICAgICAgIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi0lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr+OAjC0x44CNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXJ0TW90aW9uKG1vdGlvbjogQUN1YmlzbU1vdGlvbiwgYXV0b0RlbGV0ZTogYm9vbGVhbiwgdXNlclRpbWVTZWNvbmRzOiBudW1iZXIpOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihtb3Rpb24gPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEludmFsaWRNb3Rpb25RdWV1ZUVudHJ5SGFuZGxlVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtb3Rpb25RdWV1ZUVudHJ5OiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIOaXouOBq+ODouODvOOCt+ODp+ODs+OBjOOBguOCjOOBsOe1guS6huODleODqeOCsOOCkueri+OBpuOCi1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9tb3Rpb25zLmdldFNpemUoKTsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5ID0gdGhpcy5fbW90aW9ucy5hdChpKTtcclxuICAgICAgICAgICAgICAgIGlmKG1vdGlvblF1ZXVlRW50cnkgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnN0YXJ0RmFkZW91dChtb3Rpb25RdWV1ZUVudHJ5Ll9tb3Rpb24uZ2V0RmFkZU91dFRpbWUoKSwgdXNlclRpbWVTZWNvbmRzKTsgLy8g44OV44Kn44O844OJ44Ki44Km44OI44KS6ZaL5aeL44GX57WC5LqG44GZ44KLXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkgPSBuZXcgQ3ViaXNtTW90aW9uUXVldWVFbnRyeSgpO+OAgC8vIOe1guS6huaZguOBq+egtOajhOOBmeOCi1xyXG4gICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5Ll9hdXRvRGVsZXRlID0gYXV0b0RlbGV0ZTtcclxuICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5fbW90aW9uID0gbW90aW9uO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbW90aW9ucy5wdXNoQmFjayhtb3Rpb25RdWV1ZUVudHJ5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtb3Rpb25RdWV1ZUVudHJ5Ll9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YWo44Gm44Gu44Oi44O844K344On44Oz44Gu57WC5LqG44Gu56K66KqNXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWFqOOBpue1guS6huOBl+OBpuOBhOOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug57WC5LqG44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRmluaXNoZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLSDlh6bnkIbjgpLooYzjgYYgLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyDml6Ljgavjg6Ljg7zjgrfjg6fjg7PjgYzjgYLjgozjgbDntYLkuobjg5Xjg6njgrDjgpLnq4vjgabjgotcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBpdGVyYXRvcjxDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5PiA9IHRoaXMuX21vdGlvbnMuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX21vdGlvbnMuZW5kKCkpOylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvblF1ZXVlRW50cnk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSBpdGUucHRyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW90aW9uUXVldWVFbnRyeSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZSA9IHRoaXMuX21vdGlvbnMuZXJhc2UoaXRlKTsgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvbjogQUN1YmlzbU1vdGlvbiA9IG1vdGlvblF1ZXVlRW50cnkuX21vdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb24gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZSA9IHRoaXMuX21vdGlvbnMuZXJhc2UoaXRlKTsgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0g57WC5LqG5riI44G/44Gu5Yem55CG44GM44GC44KM44Gw5YmK6Zmk44GZ44KLIC0tLS0tLVxyXG4gICAgICAgICAgICAgICAgaWYoIW1vdGlvblF1ZXVlRW50cnkuaXNGaW5pc2hlZCgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5oyH5a6a44GX44Gf44Oi44O844K344On44Oz44Gu57WC5LqG44Gu56K66KqNXHJcbiAgICAgICAgICogQHBhcmFtIG1vdGlvblF1ZXVlRW50cnlOdW1iZXIg44Oi44O844K344On44Oz44Gu6K2Y5Yil55Wq5Y+3XHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWFqOOBpue1guS6huOBl+OBpuOBhOOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug57WC5LqG44GX44Gm44GE44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRmluaXNoZWRCeUhhbmRsZShtb3Rpb25RdWV1ZUVudHJ5TnVtYmVyOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5pei44Gr44Oi44O844K344On44Oz44GM44GC44KM44Gw57WC5LqG44OV44Op44Kw44KS56uL44Gm44KLXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBpdGVyYXRvcjxDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5PiA9IHRoaXMuX21vdGlvbnMuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX21vdGlvbnMuZW5kKCkpO2l0ZS5pbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvblF1ZXVlRW50cnk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSBpdGUucHRyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW90aW9uUXVldWVFbnRyeSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vdGlvblF1ZXVlRW50cnkuX21vdGlvblF1ZXVlRW50cnlIYW5kbGUgPT0gbW90aW9uUXVldWVFbnRyeU51bWJlciAmJiAhbW90aW9uUXVldWVFbnRyeS5pc0ZpbmlzaGVkKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YWo44Gm44Gu44Oi44O844K344On44Oz44KS5YGc5q2i44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0b3BBbGxNb3Rpb25zKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0g5Yem55CG44KS6KGM44GGIC0tLS0tLS1cclxuICAgICAgICAgICAgLy8g5pei44Gr44Oi44O844K344On44Oz44GM44GC44KM44Gw57WC5LqG44OV44Op44Kw44KS56uL44Gm44KLXHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZTogaXRlcmF0b3I8Q3ViaXNtTW90aW9uUXVldWVFbnRyeT4gPSB0aGlzLl9tb3Rpb25zLmJlZ2luKCk7IGl0ZS5ub3RFcXVhbCh0aGlzLl9tb3Rpb25zLmVuZCgpKTspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3Rpb25RdWV1ZUVudHJ5OiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gaXRlLnB0cigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG1vdGlvblF1ZXVlRW50cnkgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGUgPSB0aGlzLl9tb3Rpb25zLmVyYXNlKGl0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tIOe1guS6hua4iOOBv+OBruWHpueQhuOBjOOBguOCjOOBsOWJiumZpOOBmeOCiyAtLS0tLS1cclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeSA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaXRlID0gdGhpcy5fbW90aW9ucy5lcmFzZShpdGUpOyAvLyDliYrpmaRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5oyH5a6a44GX44GfQ3ViaXNtTW90aW9uUXVldWVFbnRyeeOBruWPluW+l1xyXG5cclxuICAgICAgICAgKiBAcGFyYW0gICBtb3Rpb25RdWV1ZUVudHJ5TnVtYmVyICDjg6Ljg7zjgrfjg6fjg7Pjga7orZjliKXnlarlj7dcclxuICAgICAgICAgKiBAcmV0dXJuICDmjIflrprjgZfjgZ9DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5XHJcbiAgICAgICAgICogQHJldHVybiAgbnVsbCAgIOimi+OBpOOBi+OCieOBquOBi+OBo+OBn1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5KG1vdGlvblF1ZXVlRW50cnlOdW1iZXI6IGFueSk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLSDlh6bnkIbjgpLooYzjgYYgLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyDml6Ljgavjg6Ljg7zjgrfjg6fjg7PjgYzjgYLjgozjgbDntYLkuobjg5Xjg6njgrDjgpLnq4vjgabjgotcclxuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGl0ZXJhdG9yPEN1YmlzbU1vdGlvblF1ZXVlRW50cnk+ID0gdGhpcy5fbW90aW9ucy5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fbW90aW9ucy5lbmQoKSk7IGl0ZS5wcmVJbmNyZW1lbnQoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvblF1ZXVlRW50cnk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSBpdGUucHRyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW90aW9uUXVldWVFbnRyeSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb25RdWV1ZUVudHJ5Ll9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlID09IG1vdGlvblF1ZXVlRW50cnlOdW1iZXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdGlvblF1ZXVlRW50cnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kk44OZ44Oz44OI44KS5Y+X44GR5Y+W44KLQ2FsbGJhY2vjga7nmbvpjLJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sg44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAgICAgICAgICogQHBhcmFtIGN1c3RvbURhdGEg44Kz44O844Or44OQ44OD44Kv44Gr6L+U44GV44KM44KL44OH44O844K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEV2ZW50Q2FsbGJhY2soY2FsbGJhY2s6IEN1YmlzbU1vdGlvbkV2ZW50RnVuY3Rpb24sIGN1c3RvbURhdGE6IGFueSA9IG51bGwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudENhbGxCYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50Q3VzdG9tRGF0YSA9IGN1c3RvbURhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgpLmm7TmlrDjgZfjgabjgIHjg6Ljg4fjg6vjgavjg5Hjg6njg6Hjg7zjgr/lgKTjgpLlj43mmKDjgZnjgovjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgIG1vZGVsICAg5a++6LGh44Gu44Oi44OH44OrXHJcbiAgICAgICAgICogQHBhcmFtICAgdXNlclRpbWVTZWNvbmRzICAg44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cclxuICAgICAgICAgKiBAcmV0dXJuICB0cnVlICAgIOODouODh+ODq+OBuOODkeODqeODoeODvOOCv+WApOOBruWPjeaYoOOBguOCilxyXG4gICAgICAgICAqIEByZXR1cm4gIGZhbHNlICAg44Oi44OH44Or44G444OR44Op44Oh44O844K/5YCk44Gu5Y+N5pig44Gq44GXKOODouODvOOCt+ODp+ODs+OBruWkieWMluOBquOBlylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZG9VcGRhdGVNb3Rpb24obW9kZWw6IEN1YmlzbU1vZGVsLCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tIOWHpueQhuOCkuihjOOBhiAtLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyDml6Ljgavjg6Ljg7zjgrfjg6fjg7PjgYzjgYLjgozjgbDntYLkuobjg5Xjg6njgrDjgpLnq4vjgabjgotcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBpdGVyYXRvcjxDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5PiA9IHRoaXMuX21vdGlvbnMuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX21vdGlvbnMuZW5kKCkpOylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvblF1ZXVlRW50cnk6IEN1YmlzbU1vdGlvblF1ZXVlRW50cnkgPSBpdGUucHRyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobW90aW9uUXVldWVFbnRyeSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZSA9IHRoaXMuX21vdGlvbnMuZXJhc2UoaXRlKTsgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vdGlvbjogQUN1YmlzbU1vdGlvbiA9IG1vdGlvblF1ZXVlRW50cnkuX21vdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb24gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZSA9IHRoaXMuX21vdGlvbnMuZXJhc2UoaXRlKTsgLy8g5YmK6ZmkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLSDlgKTjgpLlj43mmKDjgZnjgosgLS0tLS0tXHJcbiAgICAgICAgICAgICAgICBtb3Rpb24udXBkYXRlUGFyYW1ldGVycyhtb2RlbCwgbW90aW9uUXVldWVFbnRyeSwgdXNlclRpbWVTZWNvbmRzKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLSDjg6bjg7zjgrbjg4jjg6rjgqzjg7zjgqTjg5njg7Pjg4jjgpLmpJzmn7vjgZnjgosgLS0tLVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyZWRMaXN0OiBjc21WZWN0b3I8Y3NtU3RyaW5nPiA9IG1vdGlvbi5nZXRGaXJlZEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuZ2V0TGFzdENoZWNrRXZlbnRUaW1lKCkgLSBtb3Rpb25RdWV1ZUVudHJ5LmdldFN0YXJ0VGltZSgpLCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVGltZVNlY29uZHMgLSBtb3Rpb25RdWV1ZUVudHJ5LmdldFN0YXJ0VGltZSgpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGZpcmVkTGlzdC5nZXRTaXplKCk7ICsraSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudENhbGxCYWNrKHRoaXMsIGZpcmVkTGlzdC5hdChpKSwgdGhpcy5fZXZlbnRDdXN0b21EYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnNldExhc3RDaGVja0V2ZW50VGltZSh1c2VyVGltZVNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLSDntYLkuobmuIjjgb/jga7lh6bnkIbjgYzjgYLjgozjgbDliYrpmaTjgZnjgosgLS0tLS0tXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb25RdWV1ZUVudHJ5LmlzRmluaXNoZWQoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZSA9IHRoaXMuX21vdGlvbnMuZXJhc2UoaXRlKTsgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3VzZXJUaW1lU2Vjb25kczogbnVtYmVyOyAvLyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxyXG5cclxuICAgICAgICBfbW90aW9uczogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblF1ZXVlRW50cnk+OyAvLyDjg6Ljg7zjgrfjg6fjg7NcclxuICAgICAgICBfZXZlbnRDYWxsQmFjazogQ3ViaXNtTW90aW9uRXZlbnRGdW5jdGlvbjsgLy8g44Kz44O844Or44OQ44OD44Kv6Zai5pWwXHJcbiAgICAgICAgX2V2ZW50Q3VzdG9tRGF0YTogYW55OyAvLyDjgrPjg7zjg6vjg5Djg4Pjgq/jgavmiLvjgZXjgozjgovjg4fjg7zjgr9cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjgqTjg5njg7Pjg4jjga7jgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgpLlrprnvqlcclxuICAgICAqIFxyXG4gICAgICog44Kk44OZ44Oz44OI44Gu44Kz44O844Or44OQ44OD44Kv44Gr55m76Yyy44Gn44GN44KL6Zai5pWw44Gu5Z6L5oOF5aCxXHJcbiAgICAgKiBAcGFyYW0gY2FsbGVyICAgICAgICDnmbrngavjgZfjgZ/jgqTjg5njg7Pjg4jjgpLlho3nlJ/jgZXjgZvjgZ9DdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBldmVudFZhbHVlICAgIOeZuueBq+OBl+OBn+OCpOODmeODs+ODiOOBruaWh+Wtl+WIl+ODh+ODvOOCv1xyXG4gICAgICogQHBhcmFtIGN1c3RvbURhdGEgICDjgrPjg7zjg6vjg5Djg4Pjgq/jgavov5TjgZXjgozjgovnmbvpjLLmmYLjgavmjIflrprjgZXjgozjgZ/jg4fjg7zjgr9cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDdWJpc21Nb3Rpb25FdmVudEZ1bmN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBjYWxsZXI6IEN1YmlzbU1vdGlvblF1ZXVlTWFuYWdlcixcclxuICAgICAgICAgICAgZXZlbnRWYWx1ZTogY3NtU3RyaW5nLFxyXG4gICAgICAgICAgICBjdXN0b21EYXRhOiBhbnlcclxuICAgICAgICApOiB2b2lkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Oi44O844K344On44Oz44Gu6K2Y5Yil55Wq5Y+3XHJcbiAgICAgKiBcclxuICAgICAqIOODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OBruWumue+qVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbU1vdGlvblF1ZXVlRW50cnlIYW5kbGUgPSBhbnk7XHJcbiAgICBleHBvcnQgY29uc3QgSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSA9IC0xO1xyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tYXRyaXg0NH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRyaXg0NCc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vZGVsfSBmcm9tICcuLi9tb2RlbC9jdWJpc21tb2RlbCc7XHJcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xyXG5pbXBvcnQgQ3ViaXNtTWF0cml4NDQgPSBjdWJpc21tYXRyaXg0NC5DdWJpc21NYXRyaXg0NDtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXHJcbiAgICAgKiBcclxuICAgICAqIOOCteODluOCr+ODqeOCueOBq+eSsOWig+S+neWtmOOBruaPj+eUu+WRveS7pOOCkuiomOi/sOOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3ViaXNtUmVuZGVyZXJcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZfjgablj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEN1YmlzbVJlbmRlcmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCueOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKHJlbmRlcmVyOiBDdWJpc21SZW5kZXJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOCkuWun+ihjOOBmeOCi1xyXG4gICAgICAgICAqIOW8leaVsOOBq+a4oeOBl+OBn+ODouODh+ODq+OBi+OCieODrOODs+ODgOODqeOBruWIneacn+WMluWHpueQhuOBq+W/heimgeOBquaDheWgseOCkuWPluOCiuWHuuOBmeOBk+OBqOOBjOOBp+OBjeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZShtb2RlbDogQ3ViaXNtTW9kZWwpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44KS5o+P55S744GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRyYXdNb2RlbCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdldE1vZGVsKCkgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kb0RyYXdNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOmFjeWIl+OBr+ikh+ijveOBleOCjOOCi+OBruOBp+OAgeWFg+OBrumFjeWIl+OBr+WkluOBp+egtOajhOOBl+OBpuiJr+OBhFxyXG4gICAgICAgICAqIEBwYXJhbSBtYXRyaXg0NCBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldE12cE1hdHJpeChtYXRyaXg0NDogQ3ViaXNtTWF0cml4NDQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQuc2V0TWF0cml4KG1hdHJpeDQ0LmdldEFycmF5KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNdnBNYXRyaXgoKTogQ3ViaXNtTWF0cml4NDRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdnBNYXRyaXg0eDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KL77yIMS4w44GM5qiZ5rqW44Gu54q25oWL77yJXHJcbiAgICAgICAgICogQHBhcmFtIHJlZCDotaTjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcclxuICAgICAgICAgKiBAcGFyYW0gZ3JlZW4g57eR44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIGJsdWUg6Z2S44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIGFscGhhIM6x44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldE1vZGVsQ29sb3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHJlZCA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVkID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVkID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWQgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGdyZWVuIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmVlbiA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGdyZWVuID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmVlbiA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYmx1ZSA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmx1ZSA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGJsdWUgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJsdWUgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFscGhhIDwgMC4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGFscGhhID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDEuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5SID0gcmVkO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yLkcgPSBncmVlbjtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5CID0gYmx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5BID0gYWxwaGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjga7oibLjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KLKDEuMOOBjOaomea6luOBrueKtuaFiylcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIFJHQkHjga7jgqvjg6njg7zmg4XloLFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TW9kZWxDb2xvcigpOiBDdWJpc21UZXh0dXJlQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog5pyJ5Yq544Gr44GZ44KL44Gq44KJdHJ1ZeOAgeeEoeWKueOBq+OBmeOCi+OBquOCiWZhbHNl44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzUHJlbXVsdGlwbGllZEFscGhhKGVuYWJsZTogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LmX566X5riI44G/zrHjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5LmX566X5riI44G/44GuzrHmnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzUHJlbXVsdGlwbGllZEFscGhhKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi+OAglxyXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRJc0N1bGxpbmcoY3VsbGluZzogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGN1bGxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDjgqvjg6rjg7PjgrDnhKHlirlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0N1bGxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lgKTjga7lvbHpn7/luqbjga/jg6zjg7Pjg4Djg6njga7lrp/oo4Xjgavkvp3lrZjjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbiDjg5Hjg6njg6Hjg7zjgr/jga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0QW5pc290cm9weShuOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDnlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QW5pc290cm9weSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmlzb3J0b3B5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44Or44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6rjg7PjgrDjgZnjgovjg6Ljg4fjg6tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TW9kZWwoKTogQ3ViaXNtTW9kZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xyXG5cclxuICAgICAgICAgICAgLy8g5Y2Y5L2N6KGM5YiX44Gr5Yid5pyf5YyWXHJcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vmj4/nlLvjga7lrp/oo4VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZG9EcmF3TW9kZWwoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o+P55S744Kq44OW44K444Kn44Kv44OI77yI44Ki44O844OI44Oh44OD44K344Ol77yJ44KS5o+P55S744GZ44KLXHJcbiAgICAgICAgICog44Od44Oq44K044Oz44Oh44OD44K344Ol44Go44OG44Kv44K544OB44Oj55Wq5Y+344KS44K744OD44OI44Gn5rih44GZ44CCXHJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXhDb3VudCDmj4/nlLvjgqrjg5bjgrjjgqfjgq/jg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcGFyYW0gdmVydGV4Q291bnQg44Od44Oq44K044Oz44Oh44OD44K344Ol44Gu6aCC54K55pWwXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol6aCC54K544Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCuemFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSB1dkFycmF5IHV26YWN5YiXXHJcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXHJcbiAgICAgICAgICogQHBhcmFtIGNvbG9yQmxlbmRNb2RlIOOCq+ODqeODvOODluODrOODs+ODh+OCo+ODs+OCsOOBruOCv+OCpOODl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEFycmF5OiBVaW50MTZBcnJheSwgdmVydGV4QXJyYXk6IEZsb2F0MzJBcnJheSwgdXZBcnJheTogRmxvYXQzMkFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBudW1iZXIsIGNvbG9yQmxlbmRNb2RlOiBDdWJpc21CbGVuZE1vZGUpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njgYzkv53mjIHjgZnjgovpnZnnmoTjgarjg6rjgr3jg7zjgrnjgpLplovmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2U6IEZ1bmN0aW9uO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xyXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWxDb2xvcjogQ3ViaXNtVGV4dHVyZUNvbG9yOyAgICAgICAgICAgICAgICAvLyDjg6Ljg4fjg6voh6rkvZPjga7jgqvjg6njg7zvvIhSR0JB77yJXHJcbiAgICAgICAgcHJvdGVjdGVkIF9pc0N1bGxpbmc6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCq+ODquODs+OCsOOBjOacieWKueOBquOCiXRydWVcclxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXHJcbiAgICAgICAgcHJvdGVjdGVkIF9hbmlzb3J0b3B5OiBhbnk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgIHByb3RlY3RlZCBfbW9kZWw6IEN1YmlzbU1vZGVsOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrDlr77osaHjga7jg6Ljg4fjg6tcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBDdWJpc21CbGVuZE1vZGVcclxuICAgIHtcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTm9ybWFsID0gMCwgICAgICAgICAvLyDpgJrluLhcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfQWRkaXRpdmUgPSAxLCAgICAgICAvLyDliqDnrpdcclxuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7oibLjgpJSR0JB44Gn5omx44GG44Gf44KB44Gu44Kv44Op44K5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlIgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuRyA9IDEuMDtcclxuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLkEgPSAxLjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSOiBudW1iZXI7ICAvLyDotaTjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBHOiBudW1iZXI7ICAvLyDnt5Hjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcclxuICAgICAgICBBOiBudW1iZXI7ICAvLyDOseODgeODo+ODs+ODjeODq1xyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDdWJpc21Mb2dEZWJ1ZyB9IGZyb20gXCIuLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXktVmFsdWXjga7jg5rjgqLjgpLlrprnvqnjgZnjgovjgq/jg6njgrlcclxuICAgICAqIGNzbU1hcOOCr+ODqeOCueOBruWGhemDqOODh+ODvOOCv+OBp+S9v+eUqOOBmeOCi+OAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICogQHBhcmFtIGtleSBLZXnjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWXjgajjgZfjgabjgrvjg4Pjg4jjgZnjgovlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioa2V5PzogX0tleVQsIHZhbHVlPzogX1ZhbFQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gKGtleSA9PSB1bmRlZmluZWQpIFxyXG4gICAgICAgICAgICAgICAgPyBudWxsIFxyXG4gICAgICAgICAgICAgICAgOiBrZXk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlY29uZCA9ICh2YWx1ZSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogdmFsdWU7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZmlyc3Q6IF9LZXlUOyAgIC8vIGtleeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxyXG4gICAgICAgIHB1YmxpYyBzZWNvbmQ6IF9WYWxUOyAgLy8gdmFsdWXjgajjgZfjgabnlKjjgYTjgovlpInmlbBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODnuODg+ODl+Wei1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgY3NtTWFwPF9LZXlULCBfVmFsVD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDliJ3mnJ/ljJbmmYLngrnjgafnorrkv53jgZnjgovjgrXjgqTjgrpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZT86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNpemUgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihzaXplIDwgMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kt44O844KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDmlrDjgZ/jgavov73liqDjgZnjgovjgq3jg7xcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXBwZW5kS2V5KGtleTogX0tleVQpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDmlrDjgZfjgY9LZXkvVmFsdWXjga7jg5rjgqLjgpLkvZzjgotcclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIDEsIGZhbHNlKTsgLy8gMeOBpOS7peS4iuWFpeOCi+mamemWk+OCkuS9nOOCi1xyXG4gICAgICAgICAgICAvLyDmlrDjgZfjgYRrZXkvdmFsdWXjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjga9fc2l6ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemVdID0gbmV3IGNzbVBhaXI8X0tleVQsIF9WYWxUPihrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShnZXQpXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZShrZXk6IF9LZXlUKTogX1ZhbFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koc2V0KVxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Luj5YWl44GZ44KLVmFsdWXlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0VmFsdWUoa2V5OiBfS2V5VCwgdmFsdWU6IF9WYWxUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBp+a4oeOBl+OBn0tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi+OBi1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5a2Y5Zyo44KS56K66KqN44GZ44KLa2V5XHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXhpc3Qoa2V5OiBfS2V5VCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGtleVZhbHVl44Gu44Od44Kk44Oz44K/44KS5YWo44Gm6Kej5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7jgrXjgqTjgrpcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44Kj44KS56K65L+d44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GE44CCXHJcbiAgICAgICAgICogQHBhcmFtIGZpdFRvU2l6ZSB0cnVl44Gq44KJ5oyH5a6a44GX44Gf44K144Kk44K644Gr5ZCI44KP44Gb44KL44CCZmFsc2XjgarjgonjgrXjgqTjgrrjgpIy5YCN56K65L+d44GX44Gm44GK44GP44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIsIGZpdFRvU2l6ZTogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpdFRvU2l6ZSAmJiBuZXdTaXplIDwgY3NtTWFwLkRlZmF1bHRTaXplKSBuZXdTaXplID0gY3NtTWFwLkRlZmF1bHRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaXRUb1NpemUgJiYgbmV3U2l6ZSA8IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyKSBuZXdTaXplID0gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7ntYLnq6/opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCB0aGlzLl9zaXplKTsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaXRlIOWJiumZpOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlOyAvLyDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIGluZGV4KTsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIHJldHVybiBpdGUyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YCk44KSMzLjg5Pjg4Pjg4jnrKblj7fku5jjgY3mlbTmlbDlnovjgafjg4Djg7Pjg5fjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZHVtcEFzSW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiezB9ICxcIiwgdGhpcy5fa2V5VmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlZmF1bHRTaXplID0gMTA7IC8vIOOCs+ODs+ODhuODiuOBruWIneacn+WMluOBruODh+ODleOCqeODq+ODiOOCteOCpOOCulxyXG4gICAgICAgIHB1YmxpYyBfa2V5VmFsdWVzOiBjc21QYWlyPF9LZXlULCBfVmFsVD5bXTsvLyBrZXktdmFsdWXjg5rjgqLjga7phY3liJdcclxuICAgICAgICBwdWJsaWMgX2R1bW15VmFsdWU6IF9WYWxUOyAgLy8g56m644Gu5YCk44KS6L+U44GZ54K644Gu44OA44Of44O8XHJcbiAgICAgICAgcHVibGljIF9zaXplOiBudW1iZXI7ICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNzbU1hcDxUPuOBruOCpOODhuODrOODvOOCv1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHY/OiBjc21NYXA8X0tleVQsIF9WYWxUPiwgaWR4PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gKHYgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyB2XHJcbiAgICAgICAgICAgICAgICA6IG5ldyBjc21NYXA8X0tleVQsIF9WYWxUPigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaWR4ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gaWR4XHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZS5fbWFwO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZUluY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZURlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCsrKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW+jOe9ruOBjS0t5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCk7IC8vIOWPpOOBhOWApOOCkuS/neWtmFxyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICrmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHRyKCk6IGNzbVBhaXI8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcC5fa2V5VmFsdWVzW3RoaXMuX2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICE95ryU566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX21hcCAhPSBpdGUuX21hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgX21hcDogY3NtTWFwPF9LZXlULCBfVmFsVD47IC8vIOOCs+ODs+ODhuODilxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOaWh+Wtl+WIl+OCr+ODqeOCueOAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgY3NtU3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX44KS5b6M5pa544Gr6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGMg6L+95Yqg44GZ44KL5paH5a2X5YiXXHJcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXBwZW5kKGM6IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyKTogY3NtU3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnMgKz0gKGxlbmd0aCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyBjLnN1YnN0cigwLCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICA6IGM7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+OCteOCpOOCuuOCkuaLoeW8teOBl+OBpuaWh+Wtl+OCkuWfi+OCgeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg5ouh5by144GZ44KL5paH5a2X5pWwXHJcbiAgICAgICAgICogQHBhcmFtIHYgICAgICAgICDln4vjgoHjgovmloflrZdcclxuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBleHBhbnNpb24obGVuZ3RoOiBudW1iZXIsIHY6IHN0cmluZyk6IGNzbVN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogY3NtU3RyaW5nID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZCh2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkuODkOOCpOODiOaVsOOBp+WPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeXRlcygpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zKSAucmVwbGFjZSgvJS4uL2csIFwieFwiKS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfmr5TovIPjgIA8XHJcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0xlc3MoczogY3NtU3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA8IHMucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA+XHJcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0dyZWF0KHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPiBzLnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPT1cclxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OBqOetieOBl+OBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2U6ICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44Go55Ww44Gq44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXF1YWwoczogc3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX44GM56m644GL44Gp44GG44GLXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlOiDnqbrjga7mloflrZfliJdcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiDlgKTjgYzoqK3lrprjgZXjgozjgabjgYTjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zLmxlbmd0aCA9PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IHN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjc21WZWN0b3I8VD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxyXG4gICAgICAgICAqIEBwYXJhbSB6ZXJvQ2xlYXIgdHJ1ZeOBquOCieWIneacn+WMluaZguOBq+eiuuS/neOBl+OBn+mgmOWfn+OCkjDjgafln4vjgoHjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpbml0aWFsQ2FwYWNpdHkgPCAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KGluaXRpYWxDYXBhY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGluaXRpYWxDYXBhY2l0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXQoaW5kZXg6IG51bWJlcik6IFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS44K744OD44OIXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOimgee0oOOCkuOCu+ODg+ODiOOBmeOCi+OCpOODs+ODh+ODg+OCr+OCuVxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcHRyW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldChvZmZzZXQ6IG51bWJlciA9IDApOiBUW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBvZmZzZXQ7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFB1c2hCYWNr5Yem55CG44Gn6L+95Yqg44GZ44KL5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fc2l6ZSA+PSB0aGlzLl9jYXBhY2l0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fY2FwYWNpdHkgPT0gMCA/IGNzbVZlY3Rvci5zX2RlZmF1bHRTaXplIDogdGhpcy5fY2FwYWNpdHkgKiAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcHRyW3RoaXMuX3NpemUrK10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbDjgpLov5TjgZlcclxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgavlr77jgZfjgabku6PlhaXlh6bnkIbjgpLooYzjgYZcclxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg6KaB57Sg44Gr5Luj5YWl44GZ44KL5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGN1clNpemUgPSB0aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgaWYoY3VyU2l6ZSA8IG5ld1NpemUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVzaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IFQgPSBudWxsKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKG5ld1NpemUsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCteOCpOOCuuWkieabtFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTaXplKG5ld1NpemU6IG51bWJlciwgdmFsdWU6IGFueSA9IG51bGwsIGNhbGxQbGFjZW1lbnROZXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihjdXJTaXplIDwgbmV3U2l6ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZSk7ICAvLyBjYXBhY2l0eeabtOaWsFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSB0aGlzLl9zaXplOyBpIDwgbmV3U2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpICAvLyBuZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy8g44OX44Oq44Of44OG44Kj44OW5Z6L44Gq44Gu44Gn5YCk5rih44GXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gdGhpcy5fc2l6ZTsgaSA8IG5ld1NpemU7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxyXG4gICAgICAgICAgICAgICAgLy8tLS1cclxuICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0aGlzLl9zaXplIC0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gcG9zaXRpb24g5oy/5YWl44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIGJlZ2lu44CA5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu6ZaL5aeL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5zZXJ0KHBvc2l0aW9uOiBpdGVyYXRvcjxUPiwgYmVnaW46IGl0ZXJhdG9yPFQ+LCBlbmQ6IGl0ZXJhdG9yPFQ+KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRzdFNpOiBudW1iZXIgPSBwb3NpdGlvbi5faW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBzcmNTaTogbnVtYmVyID0gYmVnaW4uX2luZGV4O1xyXG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWRkQ291bnQ6IG51bWJlciA9IHNyY0VpIC0gc3JjU2k7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eSh0aGlzLl9zaXplICsgYWRkQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXHJcbiAgICAgICAgICAgIGxldCBhZGRTaXplID0gdGhpcy5fc2l6ZSAtIGRzdFNpO1xyXG4gICAgICAgICAgICBpZihhZGRTaXplID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgYWRkU2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSBzcmNTaTsgaSA8IHNyY0VpOyBpKyssIGRzdFNpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonjgqTjg7Pjg4fjg4Pjgq/jgrnjgafmjIflrprjgZfjgZ/opoHntKDjgpLliYrpmaTjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YmK6Zmk56+E5Zuy5aSWXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAvLyDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC0tdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GX44Gm5LuW44Gu6KaB57Sg44KS44K344OV44OI44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlOyAvLyDliYrpmaTnr4Tlm7LlpJZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5YmK6ZmkXHJcbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgaW5kZXgpOyAgIC8vIOe1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY2FwYWNpdHkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIgPSBuZXcgQXJyYXkobmV3U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxUPiA9ICh0aGlzLl9zaXplID09IDApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VD4gPSBuZXcgaXRlcmF0b3I8VD4odGhpcywgdGhpcy5fc2l6ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0T2Zmc2V0KG9mZnNldDogbnVtYmVyKTogY3NtVmVjdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmV3VmVjdG9yID0gbmV3IGNzbVZlY3RvcjxUPigpO1xyXG4gICAgICAgICAgICBuZXdWZWN0b3IuX3B0ciA9IHRoaXMuZ2V0KG9mZnNldCk7XHJcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBuZXdWZWN0b3IuX2NhcGFjaXR5ID0gdGhpcy5nZXQob2Zmc2V0KS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcclxuICAgICAgICBfc2l6ZTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcclxuICAgICAgICBfY2FwYWNpdHk6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kt44Oj44OR44K344OG44KjXHJcblxyXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBzX2RlZmF1bHRTaXplID0gMTA7IC8vIOOCs+ODs+ODhuODiuWIneacn+WMluOBruODh+ODleOCqeODq+ODiOOCteOCpOOCulxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9ICh2ICE9IHVuZGVmaW5lZCkgPyB2IDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7o+WFpVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZS5faW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWJjee9ruOBjSsr5ryU566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZUluY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWJjee9ruOBjS0t5ryU566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZURlY3JlbWVudCgpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleC0tKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHB0clxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwdHIoKTogVFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlY3Rvci5fcHRyW3RoaXMuX2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqID3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3Vic3RpdHV0aW9uKGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGUuX3ZlY3RvcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPFQ+KTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbmRleCAhPSBpdGUuX2luZGV4KSB8fCAodGhpcy5fdmVjdG9yICE9IGl0ZS5fdmVjdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9pbmRleDogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICBfdmVjdG9yOiBjc21WZWN0b3I8VD47ICAvLyDjgrPjg7Pjg4bjg4pcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtZnJhbWV3b3JrLCBMb2dMZXZlbH0gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xyXG5pbXBvcnQge0NTTV9MT0dfTEVWRUwsIENTTV9MT0dfTEVWRUxfVkVSQk9TRSwgQ1NNX0xPR19MRVZFTF9ERUJVRywgQ1NNX0xPR19MRVZFTF9JTkZPLCBDU01fTE9HX0xFVkVMX1dBUk5JTkcsIENTTV9MT0dfTEVWRUxfRVJST1J9IGZyb20gXCIuLi9jdWJpc21mcmFtZXdvcmtjb25maWdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnQgPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+IFxyXG57XHJcbiAgICBMaXZlMkRDdWJpc21GcmFtZXdvcmsuQ3ViaXNtRGVidWcucHJpbnQobGV2ZWwsIFwiW0NTTV1cIiArIGZtdCwgYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdWJpc21Mb2dQcmludEluID0gKGxldmVsOiBMb2dMZXZlbCwgZm10OiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9PlxyXG57XHJcbiAgICBDdWJpc21Mb2dQcmludChsZXZlbCwgZm10ICsgXCJcXG5cIiwgYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ1NNX0FTU0VSVCA9IChleHByOiBhbnkpID0+XHJcbntcclxuICAgIGNvbnNvbGUuYXNzZXJ0KGV4cHIpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGxldCBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGxldCBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcblxyXG5pZihDU01fTE9HX0xFVkVMIDw9IENTTV9MT0dfTEVWRUxfVkVSQk9TRSlcclxue1xyXG4gICAgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfVmVyYm9zZSwgXCJbVl1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9EZWJ1ZywgXCJbRF1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfREVCVUcpXHJcbntcclxuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9EZWJ1ZywgXCJbRF1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfSU5GTylcclxue1xyXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9XQVJOSU5HKVxyXG57XHJcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfRVJST1IpXHJcbntcclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg4fjg5Djg4PjgrDnlKjjga7jg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrnjgIJcclxuICAgICAqIOODreOCsOOBruWHuuWKm+OAgeODkOOCpOODiOOBruODgOODs+ODl+OBquOBqVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRGVidWdcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg63jgrDjgpLlh7rlipvjgZnjgovjgILnrKzkuIDlvJXmlbDjgavjg63jgrDjg6zjg5njg6vjgpLoqK3lrprjgZnjgovjgIJcclxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxvZ0xldmVsIOODreOCsOODrOODmeODq+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXHJcbiAgICAgICAgICogQHBhcmFtIGFyZ3Mg5Y+v5aSJ6ZW35byV5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYRcclxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ1ByaW50OiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uID0gY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yay5jb3JlTG9nRnVuY3Rpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvZ1ByaW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcjogc3RyaW5nID0gXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAvXFx7KFxcZCspXFx9L2csXHJcbiAgICAgICAgICAgICAgICAgICAgKG0sIGspID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1trXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsb2dQcmludChidWZmZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44O844K/44GL44KJ5oyH5a6a44GX44Gf6ZW344GV44Gg44GR44OA44Oz44OX5Ye65Yqb44GZ44KL44CCXHJcbiAgICAgICAgICogQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeaZguOBq+OCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhOOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBsb2dMZXZlbCDjg63jgrDjg6zjg5njg6vjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gZGF0YSDjg4Djg7Pjg5fjgZnjgovjg4fjg7zjgr9cclxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoIOODgOODs+ODl+OBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZHVtcEJ5dGVzKGxvZ0xldmVsOiBMb2dMZXZlbCwgZGF0YTogVWludDhBcnJheSwgbGVuZ3RoOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICUgMTYgPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpICUgOCA9PSAwICYmIGkgPiAwKSB0aGlzLnByaW50KGxvZ0xldmVsLCBcIiAgXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludChsb2dMZXZlbCwgXCJ7MH0gXCIsIFsoZGF0YVtpXSAmIDB4RkYpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBwcml2YXRlIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtbWFwfSBmcm9tIFwiLi4vdHlwZS9jc21tYXBcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcclxuaW1wb3J0IHtDdWJpc21Mb2dJbmZvfSBmcm9tIFwiLi9jdWJpc21kZWJ1Z1wiO1xyXG5pbXBvcnQge3N0cnRvZH0gZnJvbSBcIi4uL2xpdmUyZGN1YmlzbWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcclxuaW1wb3J0IGNzbVZlY3Rvcl9pdGVyYXRvciA9IGNzbXZlY3Rvci5pdGVyYXRvcjtcclxuaW1wb3J0IGNzbU1hcCA9IGNzbW1hcC5jc21NYXA7XHJcbmltcG9ydCBjc21NYXBfaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XHJcbmltcG9ydCBjc21TdHJpbmcgPSBjc21zdHJpbmcuY3NtU3RyaW5nO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLy8gU3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKeOBp+WIneacn+WMluOBmeOCi1xyXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSDogc3RyaW5nID0gXCJFcnJvcjogdHlwZSBtaXNtYXRjaFwiO1xyXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTOiBzdHJpbmcgPSBcIkVycm9yOiBpbmRleCBvdXQgb2YgYm91bmRzXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOCqOODrOODoeODs+ODiOOBruimgee0oOOBruWfuuW6leOCr+ODqeOCueOAglxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+Wei+OBp+i/lOOBmShzdHJpbmcpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFJhd1N0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZSwgaW5kZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvRmxvYXQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS55yf5YG95YCk44Gn6L+U44GZKGJvb2xlYW4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvQm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjgrrjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS6YWN5YiX44Gn6L+U44GZKFZhbHVlW10pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEFycmF5KGRlZmF1bHRWYWx1ZTogVmFsdWVbXSA9IG51bGwpOiBWYWx1ZVtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGFycmF5KVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWZWN0b3IoZGVmYXVsdFZhbHVlPzogY3NtVmVjdG9yPFZhbHVlPik6IGNzbVZlY3RvcjxWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLjg57jg4Pjg5fjgafov5TjgZkoY3NtTWFwPGNzbVN0cmluZywgVmFsdWU+KVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODnuODg+ODl+OBruOCreODvOS4gOimp+OCkuOCs+ODs+ODhuODiuOBp+i/lOOBmVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEtleXMoKTogY3NtVmVjdG9yPHN0cmluZz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5zX2R1bW15S2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Vycm9yKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GMbnVsbOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmlbDlgKTlnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRmxvYXQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmloflrZfliJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Oe44OD44OX5Z6L44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc01hcCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKGVycm9yU3RyOiBzdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpzb25FcnJvci5lcnJvclZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yid5pyf5YyW55So44Oh44K944OD44OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubnVsbFZhbHVlID0gbmV3IEpzb25OdWxsdmFsdWUoKTtcclxuXHJcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODquODquODvOOCueeUqOODoeOCveODg+ODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgVmFsdWUubnVsbFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9zdHJpbmdCdWZmZXI6IHN0cmluZzsgLy8g5paH5a2X5YiX44OQ44OD44OV44KhXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNfZHVtbXlLZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgLy8g44OA44Of44O844Kt44O8XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZXJyb3JWYWx1ZTogVmFsdWU7ICAgLy8g5LiA5pmC55qE44Gq6L+U44KK5YCk44Go44GX44Gm6L+U44GZ44Ko44Op44O844CCIEN1YmlzbUZyYW1ld29yazo6RGlzcG9zZeOBmeOCi+OBvuOBp+OBr2RlbGV0ZeOBl+OBquOBhFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbnVsbFZhbHVlOiBWYWx1ZTsgICAgLy8g5LiA5pmC55qE44Gq6L+U44KK5YCk44Go44GX44Gm6L+U44GZTlVMTOOAgiAgIEN1YmlzbUZyYW1ld29yazo6RGlzcG9zZeOBmeOCi+OBvuOBp+OBr2RlbGV0ZeOBl+OBquOBhFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXNjaWnmloflrZfjga7jgb/lr77lv5zjgZfjgZ/mnIDlsI/pmZDjga7ou73ph49KU09O44OR44O844K144CCXHJcbiAgICAgKiDku5Xmp5jjga9KU09O44Gu44K144OW44K744OD44OI44Go44Gq44KL44CCXHJcbiAgICAgKiDoqK3lrprjg5XjgqHjgqTjg6sobW9kZWwzLmpzb24p44Gq44Gp44Gu44Ot44O844OJ55SoXHJcbiAgICAgKiBcclxuICAgICAqIFvmnKrlr77lv5zpoIXnm65dXHJcbiAgICAgKiDjg7vml6XmnKzoqp7jgarjganjga7pnZ5BU0NJSeaWh+Wtl1xyXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtSnNvblxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI/OiBBcnJheUJ1ZmZlciwgbGVuZ3RoPzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9saW5lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmKGJ1ZmZlciAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkOOCpOODiOODh+ODvOOCv+OBi+OCieebtOaOpeODreODvOODieOBl+OBpuODkeODvOOCueOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtIHNpemUg44OQ44OD44OV44Kh44K144Kk44K6XHJcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544CC5aSx5pWX44GX44Gf44KJTlVMTFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBqc29uID0gbmV3IEN1YmlzbUpzb24oKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VjY2VlZGVkOiBib29sZWFuID0ganNvbi5wYXJzZUJ5dGVzKGJ1ZmZlciwgc2l6ZSk7XHJcblxyXG4gICAgICAgICAgICBpZighc3VjY2VlZGVkKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ3ViaXNtSnNvbi5kZWxldGUoanNvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Kq44OW44K444Kn44Kv44OI44Gu6Kej5pS+5Yem55CGXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShpbnN0YW5jZTogQ3ViaXNtSnNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7jg6vjg7zjg4jopoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0Um9vdCgpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAgVW5pY29kZeOBruODkOOCpOODiuODquOCklN0cmluZ+OBq+WkieaPm1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg5aSJ5o+b44GZ44KL44OQ44Kk44OK44Oq44OH44O844K/XHJcbiAgICAgICAgICogQHJldHVybiDlpInmj5vlvozjga7mloflrZfliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdWludDhBcnJheTogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDAsIGxlbjogbnVtYmVyID0gdWludDhBcnJheS5sZW5ndGg7IGkgPCBsZW47ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IChcIiVcIiArIHRoaXMucGFkKHVpbnQ4QXJyYXlbaV0udG9TdHJpbmcoMTYpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChzdHIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Ko44Oz44Kz44O844OJ44CB44OR44OH44Kj44Oz44KwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBwYWQobjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5sZW5ndGggPCAyXHJcbiAgICAgICAgICAgICAgICA/IFwiMFwiICsgblxyXG4gICAgICAgICAgICAgICAgOiBuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEpTT07jga7jg5Hjg7zjgrnjgpLlrp/ooYzjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIOODkeODvOOCueWvvuixoeOBruODh+ODvOOCv+ODkOOCpOODiFxyXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAg44OH44O844K/44OQ44Kk44OI44Gu44K144Kk44K6XHJcbiAgICAgICAgICogcmV0dXJuIHRydWUgOiDmiJDlip9cclxuICAgICAgICAgKiByZXR1cm4gZmFsc2U6IOWkseaVl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYXJzZUJ5dGVzKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IG51bWJlcltdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoHphY3liJdcclxuICAgICAgICAgICAgbGV0IGRlY29kZUJ1ZmZlcjogc3RyaW5nID0gdGhpcy5hcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLnBhcnNlVmFsdWUoZGVjb2RlQnVmZmVyLCBzaXplLCAwLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xyXG4gICAgICAgICAgICAgICAgc3RyYnVmID0gXCJKc29uIHBhcnNlIGVycm9yIDogQGxpbmUgXCIgKyAodGhpcy5fbGluZUNvdW50ICsgMSkgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uU3RyaW5nKHN0cmJ1Zik7XHJcblxyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcInswfVwiLCB0aGlzLl9yb290LmdldFJhd1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuX3Jvb3QgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uRXJyb3IobmV3IGNzbVN0cmluZyh0aGlzLl9lcnJvciksIGZhbHNlKTsgLy8gcm9vdOOBr+ino+aUvuOBleOCjOOCi+OBruOBp+OCqOODqeODvOOCquODluOCuOOCp+OCr+ODiOOCkuWIpemAlOS9nOaIkOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844K55pmC44Gu44Ko44Op44O85YCk44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFBhcnNlRXJyb3IoKTogc3RyaW5nIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Or44O844OI6KaB57Sg44Gu5qyh44Gu6KaB57Sg44GM44OV44Kh44Kk44Or44Gu57WC56uv44Gg44Gj44Gf44KJdHJ1ZeOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjaGVja0VuZE9mRmlsZSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm9vdC5nZXRBcnJheSgpWzFdLmVxdWFscyhcIkVPRlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEpTT07jgqjjg6zjg6Hjg7Pjg4jjgYvjgolWYWx1ZShmbG9hdCxTdHJpbmcsVmFsdWUqLEFycmF5LG51bGwsdHJ1ZSxmYWxzZSnjgpLjg5Hjg7zjgrnjgZnjgotcclxuICAgICAgICAgKiDjgqjjg6zjg6Hjg7Pjg4jjga7mm7jlvI/jgavlv5zjgZjjgablhoXpg6jjgadQYXJzZVN0cmluZygpLCBQYXJzZU9iamVjdCgpLCBQYXJzZUFycmF5KCnjgpLlkbzjgbZcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgIGJ1ZmZlciAgICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggICAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcclxuICAgICAgICAgKiBAcGFyYW0gICBiZWdpbiAgICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gICBvdXRFbmRQb3MgICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VWYWx1ZShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG86IFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgZjogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IGJ1ZmZlcltpXTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnNyc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzknOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFmdGVyU3RyaW5nOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgxKTsgLy8g5Y+C54Wn5rih44GX44Gr44GZ44KL44Gf44KBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBzdHJ0b2QoYnVmZmVyLnNsaWNlKGkpLCBhZnRlclN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGJ1ZmZlci5pbmRleE9mKGFmdGVyU3RyaW5nWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKc29uRmxvYXQoZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKc29uU3RyaW5nKHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpKTsgLy8gXFxcIuOBruasoeOBruaWh+Wtl+OBi+OCiVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnWyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VBcnJheShidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICd7JzpcclxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICduJzogLy8gbnVsbOS7peWkluOBq+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG5ldyBKc29uTnVsbHZhbHVlKCk7ICAgIC8vIOino+aUvuOBp+OBjeOCi+OCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIG51bGxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0JzogLy8gdHJ1ZeS7peWkluOBq+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IEpzb25Cb29sZWFuLnRydWVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSB0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZic6IC8vIGZhbHNl5Lul5aSW44Gr44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDQgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICcsJyBwb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJywnOiAvLyBBcnJheSBzZXBhcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ10nOiAvLyDkuI3mraPjgarvvZ3jgaDjgYzjgrnjgq3jg4Pjg5fjgZnjgovjgILphY3liJfjga7mnIDlvozjgavkuI3opoHjgaogLCDjgYzjgYLjgovjgajmgJ3jgo/jgozjgotcclxuICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpOyAgLy8g5ZCM44GY5paH5a2X44KS5YaN5Yem55CGXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFx0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyDjgrnjgq3jg4Pjg5dcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qyh44Gu44CMXCLjgI3jgb7jgafjga7mloflrZfliJfjgpLjg5Hjg7zjgrnjgZnjgovjgIJcclxuICAgICAgICAgKiAgICAgIFxyXG4gICAgICAgICAqIEBwYXJhbSAgIHN0cmluZyAgLT4gIOODkeODvOOCueWvvuixoeOBruaWh+Wtl+WIl1xyXG4gICAgICAgICAqIEBwYXJhbSAgIGxlbmd0aCAgLT4gIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSAgb3V0RW5kUG9zICAgLT4gIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxyXG4gICAgICAgICAqIEByZXR1cm4gICAgICDjg5Hjg7zjgrnjgZfjgZ/mlodG5a2X5YiX6KaB57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlU3RyaW5nKHN0cmluZzogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBpID0gYmVnaW47XHJcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IG5ldyBjc21TdHJpbmcoXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBidWZTdGFydDogbnVtYmVyID0gYmVnaW47IC8vIHNidWbjgavnmbvpjLLjgZXjgozjgabjgYTjgarjgYTmloflrZfjga7plovlp4vkvY3nva5cclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzrjgIAvLyDntYLnq6/jga7igJ3jgIHjgqjjgrnjgrHjg7zjg5fmloflrZfjga/liKXjgavlh6bnkIbjgZXjgozjgovjga7jgafjgZPjgZPjgavmnaXjgarjgYRcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTsgIC8vIOKAneOBruasoeOBruaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHN0cmluZy5zbGljZShidWZTdGFydCksIChpIC0gYnVmU3RhcnQpKTsgLy8g5YmN44Gu5paH5a2X44G+44Gn44KS55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQucztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICcvLyc6ICAvLyDjgqjjgrnjgrHjg7zjg5fjga7loLTlkIhcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKzsgLy8g77yS5paH5a2X44KS44K744OD44OI44Gn5omx44GGXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSAtIDEgPiBidWZTdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlN0YXJ0ID0gaSArIDE7IC8vIOOCqOOCueOCseODvOODl++8iO+8kuaWh+Wtlynjga7mrKHjga7mloflrZfjgYvjgolcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzIgPSBzdHJpbmdbaV07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChjMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXFwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXCInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcYicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xccicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL3VuaWNvcmQgZXNjYXBlIG5vdCBzdXBwb3J0ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL2VzY2FwZSBlcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9pbGxlZ2FsIGVuZFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEpTT07jga7jgqrjg5bjgrjjgqfjgq/jg4jjgqjjg6zjg6Hjg7Pjg4jjgpLjg5Hjg7zjgrnjgZfjgaZWYWx1ZeOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBmVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxyXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg44OR44O844K544GZ44KL6ZW344GVXHJcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VPYmplY3QoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHJldDogSnNvbk1hcCA9IG5ldyBKc29uTWFwKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBLZXk6IFZhbHVlXHJcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcclxuICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZFBvczI6IG51bWJlcltdID0gQXJyYXkoMSk7XHJcbiAgICAgICAgICAgIGxldCBvazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gLCDjgYzntprjgY/pmZDjgorjg6vjg7zjg5dcclxuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIsIGxlbmd0aCwgaSArIDEsIGxvY2FsUmV0RW5kUG9zMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDsgLy8tLSBsb29w44GL44KJ5Ye644KLXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6IC8vIOmWieOBmOOCq+ODg+OCs1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g56m6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICc6JyBwb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5fjgZnjgovmloflrZdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighb2spXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImtleSBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXHJcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDI6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICd9JyBwb3NpdGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnICc6IGNhc2UgJ1xcdCcgOiBjYXNlICdcXHInOlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFvaylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWApOOCkuODgeOCp+ODg+OCr1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRQb3MyKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJldC5wdXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXQucHV0KGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIEZPUl9MT09QMzogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1AzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDsgLy8g5q2j5bi457WC5LqGXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiBwZXJzZU9iamVjdFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOasoeOBruOAjFwi44CN44G+44Gn44Gu5paH5a2X5YiX44KS44OR44O844K544GZ44KL44CCXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcclxuICAgICAgICAgKiBAcGFyYW0gYmVnaW4gICAgIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBvdXRFbmRQb3Mg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZUFycmF5KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcmV0Okpzb25BcnJheSA9IG5ldyBKc29uQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtleSA6IHZhbHVlXHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcclxuICAgICAgICAgICAgbGV0IGM6IHN0cmluZztcclxuICAgICAgICAgICAgbGV0IGxvY2FsUmV0RW5kcG9zMjogbnVtYmVyW10gPSBuZXcgQXJyYXkoMSk7XHJcblxyXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xyXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZHBvczIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kcG9zMlswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQuYWRkKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGT1JfTE9PUDM6XHJcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGJyZWFrZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWtmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrOyAvLyDmrKHjga5LRVksIFZBbFVF44G4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOe1guS6hlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9saW5lQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Nhc2UgJyAnOiBjYXNlICdcXHQnOiBjYXNlICdcXHInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDjgrnjgq3jg4Pjg5dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBhcnNlT2JqZWN0XCI7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2Vycm9yOiBzdHJpbmc7ICAgICAvLyDjg5Hjg7zjgrnmmYLjga7jgqjjg6njg7xcclxuICAgICAgICBfbGluZUNvdW50OiBudW1iZXI7IC8vIOOCqOODqeODvOWgseWRiuOBq+eUqOOBhOOCi+ihjOaVsOOCq+OCpuODs+ODiFxyXG4gICAgICAgIF9yb290OiBWYWx1ZTsgICAgICAgLy8g44OR44O844K544GV44KM44Gf44Or44O844OI6KaB57SgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSZmxvYXTlgKTjgajjgZfjgabmibHjgYZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25GbG9hdCBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IodjogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5pWw5YCk5Z6L44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0cmJ1Zjogc3RyaW5nID0gJ1xcMCc7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VGbG9hdChzdHJidWYpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJidWY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9JbnQoZGVmYXVsdFZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0Zsb2F0KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMC4wKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGludFxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGZsb2F0XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IHRoaXMuX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7IC8vIEpTT07opoHntKDjga7lgKRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLnnJ/lgb3lgKTjgajjgZfjgabmibHjgYZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25Cb29sZWFuIGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYznnJ/lgb3lgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuecn+WBveWApOOBp+i/lOOBmShib29sZWFuKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9vbFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5fYm9vbFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl9ib29sVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IodjogYm9vbGVhbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ib29sVmFsdWUgPSB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHRydWVWYWx1ZTogSnNvbkJvb2xlYW47ICAvLyB0cnVlXHJcbiAgICAgICAgc3RhdGljIGZhbHNlVmFsdWU6IEpzb25Cb29sZWFuOyAvLyBmYWxzZVxyXG5cclxuICAgICAgICBwcml2YXRlIF9ib29sVmFsdWU6IGJvb2xlYW47IC8vIEpTT07opoHntKDjga7lgKRcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS5paH5a2X5YiX44Go44GX44Gm5omx44GGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Ioczogc3RyaW5nKTtcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBhbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgaWYoJ3N0cmluZycgPT09IHR5cGVvZihzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocyBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaWh+Wtl+WIl+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdHJpbmcoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YodmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSlNPTuODkeODvOOCueaZguOBruOCqOODqeODvOe1kOaenOOAguaWh+Wtl+WIl+Wei+OBruOCiOOBhuOBq+OBteOCi+OBvuOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkVycm9yIGV4dGVuZHMgSnNvblN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZeOAgemdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNTdGF0aWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKHM6IHN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBjc21TdHJpbmd8c3RyaW5nLCBpc1N0YXRpYzogYm9vbGVhbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFwic3RyaW5nXCIgPT09IHR5cGVvZihzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpJOVUxM5YCk44Go44GX44Gm5oyB44GkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWUsIOmdmeeahOOBquOCieino+aUvuOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbkFycmF5IGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fYXJyYXkgPSBuZXcgY3NtVmVjdG9yPFZhbHVlPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpIDw9IGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gdGhpcy5fYXJyYXkuYXQoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgaWYodiA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzdHJpbmdCdWZmZXI6IHN0cmluZyA9IGluZGVudCArIFwiW1xcblwiO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUuaW5jcmVtZW50KCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIlwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyaW5nQnVmZmVyICsgaW5kZW50ICsgXCJdXFxuXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YWN5YiX6KaB57Sg44KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIHYg6L+95Yqg44GZ44KL6KaB57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZCh2OiBWYWx1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2hCYWNrKHYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS44Kz44Oz44OG44OK44Gn6L+U44GZKGNzbVZlY3RvcjxWYWx1ZT4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT4gPSBudWxsKTogY3NtVmVjdG9yPFZhbHVlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44Gu5pWw44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXkuZ2V0U2l6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYXJyYXk6IGNzbVZlY3RvcjxWYWx1ZT47IC8vIEpTT07opoHntKDjga7lgKRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLjg57jg4Pjg5fjgajjgZfjgabmjIHjgaRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25NYXAgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgY3NtTWFwPHN0cmluZywgVmFsdWU+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYxNYXDlnovjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYocyBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldDogVmFsdWUgPSB0aGlzLl9tYXAuZ2V0VmFsdWUocy5zKTtcclxuICAgICAgICAgICAgICAgIGlmKHJldCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGl0ZXI6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpOyBpdGVyLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSk7IGl0ZXIucHJlSW5jcmVtZW50KCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZXIucHRyKCkuZmlyc3QgPT0gcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLnNlY29uZCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXIucHRyKCkuc2Vjb25kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gaW5kZW50ICsgXCJ7XFxuXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xyXG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaXRlLnB0cigpLmZpcnN0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCIgXCIgKyBrZXkgKyBcIiA6IFwiICsgdi5nZXRTdHJpbmcoaW5kZW50ICsgXCIgICBcIikgKyBcIiBcXG5cIjtcclxuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwifVxcblwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkk1hcOWei+OBp+i/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFw44Gr6KaB57Sg44KS6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB1dChrZXk6IHN0cmluZywgdjogVmFsdWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0VmFsdWUoa2V5LCB2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcOOBi+OCieOCreODvOOBruODquOCueODiOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2tleXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBuZXcgY3NtVmVjdG9yPHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gaXRlLnB0cigpLmZpcnN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaEJhY2soa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXDjga7opoHntKDmlbDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmdldFNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHByaXZhdGUgX21hcDogY3NtTWFwPHN0cmluZywgVmFsdWU+OyAgIC8vIEpTT07opoHntKDjga7lgKRcclxuICAgICAgICBwcml2YXRlIF9rZXlzOiBjc21WZWN0b3I8c3RyaW5nPjsgICAgICAgICAgICAgICAvLyBKU09O6KaB57Sg44Gu5YCkXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9