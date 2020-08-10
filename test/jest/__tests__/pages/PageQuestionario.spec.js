/* eslint-disable */

import { mountQuasar } from '../../utils/index'
import Vuex from 'vuex'
import PageQuestionario from 'src/pages/PageQuestionario'
import { questionOne, answerOne } from '../dataHelper'

jest.mock('vuex-map-fields', () => ({
  getterType: jest.fn(),
  mapFields: jest.fn().mockReturnValue({
    answers: jest.fn().mockReturnValue([])
  }),
}));

let currentQuestion = Object.assign(questionOne, {})

let store = new Vuex.Store({
  modules: {
    questionario: {
      namespaced: true,
      getters: {
        getCurrentQuestion: jest.fn().mockReturnValue(currentQuestion),
        ehPrimeiraQuestao: jest.fn().mockReturnValue(true),
        ehUltimaQuestao: jest.fn().mockReturnValue(false)
      },
      actions: {
        getQuestions: jest.fn().mockReturnValue(questionOne)
      }
    }
  }
})

describe('Questionario sem respostas selecionadas', () => {
  let options = {
    store
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

  currentQuestion.respostas[0].selecionada = true

  let options = {
    store
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

  currentQuestion.respostas[0].selecionada = true

  let options = {
    computed: {
      answers: jest.fn().mockReturnValue([answerOne])
    },
    store
  }
  const wrapper = mountQuasar(PageQuestionario, options, true)

  it('Verifica se alguma resposta foi selecionada', () => {
    expect(wrapper.vm.algumaRespostaSelecionada).toBeTruthy()
  })
  it('Verifica se tem uma única resposta para aquela questao', () => {
    expect(wrapper.vm.answer).toBeInstanceOf(Object)
  })
  it('Verifica se botão de analise esta habilitado', () => {
    expect(wrapper.vm.disableAnalise).toBeTruthy()
  })
  it('Verifica se resposta está analisada', () => {
    expect(wrapper.vm.respostaAnalisada).toBeTruthy()
  })
})

