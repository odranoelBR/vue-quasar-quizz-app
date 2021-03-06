<template>
  <q-dialog
    id="dialog-tutorial"
    v-model="dialog"
    full-width
    full-height
  >
    <q-card>
      <q-item>
        <q-item-section>
          <q-item-label
            caption
            v-for="(item, index) in new Array(3)"
            :key="index"
          >
            <q-skeleton
              type="text"
              animation="wave"
            />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section class="no-padding q-ml-md">
        <q-skeleton
          type="text"
          animation="wave"
          width="10%"
        />
      </q-card-section>

      <q-card-section>
        <q-skeleton
          v-for="(item, index) in new Array(4)"
          :key="index"
          type="QChip"
          width="100%"
          class="q-mb-sm"
          animation="wave"
        />
      </q-card-section>
      <q-card-section>
        <transition
          :duration="{ enter: 500000, leave: 500000 }"
          mode="out-in"
          enter-active-class="animated slideOutLeft"
        >
          <div
            class="row text-right"
            v-if="show"
          >
            <div class="col">
              <img
                src="statics/drag.svg"
                id="drag-hand"
              >
            </div>
          </div>
        </transition>
        <span
          class="text-primary"
          style="font-size: 17px"
        >
          {{ $t('messages.swipTip') }}
        </span>
      </q-card-section>

      <q-card-actions
        style="margin-top:12vw"
        class="text-weight-thin"
      >
        <span>{{ $t('messages.swipTips') }} </span>
        <span class="text-bold q-pl-xs"> {{ $t(words.configurations) }}!</span>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  created () {
    setInterval(() => {
      this.show = !this.show
    }, 1000)
  },
  data: () => ({
    dialog: true,
    show: false
  })
}
</script>
<style >
#dialog-tutorial .fixed-full {
  top: 67px;
  right: 0;
  bottom: 76px;
  left: 0;
}
</style>
