<template>
  <div
    class="q-mt-sm"
    id="home"
  >
    <div>
      <span class="text-white text-italic">Legislação Militar</span>
      <q-separator
        color="accent"
        style="opacity: 0.3"
        class="q-mt-xs q-mb-md"
      />

      <div class="row q-gutter-lg">
        <div
          class="col-3"
          v-for="(modulo, index) in modulosMilitar"
          :key="index"
        >
          <q-btn
            no-caps
            to="questionario"
            color="primary"
            @click="choose('Remuneração militar')"
          >
            <span class="text-weight-light">{{modulo.name}}</span>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="q-mt-lg">
      <span class="text-white text-italic">Legislação SVA</span>
      <q-separator
        color="accent"
        style="opacity: 0.3"
        class="q-mt-xs q-mb-md"
      />

      <div class="row q-gutter-lg">
        <div
          class="col-3"
          v-for="(modulo, index) in modulosSVA"
          :key="index"
        >
          <q-btn
            to="questionario"
            class="fit"
            color="primary"
            @click="choose('Remuneração militar')"
          >
            <span class="text-weight-light">{{modulo.name}}</span>
          </q-btn>
        </div>
      </div>
    </div>
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
