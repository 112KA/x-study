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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/motion/cubismmotionqueueentry.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21hdGgvY3ViaXNtdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtbWFwLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc212ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztFQUtFO0FBRUYsMERBQTBEO0FBQzFELGFBQWE7QUFDYiwwREFBMEQ7QUFFMUQsdUNBQXVDO0FBQ3ZDLFlBQVk7QUFDTCxJQUFNLHFCQUFxQixHQUFXLENBQUMsQ0FBQztBQUMvQyxjQUFjO0FBQ1AsSUFBTSxtQkFBbUIsR0FBVyxDQUFDLENBQUM7QUFDN0MsY0FBYztBQUNQLElBQU0sa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO0FBQzVDLFlBQVk7QUFDTCxJQUFNLHFCQUFxQixHQUFXLENBQUMsQ0FBQztBQUMvQyxhQUFhO0FBQ04sSUFBTSxtQkFBbUIsR0FBVyxDQUFDLENBQUM7QUFDN0MsWUFBWTtBQUNMLElBQU0saUJBQWlCLEdBQVcsQ0FBQyxDQUFDO0FBRTNDOzs7OztFQUtFO0FBQ0ssSUFBTSxhQUFhLEdBQVcscUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQjNEO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRWtFO0FBQ3JFLElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBRWhDLElBQVUscUJBQXFCLENBK0VyQztBQS9FRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBVUk7O1dBRUc7UUFDSCxrQkFBbUIsRUFBc0I7WUFFckMsSUFBRyxPQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUMxQjtnQkFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBcEJEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQWdCRDs7OztXQUlHO1FBQ0ksMEJBQU8sR0FBZCxVQUFlLENBQWdDO1lBRTNDLElBQUksT0FBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFDMUI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFDSSxJQUFJLENBQUMsWUFBWSxTQUFTLEVBQy9CO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO2lCQUNJLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFDOUI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2QkFBVSxHQUFqQixVQUFrQixDQUFnQztZQUU5QyxJQUFJLE9BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQ3pCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFDSSxJQUFJLENBQUMsWUFBWSxTQUFTLEVBQy9CO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQ0ksSUFBSSxDQUFDLFlBQVksUUFBUSxFQUM5QjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFHTCxlQUFDO0lBQUQsQ0FBQztJQXJFWSw4QkFBUSxXQXFFcEI7QUFHTCxDQUFDLEVBL0VnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBK0VyQzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztFQUtFO0FBRW1FO0FBQ1I7QUFHN0QsSUFBTyxRQUFRLEdBQUcsK0RBQVEsQ0FBQyxRQUFRLENBQUM7QUFDcEMsSUFBTyxTQUFTLEdBQUcscUVBQVMsQ0FBQyxTQUFTLENBQUM7QUFFaEMsSUFBVSxxQkFBcUIsQ0FvSHJDO0FBcEhELFdBQWlCLHFCQUFxQjtJQUVsQzs7OztPQUlHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBWSxDQUFDO1FBQzFDLENBQUM7UUFFRDs7V0FFRztRQUNJLGlDQUFPLEdBQWQ7WUFFSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxxQ0FBVyxHQUFsQixVQUFtQixHQUEyQjtZQUUxQyxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDMUM7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksb0NBQVUsR0FBakIsVUFBa0IsRUFBc0I7WUFFcEMsSUFBSSxNQUFNLEdBQWEsSUFBSSxDQUFDO1lBRTVCLElBQUksUUFBUSxJQUFJLE9BQU0sQ0FBQyxFQUFFLENBQUMsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUN0QztvQkFDSSxPQUFPLE1BQU0sQ0FBQztpQkFDakI7Z0JBRUQsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtpQkFFRDtnQkFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwrQkFBSyxHQUFaLFVBQWEsRUFBc0I7WUFFL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGlDQUFPLEdBQWQsVUFBZSxFQUFzQjtZQUVqQyxJQUFJLFFBQVEsSUFBSSxPQUFNLENBQUMsRUFBRSxDQUFDLEVBQzFCO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSyxnQ0FBTSxHQUFkLFVBQWUsRUFBVTtZQUVyQixLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDbkQ7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzFDO29CQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBR0wsc0JBQUM7SUFBRCxDQUFDO0lBNUdZLHFDQUFlLGtCQTRHM0I7QUFDTCxDQUFDLEVBcEhnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBb0hyQzs7Ozs7Ozs7Ozs7OztBQ2xJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVILHNEQUFzRDtBQUNpQjtBQUNPO0FBQ0s7QUFDSDtBQUNoRixJQUFPLEtBQUssR0FBRyx1RUFBVSxDQUFDLEtBQUssQ0FBQztBQUNoQyxJQUFPLGVBQWUsR0FBRyx5RUFBZSxDQUFDLGVBQWUsQ0FBQztBQUN6RCxJQUFPLGNBQWMsR0FBRywrRUFBYyxDQUFDLGNBQWMsQ0FBQztBQUUvQyxTQUFTLE1BQU0sQ0FBQyxDQUFTLEVBQUUsTUFBZ0I7SUFFOUMsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxHQUFJLENBQUMsRUFBRSxFQUM1QjtRQUNJLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0Qyx5QkFBeUI7UUFDekIsSUFBRyxLQUFLLElBQUUsR0FBRyxJQUFJLEtBQUssSUFBRSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsRUFDM0M7WUFDSSxTQUFTO1NBQ1o7UUFFSixlQUFlO1FBQ1osSUFBSSxJQUFJLEdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNoQjtZQUNBLHFCQUFxQjtZQUNqQixNQUFNO1NBQ1Q7UUFFTCwwQkFBMEI7UUFDdEIsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBQ0QsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVTtJQUVsQyxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDWDtRQUNDLHFCQUFxQjtRQUNsQixDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1g7SUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFFckMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRU0sSUFBVSxxQkFBcUIsQ0FvT3JDO0FBcE9ELFdBQWlCLHFCQUFxQjtJQUVsQyxrQkFBa0I7SUFFbEIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO0lBQ2pDLElBQUksZUFBZSxHQUFZLEtBQUssQ0FBQztJQUNyQyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUM7SUFDNUIsSUFBSSxpQkFBaUIsR0FBb0IsSUFBSSxDQUFDO0lBRTlDOztPQUVHO0lBQ0gsSUFBaUIsUUFBUSxDQUl4QjtJQUpELFdBQWlCLFFBQVE7UUFFUixxQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFLLGdCQUFnQjtRQUM5QyxtQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFPLGVBQWU7SUFDOUQsQ0FBQyxFQUpnQixRQUFRLEdBQVIsOEJBQVEsS0FBUiw4QkFBUSxRQUl4QjtJQUVELFNBQWdCLFNBQVMsQ0FBSSxPQUFVO1FBRW5DLElBQUcsQ0FBQyxPQUFPLEVBQ1g7WUFDSSxPQUFPO1NBQ1Y7UUFFRCxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVJlLCtCQUFTLFlBUXhCO0lBRUQ7OztPQUdHO0lBQ0g7UUEyTEk7OztXQUdHO1FBQ0g7UUFHQSxDQUFDO1FBaE1EOzs7Ozs7OztXQVFHO1FBQ1csdUJBQU8sR0FBckIsVUFBc0IsTUFBcUI7WUFBckIsc0NBQXFCO1lBRXZDLElBQUcsV0FBVyxFQUNkO2dCQUNJLHdFQUFhLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxXQUFXLENBQUM7YUFDdEI7WUFFRCxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBRWxCLElBQUcsUUFBUSxJQUFJLElBQUksRUFDbkI7Z0JBQ0ksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRTtZQUVELFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFbkIsK0JBQStCO1lBQy9CLElBQUcsV0FBVyxFQUNkO2dCQUNJLElBQU0sT0FBTyxHQUFXLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDakUsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBTSxLQUFLLEdBQVcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFNLGFBQWEsR0FBVyxPQUFPLENBQUM7Z0JBRXRDLHdFQUFhLENBQUMsK0NBQStDLEVBQ3pELENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFCLGFBQWEsQ0FDaEIsQ0FBQzthQUNMO1lBRUQsd0VBQWEsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBRXhELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7O1dBR0c7UUFDVyx1QkFBTyxHQUFyQjtZQUVJLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO1FBRUQ7OztXQUdHO1FBQ1csMEJBQVUsR0FBeEI7WUFFSSxxRUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hCLElBQUcsQ0FBQyxXQUFXLEVBQ2Y7Z0JBQ0ksMkVBQWdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBRUQscUNBQXFDO1lBQ3JDLHlCQUF5QjtZQUN6QiwyQ0FBMkM7WUFDM0MsSUFBSSxlQUFlLEVBQ25CO2dCQUNJLDJFQUFnQixDQUFDLDREQUE0RCxDQUFDLENBQUM7Z0JBQy9FLE9BQU87YUFDVjtZQUVELHNCQUFzQjtZQUN0QixLQUFLLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUV6QyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1lBRTFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFFdkIsd0VBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRDs7OztXQUlHO1FBQ1csdUJBQU8sR0FBckI7WUFFSSxxRUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hCLElBQUcsQ0FBQyxXQUFXLEVBQ2Y7Z0JBQ0ksMkVBQWdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztnQkFDcEQsT0FBTzthQUNWO1lBRUQsc0NBQXNDO1lBQ3RDLHlDQUF5QztZQUN6QyxJQUFHLENBQUMsZUFBZSxFQUFLLHFCQUFxQjthQUM3QztnQkFDSSwyRUFBZ0IsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUV0QyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFFekIsK0JBQStCO1lBQy9CLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUvQixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRXhCLHdFQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBR0Q7OztXQUdHO1FBQ1cseUJBQVMsR0FBdkI7WUFFSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBRUQ7OztXQUdHO1FBQ1csNkJBQWEsR0FBM0I7WUFFSSxPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNXLCtCQUFlLEdBQTdCLFVBQThCLE9BQWU7WUFFekMsa0NBQWtDO1lBQ2xDLElBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFDaEQ7Z0JBQ0ksT0FBTzthQUNWO1lBRUQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDVywrQkFBZSxHQUE3QjtZQUVJLElBQUksUUFBUSxJQUFJLElBQUksRUFDcEI7Z0JBQ0ksT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ2pDLENBQUM7UUFFRDs7O1dBR0c7UUFDVyw0QkFBWSxHQUExQjtZQUVJLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsQ0FBQztRQVVMLHNCQUFDO0lBQUQsQ0FBQztJQW5NWSxxQ0FBZSxrQkFtTTNCO0FBQ0wsQ0FBQyxFQXBPZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9PckM7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDOztBQUVEOztHQUVHO0FBQ0gsSUFBWSxRQVFYO0FBUkQsV0FBWSxRQUFRO0lBRWhCLCtEQUFvQjtJQUNwQiwyREFBYztJQUNkLHlEQUFhO0lBQ2IsK0RBQWdCO0lBQ2hCLDJEQUFjO0lBQ2QsdURBQVksRUFBWSxTQUFTO0FBQ3JDLENBQUMsRUFSVyxRQUFRLEtBQVIsUUFBUSxRQVFuQjs7Ozs7Ozs7Ozs7OztBQzdTRDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVvRTtBQUN2RSxJQUFPLGFBQWEsR0FBRyxvRUFBYSxDQUFDLGFBQWEsQ0FBQztBQUU1QyxJQUFVLHFCQUFxQixDQXVOckM7QUF2TkQsV0FBaUIscUJBQXFCO0lBRWxDOztPQUVHO0lBQ0g7UUEwTUs7O1dBRUc7UUFDSDtRQUdBLENBQUM7UUE5TUY7Ozs7Ozs7V0FPRztRQUNJLGdCQUFLLEdBQVosVUFBYSxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7WUFFaEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNmO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtpQkFDSSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQ3BCO2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUM7YUFDZjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGNBQUcsR0FBVixVQUFXLENBQVM7WUFFaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksZUFBSSxHQUFYLFVBQVksQ0FBUztZQUVqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLHdCQUFhLEdBQXBCLFVBQXFCLEtBQWE7WUFFOUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNmO2dCQUNJLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7aUJBQ0ksSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUNwQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQzthQUNkO1lBRUQsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksY0FBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWE7WUFFbEMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLGNBQUcsR0FBVixVQUFXLElBQVksRUFBRSxLQUFhO1lBRWxDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsS0FBSztnQkFDUCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQWUsR0FBdEIsVUFBdUIsT0FBZTtZQUVsQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksMEJBQWUsR0FBdEIsVUFBdUIsTUFBYztZQUVqQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNJLDRCQUFpQixHQUF4QixVQUF5QixJQUFtQixFQUFFLEVBQWlCO1lBRTNELElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLEdBQUcsR0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBRTFCLE9BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDcEI7Z0JBQ0ksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO1lBRUQsT0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFDbkI7Z0JBQ0ksR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksNkJBQWtCLEdBQXpCLFVBQTBCLElBQW1CLEVBQUUsRUFBaUI7WUFFNUQsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWxELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQ3pCO2dCQUNJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUVLLDRCQUFpQixHQUF4QixVQUF5QixVQUFrQjtZQUV4QyxJQUFJLEdBQUcsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUU3QyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTdCLE9BQU8sR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQVNOLGlCQUFDO0lBQUQsQ0FBQztJQWpOWSxnQ0FBVSxhQWlOdEI7QUFDTCxDQUFDLEVBdk5nQixxQkFBcUIsS0FBckIscUJBQXFCLFFBdU5yQzs7Ozs7Ozs7Ozs7OztBQ2pPRDtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQThSckM7QUE5UkQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksWUFBWTtZQUNoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNXLHVCQUFRLEdBQXRCLFVBQXVCLENBQWUsRUFBRSxDQUFlLEVBQUUsR0FBaUI7WUFFdEUsSUFBSSxDQUFDLEdBQWlCLElBQUksWUFBWSxDQUNsQztnQkFDSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dCQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2FBQ3JCLENBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztZQUVsQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNsQztnQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNqQztvQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNqQzt3QkFDSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDL0M7aUJBQ0o7YUFDSjtZQUVELEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ2xDO2dCQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQ0FBWSxHQUFuQjtZQUVJLElBQUksQ0FBQyxHQUFpQixJQUFJLFlBQVksQ0FDbEM7Z0JBQ0ksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztnQkFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRzthQUNyQixDQUNKLENBQUM7WUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksa0NBQVMsR0FBaEIsVUFBaUIsRUFBZ0I7WUFFN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGlDQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLGtDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksa0NBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHNDQUFhLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixHQUFXO1lBRXpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixHQUFXO1lBRXpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBVztZQUUvQixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRDs7V0FFRztRQUNJLHlDQUFnQixHQUF2QixVQUF3QixHQUFXO1lBRS9CLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDSSwwQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBUyxFQUFFLENBQVM7WUFFekMsSUFBSSxHQUFHLEdBQWlCLElBQUksWUFBWSxDQUNwQztnQkFDSSxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUcsRUFBSyxHQUFHO2dCQUMzQixDQUFDLEVBQU8sQ0FBQyxFQUFPLEdBQUcsRUFBSyxHQUFHO2FBQzlCLENBQ0osQ0FBQztZQUVGLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ0ksa0NBQVMsR0FBaEIsVUFBaUIsQ0FBUyxFQUFFLENBQVM7WUFFakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixDQUFTO1lBRXZCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksbUNBQVUsR0FBakIsVUFBa0IsQ0FBUztZQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBR0Q7Ozs7O1dBS0c7UUFDSSxzQ0FBYSxHQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUTtZQUVwQyxJQUFJLEdBQUcsR0FBaUIsSUFBSSxZQUFZLENBQ3BDO2dCQUNJLENBQUMsRUFBTyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxDQUFDLEVBQU8sR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7Z0JBQzNCLEdBQUcsRUFBSyxHQUFHLEVBQUssR0FBRyxFQUFLLEdBQUc7YUFDOUIsQ0FDSixDQUFDO1lBRUYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksOEJBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1lBRTdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0kseUNBQWdCLEdBQXZCLFVBQXdCLENBQWlCO1lBRXJDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRDs7V0FFRztRQUNJLDhCQUFLLEdBQVo7WUFFSSxJQUFJLFdBQVcsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUV2RCxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9DO2dCQUNJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztZQUVELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFHTCxxQkFBQztJQUFELENBQUM7SUF0Ulksb0NBQWMsaUJBc1IxQjtBQUNMLENBQUMsRUE5UmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE4UnJDOzs7Ozs7Ozs7Ozs7O0FDclNEO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBNEtyQztBQTVLRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBRUk7O1dBRUc7UUFDSCx1QkFBMEIsQ0FBVSxFQUFTLENBQVU7WUFBN0IsTUFBQyxHQUFELENBQUMsQ0FBUztZQUFTLE1BQUMsR0FBRCxDQUFDLENBQVM7WUFFbkQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFUixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFHLEdBQVYsVUFBVyxPQUFzQjtZQUU3QixJQUFJLEdBQUcsR0FBa0IsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksaUNBQVMsR0FBaEIsVUFBaUIsT0FBc0I7WUFFbkMsSUFBSSxHQUFHLEdBQWtCLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLGdDQUFRLEdBQWYsVUFBZ0IsT0FBc0I7WUFFbEMsSUFBSSxHQUFHLEdBQWtCLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHdDQUFnQixHQUF2QixVQUF3QixNQUFjO1lBRWxDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSxnQ0FBUSxHQUFmLFVBQWdCLE9BQXNCO1lBRWxDLElBQUksR0FBRyxHQUFrQixJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSx3Q0FBZ0IsR0FBdkIsVUFBd0IsTUFBYztZQUVsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxpQ0FBUyxHQUFoQjtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksdUNBQWUsR0FBdEIsVUFBdUIsQ0FBZ0I7WUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFHLEdBQVYsVUFBVyxDQUFnQjtZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQ0FBUyxHQUFoQjtZQUVJLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTVFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBRUQ7Ozs7Ozs7O1dBUUc7UUFDSSwrQkFBTyxHQUFkLFVBQWUsR0FBa0I7WUFFN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0ksa0NBQVUsR0FBakIsVUFBa0IsR0FBa0I7WUFFaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxvQkFBQztJQUFELENBQUM7SUFwS1ksbUNBQWEsZ0JBb0t6QjtBQUNMLENBQUMsRUE1S2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE0S3JDOzs7Ozs7Ozs7Ozs7O0FDbkxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVvRTtBQUlGO0FBQ25CO0FBQ2xELElBQU8sU0FBUyxHQUFHLHFFQUFTLENBQUMsU0FBUyxDQUFDO0FBSXZDLElBQU8sVUFBVSxHQUFHLHNFQUFVLENBQUMsVUFBVSxDQUFDO0FBRW5DLElBQVUscUJBQXFCLENBMk5yQztBQTNORCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBWUk7O1dBRUc7UUFDSDtZQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFFLFVBQVU7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksU0FBUyxFQUFhLENBQUM7UUFDeEQsQ0FBQztRQXBCRDs7V0FFRztRQUNXLG9CQUFNLEdBQXBCLFVBQXFCLE1BQXFCO1lBRXRDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixDQUFDO1FBY0Q7O1dBRUc7UUFDSSwrQkFBTyxHQUFkO1lBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksd0NBQWdCLEdBQXZCLFVBQXdCLEtBQWtCLEVBQUUsZ0JBQXdDLEVBQUUsZUFBdUI7WUFFekcsSUFBRyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUNuRTtnQkFDSSxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEVBQ2hDO2dCQUNJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ3RGLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsY0FBYztnQkFFcEUsSUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU1QyxJQUFHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFDcEM7b0JBQ0ksMkJBQTJCO29CQUMzQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztvQkFDL0YsMkJBQTJCO2lCQUM5QjthQUNKO1lBRUQsSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQjtZQUV2RCx5QkFBeUI7WUFDekIsbUJBQW1CO1lBQ25CLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxjQUFjLElBQUksR0FBRztnQkFDekMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVwSCxJQUFNLE9BQU8sR0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0csVUFBVSxHQUFHLFVBQVUsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBRTNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFdkQscUVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUVuRCw0QkFBNEI7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFOUUsTUFBTTtZQUNOLCtDQUErQztZQUMvQyxJQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFDM0Y7Z0JBQ0ksZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzthQUM5QztRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBYSxHQUFwQixVQUFxQixhQUFxQjtZQUV0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN4QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQWMsR0FBckIsVUFBc0IsY0FBc0I7WUFFeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7UUFDMUMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHNDQUFjLEdBQXJCO1lBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBYSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVMsR0FBaEIsVUFBaUIsTUFBYztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksaUNBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7Ozs7OztXQVFHO1FBQ0ksbUNBQVcsR0FBbEI7WUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSx1Q0FBZSxHQUF0QjtZQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHFDQUFhLEdBQXBCLFVBQXFCLGFBQXFCO1lBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNJLHFDQUFhLEdBQXBCLFVBQXFCLHNCQUE4QixFQUFFLGlCQUF5QjtZQUUxRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO1FBb0JMLG9CQUFDO0lBQUQsQ0FBQztJQW5OcUIsbUNBQWEsZ0JBbU5sQztBQUNMLENBQUMsRUEzTmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUEyTnJDOzs7Ozs7Ozs7Ozs7O0FDOU9EO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRW9FO0FBR3ZFLElBQU8sYUFBYSxHQUFHLG9FQUFhLENBQUMsYUFBYSxDQUFDO0FBRTVDLElBQVUscUJBQXFCLENBbU9yQztBQW5PRCxXQUFpQixxQkFBcUI7SUFFbEM7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztZQUNsQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7V0FFRztRQUNJLHdDQUFPLEdBQWQ7WUFFSSxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDbkM7Z0JBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3pDO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSw2Q0FBWSxHQUFuQixVQUFvQixjQUFzQixFQUFFLGVBQXVCO1lBRS9ELElBQU0saUJBQWlCLEdBQVcsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUVuRSxJQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQ3pFO2dCQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7YUFDNUM7UUFDTCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSSwyQ0FBVSxHQUFqQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDBDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxtREFBa0IsR0FBekI7WUFFSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUN4QyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksMkNBQVUsR0FBakI7WUFFSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLDZDQUFZLEdBQW5CLFVBQW9CLFNBQWlCO1lBRWpDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDdkMsQ0FBQztRQUVEOzs7V0FHRztRQUNJLG1EQUFrQixHQUF6QixVQUEwQixTQUFpQjtZQUV2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwyQ0FBVSxHQUFqQixVQUFrQixPQUFlO1lBRTdCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ25DLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw4Q0FBYSxHQUFwQixVQUFxQixDQUFVO1lBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQixVQUFvQixDQUFVO1lBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksNENBQVcsR0FBbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUVEOzs7V0FHRztRQUNJLCtDQUFjLEdBQXJCLFVBQXNCLENBQVU7WUFFNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx5Q0FBUSxHQUFmLFVBQWdCLFdBQW1CLEVBQUUsTUFBYztZQUUvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQy9CLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw2Q0FBWSxHQUFuQjtZQUVJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwrQ0FBYyxHQUFyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHNEQUFxQixHQUE1QjtZQUVJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxzREFBcUIsR0FBNUIsVUFBNkIsU0FBaUI7WUFFMUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztRQUM1QyxDQUFDO1FBZ0JMLDZCQUFDO0lBQUQsQ0FBQztJQTdOWSw0Q0FBc0IseUJBNk5sQztBQUNMLENBQUMsRUFuT2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFtT3JDOzs7Ozs7Ozs7Ozs7O0FDL09EO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRTRFO0FBRy9FLElBQU8sY0FBYyxHQUFHLDBFQUFjLENBQUMsY0FBYyxDQUFDO0FBRS9DLElBQVUscUJBQXFCLENBaVJyQztBQWpSRCxXQUFpQixxQkFBcUI7SUFFbEM7Ozs7T0FJRztJQUNIO1FBNExJOztXQUVHO1FBQ0g7WUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1lBRTVDLFdBQVc7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBeE1EOzs7O1dBSUc7UUFDVyxxQkFBTSxHQUFwQjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNXLHFCQUFNLEdBQXBCLFVBQXFCLFFBQXdCO1lBRXpDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxtQ0FBVSxHQUFqQixVQUFrQixLQUFrQjtZQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxrQ0FBUyxHQUFoQjtZQUVJLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUk7Z0JBQUUsT0FBTztZQUVuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxxQ0FBWSxHQUFuQixVQUFvQixRQUF3QjtZQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0kscUNBQVksR0FBbkI7WUFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOzs7Ozs7O1dBT0c7UUFDSSxzQ0FBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFhO1lBRXhFLElBQUcsR0FBRyxHQUFHLEdBQUcsRUFDWjtnQkFDSSxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2I7aUJBQ0ksSUFBRyxHQUFHLEdBQUcsR0FBRyxFQUNqQjtnQkFDSSxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2I7WUFFRCxJQUFHLEtBQUssR0FBRyxHQUFHLEVBQ2Q7Z0JBQ0ksS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNmO2lCQUNJLElBQUcsS0FBSyxHQUFHLEdBQUcsRUFDbkI7Z0JBQ0ksS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNmO1lBRUQsSUFBRyxJQUFJLEdBQUcsR0FBRyxFQUNiO2dCQUNJLElBQUksR0FBRyxHQUFHLENBQUM7YUFDZDtpQkFDSSxJQUFHLElBQUksR0FBRyxHQUFHLEVBQ2xCO2dCQUNJLElBQUksR0FBRyxHQUFHLENBQUM7YUFDZDtZQUVELElBQUcsS0FBSyxHQUFHLEdBQUcsRUFDZDtnQkFDSSxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7aUJBQ0ksSUFBRyxLQUFLLEdBQUcsR0FBRyxFQUNuQjtnQkFDSSxLQUFLLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksc0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksZ0RBQXVCLEdBQTlCLFVBQStCLE1BQWU7WUFFMUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUN4QyxDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLDZDQUFvQixHQUEzQjtZQUVJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7UUFFRDs7O1dBR0c7UUFDSSxxQ0FBWSxHQUFuQixVQUFvQixPQUFnQjtZQUVoQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM5QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGtDQUFTLEdBQWhCO1lBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksc0NBQWEsR0FBcEIsVUFBcUIsQ0FBUztZQUUxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBRUQ7OztXQUdHO1FBQ0ksc0NBQWEsR0FBcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLGlDQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQWtETCxxQkFBQztJQUFELENBQUM7SUE1T3FCLG9DQUFjLGlCQTRPbkM7SUFFRCxJQUFZLGVBS1g7SUFMRCxXQUFZLGVBQWU7UUFFdkIseUZBQTBCO1FBQzFCLDZGQUE0QjtRQUM1Qix5R0FBa0M7SUFDdEMsQ0FBQyxFQUxXLGVBQWUsR0FBZixxQ0FBZSxLQUFmLHFDQUFlLFFBSzFCO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0g7UUFFSTs7V0FFRztRQUNIO1lBRUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQztRQU1MLHlCQUFDO0lBQUQsQ0FBQztJQWpCWSx3Q0FBa0IscUJBaUI5QjtBQUNMLENBQUMsRUFqUmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUFpUnJDOzs7Ozs7Ozs7Ozs7O0FDN1JEO0FBQUE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRW1EO0FBRS9DLElBQVUscUJBQXFCLENBNFZyQztBQTVWRCxXQUFpQixxQkFBcUI7SUFFbEM7OztPQUdHO0lBQ0g7UUFFSTs7OztXQUlHO1FBQ0gsaUJBQW1CLEdBQVcsRUFBRSxLQUFhO1lBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUMzQixDQUFDLENBQUMsSUFBSTtnQkFDTixDQUFDLENBQUMsR0FBRyxDQUFDO1lBRVYsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQztRQUlMLGNBQUM7SUFBRCxDQUFDO0lBcEJZLDZCQUFPLFVBb0JuQjtJQUVEOztPQUVHO0lBQ0g7UUFFSTs7O1dBR0c7UUFDSCxnQkFBbUIsSUFBYTtZQUU1QixJQUFHLElBQUksSUFBSSxTQUFTLEVBQ3BCO2dCQUNJLElBQUcsSUFBSSxHQUFHLENBQUMsRUFDWDtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDbEI7cUJBRUQ7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0o7aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3QkFBTyxHQUFkO1lBRUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwwQkFBUyxHQUFoQixVQUFpQixHQUFVO1lBRXZCLHFCQUFxQjtZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYztZQUMzRCw0QkFBNEI7WUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQWUsR0FBRyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHlCQUFRLEdBQWYsVUFBZ0IsR0FBVTtZQUV0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVmLEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUMxQztnQkFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFDbEM7b0JBQ0ksS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDVixNQUFNO2lCQUNUO2FBQ0o7WUFFRCxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQ2I7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUN4QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ2pEO1FBQ0wsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSx5QkFBUSxHQUFmLFVBQWdCLEdBQVUsRUFBRSxLQUFZO1lBRXBDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWYsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO2dCQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUNsQztvQkFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNWLE1BQU07aUJBQ1Q7YUFDSjtZQUVELElBQUcsS0FBSyxJQUFJLENBQUMsRUFDYjtnQkFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDekM7aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2xEO1FBQ0wsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ksd0JBQU8sR0FBZCxVQUFlLEdBQVU7WUFFckIsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO2dCQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUNsQztvQkFDSSxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUssR0FBWjtZQUVJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBRTlCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksd0JBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLGdDQUFlLEdBQXRCLFVBQXVCLE9BQWUsRUFBRSxTQUFrQjtZQUV0RCxJQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDbkM7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQzlCO29CQUNJLElBQUcsQ0FBQyxTQUFTLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXO3dCQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7aUJBQ3BDO3FCQUVEO29CQUNJLElBQUcsQ0FBQyxTQUFTLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2lCQUNwQzthQUNKO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUssR0FBWjtZQUVJLElBQUksR0FBRyxHQUEyQixJQUFJLFFBQVEsQ0FBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEUsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxvQkFBRyxHQUFWO1lBRUksSUFBSSxHQUFHLEdBQTJCLElBQUksUUFBUSxDQUFlLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3JGLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSxzQkFBSyxHQUFaLFVBQWEsR0FBMkI7WUFFcEMsSUFBSSxLQUFLLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQ25DO2dCQUNJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUTthQUN2QjtZQUVELEtBQUs7WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRWIsSUFBSSxJQUFJLEdBQTJCLElBQUksUUFBUSxDQUFlLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDakYsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMEJBQVMsR0FBaEI7WUFFSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDbEM7Z0JBQ0kseUVBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1Qyx5RUFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1FBQ0wsQ0FBQztRQUVzQixrQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtRQUlqRSxhQUFDO0tBQUE7SUFsT1ksNEJBQU0sU0FrT2xCO0lBR0Q7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0gsa0JBQVksQ0FBd0IsRUFBRSxHQUFZO1lBRTlDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQWdCLENBQUM7WUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxHQUFHO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBRyxHQUFWLFVBQVcsR0FBMkI7WUFFbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQjtZQUVJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFZLEdBQW5CO1lBRUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNEJBQVMsR0FBaEI7WUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBZSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUUsU0FBUztZQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFTLEdBQWhCO1lBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQWUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUcsR0FBVjtZQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFRLEdBQWYsVUFBZ0IsR0FBMkI7WUFFdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUlMLGVBQUM7SUFBRCxDQUFDO0lBcEZZLDhCQUFRLFdBb0ZwQjtBQUNMLENBQUMsRUE1VmdCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE0VnJDOzs7Ozs7Ozs7Ozs7O0FDcldEO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVJLElBQVUscUJBQXFCLENBNkdyQztBQTdHRCxXQUFpQixxQkFBcUI7SUFFbEM7O09BRUc7SUFDSDtRQThGSTs7V0FFRztRQUNILG1CQUFtQixDQUFTO1lBRXhCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQWxHRDs7Ozs7V0FLRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxDQUFTLEVBQUUsTUFBZTtZQUVwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVSLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDZCQUFTLEdBQWhCLFVBQWlCLE1BQWMsRUFBRSxDQUFTO1lBRXRDLElBQUksR0FBRyxHQUFjLElBQUksQ0FBQztZQUUxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM5QjtnQkFDSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBUSxHQUFmO1lBRUksT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkUsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQVMsR0FBaEI7WUFFSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxDQUFZO1lBRXRCLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFPLEdBQWQsVUFBZSxDQUFZO1lBRXZCLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDJCQUFPLEdBQWQsVUFBZSxDQUFTO1lBRXBCLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQVdMLGdCQUFDO0lBQUQsQ0FBQztJQXZHWSwrQkFBUyxZQXVHckI7QUFDTCxDQUFDLEVBN0dnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBNkdyQzs7Ozs7Ozs7Ozs7OztBQ3BIRDtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSSxJQUFVLHFCQUFxQixDQWlZckM7QUFqWUQsV0FBaUIscUJBQXFCO0lBRWxDOztPQUVHO0lBQ0g7UUFFSTs7OztXQUlHO1FBQ0gsbUJBQVksZUFBMkI7WUFBM0IscURBQTJCO1lBRW5DLElBQUcsZUFBZSxHQUFHLENBQUMsRUFDdEI7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDbEI7aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUUsR0FBVCxVQUFVLEtBQWE7WUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksdUJBQUcsR0FBVixVQUFXLEtBQWEsRUFBRSxLQUFRO1lBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFHLEdBQVYsVUFBVyxNQUFrQjtZQUFsQixtQ0FBa0I7WUFFekIsSUFBSSxHQUFHLEdBQVEsSUFBSSxLQUFLLEVBQUssQ0FBQztZQUM5QixLQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFFRDs7O1dBR0c7UUFDSSw0QkFBUSxHQUFmLFVBQWdCLEtBQVE7WUFFcEIsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQy9CO2dCQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUY7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBSyxHQUFaO1lBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFFRDs7O1dBR0c7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7OztXQUlHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLE9BQWUsRUFBRSxLQUFRO1lBRW5DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFekIsSUFBRyxPQUFPLEdBQUcsT0FBTyxFQUNwQjtnQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsYUFBYTthQUNoRDtZQUVELEtBQUksSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMEJBQU0sR0FBYixVQUFjLE9BQWUsRUFBRSxLQUFlO1lBQWYsb0NBQWU7WUFFMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRDs7V0FFRztRQUNJLDhCQUFVLEdBQWpCLFVBQWtCLE9BQWUsRUFBRSxLQUFpQixFQUFFLGdCQUFnQztZQUFuRCxvQ0FBaUI7WUFBRSwwREFBZ0M7WUFFbEYsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUVqQyxJQUFHLE9BQU8sR0FBRyxPQUFPLEVBQ3BCO2dCQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRSxhQUFhO2dCQUU3QyxJQUFHLGdCQUFnQixFQUNuQjtvQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDaEQ7d0JBQ0ksSUFBRyxPQUFPLEtBQUssSUFBSSxVQUFVLEVBQUcsTUFBTTt5QkFDdEM7NEJBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzFEOzZCQUNJLGdCQUFnQjt5QkFDckI7NEJBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7eUJBQ3hCO3FCQUNKO2lCQUNKO3FCQUVEO29CQUNJLEtBQUksSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUNoRDt3QkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDeEI7aUJBQ0o7YUFDSjtpQkFFRDtnQkFDSSx3QkFBd0I7Z0JBQ3hCLEtBQUs7Z0JBQ0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUksWUFBWTthQUMzRDtZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxRQUFxQixFQUFFLEtBQWtCLEVBQUUsR0FBZ0I7WUFFckUsSUFBSSxLQUFLLEdBQVcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLEtBQUssR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksS0FBSyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFFL0IsSUFBSSxRQUFRLEdBQVcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVyQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFFNUMsdUJBQXVCO1lBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUcsT0FBTyxHQUFHLENBQUMsRUFDZDtnQkFDSSxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QztvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDeEM7YUFDSjtZQUVELEtBQUksSUFBSSxDQUFDLEdBQVcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQ2xEO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLDBCQUFNLEdBQWIsVUFBYyxLQUFhO1lBRXZCLElBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFDbkM7Z0JBQ0ksT0FBTyxLQUFLLENBQUMsQ0FBRyxRQUFRO2FBQzNCO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUViLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7O1dBR0c7UUFDSSx5QkFBSyxHQUFaLFVBQWEsR0FBZ0I7WUFFekIsSUFBSSxLQUFLLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQ25DO2dCQUNJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUTthQUN2QjtZQUVELEtBQUs7WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRWIsSUFBSSxJQUFJLEdBQWdCLElBQUksUUFBUSxDQUFJLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFHLEtBQUs7WUFDN0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLG1DQUFlLEdBQXRCLFVBQXVCLE9BQWU7WUFFbEMsSUFBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFDM0I7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFDdEI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7aUJBQzVCO3FCQUVEO29CQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7aUJBQzVCO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBSyxHQUFaO1lBRUksSUFBSSxHQUFHLEdBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNaLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBRyxHQUFWO1lBRUksSUFBSSxHQUFHLEdBQWdCLElBQUksUUFBUSxDQUFJLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRU0sNkJBQVMsR0FBaEIsVUFBaUIsTUFBYztZQUUzQixJQUFJLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBSyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFOUMsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQU1lLHVCQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQW1CO1FBQzNELGdCQUFDO0tBQUE7SUFoU1ksK0JBQVMsWUFnU3JCO0lBRUQ7UUFFSTs7V0FFRztRQUNILGtCQUFtQixDQUFnQixFQUFFLEtBQWM7WUFFL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVEOztXQUVHO1FBQ0ksc0JBQUcsR0FBVixVQUFXLEdBQWdCO1lBRXZCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVksR0FBbkI7WUFFSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBWSxHQUFuQjtZQUVJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFTLEdBQWhCO1lBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDRCQUFTLEdBQWhCO1lBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFFLFNBQVM7WUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBRyxHQUFWO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVEOztXQUVHO1FBQ0ksK0JBQVksR0FBbkIsVUFBb0IsR0FBZ0I7WUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBUSxHQUFmLFVBQWdCLEdBQWdCO1lBRTVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFJTCxlQUFDO0lBQUQsQ0FBQztJQXpGWSw4QkFBUSxXQXlGcEI7QUFDTCxDQUFDLEVBallnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBaVlyQzs7Ozs7Ozs7Ozs7OztBQ3hZRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUV5RjtBQUN1RTtBQUc1SixJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQWUsRUFBRSxHQUFXLEVBQUUsSUFBVztJQUVwRSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFFTSxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBZSxFQUFFLEdBQVcsRUFBRSxJQUFXO0lBRXRFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRU0sSUFBSSxVQUFVLEdBQUcsVUFBQyxJQUFTO0lBRTlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBR0ssSUFBSSxnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7SUFBRSxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDZCQUFlOztBQUFNLENBQUMsQ0FBQztBQUM1RCxJQUFJLGNBQWMsR0FBRyxVQUFDLEdBQVc7SUFBRSxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDZCQUFlOztBQUFNLENBQUMsQ0FBQztBQUMxRCxJQUFJLGFBQWEsR0FBRyxVQUFDLEdBQVc7SUFBRSxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLDZCQUFlOztBQUFNLENBQUMsQ0FBQztBQUN6RCxJQUFJLGdCQUFnQixHQUFHLFVBQUMsR0FBVztJQUFFLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYsNkJBQWU7O0FBQU0sQ0FBQyxDQUFDO0FBQzVELElBQUksY0FBYyxHQUFHLFVBQUMsR0FBVztJQUFFLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYsNkJBQWU7O0FBQU0sQ0FBQyxDQUFDO0FBRWpFLElBQUcsb0VBQWEsSUFBSSw0RUFBcUIsRUFDekM7SUFDSSxnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUU1QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0lBRUYsY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBRUYsYUFBYSxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRXpDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFNUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztDQUNMO0tBQ0ksSUFBRyxvRUFBYSxJQUFJLDBFQUFtQixFQUM1QztJQUNJLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztJQUVGLGFBQWEsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUV6QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQztJQUVGLGdCQUFnQixHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTVDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7SUFFRixjQUFjLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFMUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7Q0FDTDtLQUNJLElBQUcsb0VBQWEsSUFBSSx5RUFBa0IsRUFDM0M7SUFDSSxhQUFhLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFekMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUM7SUFFRixnQkFBZ0IsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUU1QyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0lBRUYsY0FBYyxHQUFHLFVBQUMsR0FBVztRQUFFLGNBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsNkJBQWU7O1FBRTFDLGdCQUFnQixDQUFDLCtEQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0w7S0FDSSxJQUFHLG9FQUFhLElBQUksNEVBQXFCLEVBQzlDO0lBQ0ksZ0JBQWdCLEdBQUcsVUFBQyxHQUFXO1FBQUUsY0FBZTthQUFmLFVBQWUsRUFBZixxQkFBZSxFQUFmLElBQWU7WUFBZiw2QkFBZTs7UUFFNUMsZ0JBQWdCLENBQUMsK0RBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztDQUNMO0tBQ0ksSUFBRyxvRUFBYSxJQUFJLDBFQUFtQixFQUM1QztJQUNJLGNBQWMsR0FBRyxVQUFDLEdBQVc7UUFBRSxjQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLDZCQUFlOztRQUUxQyxnQkFBZ0IsQ0FBQywrREFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztDQUNMO0FBRUQsNENBQTRDO0FBQ3JDLElBQVUscUJBQXFCLENBcUVyQztBQXJFRCxXQUFpQixxQkFBcUI7SUFHbEM7OztPQUdHO0lBQ0g7UUFzREk7O1dBRUc7UUFDSDtRQUdBLENBQUM7UUExREQ7Ozs7Ozs7V0FPRztRQUNXLGlCQUFLLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsTUFBYyxFQUFFLElBQVk7WUFFaEUsbUNBQW1DO1lBQ25DLElBQUcsUUFBUSxHQUFHLDRFQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUMvRDtnQkFDSSxPQUFPO2FBQ1Y7WUFFRCxJQUFNLFFBQVEsR0FBb0MsNEVBQWUsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDO1lBRWxHLElBQUksQ0FBQyxRQUFRO2dCQUNULE9BQU87WUFFWCxJQUFJLE1BQU0sR0FDTixNQUFNLENBQUMsT0FBTyxDQUNWLFlBQVksRUFDWixVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FDSixDQUFDO1lBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFFRDs7Ozs7OztXQU9HO1FBQ1cscUJBQVMsR0FBdkIsVUFBd0IsUUFBa0IsRUFBRSxJQUFnQixFQUFFLE1BQWM7WUFFeEUsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQVNMLGtCQUFDO0lBQUQsQ0FBQztJQTdEWSxpQ0FBVyxjQTZEdkI7QUFDTCxDQUFDLEVBckVnQixxQkFBcUIsS0FBckIscUJBQXFCLFFBcUVyQztBQUVELDRDQUE0Qzs7Ozs7Ozs7Ozs7OztBQy9MNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7Ozs7QUFFa0U7QUFDTjtBQUNNO0FBQ3pCO0FBQ0k7QUFDaEQsSUFBTyxTQUFTLEdBQUcscUVBQVMsQ0FBQyxTQUFTLENBQUM7QUFFdkMsSUFBTyxNQUFNLEdBQUcsa0VBQU0sQ0FBQyxNQUFNLENBQUM7QUFFOUIsSUFBTyxTQUFTLEdBQUcscUVBQVMsQ0FBQyxTQUFTLENBQUM7QUFFaEMsSUFBVSxxQkFBcUIsQ0E2ekNyQztBQTd6Q0QsV0FBaUIscUJBQXFCO0lBRWxDLDJDQUEyQztJQUMzQyxJQUFNLDRCQUE0QixHQUFXLHNCQUFzQixDQUFDO0lBQ3BFLElBQU0sOEJBQThCLEdBQVcsNEJBQTRCLENBQUM7SUFHNUU7O09BRUc7SUFDSDtRQUVJOztXQUVHO1FBQ0g7UUFHQSxDQUFDO1FBT0Q7O1dBRUc7UUFDSSw0QkFBWSxHQUFuQixVQUFvQixZQUFxQixFQUFFLE1BQWU7WUFFdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSxxQkFBSyxHQUFaLFVBQWEsWUFBd0I7WUFBeEIsK0NBQXdCO1lBRWpDLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFPLEdBQWQsVUFBZSxZQUF3QjtZQUF4QiwrQ0FBd0I7WUFFbkMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUVEOztXQUVHO1FBQ0kseUJBQVMsR0FBaEIsVUFBaUIsWUFBNkI7WUFBN0IsbURBQTZCO1lBRTFDLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHVCQUFPLEdBQWQ7WUFFSSxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRDs7V0FFRztRQUNJLHdCQUFRLEdBQWYsVUFBZ0IsWUFBNEI7WUFBNUIsa0RBQTRCO1lBRXhDLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFTLEdBQWhCLFVBQWlCLFlBQStCO1lBRTVDLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFNLEdBQWIsVUFBYyxZQUFvQztZQUU5QyxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBZSxHQUF0QixVQUF1QixLQUFhO1lBRWhDLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRDs7V0FFRztRQUNJLGdDQUFnQixHQUF2QixVQUF3QixDQUFxQjtZQUV6QyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNJLHVCQUFPLEdBQWQ7WUFFSSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQU8sR0FBZDtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHNCQUFNLEdBQWI7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxzQkFBTSxHQUFiO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQU8sR0FBZDtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRDs7V0FFRztRQUNJLHdCQUFRLEdBQWY7WUFFSSxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx1QkFBTyxHQUFkO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0kscUJBQUssR0FBWjtZQUVJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFTTSxzQkFBTSxHQUFiLFVBQWMsS0FBVTtZQUVwQixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx3QkFBUSxHQUFmO1lBRUksT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksd0NBQXdCLEdBQS9CLFVBQWdDLFFBQWdCO1lBRTVDLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDO1FBRUQ7O1dBRUc7UUFDVyxzQ0FBZ0MsR0FBOUM7WUFFSSxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEQsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBRXJDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxTQUFTLEVBQVUsQ0FBQztRQUNoRCxDQUFDO1FBRUQ7O1dBRUc7UUFDVyxtQ0FBNkIsR0FBM0M7WUFFSSxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM3QixXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM1QixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV6QixXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM3QixXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM5QixTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUM1QixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO1FBUUwsWUFBQztJQUFELENBQUM7SUFuT3FCLDJCQUFLLFFBbU8xQjtJQUVEOzs7Ozs7OztPQVFHO0lBQ0g7UUFFSTs7V0FFRztRQUNILG9CQUFtQixNQUFvQixFQUFFLE1BQWU7WUFFcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFbEIsSUFBRyxNQUFNLElBQUksU0FBUyxFQUN0QjtnQkFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDVyxpQkFBTSxHQUFwQixVQUFxQixNQUFtQixFQUFFLElBQVk7WUFFbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM1QixJQUFNLFNBQVMsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV6RCxJQUFHLENBQUMsU0FBUyxFQUNiO2dCQUNJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBRUQ7Z0JBQ0ksT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ1csaUJBQU0sR0FBcEIsVUFBcUIsUUFBb0I7WUFFckMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw0QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNJLHdDQUFtQixHQUExQixVQUEyQixNQUFtQjtZQUUxQyxJQUFJLFVBQVUsR0FBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7WUFFckIsS0FBSSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsR0FBRyxHQUFXLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDcEU7Z0JBQ0ksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7WUFFRCxHQUFHLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBRUQ7O1dBRUc7UUFDSyx3QkFBRyxHQUFYLFVBQVksQ0FBUztZQUVqQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDZixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFBQSxDQUFDO1FBRUY7Ozs7OztXQU1HO1FBQ0ksK0JBQVUsR0FBakIsVUFBa0IsTUFBbUIsRUFBRSxJQUFZO1lBRS9DLElBQUksTUFBTSxHQUFhLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUNuRCxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtnQkFDSSxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUM7Z0JBQzFCLE1BQU0sR0FBRywyQkFBMkIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVwQyxrRUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO2lCQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQzFCO2dCQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsK0JBQStCO2dCQUM5RixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGtDQUFhLEdBQXBCO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7V0FFRztRQUNJLG1DQUFjLEdBQXJCO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBQ08sK0JBQVUsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhLEVBQUUsU0FBbUI7WUFFbkYsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBSyxPQUFPLElBQUksQ0FBQztZQUVoQyxJQUFJLENBQUMsR0FBVSxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBUyxDQUFDO1lBRWQsT0FBTyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN0QjtnQkFDSSxJQUFJLENBQUMsR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFFBQU8sQ0FBQyxFQUNSO29CQUNBLEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssR0FBRzt3QkFDSjs0QkFDSSxJQUFJLFdBQVcsR0FBYSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7NEJBQ3RELENBQUMsR0FBRyxxRUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7NEJBQ3pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzQjtvQkFDTCxLQUFLLElBQUk7d0JBQ0wsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtvQkFDM0YsS0FBSyxHQUFHO3dCQUNKLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDdEQsT0FBTyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxHQUFHO3dCQUNKLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDdkQsT0FBTyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxHQUFHLEVBQUUsWUFBWTt3QkFDbEIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFDakI7NEJBQ0ksQ0FBQyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBSSxhQUFhOzRCQUN6QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDeEI7NkJBRUQ7NEJBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7eUJBQzlCO3dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNiLEtBQUssR0FBRyxFQUFFLFlBQVk7d0JBQ2xCLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQ2pCOzRCQUNJLENBQUMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDOzRCQUMxQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDeEI7NkJBRUQ7NEJBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7eUJBQzlCO3dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNiLEtBQUssR0FBRyxFQUFFLGFBQWE7d0JBQ25CLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQ2pCOzRCQUNJLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDOzRCQUMzQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDeEI7NkJBRUQ7NEJBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQzt5QkFDeEM7d0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ2IsS0FBSyxHQUFHLEVBQUUsa0JBQWtCO3dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO3dCQUNyQyxPQUFPLElBQUksQ0FBQztvQkFDaEIsS0FBSyxHQUFHLEVBQUUsb0NBQW9DO3dCQUMxQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsV0FBVzt3QkFDOUIsT0FBTyxJQUFJLENBQUM7b0JBQ2hCLEtBQUssSUFBSTt3QkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLEtBQUssR0FBRyxDQUFDO29CQUNULEtBQUssSUFBSSxDQUFDO29CQUNWLEtBQUssSUFBSSxDQUFDO29CQUNWLFNBQVMsT0FBTzt3QkFDWixNQUFNO2lCQUNUO2FBQ0o7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNPLGdDQUFXLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQW1CO1lBRXBGLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFN0IsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2QsSUFBSSxDQUFTLEVBQUUsRUFBVSxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFjLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxHQUFXLEtBQUssQ0FBQyxDQUFDLHVCQUF1QjtZQUVyRCxPQUFPLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3RCO2dCQUNJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWQsUUFBTyxDQUFDLEVBQ1I7b0JBQ0EsS0FBSyxJQUFJLEVBQUUsK0JBQStCO3dCQUN0Qzs0QkFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLFNBQVM7NEJBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYzs0QkFDbEUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUNoQjtvQkFDTCxLQUFLLElBQUksRUFBRyxXQUFXO3dCQUNuQjs0QkFDSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWE7NEJBRWxCLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQ25CO2dDQUNJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYzs2QkFDckU7NEJBQ0QsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7NEJBRXRDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFDZDtnQ0FDSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUVmLFFBQU8sRUFBRSxFQUNUO29DQUNBLEtBQUssSUFBSTt3Q0FDTCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLElBQUk7d0NBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dDQUN0QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dDQUN2QixNQUFNO29DQUNWLEtBQUssR0FBRzt3Q0FDSixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3Q0FDdkIsTUFBTTtvQ0FDVixLQUFLLEdBQUc7d0NBQ0osR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0NBQ3ZCLE1BQU07b0NBQ1YsS0FBSyxHQUFHO3dDQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsMkNBQTJDLENBQUM7d0NBQzFELE1BQU07b0NBQ1Y7d0NBQ0ksTUFBTTtpQ0FDVDs2QkFDSjtpQ0FFRDtnQ0FDSSxJQUFJLENBQUMsTUFBTSxHQUFHLDJCQUEyQixDQUFDOzZCQUM3Qzt5QkFDSjtvQkFDTDt3QkFDSTs0QkFDSSxNQUFNO3lCQUNUO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUEwQixDQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNPLGdDQUFXLEdBQXJCLFVBQXNCLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQW1CO1lBRXBGLElBQUcsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSSxHQUFHLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUVqQyxhQUFhO1lBQ2IsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFXLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxlQUFlLEdBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksRUFBRSxHQUFZLEtBQUssQ0FBQztZQUV4QixhQUFhO1lBQ2IsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNyQjtnQkFDSSxRQUFRLEVBQUUsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMvQjtvQkFDSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVkLFFBQU8sQ0FBQyxFQUNSO3dCQUNBLEtBQUssSUFBSTs0QkFDTCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7NEJBQy9ELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtnQ0FDSSxPQUFPLElBQUksQ0FBQzs2QkFDZjs0QkFFRCxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2QixFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUNWLE1BQU0sUUFBUSxDQUFDLENBQUMsYUFBYTt3QkFDakMsS0FBSyxHQUFHLEVBQUUsUUFBUTs0QkFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJO3dCQUNwQixLQUFLLEdBQUc7NEJBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQzs0QkFDckMsTUFBTTt3QkFDVixLQUFLLElBQUk7NEJBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN0Qjs0QkFDSSxNQUFNLENBQUUsV0FBVztxQkFDdEI7aUJBQ0o7Z0JBQ0QsSUFBRyxDQUFDLEVBQUUsRUFDTjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztvQkFDOUIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBRUQsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFFWCxVQUFVO2dCQUNWLFNBQVMsRUFBRSxPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ2hDO29CQUNJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWQsUUFBTyxDQUFDLEVBQ1I7d0JBQ0EsS0FBSyxHQUFHOzRCQUNKLEVBQUUsR0FBRyxJQUFJLENBQUM7NEJBQ1YsQ0FBQyxFQUFFLENBQUM7NEJBQ0osTUFBTSxTQUFTLENBQUM7d0JBQ3BCLEtBQUssR0FBRzs0QkFDSixJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDOzRCQUNyQyxNQUFNO3dCQUNWLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN6QixtQ0FBbUM7d0JBQ3ZDOzRCQUNJLE1BQU0sQ0FBRSxXQUFXO3FCQUN0QjtpQkFDSjtnQkFFRCxJQUFHLENBQUMsRUFBRSxFQUNOO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO29CQUM5QixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFFRCxTQUFTO2dCQUNULElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3ZFLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtvQkFDSSxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFFRCxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2Qix1QkFBdUI7Z0JBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVwQixTQUFTLEVBQUUsT0FBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNoQztvQkFDSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVkLFFBQU8sQ0FBQyxFQUNSO3dCQUNBLEtBQUssR0FBRzs0QkFDSixNQUFNLFNBQVMsQ0FBQzt3QkFDcEIsS0FBSyxHQUFHOzRCQUNKLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU87d0JBQ3ZCLEtBQUssSUFBSTs0QkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3RCOzRCQUNJLE1BQU0sQ0FBRSxPQUFPO3FCQUNsQjtpQkFDSjthQUNKO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBNEIsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNPLCtCQUFVLEdBQXBCLFVBQXFCLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQW1CO1lBRW5GLElBQUcsSUFBSSxDQUFDLE1BQU07Z0JBQUcsT0FBTyxJQUFJLENBQUM7WUFDN0IsSUFBSSxHQUFHLEdBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUVwQyxjQUFjO1lBQ2QsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBUyxDQUFDO1lBQ2QsSUFBSSxlQUFlLEdBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFN0MsYUFBYTtZQUNiLE9BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDckI7Z0JBQ0ksVUFBVTtnQkFDVixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUV2RSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2Q7b0JBQ0ksT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQ0QsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkIsSUFBRyxLQUFLLEVBQ1I7b0JBQ0ksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEI7Z0JBRUQsYUFBYTtnQkFDYiw2QkFBNkI7Z0JBQzdCLFFBQVEsRUFBRSxPQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQy9CO29CQUNJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWQsUUFBTyxDQUFDLEVBQ1I7d0JBQ0ksS0FBSyxHQUFHOzRCQUNKLG9CQUFvQjs0QkFDcEIsMEJBQTBCOzRCQUMxQixNQUFNLFFBQVEsQ0FBQzt3QkFDbkIsS0FBSyxHQUFHOzRCQUNKLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUs7d0JBQ3JCLEtBQUssSUFBSTs0QkFDTCxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ2xCLGlDQUFpQzt3QkFDckM7NEJBQ0ksTUFBTSxDQUFDLE9BQU87cUJBQ3JCO2lCQUNKO2FBQ0o7WUFFRCxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFLTCxpQkFBQztJQUFELENBQUM7SUF0Z0JZLGdDQUFVLGFBc2dCdEI7SUFFRDs7T0FFRztJQUNIO1FBQStCLDZCQUFLO1FBRWhDOztXQUVHO1FBQ0gsbUJBQVksQ0FBUztZQUFyQixZQUVJLGlCQUFPLFNBR1Y7WUFERyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFDcEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLDZCQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFFNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFLLEdBQVosVUFBYSxZQUF3QjtZQUF4QiwrQ0FBd0I7WUFFakMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQsVUFBZSxZQUEwQjtZQUExQixpREFBMEI7WUFFckMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFTTSwwQkFBTSxHQUFiLFVBQWMsS0FBVTtZQUVwQixJQUFJLFFBQVEsS0FBSyxPQUFNLENBQUMsS0FBSyxDQUFDLEVBQzlCO2dCQUNJLE1BQU07Z0JBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNyQjtvQkFDSSxPQUFPLEtBQUssQ0FBQztpQkFDaEI7Z0JBQ0QsUUFBUTtxQkFFUjtvQkFDSSxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUMvQjthQUNKO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUdMLGdCQUFDO0lBQUQsQ0FBQyxDQTFFOEIsS0FBSyxHQTBFbkM7SUExRVksK0JBQVMsWUEwRXJCO0lBRUQ7O09BRUc7SUFDSDtRQUFpQywrQkFBSztRQXVEbEM7O1dBRUc7UUFDSCxxQkFBbUIsQ0FBVTtZQUE3QixZQUVJLGlCQUFPLFNBR1Y7WUFERyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzs7UUFDeEIsQ0FBQztRQTVERDs7V0FFRztRQUNJLDRCQUFNLEdBQWI7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwrQkFBUyxHQUFoQixVQUFpQixZQUE2QjtZQUE3QixtREFBNkI7WUFFMUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFFRDs7V0FFRztRQUNJLCtCQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUM1QixDQUFDLENBQUMsTUFBTTtnQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDO1lBRWxCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBU00sNEJBQU0sR0FBYixVQUFjLEtBQVU7WUFFcEIsSUFBSSxTQUFTLEtBQUssT0FBTSxDQUFDLEtBQUssQ0FBQyxFQUMvQjtnQkFDSSxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksOEJBQVEsR0FBZjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFnQkwsa0JBQUM7SUFBRCxDQUFDLENBckVnQyxLQUFLLEdBcUVyQztJQXJFWSxpQ0FBVyxjQXFFdkI7SUFFRDs7T0FFRztJQUNIO1FBQWdDLDhCQUFLO1FBT2pDLG9CQUFtQixDQUFNO1lBQXpCLFlBRUksaUJBQU8sU0FXVjtZQVRHLElBQUcsUUFBUSxLQUFLLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFDekI7Z0JBQ0ksS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7YUFDMUI7WUFFRCxJQUFHLENBQUMsWUFBWSxTQUFTLEVBQ3pCO2dCQUNJLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1Qjs7UUFDTCxDQUFDO1FBRUQ7O1dBRUc7UUFDSSw2QkFBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksOEJBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBU00sMkJBQU0sR0FBYixVQUFjLEtBQVU7WUFFcEIsSUFBSSxRQUFRLEtBQUssT0FBTSxDQUFDLEtBQUssQ0FBQyxFQUM5QjtnQkFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxLQUFLLFlBQVksU0FBUyxFQUM5QjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLENBM0QrQixLQUFLLEdBMkRwQztJQTNEWSxnQ0FBVSxhQTJEdEI7SUFFRDs7T0FFRztJQUNIO1FBQStCLDZCQUFVO1FBbUJyQzs7V0FFRztRQUNILG1CQUFtQixDQUFtQixFQUFFLFFBQWlCO1lBQXpELGlCQVdDO1lBVEcsSUFBRyxRQUFRLEtBQUssT0FBTSxDQUFDLENBQUMsQ0FBQyxFQUN6QjtnQkFDSSwwQkFBTSxDQUFDLENBQUMsU0FBQzthQUNaO2lCQUVEO2dCQUNJLDBCQUFNLENBQUMsQ0FBQyxTQUFDO2FBQ1o7WUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7UUFDOUIsQ0FBQztRQS9CRDs7V0FFRztRQUNJLDRCQUFRLEdBQWY7WUFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNENBQXdCLEdBQS9CLFVBQWdDLENBQVM7WUFFckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQWtCRDs7V0FFRztRQUNJLDJCQUFPLEdBQWQ7WUFFSSxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBSUwsZ0JBQUM7SUFBRCxDQUFDLENBN0M4QixVQUFVLEdBNkN4QztJQTdDWSwrQkFBUyxZQTZDckI7SUFFRDs7T0FFRztJQUNIO1FBQW1DLGlDQUFLO1FBMEJwQzs7V0FFRztRQUNIO1lBQUEsWUFFSSxpQkFBTyxTQUdWO1lBREcsS0FBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7O1FBQ3JDLENBQUM7UUFoQ0Q7O1dBRUc7UUFDSSw4QkFBTSxHQUFiO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksaUNBQVMsR0FBaEIsVUFBaUIsWUFBb0IsRUFBRSxNQUFjO1lBRWpELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxnQ0FBUSxHQUFmO1lBRUksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQVlMLG9CQUFDO0lBQUQsQ0FBQyxDQXBDa0MsS0FBSyxHQW9DdkM7SUFwQ1ksbUNBQWEsZ0JBb0N6QjtJQUVEOztPQUVHO0lBQ0g7UUFBK0IsNkJBQUs7UUFFaEM7O1dBRUc7UUFDSDtZQUFBLFlBRUksaUJBQU8sU0FFVjtZQURHLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQVMsQ0FBQzs7UUFDekMsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLEtBQUksSUFBSSxHQUFHLEdBQThCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUNqSDtnQkFDSSxJQUFJLENBQUMsR0FBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXpCLElBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNyQjtvQkFDSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDWjthQUNKO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksMkJBQU8sR0FBZDtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLG1DQUFlLEdBQXRCLFVBQXVCLEtBQWE7WUFFaEMsSUFBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksS0FBSyxFQUM5QztnQkFDSSxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUNwRjtZQUVELElBQUksQ0FBQyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJDLElBQUcsQ0FBQyxJQUFJLElBQUksRUFDWjtnQkFDSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDMUI7WUFFRCxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRDs7V0FFRztRQUNJLG9DQUFnQixHQUF2QixVQUF3QixDQUFxQjtZQUV6QyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBRUQ7O1dBRUc7UUFDSSw2QkFBUyxHQUFoQixVQUFpQixZQUFvQixFQUFFLE1BQWM7WUFFakQsSUFBSSxZQUFZLEdBQVcsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUUxQyxLQUFJLElBQUksR0FBRyxHQUE4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFDOUc7Z0JBQ0ksSUFBSSxDQUFDLEdBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3hFO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVuRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVEOzs7V0FHRztRQUNJLHVCQUFHLEdBQVYsVUFBVyxDQUFRO1lBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVEOztXQUVHO1FBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsWUFBcUM7WUFBckMsa0RBQXFDO1lBRWxELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSwyQkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFHTCxnQkFBQztJQUFELENBQUMsQ0E1RzhCLEtBQUssR0E0R25DO0lBNUdZLCtCQUFTLFlBNEdyQjtJQUVEOztPQUVHO0lBQ0g7UUFBNkIsMkJBQUs7UUFFOUI7O1dBRUc7UUFDSDtZQUFBLFlBRUksaUJBQU8sU0FFVjtZQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQWlCLENBQUM7O1FBQzVDLENBQUM7UUFFRDs7V0FFRztRQUNJLHlCQUFPLEdBQWQ7WUFFSSxJQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU5RCxPQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNuQztnQkFDSSxJQUFJLENBQUMsR0FBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUVoQyxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDckI7b0JBQ0ksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUNYLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ1o7Z0JBRUQsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ksdUJBQUssR0FBWjtZQUVJLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRDs7V0FFRztRQUNJLGtDQUFnQixHQUF2QixVQUF3QixDQUFxQjtZQUV6QyxJQUFHLENBQUMsWUFBWSxTQUFTLEVBQ3pCO2dCQUNJLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsSUFBRyxHQUFHLElBQUksSUFBSSxFQUNkO29CQUNJLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztpQkFDMUI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7YUFDZDtZQUVELEtBQUksSUFBSSxJQUFJLEdBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUNySDtnQkFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUN4QjtvQkFDSSxJQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUM1Qjt3QkFDSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUM7cUJBQzFCO29CQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDNUI7YUFDSjtZQUVELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUMzQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSxpQ0FBZSxHQUF0QixVQUF1QixLQUFhO1lBRWhDLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRDs7V0FFRztRQUNJLDJCQUFTLEdBQWhCLFVBQWlCLFlBQW9CLEVBQUUsTUFBYztZQUVqRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFcEMsSUFBTSxHQUFHLEdBQW1DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7Z0JBQ0ksSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEdBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFFaEMsSUFBSSxDQUFDLGFBQWEsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN2RixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdEI7WUFFRCxJQUFJLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFFRDs7V0FFRztRQUNJLHdCQUFNLEdBQWIsVUFBYyxZQUFvQztZQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQztRQUVEOztXQUVHO1FBQ0kscUJBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxDQUFRO1lBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Y7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBVSxDQUFDO2dCQUVyQyxJQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7b0JBQ0ksSUFBTSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFLTCxjQUFDO0lBQUQsQ0FBQyxDQXBKNEIsS0FBSyxHQW9KakM7SUFwSlksNkJBQU8sVUFvSm5CO0FBQ0wsQ0FBQyxFQTd6Q2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2ekNyQyIsImZpbGUiOiIvbW90aW9uL2N1YmlzbW1vdGlvbnF1ZXVlZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9tb3Rpb24vY3ViaXNtbW90aW9ucXVldWVlbnRyeS50c1wiKTtcbiIsIi8qXHJcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbipcclxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuKi9cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxyXG4vLy8g6Kmz57Sw44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX1ZFUkJPU0U6IG51bWJlciA9IDA7XHJcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfREVCVUc6IG51bWJlciA9IDE7XHJcbi8vLyBJbmZv44Ot44Kw5Ye65Yqb6Kit5a6aXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XHJcbi8vLyDorablkYrjg63jgrDlh7rlipvoqK3lrppcclxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfV0FSTklORzogbnVtYmVyID0gMztcclxuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9FUlJPUjogbnVtYmVyID0gNDtcclxuLy8vIOODreOCsOWHuuWKm+OCquODleioreWumlxyXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XHJcblxyXG4vKipcclxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcclxuKlxyXG4qIOW8t+WItueahOOBq+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuWkieOBiOOCi+aZguOBq+Wumue+qeOCkuacieWKueOBq+OBmeOCi+OAglxyXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXHJcbiovXHJcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMOiBudW1iZXIgPSBDU01fTE9HX0xFVkVMX1ZFUkJPU0U7IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xyXG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIFcclxuICAgICAqIFxyXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIHjgZnjgovjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IGNzbVN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZyB8IGNzbVN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihpZCkgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG5ldyBjc21TdHJpbmcoaWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaWTjgpLmr5TovINcclxuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxyXG4gICAgICAgICAqIEByZXR1cm4g5ZCM44GY44Gq44KJ44GwdHJ1ZSznlbDjgarjgaPjgabjgYTjgozjgbBmYWxzZeOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjKSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZC5pc0VxdWFsKGMucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZOOCkuavlOi8g1xyXG4gICAgICAgICAqIEBwYXJhbSBjIOavlOi8g+OBmeOCi2lkXHJcbiAgICAgICAgICogQHJldHVybiDlkIzjgZjjgarjgonjgbB0cnVlLOeVsOOBquOBo+OBpuOBhOOCjOOBsGZhbHNl44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwoYzogc3RyaW5nIHwgY3NtU3RyaW5nIHwgQ3ViaXNtSWQpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIGNzbVN0cmluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyBpbnN0YW5jZW9mIEN1YmlzbUlkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lkLmlzRXF1YWwoYy5faWQucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaWQ6IGNzbVN0cmluZzsgLy8gSUTlkI1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbUlkSGFuZGxlID0gQ3ViaXNtSWQ7XHJcbn0iLCIvKlxyXG4qIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qXHJcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc212ZWN0b3J9IGZyb20gXCIuLi90eXBlL2NzbXZlY3RvclwiO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tIFwiLi4vdHlwZS9jc21zdHJpbmdcIjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xyXG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogSUTlkI3jga7nrqHnkIZcclxuICAgICAqIFxyXG4gICAgICogSUTlkI3jgpLnrqHnkIbjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUlkTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMuc2V0KGksIHZvaWQgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faWRzID0gIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGlkcyBJROWQjeODquOCueODiFxyXG4gICAgICAgICAqIEBwYXJhbSBjb3VudCBJROOBruWAi+aVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkcyhpZHM6IHN0cmluZ1tdIHwgY3NtU3RyaW5nW10pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJZChpZHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJROWQjeOCkueZu+mMslxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBDdWJpc21JZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogQ3ViaXNtSWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5maW5kSWQoaWQpKSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEN1YmlzbUlkKGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5wdXNoQmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJJZChpZC5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcklkKGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5a2Y5Zyo44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFeGlzdChpZDogY3NtU3RyaW5nIHwgc3RyaW5nKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZihpZCkpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmluZElkKGlkKSAhPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0V4aXN0KGlkLnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuaknOe0ouOBmeOCi+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpZCBJROWQjVxyXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBmaW5kSWQoaWQ6IHN0cmluZyk6IEN1YmlzbUlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9pZHMuZ2V0U2l6ZSgpOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWRzLmF0KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29yZS9saXZlMmRjdWJpc21jb3JlLmQudHNcIiAvPlxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21qc29ufSBmcm9tIFwiLi91dGlscy9jdWJpc21qc29uXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWlkbWFuYWdlcn0gZnJvbSBcIi4vaWQvY3ViaXNtaWRtYW5hZ2VyXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXJlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcclxuaW1wb3J0IHtDdWJpc21Mb2dJbmZvLCBDdWJpc21Mb2dXYXJuaW5nLCBDU01fQVNTRVJUfSBmcm9tIFwiLi91dGlscy9jdWJpc21kZWJ1Z1wiO1xyXG5pbXBvcnQgVmFsdWUgPSBjdWJpc21qc29uLlZhbHVlO1xyXG5pbXBvcnQgQ3ViaXNtSWRNYW5hZ2VyID0gY3ViaXNtaWRtYW5hZ2VyLkN1YmlzbUlkTWFuYWdlcjtcclxuaW1wb3J0IEN1YmlzbVJlbmRlcmVyID0gY3ViaXNtcmVuZGVyZXIuQ3ViaXNtUmVuZGVyZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RydG9kKHM6IHN0cmluZywgZW5kUHRyOiBzdHJpbmdbXSk6IG51bWJlclxyXG57XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZXN0Qzogc3RyaW5nID0gcy5zbGljZShpIC0gMSwgaSk7XHJcblxyXG4gICAgICAgIC8vIOaMh+aVsOODu+ODnuOCpOODiuOCueOBruWPr+iDveaAp+OBjOOBguOCi+OBruOBp+OCueOCreODg+ODl+OBmeOCi1xyXG4gICAgICAgIGlmKHRlc3RDPT0nZScgfHwgdGVzdEM9PSctJyB8fCB0ZXN0QyA9PSAnRScpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG7jgIDjgIDjgIAgIC8vIOaWh+Wtl+WIl+OBruevhOWbsuOCkuW6g+OBkuOBpuOBhOOBj1xyXG4gICAgICAgIGxldCB0ZXN0OiBzdHJpbmcgPSBzLnN1YnN0cmluZygwLCBpKTtcclxuICAgICAgICBsZXQgbnVtYmVyOiBudW1iZXIgPSBOdW1iZXIodGVzdCk7XHJcbiAgICAgICAgaWYoaXNOYU4obnVtYmVyKSlcclxuICAgICAgICB7XHJcbuOAgOOAgOOAgOOAgCAgICAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxu44CA44CA44CAIC8vIOacgOW+jOOBq+aVsOWApOOBqOOBl+OBpuOBp+OBjeOBn2luZGV444KS5qC857SN44GX44Gm44GK44GPXHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgfVxyXG4gICAgbGV0IGQgPSBwYXJzZUZsb2F0KHMpOyAgLy8g44OR44O844K544GX44Gf5pWw5YCkXHJcblxyXG4gICAgaWYoaXNOYU4oZCkpXHJcbiAgICB7XHJcbuOAgOOAgOOAgOOAgCAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcclxuICAgICAgICBkID0gTmFOO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZFB0clswXSA9IHMuc2xpY2UoaW5kZXgpO+OAgC8vIOW+jOe2muOBruaWh+Wtl+WIl1xyXG5cclxuICAgIHJldHVybiBkO1xyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvLyDjg5XjgqHjgqTjg6vjgrnjgrPjg7zjg5fjga7lpInmlbDjgpLliJ3mnJ/ljJZcclxuICAgIFxyXG4gICAgbGV0IHNfaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgc19pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgc19vcHRpb246IE9wdGlvbiA9IG51bGw7XHJcbiAgICBsZXQgc19jdWJpc21JZE1hbmFnZXI6IEN1YmlzbUlkTWFuYWdlciA9IG51bGw7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29uc3RhbnRcclxuICAgIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4T2Zmc2V0OiBudW1iZXIgPSAwOyAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44Kq44OV44K744OD44OI5YCkXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleFN0ZXA6IG51bWJlciA9IDI7ICAgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCueODhuODg+ODl+WApFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBjc21EZWxldGU8VD4oYWRkcmVzczogVCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighYWRkcmVzcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXZlMkQgQ3ViaXNtMyBPcmlnaW5hbCBXb3JrZmxvdyBTREvjga7jgqjjg7Pjg4jjg6rjg53jgqTjg7Pjg4hcclxuICAgICAqIOWIqeeUqOmWi+Wni+aZguOBr0N1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnjgpLlkbzjgbPjgIFDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgp44Gn57WC5LqG44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21GcmFtZXdvcmtcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So5Y+v6IO944Gr44GZ44KL44CCXHJcbiAgICAgICAgICogIEFQSeOCkuWun+ihjOOBmeOCi+WJjeOBq+W/heOBmuOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOAglxyXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgICBvcHRpb24gICAgICBPcHRpb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4gICDmupblgpnlh6bnkIbjgYzlrozkuobjgZfjgZ/jgol0cnVl44GM6L+U44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBhbHJlYWR5IGRvbmUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzX29wdGlvbiA9IG9wdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKHNfb3B0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpdmUyRCBDdWJpc20gQ29yZeODkOODvOOCuOODp+ODs+aDheWgseOCkuihqOekulxyXG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbjogbnVtYmVyID0gTGl2ZTJEQ3ViaXNtQ29yZS5WZXJzaW9uLmNzbUdldFZlcnNpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5vcjogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMEZGMDAwMCkgPj4gMTYpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2g6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDAwMEZGRkYpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XHJcblxyXG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhgTGl2ZTJEIEN1YmlzbSBDb3JlIHZlcnNpb246IHswfS57MX0uezJ9ICh7M30pYCwgXHJcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtYWpvcikuc2xpY2UoLTIpLFxyXG4gICAgICAgICAgICAgICAgICAgICgnMDAnICsgbWlub3IpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgcGF0Y2gpLnNsaWNlKC00KSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBjb21wbGV0ZS5cIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydFVwKCnjgafliJ3mnJ/ljJbjgZfjgZ9DdWJpc21GcmFtZXdvcmvjga7lkITjg5Hjg6njg6Hjg7zjgr/jgpLjgq/jg6rjgqLjgZfjgb7jgZnjgIJcclxuICAgICAgICAgKiBEaXNwb3NlKCnjgZfjgZ9DdWJpc21GcmFtZXdvcmvjgpLlho3liKnnlKjjgZnjgovpmpvjgavliKnnlKjjgZfjgabjgY/jgaDjgZXjgYTjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNsZWFuVXAoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc19pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNfb3B0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+WGheOBruODquOCveODvOOCueOCkuWIneacn+WMluOBl+OBpuODouODh+ODq+OCkuihqOekuuWPr+iDveOBqueKtuaFi+OBq+OBl+OBvuOBmeOAgjxicj5cclxuICAgICAgICAgKiAgICAg5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xyXG4gICAgICAgICAgICBpZighc19pc1N0YXJ0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL6YCj57aa5Yid5pyf5YyW44Ks44O844OJIC0tLVxyXG4gICAgICAgICAgICAvLyDpgKPntprjgZfjgabjg6rjgr3jg7zjgrnnorrkv53jgYzooYzjgo/jgozjgarjgYTjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgICAgICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXHJcbiAgICAgICAgICAgIGlmIChzX2lzSW5pdGlhbGl6ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLy0tLS0gc3RhdGljIOWIneacn+WMliAtLS0tXHJcbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCk7XHJcblxyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlciA9IG5ldyBDdWJpc21JZE1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKSBpcyBjb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXHJcbiAgICAgICAgICogICAgICDjgZ/jgaDjgZfjgIHlpJbpg6jjgafnorrkv53jgZXjgozjgZ/jg6rjgr3jg7zjgrnjgavjgaTjgYTjgabjga/op6PmlL7jgZfjgb7jgZvjgpPjgIJcclxuICAgICAgICAgKiAgICAgIOWklumDqOOBp+mBqeWIh+OBq+egtOajhOOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcG9zZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcclxuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+acquWIneacn+WMluino+aUvuOCrOODvOODiSAtLS1cclxuICAgICAgICAgICAgLy8gZGlzcG9zZSgp44GZ44KL44Gr44Gv5YWI44GraW5pdGlhbGl6ZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXHJcbiAgICAgICAgICAgIGlmKCFzX2lzSW5pdGlhbGl6ZWQpICAgIC8vIGZhbHNlLi4u44Oq44K944O844K55pyq56K65L+d44Gu5aC05ZCIXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIHNraXBwZWQsIG5vdCBpbml0aWFsaXplZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk7XHJcblxyXG4gICAgICAgICAgICBzX2N1YmlzbUlkTWFuYWdlci5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIOODrOODs+ODgOODqeOBrumdmeeahOODquOCveODvOOCue+8iOOCt+OCp+ODvOODgOODl+ODreOCsOODqeODoOS7lu+8ieOCkuino+aUvuOBmeOCi1xyXG4gICAgICAgICAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpIGlzIGNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIEFQSeOCkuS9v+eUqOOBmeOCi+a6luWCmeOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZnjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga7jg6rjgr3jg7zjgrnliJ3mnJ/ljJbjgYzjgZnjgafjgavooYzjgo/jgozjgabjgYTjgovjgYvjganjgYbjgYtcclxuICAgICAgICAgKiBAcmV0dXJuIOODquOCveODvOOCueeiuuS/neOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNfaXNJbml0aWFsaXplZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvcmUgQVBJ44Gr44OQ44Kk44Oz44OJ44GX44Gf44Ot44Kw6Zai5pWw44KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHByYXJhbSBtZXNzYWdlIOODreOCsOODoeODg+OCu+ODvOOCuFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29yZUxvZ0Z1bmN0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cclxuICAgICAgICAgICAgaWYoIUxpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7jg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjga7lgKTjgpLov5TjgZnjgIJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4gIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9nZ2luZ0xldmVsKCk6IExvZ0xldmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc19vcHRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfb3B0aW9uLmxvZ2dpbmdMZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTG9nTGV2ZWwuTG9nTGV2ZWxfT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSUTjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIEN1YmlzbU1hbmFnZXLjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldElkTWFuYWdlcigpOiBDdWJpc21JZE1hbmFnZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzX2N1YmlzbUlkTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmdmeeahOOCr+ODqeOCueOBqOOBl+OBpuS9v+eUqOOBmeOCi1xyXG4gICAgICAgICAqIOOCpOODs+OCueOCv+ODs+OCueWMluOBleOBm+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uXHJcbntcclxuICAgIGxvZ0Z1bmN0aW9uOiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uOyAgIC8vIOODreOCsOWHuuWKm+OBrumWouaVsOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgbG9nZ2luZ0xldmVsOiBMb2dMZXZlbDsgIC8vIOODreOCsOWHuuWKm+ODrOODmeODq+OBruioreWumlxyXG59XHJcblxyXG4vKipcclxuICog44Ot44Kw5Ye65Yqb44Gu44Os44OZ44OrXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbFxyXG57XHJcbiAgICBMb2dMZXZlbF9WZXJib3NlID0gMCwgICAvLyDoqbPntLDjg63jgrBcclxuICAgIExvZ0xldmVsX0RlYnVnLCAgICAgICAgIC8vIOODh+ODkOODg+OCsOODreOCsFxyXG4gICAgTG9nTGV2ZWxfSW5mbywgICAgICAgICAgLy8gSW5mb+ODreOCsFxyXG4gICAgTG9nTGV2ZWxfV2FybmluZywgICAgICAgLy8g6K2m5ZGK44Ot44KwXHJcbiAgICBMb2dMZXZlbF9FcnJvciwgICAgICAgICAvLyDjgqjjg6njg7zjg63jgrBcclxuICAgIExvZ0xldmVsX09mZiAgICAgICAgICAgIC8vIOODreOCsOWHuuWKm+eEoeWKuVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtdmVjdG9yMn0gZnJvbSBcIi4vY3ViaXNtdmVjdG9yMlwiO1xyXG5pbXBvcnQgQ3ViaXNtVmVjdG9yMiA9IGN1YmlzbXZlY3RvcjIuQ3ViaXNtVmVjdG9yMjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog5pWw5YCk6KiI566X44Gq44Gp44Gr5L2/55So44GZ44KL44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRoXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog56ys5LiA5byV5pWw44Gu5YCk44KS5pyA5bCP5YCk44Go5pyA5aSn5YCk44Gu56+E5Zuy44Gr5Y+O44KB44Gf5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOWPjuOCgeOCieOCjOOCi+WApFxyXG4gICAgICAgICAqIEBwYXJhbSBtaW4gICDnr4Tlm7Ljga7mnIDlsI/lgKRcclxuICAgICAgICAgKiBAcGFyYW0gbWF4ICAg56+E5Zuy44Gu5pyA5aSn5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmnIDlsI/lgKTjgajmnIDlpKflgKTjga7nr4Tlm7Ljgavlj47jgoHjgZ/lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFuZ2UodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCBtaW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1heDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKTvvIjjg6njgrjjgqLjg7PvvIlcclxuICAgICAgICAgKiBAcmV0dXJuIOOCteOCpOODs+mWouaVsHNpbih4KeOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBzaW4oeDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zaW4oeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjgrXjgqTjg7PplqLmlbDjga7lgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCDop5LluqblgKQo44Op44K444Ki44OzKVxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44K144Kk44Oz6Zai5pWwY29zKHgp44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGNvcyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNvcyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWApOOBrue1tuWvvuWApOOCkuaxguOCgeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IOe1tuWvvuWApOOCkuaxguOCgeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5YCk44Gu57W25a++5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGFicyh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW5s+aWueaguSjjg6vjg7zjg4gp44KS5rGC44KB44KLXHJcbiAgICAgICAgICogQHBhcmFtIHggLT4g5bmz5pa55qC544KS5rGC44KB44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiDlgKTjga7lubPmlrnmoLlcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgc3FydCh4OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqTjg7Pjg7vjgqLjgqbjg4jmmYLjga7jgqTjg7zjgrjjg7PjgrDjgavliKnnlKjjgafjgY3jgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44Kk44O844K444Oz44Kw44KS6KGM44GG5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjgqTjg7zjgrjjg7PjgrDlh6bnkIbjgZXjgozjgZ/jgrXjgqTjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZ2V0RWFzaW5nU2luZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiAxLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgLSAwLjUgKiB0aGlzLmNvcyh2YWx1ZSAqIE1hdGguUEkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5aSn44GN44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQg5bem6L6644Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHJpZ2h0IOWPs+i+uuOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm4g5aSn44GN44GE5pa544Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIG1heChsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAobGVmdCA+IHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgPyBsZWZ0XHJcbiAgICAgICAgICAgICAgICA6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCP44GV44GE5pa544Gu5YCk44KS6L+U44GZXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGxlZnQgIOW3pui+uuOBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSByaWdodCDlj7Povrrjga7lgKTjgIBcclxuICAgICAgICAgKiBAcmV0dXJuIOWwj+OBleOBhOaWueOBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBtaW4obGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGxlZnQgPiByaWdodClcclxuICAgICAgICAgICAgICAgID8gcmlnaHRcclxuICAgICAgICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOinkuW6puWApOOCkuODqeOCuOOCouODs+WApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBkZWdyZWVzICAg6KeS5bqm5YCkXHJcbiAgICAgICAgICogQHJldHVybiDop5LluqblgKTjgYvjgonlpInmj5vjgZfjgZ/jg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFuKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkZWdyZWVzIC8gMTgwLjApICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODqeOCuOOCouODs+WApOOCkuinkuW6puWApOOBq+WkieaPm+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByYWRpYW4gICAg44Op44K444Ki44Oz5YCkXHJcbiAgICAgICAgICogQHJldHVybiDjg6njgrjjgqLjg7PlgKTjgYvjgonlpInmj5vjgZfjgZ/op5LluqblgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgcmFkaWFuVG9EZWdyZWVzKHJhZGlhbjogbnVtYmVyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJhZGlhbiAqIDE4MC4wKSAvIE1hdGguUEk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonjg6njgrjjgqLjg7PlgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g44Op44K444Ki44Oz5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvUmFkaWFuKGZyb206IEN1YmlzbVZlY3RvcjIsIHRvOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBxMTogbnVtYmVyID0gTWF0aC5hdGFuMih0by55LCB0by54KTtcclxuICAgICAgICAgICAgY29uc3QgcTI6IG51bWJlciA9IE1hdGguYXRhbjIoZnJvbS55LCBmcm9tLngpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJldDogbnVtYmVyID0gcTEgLSBxMjtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKHJldCA8IC1NYXRoLlBJKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gTWF0aC5QSSAqIDIuMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2hpbGUocmV0ID4gTWF0aC5QSSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0IC09IE1hdGguUEkgKiAyLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDvvJLjgaTjga7jg5njgq/jg4jjg6vjgYvjgonop5LluqblgKTjgpLmsYLjgoHjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gZnJvbSAg5aeL54K544OZ44Kv44OI44OrXHJcbiAgICAgICAgICogQHBhcmFtIHRvICAgIOe1gueCueODmeOCr+ODiOODq1xyXG4gICAgICAgICAqIEByZXR1cm4g6KeS5bqm5YCk44GL44KJ5rGC44KB44Gf5pa55ZCR44OZ44Kv44OI44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGRpcmVjdGlvblRvRGVncmVlcyhmcm9tOiBDdWJpc21WZWN0b3IyLCB0bzogQ3ViaXNtVmVjdG9yMik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaWFuOiBudW1iZXIgPSB0aGlzLmRpcmVjdGlvblRvUmFkaWFuKGZyb20sIHRvKTtcclxuICAgICAgICAgICAgbGV0IGRlZ3JlZTogbnVtYmVyID0gdGhpcy5yYWRpYW5Ub0RlZ3JlZXMocmFkaWFuKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodG8ueCAtIGZyb20ueCkgPiAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlZ3JlZSA9IC1kZWdyZWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6njgrjjgqLjg7PlgKTjgpLmlrnlkJHjg5njgq/jg4jjg6vjgavlpInmj5vjgZnjgovjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdG90YWxBbmdsZSAgICDjg6njgrjjgqLjg7PlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODqeOCuOOCouODs+WApOOBi+OCieWkieaPm+OBl+OBn+aWueWQkeODmeOCr+ODiOODq1xyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgc3RhdGljIHJhZGlhblRvRGlyZWN0aW9uKHRvdGFsQW5nbGU6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBDdWJpc21WZWN0b3IyID0gbmV3IEN1YmlzbVZlY3RvcjIoKTtcclxuXHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy5zaW4odG90YWxBbmdsZSk7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy5jb3ModG90YWxBbmdsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvKipcclxuICAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcclxuICAgICAgICAge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIDR4NOOBruihjOWIl1xyXG4gICAgICogXHJcbiAgICAgKiA0eDTooYzliJfjga7kvr/liKnjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbU1hdHJpeDQ0XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyID0gbmV3IEZsb2F0MzJBcnJheSgxNik7ICAgIC8vIDQgKiA044Gu44K144Kk44K6XHJcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj5fjgZHlj5bjgaPjgZ/vvJLjgaTjga7ooYzliJfjga7kuZfnrpfjgpLooYzjgYbjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXHJcbiAgICAgICAgICogQHBhcmFtIGIg6KGM5YiXYlxyXG4gICAgICAgICAqIEByZXR1cm4g5LmX566X57WQ5p6c44Gu6KGM5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBGbG9hdDMyQXJyYXksIGI6IEZsb2F0MzJBcnJheSwgZHN0OiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbjsgKytqKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNbaiArIGkgKiA0XSArPSBhW2sgKyBpICogNF0gKiBiW2ogKyBrICogNF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxNjsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJbjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbG9hZElkZW50aXR5KCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooYzliJfjgpLoqK3lrppcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0TWF0cml4KHRyOiBGbG9hdDMyQXJyYXkpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTY7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KGM5YiX44KS5rWu5YuV5bCP5pWw54K55pWw44Gu6YWN5YiX44Gn5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiAxNuWAi+OBrua1ruWLleWwj+aVsOeCueaVsOOBp+ihqOOBleOCjOOCizR4NOOBruihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTY2FsZVkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBY6Lu444Gu56e75YuV6YeP44KS5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFRyYW5zbGF0ZVgoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruenu+WLlemHj+OCkuWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4gWei7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVZKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafoqIjnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOePvuWcqOOBruihjOWIl+OBp+ioiOeul+OBleOCjOOBn1jou7jjga7lgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzBdICogc3JjICsgdGhpcy5fdHJbMTJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzcmMgWei7uOOBruWApFxyXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cls1XSAqIHNyYyArIHRoaXMuX3RyWzEzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFjou7jjga7lgKTjgpLnj77lnKjjga7ooYzliJfjgafpgIboqIjnrpdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW52ZXJ0VHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZ6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6YCG6KiI566XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoc3JjIC0gdGhpcy5fdHJbMTNdKSAvIHRoaXMuX3RyWzVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm55u45a++55qE44Gr56e75YuV44GZ44KL44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlUmVsYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDEuMCwgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgeSwgICAgICAwLjAsICAgIDEuMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS56e75YuVXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHggWOi7uOOBruenu+WLlemHj1xyXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVgoeDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrlnou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVkoeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMTNdID0geTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzY2FsZVJlbGF0aXZlKHg6IG51bWJlciwgeTpudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIHksICAgICAgMC4wLCAgICAwLjAsIFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLCAgICAxLjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIEN1YmlzbU1hdHJpeDQ0Lm11bHRpcGx5KHRyMSwgdGhpcy5fdHIsIHRoaXMuX3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruaLoeWkp+eOh+OCkuaMh+WumuOBl+OBn+WAjeeOh+OBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcclxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu5ouh5aSn546HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xyXG4gICAgICAgICAgICB0aGlzLl90cls1XSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjgavooYzliJfjgpLkuZfnrpdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSBtIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkobS5nZXRBcnJheSgpLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNsb25lKCk6IEN1YmlzbU1hdHJpeDQ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0ID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVNYXRyaXguX3RyW2ldID0gdGhpcy5fdHJbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9uZU1hdHJpeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfdHI6IEZsb2F0MzJBcnJheTsgICAgLy8gNHg06KGM5YiX44OH44O844K/XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogMuasoeWFg+ODmeOCr+ODiOODq+Wei1xyXG4gICAgICogXHJcbiAgICAgKiAy5qyh5YWD44OZ44Kv44OI44Or5Z6L44Gu5qmf6IO944KS5o+Q5L6b44GZ44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21WZWN0b3IyXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHg/OiBudW1iZXIsIHB1YmxpYyB5PzogbnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gKHggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyAwLjBcclxuICAgICAgICAgICAgICAgIDogeDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMueSA9ICh5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gMC4wXHJcbiAgICAgICAgICAgICAgICA6IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODmeOCr+ODiOODq+OBruWKoOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSB2ZWN0b3IyIOWKoOeul+OBmeOCi+ODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqIEByZXR1cm4g5Yqg566X57WQ5p6cIOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQodmVjdG9yMjogQ3ViaXNtVmVjdG9yMik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEN1YmlzbVZlY3RvcjIgPSBuZXcgQ3ViaXNtVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAgICAgICAgIHJldC54ID0gdGhpcy54ICsgdmVjdG9yMi54O1xyXG4gICAgICAgICAgICByZXQueSA9IHRoaXMueSArIHZlY3RvcjIueTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu5rib566XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHZlY3RvcjIg5rib566X44GZ44KL44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICogQHJldHVybiDmuJvnrpfntZDmnpwg44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN1YnN0cmFjdCh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLSB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC0gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDkuZfnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOS5l+eul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseSh2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggKiB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55ICogdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7kuZfnrpco44K544Kr44Op44O8KVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBzY2FsYXIg5LmX566X44GZ44KL44K544Kr44Op44O85YCkXHJcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjgIDjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeVNjYWxlcihzY2FsYXI6IG51bWJlcik6IEN1YmlzbVZlY3RvcjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG5ldyBDdWJpc21WZWN0b3IyKHNjYWxhciwgc2NhbGFyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5njgq/jg4jjg6vjga7pmaTnrpdcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdmVjdG9yMiDpmaTnrpfjgZnjgovjg5njgq/jg4jjg6vlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOmZpOeul+e1kOaenOOAgOODmeOCr+ODiOODq+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkaXZpc2lvbih2ZWN0b3IyOiBDdWJpc21WZWN0b3IyKTogQ3ViaXNtVmVjdG9yMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJldDogQ3ViaXNtVmVjdG9yMiA9IG5ldyBDdWJpc21WZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgICAgICAgICAgcmV0LnggPSB0aGlzLnggLyB2ZWN0b3IyLng7XHJcbiAgICAgICAgICAgIHJldC55ID0gdGhpcy55IC8gdmVjdG9yMi55O1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Zmk566XKOOCueOCq+ODqeODvClcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gc2NhbGFyIOmZpOeul+OBmeOCi+OCueOCq+ODqeODvOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g6Zmk566X57WQ5p6c44CA44OZ44Kv44OI44Or5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRpdmlzaW9uQnlTY2FsYXIoc2NhbGFyOiBudW1iZXIpOiBDdWJpc21WZWN0b3IyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXZpc2lvbihuZXcgQ3ViaXNtVmVjdG9yMihzY2FsYXIsIHNjYWxhcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6ZW344GV44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7plbfjgZVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TGVuZ3RoKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OZ44Kv44OI44Or44Gu6Led6Zui44Gu5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGEg54K5XHJcbiAgICAgICAgICogQHJldHVybiDjg5njgq/jg4jjg6vjga7ot53pm6JcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RGlzdGFuY2VXaXRoKGE6IEN1YmlzbVZlY3RvcjIpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoKCh0aGlzLnggLSBhLngpICogKHRoaXMueCAtIGEueCkpICsgKCh0aGlzLnkgLSBhLnkpICogKHRoaXMueSAtIGEueSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODieODg+ODiOepjeOBruioiOeul1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBhIOWApFxyXG4gICAgICAgICAqIEByZXR1cm4g57WQ5p6cXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRvdChhOiBDdWJpc21WZWN0b3IyKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMueCAqIGEueCkgKyAodGhpcy55ICogYS55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOato+imj+WMluOBrumBqeeUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3JtYWxpemUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBNYXRoLnBvdygodGhpcy54ICogdGhpcy54KSArICh0aGlzLnkgKiB0aGlzLnkpLCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnrYnjgZfjgZXjga7norroqo3vvIjnrYnjgZfjgYTjgYvvvJ/vvIlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlgKTjgYznrYnjgZfjgYTjgYvvvJ9cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcmhzIOeiuuiqjeOBmeOCi+WApFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlgKTjga/nrYnjgZfjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHJoczogQ3ViaXNtVmVjdG9yMik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy54ID09IHJocy54KSAmJiAodGhpcy55ID09IHJocy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOetieOBl+OBleOBrueiuuiqje+8iOetieOBl+OBj+OBquOBhOOBi++8n++8iVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWApOOBjOetieOBl+OBj+OBquOBhOOBi++8n1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSByaHMg56K66KqN44GZ44KL5YCkXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWApOOBr+etieOBl+OBj+OBquOBhFxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5YCk44Gv562J44GX44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTm90RXF1YWwocmhzOiBDdWJpc21WZWN0b3IyKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5pc0VxdWFsKHJocykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0aH0gZnJvbSAnLi4vbWF0aC9jdWJpc21tYXRoJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW90aW9ucXVldWVlbnRyeX0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZWVudHJ5JztcclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3Ntc3RyaW5nfSBmcm9tICcuLi90eXBlL2NzbXN0cmluZyc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSAnLi4vdHlwZS9jc212ZWN0b3InO1xyXG5pbXBvcnQgeyBDU01fQVNTRVJUIH0gZnJvbSAnLi4vdXRpbHMvY3ViaXNtZGVidWcnO1xyXG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcclxuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XHJcbmltcG9ydCBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5ID0gY3ViaXNtbW90aW9ucXVldWVlbnRyeS5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5O1xyXG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcclxuaW1wb3J0IEN1YmlzbU1hdGggPSBjdWJpc21tYXRoLkN1YmlzbU1hdGg7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODouODvOOCt+ODp+ODs+OBruaKveixoeWfuuW6leOCr+ODqeOCuVxyXG4gICAgICogXHJcbiAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7mir3osaHln7rlupXjgq/jg6njgrnjgIJNb3Rpb25RdWV1ZU1hbmFnZXLjgavjgojjgaPjgabjg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLnrqHnkIbjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFDdWJpc21Nb3Rpb25cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7Pjgrnjga7noLTmo4RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShtb3Rpb246IEFDdWJpc21Nb3Rpb24pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICBtb3Rpb24gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIG1vdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU2Vjb25kcyA9IC0xLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gLTEuMDtcclxuICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZzZXRTZWNvbmRzID0gMC4wOyAgLy8g5YaN55Sf44Gu6ZaL5aeL5pmC5Yi7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXMgPSBuZXcgY3NtVmVjdG9yPGNzbVN0cmluZz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlaWdodCA9IDAuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBruODkeODqeODoeODvOOCv1xyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDlr77osaHjga7jg6Ljg4fjg6tcclxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uUXVldWVFbnRyeSBDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXLjgafnrqHnkIbjgZXjgozjgabjgYTjgovjg6Ljg7zjgrfjg6fjg7NcclxuICAgICAgICAgKiBAcGFyYW0gdXNlclRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVBhcmFtZXRlcnMobW9kZWw6IEN1YmlzbU1vZGVsLCBtb3Rpb25RdWV1ZUVudHJ5OiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5LCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFtb3Rpb25RdWV1ZUVudHJ5LmlzQXZhaWxhYmxlKCkgfHwgbW90aW9uUXVldWVFbnRyeS5pc0ZpbmlzaGVkKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW1vdGlvblF1ZXVlRW50cnkuaXNTdGFydGVkKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNTdGFydGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRTdGFydFRpbWUodXNlclRpbWVTZWNvbmRzIC0gdGhpcy5fb2Zmc2V0U2Vjb25kcyk7IC8vIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu+OCkuiomOmMslxyXG4gICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRGYWRlSW5TdGFydFRpbWUodXNlclRpbWVTZWNvbmRzKTsgLy8g44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb246IG51bWJlciA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZaL5aeL44GX44Gm44GE44Gq44GE44GG44Gh44Gr57WC5LqG6Kit5a6a44GX44Gm44GE44KL5aC05ZCI44GM44GC44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgbW90aW9uUXVldWVFbnRyeS5zZXRFbmRUaW1lKChkdXJhdGlvbiA8PSAwKSA/IC0xIDogbW90aW9uUXVldWVFbnRyeS5nZXRTdGFydFRpbWUoKSArIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkdXJhdGlvbiA9PSAtMSDjga7loLTlkIjjga/jg6vjg7zjg5fjgZnjgotcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZhZGVXZWlnaHQ6IG51bWJlciA9IHRoaXMuX3dlaWdodDsgLy8g54++5Zyo44Gu5YCk44Go5o6b44GR5ZCI44KP44Gb44KL5Ymy5ZCIXHJcblxyXG4gICAgICAgICAgICAvLy0tLS0g44OV44Kn44O844OJ44Kk44Oz44O744Ki44Km44OI44Gu5Yem55CGIC0tLS1cclxuICAgICAgICAgICAgLy8g5Y2Y57SU44Gq44K144Kk44Oz6Zai5pWw44Gn44Kk44O844K444Oz44Kw44GZ44KLXHJcbiAgICAgICAgICAgIGNvbnN0IGZhZGVJbjogbnVtYmVyID0gdGhpcy5fZmFkZUluU2Vjb25kcyA9PSAwLjBcclxuICAgICAgICAgICAgICAgICAgICA/IDEuMFxyXG4gICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtTWF0aC5nZXRFYXNpbmdTaW5lKCh1c2VyVGltZVNlY29uZHMgLSBtb3Rpb25RdWV1ZUVudHJ5LmdldEZhZGVJblN0YXJ0VGltZSgpKSAvIHRoaXMuX2ZhZGVJblNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmFkZU91dDogbnVtYmVyID0gKHRoaXMuX2ZhZGVPdXRTZWNvbmRzID09IDAuMCB8fCBtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IDAuMClcclxuICAgICAgICAgICAgICAgICAgICA/IDEuMFxyXG4gICAgICAgICAgICAgICAgICAgIDogQ3ViaXNtTWF0aC5nZXRFYXNpbmdTaW5lKChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSAtIHVzZXJUaW1lU2Vjb25kcykgLyB0aGlzLl9mYWRlT3V0U2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICBmYWRlV2VpZ2h0ID0gZmFkZVdlaWdodCAqIGZhZGVJbiAqIGZhZGVPdXQ7XHJcblxyXG4gICAgICAgICAgICBtb3Rpb25RdWV1ZUVudHJ5LnNldFN0YXRlKHVzZXJUaW1lU2Vjb25kcywgZmFkZVdlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBDU01fQVNTRVJUKDAuMCA8PSBmYWRlV2VpZ2h0ICYmIGZhZGVXZWlnaHQgPD0gMS4wKTtcclxuXHJcbiAgICAgICAgICAgIC8vLS0tLSDlhajjgabjga7jg5Hjg6njg6Hjg7zjgr9JROOCkuODq+ODvOODl+OBmeOCiyAtLS0tXHJcbiAgICAgICAgICAgIHRoaXMuZG9VcGRhdGVQYXJhbWV0ZXJzKG1vZGVsLCB1c2VyVGltZVNlY29uZHMsIGZhZGVXZWlnaHQsIG1vdGlvblF1ZXVlRW50cnkpO1xyXG5cclxuICAgICAgICAgICAgLy8g5b6M5Yem55CGXHJcbiAgICAgICAgICAgIC8vIOe1guS6huaZguWIu+OCkumBjuOBjuOBn+OCiee1guS6huODleODqeOCsOOCkueri+OBpuOCiyhDdWJpc21Nb3Rpb25RdWV1ZU1hbmFnZXIpXHJcbiAgICAgICAgICAgIGlmKChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA+IDApICYmIChtb3Rpb25RdWV1ZUVudHJ5LmdldEVuZFRpbWUoKSA8IHVzZXJUaW1lU2Vjb25kcykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdGlvblF1ZXVlRW50cnkuc2V0SXNGaW5pc2hlZCh0cnVlKTsgLy8g57WC5LqGXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+OBruaZgumWk+OCkuioreWumuOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBmYWRlSW5TZWNvbmRzIOODleOCp+ODvOODieOCpOODs+OBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEZhZGVJblRpbWUoZmFkZUluU2Vjb25kczogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU2Vjb25kcyA9IGZhZGVJblNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7mmYLplpPjgpLoqK3lrprjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gZmFkZU91dFNlY29uZHMg44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RmFkZU91dFRpbWUoZmFkZU91dFNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRTZWNvbmRzID0gZmFkZU91dFNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjgavjgYvjgYvjgovmmYLplpPjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEZhZGVPdXRUaW1lKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZhZGVPdXRTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaT44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7PjgavjgYvjgYvjgovmmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRGYWRlSW5UaW1lKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZhZGVJblNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PpgannlKjjga7ph43jgb/jga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gd2VpZ2h0IOmHjeOBv++8iDAuMCAtIDEuMO+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRXZWlnaHQod2VpZ2h0OiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PpgannlKjjga7ph43jgb/jga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOmHjeOBv++8iDAuMCAtIDEuMO+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRXZWlnaHQoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu6ZW344GV44Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7plbfjgZVb56eSXVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBub3RlIOODq+ODvOODl+OBruaZguOBr+OAjC0x44CN44CCXHJcbiAgICAgICAgICogICAgICAg44Or44O844OX44Gn44Gq44GE5aC05ZCI44Gv44CB44Kq44O844OQ44O844Op44Kk44OJ44GZ44KL44CCXHJcbiAgICAgICAgICogICAgICAg5q2j44Gu5YCk44Gu5pmC44Gv5Y+W5b6X44GV44KM44KL5pmC6ZaT44Gn57WC5LqG44GZ44KL44CCXHJcbiAgICAgICAgICogICAgICAg44CMLTHjgI3jga7mmYLjga/lpJbpg6jjgYvjgonlgZzmraLlkb3ku6TjgYzjgarjgYTpmZDjgorntYLjgo/jgonjgarjgYTlh6bnkIbjgajjgarjgovjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RHVyYXRpb24oKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gLTEuMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODlzHlm57liIbjga7plbfjgZXjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBruODq+ODvOODl+S4gOWbnuWIhuOBrumVt+OBlVvnp5JdXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQG5vdGUg44Or44O844OX44GX44Gq44GE5aC05ZCI44Gv44CBZ2V0RHVyYXRpb24oKeOBqOWQjOOBmOWApOOCkui/lOOBmVxyXG4gICAgICAgICAqICAgICAgIOODq+ODvOODl+S4gOWbnuWIhuOBrumVt+OBleOBjOWumue+qeOBp+OBjeOBquOBhOWgtOWQiCjjg5fjg63jgrDjg6njg6DnmoTjgavli5XjgY3ntprjgZHjgovjgrXjg5bjgq/jg6njgrnjgarjgakp44Gu5aC05ZCI44Gv44CMLTHjgI3jgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TG9vcER1cmF0aW9uKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xLjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLliLvjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gb2Zmc2V0U2Vjb25kcyDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/jga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRPZmZzZXRUaW1lKG9mZnNldFNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZnNldFNlY29uZHMgPSBvZmZzZXRTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44Gu44OR44Op44Oh44O844K/5pu05pawXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICog44Kk44OZ44Oz44OI55m654Gr44Gu44OB44Kn44OD44Kv44CCXHJcbiAgICAgICAgICog5YWl5Yqb44GZ44KL5pmC6ZaT44Gv5ZG844Gw44KM44KL44Oi44O844K344On44Oz44K/44Kk44Of44Oz44Kw44KS77yQ44Go44GX44Gf56eS5pWw44Gn6KGM44GG44CCXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGJlZm9yZUNoZWNrVGltZVNlY29uZHMg5YmN5Zue44Gu44Kk44OZ44Oz44OI44OB44Kn44OD44Kv5pmC6ZaTW+enkl1cclxuICAgICAgICAgKiBAcGFyYW0gbW90aW9uVGltZVNlY29uZHMg5LuK5Zue44Gu5YaN55Sf5pmC6ZaTW+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0RmlyZWRFdmVudChiZWZvcmVDaGVja1RpbWVTZWNvbmRzOiBudW1iZXIsIG1vdGlvblRpbWVTZWNvbmRzOiBudW1iZXIpOiBjc21WZWN0b3I8Y3NtU3RyaW5nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcmVkRXZlbnRWYWx1ZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgpLmm7TmlrDjgZfjgabjgIHjg6Ljg4fjg6vjgavjg5Hjg6njg6Hjg7zjgr/lgKTjgpLlj43mmKDjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg5a++6LGh44Gu44Oi44OH44OrXHJcbiAgICAgICAgICogQHBhcmFtIHVzZXJUaW1lU2Vjb25kcyDjg4fjg6vjgr/mmYLplpPjga7nqY3nrpflgKRb56eSXVxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgICogQHBhcmFtIG1vdGlvblF1ZXVlRW50cnkgQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn566h55CG44GV44KM44Gm44GE44KL44Oi44O844K344On44OzXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOODouODh+ODq+OBuOODkeODqeODoeODvOOCv+WApOOBruWPjeaYoOOBguOCilxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Oi44OH44Or44G444Gu44OR44Op44Oh44O844K/5YCk44Gu5Y+N5pig44Gq44GX77yI44Oi44O844K344On44Oz44Gu5aSJ5YyW44Gq44GX77yJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvVXBkYXRlUGFyYW1ldGVycyhtb2RlbDogQ3ViaXNtTW9kZWwsIHVzZXJUaW1lU2Vjb25kczogbnVtYmVyLCB3ZWlnaHQ6IG51bWJlciwgbW90aW9uUXVldWVFbnRyeTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeSk6IHZvaWQ7XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgX2ZhZGVJblNlY29uZHM6IG51bWJlcjsgLy8g44OV44Kn44O844OJ44Kk44Oz44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICBwdWJsaWMgX2ZhZGVPdXRTZWNvbmRzOiBudW1iZXI7IC8vIOODleOCp+ODvOODieOCouOCpuODiOOBq+OBi+OBi+OCi+aZgumWk1vnp5JdXHJcbiAgICAgICAgcHVibGljIF93ZWlnaHQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgcHVibGljIF9vZmZzZXRTZWNvbmRzOiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+WGjeeUn+OBrumWi+Wni+aZgumWk1vnp5JdXHJcblxyXG4gICAgICAgIHB1YmxpYyBfZmlyZWRFdmVudFZhbHVlczogY3NtVmVjdG9yPGNzbVN0cmluZz47XHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGFjdWJpc21tb3Rpb259IGZyb20gJy4vYWN1YmlzbW1vdGlvbic7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlcn0gZnJvbSAnLi9jdWJpc21tb3Rpb25xdWV1ZW1hbmFnZXInO1xyXG5pbXBvcnQgQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSA9IGN1YmlzbW1vdGlvbnF1ZXVlbWFuYWdlci5DdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlO1xyXG5pbXBvcnQgQUN1YmlzbU1vdGlvbiA9IGFjdWJpc21tb3Rpb24uQUN1YmlzbU1vdGlvbjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3ViaXNtTW90aW9uUXVldWVNYW5hZ2Vy44Gn5YaN55Sf44GX44Gm44GE44KL5ZCE44Oi44O844K344On44Oz44Gu566h55CG44Kv44Op44K544CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9EZWxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fbW90aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWVTZWNvbmRzID0gLTEuMDtcclxuICAgICAgICAgICAgdGhpcy5fZmFkZUluU3RhcnRUaW1lU2Vjb25kcyA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kVGltZVNlY29uZHMgPSAtMS4wO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVRpbWVTZWNvbmRzID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVdlaWdodCA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdEV2ZW50Q2hlY2tTZWNvbmRzID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2F1dG9EZWxldGUgJiYgdGhpcy5fbW90aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBQ3ViaXNtTW90aW9uLmRlbGV0ZSh0aGlzLl9tb3Rpb24pOyAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Xjgqfjg7zjg4njgqLjgqbjg4jjga7plovlp4tcclxuICAgICAgICAgKiBAcGFyYW0gZmFkZU91dFNlY29uZHMg44OV44Kn44O844OJ44Ki44Km44OI44Gr44GL44GL44KL5pmC6ZaTW+enkl1cclxuICAgICAgICAgKiBAcGFyYW0gdXNlclRpbWVTZWNvbmRzIOODh+ODq+OCv+aZgumWk+OBruepjeeul+WApFvnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXJ0RmFkZW91dChmYWRlb3V0U2Vjb25kczogbnVtYmVyLCB1c2VyVGltZVNlY29uZHM6IG51bWJlcik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0VuZFRpbWVTZWNvbmRzOiBudW1iZXIgPSB1c2VyVGltZVNlY29uZHMgKyBmYWRlb3V0U2Vjb25kcztcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2VuZFRpbWVTZWNvbmRzIDwgMC4wIHx8IG5ld0VuZFRpbWVTZWNvbmRzIDwgdGhpcy5fZW5kVGltZVNlY29uZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZFRpbWVTZWNvbmRzID0gbmV3RW5kVGltZVNlY29uZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrue1guS6huOBrueiuuiqjVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOe1guS6huOBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0ZpbmlzaGVkKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maW5pc2hlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+OBrueiuuiqjVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7PjgYzplovlp4vjgZfjgZ9cclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOmWi+Wni+OBl+OBpuOBhOOBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4vmmYLliLvjga7lj5blvpdcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0YXJ0VGltZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWVTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg5Xjgqfjg7zjg4njgqTjg7Pjga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRGYWRlSW5TdGFydFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmFkZUluU3RhcnRUaW1lU2Vjb25kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODleOCp+ODvOODieOCpOODs+OBrue1guS6huaZguWIu+OBruWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEVuZFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5kVGltZVNlY29uZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4vmmYLliLvjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gc3RhcnRUaW1lIOODouODvOOCt+ODp+ODs+OBrumWi+Wni+aZguWIu1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRTdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWVTZWNvbmRzID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu6ZaL5aeL5pmC5Yi744Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHN0YXJ0VGltZSDjg5Xjgqfjg7zjg4njgqTjg7Pjga7plovlp4vmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRGYWRlSW5TdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9mYWRlSW5TdGFydFRpbWVTZWNvbmRzID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi744Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGVuZFRpbWUg44OV44Kn44O844OJ44Kk44Oz44Gu57WC5LqG5pmC5Yi7W+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0RW5kVGltZShlbmRUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRUaW1lU2Vjb25kcyA9IGVuZFRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7Pjga7ntYLkuobjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gZiB0cnVl44Gq44KJ44Oi44O844K344On44Oz44Gu57WC5LqGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldElzRmluaXNoZWQoZjogYm9vbGVhbik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSBmIHRydWXjgarjgonjg6Ljg7zjgrfjg6fjg7Pjga7plovlp4tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0SXNTdGFydGVkKGY6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydGVkID0gZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBruacieWKueaAp+OBrueiuuiqjVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDjg6Ljg7zjgrfjg6fjg7Pjga/mnInlirlcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOODouODvOOCt+ODp+ODs+OBr+eEoeWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu5pyJ5Yq55oCn44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIHYgdHJ1ZeOBquOCieODouODvOOCt+ODp+ODs+OBr+acieWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRJc0F2YWlsYWJsZSh2OiBib29sZWFuKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrueKtuaFi+OBruioreWumlxyXG4gICAgICAgICAqIEBwYXJhbSB0aW1lU2Vjb25kcyDnj77lnKjmmYLliLtb56eSXVxyXG4gICAgICAgICAqIEBwYXJhbSB3ZWlnaHQg44Oi44O844K344On44Oz5bC+6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFN0YXRlKHRpbWVTZWNvbmRzOiBudW1iZXIsIHdlaWdodDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVUaW1lU2Vjb25kcyA9IHRpbWVTZWNvbmRzO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVdlaWdodCA9IHdlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Gu54++5Zyo5pmC5Yi744Gu5Y+W5b6XXHJcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjga7nj77lnKjmmYLliLtb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0ZVRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVUaW1lU2Vjb25kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBrumHjeOBv+OBruWPluW+l1xyXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Gu6YeN44G/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0YXRlV2VpZ2h0KCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlV2VpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pyA5b6M44Gr44Kk44OZ44Oz44OI44Gu55m654Gr44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaT44KS5Y+W5b6XXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDmnIDlvozjgavjgqTjg5njg7Pjg4jjga7nmbrngavjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRMYXN0Q2hlY2tFdmVudFRpbWUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFzdEV2ZW50Q2hlY2tTZWNvbmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pyA5b6M44Gr44Kk44OZ44Oz44OI44KS44OB44Kn44OD44Kv44GX44Gf5pmC6ZaT44KS6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGNoZWNrVGltZSDmnIDlvozjgavjgqTjg5njg7Pjg4jjgpLjg4Hjgqfjg4Pjgq/jgZfjgZ/mmYLplpNb56eSXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRMYXN0Q2hlY2tFdmVudFRpbWUoY2hlY2tUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RXZlbnRDaGVja1NlY29uZHMgPSBjaGVja1RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfYXV0b0RlbGV0ZTogYm9vbGVhbjsgICAgICAgICAgICAgICAvLyDoh6rli5XliYrpmaRcclxuICAgICAgICBfbW90aW9uOiBBQ3ViaXNtTW90aW9uOyAgICAgICAgICAgICAvLyDjg6Ljg7zjgrfjg6fjg7NcclxuXHJcbiAgICAgICAgX2F2YWlsYWJsZTogYm9vbGVhbjsgICAgICAgICAgICAgICAgLy8g5pyJ5Yq55YyW44OV44Op44KwXHJcbiAgICAgICAgX2ZpbmlzaGVkOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g57WC5LqG44OV44Op44KwXHJcbiAgICAgICAgX3N0YXJ0ZWQ6IGJvb2xlYW47ICAgICAgICAgICAgICAgICAgLy8g6ZaL5aeL44OV44Op44KwXHJcbiAgICAgICAgX3N0YXJ0VGltZVNlY29uZHM6IG51bWJlcjsgICAgICAgICAgLy8g44Oi44O844K344On44Oz5YaN55Sf6ZaL5aeL5pmC5Yi7W+enkl1cclxuICAgICAgICBfZmFkZUluU3RhcnRUaW1lU2Vjb25kczogbnVtYmVyOyAgICAvLyDjg5Xjgqfjg7zjg4njgqTjg7Pplovlp4vmmYLliLvvvIjjg6vjg7zjg5fjga7mmYLjga/liJ3lm57jga7jgb/vvIlb56eSXVxyXG4gICAgICAgIF9lbmRUaW1lU2Vjb25kczogbnVtYmVyOyAgICAgICAgICAgIC8vIOe1guS6huS6iOWumuaZguWIu1vnp5JdXHJcbiAgICAgICAgX3N0YXRlVGltZVNlY29uZHM6IG51bWJlcjsgICAgICAgICAgLy8g5pmC5Yi744Gu54q25oWLW+enkl1cclxuICAgICAgICBfc3RhdGVXZWlnaHQ6IG51bWJlcjvjgIAgICAgICAgICAgICAgLy8g6YeN44G/44Gu54q25oWLXHJcbiAgICAgICAgX2xhc3RFdmVudENoZWNrU2Vjb25kczogbnVtYmVyOyAgICAgLy8g5pyA57WC44GuTW90aW9u5YG044Gu44OB44Kn44OD44Kv44GX44Gf5pmC6ZaTXHJcblxyXG4gICAgICAgIF9tb3Rpb25RdWV1ZUVudHJ5SGFuZGxlOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlOyAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnjgZTjgajjgavkuIDmhI/jga7lgKTjgpLmjIHjgaTorZjliKXnlarlj7dcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0cml4NDQnO1xyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21tb2RlbH0gZnJvbSAnLi4vbW9kZWwvY3ViaXNtbW9kZWwnO1xyXG5pbXBvcnQgQ3ViaXNtTW9kZWwgPSBjdWJpc21tb2RlbC5DdWJpc21Nb2RlbDtcclxuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3ViaXNtbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODouODh+ODq+aPj+eUu+OCkuWHpueQhuOBmeOCi+ODrOODs+ODgOODqVxyXG4gICAgICogXHJcbiAgICAgKiDjgrXjg5bjgq/jg6njgrnjgavnkrDlooPkvp3lrZjjga7mj4/nlLvlkb3ku6TjgpLoqJjov7DjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1YmlzbVJlbmRlcmVyXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GX44Gm5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBDdWJpc21SZW5kZXJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLop6PmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShyZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZW5kZXJlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgpLlrp/ooYzjgZnjgotcclxuICAgICAgICAgKiDlvJXmlbDjgavmuKHjgZfjgZ/jg6Ljg4fjg6vjgYvjgonjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgavlv4XopoHjgarmg4XloLHjgpLlj5bjgorlh7rjgZnjgZPjgajjgYzjgafjgY3jgotcclxuICAgICAgICAgKiBAcGFyYW0gbW9kZWwg44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluaXRpYWxpemUobW9kZWw6IEN1YmlzbU1vZGVsKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkcmF3TW9kZWwoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRNb2RlbCgpID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZG9EcmF3TW9kZWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKiDphY3liJfjga/opIfoo73jgZXjgozjgovjga7jgafjgIHlhYPjga7phY3liJfjga/lpJbjgafnoLTmo4TjgZfjgaboia/jgYRcclxuICAgICAgICAgKiBAcGFyYW0gbWF0cml4NDQgTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRNdnBNYXRyaXgobWF0cml4NDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LnNldE1hdHJpeChtYXRyaXg0NC5nZXRBcnJheSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TXZwTWF0cml4KCk6IEN1YmlzbU1hdHJpeDQ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbXZwTWF0cml4NHg0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCi++8iDEuMOOBjOaomea6luOBrueKtuaFi++8iVxyXG4gICAgICAgICAqIEBwYXJhbSByZWQg6LWk44OB44Oj44Oz44ON44Or44Gu5YCkXHJcbiAgICAgICAgICogQHBhcmFtIGdyZWVuIOe3keODgeODo+ODs+ODjeODq+OBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSBibHVlIOmdkuODgeODo+ODs+ODjeODq+OBruWApFxyXG4gICAgICAgICAqIEBwYXJhbSBhbHBoYSDOseODgeODo+ODs+ODjeODq+OBruWApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRNb2RlbENvbG9yKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihyZWQgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZCA9IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHJlZCA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVkID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihncmVlbiA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihncmVlbiA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGJsdWUgPCAwLjApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJsdWUgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihibHVlID4gMS4wKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBibHVlID0gMS4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihhbHBoYSA8IDAuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihhbHBoYSA+IDEuMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuUiA9IHJlZDtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5HID0gZ3JlZW47XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQiA9IGJsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQSA9IGFscGhhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICog5ZCE6ImyMC4wfjEuMOOBrumWk+OBp+aMh+WumuOBmeOCiygxLjDjgYzmqJnmupbjga7nirbmhYspXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHJldHVybiBSR0JB44Gu44Kr44Op44O85oOF5aCxXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1vZGVsQ29sb3IoKTogQ3ViaXNtVGV4dHVyZUNvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9tb2RlbENvbG9yKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRJc1ByZW11bHRpcGxpZWRBbHBoYShlbmFibGU6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1ByZW11bHRpcGxpZWRBbHBoYSA9IGVuYWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOS5l+eul+a4iOOBv+OBrs6x5pyJ5Yq5XHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDkuZfnrpfmuIjjgb/jga7OseeEoeWKuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1ByZW11bHRpcGxpZWRBbHBoYSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgqvjg6rjg7PjgrDvvIjniYfpnaLmj4/nlLvvvInjga7mnInlirnjg7vnhKHlirnjgpLjgrvjg4Pjg4jjgZnjgovjgIJcclxuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0SXNDdWxsaW5nKGN1bGxpbmc6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBjdWxsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KL44CCXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOOCq+ODquODs+OCsOacieWKuVxyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kr44Oq44Oz44Kw54Sh5Yq5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzQ3VsbGluZygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNDdWxsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OG44Kv44K544OB44Oj44Gu55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICog44OR44Op44Oh44O844K/5YCk44Gu5b2x6Z+/5bqm44Gv44Os44Oz44OA44Op44Gu5a6f6KOF44Gr5L6d5a2Y44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIG4g44OR44Op44Oh44O844K/44Gu5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEFuaXNvdHJvcHkobjogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5pc29ydG9weSA9IG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g55Ww5pa55oCn44OV44Kj44Or44K/44Oq44Oz44Kw44Gu44OR44Op44Oh44O844K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEFuaXNvdHJvcHkoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pc29ydG9weTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Oi44OH44OrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldE1vZGVsKCk6IEN1YmlzbU1vZGVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNDdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvciA9IG5ldyBDdWJpc21UZXh0dXJlQ29sb3IoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWNmOS9jeihjOWIl+OBq+WIneacn+WMllxyXG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcclxuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or5o+P55S744Gu5a6f6KOFXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvRHJhd01vZGVsKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiO+8iOOCouODvOODiOODoeODg+OCt+ODpe+8ieOCkuaPj+eUu+OBmeOCi1xyXG4gICAgICAgICAqIOODneODquOCtOODs+ODoeODg+OCt+ODpeOBqOODhuOCr+OCueODgeODo+eVquWPt+OCkuOCu+ODg+ODiOOBp+a4oeOBmeOAglxyXG4gICAgICAgICAqIEBwYXJhbSB0ZXh0dXJlTm8g5o+P55S744GZ44KL44OG44Kv44K544OB44Oj55Wq5Y+3XHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4Q291bnQg5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgICogQHBhcmFtIHZlcnRleENvdW50IOODneODquOCtOODs+ODoeODg+OCt+ODpeOBrumggueCueaVsFxyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleEFycmF5IOODneODquOCtOODs+ODoeODg+OCt+ODpemggueCueOBruOCpOODs+ODh+ODg+OCr+OCuemFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnphY3liJdcclxuICAgICAgICAgKiBAcGFyYW0gdXZBcnJheSB1dumFjeWIl1xyXG4gICAgICAgICAqIEBwYXJhbSBvcGFjaXR5IOS4jemAj+aYjuW6plxyXG4gICAgICAgICAqIEBwYXJhbSBjb2xvckJsZW5kTW9kZSDjgqvjg6njg7zjg5bjg6zjg7Pjg4fjgqPjg7PjgrDjga7jgr/jgqTjg5dcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZHJhd01lc2godGV4dHVyZU5vOiBudW1iZXIsIGluZGV4Q291bnQ6IG51bWJlciwgdmVydGV4Q291bnQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhBcnJheTogVWludDE2QXJyYXksIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksIHV2QXJyYXk6IEZsb2F0MzJBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogbnVtYmVyLCBjb2xvckJsZW5kTW9kZTogQ3ViaXNtQmxlbmRNb2RlKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44Oz44OA44Op44GM5L+d5oyB44GZ44KL6Z2Z55qE44Gq44Oq44K944O844K544KS6ZaL5pS+44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlOiBGdW5jdGlvbjtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9tdnBNYXRyaXg0eDQ6IEN1YmlzbU1hdHJpeDQ0OyAgICAgICAgICAgICAgICAgIC8vIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcclxuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsQ29sb3I6IEN1YmlzbVRleHR1cmVDb2xvcjsgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or6Ieq5L2T44Gu44Kr44Op44O877yIUkdCQe+8iVxyXG4gICAgICAgIHByb3RlY3RlZCBfaXNDdWxsaW5nOiBib29sZWFuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgqvjg6rjg7PjgrDjgYzmnInlirnjgarjgol0cnVlXHJcbiAgICAgICAgcHJvdGVjdGVkIF9pc1ByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbjsgICAgICAgICAgICAgICAgIC8vIOS5l+eul+a4iOOBv86x44Gq44KJdHJ1ZVxyXG4gICAgICAgIHByb3RlY3RlZCBfYW5pc29ydG9weTogYW55OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cclxuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsOiBDdWJpc21Nb2RlbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44Oz44OA44Oq44Oz44Kw5a++6LGh44Gu44Oi44OH44OrXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gQ3ViaXNtQmxlbmRNb2RlXHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX05vcm1hbCA9IDAsICAgICAgICAgLy8g6YCa5bi4XHJcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX0FkZGl0aXZlID0gMSwgICAgICAgLy8g5Yqg566XXHJcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX011bHRpcGxpY2F0aXZlID0gMiwgLy8g5LmX566XXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OG44Kv44K544OB44Oj44Gu6Imy44KSUkdCQeOBp+aJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtVGV4dHVyZUNvbG9yXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SID0gMS4wO1xyXG4gICAgICAgICAgICB0aGlzLkcgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMuQiA9IDEuMDtcclxuICAgICAgICAgICAgdGhpcy5BID0gMS4wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUjogbnVtYmVyOyAgLy8g6LWk44OB44Oj44Oz44ON44OrXHJcbiAgICAgICAgRzogbnVtYmVyOyAgLy8g57eR44OB44Oj44Oz44ON44OrXHJcbiAgICAgICAgQjogbnVtYmVyOyAgLy8g6Z2S44OB44Oj44Oz44ON44OrXHJcbiAgICAgICAgQTogbnVtYmVyOyAgLy8gzrHjg4Hjg6Pjg7Pjg43jg6tcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ3ViaXNtTG9nRGVidWcgfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogS2V5LVZhbHVl44Gu44Oa44Ki44KS5a6a576p44GZ44KL44Kv44Op44K5XHJcbiAgICAgKiBjc21NYXDjgq/jg6njgrnjga7lhoXpg6jjg4fjg7zjgr/jgafkvb/nlKjjgZnjgovjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVBhaXI8X0tleVQsIF9WYWxUPlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgS2V544Go44GX44Gm44K744OD44OI44GZ44KL5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFZhbHVl44Go44GX44Gm44K744OD44OI44GZ44KL5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGtleT86IF9LZXlULCB2YWx1ZT86IF9WYWxUKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdCA9IChrZXkgPT0gdW5kZWZpbmVkKSBcclxuICAgICAgICAgICAgICAgID8gbnVsbCBcclxuICAgICAgICAgICAgICAgIDoga2V5O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IHZhbHVlOyAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZpcnN0OiBfS2V5VDsgICAvLyBrZXnjgajjgZfjgabnlKjjgYTjgovlpInmlbBcclxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg57jg4Pjg5flnotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICogQHBhcmFtIHNpemUg5Yid5pyf5YyW5pmC54K544Gn56K65L+d44GZ44KL44K144Kk44K6XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzaXplICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc2l6ZSA8IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kdW1teVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCreODvOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5paw44Gf44Gr6L+95Yqg44GZ44KL44Kt44O8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFwcGVuZEtleShrZXk6IF9LZXlUKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5paw44GX44GPS2V5L1ZhbHVl44Gu44Oa44Ki44KS5L2c44KLXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyAxLCBmYWxzZSk7IC8vIDHjgaTku6XkuIrlhaXjgovpmpnplpPjgpLkvZzjgotcclxuICAgICAgICAgICAgLy8g5paw44GX44GEa2V5L3ZhbHVl44Gu44Kk44Oz44OH44OD44Kv44K544GvX3NpemVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplXSA9IG5ldyBjc21QYWlyPF9LZXlULCBfVmFsVD4oa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2tleV3jga7jgqrjg7zjg5Djg7zjg63jg7zjg4koZ2V0KVxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUoa2V5OiBfS2V5VCk6IF9WYWxUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSAtMTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbZm91bmRdLnNlY29uZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplIC0gMV0uc2Vjb25kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKHNldClcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOa3u+Wtl+OBi+OCieeJueWumuOBleOCjOOCi1ZhbHVl5YCkXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOS7o+WFpeOBmeOCi1ZhbHVl5YCkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFZhbHVlKGtleTogX0tleVQsIHZhbHVlOiBfVmFsVCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZm91bmQgPj0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW2ZvdW5kXS5zZWNvbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjgafmuKHjgZfjgZ9LZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgovjgYtcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlvJXmlbDjgafmuKHjgZfjgZ9rZXnjgpLmjIHjgaTopoHntKDjgYzlrZjlnKjjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOW8leaVsOOBp+a4oeOBl+OBn2tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBl+OBquOBhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGtleTogX0tleVQpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2tleVZhbHVlc1tpXS5maXJzdCA9PSBrZXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBrZXlWYWx1ZeOBruODneOCpOODs+OCv+OCkuWFqOOBpuino+aUvuOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCteOCpOOCuuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEByZXR1cm4g44Kz44Oz44OG44OK44Gu44K144Kk44K6XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBuZXdTaXplIOaWsOOBn+OBquOCreODo+ODkeOCt+ODhuOCo+OAguW8leaVsOOBruWApOOBjOePvuWcqOOBruOCteOCpOOCuuacqua6gOOBruWgtOWQiOOBr+S9leOCguOBl+OBquOBhOOAglxyXG4gICAgICAgICAqIEBwYXJhbSBmaXRUb1NpemUgdHJ1ZeOBquOCieaMh+WumuOBl+OBn+OCteOCpOOCuuOBq+WQiOOCj+OBm+OCi+OAgmZhbHNl44Gq44KJ44K144Kk44K644KSMuWAjeeiuuS/neOBl+OBpuOBiuOBj+OAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVwYXJlQ2FwYWNpdHkobmV3U2l6ZTogbnVtYmVyLCBmaXRUb1NpemU6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaXRUb1NpemUgJiYgbmV3U2l6ZSA8IGNzbU1hcC5EZWZhdWx0U2l6ZSkgbmV3U2l6ZSA9IGNzbU1hcC5EZWZhdWx0U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMikgbmV3U2l6ZSA9IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhYjpoK3opoHntKDjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgdGhpcy5fc2l6ZSk7IC8vIOe1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ6KaB57Sg44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXJhc2UoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWJiumZpFxyXG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCBpbmRleCk7IC8vIOe1guS6hlxyXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWApOOCkjMy44OT44OD44OI56ym5Y+35LuY44GN5pW05pWw5Z6L44Gn44OA44Oz44OX44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcInswfSAsXCIsIHRoaXMuX2tleVZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dEZWJ1ZyhcIlxcblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcclxuICAgICAgICBwdWJsaWMgX2tleVZhbHVlczogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+W107Ly8ga2V5LXZhbHVl44Oa44Ki44Gu6YWN5YiXXHJcbiAgICAgICAgcHVibGljIF9kdW1teVZhbHVlOiBfVmFsVDsgIC8vIOepuuOBruWApOOCkui/lOOBmeeCuuOBruODgOODn+ODvFxyXG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjc21NYXA8VD7jga7jgqTjg4bjg6zjg7zjgr9cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGl0ZXJhdG9yPF9LZXlULCBfVmFsVD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcCA9ICh2ICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gdlxyXG4gICAgICAgICAgICAgICAgOiBuZXcgY3NtTWFwPF9LZXlULCBfVmFsVD4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/IGlkeFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGUuX21hcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0rK+a8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgrKyk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMuX21hcCwgdGhpcy5faW5kZXgpOyAvLyDlj6TjgYTlgKTjgpLkv53lrZhcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAq5ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHB0cigpOiBjc21QYWlyPF9LZXlULCBfVmFsVD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhPea8lOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2luZGV4ICE9IGl0ZS5faW5kZXgpIHx8ICh0aGlzLl9tYXAgIT0gaXRlLl9tYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luZGV4OiBudW1iZXI7ICAgICAgICAgICAgIC8vIOOCs+ODs+ODhuODiuOBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcclxuICAgIH1cclxufSIsIi8qXHJcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxyXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXHJcbiAqL1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDmloflrZfliJfjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIGNzbVN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+OCkuW+jOaWueOBq+i/veWKoOOBmeOCi1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBjIOi/veWKoOOBmeOCi+aWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4g5pu05paw44GV44KM44Gf5paH5a2X5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFwcGVuZChjOiBzdHJpbmcsIGxlbmd0aD86IG51bWJlcik6IGNzbVN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zICs9IChsZW5ndGggIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgID8gYy5zdWJzdHIoMCwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgOiBjO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfjgrXjgqTjgrrjgpLmi6HlvLXjgZfjgabmloflrZfjgpLln4vjgoHjgotcclxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOaLoeW8teOBmeOCi+aWh+Wtl+aVsFxyXG4gICAgICAgICAqIEBwYXJhbSB2ICAgICAgICAg5Z+L44KB44KL5paH5a2XXHJcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXhwYW5zaW9uKGxlbmd0aDogbnVtYmVyLCB2OiBzdHJpbmcpOiBjc21TdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldC5hcHBlbmQodik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfjga7plbfjgZXjgpLjg5DjgqTjg4jmlbDjgaflj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0Qnl0ZXMoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucykgLnJlcGxhY2UoLyUuLi9nLCBcInhcIikubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX44Gu6ZW344GV44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyD44CAPFxyXG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5bCP44GV44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNMZXNzKHM6IGNzbVN0cmluZyk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPCBzLnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmloflrZfliJfmr5TovIMgPlxyXG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTogICAg5q+U6LyD44GZ44KL5paH5a2X5YiX44KI44KK5aSn44GN44GEXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNHcmVhdChzOiBjc21TdHJpbmcpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID4gcy5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyDID09XHJcbiAgICAgICAgICogQHBhcmFtIHMg5q+U6LyD44GZ44KL5paH5a2X5YiXXHJcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgajnrYnjgZfjgYRcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OBqOeVsOOBquOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHM6IHN0cmluZyk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnMgPT0gcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBjOepuuOBi+OBqeOBhuOBi1xyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZTog56m644Gu5paH5a2X5YiXXHJcbiAgICAgICAgICogQHJldHVybiBmYWxzZTog5YCk44GM6Kit5a6a44GV44KM44Gm44GE44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGggPT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnMgPSBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgczogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOODmeOCr+OCv+ODvOWei++8iOWPr+WkiemFjeWIl+Wei++8iVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgY3NtVmVjdG9yPFQ+XHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICogQHBhcmFtIGluaWl0YWxDYXBhY2l0eSDliJ3mnJ/ljJblvozjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgILjg4fjg7zjgr/jgrXjgqTjgrrjga9fY2FwYWNpdHkgKiBzaXplb2YoVClcclxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbENhcGFjaXR5OiBudW1iZXIgPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaW5pdGlhbENhcGFjaXR5IDwgMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBpbml0aWFsQ2FwYWNpdHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHRyW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDopoHntKDjgpLjgrvjg4Pjg4jjgZnjgovjgqTjg7Pjg4fjg4Pjgq/jgrlcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg44K744OD44OI44GZ44KL6KaB57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldChpbmRleDogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBUW10gPSBuZXcgQXJyYXk8VD4oKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLl9wdHJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBwdXNoQmFja+WHpueQhuOAgeOCs+ODs+ODhuODiuOBq+aWsOOBn+OBquimgee0oOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwdXNoQmFjayh2YWx1ZTogVCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3NpemUgPj0gdGhpcy5fY2FwYWNpdHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lhajopoHntKDjgpLop6PmlL7jgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcHRyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu6KaB57Sg5pWw44KS6L+U44GZXHJcbiAgICAgICAgICogQHJldHVybiDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44Gr5a++44GX44Gm5Luj5YWl5Yem55CG44KS6KGM44GGXHJcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5Luj5YWl5Yem55CG5b6M44Gu44K144Kk44K6XHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhc3NpZ24obmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjdXJTaXplID0gdGhpcy5fc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVDYXBhY2l0eShuZXdTaXplKTsgIC8vIGNhcGFjaXR55pu05pawXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5ld1NpemU7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlc2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUID0gbnVsbCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjdXJTaXplOiBudW1iZXIgPSB0aGlzLl9zaXplO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY3VyU2l6ZSA8IG5ld1NpemUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjYWxsUGxhY2VtZW50TmV3KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gdGhpcy5fc2l6ZTsgaSA8IG5ld1NpemU7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobmV3IHZhbHVlKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIOODl+ODquODn+ODhuOCo+ODluWei+OBquOBruOBp+WApOa4oeOBl1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdTaXplIDw9IHRoaXMuX3NpemVcclxuICAgICAgICAgICAgICAgIC8vLS0tXHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViID0gdGhpcy5fc2l6ZSAtIG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKHRoaXMuX3NpemUgLSBzdWIsIHN1Yik7ICAgIC8vIOS4jeimgeOBquOBruOBp+egtOajhOOBmeOCi1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gr44Kz44Oz44OG44OK6KaB57Sg44KS5oy/5YWl44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbuOAgOaMv+WFpeOBmeOCi+OCs+ODs+ODhuODiuOBrumWi+Wni+S9jee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBlbmQg5oy/5YWl44GZ44KL44Kz44Oz44OG44OK44Gu57WC56uv5L2N572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluc2VydChwb3NpdGlvbjogaXRlcmF0b3I8VD4sIGJlZ2luOiBpdGVyYXRvcjxUPiwgZW5kOiBpdGVyYXRvcjxUPik6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xyXG4gICAgICAgICAgICBsZXQgc3JjU2k6IG51bWJlciA9IGJlZ2luLl9pbmRleDtcclxuICAgICAgICAgICAgbGV0IHNyY0VpOiBudW1iZXIgPSBlbmQuX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZENvdW50OiBudW1iZXIgPSBzcmNFaSAtIHNyY1NpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaMv+WFpeeUqOOBruaXouWtmOODh+ODvOOCv+OCkuOCt+ODleODiOOBl+OBpumamemWk+OCkuS9nOOCi1xyXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcclxuICAgICAgICAgICAgaWYoYWRkU2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGRzdFNpICsgaSwgMCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wdHJbZHN0U2ldID0gYmVnaW4uX3ZlY3Rvci5fcHRyW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fc2l6ZSArIGFkZENvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDliYrpmaTlrp/ooYxcclxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBl+OBpuS7luOBruimgee0oOOCkuOCt+ODleODiOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpdGUg5YmK6Zmk44GZ44KL6KaB57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVyYXNlKGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWJiumZpFxyXG4gICAgICAgICAgICB0aGlzLl9wdHIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZTI6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIGluZGV4KTsgICAvLyDntYLkuoZcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fY2FwYWNpdHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NhcGFjaXR5ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBiZWdpbigpOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VD4gPSAodGhpcy5fc2l6ZSA9PSAwKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZW5kKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlbmQoKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldE9mZnNldChvZmZzZXQ6IG51bWJlcik6IGNzbVZlY3RvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcclxuICAgICAgICAgICAgbmV3VmVjdG9yLl9wdHIgPSB0aGlzLmdldChvZmZzZXQpO1xyXG4gICAgICAgICAgICBuZXdWZWN0b3IuX3NpemUgPSB0aGlzLmdldChvZmZzZXQpLmxlbmd0aDtcclxuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZlY3RvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9wdHI6IFRbXTsgICAgLy8g44Kz44Oz44OG44OK44Gu5YWI6aCt44Ki44OJ44Os44K5XHJcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXHJcbiAgICAgICAgX2NhcGFjaXR5OiBudW1iZXI7IC8vIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo1xyXG5cclxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3Iodj86IGNzbVZlY3RvcjxUPiwgaW5kZXg/OiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSAodiAhPSB1bmRlZmluZWQpID8gdiA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGluZGV4ICE9IHVuZGVmaW5lZCkgPyBpbmRleCA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku6PlhaVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0KGl0ZTogaXRlcmF0b3I8VD4pOiBpdGVyYXRvcjxUPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGUuX3ZlY3RvcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0rK+a8lOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICsrdGhpcy5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliY3nva7jgY0tLea8lOeul1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC0tdGhpcy5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgrKyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGVjcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMuX3ZlY3RvciwgdGhpcy5faW5kZXgtLSk7ICAvLyDlj6TjgYTlgKTjgpLkv53lrZhcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlb2xkLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBwdHJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHRyKCk6IFRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA95ryU566X5a2Q44Gu44Kq44O844OQ44O844Ot44O844OJXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIT3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbm90RXF1YWwoaXRlOiBpdGVyYXRvcjxUPik6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgX3ZlY3RvcjogY3NtVmVjdG9yPFQ+OyAgLy8g44Kz44Oz44OG44OKXHJcbiAgICB9XHJcbn0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbWZyYW1ld29yaywgTG9nTGV2ZWx9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHtDU01fTE9HX0xFVkVMLCBDU01fTE9HX0xFVkVMX1ZFUkJPU0UsIENTTV9MT0dfTEVWRUxfREVCVUcsIENTTV9MT0dfTEVWRUxfSU5GTywgQ1NNX0xPR19MRVZFTF9XQVJOSU5HLCBDU01fTE9HX0xFVkVMX0VSUk9SfSBmcm9tIFwiLi4vY3ViaXNtZnJhbWV3b3JrY29uZmlnXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50ID0gKGxldmVsOiBMb2dMZXZlbCwgZm10OiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9PiBcclxue1xyXG4gICAgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrLkN1YmlzbURlYnVnLnByaW50KGxldmVsLCBcIltDU01dXCIgKyBmbXQsIGFyZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnRJbiA9IChsZXZlbDogTG9nTGV2ZWwsIGZtdDogc3RyaW5nLCBhcmdzOiBhbnlbXSkgPT5cclxue1xyXG4gICAgQ3ViaXNtTG9nUHJpbnQobGV2ZWwsIGZtdCArIFwiXFxuXCIsIGFyZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IENTTV9BU1NFUlQgPSAoZXhwcjogYW55KSA9PlxyXG57XHJcbiAgICBjb25zb2xlLmFzc2VydChleHByKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XHJcbmV4cG9ydCBsZXQgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGxldCBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5leHBvcnQgbGV0IEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xyXG5cclxuaWYoQ1NNX0xPR19MRVZFTCA8PSBDU01fTE9HX0xFVkVMX1ZFUkJPU0UpXHJcbntcclxuICAgIEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1ZlcmJvc2UsIFwiW1ZdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0RFQlVHKVxyXG57XHJcbiAgICBDdWJpc21Mb2dEZWJ1ZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0lORk8pXHJcbntcclxuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cclxuICAgIHtcclxuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfV0FSTklORylcclxue1xyXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XHJcbiAgICB7XHJcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0VSUk9SKVxyXG57XHJcbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxyXG4gICAge1xyXG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0gTElWRTJEIE5BTUVTUEFDRSAtLS0tLS0tLS0tLS1cclxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcclxue1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OH44OQ44OD44Kw55So44Gu44Om44O844OG44Kj44Oq44OG44Kj44Kv44Op44K544CCXHJcbiAgICAgKiDjg63jgrDjga7lh7rlipvjgIHjg5DjgqTjg4jjga7jg4Djg7Pjg5fjgarjgalcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbURlYnVnXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Ot44Kw44KS5Ye65Yqb44GZ44KL44CC56ys5LiA5byV5pWw44Gr44Ot44Kw44Os44OZ44Or44KS6Kit5a6a44GZ44KL44CCXHJcbiAgICAgICAgICogQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeaZguOBq+OCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhOOAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBsb2dMZXZlbCDjg63jgrDjg6zjg5njg6vjga7oqK3lrppcclxuICAgICAgICAgKiBAcGFyYW0gZm9ybWF0IOabuOW8j+S7mOOBjeaWh+Wtl+WIl1xyXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHJpbnQobG9nTGV2ZWw6IExvZ0xldmVsLCBmb3JtYXQ6IHN0cmluZywgYXJncz86IGFueVtdKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GEXHJcbiAgICAgICAgICAgIGlmKGxvZ0xldmVsIDwgY3ViaXNtZnJhbWV3b3JrLkN1YmlzbUZyYW1ld29yay5nZXRMb2dnaW5nTGV2ZWwoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb2dQcmludDogTGl2ZTJEQ3ViaXNtQ29yZS5jc21Mb2dGdW5jdGlvbiA9IGN1YmlzbWZyYW1ld29yay5DdWJpc21GcmFtZXdvcmsuY29yZUxvZ0Z1bmN0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9IFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgL1xceyhcXGQrKVxcfS9nLFxyXG4gICAgICAgICAgICAgICAgICAgIChtLCBrKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbG9nUHJpbnQoYnVmZmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+ODvOOCv+OBi+OCieaMh+WumuOBl+OBn+mVt+OBleOBoOOBkeODgOODs+ODl+WHuuWKm+OBmeOCi+OAglxyXG4gICAgICAgICAqIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCnmmYLjgavjgqrjg5fjgrfjg6fjg7PjgafoqK3lrprjgZXjgozjgZ/jg63jgrDlh7rlipvjg6zjg5njg6vjgpLkuIvlm57jgovloLTlkIjjga/jg63jgrDjgavlh7rjgZXjgarjgYTjgIJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXHJcbiAgICAgICAgICogQHBhcmFtIGRhdGEg44OA44Oz44OX44GZ44KL44OH44O844K/XHJcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCDjg4Djg7Pjg5fjgZnjgovplbfjgZVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGR1bXBCeXRlcyhsb2dMZXZlbDogTG9nTGV2ZWwsIGRhdGE6IFVpbnQ4QXJyYXksIGxlbmd0aDogbnVtYmVyKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDE2ID09IDAgJiYgaSA+IDApIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAlIDggPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCIgIFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiezB9IFwiLCBbKGRhdGFbaV0gJiAweEZGKV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJpbnQobG9nTGV2ZWwsIFwiXFxuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHJpdmF0ZSDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0gTElWRTJEIE5BTUVTUEFDRSAtLS0tLS0tLS0tLS0iLCIvKlxyXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcclxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbW1hcH0gZnJvbSBcIi4uL3R5cGUvY3NtbWFwXCI7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XHJcbmltcG9ydCB7Q3ViaXNtTG9nSW5mb30gZnJvbSBcIi4vY3ViaXNtZGVidWdcIjtcclxuaW1wb3J0IHtzdHJ0b2R9IGZyb20gXCIuLi9saXZlMmRjdWJpc21mcmFtZXdvcmtcIjtcclxuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XHJcbmltcG9ydCBjc21WZWN0b3JfaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XHJcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xyXG5pbXBvcnQgY3NtTWFwX2l0ZXJhdG9yID0gY3NtbWFwLml0ZXJhdG9yO1xyXG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8vIFN0YXRpY0luaXRpYWxpemVOb3RGb3JDbGllbnRDYWxsKCnjgafliJ3mnJ/ljJbjgZnjgotcclxuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0g6IHN0cmluZyA9IFwiRXJyb3I6IHR5cGUgbWlzbWF0Y2hcIjtcclxuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUzogc3RyaW5nID0gXCJFcnJvcjogaW5kZXggb3V0IG9mIGJvdW5kc1wiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jgqjjg6zjg6Hjg7Pjg4jjga7opoHntKDjga7ln7rlupXjgq/jg6njgrnjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZT86IHN0cmluZywgaW5kZW50Pzogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoc3RyaW5nKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSYXdTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0cmluZyhkZWZhdWx0VmFsdWUsIGluZGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0Zsb2F0KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuecn+WBveWApOOBp+i/lOOBmShib29sZWFuKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44K144Kk44K644KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkumFjeWIl+OBp+i/lOOBmShWYWx1ZVtdKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheShkZWZhdWx0VmFsdWU6IFZhbHVlW10gPSBudWxsKTogVmFsdWVbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShhcnJheSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZT86IGNzbVZlY3RvcjxWYWx1ZT4pOiBjc21WZWN0b3I8VmFsdWU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS44Oe44OD44OX44Gn6L+U44GZKGNzbU1hcDxjc21TdHJpbmcsIFZhbHVlPilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TWFwKGRlZmF1bHRWYWx1ZT86IGNzbU1hcDxzdHJpbmcsIFZhbHVlPik6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg57jg4Pjg5fjga7jgq3jg7zkuIDopqfjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcmV0dXJuIOODnuODg+ODl+OBruOCreODvOOBruS4gOimp1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOOCqOODqeODvOWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzTnVsbCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNCb29sKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5pWw5YCk5Z6L44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1N0cmluZygpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNBcnJheSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOODnuODg+ODl+Wei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gr44Ko44Op44O85YCk44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChlcnJvclN0cjogc3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneacn+WMlueUqOODoeOCveODg+ODiVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSnNvbkJvb2xlYW4udHJ1ZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKHRydWUpO1xyXG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIEpzb25FcnJvci5lcnJvclZhbHVlID0gbmV3IEpzb25FcnJvcihcIkVSUk9SXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XHJcblxyXG4gICAgICAgICAgICBWYWx1ZS5zX2R1bW15S2V5cyA9IG5ldyBjc21WZWN0b3I8c3RyaW5nPigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6rjg6rjg7zjgrnnlKjjg6Hjgr3jg4Pjg4lcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIFZhbHVlLm51bGxWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLnRydWVWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIEpzb25Cb29sZWFuLmZhbHNlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIFZhbHVlLm51bGxWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfc3RyaW5nQnVmZmVyOiBzdHJpbmc7IC8vIOaWh+Wtl+WIl+ODkOODg+ODleOCoVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzX2R1bW15S2V5czogY3NtVmVjdG9yPHN0cmluZz47IC8vIOODgOODn+ODvOOCreODvFxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGVycm9yVmFsdWU6IFZhbHVlOyAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmeOCqOODqeODvOOAgiBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcclxuICAgICAgICBwdWJsaWMgc3RhdGljIG51bGxWYWx1ZTogVmFsdWU7ICAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmU5VTEzjgIIgICBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzY2lp5paH5a2X44Gu44G/5a++5b+c44GX44Gf5pyA5bCP6ZmQ44Gu6Lu96YePSlNPTuODkeODvOOCteOAglxyXG4gICAgICog5LuV5qeY44GvSlNPTuOBruOCteODluOCu+ODg+ODiOOBqOOBquOCi+OAglxyXG4gICAgICog6Kit5a6a44OV44Kh44Kk44OrKG1vZGVsMy5qc29uKeOBquOBqeOBruODreODvOODieeUqFxyXG4gICAgICogXHJcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxyXG4gICAgICog44O75pel5pys6Kqe44Gq44Gp44Gu6Z2eQVNDSUnmloflrZdcclxuICAgICAqIOODu2XjgavjgojjgovmjIfmlbDooajnj75cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1YmlzbUpzb25cclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlQnl0ZXMoYnVmZmVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5DjgqTjg4jjg4fjg7zjgr/jgYvjgonnm7TmjqXjg63jg7zjg4njgZfjgabjg5Hjg7zjgrnjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOODkOODg+ODleOCoVxyXG4gICAgICAgICAqIEBwYXJhbSBzaXplIOODkOODg+ODleOCoeOCteOCpOOCulxyXG4gICAgICAgICAqIEByZXR1cm4gQ3ViaXNtSnNvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCueOAguWkseaVl+OBl+OBn+OCiU5VTExcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQganNvbiA9IG5ldyBDdWJpc21Kc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2NlZWRlZDogYm9vbGVhbiA9IGpzb24ucGFyc2VCeXRlcyhidWZmZXIsIHNpemUpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXN1Y2NlZWRlZCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEN1YmlzbUpzb24uZGVsZXRlKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOCquODluOCuOOCp+OCr+ODiOOBruino+aUvuWHpueQhlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZWxldGUoaW5zdGFuY2U6IEN1YmlzbUpzb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu44Or44O844OI6KaB57Sg44KS6L+U44GZXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOWkieaPm+OBmeOCi+ODkOOCpOODiuODquODh+ODvOOCv1xyXG4gICAgICAgICAqIEByZXR1cm4g5aSJ5o+b5b6M44Gu5paH5a2X5YiXXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHVpbnQ4QXJyYXk6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgICAgICAgICBsZXQgc3RyOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwLCBsZW46IG51bWJlciA9IHVpbnQ4QXJyYXkubGVuZ3RoOyBpIDwgbGVuOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSAoXCIlXCIgKyB0aGlzLnBhZCh1aW50OEFycmF5W2ldLnRvU3RyaW5nKDE2KSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCqOODs+OCs+ODvOODieOAgeODkeODh+OCo+ODs+OCsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgcGFkKG46IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgMlxyXG4gICAgICAgICAgICAgICAgPyBcIjBcIiArIG5cclxuICAgICAgICAgICAgICAgIDogbjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBKU09O44Gu44OR44O844K544KS5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGJ1ZmZlciAgICDjg5Hjg7zjgrnlr77osaHjga7jg4fjg7zjgr/jg5DjgqTjg4hcclxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSAgICAgIOODh+ODvOOCv+ODkOOCpOODiOOBruOCteOCpOOCulxyXG4gICAgICAgICAqIHJldHVybiB0cnVlIDog5oiQ5YqfXHJcbiAgICAgICAgICogcmV0dXJuIGZhbHNlOiDlpLHmlZdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFyc2VCeXRlcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zOiBudW1iZXJbXSA9IG5ldyBBcnJheSgxKTsgLy8g5Y+C54Wn5rih44GX44Gr44GZ44KL44Gf44KB6YWN5YiXXHJcbiAgICAgICAgICAgIGxldCBkZWNvZGVCdWZmZXI6IHN0cmluZyA9IHRoaXMuYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5wYXJzZVZhbHVlKGRlY29kZUJ1ZmZlciwgc2l6ZSwgMCwgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyYnVmOiBzdHJpbmcgPSAnXFwwJztcclxuICAgICAgICAgICAgICAgIHN0cmJ1ZiA9IFwiSnNvbiBwYXJzZSBlcnJvciA6IEBsaW5lIFwiICsgKHRoaXMuX2xpbmVDb3VudCArIDEpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBuZXcgSnNvblN0cmluZyhzdHJidWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJ7MH1cIiwgdGhpcy5fcm9vdC5nZXRSYXdTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLl9yb290ID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBuZXcgSnNvbkVycm9yKG5ldyBjc21TdHJpbmcodGhpcy5fZXJyb3IpLCBmYWxzZSk7IC8vIHJvb3Tjga/op6PmlL7jgZXjgozjgovjga7jgafjgqjjg6njg7zjgqrjg5bjgrjjgqfjgq/jg4jjgpLliKXpgJTkvZzmiJDjgZnjgotcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODkeODvOOCueaZguOBruOCqOODqeODvOWApOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRQYXJzZUVycm9yKCk6IHN0cmluZyBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODq+ODvOODiOimgee0oOOBruasoeOBruimgee0oOOBjOODleOCoeOCpOODq+OBrue1guerr+OBoOOBo+OBn+OCiXRydWXjgpLov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2hlY2tFbmRPZkZpbGUoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0QXJyYXkoKVsxXS5lcXVhbHMoXCJFT0ZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBKU09O44Ko44Os44Oh44Oz44OI44GL44KJVmFsdWUoZmxvYXQsU3RyaW5nLFZhbHVlKixBcnJheSxudWxsLHRydWUsZmFsc2Up44KS44OR44O844K544GZ44KLXHJcbiAgICAgICAgICog44Ko44Os44Oh44Oz44OI44Gu5pu45byP44Gr5b+c44GY44Gm5YaF6YOo44GnUGFyc2VTdHJpbmcoKSwgUGFyc2VPYmplY3QoKSwgUGFyc2VBcnJheSgp44KS5ZG844G2XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gICBidWZmZXIgICAgICBKU09O44Ko44Os44Oh44Oz44OI44Gu44OQ44OD44OV44KhXHJcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAgICAg44OR44O844K544GZ44KL6ZW344GVXHJcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtICAgb3V0RW5kUG9zICAg44OR44O844K557WC5LqG5pmC44Gu5L2N572uXHJcbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlVmFsdWUoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvOiBWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcclxuICAgICAgICAgICAgbGV0IGY6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBidWZmZXJbaV07XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICcwJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclN0cmluZzogc3RyaW5nW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmID0gc3RydG9kKGJ1ZmZlci5zbGljZShpKSwgYWZ0ZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBidWZmZXIuaW5kZXhPZihhZnRlclN0cmluZ1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvbkZsb2F0KGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcXCInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvblN0cmluZyh0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKSk7IC8vIFxcXCLjga7mrKHjga7mloflrZfjgYvjgolcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1snOlxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLnBhcnNlQXJyYXkoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAneyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBvdXRFbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbic6IC8vIG51bGzku6XlpJbjgavjgarjgYRcclxuICAgICAgICAgICAgICAgICAgICBpZihpICsgMyA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBuZXcgSnNvbk51bGx2YWx1ZSgpOyAgICAvLyDop6PmlL7jgafjgY3jgovjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBudWxsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IC8vIHRydWXku6XlpJbjgavjgarjgYRcclxuICAgICAgICAgICAgICAgICAgICBpZihpICsgMyA8IGxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi50cnVlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2UgdHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2YnOiAvLyBmYWxzZeS7peWkluOBq+OBquOBhFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyA0IDwgbGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IEpzb25Cb29sZWFuLmZhbHNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICBjYXNlICcsJzogLy8gQXJyYXkgc2VwYXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBjYXNlICddJzogLy8g5LiN5q2j44Gq772d44Gg44GM44K544Kt44OD44OX44GZ44KL44CC6YWN5YiX44Gu5pyA5b6M44Gr5LiN6KaB44GqICwg44GM44GC44KL44Go5oCd44KP44KM44KLXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaTsgIC8vIOWQjOOBmOaWh+Wtl+OCkuWGjeWHpueQhlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxuJzogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdcXHInOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiB2YWx1ZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOasoeOBruOAjFwi44CN44G+44Gn44Gu5paH5a2X5YiX44KS44OR44O844K544GZ44KL44CCXHJcbiAgICAgICAgICogICAgICBcclxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcclxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggIC0+ICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcclxuICAgICAgICAgKiBAcGFyYW0gICBiZWdpbiAgIC0+ICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GX44Gf5paHRuWtl+WIl+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBsZXQgaSA9IGJlZ2luO1xyXG4gICAgICAgICAgICBsZXQgYzogc3RyaW5nLCBjMjogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnVmU3RhcnQ6IG51bWJlciA9IGJlZ2luOyAvLyBzYnVm44Gr55m76Yyy44GV44KM44Gm44GE44Gq44GE5paH5a2X44Gu6ZaL5aeL5L2N572uXHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjID0gc3RyaW5nW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaChjKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7ICAvLyDigJ3jga7mrKHjga7mloflrZdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnLy8nOiAgLy8g44Ko44K544Kx44O844OX44Gu5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7IC8vIO+8kuaWh+Wtl+OCkuOCu+ODg+ODiOOBp+aJseOBhlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgLSAxID4gYnVmU3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZTdGFydCA9IGkgKyAxOyAvLyDjgqjjgrnjgrHjg7zjg5fvvIjvvJLmloflrZcp44Gu5qyh44Gu5paH5a2X44GL44KJXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYzIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFxcJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXFxcJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFwiJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXFwiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXGInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2YnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcZicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXHInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy91bmljb3JkIGVzY2FwZSBub3Qgc3VwcG9ydGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9lc2NhcGUgZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvaWxsZWdhbCBlbmRcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBKU09O44Gu44Kq44OW44K444Kn44Kv44OI44Ko44Os44Oh44Oz44OI44KS44OR44O844K544GX44GmVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TjgZlcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcclxuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOODkeODvOOCueOBmeOCi+mVt+OBlVxyXG4gICAgICAgICAqIEBwYXJhbSBiZWdpbiAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXHJcbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOOCueOBi+OCieWPluW+l+OBl+OBn1ZhbHVl44Kq44OW44K444Kn44Kv44OIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlT2JqZWN0KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9lcnJvcikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGxldCByZXQ6IEpzb25NYXAgPSBuZXcgSnNvbk1hcCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gS2V5OiBWYWx1ZVxyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XHJcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRQb3MyOiBudW1iZXJbXSA9IEFycmF5KDEpO1xyXG4gICAgICAgICAgICBsZXQgb2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXHJcbiAgICAgICAgICAgIGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBsZW5ndGgsIGkgKyAxLCBsb2NhbFJldEVuZFBvczIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7IC8vLS0gbG9vcOOBi+OCieWHuuOCi1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOiAvLyDplonjgZjjgqvjg4PjgrNcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOepulxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzonOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnOicgcG9zaXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIW9rKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xyXG4gICAgICAgICAgICAgICAgRk9SX0xPT1AyOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzonOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1AyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzogdGhpcy5fbGluZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZighb2spXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcIic6JyBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBsZW5ndGgsIGksIGxvY2FsUmV0RW5kUG9zMik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgaSA9IGxvY2FsUmV0RW5kUG9zMlswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXQucHV0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1dChrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBGT1JfTE9PUDM6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOato+W4uOe1guS6hlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OXXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCBlbmQgb2YgcGVyc2VPYmplY3RcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxyXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxyXG4gICAgICAgICAqIEBwYXJhbSBsZW5ndGggICAg44OR44O844K544GZ44KL6ZW344GVXHJcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cclxuICAgICAgICAgKiBAcGFyYW0gb3V0RW5kUG9zIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgcGFyc2VBcnJheShidWZmZXI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHJldDpKc29uQXJyYXkgPSBuZXcgSnNvbkFycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBrZXkgOiB2YWx1ZVxyXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gYmVnaW47XHJcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZHBvczI6IG51bWJlcltdID0gbmV3IEFycmF5KDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gLCDjgYzntprjgY/pmZDjgorjg6vjg7zjg5dcclxuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRwb3MyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9lcnJvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZHBvczJbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LmFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRk9SX0xPT1AzOlxyXG4gICAgICAgICAgICAgICAgLy8gYm9vbGVhbiBicmVha2ZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVhazsgLy8g5qyh44GuS0VZLCBWQWxVReOBuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDntYLkuoZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrdGhpcy5fbGluZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXNlICcgJzogY2FzZSAnXFx0JzogY2FzZSAnXFxyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8g44K544Kt44OD44OXXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXQgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsIGVuZCBvZiBwYXJzZU9iamVjdFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9lcnJvcjogc3RyaW5nOyAgICAgLy8g44OR44O844K55pmC44Gu44Ko44Op44O8XHJcbiAgICAgICAgX2xpbmVDb3VudDogbnVtYmVyOyAvLyDjgqjjg6njg7zloLHlkYrjgavnlKjjgYTjgovooYzmlbDjgqvjgqbjg7Pjg4hcclxuICAgICAgICBfcm9vdDogVmFsdWU7ICAgICAgIC8vIOODkeODvOOCueOBleOCjOOBn+ODq+ODvOODiOimgee0oFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkmZsb2F05YCk44Go44GX44Gm5omx44GGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uRmxvYXQgZXh0ZW5kcyBWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHY6IG51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNGbG9hdCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHBhcnNlRmxvYXQoc3RyYnVmKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gc3RyYnVmO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDAuMCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBudW1iZXIpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YodmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnRcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBmbG9hdFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl92YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyOyAvLyBKU09O6KaB57Sg44Gu5YCkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS55yf5YG95YCk44Go44GX44Gm5omx44GGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uQm9vbGVhbiBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9Cb29sZWFuKGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jvb2xWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX2Jvb2xWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiZmFsc2VcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDjga7lgKTjgajnrYnjgZfjgZHjgozjgbB0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYW55KTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoJ2Jvb2xlYW4nID09PSB0eXBlb2YodmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fYm9vbFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RhdGljKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHY6IGJvb2xlYW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYm9vbFZhbHVlID0gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB0cnVlVmFsdWU6IEpzb25Cb29sZWFuOyAgLy8gdHJ1ZVxyXG4gICAgICAgIHN0YXRpYyBmYWxzZVZhbHVlOiBKc29uQm9vbGVhbjsgLy8gZmFsc2VcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYm9vbFZhbHVlOiBib29sZWFuOyAvLyBKU09O6KaB57Sg44Gu5YCkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvblN0cmluZyBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IHN0cmluZyk7XHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZylcclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCdzdHJpbmcnID09PSB0eXBlb2YocykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHMucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzmloflrZfliJfjgarjgol0cnVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBjc21TdHJpbmcpOiBib29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mKHZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZS5zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEpTT07jg5Hjg7zjgrnmmYLjga7jgqjjg6njg7zntZDmnpzjgILmloflrZfliJflnovjga7jgojjgYbjgavjgbXjgovjgb7jgYZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3RhdGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Ko44Op44O85oOF5aCx44KS44K744OD44OI44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChzOiBzdHJpbmcpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nfHN0cmluZywgaXNTdGF0aWM6IGJvb2xlYW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faXNTdGF0aWMgPSBpc1N0YXRpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0Vycm9yKCk6IGJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBfaXNTdGF0aWM6IGJvb2xlYW47IC8vIOmdmeeahOOBqlZhbHVl44GL44Gp44GG44GLXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSnNvbk51bGx2YWx1ZSBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYxOVUxM5YCk44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc051bGwoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IFwiTnVsbFZhbHVlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOODkeODvOOCueOBl+OBn0pTT07jga7opoHntKDjgpLphY3liJfjgajjgZfjgabmjIHjgaRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpzb25BcnJheSBleHRlbmRzIFZhbHVlXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLnByZUluY3JlbWVudCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNBcnJheSgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX2FycmF5LmdldFNpemUoKSA8PSBpbmRleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IHRoaXMuX2FycmF5LmF0KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHYgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBbc3RyaW5nIHwgY3NtU3RyaW5nXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RyaW5nQnVmZmVyOiBzdHJpbmcgPSBpbmRlbnQgKyBcIltcXG5cIjtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLmluY3JlbWVudCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiIFwiKSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmluZ0J1ZmZlciArIGluZGVudCArIFwiXVxcblwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmFjeWIl+imgee0oOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSB2IOi/veWKoOOBmeOCi+imgee0oFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQodjogVmFsdWUpOiB2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJheS5wdXNoQmFjayh2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShjc21WZWN0b3I8VmFsdWU+KVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRWZWN0b3IoZGVmYXVsdFZhbHVlOiBjc21WZWN0b3I8VmFsdWU+ID0gbnVsbCk6IGNzbVZlY3RvcjxWYWx1ZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hcnJheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOimgee0oOOBruaVsOOCkui/lOOBmVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRTaXplKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LmdldFNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FycmF5OiBjc21WZWN0b3I8VmFsdWU+OyAvLyBKU09O6KaB57Sg44Gu5YCkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KS44Oe44OD44OX44Go44GX44Gm5oyB44GkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKc29uTWFwIGV4dGVuZHMgVmFsdWVcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IGNzbU1hcDxzdHJpbmcsIFZhbHVlPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdjogVmFsdWUgPSBpdGUucHRyKCkuc2Vjb25kO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2ICYmICF2LmlzU3RhdGljKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GMTWFw5Z6L44Gq44KJdHJ1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc01hcCgpOiBib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlTdHJpbmcoczogc3RyaW5nIHwgY3NtU3RyaW5nKTogVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXQ6IFZhbHVlID0gdGhpcy5fbWFwLmdldFZhbHVlKHMucyk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpdGVyOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTsgaXRlci5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpOyBpdGVyLnByZUluY3JlbWVudCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLmZpcnN0ID09IHMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlci5wdHIoKS5zZWNvbmQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyLnB0cigpLnNlY29uZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtpbmRleF1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeUluZGV4KGluZGV4OiBudW1iZXIpOiBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IGluZGVudCArIFwie1xcblwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcclxuICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZS5wdHIoKS5maXJzdDtcclxuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwiIFwiICsga2V5ICsgXCIgOiBcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiICAgXCIpICsgXCIgXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIn1cXG5cIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDopoHntKDjgpJNYXDlnovjgafov5TjgZlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0TWFwKGRlZmF1bHRWYWx1ZT86IGNzbU1hcDxzdHJpbmcsIFZhbHVlPik6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcOOBq+imgee0oOOCkui/veWKoOOBmeOCi1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OiBzdHJpbmcsIHY6IFZhbHVlKTogdm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFwLnNldFZhbHVlKGtleSwgdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXDjgYvjgonjgq3jg7zjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9rZXlzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlOiBjc21NYXBfaXRlcmF0b3I8c3RyaW5nLCBWYWx1ZT4gPSB0aGlzLl9tYXAuYmVnaW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGl0ZS5wdHIoKS5maXJzdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2hCYWNrKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFw44Gu6KaB57Sg5pWw44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5nZXRTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwcml2YXRlIF9tYXA6IGNzbU1hcDxzdHJpbmcsIFZhbHVlPjsgICAvLyBKU09O6KaB57Sg44Gu5YCkXHJcbiAgICAgICAgcHJpdmF0ZSBfa2V5czogY3NtVmVjdG9yPHN0cmluZz47ICAgICAgICAgICAgICAgLy8gSlNPTuimgee0oOOBruWApFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==