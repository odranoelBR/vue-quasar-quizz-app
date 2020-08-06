<template>
  <div>
    <span
      class="text-white texto-courier"
      style="font-size: 11pt"
      v-html="currentQuestion.texto"
    />

    <div class="row">
      <span class="text-caption text-blue-grey-3">
        {{ currentQuestion.referencia }}
      </span>
    </div>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row question-row"
      v-for="(resposta, index) in currentQuestion.respostas"
      :key="index"
    >
      <q-chip
        class="fit"
        :outline="getOutline(resposta)"
        square
        :color="getButtonColor(resposta)"
        text-color="white"
        :selected="resposta.selecionada"
        :disable="respostaAnalisada"
        @click="toggleChoice(index)"
      >
        <q-avatar
          class="full-height"
          :icon="`mdi-alpha-${resposta.letra}`"
        >
          )
        </q-avatar>

        <span
          v-html="resposta.texto"
          class="texto-courier"
        />
      </q-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: {
      type: Object,
      required: true
    },
    answer: {
      type: Object,
      default: () => ({})
    },
    respostaAnalisada: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    'currentQuestion.id': {
      handler: 'syncronize',
      immediate: true
    }
  },
  methods: {
    syncronize () {
      this.$emit('resposta-analisada', false)
      this.$emit('disable-analise', false)
      if (!this.answer) return

      this.currentQuestion.respostas.forEach(resposta => {
        if (resposta.letra === this.answer.letra) {
          resposta.selecionada = true
          this.$emit('disable-analise', true)
          this.$emit('resposta-analisada', true)
        }
      })
    },
    toggleChoice (respostaIndex) {
      this.$emit('reset', respostaIndex)
      this.$emit('update', respostaIndex)
    },
    getButtonColor (resposta) {
      if (this.respostaAnalisada && resposta.correta) {
        return 'positive'
      }
      if (this.respostaAnalisada && !resposta.correta && resposta.selecionada) {
        return 'negative'
      }
      return 'primary'
    },
    getOutline (resposta) {
      if (this.respostaAnalisada && resposta.correta) {
        return false
      }
      if (!resposta.selecionada) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
#lista-questoes .q-item {
  padding: 0px 12px;
}
.question-row .q-chip__content {
  color: white;
  padding: 6px;
}
.texto-courier {
  font-family: "Courier New", Courier, monospace;
  white-space: normal;
}
</style>
