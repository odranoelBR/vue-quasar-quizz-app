/* eslint-disable */

import actions from 'src/store/questionario/actions'

describe('Verifica avançar navegação para N questoes', () => {
  it('avanca index de navegação para 1 questao de 1', () => {
    let state = {
      currentQuestionIndex: 0,
      questions: [{}]
    }

    actions.nextQuestion({ state })
    expect(state.currentQuestionIndex).toBe(0)
  })

  it('avanca index de navegação para 2 questao de 2 estando na segunda', () => {
    let state = {
      currentQuestionIndex: 1,
      questions: [{}, {}]
    }

    actions.nextQuestion({ state })
    expect(state.currentQuestionIndex).toBe(1)
  })

  it('avanca index de navegação para 2 questao de 2', () => {
    let state = {
      currentQuestionIndex: 0,
      questions: [{}, {}]
    }

    actions.nextQuestion({ state, commit: jest.fn() })
    expect(state.currentQuestionIndex).toBe(1)
  })


  it('avanca index de navegação para 3 questao de 4', () => {
    let state = {
      currentQuestionIndex: 0,
      questions: [{}, {}, {}, {}]
    }

    actions.nextQuestion({ state, commit: jest.fn() })
    actions.nextQuestion({ state, commit: jest.fn() })
    expect(state.currentQuestionIndex).toBe(2)
  })

  it('volta index de navegação para 1 questao de 4 estando na 3', () => {
    let state = {
      currentQuestionIndex: 3,
      questions: [{}, {}, {}, {}]
    }

    actions.backQuestion({ state, commit: jest.fn() })
    expect(state.currentQuestionIndex).toBe(2)
  })
  it('volta index de navegação para 1 questao de 2 estando na 1', () => {
    let state = {
      currentQuestionIndex: 0,
      questions: [{}, {}]
    }

    actions.backQuestion({ state, commit: jest.fn() })
    expect(state.currentQuestionIndex).toBe(0)
  })
})
