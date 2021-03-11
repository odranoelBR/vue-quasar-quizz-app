<template>
  <q-menu
    fit
    v-model="opened"
    transition-show="jump-down"
    transition-hide="jump-up"
    @before-hide="beforeHide"
  >
    <div class="q-pa-sm">
      <q-input
        v-model="model"
        autofocus
      />
    </div>
  </q-menu>
</template>
<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    opened: false,
    model: ''
  }),
  watch: {
    showing (newValue) {
      this.opened = newValue
    }
  },
  methods: {
    beforeHide () {
      this.$emit('hide')
    }
  }
}
</script>
