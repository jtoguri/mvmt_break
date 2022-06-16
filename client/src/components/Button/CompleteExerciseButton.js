import './Button.css';

function CompleteExerciseButton ({ 
  exercise, 
  completed,
  setCompleted }) {

  const handleClick = () => {
    if (completed) {
      console.log("already completed")
      return;
    }
    
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
