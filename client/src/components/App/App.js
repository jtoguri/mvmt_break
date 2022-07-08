import Home from '../Home/Home';
import Header from '../Header/Header';
import About from '../About/About';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Profile from '../Profile/Profile';

import { UserContext } from '../UserContext';

import './App.css';

import { useState, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import jwt_decode from 'jwt-decode';

import LogoutDialog from '../Auth/LogoutDialog';

function App() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const storedJwt = localStorage.getItem('token');
  
  const decodedUser = storedJwt ? jwt_decode(storedJwt) : null;
  
  const [user, setUser] = useState(decodedUser);
  
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Header logoutDialogOpen={logoutDialogOpen}
          setLogoutDialogOpen={setLogoutDialogOpen} />
        <LogoutDialog isOpen={logoutDialogOpen}
          setOpen={setLogoutDialogOpen}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
