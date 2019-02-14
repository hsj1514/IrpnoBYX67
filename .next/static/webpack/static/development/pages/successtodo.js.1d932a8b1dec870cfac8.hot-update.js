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

      function month_Day_Calculator(month) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
          return 31;
        } else if (month === 2) {
          return 29;
        } else {
          return 30;
        }
      } //----------------------------------


      function select_Checked_Todo(todos) {
        var i = 0;
        var successlist = [];

        if (todos[i].checkboxState === false) {
          while (i < todos.length) {
            list.push(todos[i].id);
            i = i + 1;
          }
        }

        return successlist;
      }

      console.log(successlist); //----------------------------------
      // 해당 월의 계획들을 찾아내기 위한 함수

      function select_After_Nthday_Todo_Id(todos, month, n, day) {
        var i = 0;
        var list = [];

        if (todos[i].month === month) {
          while (i < todos.length) {
            if (todos[i].day === day + n && todos[i].month === month) {
              list.push(todos[i].id);
            }

            i = i + 1;
          }
        }

        return list;
      } // 해당 월의 다음 달 계획들을 찾아내기 위한 함수


      function new_select_After_Nthday_Todo_Id(todos, month, n, day) {
        var i = 0;
        var list = [];

        if (todos[i].month === month) {
          while (i < todos.length) {
            if (todos[i].day === day + n && todos[i].month === month + 1) {
              list.push(todos[i].id);
            }

            i = i + 1;
          }
        }

        return list;
      } // 7일의 계획들을 날짜순으로 나열한 후 id값을 출력


      function sortingTodoId() {
        if (day + 7 > month_Day_Calculator(month)) {
          var i = 1;
          var start = select_After_Nthday_Todo_Id(todos, month, 0, day);

          while (i < month_Day_Calculator(month) - day + 1) {
            start = start.concat(select_After_Nthday_Todo_Id(todos, month, i, day));
            i = i + 1;
          }

          var a = 1;

          while (a < 7 - month_Day_Calculator(month) + day + 1) {
            start = start.concat(new_select_After_Nthday_Todo_Id(todos, month, a - 1, 1));
            console.log(start);
            a = a + 1;
          }

          return start;
        } else {
          var i = 1;
          var start = select_After_Nthday_Todo_Id(todos, month, 0, day);

          while (i < 8) {
            start = start.concat(select_After_Nthday_Todo_Id(todos, month, i, day));
            i = i + 1;
          }

          return start;
        }
      } //sortingTodo를 통해 출력한 id를 이용하여 todo list 만들기


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
      console.log(seven_todo); //---------------------------------
      //---------------------------------

      var todoList = seven_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          key: todo.id,
          className: "jsx-2129212260" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2129212260",
          css: ".list.jsx-2129212260:hover{background-color :#f2f2f2;}.remove.jsx-2129212260{margin-left :90%;margin-bottom :10px;}.removebutton.jsx-2129212260{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzdWNjZXNzdG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvS29CLEFBR3VDLEFBSVQsQUFLTCxZQUNDLEtBTE8sUUFNSixDQVZsQixXQUtBLElBTWUsYUFDSSxpQkFDRSxtQkFDTCw4RUFDUyxpRkFDSCxpR0FDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHN1Y2Nlc3N0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vcGFnZXMvQXBwLmpzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE9uY2xpY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvb25jbGljay5qc1wiXHJcbmltcG9ydCBSZXBhaXJCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwYWlyYnV0dG9uLmpzXCJcclxuaW1wb3J0IFJlbW92ZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9yZW1vdmVidXR0b24uanNcIlxyXG5cclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc3QgZGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxyXG5cclxuY29uc3QgeWVhciA9IE51bWJlcihkYXRlLnN1YnN0cmluZygwLDQpKVxyXG5cclxuY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSlcclxuXHJcbmNvbnN0IGRheSA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg4LDEwKSlcclxuXHJcbmNvbnN0IFRvZG9fU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzI1MHB4JyxcclxufVxyXG5cclxuXHJcbmNsYXNzIFN1Y2Nlc3NUb2RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9saXN0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9kb3MgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW9udGhfRGF5X0NhbGN1bGF0b3IobW9udGgpe1xyXG4gICAgICBpZihtb250aCA9PT0gMSB8fCBtb250aCA9PT0gMyB8fCBtb250aCA9PT0gNSB8fCBtb250aCA9PT0gNyB8fCBtb250aCA9PT0gOCB8fCBtb250aCA9PT0gMTAgfHwgbW9udGggPT09IDEyKXtcclxuICAgICAgICByZXR1cm4gMzFcclxuICAgICAgfSBlbHNlIGlmKG1vbnRoID09PSAyKXtcclxuICAgICAgICByZXR1cm4gMjlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMzBcclxuICAgICAgfVxyXG4gICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RfQ2hlY2tlZF9Ub2RvKHRvZG9zKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgc3VjY2Vzc2xpc3QgPSBbXTtcclxuXHJcbiAgICAgIGlmKHRvZG9zW2ldLmNoZWNrYm94U3RhdGUgPT09IGZhbHNlKXtcclxuICAgICAgICB3aGlsZShpIDwgdG9kb3MubGVuZ3RoKXtcclxuICAgICAgICAgIGxpc3QucHVzaCh0b2Rvc1tpXS5pZClcclxuICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1Y2Nlc3NsaXN0O1xyXG4gICAgfVxyXG5jb25zb2xlLmxvZyhzdWNjZXNzbGlzdClcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8g7ZW064u5IOyblOydmCDqs4Ttmo3rk6TsnYQg7LC+7JWE64K06riwIOychO2VnCDtlajsiJhcclxuICAgIGZ1bmN0aW9uIHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgbiAgLCBkYXkpe1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICBpZih0b2Rvc1tpXS5tb250aCA9PT0gbW9udGgpe1xyXG4gICAgICAgIHdoaWxlKGkgPCB0b2Rvcy5sZW5ndGgpe1xyXG4gICAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkrbiAmJiB0b2Rvc1tpXS5tb250aCA9PT0gbW9udGgpe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbi8vIO2VtOuLuSDsm5TsnZgg64uk7J2MIOuLrCDqs4Ttmo3rk6TsnYQg7LC+7JWE64K06riwIOychO2VnCDtlajsiJhcclxuICAgIGZ1bmN0aW9uIG5ld19zZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIG4gICwgZGF5KXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgaWYodG9kb3NbaV0ubW9udGggPT09IG1vbnRoKXtcclxuICAgICAgICB3aGlsZShpIDwgdG9kb3MubGVuZ3RoKXtcclxuICAgICAgICAgIGlmKHRvZG9zW2ldLmRheSA9PT0gZGF5K24gJiYgdG9kb3NbaV0ubW9udGggPT09IG1vbnRoICsgMSApe1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godG9kb3NbaV0uaWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbi8vIDfsnbzsnZgg6rOE7ZqN65Ok7J2EIOuCoOynnOyInOycvOuhnCDrgpjsl7TtlZwg7ZuEIGlk6rCS7J2EIOy2nOugpVxyXG4gICAgZnVuY3Rpb24gc29ydGluZ1RvZG9JZCgpe1xyXG5cclxuICAgICAgaWYoZGF5ICsgNyA+IG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKSl7XHJcblxyXG4gICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICB2YXIgc3RhcnQgPSBzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIDAgLCBkYXkpXHJcblxyXG4gICAgICAgIHdoaWxlKGkgPCBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCkgLSBkYXkgKyAxKXtcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgaSAsIGRheSkpXHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYSA9IDE7XHJcbiAgICAgICAgd2hpbGUoYSA8IDcgLSBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCkgKyBkYXkgKyAxKXtcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KG5ld19zZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAgLCBhLTEgLCAxKSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0KVxyXG4gICAgICAgICAgYSA9IGEgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhcnQ7XHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCAwICwgZGF5KVxyXG4gICAgICAgIHdoaWxlKGkgPCA4KXtcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnQuY29uY2F0KHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgaSAsIGRheSkpXHJcbiAgICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy9zb3J0aW5nVG9kb+ulvCDthrXtlbQg7Lac66Cl7ZWcIGlk66W8IOydtOyaqe2VmOyXrCB0b2RvIGxpc3Qg66eM65Ok6riwXHJcbiAgICBmdW5jdGlvbiBtYWtlX1NldmVuX1RvZG9fTGlzdCgpe1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciB0b2RvID0gW107XHJcbiAgICAgIHdoaWxlKGkgPCBzb3J0aW5nVG9kb0lkKCkubGVuZ3RoKXtcclxuICAgICAgICB0b2RvLnB1c2godG9kb3Nbc29ydGluZ1RvZG9JZCgpW2ldLTFdKTtcclxuICAgICAgICBpID0gaSArIDE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIENsaWNrKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHtpZDp0aGlzLmlkfSlcclxuICAgICAgY29uc3QgaWQgPSB7aWQgOiB0aGlzLmlkfVxyXG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZGVsZXRlJywgIGlkIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgc2V2ZW5fdG9kbyA9IG1ha2VfU2V2ZW5fVG9kb19MaXN0KClcclxuICAgIGNvbnNvbGUubG9nKHNldmVuX3RvZG8pXHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBzZXZlbl90b2RvLm1hcChcclxuICAgICAgICB0b2RvID0+XHJcblxyXG4gICAgICAgIDxsaSBzdHlsZT17VG9kb19TdHlsZX0gY2xhc3NOYW1lPVwibGlzdFwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxpc3Q6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVtb3ZlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZW1vdmVidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb24gOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTJweCcsIHBhZGRpbmdCb3R0b20gOiAnNXB4JywgY29sb3IgOiAnIzk5OScsfX0+e3RvZG8ueWVhcn0ve3RvZG8ubW9udGh9L3t0b2RvLmRheX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt0b2RvLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemUgOiAnMTNweCd9fT4te3RvZG8uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZW1vdmVidXR0b25cIiBvbkNsaWNrPXtDbGljay5iaW5kKHRvZG8pfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgPFJlcGFpckJ1dHRvbiAvPlxyXG4gICAgICAgIDxPbmNsaWNrIGlkPXt0b2RvLmlkfSAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZSA6ICdub25lJywgcGFkZGluZ0xlZnQgOiAnMCcsfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b2RvTGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzVG9kbztcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\successtodo.js */",
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
            lineNumber: 187
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          onClick: Click.bind(todo),
          className: "jsx-2129212260" + " " + "removebutton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: todo.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
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
//# sourceMappingURL=successtodo.js.1d932a8b1dec870cfac8.hot-update.js.map