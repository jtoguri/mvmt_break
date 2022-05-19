import './App.css';
import { useState } from 'react';
//import GetExerciseButton from './GetExerciseButton.js';
import Home from './Home';
import CompleteExerciseButton from './CompleteExerciseButton.js';
import ShowExercises from './ShowExercises.js';
import Form from './Form.js';
import Header from './Header.js';
import About from './About';
import Register from './Register';
import Login from './Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  //const [randomExercise, setRandomExercise] = useState({});
  //const [exerciseCompleted, setExerciseState] = useState(false);

  const storedJwt = localStorage.getItem('token');
  const [session, setSession] = useState(storedJwt || null);

  return (
    <div className="App">
      <Header session={session} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login session={session}
            setSession={setSession}/>} />

        {/*{Object.keys(randomExercise).length > 0 &&
          <CompleteExerciseButton exercise={randomExercise}
          setExercise={setRandomExercise} completed={exerciseCompleted} 
          toggleCompletion={setExerciseState} />
        }
        <ShowExercises />
        <Form />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
