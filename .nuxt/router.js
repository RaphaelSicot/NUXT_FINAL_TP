import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _066d8a4c = () => interopDefault(import('..\\pages\\details.vue' /* webpackChunkName: "pages/details" */))
const _033fb980 = () => interopDefault(import('..\\pages\\favoris.vue' /* webpackChunkName: "pages/favoris" */))
const _fbc544f4 = () => interopDefault(import('..\\pages\\listeAstre.vue' /* webpackChunkName: "pages/listeAstre" */))
const _0a43696a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/details",
    component: _066d8a4c,
    name: "details"
  }, {
    path: "/favoris",
    component: _033fb980,
    name: "favoris"
  }, {
    path: "/listeAstre",
    component: _fbc544f4,
    name: "listeAstre"
  }, {
    path: "/",
    component: _0a43696a,
    name: "index"
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
