import React from 'react';
import Wrapper from '../../helpers/Wrapper';
import Label from '../label/Label';
import classes from './Input.module.scss';

const Input = ({
  type,
  placeholder,
  value,
  isInvalid,
  onChange,
  onBlur,
  errorMessage,
}) => {
  const classNames = `${classes.input} ${isInvalid ? classes.invalid : ''}`;

  return (
    <Wrapper>
      <input
        type={type}
        className={classNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isInvalid && <Label>{errorMessage}</Label>}
    </Wrapper>
  );
};

export default Input;
