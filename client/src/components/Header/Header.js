import { useContext } from 'react';
import { UserContext } from '../UserContext';

import './Header.css';

function Header() {
  const { user, setUser } = useContext(UserContext); 

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <header>
      <nav>
        <a href="/"><h2>MVMT Break</h2></a>
        <ul>
          {user && <li><a href="/">Home</a></li>}
          <li>{!user ? <a href="register">Sign Up</a> : <a
          href="profile">Profile</a>}</li>
          <li>{!user ? <a href="login">Sign In</a> : <a
            href="logout" onClick={handleLogout}>Sign Out</a>}</li>
          <li><a href="about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
