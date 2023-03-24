<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card density="compact">
        <v-card-title>
          <v-btn
            :v-text="'Push Data'"
            @click="pushData"
          />
        </v-card-title>
        <v-card-text>
          <c-chart
            :chart-data="chartData"
            :chart-options="chartOptions"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>


definePageMeta({
  layout: 'authenticated',
})

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

const pushData = () => {
  chartData.datasets[0].data.push(100)
  chartData.labels.push('August' + chartData.datasets[0].data.length)
}

</script>

<style scoped>

</style>