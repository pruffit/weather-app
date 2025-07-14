<script setup lang="ts">
import { computed } from 'vue';
import type { DailyForecast } from '@/shared/types/weather';
import Card from '@shared/ui/Card.vue';
import { formatDailyDate, getWeatherIcon } from '@/shared/lib/dateUtils';

const props = defineProps<{
  daily: DailyForecast;
}>();

const forecastDays = computed(() => {
  return props.daily.time.map((date, index) => ({
    date,
    formattedDate: formatDailyDate(date),
    maxTemp: props.daily.temperature_2m_max[index],
    minTemp: props.daily.temperature_2m_min[index],
    weatherCode: props.daily.weathercode[index],
    icon: getWeatherIcon(props.daily.weathercode[index]),
  }));
});
</script>

<template>
  <Card>
    <h3 class="text-lg font-semibold mb-4">7-day forecast</h3>
    <div class="space-y-3">
      <div
        v-for="day in forecastDays"
        :key="day.date"
        class="flex items-center justify-between py-2 border-b border-gray-100"
      >
        <span class="font-medium w-24">{{ day.formattedDate }}</span>
        <span class="text-2xl">{{ day.icon }}</span>
        <div class="flex items-center gap-4">
          <span class="text-gray-600">min: {{ day.minTemp }}°C</span>
          <span class="font-medium w-16">max: {{ day.maxTemp }}°C</span>
        </div>
      </div>
    </div>
  </Card>
</template>
