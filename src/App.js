import React, { useState } from 'react';
import './App.css';

/**
const Todo = ({ todo }) => 
  <div className="todo">
    {todo.text}
  </div> //JSX element
*/

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

function Todo({ todo, index, completeTodo}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete Item</button>
      </div>
    </div> //JSX element
  );
}

function App() {
  // todos - names the state
  // setTodos - sets the state
  const [todos, setTodos] = useState([  //functional component
    { text: "Plan how to create a house.", //text object
      isCompleted: false  //boolean object to determine if completed or not
    },
    { text: "Write the program for an automated house-building device.",
      isCompleted: false 
    },
    { text: "Plan how to create a todo list.",
      isCompleted: false 
    },
    { text: "Play some video games.",
      isCompleted: false 
    },
    { text: "Clean up the bedroom",
      isCompleted: false 
    },
    { text: "Empty the trash.",
      isCompleted: false 
    }
  ]);

  const addTodo = text => { //adds a new todo item with text
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => { //completes todo item list
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
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
            completeTodo={completeTodo}
          />
        ))}
      <div className="todo-list">
        <TodoForm addToDo={addTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;
