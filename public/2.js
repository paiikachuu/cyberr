(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.loadProducts();
  },
  data: function data() {
    return {
      products: []
    };
  },
  methods: {
    loadProducts: function loadProducts() {
      var _this = this;

      axios({
        method: "get",
        url: "/api/products"
      }).then(function (res) {
        _this.products = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product[data-v-3d344fcf] {\r\n  width: 10rem;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container pt-4" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("b", [_vm._v("Flash Sale  ")]),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-bolt text-danger" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "float-right text-danger" },
          [
            _c("router-link", { attrs: { to: "register" } }, [
              _vm._v("Go to shop")
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "row col-12" },
          _vm._l(_vm.products, function(product, i) {
            return _c("div", { key: i, staticClass: "card m-1 product" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: { src: "/images/laptop-nitro5.png" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("p", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(product.name))
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(product.description))]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(product.price))]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { to: "/product-detail" }
                      },
                      [_vm._v("View details")]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("hr"),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-sm btn-outline-primary" }, [
        _vm._v("Best Seller")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-sm btn-outline-primary" }, [
        _vm._v("High Specs")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-sm btn-outline-primary" }, [
        _vm._v("Cheap Price")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-sm btn-outline-primary" }, [
        _vm._v("Limited Items")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Index/FlashSaleTeaser.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Index/FlashSaleTeaser.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true& */ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true&");
/* harmony import */ var _FlashSaleTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashSaleTeaser.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& */ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FlashSaleTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d344fcf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/FlashSaleTeaser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleTeaser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=style&index=0&id=3d344fcf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_style_index_0_id_3d344fcf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/FlashSaleTeaser.vue?vue&type=template&id=3d344fcf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlashSaleTeaser_vue_vue_type_template_id_3d344fcf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);