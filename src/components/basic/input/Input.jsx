import React from 'react';
import classes from './Input.module.scss';

const Input = ({ type, placeholder, value }) => {
  return (
    <input
      type={type}
      className={classes.input}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
