import { SET_LOADING, SET_USER, SET_MODULES } from './types'
export default {
  [SET_LOADING] (state, payload) {
    state.loading = payload
  },
  [SET_USER] (state, payload) {
    state.user = payload
  },
  [SET_MODULES] (state, payload) {
    state.modules = payload
  }
}
