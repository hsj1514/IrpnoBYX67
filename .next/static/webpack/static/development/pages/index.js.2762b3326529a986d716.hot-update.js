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
    list = list + "<li style=\"list-style-type : none;\"><a style=\"background-color : #f7f7f7; text-decoration : none; font-size : 20px; color : black; padding : 5px; border-radius : 2px;\" class=\"projects\" hover=\"opacity : 0.3;\" href=\"/id=".concat(projects[i], "\">").concat(projects[i], "</a></li><br><br>");
    i = i + 1;
  }

  list = list + '</ul>';
  console.log(list);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: MainContents_Right_Style,
    className: "jsx-920546019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Right_Style,
    className: "jsx-920546019" + " " + "title_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\uD504\uB85C\uC81D\uD2B8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "920546019",
    css: ".addProject.jsx-920546019{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addProject.jsx-920546019:hover{opacity :1;}.projects.jsx-920546019{color :blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHaUMsQUFhWCxBQUlDLFdBSGQsQ0FJQSx3Q0FqQmEsV0FDSyxnQkFDSCxhQUNJLGlCQUNILDhFQUNTLGlGQUNILGlHQUNQLGFBRWYiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbkNvbnRlbnRzUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBNYWluQ29udGVudHNfUmlnaHRfU3R5bGUgPSB7XHJcbiAgZGlzcGxheSA6ICdmbGV4JyxcclxuICBmbG9hdCA6ICdyaWdodCcsXHJcbiAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gIGFsaWduSXRlbXM6ICdsZWZ0JyxcclxuICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gIHdpZHRoIDogJzQ5JScsXHJcbiAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9SaWdodF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRfUmlnaHRfU3R5bGUgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzIwcHgnLFxyXG4gIG1hcmdpbkxlZnQgOiAnMTBweCcsXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkNvbnRlbnRzX1JpZ2h0KCl7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbJ1Byb2plY3QgMScgLCAnUHJvamVjdCAyJyAsICdQcm9qZWN0IDMnICwgJ1Byb2plY3QgNCcgLCAnUHJvamVjdCA1JyAsICdQcm9qZWN0IDYnXVxyXG4gIHZhciBsaXN0ID0gJzx1bD4nO1xyXG4gIHZhciBpID0gMDtcclxuICB3aGlsZShpIDwgcHJvamVjdHMubGVuZ3RoKXtcclxuICAgIGxpc3QgPSBsaXN0ICsgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XCI+PGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNzsgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTsgZm9udC1zaXplIDogMjBweDsgY29sb3IgOiBibGFjazsgcGFkZGluZyA6IDVweDsgYm9yZGVyLXJhZGl1cyA6IDJweDtcIiBjbGFzcz1cInByb2plY3RzXCIgaG92ZXI9XCJvcGFjaXR5IDogMC4zO1wiIGhyZWY9XCIvaWQ9JHtwcm9qZWN0c1tpXX1cIj4ke3Byb2plY3RzW2ldfTwvYT48L2xpPjxicj48YnI+YDtcclxuICAgIGkgPSBpICsgMTtcclxuICB9XHJcbiAgbGlzdCA9IGxpc3QrJzwvdWw+JztcclxuICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXtNYWluQ29udGVudHNfUmlnaHRfU3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlX3JpZ2h0XCIgc3R5bGU9e1RpdGxlX1JpZ2h0X1N0eWxlfT5cclxuICAgICAgICDtlITroZzsoJ3tirhcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFkZFByb2plY3Qge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgZm9udC1zaXplIDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wIDogMjBweDtcclxuICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZFByb2plY3Q6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdHMge1xyXG4gICAgICAgICAgY29sb3IgOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRQcm9qZWN0XCI+Kykg7ZSE66Gc7KCd7Yq4IOy2lOqwgO2VmOq4sDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X3JpZ2h0XCIgc3R5bGU9e0NvbnRlbnRfUmlnaHRfU3R5bGV9PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7X19odG1sOiBsaXN0fSB9PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50c19SaWdodFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-920546019" + " " + "addProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "+) \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00\uD558\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Content_Right_Style,
    className: "jsx-920546019" + " " + "content_right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: list
    },
    className: "jsx-920546019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MainContents_Right);

/***/ })

})
//# sourceMappingURL=index.js.2762b3326529a986d716.hot-update.js.map