<template>
  <Examples :examples="examples" />
</template>

<script setup>
import CountComposable from '@/components/state/CountComposable.vue'
import CountComposableComponentSource from '@/components/state/CountComposable.vue?raw'
import CountComposableSource from '@/composables/count.ts?raw'

import CountStore from '@/components/state/CountStore.vue'
import CountStoreComponentSource from '@/components/state/CountStore.vue?raw'
import CountStoreSource from '@/stores/counter.ts?raw'

import Ethereum from '@/components/state/Ethereum.vue'
import EthereumSource from '@/components/state/Ethereum.vue?raw'
import EthereumComposableSource from '@/composables/eth.ts?raw'

import UsernameStore from '@/components/state/UsernameStore.vue'
import UsernameStoreComponentSource from '@/components/state/UsernameStore.vue?raw'
import UsernameStoreSource from '@/stores/username.ts?raw'

import Examples from '@/components/Examples.vue'

const examples = [
  {
    name: 'Count Composable',
    components: [CountComposable, CountComposable],
    sources: [CountComposableComponentSource, CountComposableSource],
    sourcesNames: ['CountComposableComponent', 'CountComposable'],
  },
  {
    name: 'Count Store',
    components: [CountStore, CountStore],
    sources: [CountStoreComponentSource, CountStoreSource],
    sourcesNames: ['CountStoreComponent', 'CountStore'],
  },
  {
    name: 'Ethereum composable',
    components: [Ethereum],
    sources: [EthereumSource, EthereumComposableSource],
    sourcesNames: ['Ethereum', 'EthereumComposable'],
  },
  {
    name: 'Username store with localStorage',
    components: [UsernameStore],
    sources: [UsernameStoreComponentSource, UsernameStoreSource],
    sourcesNames: ['UsernameStoreComponent', 'UsernameStore'],
  },
]
</script>
