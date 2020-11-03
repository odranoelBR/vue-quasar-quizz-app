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
      @created="getImagem"
      @resposta-analisada="setRespostaAnalisada "
      :answer="answer"
      :current-question="getCurrentQuestion"
      :resposta-analisada="respostaAnalisada"
      :url-for-image="urlForImage"
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
            style="height: 41px"
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
          style="height: 41px"
          @click="back"
          v-show="!ehPrimeiraQuestao"
        >
          <q-icon name="arrow_back" />
        </q-btn>
      </div>
      <div class="col-auto">
        <q-btn
          color="accent"
          style="height: 41px"
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
      <q-card class="column justify-between bg-dialog">
        <q-card-section class="no-padding">
          <div style="min-height: 250px">
            <transition
              :duration="5000"
              enter-active-class="animated slideInLeft"
              leave-active-class="animated slideOutLeft"
            >
              <img
                v-if="trophy"
                class="q-pt-lg q-pb-lg"
                src="statics/success.svg"
                alt=""
              >
            </transition>
          </div>

          <div class="row no-wrap items-center text-center">
            <div class="col text-h4 ellipsis text-bold">
              Parabéns!
            </div>
          </div>
        </q-card-section>

        <q-card-section class="col text-center bg-dialog q-pt-sm">
          <div class="text-h3 text-positive">
            {{ porcentagemAcertos }}%
            Acerto
          </div>
          <div class="text-h6 q-pt-md">
            Você completou as questões!
          </div>
          <div class="text-h6">
            Foi <span class="text-h5 text-accent">{{ respostasCorretas }}</span> acerto
            de    <span class="text-h5 text-accent">{{ configQuestionary.qtdQuestoes }}</span>
          </div>
        </q-card-section>

        <q-card-section class="column ">
          <q-btn
            class="answer-chip q-mb-md"
            color="secondary"
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
// import Vivus from 'vivus'
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
    dialog: false,
    trophy: false
  }),
  watch: {
    dialog () {
      if (this.dialog) {
        setTimeout(() => {
          this.trophy = true
        }, 2)
      }
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
    ...mapFields('questionario', ['configQuestionary', 'answers', 'choosedQuestionary', 'urlForImage']),
    algumaRespostaSelecionada () {
      return this.getCurrentQuestion.respostas.some(resposta => resposta.selecionada)
    },
    answer () {
      return this.answers.find(answer => answer.idQuestao === this.getCurrentQuestion.id)
    },
    respostasCorretas () {
      return this.answers.filter(modulo => modulo.correta).length
    },
    porcentagemAcertos () {
      return (this.respostasCorretas / this.configQuestionary.qtdQuestoes * 100)
        .toString().substr(0, 5)
    }
  },
  methods: {
    ...mapActions('questionario', ['getQuestions', 'updateAnswer', 'nextQuestion', 'backQuestion', 'updateCurrentQuestionChoice', 'resetChoices', 'getImage']),
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
      this.$q.notify({
        ...{ position: 'bottom-right', classes: 'notify-questionario', group: false }, ...(answer.correta ? this.respostaCorreta : this.respostaErrada)
      })
    },
    showBizu () {
      this.$q.notify({
        message: this.getCurrentQuestion.bizu,
        color: 'primary',
        position: 'top',
        timeout: '3000',
        avatar: 'statics/idea.svg'
      })
    },
    getImagem () {
      if (this.getCurrentQuestion.image) {
        this.getImage(this.getCurrentQuestion.id)
      }
    }

  }
}
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
