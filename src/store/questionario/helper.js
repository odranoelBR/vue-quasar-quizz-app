
let filterAnswersByModuloId = (answers, moduloId) => {
  return answers
    .filter(answer => answer.modulo.includes(moduloId))
    .map(answer => answer.idQuestao)
}

let filterQuestionsByConfig = (questions, answers, config) => {
  let data = config.repetirQuestoes ? questions : questions.filter(question => !answers.includes(question.id))

  return data.slice(0, config.qtdQuestoes)
}

let resetSelectedChoiceOfQuestions = (questions) => {
  questions.forEach(question => {
    question.respostas.forEach(resposta => {
      resposta.selecionada = false
    })
  })
  return questions
}

export { filterAnswersByModuloId, filterQuestionsByConfig, resetSelectedChoiceOfQuestions }
