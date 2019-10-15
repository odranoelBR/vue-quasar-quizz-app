<template>
  <span>{{ time }}</span>
</template>

<script>
export default {
  props: {
    running: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    time: '00:00:000',
    timeBegan: new Date(),
    timeStopped: null,
    stoppedDuration: 0,
    started: null
  }),
  watch: {
    running (newValue) {
      if (newValue) {
        this.start()
        return
      }
      this.stop()
    }
  },
  methods: {
    start () {
      if (this.timeBegan === null) {
        this.reset()
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += (new Date() - this.timeStopped)
      }

      this.started = setInterval(this.clockRunning, 10)
      this.running = true
    },
    stop () {
      this.running = false
      this.timeStopped = new Date()
      clearInterval(this.started)
    },

    reset () {
      this.running = false
      clearInterval(this.started)
      this.stoppedDuration = 0
      this.timeBegan = null
      this.timeStopped = null
      this.time = '00:00:000'
    },

    clockRunning () {
      var currentTime = new Date()
      var timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
      var min = timeElapsed.getUTCMinutes()
      var sec = timeElapsed.getUTCSeconds()
      var ms = timeElapsed.getUTCMilliseconds()

      this.time =
      this.zeroPrefix(min, 2) + ':' +
      this.zeroPrefix(sec, 2) + ':' +
      this.zeroPrefix(ms, 3)
    },
    zeroPrefix (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');
  span {
    font-size: 18px;
    font-family: 'Share Tech Mono', sans-serif;
  }
</style>
