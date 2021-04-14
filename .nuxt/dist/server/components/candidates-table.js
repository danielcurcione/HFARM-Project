exports.ids = [4];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trash.bb8494a.svg";

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODQuNTk2IDg0LjU5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODQuNTk2IDg0LjU5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU1LjI4NSwwSDE5Ljc2N0MxMy40OSwwLDguMzg0LDUuMTA3LDguMzg0LDExLjM4NHY2MS44MjhjMCw2LjI3Nyw1LjEwNywxMS4zODQsMTEuMzg0LDExLjM4NGg0NS4wNjINCgkJYzYuMjc2LDAsMTEuMzgzLTUuMTA2LDExLjM4My0xMS4zODR2LTQ5LjgyTDU1LjI4NSwweiBNNTYuOTQyLDEwLjg1M2w5LjU2MSwxMC42ODZoLTkuNTYxVjEwLjg1M3ogTTY0LjgyOSw3OC41OTZIMTkuNzY3DQoJCWMtMi45NjksMC01LjM4NC0yLjQxNS01LjM4NC01LjM4NFYxMS4zODRDMTQuMzg0LDguNDE1LDE2Ljc5OSw2LDE5Ljc2Nyw2aDMxLjE3NXYyMS41MzhoMTkuMjd2NDUuNjc0DQoJCUM3MC4yMTMsNzYuMTgxLDY3Ljc5OCw3OC41OTYsNjQuODI5LDc4LjU5NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CandidatesTable.vue?vue&type=template&id=35ebbbb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"candidates-items"},[_vm._ssrNode("<table class=\"table is-fullwidth\"><thead><tr><th width=\"2%\"></th> <th width=\"23%\">Candidates</th> <th width=\"10%\">Client</th> <th width=\"30%\">Application</th> <th width=\"15%\">Senior level</th> <th width=\"10%\">Notes</th> <th width=\"10%\"></th></tr></thead></table> "),_vm._ssrNode("<div class=\"scoll-table\">","</div>",[_vm._ssrNode("<table class=\"table is-fullwidth table-items\">","</table>",[_vm._ssrNode("<tbody>","</tbody>",[_vm._l((_vm.data),function(item){return [_vm._ssrNode("<tr style=\"margin-top: 5px\">","</tr>",[_vm._ssrNode("<td width=\"2%\">"+((item.availability === 'Refused')?("<div class=\"icon-refused\"></div>"):("<div class=\"icon-availability\"></div>"))+"</td> <td width=\"23%\">"+_vm._ssrEscape(" "+_vm._s(item.candidates)+" ")+"</td> <td width=\"10%\""+(_vm._ssrClass(null,'client-input ' + item.client))+">"+_vm._ssrEscape(" "+_vm._s(item.client)+" ")+"</td> "),_vm._ssrNode("<td width=\"30%\">","</td>",[_c('nuxt-link',{staticStyle:{"color":"black","text-decoration":"underline"},attrs:{"to":'/' + item.client + '/' + item.application}},[_vm._v("\n                "+_vm._s(item.application)+" ↗\n              ")])],1),_vm._ssrNode(" <td width=\"15%\">"+_vm._ssrEscape(" "+_vm._s(item.seniorLevel)+" ")+"</td> <td width=\"10%\">"+((item.notes === 'X')?("<div><button class=\"button is-white\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" width=\"20px\"></button></div>"):"<!---->")+"</td> <td width=\"10%\"><div><button class=\"button is-white\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" width=\"20px\"></button></div></td>")],2)]})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CandidatesTable.vue?vue&type=template&id=35ebbbb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CandidatesTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CandidatesTablevue_type_script_lang_js_ = ({
  props: ['data'],
  methods: {
    openDialog(opt, name) {
      this.$parent.openDialog(opt, name);
    },

    removeCandidate(id) {
      this.$parent.removeCandidate(id);
    }

  }
});
// CONCATENATED MODULE: ./components/CandidatesTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CandidatesTablevue_type_script_lang_js_ = (CandidatesTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CandidatesTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CandidatesTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a556254a"
  
)

/* harmony default export */ var CandidatesTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=candidates-table.js.map