import Navbar from "../../components/Navbar/index.jsx";
import React, { useContext } from "react";
import "./style.css";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  function AuthUser() {
    users.setLoggedIn(true);
  }

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-card">
        <div className="login-field" placeholder="Login:">
          <input type="text" id="log-field" />
        </div>
        <div className="password-field">
          <input
            type="password"
            name=""
            id="pass-field"
            placeholder="Password:"
          />
        </div>
        <div
          className="auth-btn"
          onClick={() => {
            AuthUser();
            navigate("/courses");
          }}
        >
          Enter
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
