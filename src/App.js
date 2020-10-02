import React, { useState } from 'react';
import './App.css';
import { Button } from  "@material-ui/core";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <Button disabled={!input} onClick={(e) => onClickHandler(e)} variant="contained" color="primary">
          Add TODO
        </Button>
      </form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
