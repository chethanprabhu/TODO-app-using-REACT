import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from "./components/Todo"
import { Button, FormControl, InputLabel, Input } from  "@material-ui/core";
import firebaseDB from "./firebase"
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    firebaseDB.collection('to-do').orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({id: doc.id, todo: doc.data().todo})))
    });
  }, [])

  const onClickHandler = (e) => {
    e.preventDefault();
    firebaseDB.collection('to-do').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
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
        {todos.map(todo => <Todo key={todos[todo]} todo={todo}/>)}
      </ul>
    </div>
  );
}

export default App;
