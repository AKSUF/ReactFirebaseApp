import React from 'react'
import image from "../images/zcg9pbf2.bmp"
import classes from "../styles/Summary.module.css"
export default function Summery(){
    return(
        <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />
          
          </p>
        </div>
          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
        
      </div>
    )
}
