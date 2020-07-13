(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
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
  data: function data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: []
    };
  },
  methods: {
    formSubmit: function formSubmit() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].register(this.form).then(function (res) {
        _this.$router.push({
          name: 'login'
        });
      })["catch"](function (err) {
        if (err.response.status) {
          _this.errors = err.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "col-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h3", [_vm._v("Registration")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", { attrs: { for: "inputEmail4" } }, [
                  _vm._v("First Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.first_name,
                      expression: "form.first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "first_name",
                    type: "first_name",
                    id: "first_name",
                    required: ""
                  },
                  domProps: { value: _vm.form.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "first_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.first_name
                  ? _c(
                      "small",
                      { staticClass: "text-danger cbrp-form-error-link" },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.errors.first_name[0]) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", { attrs: { for: "inputEmail4" } }, [
                  _vm._v("Last Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.last_name,
                      expression: "form.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "last_name",
                    type: "last_name",
                    id: "last_name",
                    required: ""
                  },
                  domProps: { value: _vm.form.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "last_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.last_name
                  ? _c(
                      "small",
                      { staticClass: "text-danger cbrp-form-error-link" },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.errors.last_name[0]) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "inputAddress" } }, [
                _vm._v("Email")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "email",
                  type: "email",
                  id: "inputEmail",
                  required: ""
                },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.errors.email
                ? _c(
                    "small",
                    { staticClass: "text-danger cbrp-form-error-link" },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.errors.email[0]) +
                          "\n            "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", { attrs: { for: "inputPassword4" } }, [
                  _vm._v("Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "password",
                    type: "password",
                    id: "inputPassword4",
                    required: ""
                  },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.password
                  ? _c(
                      "small",
                      { staticClass: "text-danger cbrp-form-error-link" },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.errors.password[0]) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-md-6" }, [
                _c("label", { attrs: { for: "inputPassword4" } }, [
                  _vm._v("Confirm Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password_confirmation,
                      expression: "form.password_confirmation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "password_confirmation",
                    type: "password",
                    id: "inputPassword4",
                    required: ""
                  },
                  domProps: { value: _vm.form.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.password_confirmation
                  ? _c(
                      "small",
                      { staticClass: "text-danger cbrp-form-error-link" },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.errors.password_confirmation[0]) +
                            "\n              "
                        )
                      ]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.formSubmit()
                  }
                }
              },
              [_vm._v("Submit")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2ebeb09e& */ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=2ebeb09e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2ebeb09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);