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
export function cadernoEstaFinalizado (state) {
  return state.questions
    .filter(question => state.answers
      .some(answer => answer.idQuestao === question.id)
    ).length === state.configQuestionary.questionsSize
}
