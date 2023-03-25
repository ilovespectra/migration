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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst IndexPage = ()=>{\n    _s();\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        days: 0,\n        hours: 0,\n        minutes: 0,\n        seconds: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const migrationCountdownDate = new Date(\"April 18, 2023 04:00:00\").getTime();\n        const x = setInterval(()=>{\n            const now = new Date().getTime();\n            const migrationDistance = migrationCountdownDate - now;\n            const days = Math.floor(migrationDistance / (1000 * 60 * 60 * 24));\n            const hours = Math.floor(migrationDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n            const minutes = Math.floor(migrationDistance % (1000 * 60 * 60) / (1000 * 60));\n            const seconds = Math.floor(migrationDistance % (1000 * 60) / 1000);\n            setCountdown({\n                days,\n                hours,\n                minutes,\n                seconds\n            });\n            if (migrationDistance < 0) {\n                clearInterval(x);\n                setCountdown({\n                    days: 0,\n                    hours: 0,\n                    minutes: 0,\n                    seconds: 0\n                });\n            }\n        }, 1000);\n        return ()=>clearInterval(x);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            flexDirection: \"column\",\n            height: \"100vh\",\n            backgroundImage: \"url('glow.png')\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            color: \"white\",\n            fontFamily: \"'Courier New', sans-serif\",\n            fontSize: \"40px\",\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"absolute\",\n                top: \"50%\",\n                left: \"50%\",\n                transform: \"translate(-50%, -50%)\",\n                padding: \"20px\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                borderRadius: \"10px\",\n                textAlign: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Helium Migration Occurs in:\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"time-number\",\n                            children: countdown.days\n                        }, void 0, false, {\n                            fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        \" days\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"time-number\",\n                            children: countdown.hours\n                        }, void 0, false, {\n                            fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        \" hours\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"time-number\",\n                            children: countdown.minutes\n                        }, void 0, false, {\n                            fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        \" minutes\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"time-number\",\n                            children: countdown.seconds\n                        }, void 0, false, {\n                            fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        \" seconds\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tanny/Projects/migration/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IndexPage, \"JGiT0/NMpDYIEq8ibl7/wfmg6Vc=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxZQUFZLElBQU07O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUN6Q0ssTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSx5QkFBeUIsSUFBSUMsS0FBSywyQkFBMkJDLE9BQU87UUFDMUUsTUFBTUMsSUFBSUMsWUFBWSxJQUFNO1lBQzFCLE1BQU1DLE1BQU0sSUFBSUosT0FBT0MsT0FBTztZQUM5QixNQUFNSSxvQkFBb0JOLHlCQUF5Qks7WUFFbkQsTUFBTVQsT0FBT1csS0FBS0MsS0FBSyxDQUFDRixvQkFBcUIsUUFBTyxLQUFLLEtBQUssRUFBQztZQUMvRCxNQUFNVCxRQUFRVSxLQUFLQyxLQUFLLENBQUMsb0JBQXNCLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztZQUNyRixNQUFNVixVQUFVUyxLQUFLQyxLQUFLLENBQUMsb0JBQXNCLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO1lBQzdFLE1BQU1ULFVBQVVRLEtBQUtDLEtBQUssQ0FBQyxvQkFBc0IsUUFBTyxFQUFDLElBQU07WUFFL0RiLGFBQWE7Z0JBQUVDO2dCQUFNQztnQkFBT0M7Z0JBQVNDO1lBQVE7WUFFN0MsSUFBSU8sb0JBQW9CLEdBQUc7Z0JBQ3pCRyxjQUFjTjtnQkFDZFIsYUFBYTtvQkFBRUMsTUFBTTtvQkFBR0MsT0FBTztvQkFBR0MsU0FBUztvQkFBR0MsU0FBUztnQkFBRTtZQUMzRCxDQUFDO1FBQ0gsR0FBRztRQUVILE9BQU8sSUFBTVUsY0FBY047SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsZUFBZTtZQUNmQyxRQUFRO1lBQ1JDLGlCQUFrQjtZQUNsQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtrQkFFQSw0RUFBQ2I7WUFBSUMsT0FBTztnQkFDVlksVUFBVTtnQkFDVkMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsV0FBVztnQkFDWEMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsY0FBYztnQkFDZEMsV0FBVztZQUNiOzs4QkFDRSw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ3JCOztzQ0FDQyw4REFBQ3NCOzRCQUFLQyxXQUFVO3NDQUFldkMsVUFBVUUsSUFBSTs7Ozs7O3dCQUFRO3dCQUFNO3NDQUMzRCw4REFBQ29DOzRCQUFLQyxXQUFVO3NDQUFldkMsVUFBVUcsS0FBSzs7Ozs7O3dCQUFRO3dCQUFPO3NDQUM3RCw4REFBQ21DOzRCQUFLQyxXQUFVO3NDQUFldkMsVUFBVUksT0FBTzs7Ozs7O3dCQUFRO3dCQUFTO3NDQUNqRSw4REFBQ2tDOzRCQUFLQyxXQUFVO3NDQUFldkMsVUFBVUssT0FBTzs7Ozs7O3dCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEU7R0FuRU1OO0tBQUFBO0FBcUVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50ZG93biwgc2V0Q291bnRkb3duXSA9IHVzZVN0YXRlKHtcbiAgICBkYXlzOiAwLFxuICAgIGhvdXJzOiAwLFxuICAgIG1pbnV0ZXM6IDAsXG4gICAgc2Vjb25kczogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtaWdyYXRpb25Db3VudGRvd25EYXRlID0gbmV3IERhdGUoJ0FwcmlsIDE4LCAyMDIzIDA0OjAwOjAwJykuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHggPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IG1pZ3JhdGlvbkRpc3RhbmNlID0gbWlncmF0aW9uQ291bnRkb3duRGF0ZSAtIG5vdztcblxuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobWlncmF0aW9uRGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChtaWdyYXRpb25EaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtaWdyYXRpb25EaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1pZ3JhdGlvbkRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgIHNldENvdW50ZG93bih7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0pO1xuXG4gICAgICBpZiAobWlncmF0aW9uRGlzdGFuY2UgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG4gICAgICAgIHNldENvdW50ZG93bih7IGRheXM6IDAsIGhvdXJzOiAwLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoeCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdnbG93LnBuZycpYCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250RmFtaWx5OiBcIidDb3VyaWVyIE5ldycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH19PlxuICAgICAgICA8aDM+SGVsaXVtIE1pZ3JhdGlvbiBPY2N1cnMgaW46PC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLW51bWJlclwiPntjb3VudGRvd24uZGF5c308L3NwYW4+IGRheXN7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtbnVtYmVyXCI+e2NvdW50ZG93bi5ob3Vyc308L3NwYW4+IGhvdXJzeycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLW51bWJlclwiPntjb3VudGRvd24ubWludXRlc308L3NwYW4+IG1pbnV0ZXN7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtbnVtYmVyXCI+e2NvdW50ZG93bi5zZWNvbmRzfTwvc3Bhbj4gc2Vjb25kc1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5kZXhQYWdlIiwiY291bnRkb3duIiwic2V0Q291bnRkb3duIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWdyYXRpb25Db3VudGRvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJtaWdyYXRpb25EaXN0YW5jZSIsIk1hdGgiLCJmbG9vciIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiaDMiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});