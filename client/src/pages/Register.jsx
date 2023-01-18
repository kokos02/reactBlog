import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input requierd type="text" placeholder="username" />
        <input requierd type="email" placeholder="email" />
        <input requierd type="passord" placeholder="password" />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
