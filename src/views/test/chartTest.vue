<script setup lang="ts">
import Chart from 'primevue/chart';
import { ref } from 'vue';

const chartData = ref({
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: '2',
      data: [50, 20, 3, 90, 40, 30, 50],
      fill: false,
      borderColor: 'red',
      tension: 0.1
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
});
</script>

<template>
  <main>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />

    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </main>
</template>
