
function Button() {
  const handleClick = () => {
    alert("Get new exercise");
  }
  return (
    <button onClick={handleClick}>
      Generate new exercise
    </button>
  );
}

export default Button;
