import React from "react";
import Background from "../Backgroud";
import Logo from "./logo";
import "./Login.css"

const Register = () => {
  return (
    <>
      <Logo/>
      <Background />
      <div class="wrapper">
        <form action="#">
          <h2>Register</h2>
          <div class="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div class="input-field">
            <input type="password" required />
            <label>Enter your password</label>
          </div>
          <div class="forget">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Register</button>
          <div class="register">
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
