<template>
  <Examples :examples="examples" />
</template>

<script setup lang="ts">
import TemplateSyntax from '@/components/fundamentals/TemplateSyntax.vue'
import TemplateSyntaxSource from '@/components/fundamentals/TemplateSyntax.vue?raw'
import Reactivity from '@/components/fundamentals/Reactivity.vue'
import ReactivitySource from '@/components/fundamentals/Reactivity.vue?raw'
import PassingProps from '@/components/fundamentals/PassingProps.vue'
import PassingPropsSource from '@/components/fundamentals/PassingProps.vue?raw'
import ClassesBindingSource from '@/components/fundamentals/ClassesBinding.vue?raw'
import TemplateRefs from '@/components/fundamentals/TemplateRefs.vue'
import TemplateRefsSource from '@/components/fundamentals/TemplateRefs.vue?raw'
import LifeCycle from '@/components/fundamentals/LifeCycle.vue'
import LifeCycleSource from '@/components/fundamentals/LifeCycle.vue?raw'
import Slots from '@/components/fundamentals/Slots.vue'
import SlotsSource from '@/components/fundamentals/Slots.vue?raw'
import SlotSource from '@/components/fundamentals/Slot.vue?raw'
import Examples from '@/components/Examples.vue'
import type { ExampleProps } from '@/components/Example.vue'

const examples: Array<ExampleProps> = [
  {
    name: 'Template Syntax',
    components: [TemplateSyntax],
    sources: [TemplateSyntaxSource],
  },
  {
    name: 'Reactivity',
    components: [Reactivity],
    sources: [ReactivitySource],
  },
  {
    name: 'Passing Props',
    components: [PassingProps],
    sources: [PassingPropsSource, ClassesBindingSource],
    sourcesNames: ['PassingProps', 'ClassesBinding'],
  },
  {
    name: 'Template Refs',
    components: [TemplateRefs],
    sources: [TemplateRefsSource],
  },
  {
    name: 'LifeCycle',
    components: [LifeCycle],
    sources: [LifeCycleSource],
  },
  {
    name: 'Slots',
    components: [Slots],
    sources: [SlotsSource, SlotSource],
    sourcesNames: ['Slots', 'Slot'],
  },
]
</script>
