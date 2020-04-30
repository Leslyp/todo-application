import React, { useState } from 'react';
import '../css/TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

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
