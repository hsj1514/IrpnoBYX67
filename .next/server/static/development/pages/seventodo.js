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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\uACC4\uD68D \uC124\uBA85(\uC0DD\uB7B5\uAC00\uB2A5) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "description",
        value: description,
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\uB144\uB3C4(ex. 2019) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "year",
        value: year,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\uC6D4(ex. 8) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "month",
        value: month,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\uC77C(ex.6) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "day",
        value: day,
        onChange: this.onChange.bind(this),
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
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
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-modal */ "react-awesome-modal");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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
    className: "jsx-1645265260" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1645265260",
    css: ".logo.jsx-1645265260{font-size :30px;margin-left :15px;-webkit-text-decoration :none;text-decoration :none;color :black;}.logo.jsx-1645265260:hover{opacity :0.5;}.achievement.jsx-1645265260{font-size :15px;margin-left :20%;-webkit-text-decoration :none;text-decoration :none;color :black;}.achievement.jsx-1645265260:hover{opacity :0.5;}.reset.jsx-1645265260{font-size :15px;margin-left :40%;-webkit-text-decoration :none;text-decoration :none;color :black;}.reset.jsx-1645265260:hover{opacity :0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR3lCLEFBT0gsQUFJRyxBQU9ILEFBSUcsQUFPSCxhQXJCZixBQVdBLEFBV0EsR0E3Qm9CLEFBV0QsQUFXQSxpQkFWSyxBQVdBLENBdEJBLG1EQVlULEFBV0EsQ0F0QkEsWUFZZixBQVdBLENBdEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlcl9TdHlsZSA9IHtcclxuICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbiAgICBoZWlnaHQgOiAnODBweCcsXHJcbiAgICBtaW5XaWR0aCA6ICc2MDBweCcsXHJcbiAgICBtYXJnaW5Cb3R0b20gOiAnMjBweCcsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICByZXR1cm4oXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXtIZWFkZXJfU3R5bGV9PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiAxNXB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ286aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2hpZXZlbWVudCB7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDIwJTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2hpZXZlbWVudDpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eSA6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc2V0IHtcclxuICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogNDAlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc2V0OmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5IDogMC41O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIj5Ub2RvIEFwcGxpY2F0aW9uPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIiBhY2hpZXZlbWVudFwiID7smYTro4zrqqnroZ0g67O06riwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL2RlbGV0ZWFsbFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2V0XCI+6rOE7ZqNIOy0iOq4sO2ZlDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1645265260" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Todo Application")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1645265260" + " " + " achievement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\uC644\uB8CC\uBAA9\uB85D \uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/deleteall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1645265260" + " " + "reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\uACC4\uD68D \uCD08\uAE30\uD654")));
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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2421616147",
    css: ".today.jsx-2421616147:hover{background-color :#999;}.today.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2421616147:hover{background-color :#999;}.sevendays.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fTGVmdF9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxnQkFiTSxBQWNBLE9BbEJ4QixBQWNBLDZDQVRlLEFBY0EsYUFiYSxBQWNBLDBCQWJQLEFBY0EsbUJBYk4sQUFjQSxhQWJJLEFBY0EsaUJBYm5CLEFBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbl9MZWZ0X0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvcHVwX0xlZnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBfTGVmdC5qc1wiXHJcblxyXG5cclxuY29uc3QgTWFpbl9MZWZ0X0xheW91dF9TdHlsZSA9IHtcclxuICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICBmbG9hdCA6ICdsZWZ0JyxcclxuICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXMgOiAnbGVmdCcsXHJcbiAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICBtaW5IZWlnaHQgOiAnY2FsYygxMDB2aCAtIDEwMHB4KScsXHJcbiAgICB3aWR0aCA6ICc5OSUnLFxyXG4gICAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9MZWZ0X1N0eWxlID0ge1xyXG4gIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gIHBhZGRpbmcgOiAnMTVweCAwcHgnLFxyXG4gIGJhY2tncm91bmRDb2xvciA6ICcjOTk5JyxcclxufVxyXG5cclxuY29uc3QgVHJhbnNwYXJlbnQgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzM1cHgnLFxyXG4gIG1hcmdpbkJvdHRvbSA6ICcyMHB4JyxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5fTGVmdF9MYXlvdXQocHJvcHMpe1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5fTGVmdF9MYXlvdXRfU3R5bGV9PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudG9kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjOTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kYXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNldmVuZGF5czpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXZlbmRheXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMTVweDtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2xlZnRcIiBzdHlsZT17VGl0bGVfTGVmdF9TdHlsZX0+XHJcbiAgICAgICAg7J287IOBXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFBvcHVwX0xlZnQgLz5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e1RyYW5zcGFyZW50fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3RvZGF5dG9kb1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG9kYXlcIj7smKTripg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2V2ZW50b2RvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZXZlbmRheXNcIj437J287J2YIOqzhO2ajTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5fTGVmdF9MYXlvdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Left_Style,
    className: "jsx-2421616147" + " " + "title_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\uC77C\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Transparent,
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/todaytodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/seventodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "7\uC77C\uC758 \uACC4\uD68D"))), props.children);
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
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "829210313",
        css: ".addTodo.jsx-829210313{width :200px;color :red;font-size :20px;padding :5px;margin-top :20px;margin-left :10px;margin-right :10px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.7;}.addTodo.jsx-829210313:hover{opacity :1;}.title.jsx-829210313{margin-left :10px;}.close.jsx-829210313{margin-left :10px;margin-bottom :10px;-webkit-text-decoration :none;text-decoration :none;color :red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXFBvcHVwX0xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIwQixBQUc4QixBQWVGLEFBSU8sQUFJQSxXQVBwQixFQWZhLEtBbUJiLEFBSXNCLE1BdEJKLGNBdUJNLEVBdEJULGFBQ0ksaUJBQ0Msa0JBQ0MsRUFvQlIsV0FDYixNQXBCZ0IsOEVBQ1MsaUZBQ0gsaUdBQ1AsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxjb21wb25lbnRzXFxQb3B1cF9MZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgRm9ybV9MZWZ0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1fTGVmdC5qc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBfTGVmdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpYmxlIDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcCA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA6IDAuNztcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYWRkVG9kbzpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDogMTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhZGRUb2RvXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi6rOE7ZqNIOy2lOqwgO2VmOq4sFwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3Blbk1vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tBd2F5PXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj7qs4Ttmo0g7LaU6rCA7ZWY6riwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1fTGVmdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PuuLq+q4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Popup_Left.js */",
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
          lineNumber: 61
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
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-829210313",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-829210313" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\uACC4\uD68D \uCD94\uAC00\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
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
          lineNumber: 72
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
    _this.state = {
      checkboxState: true
    };
    return _this;
  }

  _createClass(Onclick, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      var checkboxState = this.state.checkboxState;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/check', {
        checkboxState: checkboxState
      }).then(function (result) {});
    }
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
          lineNumber: 36
        },
        __self: this
      }, this.state.checkboxState ? '미완료' : '완료!'));
      var checkbox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        style: BoxStyle,
        onClick: this.toggle.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, checkbox, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "(\uBBF8)\uC644\uB8CC\uC0C1\uD0DC \uC800\uC7A5")), checkedOrNot);
    }
  }]);

  return Onclick;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Onclick);

/***/ }),

/***/ "./components/repairtodo.js":
/*!**********************************!*\
  !*** ./components/repairtodo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepairButon; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-modal */ "react-awesome-modal");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Form_Left_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form_Left.js */ "./components/Form_Left.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\repairtodo.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RepairButon =
/*#__PURE__*/
function (_Component) {
  _inherits(RepairButon, _Component);

  function RepairButon(props) {
    var _this;

    _classCallCheck(this, RepairButon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepairButon).call(this, props));
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(RepairButon, [{
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
        className: "jsx-326589678",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "326589678",
        css: ".addTodo.jsx-326589678{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}.addTodo.jsx-326589678:hover{opacity :0.7;}.title.jsx-326589678{margin-left :10px;}.close.jsx-326589678{margin-left :10px;margin-bottom :10px;-webkit-text-decoration :none;text-decoration :none;color :red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXHJlcGFpcnRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIwQixBQUc2QixBQVlDLEFBSUssQUFJQSxZQW5CTCxDQVlmLEtBSUEsQUFJc0IsT0FuQkosYUFvQk0sR0FuQlQsYUFDSSxpQkFDRSxtQkFDTCxBQWlCSCxXQUNiLG1FQWpCeUIsaUZBQ0gsaUdBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXHJlcGFpcnRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYXdlc29tZS1tb2RhbCc7XHJcbmltcG9ydCBGb3JtX0xlZnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybV9MZWZ0LmpzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBhaXJCdXRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpYmxlIDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWRkVG9kb1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuyImOyglVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3Blbk1vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tBd2F5PXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj7qs4Ttmo0g7IiY7KCV7ZWY6riwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1fTGVmdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PuuLq+q4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\repairtodo.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "button",
        value: "\uC218\uC815",
        onClick: function onClick() {
          return _this2.openModal();
        },
        className: "jsx-326589678" + " " + "addTodo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
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
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-326589678",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-326589678" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\uACC4\uD68D \uC218\uC815\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return _this2.closeModal();
        },
        className: "jsx-326589678" + " " + "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\uB2EB\uAE30"))));
    }
  }]);

  return RepairButon;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



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
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_Left_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/seventodo.js":
/*!****************************!*\
  !*** ./pages/seventodo.js ***!
  \****************************/
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
/* harmony import */ var _components_onclick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/onclick.js */ "./components/onclick.js");
/* harmony import */ var _components_repairtodo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/repairtodo.js */ "./components/repairtodo.js");

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js";



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
  height: '250px'
};

var SevenTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SevenTodo, _React$Component);

  function SevenTodo() {
    _classCallCheck(this, SevenTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(SevenTodo).apply(this, arguments));
  }

  _createClass(SevenTodo, [{
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

        while (i < 8) {
          start = start.concat(select_After_Nthday_Todo_Id(todos, i));
          i = i + 1;
        }

        return start;
      }

      function make_Seven_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < sortingTodoId().length) {
          todo.push(todos[sortingTodoId()[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var seven_todo = make_Seven_Todo_List();
      console.log(seven_todo);
      var todoList = seven_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          className: "jsx-339880554" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "339880554",
          css: ".list.jsx-339880554:hover{background-color :#f2f2f2;}.remove.jsx-339880554{margin-left :90%;margin-bottom :10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzZXZlbnRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZvQixBQUd1QyxBQUlULGlCQUNHLFNBSnRCLFdBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHNldmVudG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBPbmNsaWNrIGZyb20gXCIuLi9jb21wb25lbnRzL29uY2xpY2suanNcIlxyXG5pbXBvcnQgUmVwYWlyYnV0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwYWlydG9kby5qc1wiXHJcblxyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnNvbGUubG9nKHRvZGF5KVxyXG5cclxuY29uc3QgZGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxyXG5jb25zb2xlLmxvZyhkYXRlKVxyXG5cclxuY29uc3QgeWVhciA9IE51bWJlcihkYXRlLnN1YnN0cmluZygwLDQpKVxyXG5cclxuY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSlcclxuXHJcbmNvbnN0IGRheSA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg4LDEwKSlcclxuXHJcblxyXG5jb25zdCBUb2RvX1N0eWxlID0ge1xyXG4gIGJvcmRlclRvcCA6ICdncm9vdmUgMXB4JyxcclxuICBwYWRkaW5nIDogJzJweCcsXHJcbiAgbWFyZ2luIDogJzNweCAwcHgnLFxyXG4gIGhlaWdodCA6ICcyNTBweCcsXHJcbn1cclxuXHJcblxyXG5jbGFzcyBTZXZlblRvZG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xpc3QnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2RvcyA6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9kb3MgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG4pe1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgIHdoaWxlKGkgPCB0b2Rvcy5sZW5ndGgpe1xyXG4gICAgICAgIGlmKHRvZG9zW2ldLmRheSA9PT0gZGF5K24pe1xyXG4gICAgICAgICAgbGlzdC5wdXNoKHRvZG9zW2ldLmlkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRpbmdUb2RvSWQoKXtcclxuICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICB2YXIgc3RhcnQgPSBzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCAwKVxyXG4gICAgICB3aGlsZShpIDwgOCl7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgaSkpXHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGFydDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZV9TZXZlbl9Ub2RvX0xpc3QoKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgdG9kbyA9IFtdO1xyXG4gICAgICB3aGlsZShpIDwgc29ydGluZ1RvZG9JZCgpLmxlbmd0aCl7XHJcbiAgICAgICAgdG9kby5wdXNoKHRvZG9zW3NvcnRpbmdUb2RvSWQoKVtpXS0xXSk7XHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzZXZlbl90b2RvID0gbWFrZV9TZXZlbl9Ub2RvX0xpc3QoKVxyXG4gICAgY29uc29sZS5sb2coc2V2ZW5fdG9kbylcclxuXHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBzZXZlbl90b2RvLm1hcChcclxuICAgICAgICB0b2RvID0+XHJcblxyXG5cclxuICAgICAgICA8bGkgc3R5bGU9e1RvZG9fU3R5bGV9IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxMnB4JywgcGFkZGluZ0JvdHRvbSA6ICc1cHgnLCBjb2xvciA6ICcjOTk5Jyx9fT57dG9kby55ZWFyfS97dG9kby5tb250aH0ve3RvZG8uZGF5fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e3RvZG8udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxM3B4J319Pi17dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZVwiPuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgIDxSZXBhaXJidXRvbiAvPlxyXG4gICAgICAgIDxPbmNsaWNrIC8+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICApXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXZlblRvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          className: "jsx-339880554" + " " + "remove",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairtodo_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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

  return SevenTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SevenTodo);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/seventodo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/seventodo.js */"./pages/seventodo.js");


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
//# sourceMappingURL=seventodo.js.map