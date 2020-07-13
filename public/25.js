(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      app_user: null,
      is_login: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('login', function () {
      _this.is_login = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].auth().then(function (res) {
        _this.app_user = res.data;
      });
    });
  },
  methods: {
    logout: function logout() {
      var _this2 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].logout().then(function () {
        _this2.app_user = null;
        _this2.is_login = false;
        localStorage.removeItem("auth");

        _this2.$router.push({
          name: 'login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "nav",
    { staticClass: "navbar navbar-expand-md navbar-light bg-white shadow-sm" },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: "/" } },
            [_vm._v("Cyberr Shopping ")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c("ul", { staticClass: "navbar-nav mr-auto" }),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    !_vm.is_login
                      ? _c(
                          "router-link",
                          { staticClass: "nav-link", attrs: { to: "login" } },
                          [_vm._v("Login")]
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    !_vm.is_login
                      ? _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: "register" }
                          },
                          [_vm._v("Register")]
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.is_login && _vm.app_user != null
                  ? _c("li", { staticClass: "nav-item dropdown inline" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link dropdown-toggle",
                          attrs: {
                            id: "navbarDropdown",
                            href: "#",
                            role: "button",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.app_user.first_name) +
                              "\n                            "
                          ),
                          _c("span", { staticClass: "caret" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu dropdown-menu-right",
                          attrs: { "aria-labelledby": "navbarDropdown" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: {
                                onclick: "event.preventDefault();",
                                href: "#"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.logout()
                                }
                              }
                            },
                            [_vm._v("Logout")]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Api.js":
/*!**********************************!*\
  !*** ./resources/js/apis/Api.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var Api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://127.0.0.1:8000/api"
});
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./resources/js/apis/Csrf.js":
/*!***********************************!*\
  !*** ./resources/js/apis/Csrf.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getCookie: function getCookie() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/sanctum/csrf-cookie');
  }
});

/***/ }),

/***/ "./resources/js/apis/User.js":
/*!***********************************!*\
  !*** ./resources/js/apis/User.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");
/* harmony import */ var _Csrf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Csrf */ "./resources/js/apis/Csrf.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  register: function register(form) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Csrf__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie();

            case 2:
              return _context.abrupt("return", _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/register", form));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  login: function login(form) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _Csrf__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie();

            case 2:
              return _context2.abrupt("return", _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/login", form));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  logout: function logout(form) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Csrf__WEBPACK_IMPORTED_MODULE_2__["default"].getCookie();

            case 2:
              return _context3.abrupt("return", _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/logout", form));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  auth: function auth() {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get('/user');
  }
});

/***/ }),

/***/ "./resources/js/components/layout/Navigation.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/layout/Navigation.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=5dc3b6fe& */ "./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=5dc3b6fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Navigation.vue?vue&type=template&id=5dc3b6fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5dc3b6fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);