<template>
  <q-page>

    <q-separator
      dark
      class="q-mb-md q-mt-sm"
    />

    <span
      class="text-white"
      v-html="pergunta.valor"
    >
    </span>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row"
      v-for="(resposta, index) in pergunta.respostas"
      :key="index"
    >

      <q-chip
        class="fit"
        outline
        square
        color="primary"
        text-color="white"
        :selected="resposta.selecionada"
        @click="toggleChoice(resposta)"
      >
        <q-avatar
          font-size="24px"
          :icon="`mdi-alpha-${resposta.letra}`"
          color="primary"
          text-color="white"
        />

        <span v-html="resposta.valor"></span>
      </q-chip>
    </div>

    <div class="row text-right q-pt-md">
      <div class="col">
        <q-btn
          color="accent"
          @click="next"
        >
          Próxima
        </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  name: 'PageIndex',
  created () {
    this.getPergunta()
  },
  data: () => ({
    pergunta: {},
    perguntaCorrente: 0
  }),
  methods: {
    toggleChoice (pergunta) {
      this.reset()
      pergunta.selecionada = true
    },
    reset () {
      this.pergunta.respostas.forEach(pergunta => {
        pergunta.selecionada = false
      })
    },
    next () {
      this.perguntaCorrente++
      this.getPergunta()
    },
    getPergunta () {
      this.pergunta = LocalStorage.getItem('perguntas')[this.perguntaCorrente]
      this.pergunta.respostas.forEach(pergunta => {
        this.$set(pergunta, 'selecionada', false)
      })
    }
  }
}
</script>
<style >
#lista-questoes .q-item {
  padding: 4px 12px;
}
.q-chip__content {
  color: white;
}
.q-chip {
  padding: 0px 12px;
}
</style>
