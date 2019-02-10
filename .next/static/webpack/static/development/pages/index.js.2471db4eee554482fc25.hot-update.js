webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form_Left.js":
/*!*********************************!*\
  !*** ./components/Form_Left.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Form_Left.js";

var Form_Style = {
  marginLeft: '10px',
  paddingBottom: '150px'
};

function Form_Left() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    style: Form_Style,
    action: "/create_process",
    method: "post",
    class: "addStudentForm",
    id: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\xA0\uACFC\uBAA9\uBA85\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "subject",
    placeholder: "ex) \uBB3C\uB9AC",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), "\xA0\uC218\uC5C5\uB8CC(\uB2E8\uC704 : \uB9CC)\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    class: "inputTuition",
    type: "number",
    name: "tuition",
    placeholder: "\uC22B\uC790\uB9CC \uC785\uB825",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    class: "complete-button",
    type: "submit",
    value: "\uC644\uB8CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Form_Left);

/***/ }),

/***/ "./components/Form_Right.js":
/*!**********************************!*\
  !*** ./components/Form_Right.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Form_Right.js";

var Form_Style = {
  marginLeft: '10px',
  paddingBottom: '150px'
};

function Form_Right() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    style: Form_Style,
    action: "/create_process",
    method: "post",
    class: "addStudentForm",
    id: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\xA0\uACFC\uBAA9\uBA85\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "subject",
    placeholder: "ex) \uBB3C\uB9AC",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), "\xA0\uC218\uC5C5\uB8CC(\uB2E8\uC704 : \uB9CC)\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    class: "inputTuition",
    type: "number",
    name: "tuition",
    placeholder: "\uC22B\uC790\uB9CC \uC785\uB825",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    class: "complete-button",
    type: "submit",
    value: "\uC644\uB8CC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Form_Right);

/***/ }),

/***/ "./components/Main_Left_Layout.js":
/*!****************************************!*\
  !*** ./components/Main_Left_Layout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2421616147",
    css: ".today.jsx-2421616147:hover{background-color :#999;}.today.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2421616147:hover{background-color :#999;}.sevendays.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fTGVmdF9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxnQkFiTSxBQWNBLE9BbEJ4QixBQWNBLDZDQVRlLEFBY0EsYUFiYSxBQWNBLDBCQWJQLEFBY0EsbUJBYk4sQUFjQSxhQWJJLEFBY0EsaUJBYm5CLEFBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbl9MZWZ0X0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvcHVwX0xlZnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBfTGVmdC5qc1wiXHJcblxyXG5cclxuY29uc3QgTWFpbl9MZWZ0X0xheW91dF9TdHlsZSA9IHtcclxuICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICBmbG9hdCA6ICdsZWZ0JyxcclxuICAgIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXMgOiAnbGVmdCcsXHJcbiAgICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgICBtaW5IZWlnaHQgOiAnY2FsYygxMDB2aCAtIDEwMHB4KScsXHJcbiAgICB3aWR0aCA6ICc0OSUnLFxyXG4gICAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9MZWZ0X1N0eWxlID0ge1xyXG4gIHRleHRBbGlnbiA6ICdjZW50ZXInLFxyXG4gIHBhZGRpbmcgOiAnMTVweCAwcHgnLFxyXG4gIGJhY2tncm91bmRDb2xvciA6ICcjOTk5JyxcclxufVxyXG5cclxuY29uc3QgVHJhbnNwYXJlbnQgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzM1cHgnLFxyXG4gIG1hcmdpbkJvdHRvbSA6ICcyMHB4JyxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5fTGVmdF9MYXlvdXQocHJvcHMpe1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5fTGVmdF9MYXlvdXRfU3R5bGV9PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAudG9kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjOTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kYXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNldmVuZGF5czpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICM5OTk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXZlbmRheXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjdmN2Y3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAycHg7XHJcbiAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICBtYXJnaW4gOiAwcHggMTVweDtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX2xlZnRcIiBzdHlsZT17VGl0bGVfTGVmdF9TdHlsZX0+XHJcbiAgICAgICAg7J287IOBXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFBvcHVwX0xlZnQgLz5cclxuXHJcblxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17VHJhbnNwYXJlbnR9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0b2RheVwiPuyYpOuKmDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNldmVuZGF5c1wiPuyVnuycvOuhnOydmCA37J28PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbl9MZWZ0X0xheW91dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js */",
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
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\uC55E\uC73C\uB85C\uC758 7\uC77C"))), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Layout);

/***/ })

})
//# sourceMappingURL=index.js.2471db4eee554482fc25.hot-update.js.map