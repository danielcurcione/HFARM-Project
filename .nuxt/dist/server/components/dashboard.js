exports.ids = [6];
exports.modules = {

/***/ 42:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgMjIwIDE4MCI+CiAgPHBhdGggaWQ9InN1aXRjYXNlLXN2Z3JlcG8tY29tIiBkPSJNMTU0LjE0OCw5NWE4LjQ1Myw4LjQ1MywwLDAsMC02LDIuNzMxLDkuMjQsOS4yNCwwLDAsMC0yLjA0NCw0LjY4MiwyNC4xNTQsMjQuMTU0LDAsMCwwLC4zLDguMjY2Yy4xOSwxLjEyMy40MiwyLjIxOS42NTksMy4yNjhoMTEuMTQxYy0uNC0xLjUtLjgzNC0zLjI4MS0xLjEyOC01LjAyMWEyMy43NzUsMjMuNzc1LDAsMCwxLS4zMTktMy4yNjhoNTIuNDc4YTIzLjY4MywyMy42ODMsMCwwLDEtLjMxOSwzLjI2OGMtLjI5NSwxLjc0LS43MjQsMy41MTctMS4xMjgsNS4wMjFoMTEuMTQxYy4yNC0xLjA0OS40NjktMi4xNDUuNjU5LTMuMjY4YTI0LjE1NCwyNC4xNTQsMCwwLDAsLjMtOC4yNjYsOS4yMzgsOS4yMzgsMCwwLDAtMi4wNDQtNC42ODIsOC40NTIsOC40NTIsMCwwLDAtNi0yLjczMVptLTYzLjExNSw5LjQ3NHYxMC42NThoMzAuMDU1VjEwNC40NzRabTE1My44OCwwdjEwLjY1OGgzMC4wNTVWMTA0LjQ3NFpNODYuODI1LDEyNC42MDVjLTMuMDA1LDAtNi42NDIsMS42NDQtOS40LDQuMzZTNzMsMTM1LjI2Myw3MywxMzguMjI0VjI2MS4zODJjMCwyLjk2MSwxLjY2OSw2LjU0Myw0LjQyNiw5LjI1OXM2LjM5NCw0LjM2LDkuNCw0LjM2SDEwMC42NVYxMjQuNjA1Wm0yNC42NDUsMFYyNzVIMjU0LjUzVjEyNC42MDVabTE1My44OCwwVjI3NWgxMy44MjVjMy4wMDUsMCw2LjY0Mi0xLjY0NCw5LjQtNC4zNnM0LjQyNi02LjMsNC40MjYtOS4yNTlWMTM4LjIyNGMwLTIuOTYxLTEuNjY5LTYuNTQzLTQuNDI2LTkuMjU5cy02LjM5NC00LjM2LTkuNC00LjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTczIC05NSkiIGZpbGw9IiMyYjU4ZGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/people.b10309a.svg";

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dashboard.vue?vue&type=template&id=1c26fcd2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard"},[_vm._ssrNode("<div class=\"content count-calls\">","</div>",[_vm._ssrNode("<h6>Active Projects</h6> <div class=\"numbers\"><span class=\"tot\">"+_vm._ssrEscape(" "+_vm._s(_vm.calls)+" ")+"</span> <span class=\"new\">+1</span> <div class=\"image\"><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+"></div></div> "),_c('nuxt-link',{attrs:{"to":"/candidates"}},[_c('h4',[_vm._v("View all ↗")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content count-calls\" style=\"margin-left: 20px\">","</div>",[_vm._ssrNode("<h6>Candidates</h6> <div class=\"numbers\"><span class=\"tot\">"+_vm._ssrEscape(" "+_vm._s(_vm.candidates)+" ")+"</span> <span class=\"new\">+4</span> <div class=\"image\"><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+"></div></div> "),_c('nuxt-link',{attrs:{"to":"/candidates"}},[_c('h4',[_vm._v("View all ↗")])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Dashboard.vue?vue&type=template&id=1c26fcd2&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dashboard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Dashboardvue_type_script_lang_js_ = ({
  data() {
    return {
      calls: 0,
      candidates: 0
    };
  },

  mounted() {
    this.count();
  },

  methods: {
    count() {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
      external_axios_default.a.get(url).then(response => {
        var cards = response.data.cards;
        this.calls = cards.length;
      });
      let url2 = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
      external_axios_default.a.get(url2).then(response => {
        var candidates = response.data.candidates;
        this.candidates = candidates.length;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dashboardvue_type_script_lang_js_ = (Dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Dashboard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ddbf745"
  
)

/* harmony default export */ var Dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map