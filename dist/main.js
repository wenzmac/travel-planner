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
/*! exports provided: performAction, formChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performAction", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["performAction"]; });

/* harmony import */ var _js_formChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formChecker */ "./src/client/js/formChecker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formChecker", function() { return _js_formChecker__WEBPACK_IMPORTED_MODULE_1__["formChecker"]; });

/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/fonts.scss */ "./src/client/styles/fonts.scss");
/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/results.scss */ "./src/client/styles/results.scss");
/* harmony import */ var _media_loading_plane_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/loading-plane.gif */ "./src/client/media/loading-plane.gif");
/* harmony import */ var _media_icon_currency_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/icon-currency.png */ "./src/client/media/icon-currency.png");
/* harmony import */ var _media_icon_language_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/icon-language.png */ "./src/client/media/icon-language.png");
/* harmony import */ var _media_icon_population_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/icon-population.png */ "./src/client/media/icon-population.png");
/* harmony import */ var _media_icon_forecast_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/icon-forecast.png */ "./src/client/media/icon-forecast.png");
// Functions

 //import { updateUI } from './js/updateUI'
//import { dateRestrict } from './js/dateInput'

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
  var destCity = document.getElementById('userCity').value;
  var destDate = document.getElementById('date').value;
  e.preventDefault();

  if (destCity == "" || destDate == "") {
    alert("Please enter a city and date");
  } else {
    console.log("form checked");
    document.getElementById('coming').classList.remove('hide');
    document.getElementById('loading-gif').classList.remove('hide');
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
    }).then(function (response) {
      // calls the daysUntilTrip function
      var daysToTrip = daysUntilTrip();
      var dayOrDays = singleOrPlural(daysToTrip);
      var destImage = destImagePicker(response); // Updates UI

      console.log("Updating UI");
      document.getElementById('coming').classList.add('hide');
      document.getElementById('loading-gif').classList.add('hide');
      document.getElementById('results').innerHTML = "\n      <div class=\"main-result-flex\">\n        <div class=\"flex-box-left\">\n          <h2>".concat(response.city, ", ").concat(response.country, "</h2>\n          <p>Your trip is ").concat(daysToTrip, " ").concat(dayOrDays, " away</p>\n          <img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.currentIcon, ".png\">\n          <p class=\"temp-text\">").concat(response.currentTemp, "\xB0c</p>\n          <p>").concat(response.currentDescription, "</p>\n          <p class=\"small\">(right now)</p>\n        </div>\n        <div class=\"flex-box-right\">\n          <img id=\"destinationImage\" src=\"").concat(destImage, "\">\n        </div>\n      </div>\n      <div class=\"extra-results-flex\">\n        <div class=\"flex-box-icons\">\n          <img src=\"fab13f2ec6e368ca5122527f3862abad.png\">\n          <h3>Language</h3>\n          <p>").concat(response.language, "</p>\n        </div>\n        <div class=\"flex-box-icons\">\n          <img src=\"e23f4589e4925b2ad271820627c51173.png\">\n          <h3>Currency</h3>\n          <p>").concat(response.currency, "</p>\n        </div>\n        <div class=\"flex-box-icons\">\n          <img src=\"b5891e799634a520ab45f991f18f8678.png\">\n          <h3>Population</h3>\n          <p>").concat(new Intl.NumberFormat().format(response.population), "</p>\n        </div>\n      </div>\n      <div class=\"extra-results-flex\">\n        <div class=\"flex-box-icons\">\n          <img src=\"8603f68b267a8bab8f580bfbc2532f6a.png\">\n          <h3>Weather forecast &#8211; next 8 days</h3>\n        </div>\n      </div>\n      <div class=\"extra-results-flex\">\n        <div class=\"flex-box-forecast\">\n          <ul>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day1[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day1[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day1[0].date, "</li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day2[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day2[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day2[0].date, "</li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day3[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day3[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day3[0].date, "</li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day4[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day4[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day4[0].date, "</li>\n          </ul>\n        </div>\n        <div class=\"flex-box-forecast\">\n          <ul>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day5[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day5[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day5[0].date, " </li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day6[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day6[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day6[0].date, "</li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day7[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day7[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day7[0].date, " </li>\n            <li><img src=\"https://www.weatherbit.io/static/img/icons/").concat(response.day8[0].icon, ".png\"> <span class=\"temp-text\">").concat(response.day8[0].maxTemp, "\xB0c</span> &#8211; ").concat(response.day8[0].date, " </li>\n          </ul>\n        </div>\n      </div>\n      ");
    }); //.catch(error => alert("Something went wrong, please check the city and try again", error));
  }
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

var destImagePicker = function destImagePicker(response) {
  var cityImage = response.cityImage;
  var countryImage = response.countryImage;

  if (typeof cityImage === 'undefined') {
    console.log("countryImage");
    return countryImage;
  } else {
    console.log("cityImage");
    return cityImage;
  }
};

var singleOrPlural = function singleOrPlural(daysToTrip) {
  if (daysToTrip == 1) {
    return "day";
  } else {
    return "days";
  }
};



/***/ }),

/***/ "./src/client/js/formChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/formChecker.js ***!
  \**************************************/
/*! exports provided: formChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formChecker", function() { return formChecker; });
// checker function
function formChecker(destCity, destDate) {
  if (destCity == "" || destDate == "") {
    return false;
  } else {
    return true;
  }
}

;


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

/***/ "./src/client/media/icon-forecast.png":
/*!********************************************!*\
  !*** ./src/client/media/icon-forecast.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8603f68b267a8bab8f580bfbc2532f6a.png");

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