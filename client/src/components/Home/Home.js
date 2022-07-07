import GetExerciseButton from '../Button/GetExerciseButton';
import CompleteExerciseButton from '../Button/CompleteExerciseButton';
import './Home.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home () {
  const [randomExercise, setRandomExercise] = useState({});
  const [completed, setCompleted] = useState(false);

  const location = useLocation();

  useEffect(() => {

    if (location.state) {
      setRandomExercise(location.state);
      window.history.replaceState(null, '');
    }

  }, [ location ]);
  
  return (
    <div>
      <h2>Welcome to MVMT Break!</h2>
      <p>Press the Take a Break button below to generate a random
      exercise from our exercise database.</p>

      <GetExerciseButton exercise={randomExercise} 
        setExercise={setRandomExercise} setCompleted={setCompleted} />

      {Object.keys(randomExercise).length > 0 &&
        <ul className="exercise-info">
          <li><span>exercise:</span>  {randomExercise.name}</li>
          <li><span>type:</span> {randomExercise.type}</li>
          {randomExercise.defaultReps &&
            <li><span>reps:</span> {randomExercise.defaultReps}</li>}
          {randomExercise.defaultTime &&
            <li><span>duration:</span> {randomExercise.defaultTime}</li>}
        </ul>}

      {Object.keys(randomExercise).length > 0 && 
        <CompleteExerciseButton exercise={randomExercise}
          completed={completed} setCompleted={setCompleted} />}
    </div>
  );
}

export default Home;
