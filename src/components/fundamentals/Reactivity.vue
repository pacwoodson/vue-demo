<template>
  <div>
    <h3>Bad</h3>
    <p>Bad count: {{ badCount }}</p>
    <button @click="badIncrement">Bad increment</button>

    <br /><br />

    <h3>Ref</h3>
    <p>Ref count: {{ count }}</p>
    <button @click="increment">Good increment</button>
    <button @click="count++">Good inline increment</button>
    <button @click="decrement">Good decrement</button>
    <p>Computed is pair: {{ isPair }}</p>
    <p>Not computed is pair: {{ badIsPair }}</p>

    <br /><br />

    <h3>Reactive</h3>
    <p>Reactive count: {{ reactiveObject.count }}</p>
    <button @click="incrementReactive(3)">Reactive increment</button>
    <p v-show="reactiveIsPair">Reactive is pair ! <span v-if="reactiveIsPair">Yes</span></p>

    <br /><br />

    <h3>Binding</h3>
    <input @keyup.up="text += 'up'" v-model="text" />
    <p>Text: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

let badCount = 0
const count = ref(0)
const text = ref('')

const reactiveObject = reactive({
  count: 0,
})

function badIncrement() {
  badCount++
}

function increment() {
  count.value++
}
function decrement() {
  count.value--
}

function incrementReactive(n) {
  reactiveObject.count += n
}

const badIsPair = count.value % 2 === 0
const isPair = computed(() => count.value % 2 === 0)
const reactiveIsPair = computed(() => reactiveObject.count % 2 === 0)

watch(text, (newVal, oldVal) => {
  console.log('text changed', newVal, oldVal)
  reactiveObject.count = newVal.length
})
</script>
