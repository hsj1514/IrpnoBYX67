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

/***/ })

})
//# sourceMappingURL=index.js.f414c9b93588c17a3dc0.hot-update.js.map