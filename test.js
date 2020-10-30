// import {isFizzy, isBuzzy, fizzBuzz} from "./fizzbuzz"
const fb = require("./fizzbuzz")

test('Sanity check', () => {
    expect(2+2).toBe(5)
  })

test('fb.isFizzy', () => {
  expect(fb.isFizzy(12)).toBe(true)
  expect(fb.isFizzy(9)).toBe(true)
  expect(fb.isFizzy(6)).toBe(true)
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(0)).toBe(true)
})

