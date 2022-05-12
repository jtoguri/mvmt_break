import './App.css';
import { useState } from 'react';
import GetExerciseButton from './GetExerciseButton.js';
import CompleteExerciseButton from './CompleteExerciseButton.js';
import ShowExercises from './ShowExercises.js';
import Form from './Form.js';

function App() {
  const [randomExercise, setRandomExercise] = useState({});
  const [exerciseCompleted, setExerciseState] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Mvmt Break</h1>
      </header>
      <GetExerciseButton exercise={randomExercise} 
        setExercise={setRandomExercise}/>
      
      {Object.keys(randomExercise).length > 0 &&
        <CompleteExerciseButton exercise={randomExercise}
        setExercise={setRandomExercise} completed={exerciseCompleted} 
        toggleCompletion={setExerciseState} />
      }
      <ShowExercises />
      <Form />
    </div>
  );
}

export default App;
