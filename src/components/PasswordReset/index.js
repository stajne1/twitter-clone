import React from 'react';
import Input from '../commonComponents/Input';
import classes from './style.module.css';

const PasswordReset = () => {
  return (
    <div className={classes.passwordResetContainer}>
      <div className={classes.form}>
        <h2>Password reset</h2>
        <Input label="Email" inputProps={{ name: 'email', id: 'email', type: 'email' }} />
        <button>Send Password reset Email</button>
      </div>
    </div>
  );
}

export default PasswordReset;