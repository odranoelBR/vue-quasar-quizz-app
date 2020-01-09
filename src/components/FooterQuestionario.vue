<template>
  <q-footer
    reveal
    elevated
    class="bg-secondary"
  >
    <div class="wraper ">
      <svg
        class="text-center"
        version="1.1"
        viewBox="50 0 145 25"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z" />
      </svg>
    </div>
    <q-toolbar style="height: 10.5vh;">
      <q-toolbar-title>
        <div class="row text-center items-center">

          <div class="col-4">
            <span class="text-subtitle1 text-blue-grey-3">Questão
              <span class="text-h6 text-white">{{currentIndex}}</span>
              / {{qtdQuestoes}} </span>
          </div>
          <div class="col-4 ">

            <q-btn
              fab
              class="shadow-18"
              color="primary"
              size="xl"
              :icon="running ? 'mdi-stop' : 'mdi-play'"
              @click="run"
            >

            </q-btn>
          </div>
          <div
            class="col-4"
            v-if="cronometro"
          >
            <stop-watch :running="running" />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>

  </q-footer>
</template>

<script>
import StopWatch from 'components/StopWatch'
import { db } from '../boot/app'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    menuAtual: 'play',
    running: false,
    perguntas: []
  }),
  computed: {
    ...mapGetters('questionario', ['getCurrentQuestionIndex', 'getConfigQuestionary', 'getChoosedQuestionary']),
    currentIndex () {
      return this.getCurrentQuestionIndex + 1
    },
    qtdQuestoes () {
      return this.getConfigQuestionary.qtdQuestoes
    },
    nivel () {
      return this.getConfigQuestionary.nivel
    },
    cronometro () {
      return this.getConfigQuestionary.cronometro
    }
  },
  components: {
    StopWatch
  },
  methods: {
    ...mapMutations('questionario', ['setQuestions']),
    run () {
      this.getQuestions()
    },
    changePage () {
      this.running = !this.running
      if (!this.$route.path.includes('questionario')) {
        this.$router.push('/questionario')
      }
    },
    getQuestions () {
      db.collection('perguntas')
        .limit(this.qtdQuestoes)
        .where('nivel', '==', this.nivel)
        .where('modulo', '==', `modulos/${this.getChoosedQuestionary.id}`)
        .get()
        .then(snapshot => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          this.setQuestions(data)
          this.changePage()
        })
    }
  }
}
</script>

<style scoped>
footer .wraper {
  position: absolute;
  overflow: hidden;
  bottom: 2em;
}
footer svg {
  position: relative;
  transform: scaleY(0.8);
}

footer svg path {
  fill: #212d36;
}
</style>
