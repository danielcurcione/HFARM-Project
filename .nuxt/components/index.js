export { default as AddDialog } from '../../components/AddDialog.vue'
export { default as CallTable } from '../../components/CallTable.vue'
export { default as Calls } from '../../components/Calls.vue'
export { default as CandidatesTable } from '../../components/CandidatesTable.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Header } from '../../components/Header.vue'
export { default as JobDescription } from '../../components/JobDescription.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as NoteDialog } from '../../components/NoteDialog.vue'

export const LazyAddDialog = import('../../components/AddDialog.vue' /* webpackChunkName: "components/add-dialog" */).then(c => c.default || c)
export const LazyCallTable = import('../../components/CallTable.vue' /* webpackChunkName: "components/call-table" */).then(c => c.default || c)
export const LazyCalls = import('../../components/Calls.vue' /* webpackChunkName: "components/calls" */).then(c => c.default || c)
export const LazyCandidatesTable = import('../../components/CandidatesTable.vue' /* webpackChunkName: "components/candidates-table" */).then(c => c.default || c)
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyJobDescription = import('../../components/JobDescription.vue' /* webpackChunkName: "components/job-description" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
export const LazyNoteDialog = import('../../components/NoteDialog.vue' /* webpackChunkName: "components/note-dialog" */).then(c => c.default || c)
