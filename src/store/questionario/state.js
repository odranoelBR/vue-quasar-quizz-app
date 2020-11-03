export const getDefaultConfigQuestionary = () => ({
  cronometro: false,
  correcaoFinal: false,
  qtdQuestoes: 10,
  nivel: 1,
  repetirQuestoes: false,
  apagarRespostas: false,
  running: false
})
export const state = {
  questions: [],
  currentQuestionIndex: 0,
  choosedQuestionary: { name: '' },
  configQuestionary: getDefaultConfigQuestionary(),
  answers: [],
  urlForImage: null
}
