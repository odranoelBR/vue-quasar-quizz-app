import { state } from './state'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import { getField, updateField } from 'vuex-map-fields'

export default {
  namespaced: true,
  getters: {
    ...getters,
    getField
  },
  mutations: {
    ...mutations,
    updateField
  },
  actions,
  state
}
