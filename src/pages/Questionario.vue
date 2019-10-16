<template>
  <q-page>

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
      class="row"
      v-for="(answer, index) in getCurrentQuestion.answers"
      :key="index"
    >

      <q-chip
        class="fit"
        outline
        square
        color="primary"
        text-color="white"
        :selected="answer.selected"
        @click="toggleChoice(index)"
      >
        <q-avatar
          class="full-height"
          font-size="24px"
          :icon="`mdi-alpha-${answer.letter}`"
          color="primary"
          text-color="white"
        />

        <span v-html="answer.value"></span>
      </q-chip>
    </div>

    <div class="row text-right q-pt-md">
      <div class="col">
        <q-btn
          color="accent"
          @click="nextQuestion"
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
  name: 'PageIndex',
  created () {
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters('questionario', ['getCurrentQuestion'])
  },
  methods: {
    ...mapMutations('questionario', ['nextQuestion', 'updateCurrentQuestionChoice', 'resetChoices']),
    toggleChoice (answerIndex) {
      this.resetChoices(answerIndex)
      this.updateCurrentQuestionChoice(answerIndex)
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
