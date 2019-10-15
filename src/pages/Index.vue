<template>
  <q-page>

    <span class="text-subtitle1 text-blue-grey-3">Questão 1/20</span>

    <q-separator
      dark
      class="q-mb-md q-mt-sm"
    />

    <span class="text-h5 text-white ">
      Qual a pergunta mais interessante ?
    </span>

    <div class="row q-pt-xl">
      <q-chip
        class="full-width "
        outline
        square
        color="primary"
        text-color="white"
        :selected="perguntas.a"
        @click="toggleChoice('a')"
      >
        <q-avatar
          font-size="24px"
          icon="mdi-alpha-a"
          color="primary"
          text-color="white"
        />

        Primera resposta
      </q-chip>
    </div>
    <div>

      <q-chip
        class="full-width "
        outline
        square
        color="primary"
        text-color="white"
        :selected="perguntas.b"
        @click="toggleChoice('b')"
      >
        <q-avatar
          font-size="24px"
          icon="mdi-alpha-b"
          color="primary"
          text-color="white"
        />

        Get directions
      </q-chip>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: () => ({
    teste: '',
    perguntas: {
      a: false,
      c: false,
      d: false,
      e: false
    }
  }),
  methods: {
    toggleChoice (value) {
      this.reset()
      this.perguntas[value] = true
    },
    reset () {
      Object.keys(this.perguntas)
        .forEach(key => {
          this.perguntas[key] = false
        })
    }
  }
}
</script>
<style >
#lista-questoes .q-item {
  padding: 4px 12px;
}
.q-chip__content {
  color: white;
}
</style>
