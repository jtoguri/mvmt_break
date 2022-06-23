import { useState } from 'react';
import axios from 'axios';

import UserHistory from '../UserHistory/UserHistory';

export default function Profile() {
  const [history, setHistory] = useState([]);

  const handleClick = async () => {
    const token = localStorage.getItem('token');
    const userHistory = await axios.get(`/api/history/${token}`);    
    console.log(userHistory.data);
    setHistory(userHistory.data);
  }

  return (
    <div >
      <h1>Profile</h1>      
      <button onClick={handleClick}>Show History</button>
      {history.length > 0 && <UserHistory history={history} />}
    </div>
  );
}
