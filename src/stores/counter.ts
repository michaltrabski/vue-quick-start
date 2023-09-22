import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function multiplyBy(multiplier = 1) {
    count.value += multiplier
  }

  return { count, doubleCount, increment, multiplyBy }
})
