import { useContext } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { UserContext } from '../UserContext';

import './Button.css';
import axios from 'axios';

export default function CompleteExerciseButton ({ 
  exercise, 
  completed,
  setCompleted }) {
  
  const { user } = useContext(UserContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = async () => {

    if (!user) {
      navigate("/login", { replace: true, state: {from: location, exercise} });
      return;
    }

    if (completed) {
      console.log("already completed")
      return;
    }
    
    const date = new Date(Date.now()).toISOString();
    const token = localStorage.getItem('token');

    const history = {
      token, 
      date,
      exercise: { ...exercise }
    };

    const res = await axios.post('/api/history', history);

    if (res.data === true) {
      setCompleted(true);
    }

    return;
  }
  
  return (
    <div>
      {!user && <p>Please sign in to save the exercise in your history</p>}
      <button className="btn" onClick={handleClick}>
        Complete Exercise
      </button>
      {completed && <p>Congrats! You completed {exercise.name}.</p>}
    </div>
  )
}
