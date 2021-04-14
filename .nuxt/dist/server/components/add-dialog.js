exports.ids = [1,7];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=34ac60a9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content\"><nav class=\"level\"><div class=\"level-left\"><h2 class=\"title\">"+_vm._ssrEscape(" "+_vm._s(_vm.title)+" ")+"</h2></div> <div class=\"level-right\"><div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.searchFilter === 'true') ? '' : 'none' }))+"><div class=\"filters\"><div class=\"tabs is-toggle is-toggle-rounded is-small\"><ul>"+(_vm._ssrList((_vm.sortData),function(item){return ("<li"+(_vm._ssrAttr("id",'filter_' + item))+"><a><span>"+_vm._ssrEscape(" "+_vm._s(item)+" ")+"</span></a></li>")}))+"</ul></div></div></div> <div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.searchFilter === 'true') ? '' : 'none' }))+"><div class=\"field has-addons\"><p class=\"control\"><input id=\"searchInput\" type=\"text\" placeholder=\"Search...\" class=\"input\"></p> <p class=\"control\"><button class=\"button\"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" width=\"15px\"></button></p></div></div> <div class=\"level-item\""+(_vm._ssrStyle(null,null, { display: (_vm.title === 'Info') ? '' : 'none' }))+"><div class=\"header-buttons\"><a href=\"https://github.com/danielcurcione/HFARM-Project\"><button class=\"button is-dark\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" width=\"20px\">\n                GitHub\n              </button></a> <a href=\"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing\"><button class=\"button is-success\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" width=\"15px\">\n                Spreadsheet\n              </button></a></div></div></div></nav></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=34ac60a9&

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
  "499c4cc0"
  
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddDialog.vue?vue&type=template&id=63aadf9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal is-active"},[_vm._ssrNode("<div class=\"modal-background\"></div> <div class=\"modal-card\"><header class=\"modal-card-head\"><p class=\"modal-card-title\">Aggiungi nuova Calls</p> <button aria-label=\"close\" class=\"delete\"></button></header> <section class=\"modal-card-body\"><div class=\"field\"><label class=\"label\">Nome</label> <div class=\"control\"><input id=\"DescrInput\" type=\"text\" placeholder=\"Testo\" class=\"input\"></div></div> <div class=\"field\"><label class=\"label\">Cliente</label> <div class=\"control\"><div class=\"select\"><select id=\"ClientSelect\"><option value=\"Internal\">Internal</option> <option value=\"External\">External</option></select></div></div> "+((_vm.client === 'External')?("<div class=\"control\" style=\"margin-top: 10px\"><input id=\"ClientNameInput\" type=\"text\" placeholder=\"Nome cliente\" class=\"input\"></div>"):"<!---->")+"</div> <div class=\"field\"><div class=\"control\"><label class=\"checkbox\"><input type=\"checkbox\" id=\"FavCheck\">\n            Aggiungi ai preferiti\n          </label></div></div></section> <footer class=\"modal-card-foot\"><button class=\"button is-success\">Conferma</button></footer></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AddDialog.vue?vue&type=template&id=63aadf9e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AddDialogvue_type_script_lang_js_ = ({
  data() {
    return {
      client: 'Internal'
    };
  },

  methods: {
    openDialog(opt) {
      this.clearDialog();
      this.$parent.openDialog(opt);
    },

    onChange(event) {
      this.client = event.target.value;
    },

    createNewCard() {
      this.$parent.createNewCard();
    },

    clearDialog() {
      document.getElementById("DescrInput").value = '';
      document.getElementById("ClientSelect").value = 'Internal';
      this.client = 'Internal';
      document.getElementById("FavCheck").checked = false;
    },

    createNewCard() {
      var descr = document.getElementById("DescrInput").value;
      var fav = document.getElementById("FavCheck").checked || '';
      var client = document.getElementById("ClientSelect").value;
      if (client === "External") client = document.getElementById("ClientNameInput").value;
      if (fav) fav = 'X';
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
      external_axios_default.a.post(url, {
        card: {
          name: descr,
          client: client,
          favorite: fav
        }
      }).then(response => {
        this.$parent.openDialog(false);
        this.$parent.readData();
        this.clearDialog();
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/AddDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddDialogvue_type_script_lang_js_ = (AddDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AddDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AddDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7731daf4"
  
)

/* harmony default export */ var AddDialog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=add-dialog.js.map