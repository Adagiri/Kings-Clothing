import React, { useState } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../reducers/user/user.actions";
import "./sign-up.styles.scss";
import { connect } from 'react-redux';


const SignUp = ({signUpStart}) => {

    const [credentials, setCredentials] = useState({displayName: "", email: "", password: "", confirmPassword: ""});

    const{ email, password, confirmPassword, displayName} = credentials;

    const handleSubmit =  e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match ")
            return
        } 
            signUpStart(email, password, displayName);  
    }

    const handleChange = e => {
        const{ name, value} = e.target;
        setCredentials({...credentials, [name]: value});
            }
     
        return (
<div className="sign-up animated zoomIn">
<h2 className="title">I do not have an account</h2>
<span>Sign up with your email and password</span>
<form className="sign-up-form" onSubmit={handleSubmit}>
<FormInput
type="text"
name= "displayName"
value={displayName}
onChange={handleChange}
required
label="Display Name"
/>
<FormInput
type="email"
name= "email"
value={email}
onChange={handleChange}
required
label="Email"
/>
<FormInput
type="password"
name= "password"
value={password}
onChange={handleChange}
required
label="Password"
/>

<FormInput
type="password"
name= "confirmPassword"
value={confirmPassword}
onChange={handleChange}
required
label="Confirm Password"
/>

<CustomButton type="submit" >SIGN UP</CustomButton>
</form>
</div>
        );
    };


const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);