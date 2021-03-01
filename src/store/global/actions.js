import { db } from 'boot/firebase'
import { Notify } from 'quasar'
import { i18n } from 'src/boot/i18n'
import { SET_USER, SET_MODULES } from './types'
export default {
  getModules ({ commit }) {
    db.collection('modulos')
      .get()
      .then(snapshot => {
        commit(SET_MODULES, snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  },
  getUser ({ commit }, id) {
    db.collection('usuarios')
      .doc(id)
      .get()
      .then(snapshot => {
        commit(SET_USER, { ...snapshot.data(), id })
      })
  },
  updateUser ({ rootState, commit }, payload) {
    db.collection('usuarios')
      .doc(rootState.user.id)
      .update(payload)
      .then(snapshot => {
        console.log(snapshot)
        Notify.create({ message: i18n.t('words.update'), color: 'positive' })
      })
  }
}
