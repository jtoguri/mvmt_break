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
    axios.get('/api').then(res => {
      return setExercises(res.data);
    })
  };

  return (
    <div style={{margin: 30}}>
      <button onClick={handleClick}>
        Show all exercises
      </button>

      {exercises && <ul>{exerciseList}</ul>} 
    </div>
  )
}

export default ShowExercises;
