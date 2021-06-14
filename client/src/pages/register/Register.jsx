import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";


// register: username, email, password, error
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

// register and login pages almost identical, input placeholder and colors are different
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh
    setError(false); // when Submit pressed, no error
    try {
      const res = await axios.post("/auth/register", { 
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login"); // go to login page
    } catch (err) {
      setError(true); // if error
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button> {/* if there is an error, use this span */}
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
