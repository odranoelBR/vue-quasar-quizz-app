<template>
  <div class="text-white">
    <span class="text-white text-italic">Preparar questionário</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-xl"
    />

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        Questões
      </div>
    </div>
    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit add-remove"
          color="primary"
          icon="remove"
          @click="qtdQuestoes--"
        />
      </div>
      <div class="col text-center text-h3">
        {{ qtdQuestoes }}
      </div>
      <div class="col">
        <q-btn
          class="fit add-remove"
          color="accent"
          icon="add"
          @click="qtdQuestoes++"
        />
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col letter-space">
        Nível
      </div>
    </div>
    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="primary"
          @click="nivel = 1"
          :outline="nivel == 2"
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
          color="accent"
          @click="nivel = 2"
          :outline="nivel == 1"
        >
          Avançado
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col letter-space">
        Apagar respostas salvas deste modulo ?
      </div>
    </div>
    <div class="row items-center justify-center">
      <div class="col-4">
        <q-btn
          class="fit"
          color="primary"
          @click="apagarRespostas = false"
          :outline="apagarRespostas"
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
          color="accent"
          :outline="!apagarRespostas"
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
