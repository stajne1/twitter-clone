import React from 'react';
import { Search, Group, ChatBubbleOutline, Twitter }  from '@material-ui/icons';
import classes from './style.module.css';

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <Twitter className={classes.leftSection__background} />
        <div className={classes.leftSection__content}>
          <p className={classes.leftSection__content__message}><Search /> Follow your interests.</p>
          <p className={classes.leftSection__content__message}><Group /> Hear what people are talking about.</p>
          <p className={classes.leftSection__content__message}><ChatBubbleOutline /> Join the conversation</p>
        </div>
      </div>
      <div className={classes.rightSection}>Right Section</div>
    </div>
  );
}

export default LandingPage;