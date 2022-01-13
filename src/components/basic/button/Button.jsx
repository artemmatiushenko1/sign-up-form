import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, disabled }) => {
  return (
    <button className={classes.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
