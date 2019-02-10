webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Main_Left_Content.js":
/*!*****************************************!*\
  !*** ./components/Main_Left_Content.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Content.js";

 // import fetch from 'isomorphic-unfetch'

var Main_Left_Content_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '150px' // Main_Left_Content.getInitialProps = async function() {
  //   const res = await fetch('http://localhost:5000/list')
  //   const data = await res.json()
  //   console.log(data)
  //
  //   return {
  //     shows: data
  //   }
  // }

};

function Main_Left_Content() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:5000/list_title').then(function (response) {
    var title = response.data; // console.log(response)

    console.log(title[2]);
    console.log(title[2].title);
    console.log(title[2].description); // console.log(title[0])
    // console.log(title[1])
    // console.log(title[2])
    // console.log(title[3])
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Main_Left_Content_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uC624\uB298 4\uC6D4 26\uC77C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uD559\uC6D0 \uAC00\uAE30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Main_Left_Content_Style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingBottom: '10px',
      fontSize: '12px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\uBAA9\uC694\uC77C 5\uC6D4 15\uC77C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\uBC25 \uBA39\uAE30")));
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Content);

/***/ })

})
//# sourceMappingURL=index.js.883c38e93878ec86e095.hot-update.js.map