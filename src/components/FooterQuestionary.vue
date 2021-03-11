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
            <span class="text-subtitle1 text-blue-grey-3 text-weight-light">{{ $tc('words.question', 1) }}
              <span class="text-h4 text-white text-weight-bold">{{ currentIndex }}</span>
              /
              <span class="text-h5">{{ questions.length || '-' }}</span>

            </span>
          </div>
          <div class="col-4 ">
            <q-btn
              fab
              class="shadow-5"
              color="primary"
              size="xl"
              :icon="running ? 'mdi-stop' : 'mdi-play'"
              @click="run"
            />
          </div>
          <div
            class="col"
            v-show="getCurrentQuestion.bizu"
          >
            <q-btn
              fab
              class="shadow-5"
              color="primary"
              style="padding: 10px"
              padding="none"
              @click="showTip"
            >
              <img
                src="statics/idea.svg"
                alt=""
              >
            </q-btn>
          </div>
          <div
            class="col-auto"
            v-show="getCurrentQuestion.bizu"
          >
            <q-btn
              fab
              class="shadow-5"
              color="primary"
              padding="none"
              style="padding: 10px"
              @click="video = true"
            >
              <img
                src="statics/youtube.svg"
                alt=""
              >
            </q-btn>
          </div>
          <div
            class="col-4"
            v-if="chronometer"
          >
            <stop-watch :running="running" />
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <q-dialog
      v-model="video"
      full-height
    >
      <q-video
        :src="getCurrentQuestion.link"
        allowfullscreen
      />
    </q-dialog>
  </q-footer>
</template>

<script>
import StopWatch from 'components/StopWatch'
import { mapFields } from 'vuex-map-fields'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    video: false
  }),
  computed: {
    ...mapGetters('questionary', ['getCurrentQuestion']),
    ...mapFields('questionary', ['currentQuestionIndex', 'questions', 'choosedQuestionary']
      .concat(['level', 'chronometer', 'running']
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
    },
    showTip () {
      this.$q.notify({
        message: this.getCurrentQuestion.bizu,
        color: 'primary',
        position: 'top',
        timeout: '3000',
        avatar: 'statics/idea.svg'
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
