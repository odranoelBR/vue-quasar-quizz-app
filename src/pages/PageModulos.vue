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
            <span class="text-weight-light">{{modulo.name}}</span>
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
            <span class="text-weight-light">{{modulo.name}}</span>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { db } from '../boot/app'

export default {
  data: () => ({
    modulosMilitar: [
      { name: 'RDAER', icon: '', id: 1 },
      { name: 'RCONT', icon: '', id: 2 },
      { name: 'RISAER', icon: '', id: 3 },
      { name: 'SINDICÂNCIA', icon: '', id: 4 }
    ],
    modulosSVA: [
      { name: '35-1', icon: '', id: 5 },
      { name: 'FCA', icon: '', id: 6 },
      { name: 'ICAER', icon: '', id: 7 },
      { name: 'LICITAÇÃO', icon: '', id: 8 },
      { name: 'REMUN.', icon: '', id: 9 }
    ]
  }),
  created () {
    this.getAnswers()
  },
  computed: {
    ...mapGetters(['getUsuario'])
  },
  methods: {
    ...mapMutations('questionario', ['setChoosedQuestionary', 'setAnswers']),
    choose (modulo) {
      this.setChoosedQuestionary(modulo)
    },
    getAnswers () {
      db.collection('respostas')
        .where('idUsuario', '==', this.getUsuario.usuario.id)
        .get()
        .then(snapshot => {
          this.setAnswers(snapshot.empty ? [] : snapshot.docs.map(doc => doc.data()))
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
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
