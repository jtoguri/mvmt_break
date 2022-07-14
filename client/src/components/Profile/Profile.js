import { useState, useContext, useEffect } from 'react';

import axios from 'axios';

import UserHistory from '../UserHistory/UserHistory';

import { UserContext } from '../UserContext';

export default function Profile() {
  const [history, setHistory] = useState([]);
  const [username, setUsername] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) return; 

    setUsername(user.username.charAt(0).toUpperCase() +
      user.username.slice(1));

    const token = localStorage.getItem('token');
    
    const fetchData = async (token) => {
      const apiURL = "https://mvmt-break-api.herokuapp.com";
      const requestURL = apiURL + `/api/users/history/${token}`;

      const userHistory = await axios.get(requestURL);
      setHistory(userHistory.data);
    } 

    fetchData(token);

  }, [])

  return (
    <div>
      {!user && <h3>Please register/login to view your profile</h3>}
      {user && <h1>{username}'s Profile</h1>}
      {history.length > 0 && <UserHistory history={history} />}
    </div>);
}
