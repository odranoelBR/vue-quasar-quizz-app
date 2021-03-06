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
      {{ $t('messages.emptyQuestions') }}
    </q-banner>
    <q-banner class="bg-blue-grey-1 q-mt-md">
      <template v-slot:avatar>
        <q-icon
          name="mdi-information-outline"
          color="accent"
        />
      </template>
      {{ $t('messages.canErase') }}
      <q-btn
        color="accent"
        v-close-popup
        @click="$router.push(`modulo/${choosedQuestionary.id}`)"
      >
        {{ $t('messages.newQuestion') }}
      </q-btn>
    </q-banner>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('questionary', ['choosedQuestionary'])
  }
}
</script>
