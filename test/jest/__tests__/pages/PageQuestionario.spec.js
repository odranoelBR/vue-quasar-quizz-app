/* eslint-disable */

import { mountQuasar } from '../../utils/index'
import Vuex from 'vuex'
import PageQuestionario from 'src/pages/PageQuestionario'
import mutations from '../../../../src/store/questionario/mutations'
import state from '../../../../src/store/questionario/state'
import * as getters from '../../../../src/store/questionario/getters'

let questionOne = {
  id: "CVAKZNtLrxDaaMNWa9v8",
  modulo: "modulos/Jom34TmjNRvbvYEwGo5M",
  nivel: 1,
  referencia: "art. 362",
  respostas: [
    { correta: false, letra: 'a', texto: 'a avó materna' },
    { correta: true, letra: 'b', texto: 'a madastra' },
    { correta: false, letra: 'c', texto: 'o primo' },
    { correta: false, letra: 'd', texto: 'do genro do militar' }
  ],
  texto: "De acordo com o RCONT, são elementos essenciais da continência individual, exceto:"
}

describe('Questionario sem respostas selecionadas', () => {

  let currentQuestion = Object.assign(questionOne, {})

  let options = {
    store: new Vuex.Store({
      modules: {
        questionario: {
          namespaced: true,
          getters: {
            getCurrentQuestion: jest.fn().mockReturnValue(currentQuestion),
            getAnswers: jest.fn().mockReturnValue([]),
            ehPrimeiraQuestao: jest.fn().mockReturnValue(true),
            ehUltimaQuestao: jest.fn().mockReturnValue(false)
          }
        }
      }
    })
  }
  const wrapper = mountQuasar(PageQuestionario, options)

  it('Verifica se alguma resposta foi selecionada', () => {
    expect(wrapper.vm.algumaRespostaSelecionada).toBeFalsy()
  })
  it('Verifica se existia resposta cadastrada', () => {
    expect(wrapper.vm.answer).toBeUndefined()
  })
  it('Verifica se botão de analise esta habilitado', () => {
    expect(wrapper.vm.disableAnalise).toBeFalsy()
  })
  it('Verifica se resposta está analisada', () => {
    expect(wrapper.vm.respostaAnalisada).toBeFalsy()
  })
})

describe('Questionario com resposta selecionada sem estar salva no banco', () => {

  let currentQuestion = Object.assign(questionOne, {})
  currentQuestion.respostas[0].selecionada = true

  let options = {
    store: new Vuex.Store({
      modules: {
        questionario: {
          namespaced: true,
          getters: {
            getCurrentQuestion: jest.fn().mockReturnValue(currentQuestion),
            getAnswers: jest.fn().mockReturnValue([]),
            ehPrimeiraQuestao: jest.fn().mockReturnValue(true),
            ehUltimaQuestao: jest.fn().mockReturnValue(false)
          }
        }
      }
    })
  }
  const wrapper = mountQuasar(PageQuestionario, options)

  it('Verifica se alguma resposta foi selecionada', () => {
    expect(wrapper.vm.algumaRespostaSelecionada).toBeTruthy()
  })
  it('Verifica se botão de analise esta habilitado', () => {
    expect(wrapper.vm.disableAnalise).toBeFalsy()
  })
  it('Verifica se resposta está analisada', () => {
    expect(wrapper.vm.respostaAnalisada).toBeFalsy()
  })
})

describe('Questionario com resposta selecionada já salva no banco', () => {

  let currentQuestion = Object.assign(questionOne, {})
  currentQuestion.respostas[0].selecionada = true

  let answer = {
    correta: false,
    idQuestao: 'CVAKZNtLrxDaaMNWa9v8',
    idUsuario: 'gOru4vlt5Jzzlw64i30P',
    letra: 'a',
    modulo: 'modulos/Jom34TmjNRvbvYEwGo5M'
  }

  let options = {
    store: new Vuex.Store({
      modules: {
        questionario: {
          namespaced: true,
          getters: {
            getCurrentQuestion: jest.fn().mockReturnValue(currentQuestion),
            getAnswers: jest.fn().mockReturnValue([answer]),
            ehPrimeiraQuestao: jest.fn().mockReturnValue(true),
            ehUltimaQuestao: jest.fn().mockReturnValue(false)
          }
        }
      }
    })
  }
  const wrapper = mountQuasar(PageQuestionario, options, true)

  it('Verifica se alguma resposta foi selecionada', () => {
    expect(wrapper.vm.algumaRespostaSelecionada).toBeTruthy()
  })
  it('Verifica se botão de analise esta habilitado', () => {
    expect(wrapper.vm.disableAnalise).toBeTruthy()
  })
  it('Verifica se resposta está analisada', () => {
    expect(wrapper.vm.respostaAnalisada).toBeTruthy()
  })
})

describe('Questionario com 2 questões, alterando entre questões', () => {

  let questionTwo = Object.assign(questionOne, {})
  questionTwo.texto = 'Segundo o RISAER, o luto é o afastamento total do serviço concedido pelo Comandante, Chefe, Diretor ou Prefeito da OM tão logo tenha conhecimento do óbito,'
  questionTwo.id = 'CVAKZNtLrxDaaMNWa9v8'
  state.questions = [questionOne, questionTwo]

  let options = {
    store: new Vuex.Store({
      modules: {
        questionario: {
          namespaced: true,
          state,
          mutations,
          getters
        }
      }
    })
  }
  const wrapper = mountQuasar(PageQuestionario, options, true)
  wrapper.vm.next()

  it('Renderiza corretamente', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Verifica resposta analisada segunda questão', () => {
    expect(wrapper.vm.respostaAnalisada).toBeFalsy()
  })
  it('Verifica se é ultima questão', () => {
    expect(wrapper.vm.ehUltimaQuestao).toBeTruthy()
  })
  it('Verifica se não é primeira questão', () => {
    expect(wrapper.vm.ehPrimeiraQuestao).toBeFalsy()
  })

})