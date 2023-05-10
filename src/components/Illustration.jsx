import classess from '../styles/Illustration.css';
import signupImage from '../images/signup.svg'
export default function Illustration(){
    return(
        <>
         <div className={classess.Illustration}>
            <img src={signupImage} alt="Signup" />
          </div>
        
        </>
    )
}