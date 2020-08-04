<template>
  <div class="row">
    <div class="col-4">
      <q-icon
        name="mdi-arrow-left"
        color="white"
        size="26px"
        @click="goHome"
      />
    </div>
    <div class="col">
      <span class="text-white text-h6"> {{ nome }} </span>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('questionario', ['choosedQuestionary.nome'])
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
