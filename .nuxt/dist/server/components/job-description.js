exports.ids = [9];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/JobDescription.vue?vue&type=template&id=1e44d5a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"job-description"},[_vm._ssrNode("<div class=\"content\"><h3>Job Description</h3> <p>\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.\n    </p> <p>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.\n    </p></div> <div class=\"content time\"><h3>"+_vm._ssrEscape(_vm._s(_vm.days)+" days left")+"</h3> <progress"+(_vm._ssrAttr("max",_vm.differentDays))+(_vm._ssrAttr("value",_vm.pastDays))+" class=\"progress is-success is-small\"></progress> <div class=\"date\"><p class=\"start-date\">\n        Start date: <span>"+_vm._ssrEscape(_vm._s(_vm.startDate))+"</span></p> <p class=\"end-date\">\n        End date: <span>"+_vm._ssrEscape(_vm._s(_vm.endDate))+"</span></p> <p class=\"end-date\">\n        Division: <span>SPIRIANT Sales</span></p> <p class=\"end-date\">\n        Experience: <span>Junior 3-5 years</span></p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/JobDescription.vue?vue&type=template&id=1e44d5a2&

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
      startDate: '2021-02-01',
      endDate: '2021-05-01',
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
  "7994e9dc"
  
)

/* harmony default export */ var JobDescription = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-description.js.map