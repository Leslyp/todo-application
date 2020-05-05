import React from 'react';
import '../css/Todo.css';

const todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <li
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div className="button-container">
        <button className="button button--complete" onClick={() => completeTodo(index)}>
          <img className="icon" src={require('../../../assets/img/icon-check.png')} alt="Checkmark"/>
        </button>
        <button className="button button--remove" onClick={() => removeTodo(index)}>
          <img className="icon" src={require('../../../assets/img/icon-remove.png')} alt="Checkmark"/>
        </button>
      </div>
    </li>
  );
}

export default todo;
