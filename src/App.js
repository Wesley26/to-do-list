import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo }) => 
  <div className="todo">
    {todo.text}
  </div> //JSX element

function TodoForm({ addTodo }) {

  // value - names the state
  // setValue - sets the state
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) {
      return; // if there is no value, end here.
    };
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  // todos - names the state
  // setTodos - sets the state
  const [todos, setTodos] = useState([  //functional component
    { text: "Plan how to create a house." },
    { text: "Write the program for an automated house-building device." },
    { text: "Plan how to create a todo list." },
    { text: "Play some video games." },
    { text: "Clean up the bedroom" },
    { text: "Empty the trash." }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

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
        <TodoForm addToDo={addTodo} />
      </div>
    </div>
  );
}

export default App;
