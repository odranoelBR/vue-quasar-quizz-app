export function nextQuestion (state) {
  state.currentQuestionIndex++
}
export function setName (state, payload) {
  state.name = payload
}
export function setQuestions (state, payload) {
  state.questions = payload
}
export function updateCurrentQuestionChoice (state, payload) {
  state.questions[state.currentQuestionIndex].answers[payload].selected = true
}
export function resetChoices (state, payload) {
  state.questions[state.currentQuestionIndex].answers.forEach(element => {
    element.selected = false
  })
}
