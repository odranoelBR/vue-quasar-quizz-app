export const getDefaultConfigQuestionary = () => ({
  chronometer: false,
  correcaoFinal: false,
  questionsSize: 10,
  level: 1,
  repeatQuestions: false,
  eraseQuestions: false,
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
