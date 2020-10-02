import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from  "@material-ui/core";

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
        <FormControl style={{display: "inline-block"}}>
          <InputLabel>Enter a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)}/>
        </FormControl>

        <Button type="submit" disabled={!input} onClick={(e) => onClickHandler(e)} variant="contained" color="primary"> Add TODO </Button>
      </form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
