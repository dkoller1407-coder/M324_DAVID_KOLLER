import { sum } from './index.js'

test('intentional failing test: sum returns wrong value', () => {
  expect(sum(1, 2)).toBe(5) // erwartet falsch -> Test schlägt fehl
})