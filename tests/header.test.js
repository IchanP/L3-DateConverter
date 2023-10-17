import '@testing-library/jest-dom'
import { LinkHeader } from '../src/components/pg222pb-link-header/pg222pb-link-header'
import { expect, describe, jest } from '@jest/globals'
import { AElementBuilder } from '../src/components/pg222pb-link-header/AElementBuilder'

// TODO: Write tests for the LinkHeader class
describe('testetstst.js', () => {
  test('should log an error if passed wrong type in constructor', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const header = new LinkHeader([1])

    expect(consoleSpy).toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
  test('should not log an error if passed wrong type in constructor', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    const header = new LinkHeader([new AElementBuilder('test', () => {})])

    expect(consoleSpy).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})
