import axios from 'axios';

function Button() {
  const handleClick = async () => {
    try {
      const response = await axios.get('/api');
      const body = response.data;
      alert(body);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button onClick={handleClick}>
      Generate new exercise
    </button>
  );
}

export default Button;
