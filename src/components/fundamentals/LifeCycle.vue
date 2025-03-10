<template>
  <h2>Life Cycle</h2>
  <p>Loaded: {{ loaded }}</p>
</template>

<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, ref } from 'vue'

const loaded = ref(false)

onMounted(() => {
  console.log('mounted')
  loaded.value = true
})

onBeforeMount(() => {
  console.log('beforeMount')
})

onBeforeUnmount(() => {
  console.log('beforeUnmount')
})

onUnmounted(() => {
  console.log('unmounted')
})
</script>
