import { db } from 'boot/firebase'
import types from './types'

export default {
  updateAnswer ({ commit, dispatch }, payload) {
    payload['idUsuario'] = this.state.usuario.id
    db.collection('respostas').add(payload)
      .then(function () {
        commit(types.UPDATE_ANSWER, payload)
        dispatch('bindAnswers')
      })
      .catch(function (error) {
        // console.error('Error writing document: ', error)
      })
  },
  bindAnswers: ({ rootState, commit }) => {
    db.collection('respostas')
      .where('idUsuario', '==', rootState.usuario.id)
      .get()
      .then(snapshot => {
        commit(types.SET_ANSWERS, snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  }
}
