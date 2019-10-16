export function getCurrentQuestion (state) {
  return state.questions[state.currentQuestionIndex]
}
export function getCurrentQuestionIndex (state) {
  return state.currentQuestionIndex
}
export function getName (state) {
  return state.name
}
