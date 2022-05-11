import './App.css';
import Button from './Button.js';
import ShowExercises from './ShowExercises.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mvmt Break</h1>
      </header>
      <Button />

      <ShowExercises />
    </div>
  );
}

export default App;
