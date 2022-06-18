/* global suite, test, expect */
import { isCapitalized, isCorrectDate, isCorrectMaxLength, isCorrectMinLength, isEmail, isOnlyLetters, isOnlyNumbers } from '../js/validation/form/rules-handling'

suite('rules-handling', () => {
  test('isCapitalized', () => {
    [
      {
        data: 'Aa',
        expected: true,
      },
      {
        data: 'aa',
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isCapitalized(data)).toBe(expected)
    })
  })
  test('isCorrectDate', () => {
    [
      {
        data: '2000-01-01',
        expected: true,
      },
      {
        data: '2000-01-32',
        expected: false,
      },
      {
        data: '2000-13-01',
        expected: false,
      },
      {
        data: '23456-01-01',
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isCorrectDate(data)).toBe(expected)
    })
  })
  test('isCorrectMaxLength', () => {
    [
      {
        data: ['a', 1],
        expected: true,
      },
      {
        data: ['Aa', 1],
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isCorrectMaxLength(...data)).toBe(expected)
    })
  })
  test('isCorrectMinLength', () => {
    [
      {
        data: ['a', 2],
        expected: false,
      },
      {
        data: ['Aa', 1],
        expected: true,
      },
    ].forEach(({ data, expected }) => {
      expect(isCorrectMinLength(...data)).toBe(expected)
    })
  })
  test('isOnlyLetters', () => {
    [
      {
        data: 'AaaaaaA',
        expected: true,
      },
      {
        data: 'Aa#aa',
        expected: false,
      },
      {
        data: 'aaa#a aa23a',
        expected: false,
      },
      {
        data: '1212aaa',
        expected: false,
      },
      {
        data: '11212',
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isOnlyLetters(data)).toBe(expected)
    })
  })
  test('isOnlyNumbers', () => {
    [
      {
        data: '1212aaa',
        expected: false,
      },
      {
        data: '11212',
        expected: true,
      },
      {
        data: '1 2 3',
        expected: false,
      },
      {
        data: '1a2a3',
        expected: false,
      },
      {
        data: '1aa#2a3',
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isOnlyNumbers(data)).toBe(expected)
    })
  })
  test('isEmail', () => {
    [
      {
        data: 'example@gmail.com',
        expected: true,
      },
      {
        data: 'example@gmail',
        expected: false,
      },
      {
        data: 'example.com',
        expected: false,
      },
      {
        data: 'example.gmail@com',
        expected: false,
      },
      {
        data: 'example',
        expected: false,
      },
    ].forEach(({ data, expected }) => {
      expect(isEmail(data)).toBe(expected)
    })
  })
})
