<template>
  <div class="w-full overflow-x-scroll max-h-screen overflow-y-scroll">
    <div v-if="name" class="text-md italic text-end pb-2 pr-2">{{ name }}</div>
    <highlightjs autodetect :code="source" class="text-sm" />
  </div>
</template>

<script setup>
defineProps({
  source: String,
  name: String,
})
</script>
