export function nextQuestion (state) {
  state.currentQuestionIndex++
}
export function setChoosedQuestionary (state, payload) {
  state.choosedQuestionary = payload
}
export function setQuestions (state, payload) {
  state.questions = payload
}
export function updateCurrentQuestionChoice (state, payload) {
  state.questions[state.currentQuestionIndex].answers[payload].selected = true
}
export function resetChoices (state) {
  state.questions[state.currentQuestionIndex].answers.forEach(element => {
    element.selected = false
  })
}
export function updateCronometro (state, payload) {
  state.configQuestionary.cronometro = payload
}
export function updateCorrecaoFinal (state, payload) {
  state.configQuestionary.correcaoFinal = payload
}
export function updateQtdQuestoes (state, payload) {
  state.configQuestionary.qtsQuestoes = payload
}
export function updateTypeQuestion (state, payload) {
  state.configQuestionary.typeQuestion = payload
}
export function resetState (state) {
  state.currentQuestionIndex = 0
  state.configQuestionary = {
    cronometro: false,
    correcaoFinal: false,
    qtsQuestoes: 15,
    typeQuestion: 1
  }
  state.questions.forEach(question => {
    question.answers.forEach(answer => {
      answer.selected = false
    })
  })
}
