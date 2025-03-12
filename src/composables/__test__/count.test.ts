import { test, expect } from 'vitest'

import { useCount } from '../count.js'

test('useCount', () => {
  const { count, increment } = useCount()
  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)
})
