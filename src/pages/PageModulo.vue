<template>
  <div>
    <span class="text-white text-italic">Documentos relativos</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <div class="q-pb-lg">
      <q-btn
        class="fit"
        color="primary"
      > Referência</q-btn>

    </div>
    <span class="text-white text-italic">Preparar questionario</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <q-list class="text-white">

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Cronometro ?</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="green"
            v-model="cronometro"
          />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Correção somente no final ?</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-toggle
            color="green"
            v-model="correcaoFinal"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Quantidade de questões ?</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-input
            dark
            mask="##"
            v-model.number="qtsQuestoes"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Quantidade de questões ?</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-btn-toggle
            dark
            v-model="typeQuestion"
            toggle-color="green"
            :options="tipos"
          />
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    tipos: [
      { label: 'Básica', value: 1 },
      { label: 'Avançada', value: 2 }
    ]
  }),
  computed: {
    ...mapGetters('questionario', ['getConfigQuestionary']),
    cronometro: {
      get () {
        return this.getConfigQuestionary.cronometro
      },
      set (value) {
        this.$store.commit('questionario/updateCronometro', value)
      }
    },
    correcaoFinal: {
      get () {
        return this.getConfigQuestionary.correcaoFinal
      },
      set (value) {
        this.$store.commit('questionario/updateCorrecaoFinal', value)
      }
    },
    qtsQuestoes: {
      get () {
        return this.getConfigQuestionary.qtsQuestoes
      },
      set (value) {
        this.$store.commit('questionario/updateQtdQuestoes', value)
      }
    },
    typeQuestion: {
      get () {
        return this.getConfigQuestionary.typeQuestion
      },
      set (value) {
        this.$store.commit('questionario/updateTypeQuestion', value)
      }
    }
  }
}
</script>
