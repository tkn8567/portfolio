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

/***/ "./src/loginmodal.tsx":
/*!****************************!*\
  !*** ./src/loginmodal.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LoginModal() {\n    _s();\n    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handler = ()=>setVisible(true);\n    const closeHandler = ()=>{\n        setVisible(false);\n        console.log(\"closed\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                className: \"\",\n                onClick: handler,\n                children: \"Open modal\"\n            }, void 0, false, {\n                fileName: \"/opt/app/src/loginmodal.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                closeButton: true,\n                \"aria-labelledby\": \"modal-title\",\n                open: visible,\n                onClose: closeHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            id: \"modal-title\",\n                            size: 18,\n                            children: [\n                                \"Welcome to\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    b: true,\n                                    size: 18,\n                                    children: \"NextUI\"\n                                }, void 0, false, {\n                                    fileName: \"/opt/app/src/loginmodal.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/opt/app/src/loginmodal.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/opt/app/src/loginmodal.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                clearable: true,\n                                bordered: true,\n                                fullWidth: true,\n                                color: \"primary\",\n                                size: \"lg\",\n                                placeholder: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/opt/app/src/loginmodal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                clearable: true,\n                                bordered: true,\n                                fullWidth: true,\n                                color: \"primary\",\n                                size: \"lg\",\n                                placeholder: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/opt/app/src/loginmodal.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                                justify: \"space-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            size: 14,\n                                            children: \"Remember me\"\n                                        }, void 0, false, {\n                                            fileName: \"/opt/app/src/loginmodal.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/opt/app/src/loginmodal.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        size: 14,\n                                        children: \"Forgot password?\"\n                                    }, void 0, false, {\n                                        fileName: \"/opt/app/src/loginmodal.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/opt/app/src/loginmodal.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/opt/app/src/loginmodal.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                auto: true,\n                                flat: true,\n                                color: \"error\",\n                                onClick: closeHandler,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/opt/app/src/loginmodal.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                auto: true,\n                                onClick: closeHandler,\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"/opt/app/src/loginmodal.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/opt/app/src/loginmodal.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/opt/app/src/loginmodal.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/opt/app/src/loginmodal.tsx\",\n        lineNumber: 14,\n        columnNumber: 1\n    }, this);\n}\n_s(LoginModal, \"OGsIWlGlwYpVUqIrDReJ1GWx7rw=\");\n_c = LoginModal;\nvar _c;\n$RefreshReg$(_c, \"LoginModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9naW5tb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ29EO0FBRS9ELFNBQVNPLGFBQWE7O0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCxxREFBYyxDQUFDLEtBQUs7SUFDbEQsTUFBTVcsVUFBVSxJQUFNRixXQUFXLElBQUk7SUFFckMsTUFBTUcsZUFBZSxJQUFNO1FBQzNCSCxXQUFXLEtBQUs7UUFDaEJJLFFBQVFDLEdBQUcsQ0FBQztJQUNaO0lBRUEscUJBQ0EsOERBQUNDOzswQkFDRyw4REFBQ2IscURBQU1BO2dCQUFDYyxXQUFVO2dCQUFHQyxTQUFTTjswQkFBUzs7Ozs7OzBCQUd2Qyw4REFBQ1Ysb0RBQUtBO2dCQUNOaUIsV0FBVztnQkFDWEMsbUJBQWdCO2dCQUNoQkMsTUFBTVo7Z0JBQ05hLFNBQVNUOztrQ0FFVCw4REFBQ1gsMkRBQVk7a0NBQ1QsNEVBQUNFLG1EQUFJQTs0QkFBQ29CLElBQUc7NEJBQWNDLE1BQU07O2dDQUFJOzhDQUVqQyw4REFBQ3JCLG1EQUFJQTtvQ0FBQ3NCLENBQUM7b0NBQUNELE1BQU07OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt0Qiw4REFBQ3ZCLHlEQUFVOzswQ0FDUCw4REFBQ0csb0RBQUtBO2dDQUNOdUIsU0FBUztnQ0FDVEMsUUFBUTtnQ0FDUkMsU0FBUztnQ0FDVEMsT0FBTTtnQ0FDTk4sTUFBSztnQ0FDTE8sYUFBWTs7Ozs7OzBDQUVaLDhEQUFDM0Isb0RBQUtBO2dDQUNOdUIsU0FBUztnQ0FDVEMsUUFBUTtnQ0FDUkMsU0FBUztnQ0FDVEMsT0FBTTtnQ0FDTk4sTUFBSztnQ0FDTE8sYUFBWTs7Ozs7OzBDQUVaLDhEQUFDMUIsa0RBQUdBO2dDQUFDMkIsU0FBUTs7a0RBQ2IsOERBQUMxQix1REFBUUE7a0RBQ0wsNEVBQUNILG1EQUFJQTs0Q0FBQ3FCLE1BQU07c0RBQUk7Ozs7Ozs7Ozs7O2tEQUVwQiw4REFBQ3JCLG1EQUFJQTt3Q0FBQ3FCLE1BQU07a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUN2QiwyREFBWTs7MENBQ1QsOERBQUNDLHFEQUFNQTtnQ0FBQ2dDLElBQUk7Z0NBQUNDLElBQUk7Z0NBQUNMLE9BQU07Z0NBQVFiLFNBQVNMOzBDQUFjOzs7Ozs7MENBR3ZELDhEQUFDVixxREFBTUE7Z0NBQUNnQyxJQUFJO2dDQUFDakIsU0FBU0w7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QyxDQUFDO0dBL0R1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xvZ2lubW9kYWwudHN4PzBhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgVGV4dCwgSW5wdXQsIFJvdywgQ2hlY2tib3ggfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Nb2RhbCgpIHtcbmNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRWaXNpYmxlKHRydWUpO1xuXG5jb25zdCBjbG9zZUhhbmRsZXIgPSAoKSA9PiB7XG5zZXRWaXNpYmxlKGZhbHNlKTtcbmNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xufTtcblxucmV0dXJuIChcbjxkaXY+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9Jycgb25DbGljaz17aGFuZGxlcn0+XG4gICAgT3BlbiBtb2RhbFxuICAgIDwvQnV0dG9uPlxuICAgIDxNb2RhbFxuICAgIGNsb3NlQnV0dG9uXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxuICAgIG9wZW49e3Zpc2libGV9XG4gICAgb25DbG9zZT17Y2xvc2VIYW5kbGVyfVxuICAgID5cbiAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICA8VGV4dCBpZD1cIm1vZGFsLXRpdGxlXCIgc2l6ZT17MTh9PlxuICAgICAgICBXZWxjb21lIHRvXG4gICAgICAgIDxUZXh0IGIgc2l6ZT17MTh9PlxuICAgICAgICAgICAgTmV4dFVJXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgIGJvcmRlcmVkXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgIGNsZWFyYWJsZVxuICAgICAgICBib3JkZXJlZFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxSb3cganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPENoZWNrYm94PlxuICAgICAgICAgICAgPFRleHQgc2l6ZT17MTR9PlJlbWVtYmVyIG1lPC9UZXh0PlxuICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICA8VGV4dCBzaXplPXsxNH0+Rm9yZ290IHBhc3N3b3JkPzwvVGV4dD5cbiAgICAgICAgPC9Sb3c+XG4gICAgPC9Nb2RhbC5Cb2R5PlxuICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgIDxCdXR0b24gYXV0byBmbGF0IGNvbG9yPVwiZXJyb3JcIiBvbkNsaWNrPXtjbG9zZUhhbmRsZXJ9PlxuICAgICAgICBDbG9zZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBhdXRvIG9uQ2xpY2s9e2Nsb3NlSGFuZGxlcn0+XG4gICAgICAgIFNpZ24gaW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgPC9Nb2RhbD5cbjwvZGl2PlxuKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIkJ1dHRvbiIsIlRleHQiLCJJbnB1dCIsIlJvdyIsIkNoZWNrYm94IiwiTG9naW5Nb2RhbCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwiY2xvc2VIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsImFyaWEtbGFiZWxsZWRieSIsIm9wZW4iLCJvbkNsb3NlIiwiSGVhZGVyIiwiaWQiLCJzaXplIiwiYiIsIkJvZHkiLCJjbGVhcmFibGUiLCJib3JkZXJlZCIsImZ1bGxXaWR0aCIsImNvbG9yIiwicGxhY2Vob2xkZXIiLCJqdXN0aWZ5IiwiRm9vdGVyIiwiYXV0byIsImZsYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/loginmodal.tsx\n"));

/***/ })

});