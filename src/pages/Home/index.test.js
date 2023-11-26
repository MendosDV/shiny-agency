import { sum } from './'

test ('Ma fonction sum', () => {
  const result = sum(2,2)
  expect(result).toBe(4)
})
