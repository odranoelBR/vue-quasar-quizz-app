import state from './state'
import actions from './actions'
import { getField, updateField } from 'vuex-map-fields'

export default {
  namespaced: true,
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions,
  state
}
