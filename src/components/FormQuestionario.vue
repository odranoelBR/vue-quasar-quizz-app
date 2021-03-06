<template>
  <div>
    <div class="row q-pb-sm">
      <span
        class="text-white texto-courier"
        style="font-size: 11pt"
        v-html="currentQuestion.texto"
      />
    </div>

    <q-img
      class="q-mb-sm q-mt-sm"
      :src="urlForImage"
      v-if="urlForImage"
    />
    <div
      class="row q-pb-sm"
      v-show="currentQuestion.posTexto"
    >
      <span
        class="text-white texto-courier"
        style="font-size: 11pt"
        v-html="currentQuestion.posTexto"
      />
    </div>

    <div class="row">
      <span class="text-caption text-blue-grey-3 q-pb-md">
        {{ currentQuestion.referencia }}
      </span>
    </div>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row question-row q-pb-xs"
      v-for="(item, index) in currentQuestion.respostas"
      :key="index"
    >
      <q-chip
        :color="getColor(item)"
        class="fit answer-chip"
        clickable
        :disable="analisedAnswer"
        @click="toggleChoice(item)"
      >
        <img
          :src="getIcon(answer)"
          alt=""
        >
        <span
          v-html="item.texto"
          :style="item.selecionada ? 'color: white' : ''"
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
    analisedAnswer: {
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
      this.$emit('analised-answer', false)
      this.$emit('disable-analise', false)
      if (!this.answer) return

      this.currentQuestion.respostas.forEach(resposta => {
        if (resposta.letra === this.answer.letra) {
          resposta.selecionada = true
          this.$emit('disable-analise', true)
          this.$emit('analised-answer', true)
        }
      })
    },
    toggleChoice (respostaIndex) {
      this.$emit('reset', respostaIndex)
      this.$emit('update', respostaIndex)
    },
    getButtonColor (resposta) {
      if (this.analisedAnswer && resposta.correta) {
        return 'positive'
      }
      if (this.analisedAnswer && !resposta.correta && resposta.selecionada) {
        return 'negative'
      }
      return 'primary'
    },
    getColor (resposta) {
      if (this.analisedAnswer && resposta.correta) {
        return 'positive'
      }
      if (this.analisedAnswer && !resposta.correta && resposta.selecionada) {
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
