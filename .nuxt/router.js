import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _100d2a6e = () => interopDefault(import('../pages/calls.vue' /* webpackChunkName: "pages/calls" */))
const _779c12e8 = () => interopDefault(import('../pages/candidates.vue' /* webpackChunkName: "pages/candidates" */))
const _1484abea = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _0525fb46 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _88de72f0 = () => interopDefault(import('../pages/_type/_slug.vue' /* webpackChunkName: "pages/_type/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calls",
    component: _100d2a6e,
    name: "calls"
  }, {
    path: "/candidates",
    component: _779c12e8,
    name: "candidates"
  }, {
    path: "/info",
    component: _1484abea,
    name: "info"
  }, {
    path: "/",
    component: _0525fb46,
    name: "index"
  }, {
    path: "/:type/:slug?",
    component: _88de72f0,
    name: "type-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
