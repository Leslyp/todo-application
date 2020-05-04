import React, { useState } from 'react'; // useState: Hook that lets you add React state to function components
import '../css/TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // setValue: Hook that takes variable to create in state and function to update it

  const submitHandler = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
