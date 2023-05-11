import Form from "./Form"
import TextInput from "./TextInput"
import Button from "./Button"
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
export default function LoginForm(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const[loading,setLoading]=useState("");
  const{login}=useAuth();
  const history=useNavigate();
  async function handleSubmit(e){
  e.preventDefault();
  try {
    setError("");
    setLoading(true);
    await login(email, password);
    history("/"); // Use navigate instead of history.push
  } catch (error) {
    console.log(error);
    setLoading(false);
    setError("Failed to login");
  }
  }

    return(
      <Form style={{height:'500px'}} onSubmit={handleSubmit}>

<TextInput type="text" placeholder="enter email" icon="alternate_email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
<TextInput type="password" placeholder="enter password" icon="lock" required vlaue={password} onChange={(e)=>setPassword(e.target.value)}/>
<Button disabled={loading} type="submit">
  <span>Submit Now</span>
</Button>
{error && <p className="error">{error}</p>}

    </Form>
    )
}