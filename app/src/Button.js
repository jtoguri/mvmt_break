import { useState } from 'react';
import axios from 'axios';

function Button() {
  const [exercise, setExercise] = useState({});

  const handleClick = () => {
    axios.get('/api/randomExercise').then(res => {
      return setExercise(res.data);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        Show random exercise
      </button>
      {Object.keys(exercise).length > 0 &&  
        <div>
          <span>exercise: {exercise.name}</span>
        </div>}
    </div>
  );
}

export default Button;
