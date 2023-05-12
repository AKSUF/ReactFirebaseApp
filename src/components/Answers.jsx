import React from 'react';
import Checkbox from './Checkbox';
import classes from '../styles/Answer.module.css';

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.Answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.Answers}
          text={option.title}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
          value={index}
        />
      ))}
    </div>
  );
};

export default Answers;
