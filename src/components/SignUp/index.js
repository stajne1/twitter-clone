import React from 'react';
import { Twitter } from '@material-ui/icons';

import Input from '../commonComponents/Input';
import classes from './style.module.css';

const SignUp = () => {
  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signupForm}>
        <div className={classes.brandContainer}>
          <Twitter className={classes.twitterLogo} />
        </div>
        <h2>Create your account</h2>
        <Input style={{margin: '30px 0'}} label="Name" inputProps={{ type: 'text', name: 'name', id: 'name' }} />
        <Input style={{margin: '30px 0'}} className={classes.input} label="Email" inputProps={{ type: 'email', name: 'email', id: 'email' }} />
        <Input style={{margin: '30px 0'}} className={classes.input} label="Phone" inputProps={{ type: 'phone', name: 'phone', id: 'phone' }} />
        <Input style={{margin: '30px 0'}} className={classes.input} label="Password" inputProps={{ type: 'password', name: 'password', id: 'password' }} />
        <button className={classes.signupButton}>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;