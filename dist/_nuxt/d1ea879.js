(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(t,n,e){t.exports=e.p+"img/trash.bb8494a.svg"},225:function(t,n){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODQuNTk2IDg0LjU5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODQuNTk2IDg0LjU5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU1LjI4NSwwSDE5Ljc2N0MxMy40OSwwLDguMzg0LDUuMTA3LDguMzg0LDExLjM4NHY2MS44MjhjMCw2LjI3Nyw1LjEwNywxMS4zODQsMTEuMzg0LDExLjM4NGg0NS4wNjINCgkJYzYuMjc2LDAsMTEuMzgzLTUuMTA2LDExLjM4My0xMS4zODR2LTQ5LjgyTDU1LjI4NSwweiBNNTYuOTQyLDEwLjg1M2w5LjU2MSwxMC42ODZoLTkuNTYxVjEwLjg1M3ogTTY0LjgyOSw3OC41OTZIMTkuNzY3DQoJCWMtMi45NjksMC01LjM4NC0yLjQxNS01LjM4NC01LjM4NFYxMS4zODRDMTQuMzg0LDguNDE1LDE2Ljc5OSw2LDE5Ljc2Nyw2aDMxLjE3NXYyMS41MzhoMTkuMjd2NDUuNjc0DQoJCUM3MC4yMTMsNzYuMTgxLDY3Ljc5OCw3OC41OTYsNjQuODI5LDc4LjU5NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},255:function(t,n,e){"use strict";e.r(n);var c={props:["data"],methods:{openDialog:function(t,n){this.$parent.openDialog(t,n)},removeCandidate:function(t){this.$parent.removeCandidate(t)}}},d=e(21),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"candidates-items"},[t._m(0),t._v(" "),c("div",{staticClass:"scoll-table"},[c("table",{staticClass:"table is-fullwidth table-items"},[c("tbody",[t._l(t.data,(function(n){return[c("tr",{key:n.id,staticStyle:{"margin-top":"5px"}},[c("td",{attrs:{width:"2%"}},["Refused"===n.availability?c("div",{staticClass:"icon-refused"}):c("div",{staticClass:"icon-availability"})]),t._v(" "),c("td",{attrs:{width:"23%"}},[t._v(" "+t._s(n.candidates)+" ")]),t._v(" "),c("td",{class:"client-input "+n.client,attrs:{width:"10%"}},[t._v(" "+t._s(n.client)+" ")]),t._v(" "),c("td",{attrs:{width:"30%"}},[c("nuxt-link",{staticStyle:{color:"black","text-decoration":"underline"},attrs:{to:"/"+n.client+"/"+n.application}},[t._v("\n                "+t._s(n.application)+" ↗\n              ")])],1),t._v(" "),c("td",{attrs:{width:"15%"}},[t._v(" "+t._s(n.seniorLevel)+" ")]),t._v(" "),c("td",{attrs:{width:"10%"}},["X"===n.notes?c("div",[c("button",{staticClass:"button is-white",on:{click:function(e){return t.openDialog(!0,n.candidates)}}},[c("img",{attrs:{src:e(225),width:"20px"}})])]):t._e()]),t._v(" "),c("td",{attrs:{width:"10%"}},[c("div",[c("button",{staticClass:"button is-white",on:{click:function(e){return t.removeCandidate(n.id)}}},[c("img",{attrs:{src:e(223),width:"20px"}})])])])])]}))],2)])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"table is-fullwidth"},[e("thead",[e("tr",[e("th",{attrs:{width:"2%"}}),t._v(" "),e("th",{attrs:{width:"23%"}},[t._v("Candidates")]),t._v(" "),e("th",{attrs:{width:"10%"}},[t._v("Client")]),t._v(" "),e("th",{attrs:{width:"30%"}},[t._v("Application")]),t._v(" "),e("th",{attrs:{width:"15%"}},[t._v("Senior level")]),t._v(" "),e("th",{attrs:{width:"10%"}},[t._v("Notes")]),t._v(" "),e("th",{attrs:{width:"10%"}})])])])}],!1,null,null,null);n.default=component.exports}}]);