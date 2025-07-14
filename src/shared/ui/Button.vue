<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'bg-blue-600 hover:bg-blue-700 text-white',
    ]"
  >
    <slot />
  </button>
</template>
