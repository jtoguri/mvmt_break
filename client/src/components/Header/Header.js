import { useContext } from 'react';
import { UserContext } from '../UserContext';

import LogoutDialog from '../Auth/LogoutDialog';

import './Header.css';

function Header({ setLogoutDialogOpen }) {
  const { user, setUser } = useContext(UserContext); 

  const handleLogout = (e) => {
    e.preventDefault();
    setLogoutDialogOpen(true);
    return;
    /*localStorage.removeItem("token");
    setUser(null);*/
  }

  return (
    <header>
      <nav>
        <a href="/"><h2>Mvmt Break</h2></a>
        <ul>
          <li><a href="/">Home</a></li>
          {user ? ( 
            <>
              <li><a href="profile">Profile</a></li>
              <li><a href="logout" onClick={handleLogout}>Sign Out</a></li>
            </>
          ) : (
            <li>
              <a href="login">Register / Sign In</a>
            </li>
          )}
          <li><a href="about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
