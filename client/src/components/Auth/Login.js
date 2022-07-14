import axios from 'axios';
import { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import './AuthForm.css';

function Login() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] =useState("");
  
  const { user, setUser } = useContext(UserContext);

  //On the login page I need to check where the user came from to know
  //where to send them back to and which data to track

  const navigate = useNavigate(); 
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const exercise = location.state?.exercise || null;

  /*if (user) {
    return (
      <Navigate to="/" replace={true} />
    );
  }*/
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiURL = "https://mvmt-break-api.herokuapp.com";
    const requestURL = apiURL + "/api/users/login";

    try {
      const res = await axios.post(requestURL, {
        username,
        password
      });
      
      localStorage.setItem('token', res.data.token);

      setUser(res.data);

      navigate(from, { replace: true, state: exercise });
      
    } catch (error) {
      console.log(error);
      return setError(error.response.data);
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in to track your exercises.</p>
      
      <form action="/api/login" method="get" onSubmit={handleSubmit}>
        <span className="error-msg" >{error}</span>
        <div>
          <label htmlFor="username">Username/Email </label>
          <input type="text" name="username" id="username"
            value={username} onChange={(e) => setUsername(e.target.value)} 
              required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password"
            value={password} onChange={(e) => setPassword(e.target.value)} 
              required />
        </div>
        <input className="btn" type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;
