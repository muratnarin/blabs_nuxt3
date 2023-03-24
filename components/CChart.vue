<template>
  <Line
    :data="chartData"
    :options="props.chartOptions"
  />
</template>

<script setup>
import {defineProps, ref} from 'vue'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  chartOptions: {
    type: Object,
    required: true,
  },
})

const dataLabels = ref(props.chartData.labels)
const dataValues = ref(props.chartData.datasets[0].data)

const chartData = {
  labels: dataLabels.value,
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: dataValues.value
    }
  ]
}

</script>