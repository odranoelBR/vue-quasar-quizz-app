import types from './types'
import { filterAnswersByModuloId, resetSelectedChoiceOfQuestions, filterQuestionsByConfig } from './helper'
import globalTypes from '../global/types'
import { db } from 'boot/firebase'
import { getDefaultConfigQuestionary } from './state'
export default {
  updateAnswer ({ dispatch }, payload) {
    payload['idUsuario'] = this.state.usuario.id
    db.collection('respostas')
      .add(payload)
      .then(function () {
        dispatch('getAnswers')
      })
      .catch(function (error) {
        // console.error('Error writing document: ', error)
      })
  },
  getAnswers: ({ rootState, commit }) => {
    db.collection('respostas')
      .where('idUsuario', '==', rootState.usuario.id)
      .get()
      .then(snapshot => {
        commit(types.SET_ANSWERS, snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  },
  getQuestions ({ state, commit }) {
    commit(globalTypes.SET_LOADING, true, { root: true })

    db.collection('perguntas')
      .where('nivel', '==', state.configQuestionary.nivel)
      .where('modulo', '==', `modulos/${state.choosedQuestionary.id}`)
      .get()
      .then(snapshot => {
        let data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        let answers = filterAnswersByModuloId(state.answers, state.choosedQuestionary.id)
        data = filterQuestionsByConfig(data, answers, state.configQuestionary)
        data = resetSelectedChoiceOfQuestions(data)

        commit(types.SET_QUESTIONS, data)
      })
      .then(() => { commit(globalTypes.SET_LOADING, false, { root: true }) })
  },
  nextQuestion ({ commit, state }) {
    if ((state.currentQuestionIndex + 1) === state.questions.length) return

    commit(types.SET_CURRENT_QUESTION_INDEX, ++state.currentQuestionIndex)
  },
  backQuestion ({ commit, state }) {
    if (state.currentQuestionIndex === 0) return

    commit(types.SET_CURRENT_QUESTION_INDEX, --state.currentQuestionIndex)
  },
  updateCurrentQuestionChoice ({ commit }, payload) {
    commit(types.UPDATE_CURRENT_ANSWER_CHOICE, payload)
  },
  resetChoices ({ getters }) {
    getters.getCurrentQuestion.respostas.forEach(element => {
      element.selecionada = false
    })
  },
  resetState ({ commit }) {
    commit(types.SET_CURRENT_QUESTION_INDEX, 0)
    commit(types.SET_QUESTIONS, [])
    commit(types.SET_CONFIG_QUESTIONARY, getDefaultConfigQuestionary())
  }

}
