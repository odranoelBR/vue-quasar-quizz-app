<template>
  <div class="row q-gutter-sm">
    <div
      class="col"
      v-for="(modulo, index) in modulosComRespostas"
      :key="index"
    >
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center text-grey-8">{{modulo.nome}}</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-center">
          <q-knob
            show-value
            font-size="16px"
            class="text-red q-ma-md"
            :value="getPorcentagemAcertos(modulo.answers)"
            size="110px"
            :thickness="0.23"
            disable
            color="red"
            track-color="grey-3"
          >
            {{getPorcentagemAcertos(modulo.answers)}} %
            <span class="text-caption text-weight-regular text-grey-9"> de acertos</span>
          </q-knob>
        </q-card-section>
        <q-card-section>
          <div class="row  justify-center">
            <span class="text-red text-bold">{{modulo.answers.length}} </span> respostas
          </div>
          <div class="row  justify-center">
            <span class="text-red text-bold">{{filterAcertos(modulo.answers)}} </span> acertos
          </div>
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
    modulosComRespostas () {
      return this.getModulos.map(modulo => ({
        nome: modulo.nome,
        answers: this.getAnswers.filter(answer => answer.modulo.includes(modulo.id))
      }))
        .filter(modulo => modulo.answers.length > 0)
    }

  },
  methods: {
    choose (name) {
      this.setName(name)
    },
    filterAcertos (answers) {
      return answers.filter(modulo => modulo.correta).length
    },
    getPorcentagemAcertos (answers) {
      return parseFloat(((this.filterAcertos(answers) / answers.length) * 100).toFixed(2))
    }
  }

}
</script>
<style scoped>
.q-card__section {
  padding: 2px;
}
</style>
