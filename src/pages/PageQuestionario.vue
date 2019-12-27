<template>
  <q-page id="questionario">

    <q-separator
      dark
      class="q-mb-md"
    />

    <span
      class="text-white"
      v-html="getCurrentQuestion.texto"
    >
    </span>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row question-row"
      v-for="(resposta, index) in getCurrentQuestion.respostas"
      :key="index"
    >

      <q-chip
        class="fit"
        :outline="getOutline(resposta)"
        square
        :color="getButtonColor(resposta)"
        text-color="white"
        :selected="resposta.selecionada"
        @click="toggleChoice(index)"
      >
        <q-avatar
          class="full-height"
          :icon="`mdi-alpha-${resposta.letra}`"
        >)</q-avatar>

        <div class="row">
          <span v-html="resposta.texto"></span>
        </div>
      </q-chip>
    </div>

    <div class="row q-pa-xs q-gutter-sm justify-between text-right">
      <transition
        appear
        :duration="{ enter: 300, leave: 300 }"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div
          class="col-auto"
          v-if="showButtonAnalisar "
        >
          <q-btn
            color="positive"
            @click="analisar"
          >
            Analisar
          </q-btn>
        </div>
      </transition>

      <div class="col">
        <q-btn
          color="accent"
          @click="back"
          v-show="!ehPrimeiraQuestao"
        >
          <q-icon name="arrow_back" />
        </q-btn>
      </div>
      <div class="col-auto">
        <q-btn
          color="accent"
          @click="next"
          v-show="!ehUltimaQuestao"
        >
          <q-icon name="arrow_forward" />
        </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    respostaAnalisada: false
  }),
  computed: {
    ...mapGetters('questionario', ['getCurrentQuestion', 'getConfigQuestionary', 'ehUltimaQuestao', 'ehPrimeiraQuestao']),
    showButtonAnalisar () {
      return !this.getConfigQuestionary.correcaoFinal && this.algumaRespostaSelecionada
    },
    algumaRespostaSelecionada () {
      return this.getCurrentQuestion.respostas.some(resposta => resposta.selecionada)
    }
  },
  methods: {
    ...mapMutations('questionario', ['nextQuestion', 'backQuestion', 'updateCurrentQuestionChoice', 'resetChoices', 'updateAnswer']),
    back () {
      this.respostaAnalisada = false
      this.backQuestion()
    },
    next () {
      this.respostaAnalisada = false
      this.nextQuestion()
    },
    toggleChoice (respostaIndex) {
      this.resetChoices(respostaIndex)
      this.updateCurrentQuestionChoice(respostaIndex)
    },
    analisar () {
      this.respostaAnalisada = true
      let answer = this.getCurrentQuestion.respostas.find(resposta => resposta.selecionada)
      this.updateAnswer({ id: this.getCurrentQuestion.id, answer: answer.letra })
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
</style>
