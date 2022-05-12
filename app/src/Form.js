import { useState } from 'react';
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [repCount, setRepCount] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  const handleRepCountChange = (e) => {
    setRepCount(e.target.value);
  }

  return (
    <form>
      <label htmlFor="name">Exercise Name:</label>
      <input id="name" type="text" name="name" value={name} 
        onChange={handleNameChange} />
      <label htmlFor="type">{type}</label>
      <input id="type" type="text" name="type" value={type} 
        onChange={handleTypeChange} />
      <input type="text" name="repCount" value={repCount} 
        onChange={handleRepCountChange} />
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
