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
        <a href="/"><h2>MVMT Break</h2></a>
        <ul>
          {session && <li><a href="/">Home</a></li>}
          <li>{!session ? <a href="register">Sign Up</a> : <a
          href="profile">Profile</a>}</li>
          <li>{!session ? <a href="login">Sign In</a> : <a
            href="logout" onClick={handleLogout}>Sign Out</a>}</li>
          <li><a href="about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
