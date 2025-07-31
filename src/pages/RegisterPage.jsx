import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
  return (
    <div className="register-page">
        <h2>Registration</h2>
        <div className="inner-register">
        <input placeholder="FullName"/>
        <input placeholder="Enter Email"></input>
        <input placeholder="Enter Password"></input>
        <input id="btn-r" type="submit" onClick={()=>{navigate('/login-page')}}></input>
        </div>
        <div>
            <p>Have a account!</p>
            <p className="login-r" onClick={() => {navigate('/login-page')}}>LogIn</p>
        </div>
    </div>
  );
};

export default RegisterPage;
