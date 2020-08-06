import { db } from 'boot/firebase'

export default {
  getModulos (context) {
    db.collection('modulos')
      .get()
      .then(snapshot => {
        context.commit('setModulos', snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
  }
}
