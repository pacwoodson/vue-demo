<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useCount } from '@/composables/count'

const { count, increment } = useCount()
</script>
