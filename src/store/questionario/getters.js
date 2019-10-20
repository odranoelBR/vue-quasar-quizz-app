export function getCurrentQuestion (state) {
  return state.questions[state.currentQuestionIndex]
}
export function getCurrentQuestionIndex (state) {
  return state.currentQuestionIndex
}
export function getChoosedQuestionary (state) {
  return state.choosedQuestionary
}
