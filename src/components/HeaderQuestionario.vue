<template>
  <div class="row">
    <div class="col-4">
      <q-icon
        name="mdi-arrow-left"
        color="white"
        size="26px"
        @click="goHome"
      ></q-icon>

    </div>
    <div class="col">
      <span class="text-white text-h6"> {{ getChoosedQuestionary.nome }} </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('questionario', ['getChoosedQuestionary'])
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
