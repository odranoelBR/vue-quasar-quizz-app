<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'

import value from './data.json'

LocalStorage.set('perguntas', value)

export default {
  name: 'App'
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
