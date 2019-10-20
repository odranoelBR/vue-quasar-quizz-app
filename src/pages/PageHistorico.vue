<template>
  <div
    class="q-mt-sm"
    id="home"
  >
    Historico
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    modulosMilitar: [
      { name: 'RDAER', icon: '' },
      { name: 'RCONT', icon: '' },
      { name: 'RISAER', icon: '' },
      { name: 'SINDICÂNCIA', icon: '' }
    ],
    modulosSVA: [
      { name: '35-1', icon: '' },
      { name: 'FCA', icon: '' },
      { name: 'ICAER', icon: '' },
      { name: 'LICITAÇÃO', icon: '' },
      { name: 'REMUN.', icon: '' }
    ]
  }),
  methods: {
    ...mapMutations('questionario', ['setName']),
    choose (name) {
      this.setName(name)
    }
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
