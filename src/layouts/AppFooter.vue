<template>
  <q-footer
    reveal
    elevated
    class="bg-secondary"
  >
    <q-tabs
      align="justify"
      v-model="tab"
      class="text-white"
      switch-indicator
      indicator-color="accent"
    >
      <q-route-tab
        name="alarms"
        icon="alarm"
        label="Histórico"
        to="historico"
        exact
      />
      <q-route-tab
        name="mails"
        icon="mail"
        label="Modulos"
        to="/"
        exact
      />
      <q-route-tab
        name="configs"
        icon="mdi-settings"
        label="Config."
        to="configuracoes"
        exact
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
