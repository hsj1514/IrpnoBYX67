webpackHotUpdate("static\\development\\pages\\alltodo.js",{

/***/ "./pages/alltodo.js":
/*!**************************!*\
  !*** ./pages/alltodo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/App.js */ "./pages/App.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\alltodo.js";



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
console.log(today);
var date = today.toISOString().substring(0, 10);
console.log(date);
var year = Number(date.substring(0, 4));
var month = Number(date.substring(5, 7));
var day = Number(date.substring(8, 10));
var Todo_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '150px' //--------------------------------------------
  //--------------------------------------------

};

var AllTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllTodo, _React$Component);

  function AllTodo() {
    _classCallCheck(this, AllTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(AllTodo).apply(this, arguments));
  }

  _createClass(AllTodo, [{
    key: "render",
    value: function render() {
      var todos = this.props.todos;

      function select_After_Nthday_Todo_Id(todos, n) {
        var i = 0;
        var list = [];

        while (i < todos.length) {
          if (todos[i].day === day + n) {
            list.push(todos[i].id);
          }

          i = i + 1;
        }

        return list;
      }

      function sortingTodoId() {
        var i = 1;
        var start = select_After_Nthday_Todo_Id(todos, 0);

        while (i < 36500) {
          start = start.concat(select_After_Nthday_Todo_Id(todos, i));
          i = i + 1;
        }

        return start;
      }

      console.log(sortingTodoId());

      function make_All_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < sortingTodoId().length) {
          todo.push(todos[sortingTodoId()[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var all_todo = make_All_Todo_List();
      console.log(all_todo);
      var todoList = all_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          className: "jsx-3683035372" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "3683035372",
          css: ".list.jsx-3683035372:hover{background-color :#f2f2f2;}div.jsx-3683035372{border :solid 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxhbGx0b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHdUMsQUFHUixrQkFDcEIsUUFIQSIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxwYWdlc1xcYWxsdG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5jb25zb2xlLmxvZyh0b2RheSlcclxuXHJcbmNvbnN0IGRhdGUgPSB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcclxuY29uc29sZS5sb2coZGF0ZSlcclxuXHJcbmNvbnN0IHllYXIgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoMCw0KSlcclxuXHJcbmNvbnN0IG1vbnRoID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDUsNykpXHJcblxyXG5jb25zdCBkYXkgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoOCwxMCkpXHJcblxyXG5cclxuY29uc3QgVG9kb19TdHlsZSA9IHtcclxuICBib3JkZXJUb3AgOiAnZ3Jvb3ZlIDFweCcsXHJcbiAgcGFkZGluZyA6ICcycHgnLFxyXG4gIG1hcmdpbiA6ICczcHggMHB4JyxcclxuICBoZWlnaHQgOiAnMTUwcHgnLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgQWxsVG9kbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbGlzdCcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvZG9zIDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbil7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkrbil7XHJcbiAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc29ydGluZ1RvZG9JZCgpe1xyXG4gICAgICB2YXIgaSA9IDE7XHJcbiAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIDApXHJcbiAgICAgIHdoaWxlKGkgPCAzNjUwMCl7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgaSkpXHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzb3J0aW5nVG9kb0lkKCkpXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlX0FsbF9Ub2RvX0xpc3QoKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgdG9kbyA9IFtdO1xyXG4gICAgICB3aGlsZShpIDwgc29ydGluZ1RvZG9JZCgpLmxlbmd0aCl7XHJcbiAgICAgICAgdG9kby5wdXNoKHRvZG9zW3NvcnRpbmdUb2RvSWQoKVtpXS0xXSk7XHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgYWxsX3RvZG8gPSBtYWtlX0FsbF9Ub2RvX0xpc3QoKVxyXG4gICAgY29uc29sZS5sb2coYWxsX3RvZG8pXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGFsbF90b2RvLm1hcChcclxuICAgICAgICB0b2RvID0+XHJcblxyXG5cclxuICAgICAgICA8bGkgc3R5bGU9e1RvZG9fU3R5bGV9IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyIDogc29saWQgMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTJweCcsIHBhZGRpbmdCb3R0b20gOiAnNXB4JywgY29sb3IgOiAnIzk5OScsfX0+e3RvZG8ueWVhcn0ve3RvZG8ubW9udGh9L3t0b2RvLmRheX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTNweCd9fT4te3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGUgOiAnbm9uZScsIHBhZGRpbmdMZWZ0IDogJzAnLH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAge3RvZG9MaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQXBwPlxyXG5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbFRvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\alltodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-3683035372",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
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

  return AllTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllTodo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/alltodo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=alltodo.js.22cf2f469fad0bc3521e.hot-update.js.map