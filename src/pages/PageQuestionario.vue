<template>
  <q-page id="questionario">

    <q-separator
      dark
      class="q-mb-md"
    />

    <span
      class="text-white"
      v-html="getCurrentQuestion.value"
    >
    </span>

    <q-separator class="q-pb-md bg-info" />

    <div
      class="row question-row"
      v-for="(answer, index) in getCurrentQuestion.answers"
      :key="index"
    >

      <q-chip
        class="fit"
        :outline="getOutline(answer)"
        square
        :color="getButtonColor(answer)"
        text-color="white"
        :selected="answer.selected"
        @click="toggleChoice(index)"
      >
        <q-avatar
          class="full-height"
          :icon="`mdi-alpha-${answer.letter}`"
        >)</q-avatar>

        <span v-html="answer.value"></span>
      </q-chip>
    </div>

    <div class="row q-pt-md justify-between text-right">
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
          @click="next"
        >
          Próxima
        </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {

  data: () => ({
    answerAnalized: false
  }),
  computed: {
    ...mapGetters('questionario', ['getCurrentQuestion', 'getConfigQuestionary']),
    showButtonAnalisar () {
      return !this.getConfigQuestionary.correcaoFinal && this.someAnswerSelected
    },
    someAnswerSelected () {
      return this.getCurrentQuestion.answers.some(answer => answer.selected)
    }
  },
  methods: {
    ...mapMutations('questionario', ['nextQuestion', 'updateCurrentQuestionChoice', 'resetChoices']),
    next () {
      this.answerAnalized = false
      this.nextQuestion()
    },
    toggleChoice (answerIndex) {
      this.resetChoices(answerIndex)
      this.updateCurrentQuestionChoice(answerIndex)
    },
    analisar () {
      this.answerAnalized = true
    },
    getButtonColor (answer) {
      if (this.answerAnalized && answer.correct) {
        return 'positive'
      }
      if (this.answerAnalized && !answer.correct && answer.selected) {
        return 'negative'
      }
      return 'primary'
    },
    getOutline (answer) {
      if (this.answerAnalized && answer.correct) {
        return false
      }
      if (!answer.selected) {
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
