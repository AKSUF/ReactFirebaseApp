import React from 'react'
import classes from "../styles/Progressbar.module.css"
import Button from './Button'
import { Link } from 'react-router-dom'
const ProgressBar = () => {
    return (
        <div className={classes.progressBar}>
      <div className={classes.backButton} >
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} >
      
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
         
          ></div>
        </div>
      </div>
      <Link to="/result">
      <Button
        className={classes.next}>
   
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
      </Link>
    </div>
    )
}

export default ProgressBar
