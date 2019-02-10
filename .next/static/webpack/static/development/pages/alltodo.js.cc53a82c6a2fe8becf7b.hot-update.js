webpackHotUpdate("static\\development\\pages\\alltodo.js",{

/***/ "./components/Main_Left_Layout.js":
/*!****************************************!*\
  !*** ./components/Main_Left_Layout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Popup_Left_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popup_Left.js */ "./components/Popup_Left.js");
var _jsxFileName = "C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js";




var Checkbox = react__WEBPACK_IMPORTED_MODULE_1___default.a.createClass({
  displayName: "Checkbox",
  getInitialState: function getInitialState() {
    return {
      checked: true
    };
  },
  handleCheck: function handleCheck() {
    this.setState({
      checked: !this.state.checked
    });
  },
  render: function render() {
    var msg;

    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      onChange: this.handleCheck,
      defaultChecked: this.state.checked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "this box is ", msg, "."));
  }
});
react__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), document.getElementById('react-container'));
var Main_Left_Layout_Style = {
  display: 'flex',
  float: 'left',
  flexDirection: 'column',
  alignItems: 'left',
  height: '100%',
  minHeight: 'calc(100vh - 100px)',
  width: '99%',
  border: 'groove 1px'
};
var Title_Left_Style = {
  textAlign: 'center',
  padding: '15px 0px',
  backgroundColor: '#999'
};
var Transparent = {
  marginTop: '35px',
  marginBottom: '20px'
};

function Main_Left_Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Main_Left_Layout_Style,
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2421616147",
    css: ".today.jsx-2421616147:hover{background-color :#999;}.today.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 20px;}.sevendays.jsx-2421616147:hover{background-color :#999;}.sevendays.jsx-2421616147{font-size :20px;-webkit-text-decoration :none;text-decoration :none;color :black;background-color :#f7f7f7;border-radius :2px;padding :5px;margin :0px 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc7Iq57KO8XFxEZXNrdG9wXFxuZXh0anNcXGNvbXBvbmVudHNcXE1haW5fTGVmdF9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRrQixBQUdnQyxBQUlQLEFBVU8sQUFJUCxnQkFiTSxBQWNBLE9BbEJ4QixBQWNBLDZDQVRlLEFBY0EsYUFiYSxBQWNBLDBCQWJQLEFBY0EsbUJBYk4sQUFjQSxhQWJJLEFBY0EsaUJBYm5CLEFBY0EiLCJmaWxlIjoiQzpcXFVzZXJzXFzsirnso7xcXERlc2t0b3BcXG5leHRqc1xcY29tcG9uZW50c1xcTWFpbl9MZWZ0X0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFBvcHVwX0xlZnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBfTGVmdC5qc1wiXHJcblxyXG5cclxuXHJcbnZhciBDaGVja2JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtjaGVja2VkOiB0cnVlfVxyXG4gIH0sXHJcbiAgaGFuZGxlQ2hlY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZH0pO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBtc2c7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jaGVja2VkKSB7XHJcbiAgICAgIG1zZyA9IFwiY2hlY2tlZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnID0gXCJ1bmNoZWNrZWRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfSBkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfS8+XHJcbiAgICAgICAgPHA+dGhpcyBib3ggaXMge21zZ30uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblJlYWN0LnJlbmRlcig8Q2hlY2tib3ggLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbnRhaW5lcicpXHJcbik7XHJcblxyXG5cclxuXHJcbmNvbnN0IE1haW5fTGVmdF9MYXlvdXRfU3R5bGUgPSB7XHJcbiAgICBkaXNwbGF5IDogJ2ZsZXgnLFxyXG4gICAgZmxvYXQgOiAnbGVmdCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zIDogJ2xlZnQnLFxyXG4gICAgaGVpZ2h0IDogJzEwMCUnLFxyXG4gICAgbWluSGVpZ2h0IDogJ2NhbGMoMTAwdmggLSAxMDBweCknLFxyXG4gICAgd2lkdGggOiAnOTklJyxcclxuICAgIGJvcmRlciA6ICdncm9vdmUgMXB4JyxcclxufVxyXG5cclxuY29uc3QgVGl0bGVfTGVmdF9TdHlsZSA9IHtcclxuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICBwYWRkaW5nIDogJzE1cHggMHB4JyxcclxuICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzk5OScsXHJcbn1cclxuXHJcbmNvbnN0IFRyYW5zcGFyZW50ID0ge1xyXG4gIG1hcmdpblRvcCA6ICczNXB4JyxcclxuICBtYXJnaW5Cb3R0b20gOiAnMjBweCcsXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluX0xlZnRfTGF5b3V0KHByb3BzKXtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXtNYWluX0xlZnRfTGF5b3V0X1N0eWxlfT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRvZGF5OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzk5OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvZGF5IHtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luIDogMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXZlbmRheXM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjOTk5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2V2ZW5kYXlzIHtcclxuICAgICAgICBmb250LXNpemUgOiAyMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICAgICAgY29sb3IgOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2Y3ZjdmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzIDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmcgOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luIDogMHB4IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9sZWZ0XCIgc3R5bGU9e1RpdGxlX0xlZnRfU3R5bGV9PlxyXG4gICAgICAgIOydvOyDgVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxQb3B1cF9MZWZ0IC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtUcmFuc3BhcmVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi90b2RheXRvZG9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvZGF5XCI+7Jik64qYPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FsbHRvZG9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNldmVuZGF5c1wiPuyghOyytOuztOq4sDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5fTGVmdF9MYXlvdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\\uC2B9\uC8FC\\Desktop\\nextjs\\components\\Main_Left_Layout.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Title_Left_Style,
    className: "jsx-2421616147" + " " + "title_left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\uC77C\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Popup_Left_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: Transparent,
    className: "jsx-2421616147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/todaytodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "today",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\uC624\uB298")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/alltodo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2421616147" + " " + "sevendays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\uC804\uCCB4\uBCF4\uAE30"))), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Main_Left_Layout);

/***/ })

})
//# sourceMappingURL=alltodo.js.cc53a82c6a2fe8becf7b.hot-update.js.map