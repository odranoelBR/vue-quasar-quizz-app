<template>
  <div>
    <q-separator
      dark
      class="q-mb-md"
    />
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon
          name="mdi-database-remove"
          color="primary"
        />
      </template>
      Sem Questões Cadastradas desta disciplina
    </q-banner>
    <span
      class="text-white texto-courier"
      style="font-size: 11pt"
    />
  </div>
</template>

<script>
export default {
}
</script>
