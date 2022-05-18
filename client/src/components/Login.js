import axios from 'axios';
import { useState } from 'react';

function Login () {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        username,
        email,
        password
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in to track your exercises.</p>
      
      <form action="/api/login" method="get" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username"
          value={username} onChange={(e) => setUsername(e.target.value)} 
            required />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={email} 
          onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"
          vlaue={password} onChange={(e) => setPassword(e.target.value)} 
            required />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;
