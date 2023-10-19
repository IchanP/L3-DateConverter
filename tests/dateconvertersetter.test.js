import { DateConverter } from '../src/model/DateConverter'
import { DateConversionDetail } from '../src/model/DataStructure/DateConversionDetail'
import { NotValidCalendarError } from '../src/model/Errors/NotValidCalendarError'

describe('DateConverter should throw an error if argument holds an invalid calendar', () => {
  test('Should throw NotValidCalendar if DateConversionDetail holds an invalid calendar in the from field', () => {
    expect(() => new DateConverter(new DateConversionDetail('test', 'Gregorian', 'test'))).toThrow(NotValidCalendarError)
  })
  test('Should throw NotValidCalendar if DateConversionDetail holds an invalid calendar in the to field', () => {
    expect(() => new DateConverter(new DateConversionDetail('Gregorian', 'test', 'test'))).toThrow(NotValidCalendarError)
  })
})
