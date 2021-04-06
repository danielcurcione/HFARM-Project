export { default as AddDialog } from '../../components/AddDialog.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Dashboard } from '../../components/Dashboard.vue'
export { default as Header } from '../../components/Header.vue'

export const LazyAddDialog = import('../../components/AddDialog.vue' /* webpackChunkName: "components/add-dialog" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyDashboard = import('../../components/Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
