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
        :label="$t('historic')"
        to="historico"
        exact
      />
      <q-route-tab
        name="mails"
        icon="mail"
        :label="$t('modules')"
        to="/"
        exact
      />
      <q-route-tab
        name="configs"
        icon="mdi-settings"
        :label="$t('config.')"
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
  })
}
</script>

<style >
</style>
