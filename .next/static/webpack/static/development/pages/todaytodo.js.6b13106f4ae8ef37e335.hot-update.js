webpackHotUpdate("static\\development\\pages\\todaytodo.js",{

/***/ "./pages/todaytodo.js":
/*!****************************!*\
  !*** ./pages/todaytodo.js ***!
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
/* harmony import */ var _components_onclick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/onclick.js */ "./components/onclick.js");

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\todaytodo.js";



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
var date = today.toISOString().substring(0, 10);
var year = Number(date.substring(0, 4));
var month = Number(date.substring(5, 7));
var day = Number(date.substring(8, 10));
var Todo_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '250px'
};

var TodayTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodayTodo, _React$Component);

  function TodayTodo() {
    _classCallCheck(this, TodayTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodayTodo).apply(this, arguments));
  }

  _createClass(TodayTodo, [{
    key: "render",
    value: function render() {
      var todos = this.props.todos;

      function select_Today_Todo_Id(todos) {
        var i = 0;
        var list = [];

        while (i < todos.length) {
          if (todos[i].day === day) {
            list.push(todos[i].id);
          }

          i = i + 1;
        }

        return list;
      }

      function make_Today_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < select_Today_Todo_Id(todos).length) {
          todo.push(todos[select_Today_Todo_Id(todos)[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      var today_todo = make_Today_Todo_List();
      console.log(today_todo);
      var todoList = today_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          className: "jsx-2409550668" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2409550668",
          css: ".list.jsx-2409550668:hover{background-color :#f2f2f2;}.remove.jsx-2409550668{margin-left :90%;margin-bottom :10px;}.repair.jsx-2409550668{margin-left :90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFx0b2RheXRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V3QixBQUcyQyxBQUlULEFBS0EsaUJBSkcsQUFLdEIsU0FUQSxXQUtBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFx0b2RheXRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi9wYWdlcy9BcHAuanNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgT25jbGljayBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmNsaWNrLmpzXCJcclxuXHJcblxyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IGRhdGUgPSB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcclxuXHJcbmNvbnN0IHllYXIgPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoMCw0KSlcclxuXHJcblxyXG5jb25zdCBtb250aCA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg1LDcpKVxyXG5cclxuXHJcbmNvbnN0IGRheSA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg4LDEwKSlcclxuXHJcblxyXG5jb25zdCBUb2RvX1N0eWxlID0ge1xyXG4gIGJvcmRlclRvcCA6ICdncm9vdmUgMXB4JyxcclxuICBwYWRkaW5nIDogJzJweCcsXHJcbiAgbWFyZ2luIDogJzNweCAwcHgnLFxyXG4gIGhlaWdodCA6ICcyNTBweCcsXHJcbn1cclxuXHJcblxyXG5jbGFzcyBUb2RheVRvZG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xpc3QnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9kb3MgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRvZG9zIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0X1RvZGF5X1RvZG9fSWQodG9kb3Mpe1xyXG4gICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICAgIHdoaWxlKGkgPCB0b2Rvcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZih0b2Rvc1tpXS5kYXkgPT09IGRheSl7XHJcbiAgICAgICAgICAgICAgbGlzdC5wdXNoKHRvZG9zW2ldLmlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZV9Ub2RheV9Ub2RvX0xpc3QoKXtcclxuICAgICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAgIHZhciB0b2RvID0gW107XHJcbiAgICAgICAgICB3aGlsZShpIDwgc2VsZWN0X1RvZGF5X1RvZG9fSWQodG9kb3MpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRvZG8ucHVzaCh0b2Rvc1tzZWxlY3RfVG9kYXlfVG9kb19JZCh0b2RvcylbaV0tMV0pO1xyXG4gICAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b2RheV90b2RvID0gbWFrZV9Ub2RheV9Ub2RvX0xpc3QoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5X3RvZG8pXHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IHRvZGF5X3RvZG8ubWFwKFxyXG4gICAgICAgICAgICB0b2RvID0+XHJcblxyXG5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXtUb2RvX1N0eWxlfSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5yZXBhaXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxMnB4JywgcGFkZGluZ0JvdHRvbSA6ICc1cHgnLCBjb2xvciA6ICcjOTk5Jyx9fT57dG9kby55ZWFyfS97dG9kby5tb250aH0ve3RvZG8uZGF5fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxM3B4J319Pi17dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZW1vdmVcIj7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZXBhaXJcIj7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPE9uY2xpY2sgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kb0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheVRvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\todaytodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-2409550668",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2409550668",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2409550668",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-2409550668",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          className: "jsx-2409550668" + " " + "remove",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          className: "jsx-2409550668" + " " + "repair",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "\uC218\uC815"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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

  return TodayTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodayTodo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/todaytodo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=todaytodo.js.6b13106f4ae8ef37e335.hot-update.js.map