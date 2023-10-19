import { InvalidDateFormatError } from '../src/model/Errors/InvalidDateFormatError'
import { JapaneseEraDateValidator } from '../src/model/JapaneseEraDateValidator'

describe('JapaneseEraDateValidator should throw an error if the year is set to 0', () => {
  test('DateFormat: "Name" YY/MM', () => {
    const japValidator = new JapaneseEraDateValidator('Test 0/12')
    expect(() => japValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
  test('DateFormat: "Name" YY ', () => {
    const japValidator = new JapaneseEraDateValidator('Test 0')
    expect(() => japValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
})

describe('JapanesEraDateValidator should throw if not passed a name', () => {
  test('Should throw if no name is passed', () => {
    const japValidator = new JapaneseEraDateValidator('20/12')
    expect(() => japValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
})

describe('JapaneseEraDateValidator should not throw an error if passed a valid date', () => {
  test('DateFormat: "Name" YY/MM', () => {
    const japValidator = new JapaneseEraDateValidator('Test 20/12')
    expect(() => japValidator.validateDate()).not.toThrow()
  })
  test('DateFormat: "Name" YY ', () => {
    const japValidator = new JapaneseEraDateValidator('Test 20')
    expect(() => japValidator.validateDate()).not.toThrow()
  })
})
