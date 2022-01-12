import React from 'react';
import classes from './Form.module.scss';
import Button from '../basic/button/Button';
import Input from '../basic/input/Input';
import Wrapper from '../basic/helpers/Wrapper';
import Card from '../basic/helpers/Card';

const Form = () => {
  return (
    <Wrapper>
      <Card style={{ 'margin-bottom': '1.6rem' }}>
        <h2 className={classes.form__title}>
          <span>Try it free 7 days </span> then $20/mo. thereafter
        </h2>
      </Card>
      <form className={classes.form} autoComplete="off">
        <Input type="text" placeholder="First name" value="" />
        <Input type="text" placeholder="Last name" value="" />
        <Input type="email" placeholder="Email Address" value="" />
        <Input type="password" placeholder="Password" value="" />
        <Button>Claim your free trial</Button>
        <p className={classes.form__terms}>
          By clicking the button, you are agreeing to our
          <span>Terms and Services</span>
        </p>
      </form>
    </Wrapper>
  );
};

export default Form;
