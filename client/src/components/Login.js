import axios from 'axios';
import { useState } from 'react';
import './Form.css';

function Login ({ session, setSession }) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  if (session) {
    return (
      <div>
        <h4>You are already logged in.</h4>
      </div>
    )
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        username,
        password
      });
      
      localStorage.setItem('token', res.data.token);
      return setSession(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      {session && <h4>You're already logged in</h4>}
      <h2>Sign In</h2>
      <p>Sign in to track your exercises.</p>
      
      <form action="/api/login" method="get" onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;
