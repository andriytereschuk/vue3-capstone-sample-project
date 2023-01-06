import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCard from '../AppCard.vue'

describe('AppCard', () => {
  it('renders properly', () => {
    const wrapper = mount(AppCard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
