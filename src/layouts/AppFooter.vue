<template>
  <q-footer
    reveal
    elevated
    class="bg-secondary"
  >
    <q-tabs
      align="justify"
      v-model="tab"
      class="text-white "
    >

      <q-tab
        name="alarms"
        icon="alarm"
        label="Histórico"
      >
      </q-tab>
      <q-tab
        name="mails"
        icon="mail"
        label="Modulos"
      >
      </q-tab>
      <q-tab
        name="configs"
        icon="mdi-settings"
        label="Config."
      />
    </q-tabs>

  </q-footer>
</template>

<script>
export default {
  data: () => ({
    tab: 'mails'
  }),
  computed: {
  },
  components: {
  },
  methods: {
  }
}
</script>

<style >
</style>
