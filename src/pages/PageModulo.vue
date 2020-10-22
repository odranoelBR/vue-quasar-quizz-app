<template>
  <div class="text-white">
    <span class="text-white text-italic">Preparar questionário</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-xl"
    />

    <div class="row q-pb-xs text-weight-thin">
      <div class="col">
        <q-item-label>Questões</q-item-label>
      </div>
    </div>
    <div class="row q-pb-lg ">
      <div class="col">
        <q-btn
          flat
          size="32px"
        >
          -
        </q-btn>
        {{ qtdQuestoes }}
        <q-btn
          flat
          size="28px"
        >
          +
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col">
        <q-label>Nível</q-label>
      </div>
    </div>
    <div class="row q-pb-lg items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="positive"
          @click="nivel = 1"
        >
          Básico
        </q-btn>
      </div>
      <div class="col ">
        <arrow-animated :toggle="nivel === 1" />
      </div>
      <div class="col">
        <q-btn
          class="fit"
          color="negative"
          @click="nivel = 2"
        >
          Avançado
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col">
        <q-label>Apagar respostas salvas deste modulo ?</q-label>
      </div>
    </div>
    <div class="row items-center justify-center">
      <div class="col-4">
        <q-btn
          class="fit"
          color="positive"
          @click="apagarRespostas = false"
        >
          Não
        </q-btn>
      </div>
      <div class="col-4">
        <arrow-animated :toggle="!apagarRespostas" />
      </div>
      <div class="col-4">
        <q-btn
          class="fit"
          @click="apagarRespostas = true"
          color="negative"
        >
          Sim
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import ArrowAnimated from 'components/ArrowAnimated.vue'
export default {
  components: {
    ArrowAnimated
  },
  created () {
    this.resetState()
  },
  data: () => ({
    tipos: [
      { label: 'Básico', value: 1 },
      { label: 'Avançado', value: 2 }
    ],
    simNao: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false }
    ]
  }),
  computed: {
    ...mapFields('questionario', ['cronometro', 'correcaoFinal', 'qtdQuestoes', 'nivel', 'repetirQuestoes', 'apagarRespostas']
      .map(field => `configQuestionary.${field}`))
  },
  methods: {
    ...mapActions('questionario', ['resetState']),
    getBtnColor (model) {
      if (model) return 'positive'
      return 'negative'
    }
  }
}
</script>
