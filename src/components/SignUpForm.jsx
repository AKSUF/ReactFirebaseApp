import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import {useAuth} from "../context/AuthContext"
import classes from "../styles/signup.modules.css"
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

import { useState } from "react";
export default function SignUpForm(){
    
const[username,setUsername]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const[agree,setAgree]=useState("");
const[error,setError]=useState("");
const[loading,setLoading]=useState("");
const{login}=useAuth();

const history=useNavigate();
async function handleSubmit(e){
e.preventDefault();
if(password !==confirmPassword){
return setError("Password do not match");
}
try {
  setError("");
  setLoading(true);
  await login(email, password);
  history("/"); // Use navigate instead of history.push
} catch (error) {
  console.log(error);
  setLoading(false);
  setError("Failed to create an account");
}
}

 return (
  <Form style={{height:'500px'}} onSubmit={handleSubmit}>

<TextInput type="text" placeholder="enter name" icon="person" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
<TextInput type="text" placeholder="enter email" icon="alternate_email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
<TextInput type="password" placeholder="enter password" icon="lock" required vlaue={password} onChange={(e)=>setPassword(e.target.value)}/>
<TextInput type="password" placeholder="enter password" icon="lock" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
<Checkbox text="I agree to the terms &amp; condition" required value={agree} onChange={(e)=>setAgree(e.target.value)}/>
<Button disabled={loading} type="submit"><span>Submit Now</span></Button>
{error && <p className="error">{error}</p>}
<div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
    </Form>

    )
}