<template>
  <div
    class="q-pa-lg"
    style="background-color: #1D2833"
  >
    <q-layout view="lHh Lpr lFf">
      <app-header v-if="!questionario" />
      <template v-else>
        <q-icon
          name="mdi-arrow-left"
          color="white"
          size="26px"
          @click="goHome"
        ></q-icon>

        <span class="text-white text-h6"> {{ getName }} </span>
      </template>

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

      <transition
        appear
        :duration="{ enter: 3000, leave: 300 }"
        mode="out-in"
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <app-footer v-show="questionario" />
      </transition>
    </q-layout>
  </div>
</template>

<script>
import AppHeader from 'layouts/AppHeader.vue'
import AppFooter from 'layouts/AppFooter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'MyLayout',
  components: {
    AppHeader, AppFooter
  },
  computed: {
    ...mapGetters('questionario', ['getName']),
    questionario () {
      return this.$route.path === '/questionario'
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
