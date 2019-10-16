<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'
import { mapMutations } from 'vuex'

import value from './data.json'

LocalStorage.set('perguntas', value)

export default {
  name: 'App',
  created () {
    value.forEach(question => {
      question.answers.forEach(answer => {
        this.$set(answer, 'selected', false)
      })
    })
    this.setQuestions(value)
  },
  methods: {
    ...mapMutations('questionario', ['setQuestions'])
  }
}
</script>
<style>
.get-down-menu {
  padding-bottom: 11em;
}
.get-down-search {
  padding-bottom: 5em;
}
</style>
