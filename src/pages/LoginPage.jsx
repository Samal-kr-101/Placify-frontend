import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function handleForm(email, pass,navigate) {
  const m_email = "abc@gmail.com";
  const m_pass = "12345";
  if (email == m_email) {
    if (pass == m_pass) {
      alert("loggedin successfully");
      navigate("/jobs");
    } else {
      alert("Wrong Password try again");
    }
  } else{
    alert("Email not found please register ");
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const navigates = useNavigate();
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const handleSubmit = () => {
    handleForm(email,pass,navigate);
  }
  return (
    <div className="login-page">
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>Login</h2>
      <div className="inner-login">
        <input value = {email} onChange= {(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter your email"></input>
        <input value ={pass} onChange = {(e)=>{setPass(e.target.value)}} type="password" placeholder="Enter Password" />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
      <div className="register">
        <p>Don't have account</p>
        <h4 className="para" onClick={() => {navigates('/register-page')}}>Register</h4>
      </div>
    </div>
  );
};

export default LoginPage;
