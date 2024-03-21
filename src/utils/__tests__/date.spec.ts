import { describe, it, expect } from 'vitest'
import { formatDate } from '../date'

describe('format date', () => {
  it('should format date', () => {
    const date = new Date('2022-01-01')
    expect(formatDate(date)).toBe('Jan 1 2022')
  })
})
