export const swapValues = (newValue, valueToChange, changeFn) => {
  changeFn(valueToChange, newValue);
};
