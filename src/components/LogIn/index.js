import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Input from '../commonComponents/Input';
import classes from './style.module.css';

const LogIn = () => {
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginForm}>
        <Twitter className={classes.twitterLogo} />
        <h2>Log in to Twitter</h2>
        <Input label="Email" inputProps={{ type: 'text', name: 'username', id: 'username' }} />
        <Input label="Password" inputProps={{ type: 'password', name: 'password', id: 'password' }} />
        <button className={classes.loginButton}>Log in</button>
        <div className={classes.links}>
          <Link to="password-reset">Forgot Password?</Link>
          <span> . </span>
          <Link to="/signup">Sign up for Twitter</Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;