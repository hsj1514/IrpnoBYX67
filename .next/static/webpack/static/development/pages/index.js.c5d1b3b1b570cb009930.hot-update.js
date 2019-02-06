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
    css: ".addProject.jsx-920546019{-webkit-text-decoration :none;text-decoration :none;color :red;font-size :20px;padding :5px;margin-top :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;opacity :0.5;}.addProject.jsx-920546019:hover{opacity :1;}.projects.jsx-920546019{color :blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5Db250ZW50c1JpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHaUMsQUFhWCxBQUlDLFdBSGQsQ0FJQSx3Q0FqQmEsV0FDSyxnQkFDSCxhQUNJLGlCQUNILDhFQUNTLGlGQUNILGlHQUNQLGFBRWYiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbkNvbnRlbnRzUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBNYWluQ29udGVudHNfUmlnaHRfU3R5bGUgPSB7XHJcbiAgZGlzcGxheSA6ICdmbGV4JyxcclxuICBmbG9hdCA6ICdyaWdodCcsXHJcbiAgZmxleERpcmVjdGlvbiA6ICdjb2x1bW4nLFxyXG4gIGFsaWduSXRlbXM6ICdsZWZ0JyxcclxuICBoZWlnaHQgOiAnMTAwJScsXHJcbiAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gIHdpZHRoIDogJzQ5JScsXHJcbiAgYm9yZGVyIDogJ2dyb292ZSAxcHgnLFxyXG59XHJcblxyXG5jb25zdCBUaXRsZV9SaWdodF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRfUmlnaHRfU3R5bGUgPSB7XHJcbiAgbWFyZ2luVG9wIDogJzIwcHgnLFxyXG4gIG1hcmdpbkxlZnQgOiAnMTBweCcsXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkNvbnRlbnRzX1JpZ2h0KCl7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbJ1Byb2plY3QgMScgLCAnUHJvamVjdCAyJyAsICdQcm9qZWN0IDMnICwgJ1Byb2plY3QgNCcgLCAnUHJvamVjdCA1JyAsICdQcm9qZWN0IDYnXVxyXG4gIHZhciBsaXN0ID0gJzx1bD4nO1xyXG4gIHZhciBpID0gMDtcclxuICB3aGlsZShpIDwgcHJvamVjdHMubGVuZ3RoKXtcclxuICAgIGxpc3QgPSBsaXN0ICsgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XCI+PGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNzsgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTsgZm9udC1zaXplIDogMjBweDsgY29sb3IgOiBibGFjazsgcGFkZGluZyA6IDVweDsgYm9yZGVyLXJhZGl1cyA6IDJweDtcIiBjbGFzcz1cInByb2plY3RzXCIgaHJlZj1cIi9pZD0ke3Byb2plY3RzW2ldfVwiPiR7cHJvamVjdHNbaV19PC9hPjwvbGk+PGJyPjxicj5gO1xyXG4gICAgaSA9IGkgKyAxO1xyXG4gIH1cclxuICBsaXN0ID0gbGlzdCsnPC91bD4nO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgc3R5bGU9e01haW5Db250ZW50c19SaWdodF9TdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfcmlnaHRcIiBzdHlsZT17VGl0bGVfUmlnaHRfU3R5bGV9PlxyXG4gICAgICAgIO2UhOuhnOygne2KuFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYWRkUHJvamVjdCB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi10b3AgOiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDAuNTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkUHJvamVjdDpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgICBjb2xvciA6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFkZFByb2plY3RcIj4rKSDtlITroZzsoJ3tirgg7LaU6rCA7ZWY6riwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfcmlnaHRcIiBzdHlsZT17Q29udGVudF9SaWdodF9TdHlsZX0+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtfX2h0bWw6IGxpc3R9IH0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnRzX1JpZ2h0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\MainContentsRight.js */",
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
//# sourceMappingURL=index.js.c5d1b3b1b570cb009930.hot-update.js.map