import React, { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    //fires up click function
    event.preventDefault();
    setTodos([...todos, input]);
    setInput(''); // clear input
    console.log(todos);
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
