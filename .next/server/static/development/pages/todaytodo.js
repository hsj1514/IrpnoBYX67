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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form_Add.js":
/*!********************************!*\
  !*** ./components/Form_Add.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Form_Add.js";

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

var Form_Add =
/*#__PURE__*/
function (_Component) {
  _inherits(Form_Add, _Component);

  function Form_Add() {
    var _this;

    _classCallCheck(this, Form_Add);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form_Add).call(this));

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
      console.log(_this.state);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/add', {
        title: title,
        description: description,
        year: year,
        month: month,
        day: day
      }); // .then((result) => {
      // });
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

  _createClass(Form_Add, [{
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
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\uACC4\uD68D \uC124\uBA85(\uC0DD\uB7B5\uAC00\uB2A5) : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "description",
        value: description,
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
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
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\uC81C\uCD9C\uD558\uAE30"));
    }
  }]);

  return Form_Add;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form_Add);

/***/ }),

/***/ "./components/Form_Repair.js":
/*!***********************************!*\
  !*** ./components/Form_Repair.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Form_Repair.js";

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

var Form_Repair =
/*#__PURE__*/
function (_Component) {
  _inherits(Form_Repair, _Component);

  function Form_Repair() {
    var _this;

    _classCallCheck(this, Form_Repair);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form_Repair).call(this));

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

  _createClass(Form_Repair, [{
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

  return Form_Repair;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form_Repair);

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
/* harmony import */ var _components_Form_Add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form_Add.js */ "./components/Form_Add.js");
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
        css: ".addTodo.jsx-829210313{width :200px;color :red;font-size :20px;padding :5px;margin-top :20px;margin-left :10px;margin-right :10px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.7;}.addTodo.jsx-829210313:hover{opacity :1;}.title.jsx-829210313{margin-left :10px;}.close.jsx-829210313{margin-left :10px;margin-bottom :10px;-webkit-text-decoration :none;text-decoration :none;color :red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXFBvcHVwX0xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIwQixBQUc4QixBQWVGLEFBSU8sQUFJQSxXQVBwQixFQWZhLEtBbUJiLEFBSXNCLE1BdEJKLGNBdUJNLEVBdEJULGFBQ0ksaUJBQ0Msa0JBQ0MsRUFvQlIsV0FDYixNQXBCZ0IsOEVBQ1MsaUZBQ0gsaUdBQ1AsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxjb21wb25lbnRzXFxQb3B1cF9MZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgRm9ybV9BZGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybV9BZGQuanNcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwX0xlZnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZpc2libGUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpc2libGUgOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuYWRkVG9kbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmFkZFRvZG86aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWRkVG9kb1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuqzhO2ajSDstpTqsIDtlZjquLBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9wZW5Nb2RhbCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdD1cImZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrQXdheT17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+6rOE7ZqNIOy2lOqwgO2VmOq4sDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtX0FkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PuuLq+q4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Popup_Left.js */",
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
      }, "\uACC4\uD68D \uCD94\uAC00\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Add_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        key: checkedOrNot,
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

/***/ "./components/repairbutton.js":
/*!************************************!*\
  !*** ./components/repairbutton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepairButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-modal */ "react-awesome-modal");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Form_Repair_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form_Repair.js */ "./components/Form_Repair.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\repairbutton.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RepairButton =
/*#__PURE__*/
function (_Component) {
  _inherits(RepairButton, _Component);

  function RepairButton(props) {
    var _this;

    _classCallCheck(this, RepairButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepairButton).call(this, props));
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(RepairButton, [{
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
        css: ".addTodo.jsx-326589678{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}.addTodo.jsx-326589678:hover{opacity :0.7;}.title.jsx-326589678{margin-left :10px;}.close.jsx-326589678{margin-left :10px;margin-bottom :10px;-webkit-text-decoration :none;text-decoration :none;color :red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXHJlcGFpcmJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjBCLEFBRzZCLEFBWUMsQUFJSyxBQUlBLFlBbkJMLENBWWYsS0FJQSxBQUlzQixPQW5CSixhQW9CTSxHQW5CVCxhQUNJLGlCQUNFLG1CQUNMLEFBaUJILFdBQ2IsbUVBakJ5QixpRkFDSCxpR0FDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xccmVwYWlyYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgRm9ybV9SZXBhaXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybV9SZXBhaXIuanNcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGFpckJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZSA6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpYmxlIDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5hZGRUb2RvOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWRkVG9kb1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuyImOyglVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3Blbk1vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0PVwiZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tBd2F5PXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj7qs4Ttmo0g7IiY7KCV7ZWY6riwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1fUmVwYWlyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+64ur6riwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\repairbutton.js */",
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
      }, "\uACC4\uD68D \uC218\uC815\uD558\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Repair_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

  return RepairButton;
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

/***/ "./pages/todaytodo.js":
/*!****************************!*\
  !*** ./pages/todaytodo.js ***!
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
/* harmony import */ var _components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/repairbutton.js */ "./components/repairbutton.js");

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\todaytodo.js";



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
var date = today.toISOString().substring(0, 10);
var year = Number(date.substring(0, 4));
var month = Number(date.substring(5, 7));
var day = Number(date.substring(8, 10));
var Todo_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '250px'
};

var TodayTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodayTodo, _React$Component);

  function TodayTodo() {
    _classCallCheck(this, TodayTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodayTodo).apply(this, arguments));
  }

  _createClass(TodayTodo, [{
    key: "render",
    value: function render() {
      var todos = this.props.todos;

      function select_Today_Todo_Id(todos) {
        var i = 0;
        var list = [];

        while (i < todos.length) {
          if (todos[i].day === day) {
            list.push(todos[i].id);
          }

          i = i + 1;
        }

        return list;
      }

      function make_Today_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < select_Today_Todo_Id(todos).length) {
          todo.push(todos[select_Today_Todo_Id(todos)[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var today_todo = make_Today_Todo_List();
      console.log(today_todo);
      var todoList = today_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          key: todo.id,
          className: "jsx-625304133" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "625304133",
          css: ".list.jsx-625304133:hover{background-color :#f2f2f2;}.remove.jsx-625304133{margin-left :90%;margin-bottom :10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFx0b2RheXRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUV3QixBQUcyQyxBQUlULGlCQUNHLFNBSnRCLFdBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHRvZGF5dG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBPbmNsaWNrIGZyb20gXCIuLi9jb21wb25lbnRzL29uY2xpY2suanNcIlxyXG5pbXBvcnQgUmVwYWlyQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JlcGFpcmJ1dHRvbi5qc1wiXHJcblxyXG5cclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCBkYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXHJcblxyXG5jb25zdCB5ZWFyID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDAsNCkpXHJcblxyXG5cclxuY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSlcclxuXHJcblxyXG5jb25zdCBkYXkgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoOCwxMCkpXHJcblxyXG5cclxuY29uc3QgVG9kb19TdHlsZSA9IHtcclxuICBib3JkZXJUb3AgOiAnZ3Jvb3ZlIDFweCcsXHJcbiAgcGFkZGluZyA6ICcycHgnLFxyXG4gIG1hcmdpbiA6ICczcHggMHB4JyxcclxuICBoZWlnaHQgOiAnMjUwcHgnLFxyXG59XHJcblxyXG5cclxuY2xhc3MgVG9kYXlUb2RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9saXN0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvZG9zIDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdF9Ub2RheV9Ub2RvX0lkKHRvZG9zKXtcclxuICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgICB3aGlsZShpIDwgdG9kb3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkpe1xyXG4gICAgICAgICAgICAgIGxpc3QucHVzaCh0b2Rvc1tpXS5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VfVG9kYXlfVG9kb19MaXN0KCl7XHJcbiAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICB2YXIgdG9kbyA9IFtdO1xyXG4gICAgICAgICAgd2hpbGUoaSA8IHNlbGVjdF9Ub2RheV9Ub2RvX0lkKHRvZG9zKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0b2RvLnB1c2godG9kb3Nbc2VsZWN0X1RvZGF5X1RvZG9fSWQodG9kb3MpW2ldLTFdKTtcclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgdG9kYXlfdG9kbyA9IG1ha2VfVG9kYXlfVG9kb19MaXN0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheV90b2RvKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSB0b2RheV90b2RvLm1hcChcclxuICAgICAgICAgICAgdG9kbyA9PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxsaSBzdHlsZT17VG9kb19TdHlsZX0gY2xhc3NOYW1lPVwibGlzdFwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxMnB4JywgcGFkZGluZ0JvdHRvbSA6ICc1cHgnLCBjb2xvciA6ICcjOTk5Jyx9fT57dG9kby55ZWFyfS97dG9kby5tb250aH0ve3RvZG8uZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxM3B4J319Pi17dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZW1vdmVcIj7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPFJlcGFpckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8T25jbGljayAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGVUeXBlIDogJ25vbmUnLCBwYWRkaW5nTGVmdCA6ICcwJyx9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9BcHA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZGF5VG9kbztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\todaytodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          className: "jsx-625304133" + " " + "remove",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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

  return TodayTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodayTodo);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/todaytodo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/todaytodo.js */"./pages/todaytodo.js");


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
//# sourceMappingURL=todaytodo.js.map