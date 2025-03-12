import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Slot from '@/components/fundamentals/Slot.vue'

describe('Slot', () => {
  it('renders button with green class', () => {
    const wrapper = mount(Slot, {
      props: {
        success: true,
        error: false,
      },
    })
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('btn-success')
    expect(button.classes()).not.toContain('btn-error')
  })
  it('renders button with red class', () => {
    const wrapper = mount(Slot, {
      props: {
        success: false,
        error: true,
      },
    })
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).not.toContain('btn-success')
    expect(button.classes()).toContain('btn-error')
  })
})
