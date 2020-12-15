import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import questionario from './questionario'
import estatistica from './estatistica'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      questionario, estatistica
    },
    ...global
    // strict: process.env.DEV
  })

  return Store
}
