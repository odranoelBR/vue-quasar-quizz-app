export function nextQuestion (state) {
  if ((state.currentQuestionIndex + 1) === state.questions.length) return

  state.currentQuestionIndex++
}
export function backQuestion (state) {
  if (state.currentQuestionIndex === 0) return

  state.currentQuestionIndex--
}
export function setChoosedQuestionary (state, payload) {
  state.choosedQuestionary = payload
}
export function setQuestions (state, payload) {
  payload.forEach(question => {
    question.respostas.forEach(resposta => {
      resposta.selecionada = false
    })
  })
  state.questions = payload
}
export function updateCurrentQuestionChoice (state, payload) {
  state.questions[state.currentQuestionIndex].respostas[payload].selecionada = true
}
export function resetChoices (state) {
  state.questions[state.currentQuestionIndex].respostas.forEach(element => {
    element.selecionada = false
  })
}
export function updateCronometro (state, payload) {
  state.configQuestionary.cronometro = payload
}
export function updateCorrecaoFinal (state, payload) {
  state.configQuestionary.correcaoFinal = payload
}
export function updateQtdQuestoes (state, payload) {
  state.configQuestionary.qtdQuestoes = payload
}
export function updateTypeQuestion (state, payload) {
  state.configQuestionary.typeQuestion = payload
}
export function resetState (state) {
  state.currentQuestionIndex = 0
  state.configQuestionary = {
    cronometro: false,
    correcaoFinal: false,
    qtdQuestoes: 15,
    typeQuestion: 1
  }
  state.questions.forEach(question => {
    question.respostas.forEach(resposta => {
      resposta.selecionada = false
    })
  })
}
