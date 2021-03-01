<template>
  <div>
    <q-card id="card-login">
      <q-card-section>
        <div class="text-h6 text-grey-6 text-center">
          2004 to 2019
        </div>
      </q-card-section>
      <q-card-section style="padding: 8px">
        <canvas
          id="myChart"
          height="600"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import Chart from 'chart.js'
import { mapFields } from 'vuex-map-fields'
export default {
  mounted () {
    let element = document.getElementById('myChart').getContext('2d')
    let data = {
      labels: Object.keys(this.now),
      datasets: [{
        label: this.$t('messages.parcentOfQuestions'),
        data: Object.values(this.now),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(135, 159, 64, 0.2)',
          'rgba(135, 159, 64, 0.2)',
          'rgba(235, 155, 164, 0.2)',
          'rgba(235, 155, 164, 0.2)',
          'rgba(235, 155, 164, 0.2)',
          'rgba(5, 15, 254, 0.2)',
          'rgba(5, 15, 254, 0.2)',
          'rgba(5, 15, 254, 0.2)',
          'rgba(55, 55, 54, 0.3)',
          'rgba(55, 55, 54, 0.3)',
          'rgba(55, 55, 54, 0.3)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(135, 159, 64, 1)',
          'rgba(135, 159, 64, 1)',
          'rgba(235, 155, 164, 1)',
          'rgba(235, 155, 164, 1)',
          'rgba(235, 155, 164, 1)',
          'rgba(5, 15, 254, 1)',
          'rgba(5, 15, 254, 1)',
          'rgba(5, 15, 254, 1)',
          'rgba(55, 55, 54, 1)',
          'rgba(55, 55, 54, 1)',
          'rgba(55, 55, 54, 1)'
        ],
        borderWidth: 1
      }]
    }
    // eslint-disable-next-line no-new
    new Chart(element, {
      type: 'horizontalBar',
      data: data,
      options: {
      }
    })
  },
  computed: {
    ...mapFields('statistics', ['now'])
  }
}
</script>
<style scoped>
</style>
