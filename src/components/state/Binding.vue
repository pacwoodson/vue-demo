<template>
  <div>
    <p>Const msg: {{ constMsg }}</p>
    <div>
      <label for="constMsg">Const msg input</label>
      <input class="input" v-bind:type="constInputType" :value="constMsg" />
    </div>
    <p>Ref msg: {{ refMsg }} (length: {{ refMsgLength }})</p>
    <div>
      <label for="refMsg">Ref msg input</label>
      <input class="input" @keyup.up="refMsg += 'up'" v-model="refMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const constMsg = 'Hello World'
const constInputType = 'text'

const refMsg = ref('')
const refMsgLength = ref(0)

watch(refMsg, (newVal, oldVal) => {
  console.log('text changed', newVal, oldVal)
  refMsgLength.value = newVal.length
})
</script>
