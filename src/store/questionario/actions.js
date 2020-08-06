import types from './types'
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
      .limit(state.configQuestionary.qtdQuestoes)
      .where('nivel', '==', state.configQuestionary.nivel)
      .where('modulo', '==', `modulos/${state.choosedQuestionary.id}`)
      .get()
      .then(snapshot => {
        let data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        data.forEach(question => {
          question.respostas.forEach(resposta => {
            resposta.selecionada = false
          })
        })
        commit(types.SET_QUESTIONS, data)
        commit(globalTypes.SET_LOADING, false, { root: true })
      })
  },
  nextQuestion ({ state }) {
    if ((state.currentQuestionIndex + 1) === state.questions.length) return

    state.currentQuestionIndex++
  },
  backQuestion ({ state }) {
    if (state.currentQuestionIndex === 0) return

    state.currentQuestionIndex--
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
