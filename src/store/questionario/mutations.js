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
