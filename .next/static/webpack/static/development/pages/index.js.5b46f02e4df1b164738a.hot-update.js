webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./db/mysql.js":
/*!*********************!*\
  !*** ./db/mysql.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import mysql from "mysql"
//
// const Mysql = () => (
//   require('mysql')
// )
//
// const Connection = () => (
//   Mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '111111',
//     database : 'basic'
//   })
// )
//
//
// Connection.connect();
//
// Connection.query('SELECT * FROM topic', function (error, results, fields) {
//   if (error) {
//       console.log(error);
//   };
//   console.log(results);
// });
//
// Connection.end();
//
// export default Connection;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.js */ "./pages/App.js");
/* harmony import */ var _db_mysql_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/mysql.js */ "./db/mysql.js");
/* harmony import */ var _db_mysql_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_db_mysql_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\index.js";

 // import fetch from 'isomorphic-unfetch';



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_db_mysql_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}; // add the curly braces around req
// Index.getInitialProps = async function({ req }) {
//     // code
//   return {}
//
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5b46f02e4df1b164738a.hot-update.js.map