import image from '../images/zcg9pbf2.bmp';
import classes from '../styles/Video.moduls.css'

export default function Video(){
    return(
 
        <div className={classes.video}>
        <img src={image} alt="Video Title" style={{width: '200px', height: '150px'}} />

          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={classes.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
  
    )
}