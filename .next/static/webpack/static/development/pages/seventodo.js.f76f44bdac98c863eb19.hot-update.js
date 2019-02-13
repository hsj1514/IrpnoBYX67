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
/* harmony import */ var _components_onclick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/onclick.js */ "./components/onclick.js");
/* harmony import */ var _components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/repairbutton.js */ "./components/repairbutton.js");
/* harmony import */ var _components_removebutton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/removebutton.js */ "./components/removebutton.js");

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
  height: '250px'
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

      function month_Day_Calculator(month) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
          return 31;
        } else if (month === 2) {
          return 29;
        } else {
          return 30;
        }
      }

      console.log(month_Day_Calculator(month));

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
        //------------------
        if (day + 20 > month_Day_Calculator(month)) {
          var i = 1;
          var start = select_After_Nthday_Todo_Id(todos, 0);

          while (i < month_Day_Calculator(_month) - day + 1) {
            start = start.concat(select_After_Nthday_Todo_Id(todos, i));
            i = i + 1;
          }

          var _month = Number(date.substring(5, 7)) + 1;

          console.log(_month);
          var i = 1;

          while (i < 7 - month_Day_Calculator(_month) + day + 1) {
            start = start.concat(select_After_Nthday_Todo_Id(todos, i - 1));
            i = i + 1;
          }

          return start;
        } else {
          //------------------
          var i = 1;
          var start = select_After_Nthday_Todo_Id(todos, 0);

          while (i < 8) {
            start = start.concat(select_After_Nthday_Todo_Id(todos, i));
            i = i + 1;
          }

          return start;
        }
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

      function Click() {
        console.log({
          id: this.id
        });
        var id = {
          id: this.id
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:5000/delete', id);
      }

      var seven_todo = make_Seven_Todo_List();
      console.log(seven_todo);
      var todoList = seven_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          key: todo.toString(),
          className: "jsx-339880554" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "339880554",
          css: ".list.jsx-339880554:hover{background-color :#f2f2f2;}.remove.jsx-339880554{margin-left :90%;margin-bottom :10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzZXZlbnRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0pvQixBQUd1QyxBQUlULGlCQUNHLFNBSnRCLFdBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHNldmVudG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uL3BhZ2VzL0FwcC5qc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBPbmNsaWNrIGZyb20gXCIuLi9jb21wb25lbnRzL29uY2xpY2suanNcIlxyXG5pbXBvcnQgUmVwYWlyQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JlcGFpcmJ1dHRvbi5qc1wiXHJcbmltcG9ydCBSZW1vdmVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVtb3ZlYnV0dG9uLmpzXCJcclxuXHJcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuY29uc29sZS5sb2codG9kYXkpXHJcblxyXG5jb25zdCBkYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXHJcbmNvbnNvbGUubG9nKGRhdGUpXHJcblxyXG5jb25zdCB5ZWFyID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDAsNCkpXHJcblxyXG5jb25zdCBtb250aCA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg1LDcpKVxyXG5cclxuY29uc3QgZGF5ID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDgsMTApKVxyXG5cclxuXHJcbmNvbnN0IFRvZG9fU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzI1MHB4JyxcclxufVxyXG5cclxuXHJcbmNsYXNzIFNldmVuVG9kbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbGlzdCcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvZG9zIDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHRvZG9zIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW9udGhfRGF5X0NhbGN1bGF0b3IobW9udGgpe1xyXG4gICAgICBpZihtb250aCA9PT0gMSB8fCBtb250aCA9PT0gMyB8fCBtb250aCA9PT0gNSB8fCBtb250aCA9PT0gNyB8fCBtb250aCA9PT0gOCB8fCBtb250aCA9PT0gMTAgfHwgbW9udGggPT09IDEyKXtcclxuICAgICAgICByZXR1cm4gMzFcclxuICAgICAgfSBlbHNlIGlmKG1vbnRoID09PSAyKXtcclxuICAgICAgICByZXR1cm4gMjlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMzBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbil7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkrbil7XHJcbiAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc29ydGluZ1RvZG9JZCgpe1xyXG5cclxuXHJcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICBpZihkYXkgKyAyMCA+IG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKSl7XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIDApXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHdoaWxlKGkgPCBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCkgLSBkYXkgKyAxKXtcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIGkpKVxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSkrMVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vbnRoKVxyXG5cclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUoaSA8IDcgLSBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCkgKyBkYXkgKyAxKXtcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIGktMSkpXHJcblxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgICAgfSBlbHNle1xyXG5cclxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIDApXHJcbiAgICAgICAgd2hpbGUoaSA8IDgpe1xyXG4gICAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgaSkpXHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VfU2V2ZW5fVG9kb19MaXN0KCl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIHRvZG8gPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHNvcnRpbmdUb2RvSWQoKS5sZW5ndGgpe1xyXG4gICAgICAgIHRvZG8ucHVzaCh0b2Rvc1tzb3J0aW5nVG9kb0lkKClbaV0tMV0pO1xyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9kbztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDbGljaygpe1xyXG5cclxuICAgICAgY29uc29sZS5sb2coe2lkOnRoaXMuaWR9KVxyXG5cclxuICAgICAgY29uc3QgaWQgPSB7aWQgOiB0aGlzLmlkfVxyXG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZGVsZXRlJywgIGlkIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNldmVuX3RvZG8gPSBtYWtlX1NldmVuX1RvZG9fTGlzdCgpXHJcbiAgICBjb25zb2xlLmxvZyhzZXZlbl90b2RvKVxyXG5cclxuXHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IHNldmVuX3RvZG8ubWFwKFxyXG4gICAgICAgIHRvZG8gPT5cclxuXHJcblxyXG5cclxuICAgICAgICA8bGkgc3R5bGU9e1RvZG9fU3R5bGV9IGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9e3RvZG8udG9TdHJpbmcoKX0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVtb3ZlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTJweCcsIHBhZGRpbmdCb3R0b20gOiAnNXB4JywgY29sb3IgOiAnIzk5OScsfX0+e3RvZG8ueWVhcn0ve3RvZG8ubW9udGh9L3t0b2RvLmRheX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTNweCd9fT4te3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtDbGljay5iaW5kKHRvZG8pfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8UmVtb3ZlQnV0dG9uIC8+XHJcbiAgICAgICAgPFJlcGFpckJ1dHRvbiAvPlxyXG4gICAgICAgIDxPbmNsaWNrIC8+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICApXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXZlblRvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js */",
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '12px',
            paddingBottom: '5px',
            color: '#999'
          },
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          onClick: Click.bind(todo),
          className: "jsx-339880554",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_removebutton_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
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
//# sourceMappingURL=seventodo.js.f76f44bdac98c863eb19.hot-update.js.map