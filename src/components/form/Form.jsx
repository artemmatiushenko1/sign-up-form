import React from 'react';
import classes from './Form.module.scss';
import Button from '../basic/button/Button';
import Input from '../basic/input/Input';
import Wrapper from '../helpers/Wrapper';
import Card from '../helpers/Card';
import useInput from '../../hooks/use-input';

const Form = () => {
  const {
    value: firstName,
    reset: resetFirstName,
    isValueValid: isFirstNameValid,
    isInputInvalid: isFirstNameInputInvalid,
    onInputChangeHandler: onFirstNameChangeHandler,
    onInputBlurHandler: onFirstNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastName,
    reset: resetLastName,
    isValueValid: isLastNameValid,
    isInputInvalid: isLastNameInputInvalid,
    onInputChangeHandler: onLastNameChangeHandler,
    onInputBlurHandler: onLastNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    reset: resetEmail,
    isValueValid: isEmailValid,
    isInputInvalid: isEmailInputInvalid,
    onInputChangeHandler: onEmailChangeHandler,
    onInputBlurHandler: onEmailBlurHandler,
  } = useInput((value) => value.includes('@'));

  const {
    value: password,
    reset: resetPassword,
    isValueValid: isPasswordValid,
    isInputInvalid: isPasswordInputInvalid,
    onInputChangeHandler: onPasswordChangeHandler,
    onInputBlurHandler: onPasswordBlurHandler,
  } = useInput((value) => value.length >= 8);

  const isFormValid =
    isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid
      ? true
      : false;

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (
      isFirstNameInputInvalid ||
      isLastNameInputInvalid ||
      isEmailInputInvalid ||
      isPasswordInputInvalid
    ) {
      return;
    }

    restForm();
  };

  const restForm = () => {
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  return (
    <Wrapper>
      <Card style={{ marginBottom: '2.5rem' }}>
        <h2 className={classes.form__title}>
          <span>Try it free 7 days </span> then $20/mo. thereafter
        </h2>
      </Card>
      <Card>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={onFormSubmitHandler}
        >
          <Input
            type="text"
            errorMessage="First name can't be empty"
            placeholder="First name"
            value={firstName}
            isInvalid={isFirstNameInputInvalid}
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlurHandler}
          />
          <Input
            type="text"
            errorMessage="Last name can't be empty"
            placeholder="Last name"
            value={lastName}
            isInvalid={isLastNameInputInvalid}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
          />
          <Input
            type="email"
            errorMessage="Email Address should contain '@'"
            placeholder="Email Address"
            value={email}
            isInvalid={isEmailInputInvalid}
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlurHandler}
          />
          <Input
            type="password"
            errorMessage="Password length should be at least 8 characters"
            placeholder="Password"
            value={password}
            isInvalid={isPasswordInputInvalid}
            onChange={onPasswordChangeHandler}
            onBlur={onPasswordBlurHandler}
          />
          <Button disabled={!isFormValid}>Claim your free trial</Button>
          <p className={classes.form__terms}>
            By clicking the button, you are agreeing to our
            <span>Terms and Services</span>
          </p>
        </form>
      </Card>
    </Wrapper>
  );
};

export default Form;
