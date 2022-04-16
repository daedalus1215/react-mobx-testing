import React from 'react';
import TodoStore from './stores/TodoStore';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import './App.css';

const todos = new TodoStore();

function App() {
  return (
    <div className="app">
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
