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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/navbar */ \"./src/common/navbar.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\LUCAS\\\\Documents\\\\trengenharia\\\\vie\\\\src\\\\components\\\\Navbar\\\\navbar.jsx\",\n    _this = undefined;\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n\n\n\nvar Navbar = function Navbar(_ref) {\n  var lr = _ref.lr,\n      nr = _ref.nr,\n      theme = _ref.theme;\n\n  var scrollTop = function scrollTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\",\n      duration: \"1000\"\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"nav\", {\n    ref: nr,\n    className: \"navbar navbar-expand-lg change \".concat(theme === \"themeL\" ? \"light\" : \"\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container nav-style\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n        className: \"logo ml-auto\",\n        onClick: scrollTop,\n        children: theme ? theme === \"themeL\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.darkLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.lightLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          ref: lr,\n          src: _data_app_json__WEBPACK_IMPORTED_MODULE_2__.lightLogo,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        className: \"navbar-toggler\",\n        type: \"button\",\n        onClick: _common_navbar__WEBPACK_IMPORTED_MODULE_3__.handleMobileDropdown,\n        \"data-toggle\": \"collapse\",\n        \"data-target\": \"#navbarSupportedContent\",\n        \"aria-controls\": \"navbarSupportedContent\",\n        \"aria-expanded\": \"true\",\n        \"aria-label\": \"Toggle navigation\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: \"icon-bar\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"i\", {\n            className: \"fas fa-bars\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"collapse navbar-collapse\",\n        id: \"navbarSupportedContent\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n          className: \"navbar-nav mr-auto\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n              className: \"nav-link\",\n              onClick: scrollTop,\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"howItWorks\",\n              smooth: true,\n              duration: 1000,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Redu\\xE7\\xE3o na conta\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"projects\",\n              smooth: true,\n              duration: 1000,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Projetos\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"whoWeAre\",\n              smooth: true,\n              duration: 1000,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Quem somos\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {\n              to: \"footer\",\n              smooth: true,\n              duration: 1000,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                className: \"nav-link\",\n                children: \"Contato\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLElBQTVCO0FBQWtDLHNCQUFRLEVBQUUsSUFBNUM7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBa0JFO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUEsbUNBQ0UsOERBQUMsOENBQUQ7QUFBTSxnQkFBRSxFQUFDLFVBQVQ7QUFBb0Isb0JBQU0sRUFBRSxJQUE1QjtBQUFrQyxzQkFBUSxFQUFFLElBQTVDO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkYsZUE4QkU7QUFBSSxxQkFBUyxFQUFDLFVBQWQ7QUFBQSxtQ0FDRSw4REFBQyw4Q0FBRDtBQUFNLGdCQUFFLEVBQUMsUUFBVDtBQUFrQixvQkFBTSxFQUFFLElBQTFCO0FBQWdDLHNCQUFRLEVBQUUsSUFBMUM7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQWxGRDs7S0FBTUo7QUFvRk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhci5qc3g/N2FmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtOZXh0IGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuaW1wb3J0IHsgaGFuZGxlRHJvcGRvd24sIGhhbmRsZU1vYmlsZURyb3Bkb3duIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuY29uc3QgTmF2YmFyID0gKHsgbHIsIG5yLCB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiwgZHVyYXRpb246IFwiMTAwMFwiIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgcmVmPXtucn1cclxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgY2hhbmdlICR7XHJcbiAgICAgICAgdGhlbWUgPT09IFwidGhlbWVMXCIgPyBcImxpZ2h0XCIgOiBcIlwiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBuYXYtc3R5bGVcIj5cclxuICAgICAgICB7LyogPExpbmsgdG89XCJjb250YWluZXJcIj4gKi99XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nbyBtbC1hdXRvXCIgb25DbGljaz17c2Nyb2xsVG9wfT5cclxuICAgICAgICAgIHt0aGVtZSA/IChcclxuICAgICAgICAgICAgdGhlbWUgPT09IFwidGhlbWVMXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGltZyByZWY9e2xyfSBzcmM9e2FwcERhdGEuZGFya0xvZ299IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpbWcgcmVmPXtscn0gc3JjPXthcHBEYXRhLmxpZ2h0TG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxpbWcgcmVmPXtscn0gc3JjPXthcHBEYXRhLmxpZ2h0TG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVEcm9wZG93bn1cclxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICB7LyogPExpbmsgdG89XCJjb250YWluZXJcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsyNTB9PiAqL31cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e3Njcm9sbFRvcH0+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cImhvd0l0V29ya3NcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UmVkdcOnw6NvIG5hIGNvbnRhPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCJwcm9qZWN0c1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qcm9qZXRvczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwid2hvV2VBcmVcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UXVlbSBzb21vczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cImZpcnN0XCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17MTAwMH0gY29udGFpbmVySWQ9XCJjb250YWluZXJFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICBUaW1lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCJmb290ZXJcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Q29udGF0bzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmtOZXh0IiwiYXBwRGF0YSIsImhhbmRsZURyb3Bkb3duIiwiaGFuZGxlTW9iaWxlRHJvcGRvd24iLCJMaW5rIiwiTmF2YmFyIiwibHIiLCJuciIsInRoZW1lIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImR1cmF0aW9uIiwiZGFya0xvZ28iLCJsaWdodExvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar/navbar.jsx\n");

/***/ })

});