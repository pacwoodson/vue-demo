import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const isDarkMode = ref(false)

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', isDarkMode.value.toString())
  }

  function getDarkMode() {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true'
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }

  getDarkMode()

  return {
    isDarkMode,
    toggleDarkMode,
  }
})
