import types from './types'

export default {
  [types.SET_ANSWERS] (state, payload) {
    state.answers = payload
  },
  [types.SET_QUESTIONS] (state, payload) {
    state.questions = payload
  },
  [types.SET_CURRENT_QUESTION_INDEX] (state, payload) {
    state.currentQuestionIndex = payload
  },
  [types.SET_CONFIG_QUESTIONARY] (state, payload) {
    state.configQuestionary = payload
  },
  [types.UPDATE_CURRENT_ANSWER_CHOICE] (state, payload) {
    state.questions[state.currentQuestionIndex].respostas[payload].selecionada = true
  }

}
