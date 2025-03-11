<template>
  <div class="border-b border-gray-200 pb-4 last:border-b-0">
    <h2 class="my-4">{{ name }}</h2>
    <div class="flex flex-row gap-4">
      <div class="w-1/2">
        <div
          class="border border-gray-300 rounded-md p-2 m-2"
          v-for="component in components"
          :key="component"
        >
          <component :is="component" />
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex flex-col gap-4">
          <CodeSnippet
            v-for="(source, index) in sources"
            :key="source"
            :source="source"
            :name="sourcesNames && sourcesNames[index]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeSnippet from './CodeSnippet.vue'

defineProps({
  name: String,
  components: Array,
  sources: Array,
  sourcesNames: Array,
})
</script>
