import './App.css';
import Button from './Button.js';
import ShowExercises from './ShowExercises.js';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mvmt Break</h1>
      </header>
      <Button />

      <ShowExercises />
      <Form />
    </div>
  );
}

export default App;
