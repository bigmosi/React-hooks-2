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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kinyera_Desktop_react_app_speakers_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Header */ \"./src/Header.js\");\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _speakerReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speakerReducer */ \"./src/speakerReducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kinyera/Desktop/react-app-speakers/src/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  (0,_home_kinyera_Desktop_react_app_speakers_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      speakingSaturday = _useState[0],\n      setSpeakingSaturday = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      speakingSunday = _useState2[0],\n      setSpeakingSunday = _useState2[1];\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakerReducer__WEBPACK_IMPORTED_MODULE_8__.default, []),\n      speakerList = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      isLoading = _useState3[0],\n      setIsLoading = _useState3[1];\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_7__.ConfigContext);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setIsLoading(true);\n    new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve();\n      }, 1000);\n    }).then(function () {\n      setIsLoading(false);\n      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.default.filter(function (_ref2) {\n        var sat = _ref2.sat,\n            sun = _ref2.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n      }); //setSpeakerList(speakerListServerFilter);\n\n      dispatch({\n        type: \"setSpeakerList\",\n        data: speakerListServerFilter\n      });\n    });\n    return function () {\n      console.log('cleanup');\n    };\n  }, []); // [speakingSunday, speakingSaturday]);\n\n  var handleChangeSaturday = function handleChangeSaturday() {\n    setSpeakingSaturday(!speakingSaturday);\n  };\n\n  var speakerListFiltered = isLoading ? [] : (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return speakerList.filter(function (_ref3) {\n      var sat = _ref3.sat,\n          sun = _ref3.sun;\n      return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function (a, b) {\n      if (a.firstName < b.firstName) {\n        return -1;\n      }\n\n      if (a.firstName > b.firstName) {\n        return 1;\n      }\n\n      return 0;\n    });\n  }, [speakingSaturday, speakingSunday, speakerList]);\n\n  var handleChangeSunday = function handleChangeSunday() {\n    setSpeakingSunday(!speakingSunday);\n  };\n\n  var heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e, favoriteValue) {\n    e.preventDefault();\n    var sessionId = parseInt(e.target.attributes['data-sessionid'].value);\n    dispatch({\n      type: favoriteValue === true ? \"favorite\" : \"unfavorite\",\n      sessionId: sessionId\n    }); //    setSpeakerList(\n    //      speakerList.map((item) => {\n    //        if (item.id === sessionId) {\n    //          return { ...item, favorite: favoriteValue };\n    //        }\n    //        return item;\n    //      }),\n    //    );\n    //console.log(\"changing session favorte to \" + favoriteValue);\n  }, []);\n  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 25\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn-toolbar  margintopbottom5 checkbox-bigger\",\n        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"hide\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSaturday,\n                checked: speakingSaturday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, _this), \"Saturday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-check-inline\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n              className: \"form-check-label\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: \"form-check-input\",\n                onChange: handleChangeSunday,\n                checked: speakingSunday\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 17\n              }, _this), \"Sunday Speakers\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-deck\",\n          children: speakerListFiltered.map(function (_ref4) {\n            var id = _ref4.id,\n                firstName = _ref4.firstName,\n                lastName = _ref4.lastName,\n                bio = _ref4.bio,\n                favorite = _ref4.favorite;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__.default, {\n              id: id,\n              favorite: favorite,\n              onHeartFavoriteHandler: heartFavoriteHandler,\n              firstName: firstName,\n              lastName: lastName,\n              bio: bio\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Speakers, \"959c3gJcGvj9HDU2DD+rttD/cB8=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzI5NTIiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJ1c2VFZmZlY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwic3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIiLCJTcGVha2VyRGF0YSIsInNhdCIsInN1biIsInR5cGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJtYXAiLCJpZCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBUTtBQUFBOztBQUFBOztBQUFBLGtCQUN5QkMsK0NBQVEsQ0FBQyxJQUFELENBRGpDO0FBQUEsTUFDaEJDLGdC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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTZCRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQ0d5QixtQkFBbUIsQ0FBQ21CLEdBQXBCLENBQ0MsaUJBQWdEO0FBQUEsZ0JBQTdDQyxFQUE2QyxTQUE3Q0EsRUFBNkM7QUFBQSxnQkFBekNkLFNBQXlDLFNBQXpDQSxTQUF5QztBQUFBLGdCQUE5QmUsUUFBOEIsU0FBOUJBLFFBQThCO0FBQUEsZ0JBQXBCQyxHQUFvQixTQUFwQkEsR0FBb0I7QUFBQSxnQkFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLGdDQUNFLDhEQUFDLG1EQUFEO0FBRUUsZ0JBQUUsRUFBRUgsRUFGTjtBQUdFLHNCQUFRLEVBQUVHLFFBSFo7QUFJRSxvQ0FBc0IsRUFBRWYsb0JBSjFCO0FBS0UsdUJBQVMsRUFBRUYsU0FMYjtBQU1FLHNCQUFRLEVBQUVlLFFBTlo7QUFPRSxpQkFBRyxFQUFFQztBQVBQLGVBQ09GLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVdELFdBYkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQXJJRDs7R0FBTWpELFE7O0tBQUFBLFE7QUF1SU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9zcmMvTWVudSc7XG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSAnLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBzcGVha2VyUmVkdWNlciBmcm9tICcuL3NwZWFrZXJSZWR1Y2VyJztcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCBbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XG4gICAgICB9KTtcbiAgICAgIC8vc2V0U3BlYWtlckxpc3Qoc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIpO1xuICAgICAgZGlzcGF0Y2ggKHtcbiAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxuICAgICAgICBkYXRhOnNwZWFrZXJMaXN0U2VydmVyRmlsdGVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFtzcGVha2luZ1N1bmRheSwgc3BlYWtpbmdTYXR1cmRheV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdCBdXG4gICAgKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/IFwiZmF2b3JpdGVcIiA6IFwidW5mYXZvcml0ZVwiLFxuICAgICAgc2Vzc2lvbklkXG4gICAgfSk7XG4vLyAgICBzZXRTcGVha2VyTGlzdChcbi8vICAgICAgc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XG4vLyAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHNlc3Npb25JZCkge1xuLy8gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbi8vICAgICAgICB9XG4vLyAgICAgICAgcmV0dXJuIGl0ZW07XG4vLyAgICAgIH0pLFxuLy8gICAgKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdpbmcgc2Vzc2lvbiBmYXZvcnRlIHRvIFwiICsgZmF2b3JpdGVWYWx1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyICBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxuICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxuICAgICAgICAgICAgICAoeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});