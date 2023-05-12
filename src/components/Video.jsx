import image from '../images/zcg9pbf2.bmp';
import classes from '../styles/Video.moduls.css'

export default function Video({title,id,noq}){
    return(
 
        <div className={classes.video}>
          <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}   alt={title} style={{width: '200px', height: '150px'}}/>

          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{noq} Questions</p>
            <p>Total points:{noq * 5}</p>
          </div>
        </div>
  
    )
}