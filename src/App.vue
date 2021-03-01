<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.getModulos()
    this.getAnswers()
  },

  methods: {
    ...mapActions(['getModulos']),
    ...mapActions('questionary', ['getAnswers'])
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
  box-shadow: none;
}
</style>
