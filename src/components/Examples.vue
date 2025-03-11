<template>
  <div class="flex flex-col gap-4 container max-w-full">
    <Example
      v-for="(example, index) in examples"
      :key="index"
      :name="example.name"
      :components="example.components"
      :sources="example.sources"
      :sources-names="example.sourcesNames"
    />
  </div>
</template>

<script setup>
import Example from './Example.vue'
const props = defineProps({
  examples: Array,
})
</script>
