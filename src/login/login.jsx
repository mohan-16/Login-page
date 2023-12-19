import React, { useState } from "react";
import "./log.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [Username, setUsername] = useState("");

  const [Passward, setPassward] = useState("");

  function handleLogin(e) {
    console.log(Username, Passward);
    e.preventDefault();
  }

  return (
    <div className="Home-page">
      <form action=" ">
        <h1> Login </h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="passward"
            placeholder="Passward"
            defaultValue={Passward}
            onChange={(e) => setPassward(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="button" onClick={handleLogin}>
          {" "}
          Login
        </button>
        <div className="register">
          <p>
            Don't have an a account ?? <a href="#"> Register </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
