import types from './types'
export default {
  [types.SET_LOADING] (state, payload) {
    state.loading = payload
  },
  setUsuario (state, payload) {
    state.usuario = payload
  },
  setModulos (state, payload) {
    state.modulos = payload
  }
}
