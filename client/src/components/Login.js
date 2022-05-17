
function Login () {
  
  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in to track your exercises.</p>
      
      <form action="/api/login" method="get">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;
