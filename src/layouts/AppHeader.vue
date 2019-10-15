<template>
  <div>
    <div class="row text-h5 text-bold text-white">
      <div class="col">Rebel
        <q-icon
          :name="arrowIcon"
          @click="toggleMenu"
        />
      </div>
      <div class="col text-right">
        <q-icon
          :name="searchingIcon"
          @click="toggleSearch"
        />
      </div>
    </div>
    <div class="row">
      <app-menu
        v-show="menuOpen"
        :showing="menuOpen"
      ></app-menu>
    </div>
  </div>
</template>
<script>
import AppMenu from 'layouts/AppMenu'
export default {
  data: () => ({
    menuOpen: false,
    searchingNow: false
  }),
  components: {
    AppMenu
  },
  computed: {
    arrowIcon () {
      return `mdi-arrow-${this.menuOpen ? 'up' : 'down'}`
    },
    searchingIcon () {
      return `mdi-${this.searchingNow ? 'close' : 'magnify'}`
    }
  },
  methods: {
    toggleMenu () {
      this.searchingNow = false
      this.menuOpen = !this.menuOpen
    },
    toggleSearch () {
      this.menuOpen = false
      this.searchingNow = !this.searchingNow
    }
  }
}
</script>
