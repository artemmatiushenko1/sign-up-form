import { useState } from 'react';

const useInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isValueValid = validateValue(value);
  const isInputInvalid = !isValueValid && isInputTouched;

  const onInputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onInputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsInputTouched(false);
  };

  return {
    value,
    isInputTouched,
    reset,
    isValueValid,
    isInputInvalid,
    onInputChangeHandler,
    onInputBlurHandler,
  };
};

export default useInput;
