import { vuexfireMutations } from 'vuexfire'
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
    bindModulos: (context) => {
      db.collection('modulos')
        .get()
        .then(snapshot => {
          context.commit('setModulos', snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    }
  },
  state
}
