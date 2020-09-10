import React from 'react';
import { Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import classes from './style.module.css';

const LogIn = () => {
  return (
    <div className={classes.loginContainer}>
      <Twitter className={classes.twitterLogo} />
      <h2>Log in to Twitter</h2>
      <div className={classes.inputContainer}>
        <label for="username">Phone, email, or username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className={classes.inputContainer}>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button className={classes.loginButton}>Log in</button>
      <div className={classes.links}>
        <Link>Forgot Password?</Link> 
        <span> . </span>
        <Link>Sign up for Twitter</Link>
      </div>
    </div>
  );
}

export default LogIn;