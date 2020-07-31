/* eslint-disable */

import { mountQuasar } from '../../utils/index'
import Vuex from 'vuex'
import PageQuestionario from 'src/pages/PageQuestionario'

describe('Montar form Questionario sem estar respondido', () => {

  let currentQuestion = {
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

  let options = {
    store: new Vuex.Store({
      modules: {
        questionario: {
          getters: { getCurrentQuestion: jest.fn().mockReturnValue(currentQuestion) }
        }
      }
    })
  }
  const wrapper = mountQuasar(PageQuestionario, options)

  it('Verifica se alguma resposta foi selecionada', () => {
    expect(wrapper.vm.algumaRespostaSelecionada).toBeTruthy()
  })

})
