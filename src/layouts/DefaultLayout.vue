<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUIStore } from '@/stores/ui'

const router = useRouter()
const routes = router.getRoutes().filter((route) => !route.meta?.hide)
const uiStore = useUIStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex align-center bg-blue-100 dark:bg-gray-900 py-4 gap-8 px-4">
      <img alt="Vue logo" class="w-8" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="text-2xl">Vue Demo</h1>

      <nav class="flex flex-1 gap-4 align-center">
        <RouterLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          active-class="text-red-800 dark:text-red-400"
        >
          {{ route.name }}
        </RouterLink>
      </nav>

      <div class="flex gap-4 align-center">
        <button @click="uiStore.toggleDarkMode">
          {{ uiStore.isDarkMode ? 'Dark' : 'Light' }}
        </button>
      </div>
    </header>

    <main class="flex flex-1 container mx-auto w-screen-lg max-w-screen-lg w-full pb-8">
      <RouterView />
    </main>

    <footer class="flex align-center justify-center bg-blue-100 dark:bg-gray-900 py-4">
      <a href="https://github.com/pacwoodson/vue-demo" target="_blank">Github</a>
    </footer>
  </div>
</template>
