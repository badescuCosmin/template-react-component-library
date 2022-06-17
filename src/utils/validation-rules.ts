export const validationRules = {
  required: /\w/,
  phone: /^.{11,11}$/,
  time: /^.{4,4}$/,
  optional: /^.{0,125}$/,
  notesReg: /[\s\S]*?/,
  emailReg:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  emailRegWithEmptyValid: /^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})?$/,
  website:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  transpProviderAddress: /.{4,}([ \t,;.][\d]{2,6})$/,
  onlyNumbers: /^[0-9]+$/,
  notWhiteSpace: /^\S*$/,
};
