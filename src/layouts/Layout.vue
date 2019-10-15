<template>
  <div
    class="q-pa-lg"
    style="background-color: #1D2833"
  >
    <q-layout view="lHh Lpr lFf">
      <app-header />

      <q-page-container class="padding q-pt-md">
        <router-view />
      </q-page-container>

      <app-footer />
    </q-layout>
  </div>
</template>

<script>
import AppHeader from 'layouts/AppHeader.vue'
import AppFooter from 'layouts/AppFooter.vue'

export default {
  name: 'MyLayout',
  components: {
    AppHeader, AppFooter
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
