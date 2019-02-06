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
    list = list + "<li style=\"list-style-type : none;\"><a style=\"background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;\" href=\"/id=".concat(projects[i], "\">").concat(projects[i], "</a></li><br><br>");
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
    css: ".addProject.jsx-4097126910{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addProject.jsx-4097126910:hover{opacity :1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHaUMsQUFhWCxXQUNiLHlDQWJhLFdBQ0ssZ0JBQ0gsYUFDSSxpQkFDSCw4RUFDUyxpRkFDSCxpR0FDUCxhQUVmIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnRzX1JpZ2h0X1N0eWxlID0ge1xyXG4gIGRpc3BsYXkgOiAnZmxleCcsXHJcbiAgZmxvYXQgOiAncmlnaHQnLFxyXG4gIGZsZXhEaXJlY3Rpb24gOiAnY29sdW1uJyxcclxuICBhbGlnbkl0ZW1zOiAnbGVmdCcsXHJcbiAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gIG1pbkhlaWdodCA6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyxcclxuICB3aWR0aCA6ICc0OSUnLFxyXG4gIGJvcmRlciA6ICdncm9vdmUgMXB4JyxcclxufVxyXG5cclxuY29uc3QgVGl0bGVfUmlnaHRfU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgcGFkZGluZyA6ICcxNXB4IDBweCcsXHJcbiAgYmFja2dyb3VuZENvbG9yIDogJyM5OTknLFxyXG59XHJcblxyXG5jb25zdCBDb250ZW50X1JpZ2h0X1N0eWxlID0ge1xyXG4gIG1hcmdpblRvcCA6ICcyMHB4JyxcclxuICBtYXJnaW5MZWZ0IDogJzEwcHgnLFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5Db250ZW50c19SaWdodCgpe1xyXG4gIGNvbnN0IHByb2plY3RzID0gWydQcm9qZWN0IDEnICwgJ1Byb2plY3QgMicgLCAnUHJvamVjdCAzJyAsICdQcm9qZWN0IDQnICwgJ1Byb2plY3QgNScgLCAnUHJvamVjdCA2J11cclxuICB2YXIgbGlzdCA9ICc8dWw+JztcclxuICB2YXIgaSA9IDA7XHJcbiAgd2hpbGUoaSA8IHByb2plY3RzLmxlbmd0aCl7XHJcbiAgICBsaXN0ID0gbGlzdCArIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGUgOiBub25lO1wiPjxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvciA6ICNmN2Y3Zjc7IHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7IGZvbnQtc2l6ZSA6IDIwcHg7IGNvbG9yIDogYmxhY2s7IHBhZGRpbmcgOiA1cHg7IGJvcmRlci1yYWRpdXMgOiAycHg7XCIgaHJlZj1cIi9pZD0ke3Byb2plY3RzW2ldfVwiPiR7cHJvamVjdHNbaV19PC9hPjwvbGk+PGJyPjxicj5gO1xyXG4gICAgaSA9IGkgKyAxO1xyXG4gIH1cclxuICBsaXN0ID0gbGlzdCsnPC91bD4nO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5Db250ZW50c19SaWdodF9TdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfcmlnaHRcIiBzdHlsZT17VGl0bGVfUmlnaHRfU3R5bGV9PlxyXG4gICAgICAgIO2UhOuhnOygne2KuFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYWRkUHJvamVjdCB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDAuNTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkUHJvamVjdDpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkUHJvamVjdFwiPispIO2UhOuhnOygne2KuCDstpTqsIDtlZjquLA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9yaWdodFwiIHN0eWxlPXtDb250ZW50X1JpZ2h0X1N0eWxlfT5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge19faHRtbDogbGlzdH0gfT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudHNfUmlnaHRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js */",
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

/***/ })

})
//# sourceMappingURL=index.js.442baa12320a625cf47e.hot-update.js.map