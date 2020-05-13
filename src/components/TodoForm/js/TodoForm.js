import React, { useState } from 'react';
import '../css/TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (!value || value.trim() === '') return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="item">Add Todo:</label>
      <input
        id="item"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
