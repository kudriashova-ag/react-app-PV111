import React, { useState } from 'react';

const AddToDo = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);


  const handleAdd = () => { 
    if (title.length === 0) { 
      setError('Title is required');
      return;
    }
    addTask(title);
    setError(null);
    setTitle('');
  }

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>add</button>

      {error ? <div>{ error }</div> : ''}
    </div>
  );
};

export default AddToDo;