<template>
  <header class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li
            class=""
            @click="(e: Event) => (e.target as HTMLElement)?.blur()"
            v-for="route in routes"
            :key="route.path"
          >
            <RouterLink :to="route.path" active-class="bg-neutral text-neutral-content">
              {{ route.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <img alt="Vue logo" class="w-8 mx-2" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="text-2xl">Vue Demo</h1>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="route in routes" :key="route.path">
          <RouterLink as="li" :to="route.path" active-class="bg-neutral text-neutral-content">
            {{ route.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <DarkModeSwitch />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
const router = useRouter()
const routes = router.getRoutes().filter((route) => !route.meta?.hide)
</script>
