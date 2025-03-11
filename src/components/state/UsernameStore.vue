<template>
  <div class="">
    <p>username: {{ usernameStore.username }}</p>
    <input v-model="username" />
    <button @click="usernameStore.setUsername(username)">Set username</button>
  </div>
</template>

<script setup lang="ts">
import { useUsernameStore } from '@/stores/username'
import { ref } from 'vue'

const usernameStore = useUsernameStore()
const username = ref('')
</script>
