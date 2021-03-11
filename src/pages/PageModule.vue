<template>
  <div class="text-white">
    <span class="text-white text-italic">Preparar questionário</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-xl"
    />

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        {{ $tc('words.question', 2) }}
      </div>
    </div>
    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit add-remove"
          color="primary"
          icon="remove"
          @click="questionsSize--"
        />
      </div>
      <div class="col text-center text-h3">
        {{ questionsSize }}
      </div>
      <div class="col">
        <q-btn
          class="fit add-remove"
          color="accent"
          icon="add"
          @click="questionsSize++"
        />
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col letter-space">
        {{ $t('words.level') }}
      </div>
    </div>
    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="primary"
          @click="level = 1"
          :outline="level == 2"
        >
          {{ $t('words.basic') }}
        </q-btn>
      </div>
      <div class="col ">
        <arrow-animated :toggle="level === 1" />
      </div>
      <div class="col">
        <q-btn
          class="fit"
          color="accent"
          @click="level = 2"
          :outline="level == 1"
        >
          {{ $t('words.advanced') }}
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-sm text-weight-thin">
      <div class="col letter-space">
        {{ $t('messages.eraseSavedResponses') }}
      </div>
    </div>
    <div class="row items-center justify-center">
      <div class="col-4">
        <q-btn
          class="fit"
          color="primary"
          @click="eraseQuestions = false"
          :outline="eraseQuestions"
        >
          {{ $t('words.no') }}
        </q-btn>
      </div>
      <div class="col-4">
        <arrow-animated :toggle="!eraseQuestions" />
      </div>
      <div class="col-4">
        <q-btn
          class="fit"
          @click="eraseQuestions = true"
          color="accent"
          :outline="!eraseQuestions"
        >
          {{ $t('words.yes') }}
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import ArrowAnimated from 'components/ArrowAnimated.vue'

export default {
  components: {
    ArrowAnimated
  },
  created () {
    this.resetState()
  },
  computed: {
    ...mapFields('questionary', ['chronometer', 'correcaoFinal', 'questionsSize', 'level', 'repeatQuestions', 'eraseQuestions']
      .map(field => `configQuestionary.${field}`))
  },
  methods: {
    ...mapActions('questionary', ['resetState']),
    getBtnColor (model) {
      if (model) return 'positive'
      return 'negative'
    }
  }
}
</script>
