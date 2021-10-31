const validator = {
  maxLength: (maxLength) => {
    return (value) => {
      return value && value.length < maxLength
        ? undefined
        : `Строка должна быть меньше ${maxLength} символов `;
    };
  },
  minLength: (minLength) => {
    return (value) => {
      return value && value.length > minLength
        ? undefined
        : `Длина должна быть не менее ${minLength} символов `;
    };
  },
  required: (value) => {
    return value ? undefined : "Поле обязательно к заполнению";
  },
  email: (value) => {
    const rx = /.+@.+\..{2,}/;
    return rx.test(value) ? undefined : "Введите корректный email";
  },
};
export default validator;
