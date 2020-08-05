export function getCurrentQuestion (state) {
  if (state.questions.length === 0) return false
  return state.questions[state.currentQuestionIndex]
}
export function ehUltimaQuestao (state) {
  return (state.currentQuestionIndex + 1) === state.questions.length
}
export function ehPrimeiraQuestao (state) {
  return state.currentQuestionIndex === 0
}
