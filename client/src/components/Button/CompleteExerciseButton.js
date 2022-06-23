import './Button.css';
import axios from 'axios';

function CompleteExerciseButton ({ 
  exercise, 
  completed,
  setCompleted }) {

  const handleClick = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Only registered users can save an exercise to their history")
      return;
    }

    if (completed) {
      console.log("already completed")
      return;
    }
    
    const date = Date.now();

    const history = {
      token, 
      date,
      exercise: { ...exercise }
    };

    /*const config = {
      headers: {
        'Authorization': `bearer ${user}`
      }
    }*/

    console.log(history);

    const res = await axios.post('/api/history', history);

    if (res.data === true) {
      setCompleted(true);
    }

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
