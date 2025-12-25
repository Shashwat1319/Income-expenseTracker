import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if(response.status==200){
      console.log("Login response:", response.data.msg);
      handleLogin();
      nav("/");
      }
    
    } catch (error) {
      console.error("Login failed:", error.response.data.msg);
    }
  };

  return (
    <>
      <div className="login mt-5 h-50 w-25 mx-auto border rounded border-primary border-rounded ">
        <h2 className="text-center">Login Now </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            placeholder="Enter Your email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control mt-2"
            placeholder="Enter Your password"
          />
          <button
            type="submit"
            className="form-control mb-3 mt-2 w-100 bg-success text-white"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
