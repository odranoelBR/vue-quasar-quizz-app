export function getCurrentQuestion (state) {
  return state.questions[state.currentQuestionIndex]
}
export function getCurrentQuestionIndex (state) {
  return state.currentQuestionIndex
}
export function getChoosedQuestionary (state) {
  return state.choosedQuestionary
}
export function getConfigQuestionary (state) {
  return state.configQuestionary
}
export function ehUltimaQuestao (state) {
  return (state.currentQuestionIndex + 1) === state.questions.length
}
export function ehPrimeiraQuestao (state) {
  return state.currentQuestionIndex === 0
}
