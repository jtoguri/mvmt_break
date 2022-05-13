import './App.css';
import { useState } from 'react';
import GetExerciseButton from './GetExerciseButton.js';
import CompleteExerciseButton from './CompleteExerciseButton.js';
import ShowExercises from './ShowExercises.js';
import Form from './Form.js';
import Header from './Header.js';

function App() {
  const [randomExercise, setRandomExercise] = useState({});
  const [exerciseCompleted, setExerciseState] = useState(false);

  return (
    <div className="App">
      <Header />
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
