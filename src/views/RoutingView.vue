<template>
  <Examples :examples="examples" />
</template>

<script setup lang="ts">
import RouterSource from '@/router/index.ts?raw' with { type: 'text' }
import LayoutSource from '@/layouts/DefaultLayout.vue?raw' with { type: 'text' }
import Examples from '@/components/Examples.vue'

const examples = [
  {
    name: 'Routing',
    components: [],
    sources: [RouterSource, LayoutSource],
    sourcesNames: ['Router', 'Layout'],
  },
]
</script>
