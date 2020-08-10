import { db } from 'boot/firebase'

export default {
  getModulos ({ commit }) {
    db.collection('modulos')
      .get()
      .then(snapshot => {
        commit('setModulos', snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  }
}
