import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e4f0386 = () => interopDefault(import('../pages/calls.vue' /* webpackChunkName: "pages/calls" */))
const _5e8e28d0 = () => interopDefault(import('../pages/candidates.vue' /* webpackChunkName: "pages/candidates" */))
const _43f5e28c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3fe872fc = () => interopDefault(import('../pages/_type/_slug.vue' /* webpackChunkName: "pages/_type/_slug" */))

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
    component: _5e4f0386,
    name: "calls"
  }, {
    path: "/candidates",
    component: _5e8e28d0,
    name: "candidates"
  }, {
    path: "/",
    component: _43f5e28c,
    name: "index"
  }, {
    path: "/:type/:slug?",
    component: _3fe872fc,
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
