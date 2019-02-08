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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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

function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    style: Header_Style,
    className: "jsx-2496276104" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2496276104",
    css: ".logo.jsx-2496276104{font-size :30px;margin-left :15px;-webkit-text-decoration :none;text-decoration :none;color :black;}.logo.jsx-2496276104:hover{opacity :0.5;}.achievement.jsx-2496276104{font-size :15px;margin-left :40%;-webkit-text-decoration :none;text-decoration :none;color :black;}.achievement.jsx-2496276104:hover{opacity :0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBR3lCLEFBT0gsQUFJRyxBQU9ILGFBVmYsQUFXQSxHQWxCb0IsQUFXRCxpQkFDSyxDQVhBLG1EQVlULENBWEEsWUFZZixDQVhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5jb25zdCBIZWFkZXJfU3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yIDogJyM5OTknLFxyXG4gICAgaGVpZ2h0IDogJzgwcHgnLFxyXG4gICAgbWluV2lkdGggOiAnNjAwcHgnLFxyXG4gICAgbWFyZ2luQm90dG9tIDogJzIwcHgnLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17SGVhZGVyX1N0eWxlfT5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBmb250LXNpemUgOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogMTVweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dvOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5IDogMC41O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNoaWV2ZW1lbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiA0MCU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNoaWV2ZW1lbnQ6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiPlRvZG8gQXBwbGljYXRpb248L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCIgYWNoaWV2ZW1lbnRcIiA+7JmE66OM66qp66GdIOuztOq4sDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2496276104" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Todo Application")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2496276104" + " " + " achievement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\uC644\uB8CC\uBAA9\uB85D \uBCF4\uAE30")));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Main_Left_Content.js":
/*!*****************************************!*\
  !*** ./components/Main_Left_Content.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Content.js";

var Main_Left_Content_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '150px'
};

function Main_Left_Content() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Main_Left_Content_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\uC624\uB298 4\uC6D4 26\uC77C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\uD559\uC6D0 \uAC00\uAE30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Main_Left_Content_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\uBAA9\uC694\uC77C 5\uC6D4 15\uC77C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\uBC25 \uBA39\uAE30")));
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Content);

/***/ }),

/***/ "./components/Main_Left_Layout.js":
/*!****************************************!*\
  !*** ./components/Main_Left_Layout.js ***!
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
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js";



var Main_Left_Layout_Style = {
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
var Transparent = {
  marginTop: '35px',
  marginBottom: '20px'
};

function Main_Left_Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Main_Left_Layout_Style,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2699506499",
    css: ".today.jsx-2699506499:hover{background-color :#999;}.today.jsx-2699506499{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2699506499:hover{background-color :#999;}.sevendays.jsx-2699506499{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.addTodo.jsx-2699506499{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addTodo.jsx-2699506499:hover{opacity :1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fTGVmdF9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxBQVVNLEFBYVgsV0FDYixLQXJDd0IsQUFjQSxPQWxCeEIsQUFjQSw2QkFjYSxXQUNLLEtBeEJILEFBY0EsV0FXQSxFQXhCYSxBQWNBLFdBV1QsZUF4QkUsQUFjQSxFQVdMLGlCQXhCRCxBQWNBLGFBYkksQUFjQSxpQkFibkIsQUFjQSwrQkFTeUIsaUZBQ0gsaUdBQ1AsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxjb21wb25lbnRzXFxNYWluX0xlZnRfTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbmNvbnN0IE1haW5fTGVmdF9MYXlvdXRfU3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgZmxvYXQgOiAnbGVmdCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zIDogJ2xlZnQnLFxyXG4gICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gICAgd2lkdGggOiAnNDklJyxcclxuICAgIGJvcmRlciA6ICdncm9vdmUgMXB4JyxcclxufVxyXG5cclxuY29uc3QgVGl0bGVfTGVmdF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IFRyYW5zcGFyZW50ID0ge1xyXG4gIG1hcmdpblRvcCA6ICczNXB4JyxcclxuICBtYXJnaW5Cb3R0b20gOiAnMjBweCcsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluX0xlZnRfTGF5b3V0KHByb3BzKXtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXtNYWluX0xlZnRfTGF5b3V0X1N0eWxlfT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRvZGF5OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzk5OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvZGF5IHtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luIDogMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXZlbmRheXM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjOTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2V2ZW5kYXlzIHtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luIDogMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZGRUb2RvIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5IDogMC41O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZFRvZG86aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHkgOiAxO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfbGVmdFwiIHN0eWxlPXtUaXRsZV9MZWZ0X1N0eWxlfT5cclxuICAgICAgICDsnbzsg4FcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZFRvZG9cIj4rKSDqs4Ttmo0g7LaU6rCA7ZWY6riwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtUcmFuc3BhcmVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvZGF5XCI+7Jik64qYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2V2ZW5kYXlzXCI+7JWe7Jy866Gc7J2YIDfsnbw8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluX0xlZnRfTGF5b3V0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Left_Style,
    className: "jsx-2699506499" + " " + "title_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uC77C\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "addTodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "+) \uACC4\uD68D \uCD94\uAC00\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Transparent,
    className: "jsx-2699506499",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2699506499" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\uC55E\uC73C\uB85C\uC758 7\uC77C"))), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Layout);

/***/ }),

/***/ "./components/Main_Right_Content.js":
/*!******************************************!*\
  !*** ./components/Main_Right_Content.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Right_Content.js";

var Main_Right_Content_Style = {
  marginTop: '20px',
  marginLeft: '10px'
};
var projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'];
var list = '<ul>';
var i = 0;

while (i < projects.length) {
  list = list + "<li style=\"list-style-type : none;\"><a style=\"background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;\" href=\"/id=".concat(projects[i], "\">").concat(projects[i], "</a></li><br><br>");
  i = i + 1;
}

list = list + '</ul>';

function Main_Right_Content() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content_right",
    style: Main_Right_Content_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: list
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Right_Content);

/***/ }),

/***/ "./components/Main_Right_Layout.js":
/*!*****************************************!*\
  !*** ./components/Main_Right_Layout.js ***!
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
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Right_Layout.js";



var Main_Right_Layout_Style = {
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

function Main_Right_Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Main_Right_Layout_Style,
    className: "jsx-4097126910",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Right_Style,
    className: "jsx-4097126910" + " " + "title_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\uD504\uB85C\uC81D\uD2B8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4097126910",
    css: ".addProject.jsx-4097126910{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addProject.jsx-4097126910:hover{opacity :1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fUmlnaHRfTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDa0IsQUFHaUMsQUFhWCxXQUNiLHlDQWJhLFdBQ0ssZ0JBQ0gsYUFDSSxpQkFDSCw4RUFDUyxpRkFDSCxpR0FDUCxhQUVmIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fUmlnaHRfTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTWFpbl9SaWdodF9MYXlvdXRfU3R5bGUgPSB7XHJcbiAgZGlzcGxheSA6ICdmbGV4JyxcclxuICBmbG9hdCA6ICdyaWdodCcsXHJcbiAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gIGFsaWduSXRlbXM6ICdsZWZ0JyxcclxuICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gIHdpZHRoIDogJzQ5JScsXHJcbiAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9SaWdodF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRfUmlnaHRfU3R5bGUgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzIwcHgnLFxyXG4gIG1hcmdpbkxlZnQgOiAnMTBweCcsXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbl9SaWdodF9MYXlvdXQocHJvcHMpe1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5fUmlnaHRfTGF5b3V0X1N0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9yaWdodFwiIHN0eWxlPXtUaXRsZV9SaWdodF9TdHlsZX0+XHJcbiAgICAgICAg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5hZGRQcm9qZWN0IHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvciA6IHJlZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcCA6IDIwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC41O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRQcm9qZWN0OmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHkgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRQcm9qZWN0XCI+Kykg7ZSE66Gc7KCd7Yq4IOy2lOqwgO2VmOq4sDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5fUmlnaHRfTGF5b3V0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Right_Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-4097126910" + " " + "addProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "+) \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00\uD558\uAE30")), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Right_Layout);

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Main_Left_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main_Left_Layout.js */ "./components/Main_Left_Layout.js");
/* harmony import */ var _components_Main_Right_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main_Right_Layout.js */ "./components/Main_Right_Layout.js");
/* harmony import */ var _components_Main_Left_Content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main_Left_Content.js */ "./components/Main_Left_Content.js");
/* harmony import */ var _components_Main_Right_Content_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Main_Right_Content.js */ "./components/Main_Right_Content.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\App.js";








function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Left_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Left_Content_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Right_Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Right_Content_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.js */ "./pages/App.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\index.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:5000/add', {
  title: '제에발',
  description: '제발'
});
Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/list');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
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

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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