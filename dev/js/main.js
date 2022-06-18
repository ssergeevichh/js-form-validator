import '../styles/main.scss'

import { FormValidator, addFormError } from 'sergeevich-js-valitool'
import formFieldRules from './data/form-data'

const validator = new FormValidator('form', {
  rules: formFieldRules,
  onSuccsessCallback: (formData, form) => {
    console.log(formData, form);
  },
  onErrorCallback: (errors, form) => {
    errors.forEach(error => addFormError(form, error))
  }

})
