<template>
  <div>
    <h2>Passing Props</h2>
    <ClassesBinding :isPair="true" :isBig="false" />
    <ClassesBinding :isPair="false" :isBig="true" />
    <ClassesBinding :isPair="true" :isBig="true" />
  </div>
</template>

<script setup>
import ClassesBinding from './ClassesBinding.vue'
</script>
