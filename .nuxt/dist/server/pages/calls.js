exports.ids = [12,1,3,5,7];
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
  "562c4f7a"
  
)

/* harmony default export */ var AddDialog = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Calls.vue?vue&type=template&id=a5fadff2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content grid\">","</div>",[_vm._ssrNode("<div class=\"card-item\">","</div>",[_c('Card',{attrs:{"noContent":true}})],1),_vm._ssrNode(" "),_vm._l((_vm.data),function(item){return _vm._ssrNode("<div class=\"card-item\">","</div>",[_c('Card',{attrs:{"id":item.id,"title":item.name,"client":item.client,"fav":item.favorite}})],1)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"add-dialog\""+(_vm._ssrStyle(null,null, { display: (_vm.addDialog) ? '' : 'none' }))+">","</div>",[_c('AddDialog')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Calls.vue?vue&type=template&id=a5fadff2&

// EXTERNAL MODULE: ./components/Card.vue + 4 modules
var Card = __webpack_require__(37);

// EXTERNAL MODULE: ./components/AddDialog.vue + 4 modules
var AddDialog = __webpack_require__(38);

// EXTERNAL MODULE: external "epic-spinners"
var external_epic_spinners_ = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Calls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Callsvue_type_script_lang_js_ = ({
  props: ['data'],

  data() {
    return {
      addDialog: false
    };
  },

  methods: {
    openDialog(opt) {
      this.addDialog = opt;
    },

    readData() {
      this.$parent.readData();
    },

    addToFav(obj) {
      this.$parent.addToFav(obj);
    },

    remove(obj) {
      this.$parent.remove(obj);
    }

  },
  components: {
    Card: Card["default"],
    AddDialog: AddDialog["default"],
    SpringSpinner: external_epic_spinners_["SpringSpinner"]
  }
});
// CONCATENATED MODULE: ./components/Calls.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Callsvue_type_script_lang_js_ = (Callsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Calls.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Callsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "652b6af4"
  
)

/* harmony default export */ var Calls = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Card: __webpack_require__(37).default,AddDialog: __webpack_require__(38).default})


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/calls.vue?vue&type=template&id=397e4a4a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header',{attrs:{"title":"Calls","searchFilter":"true","sortData":_vm.filters}}),_vm._ssrNode(" "),_c('Calls',{attrs:{"data":_vm.cards}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/calls.vue?vue&type=template&id=397e4a4a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/calls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var callsvue_type_script_lang_js_ = ({
  data() {
    return {
      cards: [],
      cardsBk: [],
      filters: ['All', 'Internal', 'External']
    };
  },

  mounted() {
    this.readData();
  },

  methods: {
    readData(filter) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
      var list = [];
      var fav = [];
      external_axios_default.a.get(url).then(response => {
        var cards = response.data.cards;

        if (filter) {
          cards.forEach(element => {
            if (element.name.includes(filter)) {
              if (element.favorite === 'X') {
                fav.push(element);
              } else {
                list.push(element);
              }
            }
          });
        } else {
          cards.forEach(element => {
            if (element.favorite === 'X') {
              fav.push(element);
            } else {
              list.push(element);
            }
          });
        }

        fav = fav.reverse();
        list = list.reverse();
        this.cards = fav.concat(list);
        this.cardsBk = this.cards;
        this.resetFilter();
        this.$root.$refs.Navbar.readData();
      });
    },

    search(s) {
      this.readData(s);
    },

    addToFav(obj) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards/' + obj.id;
      external_axios_default.a.put(url, {
        card: obj
      }).then(response => {
        this.readData();
      }, error => {
        console.log(error);
      });
    },

    remove(obj) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards/' + obj.id;
      external_axios_default.a.delete(url).then(response => {
        this.readData();
      }, error => {
        console.log(error);
      });
    },

    changeTab(key) {
      var tempList = [];

      if (key != 'All') {
        this.cardsBk.forEach(element => {
          if (key === 'Internal') {
            if (element.client === key) tempList.push(element);
          } else {
            if (element.client != 'Internal') tempList.push(element);
          }
        });
        this.cards = tempList;
      } else {
        this.cards = this.cardsBk;
      }

      this.filters.forEach(element => {
        if (element === key) document.getElementById('filter_' + element).classList.add('is-active');else document.getElementById('filter_' + element).classList.remove('is-active');
      });
    },

    resetFilter() {
      this.filters.forEach(element => {
        document.getElementById('filter_' + element).classList.remove('is-active');
      });
      document.getElementById('filter_All').classList.add('is-active');
    }

  }
});
// CONCATENATED MODULE: ./pages/calls.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_callsvue_type_script_lang_js_ = (callsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/calls.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_callsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79a02db0"
  
)

/* harmony default export */ var calls = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default,Calls: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=calls.js.map