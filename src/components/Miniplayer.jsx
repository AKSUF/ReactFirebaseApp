
import classes from "../styles/Miniplayer.module.css"
import React from 'react'
export default function Miniplayer(){
    return(
        <div
        className={`${classes.miniPlayer} ${classes.floatingBtn}`}
   
      >
        <span className={`material-icons-outlined ${classes.open}`}>
          {" "}
          play_circle_filled{" "}
        </span>
        <span
          className={`material-icons-outlined ${classes.close}`}

        >
          {" "}
          close{" "}
        </span>
        <div 
          className={classes.player}
     
          width="300px"
          height="168px"
     
          controls
        />
  
      </div>
    )
}
