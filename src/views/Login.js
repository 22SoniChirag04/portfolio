import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthViewModel from "../viewmodels/AuthViewModel";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = () => {
    const authVM = new AuthViewModel();
    const result = authVM.login(email, password);

    if (result.success) {
      localStorage.setItem("isLoggedIn", "true"); // Save login state
      navigate("/home");
    } else {
      setError(result.message);
      navigate("/home");

    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sign In</h1>

        {error && <p className="error-message">{error}</p>}

        {/* Email Input */}
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input with Eye Icon */}
        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Login Button */}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        

        {/* Register Link */}
        <p className="register-text">Don't have an account?<a href="/Register"> Sign Up</a>

        </p>
      </div>
    </div>
  );
}
