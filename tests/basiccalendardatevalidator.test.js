import { BasicCalendarDateValidator } from '../src/model/BasicCalendarDateValidator'
import { InvalidDateFormatError } from '../src/model/Errors/InvalidDateFormatError'

describe('BasicCAlendarDateValidator should throw an error if the year is set to 0', () => {
  test('DateFormat: YYYY/MM/DD', () => {
    const gregValidator = new BasicCalendarDateValidator('0/12/31')
    expect(() => gregValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
  test('DateFormat: DD/MM/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('31/12/0')
    expect(() => gregValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
  test('DateFormat: MM/DD/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('12/31/0')
    expect(() => gregValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
  test('DateFomat: MM/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('12/0')
    expect(() => gregValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
  test('DateFormat: YYYY/MM', () => {
    const gregValidator = new BasicCalendarDateValidator('0/12')
    expect(() => gregValidator.validateDate()).toThrow(InvalidDateFormatError)
  })
})
describe('BasicCAlendarDateValidator should not throw an error if passed a valid date', () => {
  test('DateFormat: YYYY/MM/DD', () => {
    const gregValidator = new BasicCalendarDateValidator('2020/12/31')
    expect(() => gregValidator.validateDate()).not.toThrow()
  })
  test('DateFormat: DD/MM/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('31/12/2020')
    expect(() => gregValidator.validateDate()).not.toThrow()
  })
  test('DateFormat: MM/DD/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('12/31/2020')
    expect(() => gregValidator.validateDate()).not.toThrow()
  })
  test('DateFormat: MM/YYYY', () => {
    const gregValidator = new BasicCalendarDateValidator('12/2020')
    expect(() => gregValidator.validateDate()).not.toThrow()
  })
  test('DateFormat: YYYY/MM', () => {
    const gregValidator = new BasicCalendarDateValidator('2020/12')
    expect(() => gregValidator.validateDate()).not.toThrow()
  })
})
