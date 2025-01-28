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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/icubismmodelsetting.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/icubismmodelsetting.ts":
/*!******************************************!*\
  !*** ./Framework/icubismmodelsetting.ts ***!
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
     * モデル設定情報を取り扱う関数を宣言した純粋仮想クラス。
     *
     * このクラスを継承することで、モデル設定情報を取り扱うクラスになる。
     */
    var ICubismModelSetting = /** @class */ (function () {
        function ICubismModelSetting() {
        }
        return ICubismModelSetting;
    }());
    Live2DCubismFramework.ICubismModelSetting = ICubismModelSetting;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2ljdWJpc21tb2RlbHNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFPSSxJQUFVLHFCQUFxQixDQW9MckM7QUFwTEQsV0FBaUIscUJBQXFCO0lBRWxDOzs7O09BSUc7SUFDSDtRQUFBO1FBNEtBLENBQUM7UUFBRCwwQkFBQztJQUFELENBQUM7SUE1S3FCLHlDQUFtQixzQkE0S3hDO0FBQ0wsQ0FBQyxFQXBMZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQW9MckMiLCJmaWxlIjoiL2ljdWJpc21tb2RlbHNldHRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0ZyYW1ld29yay9pY3ViaXNtbW9kZWxzZXR0aW5nLnRzXCIpO1xuIiwiLypcclxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXHJcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cclxuICovXHJcblxyXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSAnLi9pZC9jdWJpc21pZCc7XHJcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbW1hcH0gZnJvbSAnLi90eXBlL2NzbW1hcCc7XHJcbmltcG9ydCBjc21NYXAgPSBjc21tYXAuY3NtTWFwO1xyXG5pbXBvcnQgQ3ViaXNtSWRIYW5kbGUgPSBjdWJpc21pZC5DdWJpc21JZEhhbmRsZTtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICog44Oi44OH44Or6Kit5a6a5oOF5aCx44KS5Y+W44KK5omx44GG6Zai5pWw44KS5a6j6KiA44GX44Gf57SU57KL5Luu5oOz44Kv44Op44K544CCXHJcbiAgICAgKlxyXG4gICAgICog44GT44Gu44Kv44Op44K544KS57aZ5om/44GZ44KL44GT44Go44Gn44CB44Oi44OH44Or6Kit5a6a5oOF5aCx44KS5Y+W44KK5omx44GG44Kv44Op44K544Gr44Gq44KL44CCXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJQ3ViaXNtTW9kZWxTZXR0aW5nXHJcbiAgICB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9j44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiBNb2Pjg5XjgqHjgqTjg6vjga7lkI3liY1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW9kZWxGaWxlTmFtZSgpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODh+ODq+OBjOS9v+eUqOOBmeOCi+ODhuOCr+OCueODgeODo+OBruaVsOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRUZXh0dXJlQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6PjgYzphY3nva7jgZXjgozjgZ/jg4fjgqPjg6zjgq/jg4jjg6rjga7lkI3liY3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODhuOCr+OCueODgeODo+OBjOmFjee9ruOBleOCjOOBn+ODh+OCo+ODrOOCr+ODiOODquOBruWQjeWJjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRUZXh0dXJlRGlyZWN0b3J5KCk6IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44OH44Or44GM5L2/55So44GZ44KL44OG44Kv44K544OB44Oj44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g44OG44Kv44K544OB44Oj44Gu5ZCN5YmNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFRleHR1cmVGaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/lvZPjgZ/jgorliKTlrprjga7mlbDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+W9k+OBn+OCiuWIpOWumuOBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRIaXRBcmVhc0NvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T44Gf44KK5Yik5a6a44Gr6Kit5a6a44GV44KM44GfSUTjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44GuaW5kZXhcclxuICAgICAgICAgKiBAcmV0dXJuIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn0lEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEhpdEFyZWFJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOW9k+OBn+OCiuWIpOWumuOBq+ioreWumuOBleOCjOOBn+WQjeWJjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRIaXRBcmVhTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDniannkIbmvJTnrpfoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOeJqeeQhua8lOeul+ioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRQaHlzaWNzRmlsZU5hbWUoKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg5Hjg7zjg4TliIfjgormm7/jgYjoqK3lrprjg5XjgqHjgqTjg6vjga7lkI3liY3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODvOODhOWIh+OCiuabv+OBiOioreWumuODleOCoeOCpOODq+OBruWQjeWJjVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRQb3NlRmlsZU5hbWUoKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjga7mlbDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOihqOaDheioreWumuODleOCoeOCpOODq+OBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRFeHByZXNzaW9uQ291bnQoKTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooajmg4XoqK3lrprjg5XjgqHjgqTjg6vjgpLorZjliKXjgZnjgovlkI3liY3vvIjliKXlkI3vvInjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgICogQHJldHVybiDooajmg4Xjga7lkI3liY1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXhwcmVzc2lvbk5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g6KGo5oOF6Kit5a6a44OV44Kh44Kk44Or44Gu5ZCN5YmNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldEV4cHJlc3Npb25GaWxlTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjga7mlbDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNb3Rpb25Hcm91cENvdW50KCk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmN44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkdyb3VwTmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PjgrDjg6vjg7zjg5fjgavlkKvjgb7jgozjgovjg6Ljg7zjgrfjg6fjg7Pjga7mlbDjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxyXG4gICAgICAgICAqIEByZXR1cm4g44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkNvdW50KGdyb3VwTmFtZTogc3RyaW5nKTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjgrDjg6vjg7zjg5flkI3jgajjgqTjg7Pjg4fjg4Pjgq/jgrnlgKTjgYvjgonjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vlkI3jgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCAgICAg6YWN5YiX44Gu44Kk44Oz44OH44OD44Kv44K55YCkXHJcbiAgICAgICAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjg5XjgqHjgqTjg6vjga7lkI3liY1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmlsZU5hbWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+OBq+WvvuW/nOOBmeOCi+OCteOCpuODs+ODieODleOCoeOCpOODq+OBruWQjeWJjeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUg44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g44K144Km44Oz44OJ44OV44Kh44Kk44Or44Gu5ZCN5YmNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvblNvdW5kRmlsZU5hbWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODouODvOOCt+ODp+ODs+mWi+Wni+aZguOBruODleOCp+ODvOODieOCpOODs+WHpueQhuaZgumWk+OCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBncm91cE5hbWUg44Oi44O844K344On44Oz44Kw44Or44O844OX44Gu5ZCN5YmNXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g44OV44Kn44O844OJ44Kk44Oz5Yem55CG5pmC6ZaTW+enkl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TW90aW9uRmFkZUluVGltZVZhbHVlKGdyb3VwTmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6Ljg7zjgrfjg6fjg7PntYLkuobmmYLjga7jg5Xjgqfjg7zjg4njgqLjgqbjg4jlh6bnkIbmmYLplpPjgpLlj5blvpfjgZnjgotcclxuICAgICAgICAgKiBAcGFyYW0gZ3JvdXBOYW1lIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+OBruWQjeWJjVxyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODleOCp+ODvOODieOCouOCpuODiOWHpueQhuaZgumWk1vnp5JdXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXBOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODpuODvOOCtuODvOODh+ODvOOCv+OBruODleOCoeOCpOODq+WQjeOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Om44O844K244O844OH44O844K/44Gu44OV44Kh44Kk44Or5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFVzZXJEYXRhRmlsZSgpOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCpOOCouOCpuODiOaDheWgseOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBvdXRMYXlvdXRNYXAgY3NtTWFw44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XHJcbiAgICAgICAgICogQHJldHVybiB0cnVlIOODrOOCpOOCouOCpuODiOaDheWgseOBjOWtmOWcqOOBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Os44Kk44Ki44Km44OI5oOF5aCx44GM5a2Y5Zyo44GX44Gq44GEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExheW91dE1hcChvdXRMYXlvdXRNYXA6IGNzbU1hcDxzdHJpbmcsIG51bWJlcj4pOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55uu44OR44OB44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44Gu5pWw44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHJldHVybiDnm67jg5Hjg4HjgavplqLpgKPku5jjgZHjgonjgozjgZ/jg5Hjg6njg6Hjg7zjgr/jga7mlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXllQmxpbmtQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOebruODkeODgeOBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBrklE44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgICogQHBhcmFtIGluZGV4IOmFjeWIl+OBruOCpOODs+ODh+ODg+OCr+OCueWApFxyXG4gICAgICAgICAqIEByZXR1cm4g44OR44Op44Oh44O844K/SURcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RXllQmxpbmtQYXJhbWV0ZXJJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEByZXR1cm4g44Oq44OD44OX44K344Oz44Kv44Gr6Zai6YCj5LuY44GR44KJ44KM44Gf44OR44Op44Oh44O844K/44Gu5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODquODg+ODl+OCt+ODs+OCr+OBq+mWoumAo+S7mOOBkeOCieOCjOOBn+ODkeODqeODoeODvOOCv+OBruaVsOOCkuWPluW+l+OBmeOCi1xyXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDphY3liJfjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcclxuICAgICAgICAgKiBAcmV0dXJuIOODkeODqeODoeODvOOCv0lEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldExpcFN5bmNQYXJhbWV0ZXJJZChpbmRleDogbnVtYmVyKTogQ3ViaXNtSWRIYW5kbGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9