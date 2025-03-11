import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CodeSnippet from '@/components/CodeSnippet.vue'

describe('CodeSnippet', () => {
  it('renders properly', () => {
    const wrapper = mount(CodeSnippet, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
