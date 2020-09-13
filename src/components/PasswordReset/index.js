import React from 'react';
import Input from '../commonComponents/Input';
import { Twitter } from '@material-ui/icons';
import classes from './style.module.css';

const PasswordReset = () => {
  return (
    <div className={classes.passwordResetContainer}>
      <div className={classes.form}>
        <div className={classes.brandContainer}>
          <Twitter className={classes.twitterLogo} />
        </div>
        <Input label="Email" inputProps={{ name: 'email', id: 'email', type: 'email' }} />
        <button>Send password reset email</button>
      </div>
    </div>
  );
}

export default PasswordReset;