module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Header.js";


var Header_Style = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  backgroundColor: '#999',
  height: '80px',
  minWidth: '600px',
  marginBottom: '20px'
};
var Logo_Style = {
  fontSize: '30px',
  marginLeft: '15px',
  textDecoration: 'none',
  color: 'black'
};
var Achievement_Style = {
  marginLeft: '40%',
  textDecoration: 'none',
  color: 'black'
};

function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header",
    style: Header_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "logo",
    style: Logo_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Todo Application")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: " achievement",
    style: Achievement_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uB098\uC758 \uC131\uCDE8 \uBCF4\uAE30")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MainContentsLeft.js":
/*!****************************************!*\
  !*** ./components/MainContentsLeft.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsLeft.js";



var MainContents_Left_Style = {
  display: 'flex',
  float: 'left',
  flexDirection: 'column',
  alignItems: 'left',
  height: '100%',
  minHeight: 'calc(100vh - 100px)',
  width: '49%',
  border: 'groove 1px'
};
var Title_Left_Style = {
  textAlign: 'center',
  padding: '15px 0px',
  backgroundColor: '#999'
};
var Content_Left_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '150px'
};
var Transparent = {
  marginTop: '35px',
  marginBottom: '20px'
};

function MainContents_Left() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: MainContents_Left_Style,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2699506499",
    css: ".today.jsx-2699506499:hover{background-color :#999;}.today.jsx-2699506499{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2699506499:hover{background-color :#999;}.sevendays.jsx-2699506499{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.addTodo.jsx-2699506499{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addTodo.jsx-2699506499:hover{opacity :1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c0xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxBQVVNLEFBYVgsV0FDYixLQXJDd0IsQUFjQSxPQWxCeEIsQUFjQSw2QkFjYSxXQUNLLEtBeEJILEFBY0EsV0FXQSxFQXhCYSxBQWNBLFdBV1QsZUF4QkUsQUFjQSxFQVdMLGlCQXhCRCxBQWNBLGFBYkksQUFjQSxpQkFibkIsQUFjQSwrQkFTeUIsaUZBQ0gsaUdBQ1AsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxjb21wb25lbnRzXFxNYWluQ29udGVudHNMZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbmNvbnN0IE1haW5Db250ZW50c19MZWZ0X1N0eWxlID0ge1xyXG4gICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgIGZsb2F0IDogJ2xlZnQnLFxyXG4gICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtcyA6ICdsZWZ0JyxcclxuICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIG1pbkhlaWdodCA6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyxcclxuICAgIHdpZHRoIDogJzQ5JScsXHJcbiAgICBib3JkZXIgOiAnZ3Jvb3ZlIDFweCcsXHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlX0xlZnRfU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgcGFkZGluZyA6ICcxNXB4IDBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yIDogJyM5OTknLFxyXG59XHJcblxyXG5jb25zdCBDb250ZW50X0xlZnRfU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzE1MHB4JyxcclxufVxyXG5cclxuY29uc3QgVHJhbnNwYXJlbnQgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzM1cHgnLFxyXG4gIG1hcmdpbkJvdHRvbSA6ICcyMHB4JyxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5Db250ZW50c19MZWZ0KCl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBzdHlsZT17TWFpbkNvbnRlbnRzX0xlZnRfU3R5bGV9PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudG9kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjOTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kYXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNldmVuZGF5czpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXZlbmRheXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZFRvZG8ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWRkVG9kbzpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eSA6IDE7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9sZWZ0XCIgc3R5bGU9e1RpdGxlX0xlZnRfU3R5bGV9PlxyXG4gICAgICAgIOydvOyDgVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkVG9kb1wiPispIOqzhO2ajSDstpTqsIDtlZjquLA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e1RyYW5zcGFyZW50fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG9kYXlcIj7smKTripg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZXZlbmRheXNcIj7slZ7snLzroZzsnZggN+ydvDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2xlZnRcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtDb250ZW50X0xlZnRfU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b20gOiAnMTBweCcsIGZvbnRTaXplIDogJzEycHgnLH19PuyYpOuKmCA07JuUIDI27J28PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2Pu2VmeybkCDqsIDquLA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtDb250ZW50X0xlZnRfU3R5bGV9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b20gOiAnMTBweCcsIGZvbnRTaXplIDogJzEycHgnLH19PuuqqeyalOydvCA17JuUIDE17J28PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PuuwpSDrqLnquLA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnRzX0xlZnRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsLeft.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Left_Style,
    className: "jsx-2699506499" + " " + "title_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\uC77C\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "addTodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "+) \uACC4\uD68D \uCD94\uAC00\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Transparent,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\uC55E\uC73C\uB85C\uC758 7\uC77C"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2699506499" + " " + "content_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Content_Left_Style,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\uC624\uB298 4\uC6D4 26\uC77C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "\uD559\uC6D0 \uAC00\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Content_Left_Style,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "\uBAA9\uC694\uC77C 5\uC6D4 15\uC77C"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\uBC25 \uBA39\uAE30"))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainContents_Left);

/***/ }),

/***/ "./components/MainContentsRight.js":
/*!*****************************************!*\
  !*** ./components/MainContentsRight.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js";



var MainContents_Right_Style = {
  display: 'flex',
  float: 'right',
  flexDirection: 'column',
  alignItems: 'left',
  height: '100%',
  minHeight: 'calc(100vh - 100px)',
  width: '49%',
  border: 'groove 1px'
};
var Title_Right_Style = {
  textAlign: 'center',
  padding: '15px 0px',
  backgroundColor: '#999'
};
var Content_Right_Style = {
  marginTop: '20px',
  marginLeft: '10px'
};

function MainContents_Right() {
  var projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'];
  var list = '<ul>';
  var i = 0;

  while (i < projects.length) {
    list = list + "<li style=\"list-style-type : none;\"><a style=\"background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;\" class=\"projects\" href=\"/id=".concat(projects[i], "\">").concat(projects[i], "</a></li><br><br>");
    i = i + 1;
  }

  list = list + '</ul>';
  console.log(list);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: MainContents_Right_Style,
    className: "jsx-4097126910",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Right_Style,
    className: "jsx-4097126910" + " " + "title_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\uD504\uB85C\uC81D\uD2B8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4097126910",
    css: ".addProject.jsx-4097126910{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addProject.jsx-4097126910:hover{opacity :1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHaUMsQUFhWCxXQUNiLHlDQWJhLFdBQ0ssZ0JBQ0gsYUFDSSxpQkFDSCw4RUFDUyxpRkFDSCxpR0FDUCxhQUVmIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnRzX1JpZ2h0X1N0eWxlID0ge1xyXG4gIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgZmxvYXQgOiAncmlnaHQnLFxyXG4gIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICBhbGlnbkl0ZW1zOiAnbGVmdCcsXHJcbiAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gIG1pbkhlaWdodCA6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyxcclxuICB3aWR0aCA6ICc0OSUnLFxyXG4gIGJvcmRlciA6ICdncm9vdmUgMXB4JyxcclxufVxyXG5cclxuY29uc3QgVGl0bGVfUmlnaHRfU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgcGFkZGluZyA6ICcxNXB4IDBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yIDogJyM5OTknLFxyXG59XHJcblxyXG5jb25zdCBDb250ZW50X1JpZ2h0X1N0eWxlID0ge1xyXG4gIG1hcmdpblRvcCA6ICcyMHB4JyxcclxuICBtYXJnaW5MZWZ0IDogJzEwcHgnLFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5Db250ZW50c19SaWdodCgpe1xyXG4gIGNvbnN0IHByb2plY3RzID0gWydQcm9qZWN0IDEnICwgJ1Byb2plY3QgMicgLCAnUHJvamVjdCAzJyAsICdQcm9qZWN0IDQnICwgJ1Byb2plY3QgNScgLCAnUHJvamVjdCA2J11cclxuICB2YXIgbGlzdCA9ICc8dWw+JztcclxuICB2YXIgaSA9IDA7XHJcbiAgd2hpbGUoaSA8IHByb2plY3RzLmxlbmd0aCl7XHJcbiAgICBsaXN0ID0gbGlzdCArIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGUgOiBub25lO1wiPjxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvciA6ICNmN2Y3Zjc7IHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7IGZvbnQtc2l6ZSA6IDIwcHg7IGNvbG9yIDogYmxhY2s7IHBhZGRpbmcgOiA1cHg7IGJvcmRlci1yYWRpdXMgOiAycHg7XCIgY2xhc3M9XCJwcm9qZWN0c1wiIGhyZWY9XCIvaWQ9JHtwcm9qZWN0c1tpXX1cIj4ke3Byb2plY3RzW2ldfTwvYT48L2xpPjxicj48YnI+YDtcclxuICAgIGkgPSBpICsgMTtcclxuICB9XHJcbiAgbGlzdCA9IGxpc3QrJzwvdWw+JztcclxuICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXtNYWluQ29udGVudHNfUmlnaHRfU3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX3JpZ2h0XCIgc3R5bGU9e1RpdGxlX1JpZ2h0X1N0eWxlfT5cclxuICAgICAgICDtlITroZzsoJ3tirhcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFkZFByb2plY3Qge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZFByb2plY3Q6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZFByb2plY3RcIj4rKSDtlITroZzsoJ3tirgg7LaU6rCA7ZWY6riwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfcmlnaHRcIiBzdHlsZT17Q29udGVudF9SaWdodF9TdHlsZX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtfX2h0bWw6IGxpc3R9IH0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnRzX1JpZ2h0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-4097126910" + " " + "addProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "+) \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Content_Right_Style,
    className: "jsx-4097126910" + " " + "content_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: list
    },
    className: "jsx-4097126910",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MainContents_Right);

/***/ }),

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_MainContentsLeft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainContentsLeft.js */ "./components/MainContentsLeft.js");
/* harmony import */ var _components_MainContentsRight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainContentsRight.js */ "./components/MainContentsRight.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\App.js";



 // import Footer from "../components/Footer.js"
// import Database from "../server/db.js"
// import Data from "../components/Data.js"

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainContentsLeft_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainContentsRight_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./pages/App.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\index.js";


 // import fetch from 'isomorphic-unfetch';
// import Topics from "../db/mysql.js";
// import Data from "../nodejs/main.js"

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}; // Index.getInitialProps = async function() {
//   const res = await fetch('https://localhost:4000')
//   const data = await res.json()
//
//   console.log(` Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map