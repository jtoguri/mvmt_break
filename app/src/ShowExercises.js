import axios from 'axios';
import { useState } from 'react';

function ShowExercises() {
  const [exercises, setExercises] = useState([]);

  const exerciseList = exercises.map((e) =>
    <li key={e._id}>
      {e.name}
    </li>
  );

  const handleClick = () => {
    if (exercises.length > 0) {
      return setExercises([]);
    }
    axios.get('/api').then(res => {
      return setExercises(res.data);
    })
  };

  return (
    <div style={{margin: 30}}>
      <button onClick={handleClick}>
        {exercises.length ? "Hide exercises" : "Show all exercises"}
      </button>

      {exercises.length > 0 && <ul>{exerciseList}</ul>} 
    </div>
  )
}

export default ShowExercises;
