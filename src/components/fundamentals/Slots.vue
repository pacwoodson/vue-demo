<template>
  <div>
    <Slot :success="true">Valider</Slot>
    <Slot :error="true">Annuler</Slot>
  </div>
</template>

<script setup lang="ts">
import Slot from './Slot.vue'
</script>
