(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,9,11,12],{219:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{id:"searchInput",type:"text",placeholder:"Search..."}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-buttons"},[r("a",{attrs:{href:"https://github.com/danielcurcione/"}},[r("button",{staticClass:"button is-dark"},[r("img",{attrs:{src:n(221),width:"20px"}}),t._v("\n                GitHub\n              ")])]),t._v(" "),r("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing"}},[r("button",{staticClass:"button is-success"},[r("img",{attrs:{src:n(222),width:"15px"}}),t._v("\n                Spreadsheet\n              ")])])])}],o=(n(34),n(97),{props:["title","searchFilter","sortData"],methods:{search:function(){var s=document.getElementById("searchInput").value;this.$parent.search(s)},changeTab:function(t){this.$parent.changeTab(t)}}}),c=n(21),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content"},[r("nav",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("h2",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),r("div",{staticClass:"level-right"},[r("div",{directives:[{name:"show",rawName:"v-show",value:"true"===t.searchFilter,expression:"searchFilter === 'true'"}],staticClass:"level-item"},[r("div",{staticClass:"filters"},[r("div",{staticClass:"tabs is-toggle is-toggle-rounded is-small"},[r("ul",[t._l(t.sortData,(function(e){return[r("li",{key:e,attrs:{id:"filter_"+e}},[r("a",{on:{click:function(n){return t.changeTab(e)}}},[r("span",[t._v(" "+t._s(e)+" ")])])])]}))],2)])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"true"===t.searchFilter,expression:"searchFilter === 'true'"}],staticClass:"level-item"},[r("div",{staticClass:"field has-addons"},[t._m(0),t._v(" "),r("p",{staticClass:"control"},[r("button",{staticClass:"button",on:{click:function(e){return t.search()}}},[r("img",{attrs:{src:n(220),width:"15px"}})])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"Info"===t.title,expression:"title === 'Info'"}],staticClass:"level-item"},[t._m(1)])])])])])}),r,!1,null,null,null);e.default=component.exports},220:function(t,e,n){t.exports=n.p+"img/search.1be6f69.svg"},221:function(t,e,n){t.exports=n.p+"img/github.9ee494a.png"},222:function(t,e,n){t.exports=n.p+"img/spreadsheets.5508b18.png"},223:function(t,e,n){t.exports=n.p+"img/trash.bb8494a.svg"},225:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODQuNTk2IDg0LjU5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODQuNTk2IDg0LjU5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU1LjI4NSwwSDE5Ljc2N0MxMy40OSwwLDguMzg0LDUuMTA3LDguMzg0LDExLjM4NHY2MS44MjhjMCw2LjI3Nyw1LjEwNywxMS4zODQsMTEuMzg0LDExLjM4NGg0NS4wNjINCgkJYzYuMjc2LDAsMTEuMzgzLTUuMTA2LDExLjM4My0xMS4zODR2LTQ5LjgyTDU1LjI4NSwweiBNNTYuOTQyLDEwLjg1M2w5LjU2MSwxMC42ODZoLTkuNTYxVjEwLjg1M3ogTTY0LjgyOSw3OC41OTZIMTkuNzY3DQoJCWMtMi45NjksMC01LjM4NC0yLjQxNS01LjM4NC01LjM4NFYxMS4zODRDMTQuMzg0LDguNDE1LDE2Ljc5OSw2LDE5Ljc2Nyw2aDMxLjE3NXYyMS41MzhoMTkuMjd2NDUuNjc0DQoJCUM3MC4yMTMsNzYuMTgxLDY3Ljc5OCw3OC41OTYsNjQuODI5LDc4LjU5NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},230:function(t,e,n){"use strict";n.r(e);var r={props:["name"],data:function(){return{}},methods:{openDialog:function(t){this.$parent.openDialog(t)}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-dialog"},[n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("section",{staticClass:"modal-card-body custom-modal-card-body"},[n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.openDialog(!1)}}}),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Nota per "+t._s(t.name)+" ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,n){"use strict";n.r(e);n(34),n(148);var r={data:function(){return{startDate:"2021-06-01",endDate:"2023-01-01",days:0,differentDays:0,pastDays:0}},mounted:function(){this.generateRandomEnd(),this.setDays()},methods:{generateRandomEnd:function(){var t=Math.floor(3*Math.random())+5,e=Math.floor(30*Math.random());t<10&&(t="0"+t),e<10&&(e="0"+e),this.endDate="2021-"+t+"-"+e},setDays:function(){var t=new Date,e=this.startDate,n=this.endDate,r=(new Date(n)-new Date(t.toISOString().split("T")[0]))/864e5;this.days=r;var o=(new Date(n)-new Date(e))/864e5;this.differentDays=o,this.pastDays=this.differentDays-this.days}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"job-description"},[t._m(0),t._v(" "),n("div",{staticClass:"content time"},[n("h3",[t._v(t._s(t.days)+" days left")]),t._v(" "),n("progress",{staticClass:"progress is-success is-small",attrs:{max:t.differentDays},domProps:{value:t.pastDays}}),t._v(" "),n("div",{staticClass:"date"},[n("p",{staticClass:"start-date"},[t._v("\n        Start date: "),n("span",[t._v(t._s(t.startDate))])]),t._v(" "),n("p",{staticClass:"end-date"},[t._v("\n        End date: "),n("span",[t._v(t._s(t.endDate))])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",[t._v("Job Description")]),t._v(" "),n("p",[t._v("\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.\n    ")]),t._v(" "),n("p",[t._v("\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"end-date"},[t._v("\n        Division: "),n("span",[t._v("SPIRIANT Sales")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"end-date"},[t._v("\n        Experience: "),n("span",[t._v("Junior 3-5 years")])])}],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n.r(e);var r={props:["data"],data:function(){return{status:["Scouting","Technical interview","Preliminary interview","Assessment"]}},methods:{openDialog:function(t,e){this.$parent.openDialog(t,e)},removeCandidate:function(t){this.$parent.removeCandidate(t)},onStatusChange:function(t,e){e.status=t.target.value,this.$parent.editStatusCandidate(e)}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"candidates-items call-table"},[t._m(0),t._v(" "),r("div",[r("table",{staticClass:"table is-fullwidth table-items"},[r("tbody",[t._l(t.data,(function(e){return[r("tr",{key:e.id},[r("td",{attrs:{width:"20%"}},[t._v(" "+t._s(e.candidates)+" ")]),t._v(" "),r("td",{attrs:{width:"15%"}},[t._v(" "+t._s(e.seniorLevel)+" ")]),t._v(" "),r("td",{staticClass:"status-cell",attrs:{width:"35%"}},[r("div",{staticClass:"select is-rounded"},[r("select",{attrs:{id:"ClientSelect"},on:{change:function(n){return t.onStatusChange(n,e)}}},[t._l(t.status,(function(n){return[n===e.status?r("option",{key:n,attrs:{selected:""},domProps:{value:n}},[t._v(" "+t._s(n)+" ")]):r("option",{key:n,domProps:{value:n}},[t._v(" "+t._s(n)+" ")])]}))],2)])]),t._v(" "),r("td",{attrs:{width:"10%"}},["X"===e.notes?r("div",[r("button",{staticClass:"button is-white",on:{click:function(n){return t.openDialog(!0,e.candidates)}}},[r("img",{attrs:{src:n(225),width:"20px"}})])]):t._e()]),t._v(" "),r("td",{attrs:{width:"10%"}},[r("div",[r("button",{staticClass:"button is-white",on:{click:function(n){return t.removeCandidate(e.id)}}},[r("img",{attrs:{src:n(223),width:"20px"}})])])])])]}))],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table is-fullwidth"},[n("thead",[n("tr",[n("th",{attrs:{width:"20%"}},[t._v("Candidates")]),t._v(" "),n("th",{attrs:{width:"15%"}},[t._v("Senior level")]),t._v(" "),n("th",{attrs:{width:"35%"}},[t._v("Status")]),t._v(" "),n("th",{attrs:{width:"10%"}},[t._v("Notes")]),t._v(" "),n("th",{attrs:{width:"10%"}})])])])}],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);n(44),n(45),n(35),n(36);var r=n(7),o=n(98),c=n.n(o),l={data:function(){return{noData:!1,candidates:[],noteDialog:!1,noteName:"",status:["Scouting","Technical interview","Preliminary interview","Assessment"]}},mounted:function(){this.readData()},methods:{readData:function(){var t=this;this.loader=!0;var e=[];c.a.get("https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates").then((function(n){t.slug?n.data.candidates.forEach((function(element){element.application.includes(t.slug)&&element.client.includes(t.type)&&"Refused"!=element.availability&&e.push(element)})):n.data.candidates.forEach((function(element){e.push(element)})),t.candidates=e,e.length>0?t.noData=!1:t.noData=!0}))},openDialog:function(t,e){this.noteDialog=t,this.noteName=e},removeCandidate:function(t){var e=this,n="https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/"+t;c.a.delete(n).then((function(t){e.readData()}),(function(t){console.log(t)}))},editStatusCandidate:function(t){var e=this,n="https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/"+t.id;c.a.put(n,{candidate:t}).then((function(t){e.readData()}),(function(t){console.log(t)}))}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.slug,o=n.type,e.abrupt("return",{slug:r,type:o});case 4:case"end":return e.stop()}}),e)})))()}},d=n(21),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("Header",{attrs:{title:t.slug}}),t._v(" "),n("JobDescription"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.noteDialog,expression:"noteDialog"}]},[n("NoteDialog",{attrs:{name:t.noteName}})],1),t._v(" "),t.noData?n("article",{staticClass:"message is-warning"},[n("div",{staticClass:"message-body"},[t._v("\n        In questa selezione non esistono ancora dei candidati.\n      ")])]):n("div",{staticClass:"candidates"},[n("CallTable",{attrs:{data:t.candidates}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(219).default,JobDescription:n(257).default,NoteDialog:n(230).default,CallTable:n(258).default})}}]);