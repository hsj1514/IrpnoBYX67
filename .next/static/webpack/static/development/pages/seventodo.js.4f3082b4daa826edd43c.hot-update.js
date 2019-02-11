webpackHotUpdate("static\\development\\pages\\seventodo.js",{

/***/ "./pages/seventodo.js":
/*!****************************!*\
  !*** ./pages/seventodo.js ***!
  \****************************/
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

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js";



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
  height: '150px'
};

var SevenTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SevenTodo, _React$Component);

  function SevenTodo() {
    _classCallCheck(this, SevenTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(SevenTodo).apply(this, arguments));
  }

  _createClass(SevenTodo, [{
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

        while (i < 8) {
          start = start.concat(select_After_Nthday_Todo_Id(todos, i));
          i = i + 1;
        }

        return start;
      }

      function make_Seven_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < sortingTodoId().length) {
          todo.push(todos[sortingTodoId()[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var seven_todo = make_Seven_Todo_List();
      console.log(seven_todo);
      var todoList = seven_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          className: "jsx-3225569295" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "3225569295",
          css: ".list.jsx-3225569295:hover{background-color :#f2f2f2;}div.jsx-3225569295{border :solid 1px;}span.jsx-3225569295{border :solid 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzZXZlbnRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZvQixBQUd1QyxBQUlSLEFBSUEsa0JBSHBCLEFBSUEsUUFSQSIsImZpbGUiOiJDOlxcVXNlcnNcXOyKueyjvFxcRGVza3RvcFxcbmV4dGpzXFxwYWdlc1xcc2V2ZW50b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vcGFnZXMvQXBwLmpzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnNvbGUubG9nKHRvZGF5KVxyXG5cclxuY29uc3QgZGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxyXG5jb25zb2xlLmxvZyhkYXRlKVxyXG5cclxuY29uc3QgeWVhciA9IE51bWJlcihkYXRlLnN1YnN0cmluZygwLDQpKVxyXG5cclxuY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSlcclxuXHJcbmNvbnN0IGRheSA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg4LDEwKSlcclxuXHJcblxyXG5jb25zdCBUb2RvX1N0eWxlID0ge1xyXG4gIGJvcmRlclRvcCA6ICdncm9vdmUgMXB4JyxcclxuICBwYWRkaW5nIDogJzJweCcsXHJcbiAgbWFyZ2luIDogJzNweCAwcHgnLFxyXG4gIGhlaWdodCA6ICcxNTBweCcsXHJcbn1cclxuXHJcblxyXG5jbGFzcyBTZXZlblRvZG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xpc3QnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2RvcyA6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9kb3MgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG4pe1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgIHdoaWxlKGkgPCB0b2Rvcy5sZW5ndGgpe1xyXG4gICAgICAgIGlmKHRvZG9zW2ldLmRheSA9PT0gZGF5K24pe1xyXG4gICAgICAgICAgbGlzdC5wdXNoKHRvZG9zW2ldLmlkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRpbmdUb2RvSWQoKXtcclxuICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICB2YXIgc3RhcnQgPSBzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCAwKVxyXG4gICAgICB3aGlsZShpIDwgOCl7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgaSkpXHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGFydDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZV9TZXZlbl9Ub2RvX0xpc3QoKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgdG9kbyA9IFtdO1xyXG4gICAgICB3aGlsZShpIDwgc29ydGluZ1RvZG9JZCgpLmxlbmd0aCl7XHJcbiAgICAgICAgdG9kby5wdXNoKHRvZG9zW3NvcnRpbmdUb2RvSWQoKVtpXS0xXSk7XHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2V2ZW5fdG9kbyA9IG1ha2VfU2V2ZW5fVG9kb19MaXN0KClcclxuICAgIGNvbnNvbGUubG9nKHNldmVuX3RvZG8pXHJcblxyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gc2V2ZW5fdG9kby5tYXAoXHJcbiAgICAgICAgdG9kbyA9PlxyXG5cclxuXHJcbiAgICAgICAgPGxpIHN0eWxlPXtUb2RvX1N0eWxlfSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBib3JkZXIgOiBzb2xpZCAxcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlciA6IHNvbGlkIDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEycHgnLCBwYWRkaW5nQm90dG9tIDogJzVweCcsIGNvbG9yIDogJyM5OTknLH19Pnt0b2RvLnllYXJ9L3t0b2RvLm1vbnRofS97dG9kby5kYXl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57dG9kby50aXRsZX08L2Rpdj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEzcHgnfX0+LXt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxzcGFuPuyCreygnOuyhO2KvDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGUgOiAnbm9uZScsIHBhZGRpbmdMZWZ0IDogJzAnLH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICB7dG9kb0xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQXBwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V2ZW5Ub2RvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-3225569295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-3225569295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-3225569295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-3225569295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "jsx-3225569295",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "\uC0AD\uC81C\uBC84\uD2BC"));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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

  return SevenTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SevenTodo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/seventodo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=seventodo.js.4f3082b4daa826edd43c.hot-update.js.map