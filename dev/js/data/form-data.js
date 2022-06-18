const formFieldRules = [
  {
    name: 'first_name',
    rules: [
      {
        ruleName: 'capitalized',
        message: 'First name must be capitalized',
      },
      {
        ruleName: 'minLength',
        value: 2,
        message: 'First name must be at least 2 characters',
      },
      {
        ruleName: 'required',
        message: 'Field is required',
      },
      {
        ruleName: 'onlyLetters',
        message: 'Field must contain only letters',
      },
    ],
  },
  {
    name: 'last_name',
    rules: [
      {
        ruleName: 'capitalized',
        message: 'First name must be capitalized',
      },
      {
        ruleName: 'minLength',
        value: 2,
        message: 'First name must be at least 2 characters',
      },
      {
        ruleName: 'required',
        message: 'Field is required',
      },
      {
        ruleName: 'onlyLetters',
        message: 'Field must contain only letters',
      },
    ],
  },
  {
    name: 'email',
    rules: [
      {
        ruleName: 'required',
        message: 'Field is required',
      },
      {
        ruleName: 'correctEmail',
        message: 'Email is not correct',
      },
    ],
  },
  {
    name: 'phone',
    rules: [
      {
        ruleName: 'required',
        message: 'Field is required',
      },
      {
        ruleName: 'minLength',
        value: 12,
        message: 'Phone number must not be less than 12 characters',
      },
      {
        ruleName: 'onlyNumbers',
        message: 'Phone number must contain only numbers',
      },
    ],
  },
  {
    name: 'birthday',
    rules: [
      {
        ruleName: 'required',
        message: 'Field is required',
      },
      {
        ruleName: 'correctDate',
        message: 'Date is not correct',
      },
    ],
  },
]

export default formFieldRules