import Form from "./Form"
import TextInput from "./TextInput"
import Button from "./Button"
import { Link, useHistory } from "react-router-dom";
export default function LoginForm(){
    return(
        <Form style={{ height: "330px" }} >
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        
        />
  
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
     
        />
  
        <Button type="submit" >
          <span>Submit Now</span>
        </Button>
  
        {/* {error && <p className="error">{error}</p>} */}
  
        <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
      </Form>
    )
}