import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../reducers/user/user.actions";
import "./sign-up.styles.scss";
import { connect } from 'react-redux';


class SignUp extends React.Component {

    state = {
displayName: '',
email: '',
password: '',
confirmPassword: ''
    }

    handleChange = e => {
        
   this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit =  e => {
        e.preventDefault();
        const {displayName , email, password, confirmPassword} = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert("password don't match ")
            return
        } 
            signUpStart(email, password, displayName);  
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
<div className="sign-up animated zoomIn">
<h2 className="title">I do not have an account</h2>
<span>Sign up with your email and password</span>
<form className="sign-up-form" onSubmit={this.handleSubmit}>
<FormInput
type="text"
name= "displayName"
value={displayName}
onChange={this.handleChange}
required
label="Display Name"
/>
<FormInput
type="email"
name= "email"
value={email}
onChange={this.handleChange}
required
label="Email"
/>
<FormInput
type="password"
name= "password"
value={password}
onChange={this.handleChange}
required
label="Password"
/>

<FormInput
type="password"
name= "confirmPassword"
value={confirmPassword}
onChange={this.handleChange}
required
label="Confirm Password"
/>

<CustomButton type="submit" >SIGN UP</CustomButton>
</form>
</div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);