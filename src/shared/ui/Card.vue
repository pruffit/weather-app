<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="['bg-white rounded-xl shadow-md p-6', $props.class]">
    <slot />
  </div>
</template>
