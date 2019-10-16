<template>
  <div
    class="q-pa-lg"
    style="background-color: #1D2833"
  >
    <q-layout view="lHh Lpr lFf">
      <header-questionario v-if="questionario" />
      <app-header v-else />

      <q-page-container class="padding q-pt-md">
        <transition
          appear
          :duration="{ enter: 300, leave: 300 }"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <router-view />
        </transition>
      </q-page-container>

      <transition-group
        :duration="{ enter: 300, leave: 300 }"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <footer-questionario
          v-if="questionario"
          :key="1"
        />
        <app-footer
          v-else
          :key="2"
        />
      </transition-group>
    </q-layout>
  </div>
</template>

<script>
import AppHeader from 'layouts/AppHeader.vue'
import AppFooter from 'layouts/AppFooter.vue'
import HeaderQuestionario from 'components/HeaderQuestionario.vue'
import FooterQuestionario from 'components/FooterQuestionario.vue'
export default {
  name: 'Layout',
  components: {
    AppHeader, AppFooter, HeaderQuestionario, FooterQuestionario
  },
  computed: {
    questionario () {
      return this.$route.path === '/questionario'
    }
  }
}
</script>
