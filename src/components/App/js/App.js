import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import '../css/App.css';
import Todo from '../../Todo/js/Todo';
import TodoForm from '../../TodoForm/js/TodoForm';

const App = ({ todoList, completeTodo, removeTodo, addTodo }) => {
  
  let todos = null;
  
  if (todoList) {
    todos = (
      <ul className="todo-list">
        {todoList && todoList.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </ul>
    )
  }

  return (
    <div className="app">
      <div className="bg">
        {todos}
      </div>
    </div>
  );
}

// setting up subscription
const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

// setting up action
const mapDispatchToProps = dispatch => {
  return {
    removeTodo: (id) => dispatch({type: actionTypes.REMOVE_TODO, todoId: id}),
    addTodo: (value) => dispatch({type: actionTypes.ADD_TODO, todoValue: value}),
    completeTodo: (index) => dispatch({type: actionTypes.COMPLETE_TODO, todoIndex: index}),
  };
};

// setting up connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
