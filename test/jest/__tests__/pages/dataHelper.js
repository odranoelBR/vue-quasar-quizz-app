const questionOne = {
  id: 'CVAKZNtLrxDaaMNWa9v8',
  modulo: 'modulos/Jom34TmjNRvbvYEwGo5M',
  nivel: 1,
  referencia: 'art. 362',
  respostas: [
    { correta: false, letra: 'a', texto: 'a avó materna' },
    { correta: true, letra: 'b', texto: 'a madastra' },
    { correta: false, letra: 'c', texto: 'o primo' },
    { correta: false, letra: 'd', texto: 'do genro do militar' }
  ],
  texto: 'De acordo com o RCONT, são elementos essenciais da continência individual, exceto:'
}

const questionTwo = Object.assign(questionOne, {})
questionTwo.texto = 'Segundo o RISAER, o luto é o afastamento total do serviço concedido pelo Comandante, Chefe, Diretor ou Prefeito da OM tão logo tenha conhecimento do óbito,'
questionTwo.id = 'CVAKZNtLrxDaaMNWa9v8'

const answerOne = {
  correta: false,
  idQuestao: 'CVAKZNtLrxDaaMNWa9v8',
  idUsuario: 'gOru4vlt5Jzzlw64i30P',
  letra: 'a',
  modulo: 'modulos/Jom34TmjNRvbvYEwGo5M'
}
export { questionOne, questionTwo, answerOne }
