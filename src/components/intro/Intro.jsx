import React from 'react';
import classes from './Intro.module.scss';

const Intro = () => {
  return (
    <header className={classes.intro}>
      <h1 className={classes.intro__title}>Learn to code by watching others</h1>
      <p className={classes.intro__description}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
};

export default Intro;
