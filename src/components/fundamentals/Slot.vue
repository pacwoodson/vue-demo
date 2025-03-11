<template>
  <button
    :class="{
      'bg-green-500': success,
      'bg-red-500': error,
    }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  success: Boolean,
  error: Boolean,
})
</script>
