"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Navbar/navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/navbar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/navbar */ \"./src/common/navbar.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var _common_scrollToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/scrollToTop */ \"./src/common/scrollToTop.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\LUCAS\\\\Documents\\\\trengenharia\\\\vie\\\\src\\\\components\\\\Navbar\\\\navbar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\n\n\nvar Navbar = function Navbar(_ref) {\n  _s();\n\n  var lr = _ref.lr,\n      nr = _ref.nr,\n      theme = _ref.theme;\n  var scrollTop = react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    (0,_common_scrollToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"nav\", {\n    ref: nr,\n    className: \"navbar navbar-expand-lg change \".concat(theme === \"themeL\" ? \"light\" : \"\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n        className: \"logo\",\n        onClick: scrollTop,\n        children: theme ? theme === \"themeL\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.darkLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.lightLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.lightLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        className: \"navbar-toggler\",\n        type: \"button\",\n        onClick: _common_navbar__WEBPACK_IMPORTED_MODULE_3__.handleMobileDropdown,\n        \"data-toggle\": \"collapse\",\n        \"data-target\": \"#navbarSupportedContent\",\n        \"aria-controls\": \"navbarSupportedContent\",\n        \"aria-expanded\": \"false\",\n        \"aria-label\": \"Toggle navigation\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          className: \"icon-bar\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"i\", {\n            className: \"fas fa-bars\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"collapse navbar-collapse\",\n        id: \"navbarSupportedContent\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n          className: \"navbar-nav ml-auto\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            onClick: scrollTop,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n              className: \"nav-link\",\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"howItWorks\",\n              smooth: true,\n              duration: 250,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Redu\\xE7\\xE3o na conta\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"projects\",\n              smooth: true,\n              duration: 250,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Projetos\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"whoWeAre\",\n              smooth: true,\n              duration: 250,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Quem somos\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"footer\",\n              smooth: true,\n              duration: 250,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Contato\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"mSDQHsot6UXejaUOdATlrURyRto=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQWdCRTtBQUFJLHFCQUFTLEVBQUMsVUFBZDtBQUFBLG1DQUNFLDhEQUFDLDhDQUFEO0FBQU0sZ0JBQUUsRUFBQyxVQUFUO0FBQW9CLG9CQUFNLEVBQUUsSUFBNUI7QUFBa0Msc0JBQVEsRUFBRSxHQUE1QztBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLGVBNEJFO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUEsbUNBQ0UsOERBQUMsOENBQUQ7QUFBTSxnQkFBRSxFQUFDLFFBQVQ7QUFBa0Isb0JBQU0sRUFBRSxJQUExQjtBQUFnQyxzQkFBUSxFQUFFLEdBQTFDO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0RUQsQ0FoRkQ7O0dBQU1KOztLQUFBQTtBQWtGTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLmpzeD83YWYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua05leHQgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgYXBwRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9hcHAuanNvblwiO1xyXG5pbXBvcnQgeyBoYW5kbGVEcm9wZG93biwgaGFuZGxlTW9iaWxlRHJvcGRvd24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmJhclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQgc2Nyb2xsVG9Ub3AgZnJvbSBcIi4uLy4uL2NvbW1vbi9zY3JvbGxUb1RvcFwiO1xyXG5jb25zdCBOYXZiYXIgPSAoeyBsciwgbnIsIHRoZW1lIH0pID0+IHtcclxuICBjb25zdCBzY3JvbGxUb3AgPSBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Ub3AoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgcmVmPXtucn1cclxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgY2hhbmdlICR7XHJcbiAgICAgICAgdGhlbWUgPT09IFwidGhlbWVMXCIgPyBcImxpZ2h0XCIgOiBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiA8TGluayB0bz1cImNvbnRhaW5lclwiPiAqL31cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgb25DbGljaz17c2Nyb2xsVG9wfT5cclxuICAgICAgICAgIHt0aGVtZSA/IChcclxuICAgICAgICAgICAgdGhlbWUgPT09IFwidGhlbWVMXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGltZyByZWY9e2xyfSBzcmM9e2FwcERhdGEuZGFya0xvZ299IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpbWcgcmVmPXtscn0gc3JjPXthcHBEYXRhLmxpZ2h0TG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxpbWcgcmVmPXtscn0gc3JjPXthcHBEYXRhLmxpZ2h0TG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVEcm9wZG93bn1cclxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17c2Nyb2xsVG9wfT5cclxuICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCJjb250YWluZXJcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsyNTB9PiAqL31cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiaG93SXRXb3Jrc1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezI1MH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJlZHXDp8OjbyBuYSBjb250YTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwicHJvamVjdHNcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsyNTB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qcm9qZXRvczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwid2hvV2VBcmVcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsyNTB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5RdWVtIHNvbW9zPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiZmlyc3RcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsyNTB9IGNvbnRhaW5lcklkPVwiY29udGFpbmVyRWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgVGltZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiZm9vdGVyXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17MjUwfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Q29udGF0bzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmtOZXh0IiwiYXBwRGF0YSIsImhhbmRsZURyb3Bkb3duIiwiaGFuZGxlTW9iaWxlRHJvcGRvd24iLCJMaW5rIiwic2Nyb2xsVG9Ub3AiLCJOYXZiYXIiLCJsciIsIm5yIiwidGhlbWUiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJkYXJrTG9nbyIsImxpZ2h0TG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar/navbar.jsx\n");

/***/ })

});