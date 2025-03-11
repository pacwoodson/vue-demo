<template>
  <div>
    <Slot :success="true">Valider</Slot>
    <Slot :error="true">Annuler</Slot>
  </div>
</template>

<script setup>
import Slot from './Slot.vue'
</script>
