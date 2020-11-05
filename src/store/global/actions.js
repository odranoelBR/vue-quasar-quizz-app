import { db } from 'boot/firebase'

export default {
  getModulos ({ commit }) {
    db.collection('modulos')
      .get()
      .then(snapshot => {
        commit('setModulos', snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  },
  getUser ({ commit }, id) {
    db.collection('usuarios')
      .doc(id)
      .get()
      .then(snapshot => {
        commit('setUsuario', { ...snapshot.data(), id })
      })
  },
  updateUser ({ rootState, commit }) {
    db.collection('usuarios')
      .doc(rootState.usuario.id)
      .get()
      .then(snapshot => {
        console.log(snapshot)
      })
  }
}
