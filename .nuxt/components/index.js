export { default as AddDialog } from '../../components/AddDialog.vue'
export { default as Calls } from '../../components/Calls.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as NoteDialog } from '../../components/NoteDialog.vue'
export { default as OptionButton } from '../../components/OptionButton.vue'
export { default as Table } from '../../components/Table.vue'

export const LazyAddDialog = import('../../components/AddDialog.vue' /* webpackChunkName: "components/add-dialog" */).then(c => c.default || c)
export const LazyCalls = import('../../components/Calls.vue' /* webpackChunkName: "components/calls" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
export const LazyNoteDialog = import('../../components/NoteDialog.vue' /* webpackChunkName: "components/note-dialog" */).then(c => c.default || c)
export const LazyOptionButton = import('../../components/OptionButton.vue' /* webpackChunkName: "components/option-button" */).then(c => c.default || c)
export const LazyTable = import('../../components/Table.vue' /* webpackChunkName: "components/table" */).then(c => c.default || c)
