import { firestoreAction } from 'vuexfire'
import { db } from 'boot/firebase'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  getters,
  mutations,
  actions: {
    ...actions,
    bindAnswers: firestoreAction(({ bindFirestoreRef, rootState }) => {
      return bindFirestoreRef('answers', db.collection('respostas').where('idUsuario', '==', rootState.usuario.id))
    })
  },
  state
}
