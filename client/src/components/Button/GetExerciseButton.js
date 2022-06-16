//import { useState } from 'react';
import axios from 'axios';
import './Button.css';

function GetExerciseButton({ exercise, setExercise }) {

  const handleClick = () => {
    axios.get('/api/randomExercise').then(res => {
      console.log(res.data)
      return setExercise(res.data);
    });
  };

  return (
    <div>
      <button className="btn"  onClick={handleClick}>
        Take a Break
      </button>
    </div>
  );
}

export default GetExerciseButton;
