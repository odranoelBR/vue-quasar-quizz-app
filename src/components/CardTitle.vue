<template>
  <q-card>
    <q-toolbar
      class="bg-primary"
      style="height: 57px"
    >
      <q-ribbon
        position="left"
        color="#ffffff"
        background-color="#737687"
        leaf-position="bottom"
        decoration="rounded-out"
        leaf-color="#A7AABD"
      >
        <slot name="title" />
      </q-ribbon>

      <q-separator class="bg-primary" />

      <slot name="right" />
    </q-toolbar>
    <slot name="extra" />
  </q-card>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style >
.qribbon__horizontal--left {
  padding: 2px 12px;
}
</style>
