import React from 'react';
import classes from './Card.module.scss';

const Card = ({ children, style, className }) => {
  return (
    <div style={style} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
