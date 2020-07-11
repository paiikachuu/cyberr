(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Items: function Items() {
      return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../components/cart/Items */ "./resources/js/components/cart/Items.vue"));
    },
    AlsoLike: function AlsoLike() {
      return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ../components/product/AlsoLike */ "./resources/js/components/product/AlsoLike.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", [
        _c("div", { staticClass: "pb-3" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 p-2 bg-white shadow-sm mb-5" },
                [_c("Items")],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row py-5 p-2 bg-white shadow-sm" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-light px-4 py-3 text-uppercase font-weight-bold"
                  },
                  [_vm._v("Order summary")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "p-4" },
                  [
                    _c("p", { staticClass: "font-italic mb-4" }, [
                      _vm._v(
                        "Shipping and additional costs are calculated based on values you have entered."
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-success py-2 btn-block",
                        attrs: { to: "checkout" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-shopping-cart" }),
                        _vm._v("Proceed to Checkout\n          ")
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("AlsoLike")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6" }, [
      _c(
        "div",
        { staticClass: "bg-light px-4 py-2 text-uppercase font-weight-bold" },
        [_vm._v("Coupon code")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-2" }, [
        _c("p", { staticClass: "font-italic mb-4" }, [
          _vm._v("If you have a coupon code, please enter it in the box below")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group mb-4 border p-2" }, [
          _c("input", {
            staticClass: "form-control border-0",
            attrs: {
              type: "text",
              placeholder: "Apply coupon",
              "aria-describedby": "button-addon3"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append border-0" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary px-4",
                attrs: { id: "button-addon3", type: "button" }
              },
              [
                _c("i", { staticClass: "fa fa-gift mr-2" }),
                _vm._v("Apply coupon\n                  ")
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-light px-4 py-3 text-uppercase font-weight-bold" },
        [_vm._v("Instructions for seller")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-4" }, [
        _c("p", { staticClass: "font-italic mb-4" }, [
          _vm._v(
            "If you have some information for the seller you can leave them in the box below"
          )
        ]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "form-control",
          attrs: { name: "", cols: "30", rows: "2" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-unstyled mb-4" }, [
      _c(
        "li",
        { staticClass: "d-flex justify-content-between py-3 border-bottom" },
        [
          _c("strong", { staticClass: "text-muted" }, [
            _vm._v("Order Subtotal")
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("$390.00")])
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "d-flex justify-content-between py-3 border-bottom" },
        [
          _c("strong", { staticClass: "text-muted" }, [
            _vm._v("Shipping and handling")
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("$10.00")])
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "d-flex justify-content-between py-3 border-bottom" },
        [
          _c("strong", { staticClass: "text-muted" }, [_vm._v("Tax")]),
          _vm._v(" "),
          _c("strong", [_vm._v("$0.00")])
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "d-flex justify-content-between py-3 border-bottom" },
        [
          _c("strong", { staticClass: "text-muted" }, [_vm._v("Total")]),
          _vm._v(" "),
          _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("$400.00")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Cart.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Cart.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=7908d3ae& */ "./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/pages/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Cart.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Cart.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=7908d3ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);