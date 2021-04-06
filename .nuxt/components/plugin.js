import Vue from 'vue'

const components = {
  AddDialog: () => import('../../components/AddDialog.vue' /* webpackChunkName: "components/add-dialog" */).then(c => c.default || c),
  Card: () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c),
  Dashboard: () => import('../../components/Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
