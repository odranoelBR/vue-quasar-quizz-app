import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from 'boot/firebase'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  getters,
  mutations: {
    ...mutations, ...vuexfireMutations
  },
  actions: {
    ...actions,
    bindModulos: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('modulos', db.collection('modulos'))
    })
  },
  state
}
