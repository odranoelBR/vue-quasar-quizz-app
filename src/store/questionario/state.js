export const getDefaultConfigQuestionary = () => ({
  cronometro: false,
  correcaoFinal: false,
  qtdQuestoes: 3,
  nivel: 1,
  repetirQuestoes: false
})
export const state = {
  questions: [],
  currentQuestionIndex: 0,
  choosedQuestionary: { name: '' },
  configQuestionary: getDefaultConfigQuestionary(),
  answers: []
}
