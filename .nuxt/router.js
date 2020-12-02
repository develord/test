import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67bf92c6 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _48eadf32 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1a40dbf2 = () => interopDefault(import('..\\pages\\ad-admin\\index.vue' /* webpackChunkName: "pages/ad-admin/index" */))
const _a65f81da = () => interopDefault(import('..\\pages\\auth.vue' /* webpackChunkName: "pages/auth" */))
const _87a6a1f6 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _18057d70 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _11334eb4 = () => interopDefault(import('..\\pages\\ad-admin\\category\\index.vue' /* webpackChunkName: "pages/ad-admin/category/index" */))
const _01cf73b6 = () => interopDefault(import('..\\pages\\ad-admin\\mailling\\index.vue' /* webpackChunkName: "pages/ad-admin/mailling/index" */))
const _5c399359 = () => interopDefault(import('..\\pages\\ad-admin\\overview\\index.vue' /* webpackChunkName: "pages/ad-admin/overview/index" */))
const _485df6af = () => interopDefault(import('..\\pages\\ad-admin\\posts\\index.vue' /* webpackChunkName: "pages/ad-admin/posts/index" */))
const _3f043d4c = () => interopDefault(import('..\\pages\\ad-admin\\users\\index.vue' /* webpackChunkName: "pages/ad-admin/users/index" */))
const _3cead28a = () => interopDefault(import('..\\pages\\ad-admin\\category\\create.vue' /* webpackChunkName: "pages/ad-admin/category/create" */))
const _29d5ac22 = () => interopDefault(import('..\\pages\\ad-admin\\posts\\create.vue' /* webpackChunkName: "pages/ad-admin/posts/create" */))
const _68a2b9f7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _dfc95164 = () => interopDefault(import('..\\pages\\_slug\\_req.vue' /* webpackChunkName: "pages/_slug/_req" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _67bf92c6,
    pathToRegexpOptions: {"strict":true},
    name: "404"
  }, {
    path: "/about",
    component: _48eadf32,
    pathToRegexpOptions: {"strict":true},
    name: "about"
  }, {
    path: "/ad-admin",
    component: _1a40dbf2,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin"
  }, {
    path: "/auth",
    component: _a65f81da,
    pathToRegexpOptions: {"strict":true},
    name: "auth"
  }, {
    path: "/contact",
    component: _87a6a1f6,
    pathToRegexpOptions: {"strict":true},
    name: "contact"
  }, {
    path: "/team",
    component: _18057d70,
    pathToRegexpOptions: {"strict":true},
    name: "team"
  }, {
    path: "/ad-admin/category",
    component: _11334eb4,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-category"
  }, {
    path: "/ad-admin/mailling",
    component: _01cf73b6,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-mailling"
  }, {
    path: "/ad-admin/overview",
    component: _5c399359,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-overview"
  }, {
    path: "/ad-admin/posts",
    component: _485df6af,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-posts"
  }, {
    path: "/ad-admin/users",
    component: _3f043d4c,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-users"
  }, {
    path: "/ad-admin/category/create",
    component: _3cead28a,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-category-create"
  }, {
    path: "/ad-admin/posts/create",
    component: _29d5ac22,
    pathToRegexpOptions: {"strict":true},
    name: "ad-admin-posts-create"
  }, {
    path: "/",
    component: _68a2b9f7,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }, {
    path: "/:slug/:req?",
    component: _dfc95164,
    pathToRegexpOptions: {"strict":true},
    name: "slug-req"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
