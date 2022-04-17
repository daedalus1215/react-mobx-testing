import React from 'react';
import TodoStore from './stores/TodoStore';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import './App.css';

const todos = TodoStore();

function App() {
  return (
    <div className="app">
      <TodoInput />
      <TodoList/>
    </div>
  );
}

export default App;
