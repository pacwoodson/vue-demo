<script setup lang="ts">
import TemplateSyntax from '../components/fundamentals/TemplateSyntax.vue'
import TemplateSyntaxSource from '../components/fundamentals/TemplateSyntax.vue?raw'
import Reactivity from '../components/fundamentals/Reactivity.vue'
import ReactivitySource from '../components/fundamentals/Reactivity.vue?raw'
import PassingProps from '../components/fundamentals/PassingProps.vue'
import PassingPropsSource from '../components/fundamentals/PassingProps.vue?raw'
import ClassesBindingSource from '../components/fundamentals/ClassesBinding.vue?raw'
import TemplateRefs from '../components/fundamentals/TemplateRefs.vue'
import TemplateRefsSource from '../components/fundamentals/TemplateRefs.vue?raw'
import LifeCycle from '../components/fundamentals/LifeCycle.vue'
import LifeCycleSource from '../components/fundamentals/LifeCycle.vue?raw'

import CodeSnippet from '../components/CodeSnippet.vue'
</script>

<template>
  <main>
    <h1 class="my-4">Tutorial</h1>

    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <TemplateSyntax />
        </div>
        <div class="w-1/2">
          <CodeSnippet :source="TemplateSyntaxSource" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <Reactivity />
        </div>
        <div class="w-1/2">
          <CodeSnippet :source="ReactivitySource" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <Reactivity />
        </div>
        <div class="w-1/2">
          <CodeSnippet :source="ReactivitySource" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <PassingProps />
        </div>
        <div class="flex flex-col gap-4 w-1/2">
          <CodeSnippet :source="PassingPropsSource" />
          <CodeSnippet :source="ClassesBindingSource" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <TemplateRefs />
        </div>
        <div class="w-1/2">
          <CodeSnippet :source="TemplateRefsSource" />
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="w-1/2">
          <LifeCycle />
        </div>
        <div class="w-1/2">
          <CodeSnippet :source="LifeCycleSource" />
        </div>
      </div>
    </div>
  </main>
</template>
