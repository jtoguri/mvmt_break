import Button from '../Button/GetExerciseButton';
import './Home.css';
import {useState} from 'react';

function Home () {
  const [randomExercise, setRandomExercise] = useState({});

  return (
    <div>
      <h2>Welcome to MVMT Break!</h2>
      <p>Press the Take a Break button below to generate a random
      exercise from our exercise database.</p>

      <Button exercise={randomExercise} setExercise={setRandomExercise}/>

      {Object.keys(randomExercise).length > 0 &&
        <ul className="exercise-info">
          <li><span>exercise:</span>  {randomExercise.name}</li>
          <li><span>type:</span> {randomExercise.type}</li>
          {randomExercise.defaultReps &&
            <li><span>reps:</span> {randomExercise.defaultReps}</li>}
          {randomExercise.defaultTime &&
            <li><span>duration:</span> {randomExercise.defaultTime}</li>}
        </ul>}
    </div>
  );
}

export default Home;
