import Vue from 'vue'

const components = {
  AddDialog: () => import('../../components/AddDialog.vue' /* webpackChunkName: "components/add-dialog" */).then(c => c.default || c),
  CallTable: () => import('../../components/CallTable.vue' /* webpackChunkName: "components/call-table" */).then(c => c.default || c),
  Calls: () => import('../../components/Calls.vue' /* webpackChunkName: "components/calls" */).then(c => c.default || c),
  CandidatesTable: () => import('../../components/CandidatesTable.vue' /* webpackChunkName: "components/candidates-table" */).then(c => c.default || c),
  Card: () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  JobDescription: () => import('../../components/JobDescription.vue' /* webpackChunkName: "components/job-description" */).then(c => c.default || c),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c),
  NoteDialog: () => import('../../components/NoteDialog.vue' /* webpackChunkName: "components/note-dialog" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
