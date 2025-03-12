<template>
  <div class="flex flex-col gap-4">
    <div :class="isPair ? 'bg-red-500' : 'bg-blue-500'">
      <p>Is pair: {{ isPair }} Is big: {{ isBig }}</p>
    </div>

    <div
      :class="{
        'bg-red-500': isPair,
        'bg-blue-500': !isPair,
        'text-2xl': isBig,
        'text-sm': !isBig,
      }"
    >
      <p>Is pair: {{ isPair }} Is big: {{ isBig }}</p>
    </div>

    <div :class="[isPair ? 'bg-red-500' : 'bg-blue-500', isBig ? 'text-2xl' : 'text-sm']">
      <p>Is pair: {{ isPair }} Is big: {{ isBig }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isPair: {
    type: Boolean,
    default: false,
  },
  isBig: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.bg-red-500 {
  background-color: rgb(254, 232, 232);
}
.bg-blue-500 {
  background-color: rgb(213, 213, 251);
}
.text-2xl {
  font-size: 2rem;
}
.text-sm {
  font-size: 0.5rem;
}
</style>
