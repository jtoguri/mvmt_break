import './App.css';
import { useState } from 'react';
//import GetExerciseButton from './GetExerciseButton.js';
import Home from '../Home/Home';
//import CompleteExerciseButton from '../Button/CompleteExerciseButton';
//import ShowExercises from '../ShowExercises.js';
//import Form from './Form.js';
import Header from '../Header/Header';
import About from '../About/About';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
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
      <Header session={session} setSession={setSession} />
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
