export default {
  nextQuestion (state) {
    if ((state.currentQuestionIndex + 1) === state.questions.length) return

    state.currentQuestionIndex++
  },
  backQuestion (state) {
    if (state.currentQuestionIndex === 0) return

    state.currentQuestionIndex--
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
