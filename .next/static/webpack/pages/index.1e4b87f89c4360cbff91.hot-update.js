/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kinyera_Desktop_react_app_speakers_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Header */ \"./src/Header.js\");\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _speakerReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speakerReducer */ \"./src/speakerReducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kinyera/Desktop/react-app-speakers/src/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  (0,_home_kinyera_Desktop_react_app_speakers_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      speakingSaturday = _useState[0],\n      setSpeakingSaturday = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      speakingSunday = _useState2[0],\n      setSpeakingSunday = _useState2[1];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakerReducer__WEBPACK_IMPORTED_MODULE_8__.default, []),\n      speakerList = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState3[0],\n      setIsLoading = _useState3[1];\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_7__.ConfigContext);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setIsLoading(true);\n    new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve();\n      }, 1000);\n    }).then(function () {\n      setIsLoading(false);\n      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.default.filter(function (_ref2) {\n        var sat = _ref2.sat,\n            sun = _ref2.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n      }); //setSpeakerList(speakerListServerFilter);\n\n      dispatch({\n        type: \"setSpeakerList\",\n        data: speakerListServerFilter\n      });\n    });\n    return function () {\n      console.log('cleanup');\n    };\n  }, []); // [speakingSunday, speakingSaturday]);\n\n  var handleChangeSaturday = function handleChangeSaturday() {\n    setSpeakingSaturday(!speakingSaturday);\n  };\n\n  var speakerListFiltered = isLoading ? [] : (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return speakerList.filter(function (_ref3) {\n      var sat = _ref3.sat,\n          sun = _ref3.sun;\n      return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function (a, b) {\n      if (a.firstName < b.firstName) {\n        return -1;\n      }\n\n      if (a.firstName > b.firstName) {\n        return 1;\n      }\n\n      return 0;\n    });\n  }, [speakingSaturday, speakingSunday]);\n\n  var handleChangeSunday = function handleChangeSunday() {\n    setSpeakingSunday(!speakingSunday);\n  };\n\n  var heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e, favoriteValue) {\n    e.preventDefault();\n    var sessionId = parseInt(e.target.attributes['data-sessionid'].value);\n    dispatch({\n      type: favoriteValue === true ? \"favorite\" : \"unfavorite\",\n      sessionId: sessionId\n    }); //    setSpeakerList(\n    //      speakerList.map((item) => {\n    //        if (item.id === sessionId) {\n    //          return { ...item, favorite: favoriteValue };\n    //        }\n    //        return item;\n    //      }),\n    //    );\n    //console.log(\"changing session favorte to \" + favoriteValue);\n  }, []);\n  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 25\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn-toolbar  margintopbottom5 checkbox-bigger\",\n        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"hide\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSaturday,\n                checked: speakingSaturday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, _this), \"Saturday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSunday,\n                checked: speakingSunday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 17\n              }, _this), \"Sunday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-deck\",\n          children: speakerListFiltered.map(function (_ref4) {\n            var id = _ref4.id,\n                firstName = _ref4.firstName,\n                lastName = _ref4.lastName,\n                bio = _ref4.bio,\n                favorite = _ref4.favorite;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__.default, {\n              id: id,\n              favorite: favorite,\n              onHeartFavoriteHandler: heartFavoriteHandler,\n              firstName: firstName,\n              lastName: lastName,\n              bio: bio\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Speakers, \"959c3gJcGvj9HDU2DD+rttD/cB8=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzI5NTIiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJ1c2VFZmZlY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwic3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIiLCJTcGVha2VyRGF0YSIsInNhdCIsInN1biIsInR5cGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJtYXAiLCJpZCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUTtBQUFBOztBQUFBOztBQUFBLGtCQUN5QkMsK0NBQVEsQ0FBQyxJQUFELENBRGpDO0FBQUEsTUFDaEJDLGdC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QTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNkJFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFDR3lCLG1CQUFtQixDQUFDbUIsR0FBcEIsQ0FDQyxpQkFBZ0Q7QUFBQSxnQkFBN0NDLEVBQTZDLFNBQTdDQSxFQUE2QztBQUFBLGdCQUF6Q2QsU0FBeUMsU0FBekNBLFNBQXlDO0FBQUEsZ0JBQTlCZSxRQUE4QixTQUE5QkEsUUFBOEI7QUFBQSxnQkFBcEJDLEdBQW9CLFNBQXBCQSxHQUFvQjtBQUFBLGdCQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDOUMsZ0NBQ0UsOERBQUMsbURBQUQ7QUFFRSxnQkFBRSxFQUFFSCxFQUZOO0FBR0Usc0JBQVEsRUFBRUcsUUFIWjtBQUlFLG9DQUFzQixFQUFFZixvQkFKMUI7QUFLRSx1QkFBUyxFQUFFRixTQUxiO0FBTUUsc0JBQVEsRUFBRWUsUUFOWjtBQU9FLGlCQUFHLEVBQUVDO0FBUFAsZUFDT0YsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBV0QsV0FiRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBcklEOztHQUFNakQsUTs7S0FBQUEsUTtBQXVJTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9TcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gJy4vc3BlYWtlclJlZHVjZXInO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKTtcbiAgICAgIH0pO1xuICAgICAgLy9zZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XG4gICAgICBkaXNwYXRjaCAoe1xuICAgICAgICB0eXBlOiBcInNldFNwZWFrZXJMaXN0XCIsXG4gICAgICAgIGRhdGE6c3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gW3NwZWFraW5nU3VuZGF5LCBzcGVha2luZ1NhdHVyZGF5XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IHVzZU1lbW8gKCgpID0+IHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5XSxcbiAgICApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gXCJmYXZvcml0ZVwiIDogXCJ1bmZhdm9yaXRlXCIsXG4gICAgICBzZXNzaW9uSWRcbiAgICB9KTtcbi8vICAgIHNldFNwZWFrZXJMaXN0KFxuLy8gICAgICBzcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcbi8vICAgICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XG4vLyAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xuLy8gICAgICAgIH1cbi8vICAgICAgICByZXR1cm4gaXRlbTtcbi8vICAgICAgfSksXG4vLyAgICApO1xuICAgIC8vY29uc29sZS5sb2coXCJjaGFuZ2luZyBzZXNzaW9uIGZhdm9ydGUgdG8gXCIgKyBmYXZvcml0ZVZhbHVlKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyXCI+XG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});