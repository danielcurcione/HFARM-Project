exports.ids = [5,7];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=dcfebb6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content\"><nav class=\"level\"><div class=\"level-left\"><h2 class=\"title\">"+_vm._ssrEscape(" "+_vm._s(_vm.title)+" ")+"</h2></div> <div class=\"level-right\"><div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.searchFilter === 'true') ? '' : 'none' }))+"><div class=\"filters\"><div class=\"tabs is-toggle is-toggle-rounded is-small\"><ul>"+(_vm._ssrList((_vm.sortData),function(item){return ("<li"+(_vm._ssrAttr("id",'filter_' + item))+"><a><span>"+_vm._ssrEscape(" "+_vm._s(item)+" ")+"</span></a></li>")}))+"</ul></div></div></div> <div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.searchFilter === 'true') ? '' : 'none' }))+"><div class=\"field has-addons\"><p class=\"control\"><input id=\"searchInput\" type=\"text\" placeholder=\"Search...\" class=\"input\"></p> <p class=\"control\"><button class=\"button\"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" width=\"15px\"></button></p></div></div> <div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.title === 'Info') ? '' : 'none' }))+"><div class=\"header-buttons\"><a href=\"https://github.com/danielcurcione/\"><button class=\"button is-dark\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" width=\"20px\">\n                GitHub\n              </button></a> <a href=\"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing\"><button class=\"button is-success\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" width=\"15px\">\n                Spreadsheet\n              </button></a></div></div></div></nav></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=dcfebb6e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: ['title', 'searchFilter', 'sortData'],
  methods: {
    search() {
      var s = document.getElementById("searchInput").value;
      this.$parent.search(s);
    },

    changeTab(key) {
      this.$parent.changeTab(key);
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "778a3da8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search.1be6f69.svg";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github.9ee494a.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spreadsheets.5508b18.png";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trash.bb8494a.svg";

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODguMDIyIiBoZWlnaHQ9IjQ2Ni44MzQiIHZpZXdCb3g9IjAgMCA0ODguMDIyIDQ2Ni44MzQiPgogIDxnIGlkPSJzdGFyLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMC41OTMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNNDcxLjU2MywxNzMuNzc4bC0xNDUuNS0yMC44LTY0LjQtMTMyYy04LTE1LjQtMzAtMTIuMi0zNS4zLDBsLTY0LjQsMTMyLTE0NS42LDIwLjhjLTE2LjQsMS0yMS42LDIwLjktMTAuNCwzMy4ybDEwNSwxMDIuOS0yNSwxNDQuNWMtMi45LDE3LjgsMTYuNywyNy44LDI4LjEsMjAuOGwxMjkuOS02OC42LDEyOS45LDY3LjZjMTMuNiw3LDI5LjgtMi44LDI4LjEtMTkuN2wtMjUtMTQ0LjYsMTA1LTEwMi45QzQ5NC42NjMsMTkzLjQ3OCw0ODUuNTYzLDE3NS40NzgsNDcxLjU2MywxNzMuNzc4Wm0tMTI4LjksMTE0LjNjLTQuMiw1LjItNi4yLDExLjQtNS4yLDE3LjdsMTkuNywxMTYuNC0xMDMuOS01NS4xYy02LjctMi44LTEzLTIuOC0xOC43LDBsLTEwMy45LDU1LjEsMTkuNy0xMTYuNGMxLTcuMy0xLTEzLjUtNS4yLTE3LjdsLTg0LjEtODIuMSwxMTYuNC0xNi42YTE5LjAzNSwxOS4wMzUsMCwwLDAsMTQuNi0xMC40bDUyLTEwNSw1MiwxMDVjMy4xLDUuMiw4LjMsOS40LDE0LjYsMTAuNGwxMTYuMiwxNi42WiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=169380d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[(_vm.noContent)?_vm._ssrNode("<div class=\"add-button\">","</div>",[_vm._ssrNode("<div class=\"card-content\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" width=\"35px\"></div>")],2):_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<header class=\"card-header\"><p class=\"card-header-title\">"+((_vm.client === 'Internal')?("<span>"+_vm._ssrEscape(" "+_vm._s(_vm.client)+" ")+"</span>"):("<span class=\"external\">"+_vm._ssrEscape(" "+_vm._s(_vm.client)+" ")+"</span>"))+"</p> "+((_vm.fav === 'X')?("<div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" width=\"15px\"></div>"):("<div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" width=\"15px\"></div>"))+" <div class=\"icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" width=\"15px\"></div></header> "),_c('nuxt-link',{staticStyle:{"color":"black","text-decoration":"underline"},attrs:{"to":'/' + _vm.client + '/' + _vm.title}},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content"},[_vm._v("\n            "+_vm._s(_vm.title)+" ↗\n        ")])])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=169380d3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: ['id', 'title', 'client', 'fav', 'noContent'],

  data() {
    return {
      card: {
        name: this.title,
        client: this.client,
        favorite: this.favorite,
        id: this.id
      }
    };
  },

  methods: {
    addToFav(opt) {
      if (opt) this.card.favorite = "X";else this.card.favorite = "";
      this.$parent.addToFav(this.card);
    },

    remove() {
      this.$parent.remove(this.card);
    }

  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c69d1422"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default})


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkwIDQ5MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkwIDQ5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gcG9pbnRzPSIyMjIuMDMxLDQ5MCAyNjcuOTY5LDQ5MCAyNjcuOTY5LDI2Ny45NjkgNDkwLDI2Ny45NjkgNDkwLDIyMi4wMzEgMjY3Ljk2OSwyMjIuMDMxIDI2Ny45NjksMCAyMjIuMDMxLDAgDQoJMjIyLjAzMSwyMjIuMDMxIDAsMjIyLjAzMSAwLDI2Ny45NjkgMjIyLjAzMSwyNjcuOTY5ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fav-active.0e91482.svg";

/***/ })

};;
//# sourceMappingURL=card.js.map