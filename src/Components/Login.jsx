import React from "react";
import "./Login.css";
import Background from "../Backgroud";
import Logo from "./logo";
import { Router, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  };
  return (
    <>
      <Background />
      <Logo/>
      <div className="wrapper">
        <form action="#">
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type="password" required />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" onClick={handleSubmit}>Log In</button>
          <div className="register">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
