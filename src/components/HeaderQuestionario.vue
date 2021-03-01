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
      <span :class="className">{{ nivelWrited }}</span>
    </div>
  </div>
</template>
<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('questionary', ['choosedQuestionary.nome', 'configQuestionary.level']),
    nivelWrited () {
      return this.level === 1 ? 'Básico' : 'Avançado'
    },
    className () {
      return this.level === 1 ? 'text-blue-4' : 'text-accent'
    }

  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
