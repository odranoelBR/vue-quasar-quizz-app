import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import questionario from './questionario'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      questionario
    },
    ...global
    // strict: process.env.DEV
  })

  return Store
}
