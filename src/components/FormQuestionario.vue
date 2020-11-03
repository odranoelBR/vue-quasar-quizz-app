<template>
  <div>
    <div class="row q-pb-md">
      <span
        class="text-white texto-courier"
        style="font-size: 11pt"
        v-html="currentQuestion.texto"
      />
    </div>

    <q-img
      :src="urlForImage"
      v-if="urlForImage"
    />
    <div class="row q-pt-md">
      <span
        class="text-white texto-courier"
        style="font-size: 11pt"
        v-html="currentQuestion.posTexto"
      />
    </div>

    <div class="row">
      <span class="text-caption text-blue-grey-3">
        {{ currentQuestion.referencia }}
      </span>
    </div>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row question-row q-pb-xs"
      v-for="(resposta, index) in currentQuestion.respostas"
      :key="index"
    >
      <q-chip
        :color="getColor(resposta)"
        class="fit answer-chip"
        clickable
        :disable="respostaAnalisada"
        @click="toggleChoice(index)"
      >
        <img
          :src="getIcon(resposta)"
          alt=""
        >
        <span
          v-html="resposta.texto"
          :style="resposta.selecionada ? 'color: white' : ''"
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
    },
    urlForImage: {
      type: String,
      default: () => false
    }
  },
  created () {
    this.$emit('created')
  },
  watch: {
    'currentQuestion.id': {
      handler: 'syncronize',
      immediate: true
    }
  },
  methods: {
    getIcon (resposta) {
      if (resposta.selecionada) {
        return 'statics/checked.svg'
      }

      return `statics/${resposta.letra}.svg`
    },
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
    getColor (resposta) {
      if (this.respostaAnalisada && resposta.correta) {
        return 'positive'
      }
      if (this.respostaAnalisada && !resposta.correta && resposta.selecionada) {
        return 'negative'
      }
      if (!resposta.selecionada) {
        return ''
      }
      return 'primary'
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
