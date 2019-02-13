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
      console.log(seven_todo);
      var todoList = seven_todo.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          style: Todo_Style,
          key: todo.id,
          className: "jsx-2129212260" + " " + "list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2129212260",
          css: ".list.jsx-2129212260:hover{background-color :#f2f2f2;}.remove.jsx-2129212260{margin-left :90%;margin-bottom :10px;}.removebutton.jsx-2129212260{width :50px;color :black;font-size :12px;padding :5px;margin-left :90%;margin-right :20px;display :-webkit-box;display :-webkit-flex;display :-ms-flexbox;display :flex;-webkit-flex-direction :column;-ms-flex-direction :column;flex-direction :column;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzZXZlbnRvZG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlvQixBQUd1QyxBQUlULEFBS0wsWUFDQyxLQUxPLFFBTUosQ0FWbEIsV0FLQSxJQU1lLGFBQ0ksaUJBQ0UsbUJBQ0wsOEVBQ1MsaUZBQ0gsaUdBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXHBhZ2VzXFxzZXZlbnRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi9wYWdlcy9BcHAuanNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgT25jbGljayBmcm9tIFwiLi4vY29tcG9uZW50cy9vbmNsaWNrLmpzXCJcclxuaW1wb3J0IFJlcGFpckJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXBhaXJidXR0b24uanNcIlxyXG5pbXBvcnQgUmVtb3ZlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JlbW92ZWJ1dHRvbi5qc1wiXHJcblxyXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zdCBkYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXHJcblxyXG5jb25zdCB5ZWFyID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDAsNCkpXHJcblxyXG5jb25zdCBtb250aCA9IE51bWJlcihkYXRlLnN1YnN0cmluZyg1LDcpKVxyXG5cclxuY29uc3QgZGF5ID0gTnVtYmVyKGRhdGUuc3Vic3RyaW5nKDgsMTApKVxyXG5cclxuY29uc3QgVG9kb19TdHlsZSA9IHtcclxuICBib3JkZXJUb3AgOiAnZ3Jvb3ZlIDFweCcsXHJcbiAgcGFkZGluZyA6ICcycHgnLFxyXG4gIG1hcmdpbiA6ICczcHggMHB4JyxcclxuICBoZWlnaHQgOiAnMjUwcHgnLFxyXG59XHJcblxyXG5cclxuY2xhc3MgU2V2ZW5Ub2RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9saXN0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9kb3MgOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB0b2RvcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBmdW5jdGlvbiBtb250aF9EYXlfQ2FsY3VsYXRvcihtb250aCl7XHJcbiAgICAgIGlmKG1vbnRoID09PSAxIHx8IG1vbnRoID09PSAzIHx8IG1vbnRoID09PSA1IHx8IG1vbnRoID09PSA3IHx8IG1vbnRoID09PSA4IHx8IG1vbnRoID09PSAxMCB8fCBtb250aCA9PT0gMTIpe1xyXG4gICAgICAgIHJldHVybiAzMVxyXG4gICAgICB9IGVsc2UgaWYobW9udGggPT09IDIpe1xyXG4gICAgICAgIHJldHVybiAyOVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAzMFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4vLyDtlbTri7kg7JuU7J2YIOqzhO2ajeuTpOydhCDssL7slYTrgrTquLAg7JyE7ZWcIO2VqOyImFxyXG4gICAgZnVuY3Rpb24gc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCBuICAsIGRheSl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgIGlmKHRvZG9zW2ldLm1vbnRoID09PSBtb250aCl7XHJcbiAgICAgICAgd2hpbGUoaSA8IHRvZG9zLmxlbmd0aCl7XHJcbiAgICAgICAgICBpZih0b2Rvc1tpXS5kYXkgPT09IGRheStuICYmIHRvZG9zW2ldLm1vbnRoID09PSBtb250aCl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0b2Rvc1tpXS5pZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuLy8g7ZW064u5IOyblOydmCDri6TsnYwg64usIOqzhO2ajeuTpOydhCDssL7slYTrgrTquLAg7JyE7ZWcIO2VqOyImFxyXG4gICAgZnVuY3Rpb24gbmV3X3NlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgbiAgLCBkYXkpe1xyXG4gICAgICB2YXIgaSA9IDA7XHJcbiAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICBpZih0b2Rvc1tpXS5tb250aCA9PT0gbW9udGgpe1xyXG4gICAgICAgIHdoaWxlKGkgPCB0b2Rvcy5sZW5ndGgpe1xyXG4gICAgICAgICAgaWYodG9kb3NbaV0uZGF5ID09PSBkYXkrbiAmJiB0b2Rvc1tpXS5tb250aCA9PT0gbW9udGggKyAxICl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0b2Rvc1tpXS5pZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuLy8gN+ydvOydmCDqs4Ttmo3rk6TsnYQg64Kg7Kec7Iic7Jy866GcIOuCmOyXtO2VnCDtm4QgaWTqsJLsnYQg7Lac66ClXHJcbiAgICBmdW5jdGlvbiBzb3J0aW5nVG9kb0lkKCl7XHJcblxyXG4gICAgICBpZihkYXkgKyA3ID4gbW9udGhfRGF5X0NhbGN1bGF0b3IobW9udGgpKXtcclxuXHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHNlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICwgMCAsIGRheSlcclxuXHJcbiAgICAgICAgd2hpbGUoaSA8IG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKSAtIGRheSArIDEpe1xyXG4gICAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCBpICwgZGF5KSlcclxuICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhID0gMTtcclxuICAgICAgICB3aGlsZShhIDwgNyAtIG1vbnRoX0RheV9DYWxjdWxhdG9yKG1vbnRoKSArIGRheSArIDEpe1xyXG4gICAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQobmV3X3NlbGVjdF9BZnRlcl9OdGhkYXlfVG9kb19JZCh0b2RvcyAsIG1vbnRoICAsIGEtMSAsIDEpKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coc3RhcnQpXHJcbiAgICAgICAgICBhID0gYSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICB2YXIgc3RhcnQgPSBzZWxlY3RfQWZ0ZXJfTnRoZGF5X1RvZG9fSWQodG9kb3MgLCBtb250aCAsIDAgLCBkYXkpXHJcbiAgICAgICAgd2hpbGUoaSA8IDgpe1xyXG4gICAgICAgICAgc3RhcnQgPSBzdGFydC5jb25jYXQoc2VsZWN0X0FmdGVyX050aGRheV9Ub2RvX0lkKHRvZG9zICwgbW9udGggLCBpICwgZGF5KSlcclxuICAgICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4vL3NvcnRpbmdUb2Rv66W8IO2Gte2VtCDstpzroKXtlZwgaWTrpbwg7J207Jqp7ZWY7JesIHRvZG8gbGlzdCDrp4zrk6TquLBcclxuICAgIGZ1bmN0aW9uIG1ha2VfU2V2ZW5fVG9kb19MaXN0KCl7XHJcbiAgICAgIHZhciBpID0gMDtcclxuICAgICAgdmFyIHRvZG8gPSBbXTtcclxuICAgICAgd2hpbGUoaSA8IHNvcnRpbmdUb2RvSWQoKS5sZW5ndGgpe1xyXG4gICAgICAgIHRvZG8ucHVzaCh0b2Rvc1tzb3J0aW5nVG9kb0lkKClbaV0tMV0pO1xyXG4gICAgICAgIGkgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9kbztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQ2xpY2soKXtcclxuICAgICAgY29uc29sZS5sb2coe2lkOnRoaXMuaWR9KVxyXG4gICAgICBjb25zdCBpZCA9IHtpZCA6IHRoaXMuaWR9XHJcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZWxldGUnLCAgaWQgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzZXZlbl90b2RvID0gbWFrZV9TZXZlbl9Ub2RvX0xpc3QoKVxyXG4gICAgY29uc29sZS5sb2coc2V2ZW5fdG9kbylcclxuXHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IHNldmVuX3RvZG8ubWFwKFxyXG4gICAgICAgIHRvZG8gPT5cclxuXHJcbiAgICAgICAgPGxpIHN0eWxlPXtUb2RvX1N0eWxlfSBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZW1vdmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdCA6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlbW92ZWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQgOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxMnB4JywgcGFkZGluZ0JvdHRvbSA6ICc1cHgnLCBjb2xvciA6ICcjOTk5Jyx9fT57dG9kby55ZWFyfS97dG9kby5tb250aH0ve3RvZG8uZGF5fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e3RvZG8udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZSA6ICcxM3B4J319Pi17dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZWJ1dHRvblwiIG9uQ2xpY2s9e0NsaWNrLmJpbmQodG9kbyl9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgIDxwPjwvcD5cclxuICAgICAgICA8UmVwYWlyQnV0dG9uIC8+XHJcbiAgICAgICAgPE9uY2xpY2sgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGUgOiAnbm9uZScsIHBhZGRpbmdMZWZ0IDogJzAnLH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICB7dG9kb0xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvQXBwPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V2ZW5Ub2RvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\pages\\seventodo.js */",
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
            lineNumber: 160
          },
          __self: this
        }, todo.year, "/", todo.month, "/", todo.day), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, todo.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            fontSize: '13px'
          },
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "-", todo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          onClick: Click.bind(todo),
          className: "jsx-2129212260" + " " + "removebutton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, "\uC0AD\uC81C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-2129212260",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_repairbutton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_onclick_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        style: {
          listStyleType: 'none',
          paddingLeft: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
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
//# sourceMappingURL=seventodo.js.98e8ce26d8358b72aa99.hot-update.js.map