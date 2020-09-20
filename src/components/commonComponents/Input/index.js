import React from 'react';
import classes from './style.module.css';

const Input = props => {
  let containerClasses = [classes.inputContainer];
  if (props.error) {
    containerClasses.push(classes['inputContainer--red']);
  }
  return (
    <div style={{ ...props.style }} className={containerClasses.join(" ")}>
      <label for={props.inputProps.name}>{props.label}</label>
      <input {...props.inputProps} />
      <span className={classes.inputError}>{props.error}</span>
    </div>
  );
}

export default Input;