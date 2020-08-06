<template>
  <q-footer
    reveal
    elevated
    class="bg-secondary"
  >
    <div class="wraper">
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
              <span class="text-h6 text-white">{{ currentIndex }}</span>
              / {{ qtdQuestoes }} </span>
          </div>
          <div class="col-4 ">
            <q-btn
              fab
              class="shadow-18"
              color="primary"
              size="xl"
              :icon="running ? 'mdi-stop' : 'mdi-play'"
              @click="run"
            />
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
import { mapFields } from 'vuex-map-fields'

export default {
  data: () => ({
    menuAtual: 'play',
    running: false,
    perguntas: []
  }),
  computed: {
    ...mapFields('questionario', ['currentQuestionIndex', 'choosedQuestionary']
      .concat(['qtdQuestoes', 'nivel', 'cronometro']
        .map(field => `configQuestionary.${field}`))),
    currentIndex () {
      return this.currentQuestionIndex + 1
    }
  },
  components: {
    StopWatch
  },
  methods: {
    run () {
      if (!this.running) {
        this.changePage()
        return
      }
      this.$router.push('/historico')
    },
    changePage () {
      this.running = !this.running
      if (!this.$route.path.includes('questionario')) {
        this.$router.push('/questionario')
      }
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
