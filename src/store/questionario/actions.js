import { db } from 'boot/firebase'
import types from './types'

export default {
  updateAnswer ({ dispatch }, payload) {
    payload['idUsuario'] = this.state.usuario.id
    db.collection('respostas')
      .add(payload)
      .then(function () {
        dispatch('bindAnswers')
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
    db.collection('perguntas')
      .limit(state.configQuestionary.qtdQuestoes)
      .where('nivel', '==', state.configQuestionary.nivel)
      .where('modulo', '==', `modulos/${state.choosedQuestionary.id}`)
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit(types.SET_QUESTIONS, data)
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
  updateCurrentQuestionChoice ({ state }, payload) {
    state.questions[state.currentQuestionIndex].answers[payload].selected = true
  },
  setQuestions ({ state }, payload) {
    payload.forEach(question => {
      question.respostas.forEach(resposta => {
        resposta.selecionada = false
      })
    })
    state.questions = payload
  },
  resetChoices ({ getters }) {
    getters.getCurrentQuestion.respostas.forEach(element => {
      element.selecionada = false
    })
  },
  resetState ({ state, commit }) {
    state.currentQuestionIndex = 0
    state.configQuestionary = {
      cronometro: false,
      correcaoFinal: false,
      qtdQuestoes: 3,
      nivel: 1
    }
    let questions = state.questions.forEach(question => {
      question.respostas.forEach(resposta => {
        resposta.selecionada = false
      })
    })
    commit(types.SET_QUESTIONS, questions)
  }

}
