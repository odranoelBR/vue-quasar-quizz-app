import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import questionary from './questionary'
import statistics from './statistics'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      questionary, statistics
    },
    ...global
    // strict: process.env.DEV
  })

  return Store
}
