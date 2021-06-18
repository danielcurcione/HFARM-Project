exports.ids = [8];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trash.bb8494a.svg";

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODguMDIyIiBoZWlnaHQ9IjQ2Ni44MzQiIHZpZXdCb3g9IjAgMCA0ODguMDIyIDQ2Ni44MzQiPgogIDxnIGlkPSJzdGFyLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMC41OTMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNNDcxLjU2MywxNzMuNzc4bC0xNDUuNS0yMC44LTY0LjQtMTMyYy04LTE1LjQtMzAtMTIuMi0zNS4zLDBsLTY0LjQsMTMyLTE0NS42LDIwLjhjLTE2LjQsMS0yMS42LDIwLjktMTAuNCwzMy4ybDEwNSwxMDIuOS0yNSwxNDQuNWMtMi45LDE3LjgsMTYuNywyNy44LDI4LjEsMjAuOGwxMjkuOS02OC42LDEyOS45LDY3LjZjMTMuNiw3LDI5LjgtMi44LDI4LjEtMTkuN2wtMjUtMTQ0LjYsMTA1LTEwMi45QzQ5NC42NjMsMTkzLjQ3OCw0ODUuNTYzLDE3NS40NzgsNDcxLjU2MywxNzMuNzc4Wm0tMTI4LjksMTE0LjNjLTQuMiw1LjItNi4yLDExLjQtNS4yLDE3LjdsMTkuNywxMTYuNC0xMDMuOS01NS4xYy02LjctMi44LTEzLTIuOC0xOC43LDBsLTEwMy45LDU1LjEsMTkuNy0xMTYuNGMxLTcuMy0xLTEzLjUtNS4yLTE3LjdsLTg0LjEtODIuMSwxMTYuNC0xNi42YTE5LjAzNSwxOS4wMzUsMCwwLDAsMTQuNi0xMC40bDUyLTEwNSw1MiwxMDVjMy4xLDUuMiw4LjMsOS40LDE0LjYsMTAuNGwxMTYuMiwxNi42WiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InfoPage.vue?vue&type=template&id=73933359&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"infopage"},[_vm._ssrNode("<div class=\"content\"><article class=\"message is-info\"><div class=\"message-body\">\n        This project was done for a company application, based on a specific brief. <br>\n        Therefore, it will not receive updates and will not be developed further.\n      </div></article> <h3><span>#</span>  Technical choices</h3> <p>\n      This application is a demo of an existing HR management application. <br>\n      The whole project is developed with a VueJS framework (<a href=\"https://nuxtjs.org/\">Nuxt</a>) and the graphical elements are based on the <a href=\"https://bulma.io/\">Bulma</a> library to which some components have been added, customized and sometimes recreated. <br><br>\n      The data is read, modified and/or deleted through <a href=\"https://sheety.co/\">Sheety</a>'s API, which works with an intuitive integration of a google spreadsheets file. <br>\n      This <a href=\"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing\">file</a> contains all of the app's data, thus acting as a Database. <br>\n      Here the data is arranged in sheets (replacing DB tables) and each column represents a property. <br>\n      The first row (table header) is used to identify the columns, from the second row onwards are inserted the data that the API will retrieve, always returning JSON objects. <br><br>\n      In this case there is not a real Backend system, nor a Database integration. <br>\n      The choice has been made primarily for the short time available, but also because in the initial design we evaluated the option to use the app directly from the browser, without the need to make local installations or build or deploy processes. <br>\n      The app is ready to use, evaluating the integration with a database the data would have been exposed in a cloud, with several problems of integration of various systems, licenses (sometimes paid) in addition to the personal lack of specific skills for development.\n    </p> <h3><span>#</span> The app works</h3> <p>\n      The application manages a human resources portal. <br>\n      From the dashboard, we have direct links to the app's two most important pages: applications and open positions. <br>\n      The same pages can be reached via side menu, always visible and well organized. <br><br>\n      In the applications page there is the possibility to view all the profiles, to search for specific ones through the search bar, or to filter them according to the availability of the profile (available, declined). <br>\n      Each application immediately presents the possibility to understand the status of availability based on the color next to the name, as well as knowing what position you are applying for and with what role. Each profile can be deleted from the list by clicking on the trash button, or a related note can be viewed. <br><br>\n      Respectively to the application position, there is a direct link to the application page, so you can view the status and other related applications.\n      In the application page (Calls) you can see some identification cards, with some general information: if the application is internal or for an external customer (with name related to the customer) or if it is marked as preferred. <br>\n      There is the possibility to delete, through <button class=\"button is-light is-small\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" width=\"15px\"></button>, the application, or to insert it among the favorites, clicking on <button class=\"button is-light is-small\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" width=\"15px\"></button>. <br>\n      Cards can be filtered by customer category (internal, external) or searched by assigned name. <br><br>\n      In order to create a new application, just select the first card used for the creation and a data entry page (form) will open where the name, the customer and the preference (if any) of the application will be entered. <br>\n      Upon confirmation this will appear in the list together with the others.\n    </p> <h3><span>#</span> Next steps (hypothesis)</h3> <p>\n      Data, session and authorization management, as well as secure operation and privacy, can be managed via the Google authorization system (OAuth 2.0). <br>\n      Each user could register with their google account and log in to the app. This way Google API could be used to access the file that contains the data. <br><br>\n      The application could have new parameters such as: the start and end date (currently only simulated in a random way), so as to filter the application according to a specific month of expiration, or organizing them by priority. <br><br>\n      Other possible implementations could concern candidates' profiles, with a dedicated page with much more personal information and/or scores assigned by recruiters.\n    </p> <h3><span>#</span> Note</h3> <p>\n      Given the initial brief, some graphics were rethought and new sections added, while integrating and maintaining the proposed components and user flow. <br>\n      The application layout has been entirely thought and designed, using some good web design guidelines. <br><br>\n      The project has been created and maintained in a personal <a href=\"https://github.com/danielcurcione/\">GitHub</a> repository, public and available. <br>\n      To this repository has been implemented the automatic build &amp; deploy system of <a href=\"https://www.netlify.com/\">Netlify</a>, hosting system where the project is hosted. <br>\n      This platform automatically updates the app based on the last change uploaded to the git repository. <br><br>\n      The API used was purchased on a monthly, personal plan and allows for up to 200 requests (read, write, edit, delete) per month. <br>\n      The app is then functional until the limit is reached. (For the entire development and testing, about 2,000 were used, using the paid plan).  <br><br></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InfoPage.vue?vue&type=template&id=73933359&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InfoPage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6095453c"
  
)

/* harmony default export */ var InfoPage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=info-page.js.map