<template>
  <div
    class="q-mt-sm"
    id="home"
  >
    <q-list class="text-white">
      <span class="text-white text-italic">Configurações</span>
      <q-separator
        color="accent"
        style="opacity: 0.3"
        class="q-mt-xs q-mb-md"
      />

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Emitir som ao errar</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="blue"
            v-model="notif1"
            val="battery"
          />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Notificações de alarme</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-toggle
            color="green"
            v-model="notif2"
            val="friend"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>

export default {
  data: () => ({
    check1: true,
    check2: false,
    check3: false,

    notif1: true,
    notif2: true,
    notif3: false,

    volume: 6,
    brightness: 3,
    mic: 8
  }),
  methods: {
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
