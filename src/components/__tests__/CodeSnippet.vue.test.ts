import { describe, it, expect } from 'vitest'

import { mount, type ComponentMountingOptions } from '@vue/test-utils'
import CodeSnippet from '@/components/CodeSnippet.vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

function getWrapper(opts: ComponentMountingOptions<typeof CodeSnippet>) {
  return mount(CodeSnippet, {
    global: {
      plugins: [hljsVuePlugin],
    },
    ...opts,
  })
}

describe('CodeSnippet', () => {
  it('renders name div when name prop is provided', () => {
    const wrapper = getWrapper({
      props: {
        source: 'console.log("test")',
        name: 'Test Name',
      },
    })
    const nameDiv = wrapper.find('div.text-md.italic.text-end')
    expect(nameDiv.exists()).toBe(true)
    expect(nameDiv.text()).toBe('Test Name')
  })

  it('does not render name div when name prop is not provided', () => {
    const wrapper = getWrapper({
      props: {
        source: 'console.log("test")',
      },
    })
    const nameDiv = wrapper.find('div.text-md.italic.text-end')
    expect(nameDiv.exists()).toBe(false)
  })
})
