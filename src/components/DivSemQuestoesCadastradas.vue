<template>
  <div>
    <q-separator
      dark
      class="q-mb-md"
    />
    <q-banner class="bg-grey-5">
      <template v-slot:avatar>
        <q-icon
          name="mdi-database-remove"
          color="primary"
        />
      </template>
      Você respondeu todas as questões /
      Sem Questões Cadastradas desta disciplina
    </q-banner>
    <q-banner class="bg-blue-grey-1 q-mt-md">
      <template v-slot:avatar>
        <q-icon
          name="mdi-information-outline"
          color="accent"
        />
      </template>
      Você pode apagar as respostas salvas das questões!
      <q-btn
        color="accent"
        v-close-popup
        @click="$router.push(`modulo/${choosedQuestionary.id}`)"
      >
        Novo caderno
      </q-btn>
    </q-banner>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('questionario', ['choosedQuestionary'])
  }
}
</script>
