
export const required  = value => (value ? undefined : 'Required')

export const maxLength= max => value => value.length <= max ? undefined : `Max Length symbols: ${max} `

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)