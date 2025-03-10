<template>
  <div class="flex-grow">
    <h2>Template Refs</h2>
    <input ref="input" />
    <button @click="focusInput">Reset & Focus Input</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref(null)

const focusInput = () => {
  input.value.value = 'reset'
  input.value.focus()
}
</script>
