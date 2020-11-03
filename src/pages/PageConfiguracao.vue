<template>
  <div class="q-mt-sm text-white">
    <span class="text-white text-italic">Configurações</span>

    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        Emitir som ao errar ?
      </div>
    </div>

    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="primary"
          @click="somErro = false"
          :outline="somErro"
        >
          Não
        </q-btn>
      </div>
      <div class="col ">
        <arrow-animated :toggle="!somErro" />
      </div>
      <div class="col">
        <q-btn
          class="fit"
          color="accent"
          @click="somErro = true"
          :outline="!somErro"
        >
          Sim
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        Qual sua mão principal ?
      </div>
    </div>

    <div class="row q-pb-xl items-center justitfy-center">
      <div
        class="col text-center"
        @click="maoDireita = false"
      >
        <svg-left-hand :choosed-hand="!maoDireita" />
      </div>
      <div class="col text-center">
        <arrow-animated :toggle="!maoDireita" />
      </div>
      <div
        class="col text-center"
        @click="maoDireita = true"
      >
        <svg-right-hand :choosed-hand="maoDireita" />
      </div>
    </div>
  </div>
</template>
<script>
import ArrowAnimated from 'components/ArrowAnimated.vue'
import SvgLeftHand from 'components/SvgLeftHand.vue'
import SvgRightHand from 'components/SvgRightHand.vue'

export default {
  components: {
    ArrowAnimated, SvgLeftHand, SvgRightHand
  },
  data: () => ({
    somErro: false,
    maoDireita: true
  }),
  methods: {
  }

}
</script>
<style scoped>
</style>
