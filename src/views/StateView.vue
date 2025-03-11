<template>
  <Examples :examples="examples" />
</template>

<script setup>
import Count from '@/components/state/Count.vue'
import CountSource from '@/components/state/Count.vue?raw'
import CountComposableSource from '@/composables/count.ts?raw'
import Ethereum from '@/components/state/Ethereum.vue'
import EthereumSource from '@/components/state/Ethereum.vue?raw'
import EthereumComposableSource from '@/composables/eth.ts?raw'
import Examples from '@/components/Examples.vue'

const examples = [
  {
    name: 'Count',
    components: [Count, Count],
    sources: [CountSource, CountComposableSource],
    sourcesNames: ['Count', 'CountComposable'],
  },
  {
    name: 'Ethereum',
    components: [Ethereum],
    sources: [EthereumSource, EthereumComposableSource],
    sourcesNames: ['Ethereum', 'EthereumComposable'],
  },
]
</script>
