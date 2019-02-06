webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MainContentsRight.js":
/*!*****************************************!*\
  !*** ./components/MainContentsRight.js ***!
  \*****************************************/
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
    list = list + "<li style=\"list-style-type : none;\"><a style=\"background-color : #f7f7f7; text-decoration : none; font-size : 30px; color : black; padding : 5px; border-radius : 2px;\" class=\"projects\" href=\"/id=".concat(projects[i], "\">").concat(projects[i], "</a></li><br><br>");
    i = i + 1;
  }

  list = list + '</ul>';
  console.log(list);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: MainContents_Right_Style,
    className: "jsx-3106214966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Right_Style,
    className: "jsx-3106214966" + " " + "title_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\uD504\uB85C\uC81D\uD2B8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3106214966",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbkNvbnRlbnRzUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBNYWluQ29udGVudHNfUmlnaHRfU3R5bGUgPSB7XHJcbiAgZGlzcGxheSA6ICdmbGV4JyxcclxuICBmbG9hdCA6ICdyaWdodCcsXHJcbiAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gIGFsaWduSXRlbXM6ICdsZWZ0JyxcclxuICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gIHdpZHRoIDogJzQ5JScsXHJcbiAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9SaWdodF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRfUmlnaHRfU3R5bGUgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzIwcHgnLFxyXG4gIG1hcmdpbkxlZnQgOiAnMTBweCcsXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkNvbnRlbnRzX1JpZ2h0KCl7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbJ1Byb2plY3QgMScgLCAnUHJvamVjdCAyJyAsICdQcm9qZWN0IDMnICwgJ1Byb2plY3QgNCcgLCAnUHJvamVjdCA1JyAsICdQcm9qZWN0IDYnXVxyXG4gIHZhciBsaXN0ID0gJzx1bD4nO1xyXG4gIHZhciBpID0gMDtcclxuICB3aGlsZShpIDwgcHJvamVjdHMubGVuZ3RoKXtcclxuICAgIGxpc3QgPSBsaXN0ICsgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XCI+PGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNzsgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTsgZm9udC1zaXplIDogMzBweDsgY29sb3IgOiBibGFjazsgcGFkZGluZyA6IDVweDsgYm9yZGVyLXJhZGl1cyA6IDJweDtcIiBjbGFzcz1cInByb2plY3RzXCIgaHJlZj1cIi9pZD0ke3Byb2plY3RzW2ldfVwiPiR7cHJvamVjdHNbaV19PC9hPjwvbGk+PGJyPjxicj5gO1xyXG4gICAgaSA9IGkgKyAxO1xyXG4gIH1cclxuICBsaXN0ID0gbGlzdCsnPC91bD4nO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5Db250ZW50c19SaWdodF9TdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfcmlnaHRcIiBzdHlsZT17VGl0bGVfUmlnaHRfU3R5bGV9PlxyXG4gICAgICAgIO2UhOuhnOygne2KuFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRQcm9qZWN0XCI+Kykg7ZSE66Gc7KCd7Yq4IOy2lOqwgO2VmOq4sDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X3JpZ2h0XCIgc3R5bGU9e0NvbnRlbnRfUmlnaHRfU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7X19odG1sOiBsaXN0fSB9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnRzX1JpZ2h0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3106214966" + " " + "addProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "+) \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Content_Right_Style,
    className: "jsx-3106214966" + " " + "content_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: list
    },
    className: "jsx-3106214966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MainContents_Right);

/***/ })

})
//# sourceMappingURL=index.js.c18e69f914510d2d96be.hot-update.js.map