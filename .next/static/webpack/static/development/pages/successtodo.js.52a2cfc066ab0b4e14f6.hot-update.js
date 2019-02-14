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
      console.log(todos.checkboxState);

      function month_Day_Calculator(month) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
          return 31;
        } else if (month === 2) {
          return 29;
        } else {
          return 30;
        }
      } // 해당 월의 계획들을 찾아내기 위한 함수


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
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2129212260",
          css: ".list.jsx-2129212260:hover{background-color :#f2f2f2;}.remove.jsx-2129212260{margin-left :90%;margin-bottom :10px;}.removebutton.jsx-2129212260{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzdWNjZXNzdG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSm9CLEFBR3VDLEFBSVQsQUFLTCxZQUNDLEtBTE8sUUFNSixDQVZsQixXQUtBLElBTWUsYUFDSSxpQkFDRSxtQkFDTCw4RUFDUyxpRkFDSCxpR0FDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xccGFnZXNcXHN1Y2Nlc3N0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vcGFnZXMvQXBwLmpzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE9uY2xpY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvb25jbGljay5qc1wiXHJcbmltcG9ydCBSZXBhaXJCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwYWlyYnV0dG9uLmpzXCJcclxuaW1wb3J0IFJlbW92ZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9yZW1vdmVidXR0b24uanNcIlxyXG5cclxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc3QgZGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxyXG5cclxuY29uc3QgeWVhciA9IE51bWJlcihkYXRlLnN1YnN0cmluZygwLDQpKVxyXG5cclxuY29uc3QgbW9udGggPSBOdW1iZXIoZGF0ZS5zdWJzdHJpbmcoNSw3KSlcclxuXHJcbmNvbnN0IGRheSA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg4LDEwKSlcclxuXHJcbmNvbnN0IFRvZG9fU3R5bGUgPSB7XHJcbiAgYm9yZGVyVG9wIDogJ2dyb292ZSAxcHgnLFxyXG4gIHBhZGRpbmcgOiAnMnB4JyxcclxuICBtYXJnaW4gOiAnM3B4IDBweCcsXHJcbiAgaGVpZ2h0IDogJzI1MHB4JyxcclxufVxyXG5cclxuXHJcbmNsYXNzIFN1Y2Nlc3NUb2RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9saXN0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9kb3MgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy5jaGVja2JveFN0YXRlKVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKXtcclxuICAgICAgaWYobW9udGggPT09IDEgfHwgbW9udGggPT09IDMgfHwgbW9udGggPT09IDUgfHwgbW9udGggPT09IDcgfHwgbW9udGggPT09IDggfHwgbW9udGggPT09IDEwIHx8IG1vbnRoID09PSAxMil7XHJcbiAgICAgICAgcmV0dXJuIDMxXHJcbiAgICAgIH0gZWxzZSBpZihtb250aCA9PT0gMil7XHJcbiAgICAgICAgcmV0dXJuIDI5XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDMwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbi8vIO2VtOuLuSDsm5TsnZgg6rOE7ZqN65Ok7J2EIOywvuyVhOuCtOq4sCDsnITtlZwg7ZWo7IiYXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIG4gICwgZGF5KXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgaWYodG9kb3NbaV0ubW9udGggPT09IG1vbnRoKXtcclxuICAgICAgICB3aGlsZShpIDwgdG9kb3MubGVuZ3RoKXtcclxuICAgICAgICAgIGlmKHRvZG9zW2ldLmRheSA9PT0gZGF5K24gJiYgdG9kb3NbaV0ubW9udGggPT09IG1vbnRoKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHRvZG9zW2ldLmlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4vLyDtlbTri7kg7JuU7J2YIOuLpOydjCDri6wg6rOE7ZqN65Ok7J2EIOywvuyVhOuCtOq4sCDsnITtlZwg7ZWo7IiYXHJcbiAgICBmdW5jdGlvbiBuZXdfc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCBuICAsIGRheSl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgIGlmKHRvZG9zW2ldLm1vbnRoID09PSBtb250aCl7XHJcbiAgICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgICBpZih0b2Rvc1tpXS5kYXkgPT09IGRheStuICYmIHRvZG9zW2ldLm1vbnRoID09PSBtb250aCArIDEgKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHRvZG9zW2ldLmlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4vLyA37J287J2YIOqzhO2ajeuTpOydhCDrgqDsp5zsiJzsnLzroZwg64KY7Je07ZWcIO2bhCBpZOqwkuydhCDstpzroKVcclxuICAgIGZ1bmN0aW9uIHNvcnRpbmdUb2RvSWQoKXtcclxuXHJcbiAgICAgIGlmKGRheSArIDcgPiBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCkpe1xyXG5cclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCAwICwgZGF5KVxyXG5cclxuICAgICAgICB3aGlsZShpIDwgbW9udGhfRGF5X0NhbGN1bGF0b3IobW9udGgpIC0gZGF5ICsgMSl7XHJcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0LmNvbmNhdChzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIGkgLCBkYXkpKVxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGEgPSAxO1xyXG4gICAgICAgIHdoaWxlKGEgPCA3IC0gbW9udGhfRGF5X0NhbGN1bGF0b3IobW9udGgpICsgZGF5ICsgMSl7XHJcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0LmNvbmNhdChuZXdfc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggICwgYS0xICwgMSkpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdGFydClcclxuICAgICAgICAgIGEgPSBhICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgICB9IGVsc2V7XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgMCAsIGRheSlcclxuICAgICAgICB3aGlsZShpIDwgOCl7XHJcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0LmNvbmNhdChzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIGkgLCBkYXkpKVxyXG4gICAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhcnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbi8vc29ydGluZ1RvZG/rpbwg7Ya17ZW0IOy2nOugpe2VnCBpZOulvCDsnbTsmqntlZjsl6wgdG9kbyBsaXN0IOunjOuTpOq4sFxyXG4gICAgZnVuY3Rpb24gbWFrZV9TZXZlbl9Ub2RvX0xpc3QoKXtcclxuICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICB2YXIgdG9kbyA9IFtdO1xyXG4gICAgICB3aGlsZShpIDwgc29ydGluZ1RvZG9JZCgpLmxlbmd0aCl7XHJcbiAgICAgICAgdG9kby5wdXNoKHRvZG9zW3NvcnRpbmdUb2RvSWQoKVtpXS0xXSk7XHJcbiAgICAgICAgaSA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBDbGljaygpe1xyXG4gICAgICBjb25zb2xlLmxvZyh7aWQ6dGhpcy5pZH0pXHJcbiAgICAgIGNvbnN0IGlkID0ge2lkIDogdGhpcy5pZH1cclxuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2RlbGV0ZScsICBpZCApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHNldmVuX3RvZG8gPSBtYWtlX1NldmVuX1RvZG9fTGlzdCgpXHJcbiAgICBjb25zb2xlLmxvZyhzZXZlbl90b2RvKVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gc2V2ZW5fdG9kby5tYXAoXHJcbiAgICAgICAgdG9kbyA9PlxyXG5cclxuICAgICAgICA8bGkgc3R5bGU9e1RvZG9fU3R5bGV9IGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5saXN0OmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlbW92ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0IDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVtb3ZlYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGggOiA1MHB4O1xyXG4gICAgICAgICAgICBjb2xvciA6IGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEycHgnLCBwYWRkaW5nQm90dG9tIDogJzVweCcsIGNvbG9yIDogJyM5OTknLH19Pnt0b2RvLnllYXJ9L3t0b2RvLm1vbnRofS97dG9kby5kYXl9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57dG9kby50aXRsZX08L2Rpdj5cclxuICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplIDogJzEzcHgnfX0+LXt0b2RvLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVtb3ZlYnV0dG9uXCIgb25DbGljaz17Q2xpY2suYmluZCh0b2RvKX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxSZXBhaXJCdXR0b24gLz5cclxuICAgICAgICA8T25jbGljayBpZD17dG9kby5pZH0gLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGUgOiAnbm9uZScsIHBhZGRpbmdMZWZ0IDogJzAnLH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICB7dG9kb0xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQXBwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc1RvZG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\successtodo.js */",
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
            lineNumber: 167
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          onClick: Click.bind(todo),
          className: "jsx-2129212260" + " " + "removebutton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: todo.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
//# sourceMappingURL=successtodo.js.52a2cfc066ab0b4e14f6.hot-update.js.map