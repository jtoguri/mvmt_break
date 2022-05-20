import './Header.css';

function Header ({ session, setSession }) {
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setSession(null);
  }

  return (
    <header>
      <nav>
        <a href="/"><h1>MVMT Break</h1></a>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="register">Sign Up</a></li>
          <li>{!session ? <a href="login">Sign In</a> : <a
            href="logout" onClick={handleLogout}>Sign Out</a>}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
