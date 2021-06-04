var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performAction, updateUI, dateRestrict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performAction", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["performAction"]; });

/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/updateUI */ "./src/client/js/updateUI.js");
/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_updateUI__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return _js_updateUI__WEBPACK_IMPORTED_MODULE_1__["updateUI"]; });

/* harmony import */ var _js_dateInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dateInput */ "./src/client/js/dateInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateRestrict", function() { return _js_dateInput__WEBPACK_IMPORTED_MODULE_2__["dateRestrict"]; });

/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/fonts.scss */ "./src/client/styles/fonts.scss");
/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/results.scss */ "./src/client/styles/results.scss");
/* harmony import */ var _media_loading_plane_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/loading-plane.gif */ "./src/client/media/loading-plane.gif");
/* harmony import */ var _media_icon_currency_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/icon-currency.png */ "./src/client/media/icon-currency.png");
/* harmony import */ var _media_icon_language_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/icon-language.png */ "./src/client/media/icon-language.png");
/* harmony import */ var _media_icon_population_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/icon-population.png */ "./src/client/media/icon-population.png");
// Functions



 // Styles





 // Media






/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performAction", function() { return performAction; });
// EVENT LISTENER
// Listen for click of button
document.getElementById('generate').addEventListener('click', performAction); // MAIN APP FUNCTION
// Takes the city input and sends to the server

function performAction(e) {
  e.preventDefault();
  var destCity = document.getElementById('userCity').value; // put formChecker here

  fetch('http://localhost:9090/destination', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      destCity: destCity
    })
  }) // Gets destData as response from the server
  .then(function (response) {
    console.log("/destination fetch done");
    return response.json();
  }) // Updates UI
  .then(function (response) {
    console.log("Updating UI"); // calls the daysUntilTrip function

    var daysToTrip = daysUntilTrip();
    document.getElementById('results').innerHTML = "\n      <p>Hooray! You're going to</p>\n      <h2>".concat(response.city, ", ").concat(response.country, "</h2>\n      <p>Your trip is ").concat(daysToTrip, " days away</p>\n      <p><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.currentIcon, ".png\"></p>\n      <p class=\"temp-text\">").concat(response.currentTemp, "\xB0C</p>\n      <p>").concat(response.currentDescription, "</p>\n    ");
  })["catch"](function (error) {
    return console.log("/destination fetch error", error);
  });
} // DATE INPUT FIELD
// creates todays date then formats it so the month and day have 2 digits and as yyyy-mm-dd
// from todays date it calls on the addDays function to create the date in 16 days


var dateRestrict = function dateRestrict() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var dateToday = yyyy + '-' + mm + '-' + dd;
  var dateFuture = addDays(today, 16);
  var ddFuture = String(dateFuture.getDate()).padStart(2, '0');
  var mmFuture = String(dateFuture.getMonth() + 1).padStart(2, '0');
  var yyyyFuture = dateFuture.getFullYear();
  var dateMax = yyyyFuture + '-' + mmFuture + '-' + ddFuture;
  document.getElementById('date').min = dateToday;
  document.getElementById('date').max = dateMax;
}; // adds days to a date format


var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}; // DAYS UNTIL TRIP
// adds days to a date format


var daysUntilTrip = function daysUntilTrip() {
  var departDate = document.getElementById('date').value;
  var today = new Date();
  var depart = new Date(departDate);
  var result = depart.getDate() - today.getDate();
  return result;
  console.log(result);
};

dateRestrict();


/***/ }),

/***/ "./src/client/js/dateInput.js":
/*!************************************!*\
  !*** ./src/client/js/dateInput.js ***!
  \************************************/
/*! exports provided: addDays, dateRestrict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateRestrict", function() { return dateRestrict; });
// creates todays date then formats it so the month and day have 2 digits and as yyyy-mm-dd
// from todays date it calls on the addDays function to create the date in 16 days
function dateRestrict() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var dateToday = yyyy + '-' + mm + '-' + dd;
  var dateFuture = addDays(today, 16);
  var ddFuture = String(dateFuture.getDate()).padStart(2, '0');
  var mmFuture = String(dateFuture.getMonth() + 1).padStart(2, '0');
  var yyyyFuture = dateFuture.getFullYear();
  var dateMax = yyyyFuture + '-' + mmFuture + '-' + ddFuture;
  document.getElementById('date').min = dateToday;
  document.getElementById('date').max = dateMax;
} // adds days to a date format


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

;


/***/ }),

/***/ "./src/client/js/updateUI.js":
/*!***********************************!*\
  !*** ./src/client/js/updateUI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateUI = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:9090/all');

          case 2:
            request = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return request.json({
              destData: destData
            });

          case 6:
            console.log("destData received for updateUI");
            document.getElementById('results').innerHTML = "\n        <h2>Hooray! You're going to ".concat(destData.city, ", ").concat(destData.counrty, "</h2>\n          <p>Your trip is XX days away</p>\n          <h3>Current weather</h3>\n          <p><img=\"https://www.weatherbit.io/static/img/icons/").concat(destData.currentIcon, ".png\"> ").concat(destData.currentDescription, ", ").concat(destData.currentTemp, " C</p>\n          ");
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log("error at updateUI", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function updateUI() {
    return _ref.apply(this, arguments);
  };
}(); //export {updateUI}

/***/ }),

/***/ "./src/client/media/icon-currency.png":
/*!********************************************!*\
  !*** ./src/client/media/icon-currency.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e23f4589e4925b2ad271820627c51173.png");

/***/ }),

/***/ "./src/client/media/icon-language.png":
/*!********************************************!*\
  !*** ./src/client/media/icon-language.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fab13f2ec6e368ca5122527f3862abad.png");

/***/ }),

/***/ "./src/client/media/icon-population.png":
/*!**********************************************!*\
  !*** ./src/client/media/icon-population.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5891e799634a520ab45f991f18f8678.png");

/***/ }),

/***/ "./src/client/media/loading-plane.gif":
/*!********************************************!*\
  !*** ./src/client/media/loading-plane.gif ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "35faa9d0a6ccee24e16611b00d472626.gif");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/fonts.scss":
/*!**************************************!*\
  !*** ./src/client/styles/fonts.scss ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/client/styles/results.scss":
/*!****************************************!*\
  !*** ./src/client/styles/results.scss ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=main.js.map