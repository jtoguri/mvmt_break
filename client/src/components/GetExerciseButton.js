//import { useState } from 'react';
import axios from 'axios';
import './GetExerciseButton.css';

function GetExerciseButton({ exercise, setExercise }) {

  const handleClick = () => {
    axios.get('/api/randomExercise').then(res => {
      return setExercise(res.data);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        Take a Break
      </button>
      {Object.keys(exercise).length > 0 &&  
        <div>
          <span>exercise: {exercise.name}</span>
        </div>}
    </div>
  );
}

export default GetExerciseButton;
