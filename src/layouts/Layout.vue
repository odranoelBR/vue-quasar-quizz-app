<template>
  <div
    class="q-pa-lg"
    style="background-color: #005AA7"
  >
    <q-layout view="lHh Lpr lFf">
      <app-header class="q-pb-md" />

      <q-page-container class="padding">
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
