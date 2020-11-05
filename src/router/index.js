import Vue from 'vue'
import VueRouter from 'vue-router'
import { LocalStorage } from 'quasar'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

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
    let isAuthenticated = LocalStorage.has('usuario')
    let nextRouteIsLogin = to.path === '/login'
    if (isAuthenticated && nextRouteIsLogin) {
      store().dispatch('getUser', LocalStorage.getItem('usuario').id)
      next('/')
    } else if (isAuthenticated) {
      store().dispatch('getUser', LocalStorage.getItem('usuario').id)
      next()
    } else if (!isAuthenticated && nextRouteIsLogin) {
      next()
    } else if (!isAuthenticated) {
      next('/login')
    }
  })

  return Router
}
