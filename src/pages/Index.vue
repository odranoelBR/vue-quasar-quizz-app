<template>
  <div>
    <span class="text-white">Módulos</span>
    <q-separator
      dark
      class="q-mt-sm q-mb-md"
    />

    <div class="row">
      <q-btn
        to="questionario"
        class="fit"
        color="primary"
        label="Remuneração militar"
        @click="choose('Remuneração militar')"
        icon="money"
      />
    </div>

  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('questionario', ['setName']),
    choose (name) {
      this.setName(name)
    }
  }

}
</script>
