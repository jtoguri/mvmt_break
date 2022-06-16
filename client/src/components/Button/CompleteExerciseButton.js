import './Button.css';
import axios from 'axios';

function CompleteExerciseButton ({ 
  exercise, 
  completed,
  setCompleted }) {

  const handleClick = () => {
    if (completed) {
      console.log("already completed")
      return;
    }
    
    const date = Date.now().toString();
    const user = localStorage.getItem('token');

    const history = {
      user, 
      date,
      exercise: { ...exercise }
    }

    console.log(history);

    /*axios.post('/history', {
      date,
      ...exercise
    });*/
    setCompleted(true);

    return;
  }
  
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Complete Exercise
      </button>
      {completed && <p>Congrats! You completed {exercise.name}.</p>}
    </div>
  )
}

export default CompleteExerciseButton;
