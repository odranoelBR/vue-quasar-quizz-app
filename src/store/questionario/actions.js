import { firestoreAction } from 'vuexfire'

import { db } from 'boot/firebase'
import types from './types'

export default {
  updateAnswer ({ commit }, payload) {
    payload['idUsuario'] = this.state.usuario.id
    db.collection('respostas').add(payload)
      .then(function () {
        commit(types.UPDATE_ANSWER, payload)
      })
      .catch(function (error) {
        // console.error('Error writing document: ', error)
      })
  },
  bindAnswers: firestoreAction(({ bindFirestoreRef, rootState }) => {
    return bindFirestoreRef('answers', db.collection('respostas').where('idUsuario', '==', rootState.usuario.id))
  })
}
