import Vue from 'vue'
import VueRouter from 'vue-router'
import { LocalStorage } from 'quasar'
import routes from './routes'

let isAuthenticated = LocalStorage.has('usuario')

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    let nextRouteIsLogin = to.path === '/login'
    console.log(isAuthenticated)
    if (isAuthenticated) {
      next()
    } else if (!isAuthenticated && nextRouteIsLogin) {
      next()
    } else if (!isAuthenticated) {
      next('/login')
    }
  })

  return Router
}
