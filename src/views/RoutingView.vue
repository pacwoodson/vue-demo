<template>
  <Examples :examples="examples" />
</template>

<script setup>
import RouterSource from '@/router/index.ts?raw'
import LayoutSource from '@/layouts/DefaultLayout.vue?raw'
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
