import React, { useState } from 'react';
import '../css/App.css';
import Todo from '../../Todo/js/Todo';
import TodoForm from '../../TodoForm/js/TodoForm';

const App = props => {
  const [todos, setTodos] = useState([ //[] = deconstructing
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodoHandler = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodoHandler = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodoHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
            completeTodo={completeTodoHandler}
            removeTodo={removeTodoHandler}
          />
        ))}
        <TodoForm addTodo={addTodoHandler} />
      </div>
    </div>
  );
}

export default App;
