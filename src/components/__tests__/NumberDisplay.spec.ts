import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberDisplay from '../NumberDisplay.vue'

describe('NumberDisplay', () => {
  it('should render numbers', () => {
    const wrapper = mount(NumberDisplay, {
      props: {
        numbers: [100]
      }
    })
    const numbers = wrapper.find('[data-test="numbers"]')

    expect(numbers.exists()).toBe(true)
    expect(numbers.text()).toContain('100')
  })

  it('should render additional numbers', () => {
    const wrapper = mount(NumberDisplay, {
      props: {
        numbers: [100],
        additionalNumbers: [101]
      }
    })
    const additionalNumbers = wrapper.find('[data-test="additional-numbers"]')

    expect(additionalNumbers.exists()).toBe(true)
    expect(additionalNumbers.text()).toContain('101')
  })

  it('should render empty state', () => {
    const wrapper = mount(NumberDisplay, {
      props: {
        numbers: null,
        additionalNumbers: null
      }
    })
    const noNumbers = wrapper.find('[data-test="no-numbers"]')

    expect(noNumbers.exists()).toBe(true)
    expect(wrapper.text()).toContain('No numbers')
  })
})
