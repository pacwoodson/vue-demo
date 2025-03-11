<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="flex align-center bg-blue-100 py-4 gap-8 px-4">
    <img alt="Vue logo" class="w-8" src="@/assets/logo.svg" width="125" height="125" />
    <span class="text-2xl">Vue Demo</span>

    <nav class="flex gap-4 align-center">
      <RouterLink
        v-for="route in router.options.routes.filter((route) => !route.meta?.hide)"
        :key="route.path"
        :to="route.path"
        active-class="text-red-800"
      >
        {{ route.name }}
      </RouterLink>
    </nav>
  </header>

  <main class="flex items-center container mx-auto w-screen-lg max-w-screen-lg w-full pb-8">
    <RouterView />
  </main>

  <footer class="flex align-center justify-center bg-blue-50 py-4 gap-4">
    <a href="https://github.com/pacwoodson/vue-demo" target="_blank">Github</a>
  </footer>
</template>
