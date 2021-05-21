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
/*! exports provided: checkForName, handleSubmit, rankScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_nameChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/nameChecker */ "./src/client/js/nameChecker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkForName", function() { return _js_nameChecker__WEBPACK_IMPORTED_MODULE_0__["checkForName"]; });

/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formHandler */ "./src/client/js/formHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"]; });

/* harmony import */ var _js_sentimentScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sentimentScore */ "./src/client/js/sentimentScore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rankScore", function() { return _js_sentimentScore__WEBPACK_IMPORTED_MODULE_2__["rankScore"]; });

/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_form_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/variables.scss */ "./src/client/styles/variables.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/fonts.scss */ "./src/client/styles/fonts.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_scss__WEBPACK_IMPORTED_MODULE_7__);








console.log(_js_nameChecker__WEBPACK_IMPORTED_MODULE_0__["checkForName"]); //alert("I EXIST")
//console.log("CHANGE!!");



/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
function handleSubmit(event) {
  const inputText = document.getElementById('name').value;
  event.preventDefault();
  console.log("::: Form Submitted :::"); //check what text was put into the form field

  if (Client.checkForName(inputText)) {
    document.getElementById('coming').classList.remove('hide');
    document.getElementById('data-list').classList.add('hide'); // Fetch request

    fetch('http://localhost:9090/getSentiment', {
      method: 'POST',
      cache: "no-cache",
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputText
      })
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(function (response) {
      console.log("Updating UI");
      document.getElementById('coming').classList.add('hide');
      const newScore_tag = Client.rankScore(response.score_tag);
      document.getElementById('score_tag').innerHTML = `Overall sentiment: ${newScore_tag}`;
      document.getElementById('agreement').innerHTML = `Agreement: ${response.agreement}`;
      document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}/100`;
      document.getElementById('irony').innerHTML = `Irony: ${response.irony}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`;
      document.getElementById('data-list').classList.remove('hide');
    });
  } else {
    alert("Please enter a valid URL");
    console.log("Not valid url");
  }
}



/***/ }),

/***/ "./src/client/js/nameChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/nameChecker.js ***!
  \**************************************/
/*! exports provided: checkForName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForName", function() { return checkForName; });
function checkForName(str) {
  console.log("::: Running checkForName :::", str);
  const r = new RegExp(/^(http|https):\/\/[^ "]+$/);

  if (r.test(str)) {
    console.log("URL check passed");
    return true;
  } else {
    console.log("URL check failed");
    return false;
  }
}



/***/ }),

/***/ "./src/client/js/sentimentScore.js":
/*!*****************************************!*\
  !*** ./src/client/js/sentimentScore.js ***!
  \*****************************************/
/*! exports provided: rankScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankScore", function() { return rankScore; });
// rank sentiment based on score
const rankScore = score => {
  switch (score) {
    case 'P+':
      return 'STRONG POSITIVE';
      break;

    case 'P':
      return 'POSITIVE';
      break;

    case 'NEU':
      return 'NEUTRAL';
      break;

    case 'N':
      return 'NEGATIVE';
      break;

    case 'N+':
      return 'STRONG NEGATIVE';
      break;

    case 'NONE':
      return 'WITHOUT SENTIMENT';
      break;

    default:
      return 'UNABLE TO RANK';
      break;
  }
};



/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable: \"$colour-bg\".\n        on line 2 of src/client/styles/base.scss\n>>   background-color: $colour-bg;\n\n   --------------------^\n\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/sass-loader/dist/index.js:62:7)\n    at Object.done [as callback] (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/node-sass/lib/index.js:293:32)");

/***/ }),

/***/ "./src/client/styles/fonts.scss":
/*!**************************************!*\
  !*** ./src/client/styles/fonts.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable: \"$font-main\".\n        on line 2 of src/client/styles/fonts.scss\n>>   font: 25px/1.2 $font-main;\n\n   -----------------^\n\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/sass-loader/dist/index.js:62:7)\n    at Object.done [as callback] (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/node-sass/lib/index.js:293:32)");

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable: \"$colour-primary\".\n        on line 19 of src/client/styles/form.scss\n>>     background: $colour-primary;\n\n   ----------------^\n\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/sass-loader/dist/index.js:62:7)\n    at Object.done [as callback] (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/wendy/Documents/Courses/WebDevelopment/Final-project-capstone/travel-planner/node_modules/node-sass/lib/index.js:293:32)");

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

/***/ "./src/client/styles/variables.scss":
/*!******************************************!*\
  !*** ./src/client/styles/variables.scss ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=main.js.map