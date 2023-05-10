import React from 'react'
import classes from "../styles/signup.modules.css"
import Illustration from '../components/Illustration'
import Form from '../components/Form'
import TextInput from '../components/TextInput'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
export default function SignIUp(){
    return(
    <>
    <h1>Create an account</h1>

<div className='column'>
    <Illustration/>
    <Form className={`${classes.signup} form`}>

<TextInput type="text" placeholder="enter name" icon="person"/>
<TextInput type="text" placeholder="enter email" icon="alternate_email"/>
<TextInput type="password" placeholder="enter password" icon="lock"/>
<TextInput type="password" placeholder="confirm password" icon="lock_clock"/>
<Checkbox text="I agree to the terms &amp; condition"/>
<Button><span>Submit Now</span></Button>

<div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
    </Form>
</div>


    </>
    )
}