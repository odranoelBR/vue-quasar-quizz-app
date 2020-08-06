<template>
  <q-layout
    view="lHh Lpr lFf"
    style="background-color: #1D2833"
  >
    <div class="q-pa-lg">
      <header-questionario v-if="questionario" />
      <app-header v-else />

      <q-page-container class="padding q-pt-md">
        <transition
          appear
          :duration="{ enter: 200, leave: 200 }"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <router-view />
        </transition>
      </q-page-container>

      <transition-group
        :duration="{ enter: 200, leave: 200 }"
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
      <!-- <img
        id="img-gladio"
        class="absolute-bottom q-pb-xl q-mb-lg"
        src="~assets/gladio.png"
      > -->
    </div>
  </q-layout>
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
      return this.$route.path.includes('modulo/') || this.$route.path === '/questionario'
    }
  }
}
</script>
