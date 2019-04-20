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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/depps/webapps/JavaScript/ror_projects/game-app/app/javascript/packs/hello_react.jsx: Unexpected token (29:4)\n\n  27 | \n  28 | \n> 29 | var = pauseMenu = React.createClass({\n     |     ^\n  30 | \trender: function() {\n  31 | \treturn(\n  32 | \n    at Object.raise (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Object.unexpected (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:5167:16)\n    at Object.parseIdentifierName (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7007:18)\n    at Object.parseIdentifier (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:6985:23)\n    at Object.parseBindingAtom (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:5449:17)\n    at Object.parseVarId (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7968:20)\n    at Object.parseVar (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7940:12)\n    at Object.parseVarStatement (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7762:10)\n    at Object.parseStatementContent (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7358:21)\n    at Object.parseStatement (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseTopLevel (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:7220:10)\n    at Object.parse (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:8863:17)\n    at parse (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/parser/lib/index.js:11135:38)\n    at parser (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/home/depps/webapps/JavaScript/ror_projects/game-app/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\n    at process._tickCallback (internal/process/next_tick.js:181:9)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-70f3141638012bbf36c7.js.map