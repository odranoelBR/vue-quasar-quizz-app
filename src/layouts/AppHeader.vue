<template>
  <div :class="position">
    <div class="row text-h6 text-weight-light text-white">
      <div class="col-auto ">
        Rebel
      </div>
      <div
        class="col "
        @click="toggleMenu"
      >
        <q-icon
          size="22px"
          :name="arrowIcon"
        />
      </div>
      <!-- <div class="col text-right">
        <q-icon
          size="25px"
          :name="searchingIcon"
          @click="toggleSearch"
        />
      </div> -->
    </div>
    <div>

    </div>
    <div>
      <app-menu
        :showing="menuOpen"
        @hide="toggleMenu"
      ></app-menu>
      <!-- <search-menu
        :showing="searchingNow"
        @hide="toggleSearch"
      ></search-menu> -->
    </div>

  </div>

</template>
<script>
import AppMenu from 'layouts/AppMenu'
// import SearchMenu from 'components/SearchMenu'
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
    },
    position () {
      if (this.menuOpen) return 'get-down-menu'
      if (this.searchingNow) return 'get-down-search'
      return ''
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
<style scoped>
</style>
