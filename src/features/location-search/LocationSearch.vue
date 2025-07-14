<script setup lang="ts">
import { ref } from 'vue';
import { searchLocations } from '@/shared/api/weatherApi';
import type { Location } from '@/shared/types/weather';
import Button from '@/shared/ui/Button.vue';

const searchQuery = ref('');
const searchResults = ref<Location[]>([]);
const isLoading = ref(false);

const emit = defineEmits<{
  (e: 'location-selected', location: Location): void;
}>();

const handleSearch = async () => {
  if (searchQuery.value.length < 3) return;

  isLoading.value = true;
  searchResults.value = await searchLocations(searchQuery.value);
  isLoading.value = false;
};

const selectLocation = (location: Location) => {
  emit('location-selected', location);
  searchResults.value = [];
};
</script>

<template>
  <div class="relative">
    <div class="flex gap-2">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="City search..."
        class="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <Button @click="handleSearch" :disabled="isLoading">
        {{ isLoading ? 'Search...' : 'Search' }}
      </Button>
    </div>

    <ul
      v-if="searchResults.length"
      class="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg"
    >
      <li
        v-for="location in searchResults"
        :key="location.id"
        @click="selectLocation(location)"
        class="p-3 cursor-pointer hover:bg-gray-100"
      >
        {{ location.name }}, {{ location.country }}
      </li>
    </ul>
  </div>
</template>
