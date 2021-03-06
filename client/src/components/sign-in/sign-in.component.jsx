import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart
} from "../../reducers/user/user.actions";
import { Buttons, SignInContainer } from "./sign-in.styles";

const SignIn = ({googleSignInStart, emailSignInStart}) => {
  
  const [credentials, setCredentials] = useState({email: "", password: ""});

  const { email, password } = credentials;

  const handleSubmit =  event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const{ name, value } = event.target;
    setCredentials({...credentials, [name]: value})
  };


    
    return (
      <SignInContainer className="animated zoomIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <Buttons >
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }

const mapDisPatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDisPatchToProps)(SignIn);
