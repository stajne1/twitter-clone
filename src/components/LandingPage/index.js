import React from 'react';
import { Search, Group, ChatBubbleOutline, Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import classes from './style.module.css';

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rightSection}>
        <div className={classes.rightSection__content}>
          <Twitter className={classes.rightSection__brand} />
          <h1>See what’s happening in the world right now</h1>
          <h4>Join Twitter today.</h4>
          <Link className={classes.signupButton} to='/signup'>Sign up</Link>
          <Link className={classes.loginButton} to='/login' >Log in</Link>
        </div>
      </div>
      <div className={classes.leftSection}>
        <Twitter className={classes.leftSection__background} />
        <div className={classes.leftSection__content}>
          <p className={classes.leftSection__content__message}><Search /> Follow your interests.</p>
          <p className={classes.leftSection__content__message}><Group /> Hear what people are talking about.</p>
          <p className={classes.leftSection__content__message}><ChatBubbleOutline /> Join the conversation</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;