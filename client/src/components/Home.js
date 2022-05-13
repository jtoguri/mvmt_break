import Button from './GetExerciseButton';
import {useState} from 'react';

function Home () {
  const [randomExercise, setRandomExercise] = useState({});

  return (
    <div>
      <p>Press the Take a Break button below to generate a random
      exercise from our exercise database.</p>

      <Button exercise={randomExercise} setExercise={setRandomExercise}/>
    </div>
  );
}

export default Home;
