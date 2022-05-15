import Button from './GetExerciseButton';
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
        <ul>
          <li>exercise: {randomExercise.name}</li>
          <li>type: {randomExercise.type}</li>
          {randomExercise.defaultReps &&
            <li>reps: {randomExercise.defaultReps}</li>}
          {randomExercise.defaultTime &&
            <li>duration: {randomExercise.defaultTime}</li>}
        </ul>}
    </div>
  );
}

export default Home;
