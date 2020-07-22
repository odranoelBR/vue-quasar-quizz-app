<template>
  <div class="row q-gutter-sm">
    <div class="col">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center text-grey-8">RISAER</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-center">
          <q-knob
            show-value
            font-size="16px"
            class="text-red q-ma-md"
            v-model="risaer"
            size="90px"
            :thickness="0.23"
            color="red"
            track-color="grey-3"
          >
            {{risaer}} %
            <span class="text-caption text-weight-regular text-grey-9"> de acertos</span>
          </q-knob>
        </q-card-section>
        <q-card-section>
          <div class="row  justify-center">
            <span class="text-red text-bold">105</span> respostas
          </div>
          <div class="row  justify-center">
            <span class="text-red text-bold">90</span> acertos
          </div>
        </q-card-section>

      </q-card>
    </div>
    <div class="col">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center text-grey-8">RISAER</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-center">
          <q-knob
            show-value
            font-size="16px"
            class="text-red q-ma-md"
            v-model="risaer"
            size="90px"
            :thickness="0.23"
            color="red"
            track-color="grey-3"
          >
            {{risaer}} %
            <span class="text-caption text-weight-regular text-grey-9"> de acertos</span>
          </q-knob>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    risaer: 88
  }),
  computed: {
    ...mapGetters('questionario', ['getAnswers']),
    ...mapGetters(['getModulos']),
    respostasOrganizadas () {
      let organizadas = []
      this.getAnswers.forEach(answer => {
        let modulo = this.getModulos.find(modulo => answer.modulo.search(modulo.id))
        if (organizadas[modulo.nome]) {
          organizadas[modulo.nome].push(answer)
        } else {
          organizadas[modulo.nome] = []
        }
      })
      return organizadas
    }
  },
  methods: {
    choose (name) {
      this.setName(name)
    }
  }

}
</script>
<style scoped>
.q-card__section {
  padding: 2px;
}
</style>
