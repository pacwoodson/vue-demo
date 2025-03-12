<template>
  <Examples :examples="examples" />
</template>

<script setup lang="ts">
import TemplateSyntax from '@/components/fundamentals/TemplateSyntax.vue'
import TemplateSyntaxSource from '@/components/fundamentals/TemplateSyntax.vue?raw'
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
    description:
      "Un composant est composé d'une partie template et une partie script. <br/> La partie template est la partie HTML qui sera affichée. <br/> La partie script est la partie JavaScript qui contient la logique du composant.",
    components: [TemplateSyntax],
    sources: [TemplateSyntaxSource],
  },
  {
    name: 'Components and slots',
    description:
      "Les composants sont des blocks d'interface réutilisables. On aura un fichier par composant, et celui-ci sera nommé en PascalCase. <br/>Afin d'utiliser un composant, on doit d'abord l'importer.  <br/ Les slots sont des emplacements dans un composant qui peuvent etre remplis par le parent avec du contenu. <br/> Les slots permettent d'injecter du contenu a l'interieur d'un composant",
    components: [Slots],
    sources: [SlotsSource, SlotSource],
    sourcesNames: ['Slots', 'Slot'],
  },
  {
    name: 'Passing Props',
    description:
      'Les props sont des variables passées à un composant. Elles sont typées et peuvent être optionnelles ou obligatoires. <br/> Les props sont passées à un composant dans le template, et doivent être definies avec <code>defineProps</code>',
    components: [PassingProps],
    sources: [PassingPropsSource, ClassesBindingSource],
    sourcesNames: ['PassingProps', 'ClassesBinding'],
  },
  {
    name: 'Template Refs',
    description:
      'Les template refs sont des références à des éléments du DOM. Elles sont utilisées pour accéder à des éléments du DOM et les manipuler. <br/> Les template refs sont déclarés avec <code>ref</code> dans la partie script.',
    components: [TemplateRefs],
    sources: [TemplateRefsSource],
  },
  {
    name: 'LifeCycle',
    description:
      "Le cycle de vie d'un composant est le processus par lequel un composant est créé, mis à jour et détruit. <br/> Les hooks de cycle de vie sont des fonctions qui sont appelées à des moments critiques du cycle de vie d'un composant.",
    components: [LifeCycle],
    sources: [LifeCycleSource],
  },
]
</script>
