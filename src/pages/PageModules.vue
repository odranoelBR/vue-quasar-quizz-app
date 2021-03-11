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
          v-for="(module, index) in modulosMilitar"
          :key="index"
        >
          <q-btn
            no-caps
            :to="`modulo/${module.id}`"
            color="primary"
            @click="choose(module)"
          >
            <span class="text-weight-light">{{ module.nome }}</span>
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
          v-for="(module, index) in modulosSVA"
          :key="index"
        >
          <q-btn
            :to="`modulo/${module.id}`"
            class="fit"
            color="primary"
            @click="choose(module)"
          >
            <span class="text-weight-light">{{ module.nome }}</span>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'
import { db } from 'boot/firebase'

export default {
  computed: {
    ...mapFields(['modules']),
    ...mapFields('questionary', ['choosedQuestionary']),
    modulosMilitar () {
      return this.modules.filter(modulo => modulo.tipo === 'MILITAR')
    },
    modulosSVA () {
      return this.modules.filter(modulo => modulo.tipo === 'SVA')
    }
  },
  firestore: {
    respostas: db.collection('modulos')
  },
  methods: {
    choose (modulo) {
      this.choosedQuestionary = modulo
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
