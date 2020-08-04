<template>
  <div>
    <span class="text-white text-italic">Preparar questionário</span>
    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <q-list class="text-white">
      <q-item>
        <div class="row items-center">
          <div class="col-9">
            <q-item-section>
              <q-item-label>Quantidade de questões</q-item-label>
            </q-item-section>
          </div>
          <div class="col">
            <q-item-section>
              <q-input
                dark
                filled
                dense
                mask="##"
                v-model.number="qtdQuestoes"
              />
            </q-item-section>
          </div>
        </div>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Nível</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-btn-toggle
            dark
            v-model="nivel"
            toggle-color="green"
            :options="tipos"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Repetir questões ?</q-item-label>
        </q-item-section>
        <q-item-section
          side
          top
        >
          <q-btn-toggle
            dark
            v-model="repetirQuestoes"
            toggle-color="green"
            :options="simNao"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  created () {
    this.resetState()
  },
  data: () => ({
    tipos: [
      { label: 'Básico', value: 1 },
      { label: 'Avançado', value: 2 }
    ],
    simNao: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false }
    ]
  }),
  computed: {
    ...mapFields('questionario', ['cronometro', 'correcaoFinal', 'qtdQuestoes', 'nivel', 'repetirQuestoes']
      .map(field => `configQuestionary.${field}`))
  },
  methods: {
    ...mapActions('questionario', ['resetState'])
  }
}
</script>
