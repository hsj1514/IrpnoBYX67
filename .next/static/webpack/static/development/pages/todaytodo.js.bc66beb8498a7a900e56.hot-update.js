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
/* harmony import */ var _components_repairtodo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/repairtodo.js */ "./components/repairtodo.js");

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
          key: todo.id,
          className: "jsx-625304133" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "625304133",
          css: ".list.jsx-625304133:hover{background-color :#f2f2f2;}.remove.jsx-625304133{margin-left :90%;margin-bottom :10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFx0b2RheXRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUV3QixBQUcyQyxBQUlULGlCQUNHLFNBSnRCLFdBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHRvZGF5dG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBPbmNsaWNrIGZyb20gXCIuLi9jb21wb25lbnRzL29uY2xpY2suanNcIlxyXG5pbXBvcnQgUmVwYWlyYnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JlcGFpcnRvZG8uanNcIlxyXG5cclxuXHJcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuY29uc3QgZGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxyXG5cclxuY29uc3QgeWVhciA9IE51bWJlcihkYXRlLnN1YnN0cmluZygwLDQpKVxyXG5cclxuXHJcbmNvbnN0IG1vbnRoID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDUsNykpXHJcblxyXG5cclxuY29uc3QgZGF5ID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDgsMTApKVxyXG5cclxuXHJcbmNvbnN0IFRvZG9fU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzI1MHB4JyxcclxufVxyXG5cclxuXHJcbmNsYXNzIFRvZGF5VG9kbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbGlzdCcpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2RvcyA6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9kb3MgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZWxlY3RfVG9kYXlfVG9kb19JZCh0b2Rvcyl7XHJcbiAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmKHRvZG9zW2ldLmRheSA9PT0gZGF5KXtcclxuICAgICAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlX1RvZGF5X1RvZG9fTGlzdCgpe1xyXG4gICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgdmFyIHRvZG8gPSBbXTtcclxuICAgICAgICAgIHdoaWxlKGkgPCBzZWxlY3RfVG9kYXlfVG9kb19JZCh0b2RvcykubGVuZ3RoKXtcclxuICAgICAgICAgICAgdG9kby5wdXNoKHRvZG9zW3NlbGVjdF9Ub2RheV9Ub2RvX0lkKHRvZG9zKVtpXS0xXSk7XHJcbiAgICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZGF5X3RvZG8gPSBtYWtlX1RvZGF5X1RvZG9fTGlzdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXlfdG9kbylcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kYXlfdG9kby5tYXAoXHJcbiAgICAgICAgICAgIHRvZG8gPT5cclxuXHJcblxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e1RvZG9fU3R5bGV9IGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucmVtb3ZlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTJweCcsIHBhZGRpbmdCb3R0b20gOiAnNXB4JywgY29sb3IgOiAnIzk5OScsfX0+e3RvZG8ueWVhcn0ve3RvZG8ubW9udGh9L3t0b2RvLmRheX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57dG9kby50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTNweCd9fT4te3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVtb3ZlXCI+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxSZXBhaXJidXR0b24gLz5cclxuICAgICAgICAgICAgPE9uY2xpY2sgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kb0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQXBwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheVRvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\todaytodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-625304133",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          className: "jsx-625304133" + " " + "remove",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairtodo_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
//# sourceMappingURL=todaytodo.js.bc66beb8498a7a900e56.hot-update.js.map