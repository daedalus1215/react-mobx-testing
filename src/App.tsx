import React, { useState } from 'react';
import TodoStore from './stores/TodoStore';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import './App.css';
import styles from './App.module.css';

function App() {
  const [todosVisible, setTodosVisible] = useState(true);

  const handleClick = () => {
    setTodosVisible(state => !state);
  };

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={handleClick}>
          <span>{todosVisible ? '-' : '+'}</span>
          Todos
        </h2>
        {todosVisible && <TodoList />}
      </div>
    </div>
  );
}

export default App;
