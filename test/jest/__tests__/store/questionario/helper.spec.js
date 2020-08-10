/* eslint-disable */

import { filterAnswersByModuloId } from 'src/store/questionario/helper'
import { answerOne, questionOne } from '../../dataHelper'

describe('Verifica filtro de respostas por modulo ID', () => {
  it('o filtro encontra uma resposta do modulo', () => {
    expect(filterAnswersByModuloId([answerOne], 'Jom34TmjNRvbvYEwGo5M')).toHaveLength(1)
  })
  it('o filtro não encontrou nenhuma resposta para o modulo', () => {
    expect(filterAnswersByModuloId([answerOne], '46987123qweqwe123')).toHaveLength(0)
  })
})

