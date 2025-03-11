<template>
  <div class="flex-grow">
    <input ref="input" />
    <button @click="focusInput">Reset & Focus Input</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
const input = ref<null | Ref>(null)

const focusInput = () => {
  input.value.value = 'reset'
  input.value.focus()
}
</script>
