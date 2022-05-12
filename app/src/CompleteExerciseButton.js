
function CompleteExerciseButton ({ 
  exercise, 
  setExercise, 
  completed,
  toggleCompletion }) {

  const handleClick = () => {
    if (completed) return;
    
    toggleCompletion(true);

    return;
  }
  
  return (
    <div>
      <button onClick={handleClick}>
        Complete Exercise
      </button>
      {completed && <p>Congrats! You completed {exercise.name}.</p>}
    </div>
  )
}

export default CompleteExerciseButton;
