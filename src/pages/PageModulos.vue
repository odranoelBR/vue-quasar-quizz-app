<template>
  <div
    class="q-mt-sm"
    id="home"
  >
    <div>
      <span class="text-white text-italic">Legislação Militar</span>
      <q-separator
        color="accent"
        style="opacity: 0.3"
        class="q-mt-xs q-mb-md"
      />

      <div class="row q-gutter-lg">
        <div
          class="col-3"
          v-for="(modulo, index) in modulosMilitar"
          :key="index"
        >
          <q-btn
            no-caps
            :to="`modulo/${modulo.id}`"
            color="primary"
            @click="choose(modulo)"
          >
            <span class="text-weight-light">{{modulo.nome}}</span>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="q-mt-lg">
      <span class="text-white text-italic">Legislação SVA</span>
      <q-separator
        color="accent"
        style="opacity: 0.3"
        class="q-mt-xs q-mb-md"
      />

      <div class="row q-gutter-lg">
        <div
          class="col-3"
          v-for="(modulo, index) in modulosSVA"
          :key="index"
        >
          <q-btn
            :to="`modulo/${modulo.id}`"
            class="fit"
            color="primary"
            @click="choose(modulo)"
          >
            <span class="text-weight-light">{{modulo.nome}}</span>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { db } from 'boot/firebase'

export default {
  created () {
    this.getAnswersFromDB()
    this.getModulosFromDB()
  },
  computed: {
    ...mapGetters(['getUsuario', 'getModulos']),
    modulosMilitar () {
      return this.getModulos.filter(modulo => modulo.tipo === 'MILITAR')
    },
    modulosSVA () {
      return this.getModulos.filter(modulo => modulo.tipo === 'SVA')
    }
  },
  methods: {
    ...mapMutations('questionario', ['setChoosedQuestionary', 'setAnswers']),
    ...mapMutations(['setModulos']),
    choose (modulo) {
      this.setChoosedQuestionary(modulo)
    },
    getModulosFromDB () {
      db.collection('modulos')
        .get()
        .then(snapshot => {
          this.setModulos(snapshot.empty ? [] : snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch(function () {
          // console.error('Error writing document: ', error)
        })
    },
    getAnswersFromDB () {
      db.collection('respostas')
        .where('idUsuario', '==', this.getUsuario.id)
        .get()
        .then(snapshot => {
          this.setAnswers(snapshot.empty ? [] : snapshot.docs.map(doc => doc.data()))
        })
        .catch(function () {
        })
    }
  }

}
</script>
<style scoped>
#home .q-btn {
  padding: 4px 4px;
  min-width: 96px;
  min-height: 66px;
  font-size: 15px;
}
</style>
