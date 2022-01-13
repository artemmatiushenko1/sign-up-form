import React from 'react';
import Wrapper from '../../helpers/Wrapper';
import Label from '../label/Label';
import classes from './Input.module.scss';

const Input = ({ type, placeholder, value, isValid }) => {
  const classNames = `${classes.input}`;

  return (
    <Wrapper>
      <input
        type={type}
        className={classNames}
        placeholder={placeholder}
        value={value}
      />
      {/* <Label>Password can't be empty</Label> */}
    </Wrapper>
  );
};

export default Input;
