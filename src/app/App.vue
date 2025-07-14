<script setup lang="ts">
import { ref } from 'vue';

import type { Location, WeatherResponse } from '@/shared/types/weather';
import LocationSearch from '@features/location-search/LocationSearch.vue';
import CurrentWeather from '@features/weather-display/CurrentWeather.vue';
import DailyForecast from '@features/weather-display/DailyForecast.vue';
import WeatherChart from '@features/weather-display/WeatherChart.vue';
import Loader from '@shared/ui/Loader.vue';
import { getWeatherForecast } from '@/shared/api/weatherApi';

const weatherData = ref<WeatherResponse | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);

const handleLocationSelected = async (location: Location) => {
  try {
    isLoading.value = true;
    error.value = null;
    weatherData.value = await getWeatherForecast(location.latitude, location.longitude);
  } catch (err) {
    error.value = 'Data loading error';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <header class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Weather Forecast</h1>
        <p class="text-gray-600">Search for locations to view the current weather and forecast</p>
      </header>

      <main>
        <div class="mb-6">
          <LocationSearch @location-selected="handleLocationSelected" />
        </div>

        <Loader v-if="isLoading" class="my-12" />

        <div v-if="error" class="p-4 bg-red-100 text-red-700 rounded-lg">
          {{ error }}
        </div>

        <div v-if="weatherData">
          <CurrentWeather :weather-data="weatherData" class="mb-6" />
          <WeatherChart :weather-data="weatherData" class="mb-6" />
          <DailyForecast :daily="weatherData.daily" />
        </div>

        <div v-else-if="!isLoading" class="text-center py-12 text-gray-500">
          <p>Start searching for a city to display the weather</p>
        </div>
      </main>

      <footer class="mt-12 text-center text-gray-500 text-sm">
        <p>Data provided by Open-Meteo.com</p>
      </footer>
    </div>
  </div>
</template>
