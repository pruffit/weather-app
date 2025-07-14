<script setup lang="ts">
import { computed } from 'vue';
import Card from '@shared/ui/Card.vue';
import { formatLocalTime, getWeatherIcon } from '@/shared/lib/dateUtils';
import { WeatherResponse } from '@/shared/types/weather';

const props = defineProps<{
  weatherData: WeatherResponse;
}>();

const current = computed(() => props.weatherData.current_weather);
const temperature = computed(() => `${current.value.temperature}°C`);
const time = computed(() => formatLocalTime(current.value.time));
const weatherIcon = computed(() => getWeatherIcon(current.value.weathercode));
</script>

<template>
  <Card class="bg-gradient-to-r from-blue-50 to-indigo-50">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <span class="text-5xl mr-3">{{ weatherIcon }}</span>
        <div>
          <h2 class="text-3xl font-bold">{{ temperature }}</h2>
          <p class="text-gray-600">{{ weatherData.timezone }}</p>
        </div>
      </div>
      <div class="text-right">
        <p class="text-sm text-gray-500">Updated in</p>
        <p class="font-medium">{{ time }}</p>
      </div>
    </div>
  </Card>
</template>
