import React, { useState } from 'react';
import { Twitter } from '@material-ui/icons';

import { isValidEmail } from '../../helpers/validationHelper';
import Input from '../commonComponents/Input';
import classes from './style.module.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const setEmailData = e => {
    setEmail(e.target.value);
    setEmailTouched(true);
  }

  const setPasswordData = e => {
    setPassword(e.target.value);
    setPasswordTouched(true);
  }

  const setConfirmPasswordData = e => {
    setConfirmPassword(e.target.value); 
    setConfirmPasswordTouched(true);
  }

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signupForm}>
        <div className={classes.brandContainer}>
          <Twitter className={classes.twitterLogo} />
        </div>
        <h2>Create your account</h2>
        <Input
          style={{ margin: '30px 0' }}
          label="Email"
          error='test'
          value={email}
          error={(!isValidEmail(email) && emailTouched) && 'Invalid email.'}
          inputProps={{ type: 'email', name: 'email', id: 'email', onChange: setEmailData }} />
        <Input
          style={{ margin: '30px 0' }}
          label="Password"
          value={password}
          error={(!password && passwordTouched) && 'Password must not be empty.'}
          inputProps={{ type: 'password', name: 'password', id: 'password', onChange: setPasswordData }} />
        <Input
          style={{ margin: '30px 0' }}
          label="Confirm Password"
          value={confirmPassword}
          error={(confirmPassword !== password && confirmPasswordTouched) && 'Password don\'t match.'}
          inputProps={{ type: 'password', name: 'confirmpassword', id: 'confirmpassword', onChange: setConfirmPasswordData }} />
        <button className={classes.signupButton}>Sign up</button>
      </div>
    </div>
  );
}

export default SignUp;