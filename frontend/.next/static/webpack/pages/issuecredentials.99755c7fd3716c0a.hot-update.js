"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/issuecredentials",{

/***/ "./pages/issuecredentials.tsx":
/*!************************************!*\
  !*** ./pages/issuecredentials.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _stores_userStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/userStore */ \"./stores/userStore.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _polygonid_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/polygonid-sdk */ \"./polygonid-sdk/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction IssueCredentialsPage() {\n    _s();\n    const { loggedIn } = (0,_stores_userStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleCreateCredential = async ()=>{\n        const did = \"did:polygonid:polygon:mumbai:2qLnmZsqmkVCXWPeKg3iokTXLETkk7JdxYcqcD24LE\";\n        const schema = \"https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json\";\n        const credentialRequest = await (0,_polygonid_sdk__WEBPACK_IMPORTED_MODULE_6__.createCredential)(schema, did);\n        console.log(credentialRequest);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            minHeight: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    h: \"92vh\",\n                    w: \"100vw\",\n                    bg: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.background,\n                    color: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.primary,\n                    fontFamily: \"Montserrat\",\n                    justifyContent: \"spacebetween\",\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        direction: \"column\",\n                        px: \"2rem\",\n                        py: \"1.5rem\",\n                        h: \"100%\",\n                        w: \"100%\",\n                        overflowY: \"auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                            direction: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    onClick: handleCreateCredential,\n                                    children: \"ISSUE AGE CREDENTIAL\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n                                        src: \"/assets/demo-issuer-qr.png\",\n                                        alt: \"issuer qr code\",\n                                        w: 200,\n                                        h: 200\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    fontSize: \"1rem\",\n                                    fontWeight: \"700\",\n                                    fontFamily: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fonts.body,\n                                    color: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.primary,\n                                    children: \"CREATED CREDENTIALS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    templateColumns: \"repeat(6, 1fr)\",\n                                    gap: 8,\n                                    mt: \"1rem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        fontSize: \"0.75rem\",\n                                        children: \"NO CREDENTIALS CREATED\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            minHeight: \"100vh\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    h: \"92vh\",\n                    w: \"100vw\",\n                    bg: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.background,\n                    color: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.primary,\n                    fontFamily: \"Montserrat\",\n                    justifyContent: \"center\",\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                children: \"AW SHUCKS, PLEASE LOGIN TO USE DASHBOARD!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {\n                    fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/iv-personal/bit-benders-dashboard/frontend/pages/issuecredentials.tsx\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(IssueCredentialsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = IssueCredentialsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IssueCredentialsPage);\nvar _c;\n$RefreshReg$(_c, \"IssueCredentialsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pc3N1ZWNyZWRlbnRpYWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0E7QUFDRjtBQUNSO0FBQzRDO0FBQ3ZDO0FBR1c7QUFFbkQsU0FBU1k7O0lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1gsNkRBQVNBO0lBQzlCLE1BQU1ZLFNBQVNKLHNEQUFTQTtJQUV4QixNQUFNSyx5QkFBeUI7UUFDN0IsTUFBTUMsTUFBTTtRQUNaLE1BQU1DLFNBQVM7UUFDZixNQUFNQyxvQkFBb0IsTUFBTVAsZ0VBQWdCQSxDQUFDTSxRQUFRRDtRQUN6REcsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBRUEscUJBQ0U7a0JBQ0dMLHlCQUNDLDhEQUFDVCxpREFBR0E7WUFBQ2lCLFdBQVU7OzhCQUNiLDhEQUFDcEIsc0RBQU1BOzs7Ozs4QkFDUCw4REFBQ08sa0RBQUlBO29CQUNIYyxHQUFFO29CQUNGQyxHQUFFO29CQUNGQyxJQUFJckIsNERBQVksQ0FBQ3VCLFVBQVU7b0JBQzNCQyxPQUFPeEIsNERBQVksQ0FBQ3lCLE9BQU87b0JBQzNCQyxZQUFXO29CQUNYQyxnQkFBZTtvQkFDZkMsT0FBTTs4QkFFTiw0RUFBQ3ZCLGtEQUFJQTt3QkFDSHdCLFdBQVU7d0JBQ1ZDLElBQUc7d0JBQ0hDLElBQUc7d0JBQ0haLEdBQUU7d0JBQ0ZDLEdBQUU7d0JBQ0ZZLFdBQVU7a0NBV1YsNEVBQUMzQixrREFBSUE7NEJBQUN3QixXQUFVOzs4Q0FDZCw4REFBQ3ZCLG9EQUFNQTtvQ0FBQzJCLFNBQVNyQjs4Q0FBd0I7Ozs7Ozs4Q0FHekMsOERBQUNYLGlEQUFHQTs4Q0FDRiw0RUFBQ0MsbURBQUtBO3dDQUFDZ0MsS0FBSTt3Q0FBNkJDLEtBQUk7d0NBQWlCZixHQUFHO3dDQUFLRCxHQUFHOzs7Ozs7Ozs7Ozs4Q0FFMUUsOERBQUNoQixrREFBSUE7b0NBQ0hpQyxVQUFTO29DQUNUQyxZQUFXO29DQUNYWCxZQUFZMUIsMkRBQVcsQ0FBQ3VDLElBQUk7b0NBQzVCZixPQUFPeEIsNERBQVksQ0FBQ3lCLE9BQU87OENBQzVCOzs7Ozs7OENBR0QsOERBQUNyQixrREFBSUE7b0NBQUNvQyxpQkFBZ0I7b0NBQWlCQyxLQUFLO29DQUFHQyxJQUFHOzhDQUNoRCw0RUFBQ3ZDLGtEQUFJQTt3Q0FBQ2lDLFVBQVM7a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQU9uQyw4REFBQ25DLGlEQUFHQTtZQUFDaUIsV0FBVTs7OEJBQ2IsOERBQUNwQixzREFBTUE7Ozs7OzhCQUNQLDhEQUFDTyxrREFBSUE7b0JBQ0hjLEdBQUU7b0JBQ0ZDLEdBQUU7b0JBQ0ZDLElBQUlyQiw0REFBWSxDQUFDdUIsVUFBVTtvQkFDM0JDLE9BQU94Qiw0REFBWSxDQUFDeUIsT0FBTztvQkFDM0JDLFlBQVc7b0JBQ1hDLGdCQUFlO29CQUNmQyxPQUFNOzhCQUVOLDRFQUFDeEIsa0RBQUlBOzswQ0FDSCw4REFBQ0Qsa0RBQUlBOzBDQUFDOzs7Ozs7NEJBQWlEOzs7Ozs7Ozs7Ozs7OEJBRzNELDhEQUFDTixzREFBTUE7Ozs7Ozs7Ozs7OztBQUtqQjtHQXJGU1k7O1FBRVFGLGtEQUFTQTs7O0tBRmpCRTtBQXVGVCwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2lzc3VlY3JlZGVudGlhbHMudHN4P2M0MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlQ3JlZGVudGlhbE1vZGFsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9DcmVhdGVDcmVkZW50aWFsTW9kYWxcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHVzZXJTdG9yZSBmcm9tIFwiQC9zdG9yZXMvdXNlclN0b3JlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBCb3gsIEltYWdlLCBUZXh0LCBHcmlkLCBGbGV4LCBCdXR0b24sIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmltcG9ydCB7IGNyZWF0ZUNyZWRlbnRpYWwgfSBmcm9tIFwiQC9wb2x5Z29uaWQtc2RrXCI7XG5cbmZ1bmN0aW9uIElzc3VlQ3JlZGVudGlhbHNQYWdlKCkge1xuICBjb25zdCB7IGxvZ2dlZEluIH0gPSB1c2VyU3RvcmUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3JlZGVudGlhbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkaWQgPSBcImRpZDpwb2x5Z29uaWQ6cG9seWdvbjptdW1iYWk6MnFMbm1ac3Fta1ZDWFdQZUtnM2lva1RYTEVUa2s3SmR4WWNxY0QyNExFXCJcbiAgICBjb25zdCBzY2hlbWEgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9pZGVuMy9jbGFpbS1zY2hlbWEtdm9jYWIvbWFpbi9zY2hlbWFzL2pzb24vS1lDQWdlQ3JlZGVudGlhbC12My5qc29uXCJcbiAgICBjb25zdCBjcmVkZW50aWFsUmVxdWVzdCA9IGF3YWl0IGNyZWF0ZUNyZWRlbnRpYWwoc2NoZW1hLCBkaWQpO1xuICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxSZXF1ZXN0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvZ2dlZEluID8gKFxuICAgICAgICA8Qm94IG1pbkhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBoPVwiOTJ2aFwiXG4gICAgICAgICAgICB3PVwiMTAwdndcIlxuICAgICAgICAgICAgYmc9e3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgY29sb3I9e3RoZW1lLmNvbG9ycy5wcmltYXJ5fVxuICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXRcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZWJldHdlZW5cIlxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIHB4PVwiMnJlbVwiXG4gICAgICAgICAgICAgIHB5PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgaD1cIjEwMCVcIlxuICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgIG92ZXJmbG93WT1cImF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPEZsZXhcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgbXQ9XCIwLjI1cmVtXCJcbiAgICAgICAgICAgICAgICBtYj1cIjJyZW1cIlxuICAgICAgICAgICAgICAgIGdhcD1cIjFyZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENyZWF0ZUNyZWRlbnRpYWxNb2RhbCAvPlxuICAgICAgICAgICAgICA8L0ZsZXg+ICovfVxuICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUNyZWRlbnRpYWx9PlxuICAgICAgICAgICAgICAgICAgSVNTVUUgQUdFIENSRURFTlRJQUxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvZGVtby1pc3N1ZXItcXIucG5nXCIgYWx0PVwiaXNzdWVyIHFyIGNvZGVcIiB3PXsyMDB9IGg9ezIwMH0vPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXt0aGVtZS5mb250cy5ib2R5fVxuICAgICAgICAgICAgICAgICAgY29sb3I9e3RoZW1lLmNvbG9ycy5wcmltYXJ5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENSRUFURUQgQ1JFREVOVElBTFNcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDYsIDFmcilcIiBnYXA9ezh9IG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIwLjc1cmVtXCI+Tk8gQ1JFREVOVElBTFMgQ1JFQVRFRDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveCBtaW5IZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgaD1cIjkydmhcIlxuICAgICAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgICAgIGJnPXt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5jb2xvcnMucHJpbWFyeX1cbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0XCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgPFRleHQ+QVcgU0hVQ0tTLCBQTEVBU0UgTE9HSU4gVE8gVVNFIERBU0hCT0FSRCE8L1RleHQ+e1wiIFwifVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXNzdWVDcmVkZW50aWFsc1BhZ2U7XG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiTmF2YmFyIiwidXNlclN0b3JlIiwidGhlbWUiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJHcmlkIiwiRmxleCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsImNyZWF0ZUNyZWRlbnRpYWwiLCJJc3N1ZUNyZWRlbnRpYWxzUGFnZSIsImxvZ2dlZEluIiwicm91dGVyIiwiaGFuZGxlQ3JlYXRlQ3JlZGVudGlhbCIsImRpZCIsInNjaGVtYSIsImNyZWRlbnRpYWxSZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsIm1pbkhlaWdodCIsImgiLCJ3IiwiYmciLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwcmltYXJ5IiwiZm9udEZhbWlseSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ24iLCJkaXJlY3Rpb24iLCJweCIsInB5Iiwib3ZlcmZsb3dZIiwib25DbGljayIsInNyYyIsImFsdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRzIiwiYm9keSIsInRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/issuecredentials.tsx\n"));

/***/ })

});