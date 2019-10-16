<template>
  <div class="row">
    <div class="col-auto">
      <q-icon
        name="mdi-arrow-left"
        color="white"
        size="26px"
        @click="goHome"
      ></q-icon>

    </div>
    <div class="col text-center">
      <span class="text-white text-h6"> {{ getName }} </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('questionario', ['getName'])
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
