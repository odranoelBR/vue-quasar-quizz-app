/* eslint-disable */

import { mountQuasar } from '../../utils/index'
import FormQuestionary from 'src/components/FormQuestionary'

describe('Mount questionary without be answered', () => {

  let options = {
    propsData: {
      respostaAnalisada: false,
      currentQuestion: {
        id: "CVAKZNtLrxDaaMNWa9v8",
        modulo: "modulos/Jom34TmjNRvbvYEwGo5M",
        level: 1,
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
  const wrapper = mountQuasar(FormQuestionary, options)

  it('check if syncronize returns when not find answer DB', () => {
    expect(wrapper.emitted()['analised-answer'].length).toBe(1)
  })
  it('check button color for NOT answered question', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('primary')
  })
  it('check button line for NOT selected, NOT analised', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getOutline(resposta)).toBe(true)
  })
  it('check button line for NOT analised and selected question', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
})


describe('Mount questionary answered', () => {

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
        level: 1,
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
  const wrapper = mountQuasar(FormQuestionary, options)

  it('check if syncronize returns when NOT findn answerd DB', () => {
    expect(wrapper.emitted()['analised-answer'].length).toBe(2)
  })
  it('check button color for analised question', () => {
    let resposta = { correta: false }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('primary')
  })
  it('check button color if question is selected but wrong', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getButtonColor(resposta)).toBe('negative')
  })
  it('check button line for analised and selected answer', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
  it('check button line for NOT analised and selected answer', () => {
    let resposta = { correta: false, selecionada: true }
    expect(wrapper.vm.getOutline(resposta)).toBe(false)
  })
  it('check if saved question is selected', async () => {
    expect(wrapper.vm.currentQuestion.respostas[3].selecionada).toBe(true)
  })
})