<template>
  <div class="w-full overflow-x-scroll max-h-screen overflow-y-scroll">
    <h2>Code Example</h2>
    <highlightjs langage="html" :code="source" />
  </div>
</template>

<script setup>
defineProps({
  source: {
    type: String,
    required: true,
  },
})
</script>
