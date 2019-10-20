<template>
  <div>
    <span class="text-white text-italic">Documentos relativos</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <div class="q-pb-lg">
      <q-btn
        class="fit"
        color="primary"
      > Referência</q-btn>

    </div>
    <span class="text-white text-italic">Preparar questionario</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <q-list class="text-white">

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Cronometro ?</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="green"
            v-model="configs.cronometro"
            val="battery"
          />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Correção somente no final ?</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-toggle
            color="green"
            v-model="configs.correcaoFinal"
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
    configs: {
      cronometro: true,
      correcaoFinal: false

    }
  })
}
</script>
