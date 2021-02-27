<template>
  <q-menu
    fit
    v-model="opened"
    transition-show="jump-down"
    transition-hide="jump-up"
    @before-hide="beforeHide"
  >
    <q-list
      class="bg-white rounded-borders "
      padding
    >
      <q-item-label header>
        {{ $t('words.menu') }}
      </q-item-label>

      <q-item
        clickable
        v-ripple
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="leaderboard" />
        </q-item-section>

        <q-item-section @click="goStatistics">
          {{ $t('words.statistics') }}
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="mdi-account-circle-outline" />
        </q-item-section>

        <q-item-section @click="goMyAccount">
          {{ $t('messages.myAcc') }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    opened: false
  }),
  watch: {
    showing (newValue) {
      this.opened = newValue
    }
  },
  methods: {
    beforeHide () {
      this.$emit('hide')
    },
    goMyAccount () {
      this.$router.push('minha-conta')
    },
    goStatistics () {
      this.$router.push('estatistica')
    }
  }
}
</script>
