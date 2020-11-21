import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const handleClick = (event) => {
    //fires up click function
    event.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clear input
  }


  return (
    <div className="App">
      <h1>Hello, I'm a React Developer💥</h1>
  
      <form>
        <FormControl>
          <InputLabel>✅Write Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={handleClick} variant="contained" color="primary" disableElevation>
          Add Todo
        </Button>
      </form>

      <ul>
       {todos.map(todo => (
        <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
