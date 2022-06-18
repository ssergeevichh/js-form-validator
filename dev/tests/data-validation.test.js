/* global suite, test, expect */

import { validateFormData } from '../js/validation/form/form-handling'
import formFieldRules from '../js/data/form-data'

suite('data-validation', () => {
  test('validateEmtyData', () => {
    const formData = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      birthday: '',
    }
    const expectedData = [
      {
        message: 'Field is required',
        fieldName: 'first_name',
      },
      {
        message: 'Field is required',
        fieldName: 'last_name',
      },
      {
        message: 'Field is required',
        fieldName: 'email',
      },
      {
        message: 'Field is required',
        fieldName: 'phone',
      },
      {
        message: 'Field is required',
        fieldName: 'birthday',
      },
    ]
    expect(validateFormData(formData, formFieldRules)).toEqual(expectedData)
  })
  test('validateFilledData', () => {
    const formData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@gmail.com',
      phone: '380505050505',
      birthday: '2000-01-01',
    }
    expect(validateFormData(formData, formFieldRules)).toEqual([])
  })
})
