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
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");






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
      updateLoading = _useMutation2$.loading; // 3. we need the form to handle the updates


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(DisplayError, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
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
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "N8DX0jY1IZ71NkEUJKFQ5hlO+Ac=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
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

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwiaW5wdXRzIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJrZXlmcmFtZXMiLCJGb3JtIiwic3R5bGVkIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxrREFBSCxtQkFBMUI7QUFXQSxJQUFNQyx1QkFBdUIsR0FBR0Qsa0RBQUgsb0JBQTdCO0FBbUJlLFNBQVNFLGFBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQzVDO0FBRDRDLGtCQUVYQywrREFBUSxDQUFDTCxvQkFBRCxFQUF1QjtBQUM5RE0sYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRjtBQURtRCxHQUF2QixDQUZHO0FBQUEsTUFFcENHLElBRm9DLGFBRXBDQSxJQUZvQztBQUFBLE1BRTlCQyxLQUY4QixhQUU5QkEsS0FGOEI7QUFBQSxNQUV2QkMsT0FGdUIsYUFFdkJBLE9BRnVCLEVBTTVDOzs7QUFONEMscUJBVXhDQyxrRUFBVyxDQUFDUix1QkFBRCxFQUEwQjtBQUN2Q0ksYUFBUyxFQUFFO0FB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcblxyXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xyXG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRuYW1lOiBTdHJpbmdcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICAkcHJpY2U6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlUHJvZHVjdChcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBkYXRhOiB7IGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcclxuICAvLyAxLiB3ZSBuZWVkIHRvIGdldCB0aGUgZXhpc3RpbmcgcHJvZHVjdFxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gMi4gd2UgbmVlZCB0byBnZXQgdGhlIG11dGF0aW9uIHRvIHVwZGF0ZSB0aGUgcHJvZHVjdFxyXG4gIGNvbnN0IFtcclxuICAgIHVwZGF0ZVByb2R1Y3QsXHJcbiAgICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxyXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICAvLyBUT0RPOiBwYXNzIGluIHVwZGF0ZXMgdG8gcHJvZHVjdCBoZXJlIVxyXG4gICAgfSxcclxuICB9KTtcclxuICAvLyAzLiB3ZSBuZWVkIHRoZSBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlc1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIFN1Ym1pdCEhXHJcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIC8vIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgIC8vIC8vIEdvIHRvIHRoYXQgcHJvZHVjdCdzIHBhZ2VcclxuICAgICAgICAvLyBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgLy8gICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=