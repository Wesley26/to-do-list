//import React from 'react';
import React, { useState } from 'react';
import Todos from "./components/Todos.js";
import './App.css';


function App() {
  // todos - names the state
  // setTodos - sets the state
  const [todos, setTodos] = useState([  //functional component
    { text: "Plan how to create a house." },
    { text: "Write the program for an automated house-building device." },
    { text: "Plan how to create a todo list." },
    { text: "Play some video games." },
    { text: "Clean up the bedroom" },
    { text: "Empty the trash." },

  ]);

  const Todo = ({ todo }) => 
  <div className="todo">
    {todo.text}
  </div>

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
