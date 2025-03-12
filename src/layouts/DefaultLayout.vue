<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex flex-1 container mx-auto w-screen-lg max-w-screen-lg w-full p-8">
      <RouterView />
    </main>

    <footer class="flex align-center justify-center bg-base-300 py-4">
      <a href="https://github.com/pacwoodson/vue-demo" target="_blank">Github</a>
    </footer>
  </div>
</template>
