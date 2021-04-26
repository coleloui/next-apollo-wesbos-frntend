webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateProduct; });
/* harmony import */ var E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");






var _jsxFileName = "E:\\coding\\next-apollo-wesbos-frntend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { id: $id, name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SINGLE_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());
function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // 1. we need to get the existing product
  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading; // 2. we need to get the mutation to update the product


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // TODO: pass in updates to product here!

    }
  }),
      _useMutation2 = Object(E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading; // 2.5 create state for the form inputs:


  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])(data === null || data === void 0 ? void 0 : data.Product),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  console.log(inputs);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 23
  }, this); // 3. we need the form to handle the updates

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return E_coding_next_apollo_wesbos_frntend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // TODO: Handle Submit!!
                // const res = await createProduct();
                // clearForm();
                // // Go to that product's page
                // Router.push({
                //   pathname: `/product/${res.data.createProduct.id}`,
                // });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "Description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
          id: "Description",
          name: "Description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "5TghAqGZay5B0gGDehw9fdQkAMk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = UpdateProduct;

var _c;

$RefreshReg$(_c, "UpdateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msa0RBQUgsbUJBQTFCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUdELGtEQUFILG9CQUE3QjtBQW1CZSxTQUFTRSxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUM1QztBQUQ0QyxrQkFFWEMsK0RBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDOURNLGFBQVMsRUFBRTtBQUFFRixRQUFFLEVBQUZBO0FBQUY7QUFEbUQsR0FBdkIsQ0FGRztBQUFBLE1BRXBDRyxJQUZvQyxhQUVwQ0EsSUFGb0M7QUFBQSxNQUU5QkMsS0FGOEIsYUFFOUJBLEtBRjhCO0FBQUEsTUFFdkJDLE9BRnVCLGFBRXZCQSxPQUZ1QixFQU01Qzs7O0FBTjRDLHFCQVV4Q0Msa0VBQVcsQ0FBQ1IsdUJBQUQsRUFBMEI7QUFDdkNJLGFBQVMsRUFBRTtBQUNURixRQUFFLEVBQUZBLEVBRFMsQ0FFVDs7QUFGUztBQUQ0QixHQUExQixDQVY2QjtBQUFBO0FBQUEsTUFRMUNPLGFBUjBDO0FBQUE7QUFBQSxNQVNsQ0MsVUFUa0Msa0JBU3hDTCxJQVR3QztBQUFBLE1BU2ZNLFdBVGUsa0JBU3RCTCxLQVRzQjtBQUFBLE1BU09NLGFBVFAsa0JBU0ZMLE9BVEUsRUFnQjVDOzs7QUFoQjRDLGlCQWlCV00sNERBQU8sQ0FBQ1IsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVTLE9BQVAsQ0FqQmxCO0FBQUEsTUFpQnBDQyxNQWpCb0MsWUFpQnBDQSxNQWpCb0M7QUFBQSxNQWlCNUJDLFlBakI0QixZQWlCNUJBLFlBakI0QjtBQUFBLE1BaUJkQyxTQWpCYyxZQWlCZEEsU0FqQmM7QUFBQSxNQWlCSEMsU0FqQkcsWUFpQkhBLFNBakJHOztBQWtCNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaO0FBQ0EsTUFBSVIsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FuQitCLENBb0I1Qzs7QUFDQSxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLFlBQVE7QUFBQSx1VUFBRSxpQkFBT2MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLGlCQUFDLENBQUNDLGNBQUYsR0FEUSxDQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVjtBQUFBLDRCQVlFLHFFQUFDLHFEQUFEO0FBQWMsV0FBSyxFQUFFaEIsS0FBSyxJQUFJSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFhRTtBQUFVLGNBQVEsRUFBRUMsYUFBcEI7QUFBbUMsbUJBQVdBLGFBQTlDO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxZQUFFLEVBQUMsTUFGTDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRyxNQUFNLENBQUNRLElBTGhCO0FBTUUsa0JBQVEsRUFBRVA7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUscUJBQVcsRUFBQyxPQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNTLEtBTGhCO0FBTUUsa0JBQVEsRUFBRVI7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBQSwrQ0FFRTtBQUNFLFlBQUUsRUFBQyxhQURMO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxxQkFBVyxFQUFDLGFBSGQ7QUFJRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ1UsV0FKaEI7QUFLRSxrQkFBUSxFQUFFVDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBaUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7O0dBeEV1QmYsYTtVQUVXRSx1RCxFQVE3QkssMEQsRUFPbURLLG9EOzs7S0FqQmpDWixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS43NDBmZTg4MTBiNGJhN2MwMDBiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcblxyXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xyXG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRuYW1lOiBTdHJpbmdcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICAkcHJpY2U6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlUHJvZHVjdChcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBkYXRhOiB7IGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcclxuICAvLyAxLiB3ZSBuZWVkIHRvIGdldCB0aGUgZXhpc3RpbmcgcHJvZHVjdFxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gMi4gd2UgbmVlZCB0byBnZXQgdGhlIG11dGF0aW9uIHRvIHVwZGF0ZSB0aGUgcHJvZHVjdFxyXG4gIGNvbnN0IFtcclxuICAgIHVwZGF0ZVByb2R1Y3QsXHJcbiAgICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxyXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICAvLyBUT0RPOiBwYXNzIGluIHVwZGF0ZXMgdG8gcHJvZHVjdCBoZXJlIVxyXG4gICAgfSxcclxuICB9KTtcclxuICAvLyAyLjUgY3JlYXRlIHN0YXRlIGZvciB0aGUgZm9ybSBpbnB1dHM6XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oZGF0YT8uUHJvZHVjdCk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPmxvYWRpbmcuLi48L3A+O1xyXG4gIC8vIDMuIHdlIG5lZWQgdGhlIGZvcm0gdG8gaGFuZGxlIHRoZSB1cGRhdGVzXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgU3VibWl0ISFcclxuICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XHJcbiAgICAgICAgLy8gY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgLy8gLy8gR28gdG8gdGhhdCBwcm9kdWN0J3MgcGFnZVxyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3VwZGF0ZUxvYWRpbmd9IGFyaWEtYnVzeT17dXBkYXRlTG9hZGluZ30+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJEZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=