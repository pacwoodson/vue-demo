<template>
  <div class="">
    <p>simple: {{ countStore.count }}</p>
    <p>double: {{ countStore.doubleCount }}</p>
    <button @click="countStore.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const countStore = useCounterStore()
</script>
