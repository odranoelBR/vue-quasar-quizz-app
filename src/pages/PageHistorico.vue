<template>
  <div
    class="q-mt-sm"
    id="home"
  >
    Historico
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters('questionario', ['getAnswers'])
  },
  methods: {
    choose (name) {
      this.setName(name)
    }
  }

}
</script>
<style scoped>
#home .q-btn {
  padding: 4px 4px;
  min-width: 96px;
  min-height: 66px;
  font-size: 15px;
}
</style>
