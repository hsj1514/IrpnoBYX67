webpackHotUpdate("static\\development\\pages\\todaytodo.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-modal */ "./node_modules/react-awesome-modal/lib/index.js");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
    css: ".logo.jsx-1645265260{font-size :30px;margin-left :15px;-webkit-text-decoration :none;text-decoration :none;color :black;}.logo.jsx-1645265260:hover{opacity :0.5;}.achievement.jsx-1645265260{font-size :15px;margin-left :20%;-webkit-text-decoration :none;text-decoration :none;color :black;}.achievement.jsx-1645265260:hover{opacity :0.5;}.reset.jsx-1645265260{font-size :15px;margin-left :40%;-webkit-text-decoration :none;text-decoration :none;color :black;}.reset.jsx-1645265260:hover{opacity :0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBR3lCLEFBT0gsQUFJRyxBQU9ILEFBSUcsQUFPSCxhQXJCZixBQVdBLEFBV0EsR0E3Qm9CLEFBV0QsQUFXQSxpQkFWSyxBQVdBLENBdEJBLG1EQVlULEFBV0EsQ0F0QkEsWUFZZixBQVdBLENBdEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWF3ZXNvbWUtbW9kYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlcl9TdHlsZSA9IHtcclxuICAgIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbiAgICBoZWlnaHQgOiAnODBweCcsXHJcbiAgICBtaW5XaWR0aCA6ICc2MDBweCcsXHJcbiAgICBtYXJnaW5Cb3R0b20gOiAnMjBweCcsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKXtcclxuICByZXR1cm4oXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiIHN0eWxlPXtIZWFkZXJfU3R5bGV9PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgOiAxNXB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ286aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2hpZXZlbWVudCB7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdCA6IDIwJTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY2hpZXZlbWVudDpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eSA6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc2V0IHtcclxuICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogNDAlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc2V0OmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5IDogMC41O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIj5Ub2RvIEFwcGxpY2F0aW9uPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3N1Y2Nlc3N0b2RvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGFjaGlldmVtZW50XCIgPuyZhOujjOuqqeuhnSDrs7TquLA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZGVsZXRlYWxsXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZXRcIj7qs4Ttmo0g7LSI6riw7ZmUPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Header.js */",
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
    href: "/successtodo",
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

/***/ })

})
//# sourceMappingURL=todaytodo.js.8f8d6ec24d7d8b7abad8.hot-update.js.map