import React, { useState } from 'react';
import TodoStore from './stores/TodoStore';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import './App.css';
import styles from './App.module.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

function App() {
  const [appUI] = useState(() => observable({
    todosVisible: true,
    toggleTodoVisibility() {
      this.todosVisible = !this.todosVisible;
    }
  }));

  const handleClick = () => appUI.toggleTodoVisibility();

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={handleClick}>
          <span>{appUI.todosVisible ? '-' : '+'}</span>
          Todos
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
}

export default observer(App);
