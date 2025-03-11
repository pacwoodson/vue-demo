import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsernameStore = defineStore('username', () => {
  const username = ref('')
  function setUsername(name: string) {
    username.value = name
    localStorage.setItem('username', name)
    console.log('saved username')
  }
  function getUsername() {
    console.log('get username')
    username.value = localStorage.getItem('username') || ''
  }

  getUsername()

  return { username, setUsername }
})
