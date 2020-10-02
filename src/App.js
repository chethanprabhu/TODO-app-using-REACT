import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const onClickHandler = (e) => {
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={(e) => onClickHandler(e)}>Add TODO</button>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
