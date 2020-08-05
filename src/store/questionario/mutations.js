import types from './types'

export default {
  [types.SET_ANSWERS] (state, payload) {
    state.answers = payload
  },
  [types.SET_QUESTIONS] (state, payload) {
    state.questions = payload
  }

}
