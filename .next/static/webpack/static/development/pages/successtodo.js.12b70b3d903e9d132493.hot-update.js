webpackHotUpdate("static\\development\\pages\\successtodo.js",{

/***/ "./pages/successtodo.js":
/*!******************************!*\
  !*** ./pages/successtodo.js ***!
  \******************************/
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
/* harmony import */ var _components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/repairbutton.js */ "./components/repairbutton.js");
/* harmony import */ var _components_removebutton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/removebutton.js */ "./components/removebutton.js");

var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\successtodo.js";



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






var Todo_Style = {
  borderTop: 'groove 1px',
  padding: '2px',
  margin: '3px 0px',
  height: '250px'
};

var SuccessTodo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuccessTodo, _React$Component);

  function SuccessTodo() {
    _classCallCheck(this, SuccessTodo);

    return _possibleConstructorReturn(this, _getPrototypeOf(SuccessTodo).apply(this, arguments));
  }

  _createClass(SuccessTodo, [{
    key: "render",
    value: function render() {
      var todos = this.props.todos;

      function select_Checked_TodoId(todos) {
        var i = 0;
        var successlist = [];

        if (todos[i].checkboxState === false) {
          while (i < todos.length) {
            successlist.push(todos[i].id);
            i = i + 1;
          }
        }

        return successlist;
      } //select_Checked_TodoId를 통해 출력한 id를 이용하여 todo list 만들기


      function make_Success_Todo_List() {
        var i = 0;
        var todo = [];

        while (i < select_Checked_TodoId(todos).length) {
          todo.push(todos[select_Checked_TodoId(todos)[i] - 1]);
          i = i + 1;
        }

        return todo;
      }

      function Click() {
        console.log({
          id: this.id
        });
        var id = {
          id: this.id
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:5000/delete', id);
      }

      var success_todo = make_Success_Todo_List();
      console.log(success_todo); //---------------------------------
      //---------------------------------

      var todoList = success_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          key: todo.id,
          className: "jsx-2129212260" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2129212260",
          css: ".list.jsx-2129212260:hover{background-color :#f2f2f2;}.remove.jsx-2129212260{margin-left :90%;margin-bottom :10px;}.removebutton.jsx-2129212260{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzdWNjZXNzdG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBR3VDLEFBSVQsQUFLTCxZQUNDLEtBTE8sUUFNSixDQVZsQixXQUtBLElBTWUsYUFDSSxpQkFDRSxtQkFDTCw4RUFDUyxpRkFDSCxpR0FDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHN1Y2Nlc3N0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vcGFnZXMvQXBwLmpzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE9uY2xpY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvb25jbGljay5qc1wiXHJcbmltcG9ydCBSZXBhaXJCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwYWlyYnV0dG9uLmpzXCJcclxuaW1wb3J0IFJlbW92ZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9yZW1vdmVidXR0b24uanNcIlxyXG5cclxuXHJcbmNvbnN0IFRvZG9fU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzI1MHB4JyxcclxufVxyXG5cclxuXHJcbmNsYXNzIFN1Y2Nlc3NUb2RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9saXN0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9kb3MgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0X0NoZWNrZWRfVG9kb0lkKHRvZG9zKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgc3VjY2Vzc2xpc3QgPSBbXTtcclxuXHJcbiAgICAgIGlmKHRvZG9zW2ldLmNoZWNrYm94U3RhdGUgPT09IGZhbHNlKXtcclxuICAgICAgICB3aGlsZShpIDwgdG9kb3MubGVuZ3RoKXtcclxuICAgICAgICAgIHN1Y2Nlc3NsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdWNjZXNzbGlzdFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vL3NlbGVjdF9DaGVja2VkX1RvZG9JZOulvCDthrXtlbQg7Lac66Cl7ZWcIGlk66W8IOydtOyaqe2VmOyXrCB0b2RvIGxpc3Qg66eM65Ok6riwXHJcbiAgICBmdW5jdGlvbiBtYWtlX1N1Y2Nlc3NfVG9kb19MaXN0KCl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIHRvZG8gPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHNlbGVjdF9DaGVja2VkX1RvZG9JZCh0b2RvcykubGVuZ3RoKXtcclxuICAgICAgICB0b2RvLnB1c2godG9kb3Nbc2VsZWN0X0NoZWNrZWRfVG9kb0lkKHRvZG9zKVtpXS0xXSk7XHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBDbGljaygpe1xyXG4gICAgICBjb25zb2xlLmxvZyh7aWQ6dGhpcy5pZH0pXHJcbiAgICAgIGNvbnN0IGlkID0ge2lkIDogdGhpcy5pZH1cclxuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2RlbGV0ZScsICBpZCApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3NfdG9kbyA9IG1ha2VfU3VjY2Vzc19Ub2RvX0xpc3QoKVxyXG4gICAgY29uc29sZS5sb2coc3VjY2Vzc190b2RvKVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gc3VjY2Vzc190b2RvLm1hcChcclxuICAgICAgICB0b2RvID0+XHJcblxyXG4gICAgICAgIDxsaSBzdHlsZT17VG9kb19TdHlsZX0gY2xhc3NOYW1lPVwibGlzdFwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVtb3ZlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZW1vdmVidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTJweCcsIHBhZGRpbmdCb3R0b20gOiAnNXB4JywgY29sb3IgOiAnIzk5OScsfX0+e3RvZG8ueWVhcn0ve3RvZG8ubW9udGh9L3t0b2RvLmRheX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTNweCd9fT4te3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZW1vdmVidXR0b25cIiBvbkNsaWNrPXtDbGljay5iaW5kKHRvZG8pfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgPFJlcGFpckJ1dHRvbiAvPlxyXG4gICAgICAgIDxPbmNsaWNrIGlkPXt0b2RvLmlkfSAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzVG9kbztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\successtodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          onClick: Click.bind(todo),
          className: "jsx-2129212260" + " " + "removebutton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: todo.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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

  return SuccessTodo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SuccessTodo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/successtodo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=successtodo.js.12b70b3d903e9d132493.hot-update.js.map