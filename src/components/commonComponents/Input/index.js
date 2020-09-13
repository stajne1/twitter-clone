import React from 'react';
import classes from './style.module.css';

const Input = props => {
  return (
    <div className={classes.inputContainer}>
      <label for={props.inputProps.name}>{props.label}</label>
      <input {...props.inputProps} />
    </div>
  );
}

export default Input;