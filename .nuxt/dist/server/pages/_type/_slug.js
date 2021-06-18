exports.ids = [11,2,7,9,10];
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

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODQuNTk2IDg0LjU5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODQuNTk2IDg0LjU5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU1LjI4NSwwSDE5Ljc2N0MxMy40OSwwLDguMzg0LDUuMTA3LDguMzg0LDExLjM4NHY2MS44MjhjMCw2LjI3Nyw1LjEwNywxMS4zODQsMTEuMzg0LDExLjM4NGg0NS4wNjINCgkJYzYuMjc2LDAsMTEuMzgzLTUuMTA2LDExLjM4My0xMS4zODR2LTQ5LjgyTDU1LjI4NSwweiBNNTYuOTQyLDEwLjg1M2w5LjU2MSwxMC42ODZoLTkuNTYxVjEwLjg1M3ogTTY0LjgyOSw3OC41OTZIMTkuNzY3DQoJCWMtMi45NjksMC01LjM4NC0yLjQxNS01LjM4NC01LjM4NFYxMS4zODRDMTQuMzg0LDguNDE1LDE2Ljc5OSw2LDE5Ljc2Nyw2aDMxLjE3NXYyMS41MzhoMTkuMjd2NDUuNjc0DQoJCUM3MC4yMTMsNzYuMTgxLDY3Ljc5OCw3OC41OTYsNjQuODI5LDc4LjU5NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NoteDialog.vue?vue&type=template&id=6dec2b04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"note-dialog"},[_vm._ssrNode("<div class=\"modal is-active\"><div class=\"modal-background\"></div> <div class=\"modal-card\"><section class=\"modal-card-body custom-modal-card-body\"><button aria-label=\"close\" class=\"delete\"></button> <div class=\"field\"><label class=\"label\">"+_vm._ssrEscape("Nota per "+_vm._s(_vm.name)+" ")+"</label> <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p></div></section></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NoteDialog.vue?vue&type=template&id=6dec2b04&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NoteDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NoteDialogvue_type_script_lang_js_ = ({
  props: ['name'],

  data() {
    return {};
  },

  methods: {
    openDialog(opt) {
      this.$parent.openDialog(opt);
    }

  }
});
// CONCATENATED MODULE: ./components/NoteDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NoteDialogvue_type_script_lang_js_ = (NoteDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NoteDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NoteDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22a75079"
  
)

/* harmony default export */ var NoteDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/JobDescription.vue?vue&type=template&id=fc82ce50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"job-description"},[_vm._ssrNode("<div class=\"content\"><h3>Job Description</h3> <p>\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.\n    </p> <p>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.\n    </p></div> <div class=\"content time\"><h3>"+_vm._ssrEscape(_vm._s(_vm.days)+" days left")+"</h3> <progress"+(_vm._ssrAttr("max",_vm.differentDays))+(_vm._ssrAttr("value",_vm.pastDays))+" class=\"progress is-success is-small\"></progress> <div class=\"date\"><p class=\"start-date\">\n        Start date: <span>"+_vm._ssrEscape(_vm._s(_vm.startDate))+"</span></p> <p class=\"end-date\">\n        End date: <span>"+_vm._ssrEscape(_vm._s(_vm.endDate))+"</span></p> <p class=\"end-date\">\n        Division: <span>SPIRIANT Sales</span></p> <p class=\"end-date\">\n        Experience: <span>Junior 3-5 years</span></p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/JobDescription.vue?vue&type=template&id=fc82ce50&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/JobDescription.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var JobDescriptionvue_type_script_lang_js_ = ({
  data() {
    return {
      startDate: '2021-06-01',
      endDate: '2023-01-01',
      days: 0,
      differentDays: 0,
      pastDays: 0
    };
  },

  mounted() {
    this.generateRandomEnd();
    this.setDays();
  },

  methods: {
    generateRandomEnd() {
      var mounth = Math.floor(Math.random() * 3) + 5;
      var day = Math.floor(Math.random() * 30);
      if (mounth < 10) mounth = '0' + mounth;
      if (day < 10) day = '0' + day;
      this.endDate = '2021-' + mounth + '-' + day + '';
    },

    setDays() {
      const today = new Date();
      const startDate = this.startDate;
      const endDate = this.endDate;
      const diffInMs = new Date(endDate) - new Date(today.toISOString().split('T')[0]);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      this.days = diffInDays;
      const diffInMs2 = new Date(endDate) - new Date(startDate);
      const diffInDays2 = diffInMs2 / (1000 * 60 * 60 * 24);
      this.differentDays = diffInDays2;
      this.pastDays = this.differentDays - this.days;
    }

  }
});
// CONCATENATED MODULE: ./components/JobDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_JobDescriptionvue_type_script_lang_js_ = (JobDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/JobDescription.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_JobDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f09772c4"
  
)

/* harmony default export */ var JobDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallTable.vue?vue&type=template&id=e836ec7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"candidates-items call-table"},[_vm._ssrNode("<table class=\"table is-fullwidth\"><thead><tr><th width=\"20%\">Candidates</th> <th width=\"15%\">Senior level</th> <th width=\"35%\">Status</th> <th width=\"10%\">Notes</th> <th width=\"10%\"></th></tr></thead></table> <div><table class=\"table is-fullwidth table-items\"><tbody>"+(_vm._ssrList((_vm.data),function(item){return ("<tr><td width=\"20%\">"+_vm._ssrEscape(" "+_vm._s(item.candidates)+" ")+"</td> <td width=\"15%\">"+_vm._ssrEscape(" "+_vm._s(item.seniorLevel)+" ")+"</td> <td width=\"35%\" class=\"status-cell\"><div class=\"select is-rounded\"><select id=\"ClientSelect\">"+(_vm._ssrList((_vm.status),function(value){return (((value === item.status)?("<option selected=\"selected\""+(_vm._ssrAttr("value",value))+">"+_vm._ssrEscape(" "+_vm._s(value)+" ")+"</option>"):("<option"+(_vm._ssrAttr("value",value))+">"+_vm._ssrEscape(" "+_vm._s(value)+" ")+"</option>")))}))+"</select></div></td> <td width=\"10%\">"+((item.notes === 'X')?("<div><button class=\"button is-white\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" width=\"20px\"></button></div>"):"<!---->")+"</td> <td width=\"10%\"><div><button class=\"button is-white\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" width=\"20px\"></button></div></td></tr>")}))+"</tbody></table></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallTable.vue?vue&type=template&id=e836ec7e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CallTablevue_type_script_lang_js_ = ({
  props: ['data'],

  data() {
    return {
      status: ['Scouting', 'Technical interview', 'Preliminary interview', 'Assessment']
    };
  },

  methods: {
    openDialog(opt, name) {
      this.$parent.openDialog(opt, name);
    },

    removeCandidate(id) {
      this.$parent.removeCandidate(id);
    },

    onStatusChange(event, item) {
      item.status = event.target.value;
      this.$parent.editStatusCandidate(item);
    }

  }
});
// CONCATENATED MODULE: ./components/CallTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallTablevue_type_script_lang_js_ = (CallTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CallTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CallTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a232ea7e"
  
)

/* harmony default export */ var CallTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_type/_slug.vue?vue&type=template&id=f7a41558&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_c('Header',{attrs:{"title":_vm.slug}}),_vm._ssrNode(" "),_c('JobDescription'),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (_vm.noteDialog) ? '' : 'none' }))+">","</div>",[_c('NoteDialog',{attrs:{"name":_vm.noteName}})],1),_vm._ssrNode(" "),(_vm.noData)?_vm._ssrNode("<article class=\"message is-warning\">","</article>",[_vm._ssrNode("<div class=\"message-body\">\n        In questa selezione non esistono ancora dei candidati.\n      </div>")],2):_vm._ssrNode("<div class=\"candidates\">","</div>",[_c('CallTable',{attrs:{"data":_vm.candidates}})],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_type/_slug.vue?vue&type=template&id=f7a41558&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_type/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  data() {
    return {
      noData: false,
      candidates: [],
      noteDialog: false,
      noteName: '',
      status: ['Scouting', 'Technical interview', 'Preliminary interview', 'Assessment']
    };
  },

  mounted() {
    this.readData();
  },

  methods: {
    readData() {
      this.loader = true;
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
      var list = [];
      external_axios_default.a.get(url).then(response => {
        if (this.slug) {
          response.data.candidates.forEach(element => {
            if (element.application.includes(this.slug) && element.client.includes(this.type) && element.availability != 'Refused') list.push(element);
          });
        } else {
          response.data.candidates.forEach(element => {
            list.push(element);
          });
        }

        this.candidates = list;
        if (list.length > 0) this.noData = false;else this.noData = true;
      });
    },

    openDialog(opt, name) {
      this.noteDialog = opt;
      this.noteName = name;
    },

    removeCandidate(id) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/' + id;
      external_axios_default.a.delete(url).then(response => {
        this.readData();
      }, error => {
        console.log(error);
      });
    },

    editStatusCandidate(obj) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/' + obj.id;
      external_axios_default.a.put(url, {
        candidate: obj
      }).then(response => {
        this.readData();
      }, error => {
        console.log(error);
      });
    }

  },

  async asyncData({
    params
  }) {
    const slug = params.slug;
    const type = params.type;
    return {
      slug,
      type
    };
  }

});
// CONCATENATED MODULE: ./pages/_type/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _type_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_type/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _type_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d5d802f"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(30).default,JobDescription: __webpack_require__(47).default,NoteDialog: __webpack_require__(41).default,CallTable: __webpack_require__(48).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map