<template>
  <q-page
    id="questionario"
    v-if="getCurrentQuestion"
  >
    <q-separator
      dark
      class="q-mb-md"
    />

    <form-questionario
      v-if="getCurrentQuestion.id"
      @reset="reset"
      @update="updateCurrent"
      @disable-analise="setDisableAnalise"
      @resposta-analisada="setRespostaAnalisada "
      :answer="answer"
      :current-question="getCurrentQuestion"
      :resposta-analisada="respostaAnalisada"
    />

    <div class="row q-pa-xs q-gutter-sm justify-between text-right">
      <transition
        appear
        :duration="{ enter: 300, leave: 300 }"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="col-auto">
          <q-btn
            color="primary"
            v-if="!disableAnalise && algumaRespostaSelecionada"
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
    <q-dialog
      full-height
      full-width
      v-model="dialog"
    >
      <q-card class="column justify-between">
        <q-card-section class="no-padding">
          <object
            class="q-pt-lg q-pb-lg"
            id="my-svg"
            data="statics/success.svg"
          />

          <div class="row no-wrap items-center text-center">
            <div class="col text-h6 ellipsis">
              Parabéns!
            </div>
          </div>
        </q-card-section>

        <q-card-section class="col text-center bg-secondary">
          <div class="text-subtitle1">
            Acertou {{ respostasCorretas }} de {{ configQuestionary.qtdQuestoes }}
          </div>
        </q-card-section>

        <q-card-section class="column bg-secondary">
          <q-btn
            class="answer-chip q-mb-md"
            color="primary"
            @click="$router.push('historico')"
          >
            Histórico
          </q-btn>

          <q-btn
            class="answer-chip "
            color="accent"
            v-close-popup
            @click="$router.push(`modulo/${choosedQuestionary.id}`)"
          >
            Novo caderno
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>

  <q-page v-else-if="!loading">
    <div-sem-questoes-cadastradas />
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import FormQuestionario from 'components/FormQuestionario'
import DivSemQuestoesCadastradas from 'components/DivSemQuestoesCadastradas'
import Vivus from 'vivus'
export default {
  created () {
    this.getQuestions()
  },
  components: {
    FormQuestionario, DivSemQuestoesCadastradas
  },
  data: () => ({
    respostaCorreta: { icon: 'thumb_up', color: 'positive' },
    respostaErrada: { icon: 'thumb_down', color: 'negative' },
    disableAnalise: false,
    respostaAnalisada: false,
    dialog: true
  }),
  watch: {
    dialog () {
      // eslint-disable-next-line no-new
      new Vivus('my-svg', { duration: 200 })
    },
    cadernoEstaFinalizado () {
      if (this.cadernoEstaFinalizado) {
        this.dialog = true
      }
    }
  },
  computed: {
    ...mapGetters('questionario', ['getCurrentQuestion', 'ehUltimaQuestao', 'ehPrimeiraQuestao', 'cadernoEstaFinalizado']),
    ...mapFields(['loading']),
    ...mapFields('questionario', ['configQuestionary', 'answers', 'choosedQuestionary']),
    algumaRespostaSelecionada () {
      return this.getCurrentQuestion.respostas.some(resposta => resposta.selecionada)
    },
    answer () {
      return this.answers.find(answer => answer.idQuestao === this.getCurrentQuestion.id)
    },
    respostasCorretas () {
      return this.answers.filter(modulo => modulo.correta).length
    }
  },
  methods: {
    ...mapActions('questionario', ['getQuestions', 'updateAnswer', 'nextQuestion', 'backQuestion', 'updateCurrentQuestionChoice', 'resetChoices']),
    setDisableAnalise (flag) { this.disableAnalise = flag },
    setRespostaAnalisada (flag) { this.respostaAnalisada = flag },
    reset (respostaIndex) {
      this.resetChoices(respostaIndex)
    },
    updateCurrent (respostaIndex) {
      this.updateCurrentQuestionChoice(respostaIndex)
    },
    back () {
      this.respostaAnalisada = false
      this.backQuestion()
    },
    next () {
      this.respostaAnalisada = false
      this.nextQuestion()
    },
    analisar () {
      this.respostaAnalisada = true
      this.disableAnalise = true
      let answer = this.getCurrentQuestion.respostas.find(resposta => resposta.selecionada)
      this.updateAnswer({ idQuestao: this.getCurrentQuestion.id, letra: answer.letra, modulo: this.getCurrentQuestion.modulo, correta: answer.correta })
      this.finalizar()
      this.$q.notify({
        ...{ position: 'bottom-right', classes: 'notify-questionario', group: false }, ...(answer.correta ? this.respostaCorreta : this.respostaErrada)
      })
    },
    finalizar () {

    }

  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
