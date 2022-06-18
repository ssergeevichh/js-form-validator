# valitool.js
---
### this is a library for validating form data
---
## Installation and usage

Install [npm](https://npmjs.org/) and run the following command to install the library:

```
$ npm install valitool
```
and than you can use it in your code:
```
import { FormValidator } from 'valitool';
```

### example
This FormValidator requires:

1. form selector,
2. object with following properties:
    - rules,
    -  onSuccsessCallback - callback , which will be called when form is valid,
    -  onErrorCallback - callback, which will be called when form is invalid. 

    Also recommend to use `onErrorCallback` , which will be presented in example

```
const validator = new FormValidator('formSelector', {
    rules: [
        {
            name: 'name',
            rules: [
                {
                    type: 'required',
                    message: 'Name is required'
                },
                {
                    type: 'minLength',
                    message: 'Name must be at least 3 characters',
                    value: 3
                }
            ]
        },
        {
            name: 'email',
            rules: [
                {
                    type: 'required',
                    message: 'Email is required'
                },
                {
                    type: 'email',
                    message: 'Email is not valid'
                }
            ]
        },
        {
            name: 'password',
            rules: [
                {
                    type: 'required',
                    message: 'Password is required'
                },
                {
                    type: 'minLength',
                    message: 'Password must be at least 6 characters',
                    value: 6
                }
            ]
        }
    ],
    onSuccessCallback: (formData, form) => {
        console.log('success');
    },
    onErrorCallback: (errors, form) => {
        errors.forEach(error => addFormError(form, error))
    }
});
```
> in file `index.js` you can see this error handlers:
`addFormError` and `removeFormErrors`

For your convenience, you can leave or change them.

***if you use them don't forget to import `form-errors.css` file to your styles.***


---

Your form elements must have a `name` attribute, and this names must match the names of the rules. 

Each name must be unique and must match array of rules.
Each rule is an object with the following properties:
1. `type` - this field is required and must be a string (e.g. `capitalized`)
2. `message` - this field is optional and must be a string (e.g. `Name must be capitalized`)
3. `value` - this field is required for following rules: `minLength`, `maxLength`, and must be a number ( e.g. `3`)
## Validation rules

Rule | Description
--- | ---
required | check if the value isn't empty
email | check if the value is a valid email
minLength | check if the value is no shorter than the specified length. This rule requires a `value` parameter, ***which type is number***.
maxLength | check if the value is no longer than the specified length. This rule requires a `value` parameter, ***which type is number***.
correctDate | check if the value is a valid date
capitalized | check if the value is capitalized
onlyLetters | check if the value contains only letters
onlyNumbers | check if the value contains only numbers

## Tests

Tests are using [Vitest](https://vitest.dev/).

To run the tests, run the following command:

``` 
$ npm run test
```