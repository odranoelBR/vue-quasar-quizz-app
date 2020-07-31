/* eslint-disable */

import { mountQuasar } from '../../utils/index'
import FormQuestionario from 'src/components/FormQuestionario'

describe('Montar form Questionario sem estar respondido', () => {

  let options = {
    propsData: {
      respostaAnalisada: false,
      currentQuestion: {
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
    }
  }
  const wrapper = mountQuasar(FormQuestionario, options)

  it('Verifica se syncronize retorna ao nao encontrar resposta em banco ', () => {
    expect(wrapper.emitted()['resposta-analisada'].length).toBe(1)
  })
  it('Verifica cor de botão para resposta NÃO analisada', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('primary')
  })
  it('Verifica linha de botão para resposta não analisada e NÃO selecionada', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getOutline(resposta)).toBe(true)
  })
  it('Verifica linha de botão para resposta não analisada e SELECIONADA', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
})


describe('Montar form Questionario já respondido', () => {

  let options = {
    propsData: {
      respostaAnalisada: true,
      answer: {
        correta: false,
        idQuestao: 'CVAKZNtLrxDaaMNWa9v8',
        idUsuario: 'gOru4vlt5Jzzlw64i30P',
        letra: 'd',
        modulo: 'modulos/Jom34TmjNRvbvYEwGo5M'
      },
      currentQuestion: {
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
    }
  }
  const wrapper = mountQuasar(FormQuestionario, options)

  it('Verifica se syncronize retorna ao nao encontrar resposta em banco ', () => {
    expect(wrapper.emitted()['resposta-analisada'].length).toBe(2)
  })
  it('Verifica cor de botão para resposta analisada', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('primary')
  })
  it('Verifica se botão da resposta esta vermelho', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('negative')
  })
  it('Verifica LINHA de botão para resposta analisada e selecionada', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
  it('Verifica LINHA de botão para resposta não analisada e SELECIONADA', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
  it('Verifica se resposta já salva esta selecionada', async () => {
    expect(wrapper.vm.currentQuestion.respostas[3].selecionada).toBe(true)
  })
})