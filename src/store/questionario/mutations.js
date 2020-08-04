import types from './types'

export default {
  [types.UPDATE_ANSWER] (state, payload) {
    state.answers[payload.idQuestao] = payload
  },
  [types.SET_ANSWERS] (state, payload) {
    state.answers = payload
  },
  nextQuestion (state) {
    if ((state.currentQuestionIndex + 1) === state.questions.length) return

    state.currentQuestionIndex++
  },
  backQuestion (state) {
    if (state.currentQuestionIndex === 0) return

    state.currentQuestionIndex--
  },
  setChoosedQuestionary (state, payload) {
    state.choosedQuestionary = payload
  },
  setQuestions (state, payload) {
    payload.forEach(question => {
      question.respostas.forEach(resposta => {
        resposta.selecionada = false
      })
    })
    state.questions = payload
  },
  updateCurrentQuestionChoice (state, payload) {
    state.questions[state.currentQuestionIndex].respostas[payload].selecionada = true
  },
  resetChoices (state) {
    state.questions[state.currentQuestionIndex].respostas.forEach(element => {
      element.selecionada = false
    })
  },
  updateCronometro (state, payload) {
    state.configQuestionary.cronometro = payload
  },
  updateCorrecaoFinal (state, payload) {
    state.configQuestionary.correcaoFinal = payload
  },
  updateQtdQuestoes (state, payload) {
    state.configQuestionary.qtdQuestoes = payload
  },
  updateNivel (state, payload) {
    state.configQuestionary.nivel = payload
  },
  setAnswers (state, payload) {
    state.answers = payload
  },

  resetState (state) {
    state.currentQuestionIndex = 0
    state.configQuestionary = {
      cronometro: false,
      correcaoFinal: false,
      qtdQuestoes: 3,
      nivel: 1
    }
    state.questions.forEach(question => {
      question.respostas.forEach(resposta => {
        resposta.selecionada = false
      })
    })
  }
}
