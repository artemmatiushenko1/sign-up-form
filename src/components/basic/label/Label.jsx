import React from 'react';
import classes from './Label.module.scss';

const Label = ({ children, htmlFor }) => {
  return (
    <label className={classes.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
