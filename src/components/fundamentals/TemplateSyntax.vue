<template>
  <div>
    <h2>Template Syntax</h2>
    <!-- interpolation -->
    <p>Message: {{ msg }}</p>

    <!-- binding -->
    <input v-bind:type="inputType" :value="msg" />

    <!-- expressions -->
    <p>Number: {{ number }}</p>
    <p>Number * 2: {{ number * 2 }}</p>
    <p>Number * 3: {{ tripleNumber(number) }}</p>

    <!-- conditional rendering -->
    <p v-if="number > 10">Number is greater than 10</p>
    <p v-else-if="number === 10">Number is 10</p>
    <p v-else>Number is less than 10</p>

    <p v-if="number > 100">v-if</p>
    <p v-show="number > 100">v-show</p>

    <!-- list rendering -->
    <ul>
      <li v-for="n in numbers" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script setup>
const msg = 'Hello World'
const inputType = 'text'
const number = 5
const numbers = [1, 2, 3, 4, 5]

function tripleNumber(n) {
  return n * 3
}
</script>
