<template>
  <div class="q-mt-sm text-white">
    <span class="text-white text-italic">{{ $t('words.configurations') }}</span>

    <q-separator
      color="accent"
      style="opacity: 0.3"
      class="q-mt-xs q-mb-md"
    />

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        {{ $t('messages.soundOnError') }}
      </div>
    </div>

    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="primary"
          @click="update({errorSound: false})"
          :outline="errorSound"
        >
          {{ $t('words.no') }}
        </q-btn>
      </div>
      <div class="col ">
        <arrow-animated :toggle="!errorSound" />
      </div>
      <div class="col">
        <q-btn
          class="fit"
          color="accent"
          @click="update({errorSound: true})"
          :outline="!errorSound"
        >
          {{ $t('words.yes') }}
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        {{ $t('messages.tipsTutorials') }}
      </div>
    </div>

    <div class="row q-pb-xl items-center">
      <div class="col">
        <q-btn
          class="fit"
          color="primary"
          @click="update({tutorial: false})"
          :outline="tutorial"
        >
          {{ $t('words.no') }}
        </q-btn>
      </div>
      <div class="col ">
        <arrow-animated :toggle="!tutorial" />
      </div>
      <div class="col">
        <q-btn
          class="fit"
          color="accent"
          @click="update({tutorial: true})"
          :outline="!tutorial"
        >
          {{ $t('words.yes') }}
        </q-btn>
      </div>
    </div>

    <div class="row q-pb-xs text-weight-thin">
      <div class="col letter-space">
        {{ $t('messages.whatHand') }}
      </div>
    </div>

    <div class="row q-pb-xl items-center justitfy-center">
      <div
        class="col text-center"
        @click="update({rightHand: false})"
      >
        <svg-left-hand :choosed-hand="!rightHand" />
      </div>
      <div class="col text-center">
        <arrow-animated :toggle="!rightHand" />
      </div>
      <div
        class="col text-center"
        @click="update({rightHand: true})"
      >
        <svg-right-hand :choosed-hand="rightHand" />
      </div>
    </div>
  </div>
</template>
<script>
import ArrowAnimated from 'components/ArrowAnimated.vue'
import SvgLeftHand from 'components/SvgLeftHand.vue'
import SvgRightHand from 'components/SvgRightHand.vue'
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    ArrowAnimated, SvgLeftHand, SvgRightHand
  },
  computed: {
    ...mapFields(['user.errorSound', 'user.rightHand', 'user.tutorial'])
  },
  methods: {
    ...mapActions(['updateUser']),
    update (data) {
      this.updateUser(data)
    }
  }

}
</script>
<style scoped>
</style>
