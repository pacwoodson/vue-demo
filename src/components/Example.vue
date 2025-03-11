<template>
  <div class="border-b border-gray-200 pb-4 last:border-b-0">
    <h2 class="my-4">{{ name }}</h2>
    <div class="flex flex-row gap-4">
      <div class="w-1/2">
        <component v-for="component in components" :key="component" :is="component" />
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

<script setup>
import CodeSnippet from './CodeSnippet.vue'

const props = defineProps({
  name: String,
  components: Array,
  sources: Array,
  sourcesNames: Array,
})
</script>
