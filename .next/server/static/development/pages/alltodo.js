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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form_Left.js":
/*!*********************************!*\
  !*** ./components/Form_Left.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Form_Left.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Form_Style = {
  marginLeft: '10px',
  paddingBottom: '70px'
};

var Form_Left =
/*#__PURE__*/
function (_Component) {
  _inherits(Form_Left, _Component);

  function Form_Left() {
    var _this;

    _classCallCheck(this, Form_Left);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form_Left).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      console.log(e.target.name);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          title = _this$state.title,
          description = _this$state.description,
          year = _this$state.year,
          month = _this$state.month,
          day = _this$state.day;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/add', {
        title: title,
        description: description,
        year: year,
        month: month,
        day: day
      }).then(function (result) {});
    });

    _this.state = {
      title: '',
      description: '',
      year: '',
      month: '',
      day: ''
    };
    return _this;
  }

  _createClass(Form_Left, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          description = _this$state2.description,
          year = _this$state2.year,
          month = _this$state2.month,
          day = _this$state2.day;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        style: Form_Style,
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\uACC4\uD68D : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "title",
        value: title,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\uACC4\uD68D \uC124\uBA85(\uC0DD\uB7B5\uAC00\uB2A5) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "description",
        value: description,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\uB144\uB3C4 : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "year",
        value: year,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\uC6D4 : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "month",
        value: month,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\uC77C : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "day",
        value: day,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\uC81C\uCD9C\uD558\uAE30"));
    }
  }]);

  return Form_Left;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form_Left);

/***/ }),

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
/* harmony import */ var _components_Popup_Left_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popup_Left.js */ "./components/Popup_Left.js");
/* harmony import */ var _components_onclick_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/onclick.js */ "./components/onclick.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js";





var Main_Left_Layout_Style = {
  display: 'flex',
  float: 'left',
  flexDirection: 'column',
  alignItems: 'left',
  height: '100%',
  minHeight: 'calc(100vh - 100px)',
  width: '99%',
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
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2421616147",
    css: ".today.jsx-2421616147:hover{background-color :#999;}.today.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2421616147:hover{background-color :#999;}.sevendays.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fTGVmdF9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxnQkFiTSxBQWNBLE9BbEJ4QixBQWNBLDZDQVRlLEFBY0EsYUFiYSxBQWNBLDBCQWJQLEFBY0EsbUJBYk4sQUFjQSxhQWJJLEFBY0EsaUJBYm5CLEFBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbl9MZWZ0X0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvcHVwX0xlZnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBfTGVmdC5qc1wiXHJcbmltcG9ydCBPbmNsaWNrIGZyb20gXCIuLi9jb21wb25lbnRzL29uY2xpY2suanNcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBNYWluX0xlZnRfTGF5b3V0X1N0eWxlID0ge1xyXG4gICAgZGlzcGxheSA6ICdmbGV4JyxcclxuICAgIGZsb2F0IDogJ2xlZnQnLFxyXG4gICAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtcyA6ICdsZWZ0JyxcclxuICAgIGhlaWdodCA6ICcxMDAlJyxcclxuICAgIG1pbkhlaWdodCA6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyxcclxuICAgIHdpZHRoIDogJzk5JScsXHJcbiAgICBib3JkZXIgOiAnZ3Jvb3ZlIDFweCcsXHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlX0xlZnRfU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgcGFkZGluZyA6ICcxNXB4IDBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yIDogJyM5OTknLFxyXG59XHJcblxyXG5jb25zdCBUcmFuc3BhcmVudCA9IHtcclxuICBtYXJnaW5Ub3AgOiAnMzVweCcsXHJcbiAgbWFyZ2luQm90dG9tIDogJzIwcHgnLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbl9MZWZ0X0xheW91dChwcm9wcyl7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBzdHlsZT17TWFpbl9MZWZ0X0xheW91dF9TdHlsZX0+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50b2RheTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b2RheSB7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmN2Y3Zjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDJweDtcclxuICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgIG1hcmdpbiA6IDBweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2V2ZW5kYXlzOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzk5OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNldmVuZGF5cyB7XHJcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmN2Y3Zjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDJweDtcclxuICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgIG1hcmdpbiA6IDBweCAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfbGVmdFwiIHN0eWxlPXtUaXRsZV9MZWZ0X1N0eWxlfT5cclxuICAgICAgICDsnbzsg4FcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8UG9wdXBfTGVmdCAvPlxyXG5cclxuICAgICAgPE9uY2xpY2sgLz5cclxuXHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtUcmFuc3BhcmVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi90b2RheXRvZG9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvZGF5XCI+7Jik64qYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FsbHRvZG9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNldmVuZGF5c1wiPuyghOyytOuztOq4sDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5fTGVmdF9MYXlvdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Left_Style,
    className: "jsx-2421616147" + " " + "title_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uC77C\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Transparent,
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/todaytodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/alltodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\uC804\uCCB4\uBCF4\uAE30"))), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Layout);

/***/ }),

/***/ "./components/Popup_Left.js":
/*!**********************************!*\
  !*** ./components/Popup_Left.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup_Left; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-modal */ "react-awesome-modal");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Form_Left_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form_Left.js */ "./components/Form_Left.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Popup_Left.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Popup_Left =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup_Left, _Component);

  function Popup_Left(props) {
    var _this;

    _classCallCheck(this, Popup_Left);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup_Left).call(this, props));
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(Popup_Left, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-829210313",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "829210313",
        css: ".addTodo.jsx-829210313{width :200px;color :red;font-size :20px;padding :5px;margin-top :20px;margin-left :10px;margin-right :10px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.7;}.addTodo.jsx-829210313:hover{opacity :1;}.title.jsx-829210313{margin-left :10px;}.close.jsx-829210313{margin-left :10px;margin-bottom :10px;-webkit-text-decoration :none;text-decoration :none;color :red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXFBvcHVwX0xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEIwQixBQUc4QixBQWVGLEFBSU8sQUFJQSxXQVBwQixFQWZhLEtBbUJiLEFBSXNCLE1BdEJKLGNBdUJNLEVBdEJULGFBQ0ksaUJBQ0Msa0JBQ0MsRUFvQlIsV0FDYixNQXBCZ0IsOEVBQ1MsaUZBQ0gsaUdBQ1AsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxjb21wb25lbnRzXFxQb3B1cF9MZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgRm9ybV9MZWZ0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1fTGVmdC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cF9MZWZ0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlIDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpYmxlIDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2libGUgOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmFkZFRvZG8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6IHJlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFkZFRvZG9cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLqs4Ttmo0g7LaU6rCA7ZWY6riwXCIgb25DbGljaz17KCkgPT4gdGhpcy5vcGVuTW9kYWwoKX0gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q9XCJmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0F3YXk9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPuqzhO2ajSDstpTqsIDtlZjquLA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybV9MZWZ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+64ur6riwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Popup_Left.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        value: "\uACC4\uD68D \uCD94\uAC00\uD558\uAE30",
        onClick: function onClick() {
          return _this2.openModal();
        },
        className: "jsx-829210313" + " " + "addTodo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_awesome_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        visible: this.state.visible,
        width: "500",
        height: "400",
        effect: "fadeInUp",
        onClickAway: function onClickAway() {
          return _this2.closeModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-829210313",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-829210313" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\uACC4\uD68D \uCD94\uAC00\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return _this2.closeModal();
        },
        className: "jsx-829210313" + " " + "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\uB2EB\uAE30"))));
    }
  }]);

  return Popup_Left;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/onclick.js":
/*!*******************************!*\
  !*** ./components/onclick.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\onclick.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var BoxStyle = {
  width: '30px',
  height: '30px'
};

var Onclick =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Onclick, _React$Component);

  function Onclick(props) {
    var _this;

    _classCallCheck(this, Onclick);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Onclick).call(this, props));
    /* set the initial checkboxState to true */

    _this.state = {
      checkboxState: true
    };
    return _this;
  }
  /* prevent form submission from reloading the page */


  _createClass(Onclick, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      var checkboxState = this.state.checkboxState;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/check', {
        checkboxState: checkboxState
      }).then(function (result) {});
    }
    /* callback to change the checkboxState to false when the checkbox is checked */

  }, {
    key: "toggle",
    value: function toggle(event) {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var checkedOrNot = [];
      checkedOrNot.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.checkboxState ? '미완료' : '완료!'));
      var checkbox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        style: BoxStyle,
        onClick: this.toggle.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Checkbox"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, checkbox, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "(\uBBF8)\uC644\uB8CC\uC0C1\uD0DC \uC800\uC7A5")), checkedOrNot);
    }
  }]);

  return Onclick;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Onclick); // ReactDOM.render(<App />, document.getElementById("root"));

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
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\App.js";





function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Left_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/alltodo.js":
/*!**************************!*\
  !*** ./pages/alltodo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/App.js */ "./pages/App.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\alltodo.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var today = new Date();
console.log(today);
var date = today.toISOString().substring(0, 10);
console.log(date);
var year = Number(date.substring(0, 4));
var month = Number(date.substring(5, 7));
var day = Number(date.substring(8, 10));
var Todo_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '150px' //--------------------------------------------
  //--------------------------------------------

};

var AllTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllTodo, _React$Component);

  function AllTodo() {
    _classCallCheck(this, AllTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(AllTodo).apply(this, arguments));
  }

  _createClass(AllTodo, [{
    key: "render",
    value: function render() {
      var todos = this.props.todos;

      function select_After_Nthday_Todo_Id(todos, n) {
        var i = 0;
        var list = [];

        while (i < todos.length) {
          if (todos[i].day === day + n) {
            list.push(todos[i].id);
          }

          i = i + 1;
        }

        return list;
      }

      function sortingTodoId() {
        var i = 1;
        var start = select_After_Nthday_Todo_Id(todos, 0);

        while (i < 365) {
          start = start.concat(select_After_Nthday_Todo_Id(todos, i));
          i = i + 1;
        }

        return start;
      }

      console.log(sortingTodoId());

      function make_All_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < sortingTodoId().length) {
          todo.push(todos[sortingTodoId()[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var all_todo = make_All_Todo_List();
      console.log(all_todo);
      var todoList = all_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          className: "jsx-3683035372" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "3683035372",
          css: ".list.jsx-3683035372:hover{background-color :#f2f2f2;}div.jsx-3683035372{border :solid 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxhbGx0b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHdUMsQUFHUixrQkFDcEIsUUFIQSIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxwYWdlc1xcYWxsdG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zb2xlLmxvZyh0b2RheSlcclxuXHJcbmNvbnN0IGRhdGUgPSB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcclxuY29uc29sZS5sb2coZGF0ZSlcclxuXHJcbmNvbnN0IHllYXIgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoMCw0KSlcclxuXHJcbmNvbnN0IG1vbnRoID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDUsNykpXHJcblxyXG5jb25zdCBkYXkgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoOCwxMCkpXHJcblxyXG5cclxuY29uc3QgVG9kb19TdHlsZSA9IHtcclxuICBib3JkZXJUb3AgOiAnZ3Jvb3ZlIDFweCcsXHJcbiAgcGFkZGluZyA6ICcycHgnLFxyXG4gIG1hcmdpbiA6ICczcHggMHB4JyxcclxuICBoZWlnaHQgOiAnMTUwcHgnLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgQWxsVG9kbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbGlzdCcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvZG9zIDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbil7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkrbil7XHJcbiAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc29ydGluZ1RvZG9JZCgpe1xyXG4gICAgICB2YXIgaSA9IDE7XHJcbiAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIDApXHJcbiAgICAgIHdoaWxlKGkgPCAzNjUpe1xyXG4gICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIGkpKVxyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coc29ydGluZ1RvZG9JZCgpKVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZV9BbGxfVG9kb19MaXN0KCl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIHRvZG8gPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHNvcnRpbmdUb2RvSWQoKS5sZW5ndGgpe1xyXG4gICAgICAgIHRvZG8ucHVzaCh0b2Rvc1tzb3J0aW5nVG9kb0lkKClbaV0tMV0pO1xyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9kbztcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGFsbF90b2RvID0gbWFrZV9BbGxfVG9kb19MaXN0KClcclxuICAgIGNvbnNvbGUubG9nKGFsbF90b2RvKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBhbGxfdG9kby5tYXAoXHJcbiAgICAgICAgdG9kbyA9PlxyXG5cclxuXHJcbiAgICAgICAgPGxpIHN0eWxlPXtUb2RvX1N0eWxlfSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEycHgnLCBwYWRkaW5nQm90dG9tIDogJzVweCcsIGNvbG9yIDogJyM5OTknLH19Pnt0b2RvLnllYXJ9L3t0b2RvLm1vbnRofS97dG9kby5kYXl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57dG9kby50aXRsZX08L2Rpdj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEzcHgnfX0+LXt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcD5cclxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlIDogJ25vbmUnLCBwYWRkaW5nTGVmdCA6ICcwJyx9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0FwcD5cclxuXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxUb2RvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\alltodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, todoList)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:5000/list');

              case 3:
                response = _context.sent;
                return _context.abrupt("return", {
                  todos: response.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AllTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllTodo);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/alltodo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/alltodo.js */"./pages/alltodo.js");


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

/***/ "react-awesome-modal":
/*!**************************************!*\
  !*** external "react-awesome-modal" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-modal");

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
//# sourceMappingURL=alltodo.js.map