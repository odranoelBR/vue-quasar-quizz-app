<template>
  <div :class="position">
    <div class="row text-h6  text-white">
      <div class="col text-right q-mr-sm">
        <img
          style="width:36px"
          src="~assets/wings.svg"
          alt=""
        >
      </div>
      <div class="col-auto">

        {{ getUsuario.nome }}

      </div>
      <div class="col text-left">
        <q-icon
          size="22px"
          @click="toggleMenu"
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
import { mapGetters } from 'vuex'
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
    ...mapGetters(['getUsuario']),
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
