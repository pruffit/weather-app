<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import type { WeatherResponse } from '@/shared/types/weather';

Chart.register(...registerables);

const props = defineProps<{
  weatherData: WeatherResponse;
}>();

const chartRef = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const createChart = () => {
  if (!chartRef.value || !props.weatherData.hourly) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = chartRef.value.getContext('2d');
  if (!ctx) return;

  const hours = props.weatherData.hourly.time.slice(0, 24);
  const temperatures = props.weatherData.hourly.temperature_2m.slice(0, 24);

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hours.map((time) => new Date(time).getHours() + ':00'),
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatures,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          title: {
            display: true,
            text: 'Temperature (°C)',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Time',
          },
        },
      },
    },
  });
};

onMounted(() => {
  if (props.weatherData) {
    createChart();
  }
});

watch(
  () => props.weatherData,
  () => {
    createChart();
  },
);
</script>

<template>
  <div class="mt-6">
    <h3 class="text-lg font-semibold mb-4">Hourly forecast</h3>
    <div class="h-64">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>
