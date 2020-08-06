
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { getField, updateField } from 'vuex-map-fields'

export default {
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
