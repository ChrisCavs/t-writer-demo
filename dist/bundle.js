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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  // ABOUT SECTION\n\n  const about1 = document.querySelector('.about1')\n  const about2 = document.querySelector('.about2')\n  const about3 = document.querySelector('.about3')\n  const about4 = document.querySelector('.about4')\n\n  const aboutTw1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(about1, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(about2, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(about3, { animateCursor: 'hide', typeSpeed: 60 })\n  const aboutTw4 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(about4, { animateCursor: 'hide', typeSpeed: 60 })\n\n  const clearAll = () => {\n    aboutTw1.clearText()\n    aboutTw2.clearText()\n    aboutTw3.clearText()\n    aboutTw4.clearText()\n\n    aboutTw1.start()\n  }\n\n  aboutTw1\n    .type('Fast')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw2.start.bind(aboutTw2))\n    .start()\n\n  aboutTw2\n    .type('Easy to use')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw3.start.bind(aboutTw3))\n\n  aboutTw3\n    .type('Fully-featured')\n    .removeCursor()\n    .rest(300)\n    .then(aboutTw4.start.bind(aboutTw4))\n\n  aboutTw4\n    .type('Dependency-free')\n    .removeCursor()\n    .rest(2000)\n    .then(clearAll)\n\n  // DEMO 4\n\n  const test5 = document.querySelector('.test5')\n\n  const testTw5 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test5, {\n    loop: true,\n    typeColor: 'blue'\n  })\n\n  testTw5\n    .type('A simple syntax makes it easy.')\n    .rest(500)\n    .start()\n\n  // DEMO 1\n\n  const test1 = document.querySelector('.test1')\n\n  const testTw1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test1, {\n    loop: true,\n    typeSpeed: 80,\n    deleteSpeed: 80,\n    typeColor: 'red'\n  })\n\n  testTw1\n    .type('You can type')\n    .rest(500)\n    .changeOps({ deleteSpeed: 80 })\n    .remove(4)\n    .type('edit')\n    .rest(500)\n    .remove(4)\n    .type('synchronize callbacks')\n    .rest(500)\n    .changeOps({ deleteSpeed: 20 })\n    .remove(21)\n    .type('change options on the go')\n    .rest(500)\n    .clear()\n    .start()\n\n  // DEMO 2\n\n  const test2 = document.querySelector('.test2')\n\n  const testTw2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test2, { \n    loop: true, \n    typeColor: 'red' \n  })\n\n  testTw2\n    .strings(\n      400,\n      \"Set many strings\",\n      \"In just one call\", \n      \"Using the 'strings' method\"\n    )\n    .start()\n  \n  // DEMO 3\n\n  const test3 = document.querySelector('.test3')\n  const test4 = document.querySelector('.test4')\n\n  const testTw3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test3, { typeSpeed: 60, deleteSpeed: 30 })\n  const testTw4 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 't-writer.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test4, { typeSpeed: 60, deleteSpeed: 30 })\n\n  testTw3\n    .type('Combo typewriters to')\n    .removeCursor()\n    .then(testTw4.start.bind(testTw4))\n    .start()\n\n  testTw4\n    .type(\"create complex effects\")\n    .rest(500)\n    .clear()\n    .changeTypeColor('red')\n    .type(\"defy user expectations\")\n    .rest(500)\n    .clear()\n    .changeTypeColor('blue')\n    .type(\"generate a custom loop\")\n    .rest(700)\n    .clear()\n    .removeCursor()\n    .changeTypeColor('black')\n    .then(testTw3.start.bind(testTw3))\n})\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });