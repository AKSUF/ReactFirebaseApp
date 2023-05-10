import React from 'react'
import Answers from './Answers'
import classes from '../styles/Question.module.css'
export default function Question(){
    return(
        <div className={classes.question} >
        <div className={classes.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
         
        </div>
        <Answers/>
      </div>
    )
}
