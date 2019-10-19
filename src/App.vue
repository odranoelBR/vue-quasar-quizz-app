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
#img-gladio {
  width: 99vw;
  opacity: 0.015;
}

.q-layout__shadow:after {
  box-shadow: 0 0 10px 2px rgba(216, 221, 252, 0.2),
    0 0px 10px rgba(216, 221, 252, 0.24);
}
</style>
