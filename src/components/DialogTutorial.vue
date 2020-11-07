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
        Arraste o dedo na tela para passar questões.
      </q-card-section>
      <q-card-section>
        Você pode desligar este dica nas configurações!
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  created () {
    setInterval(() => {
      this.show = !this.show
    }, 1000)

    setInterval(() => {
      this.dialog = false
    }, 5000)
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
#drag-hand {
}
</style>
