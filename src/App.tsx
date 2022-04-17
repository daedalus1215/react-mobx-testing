import React, { useState } from 'react';
import TodoStore from './stores/TodoStore';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import './App.css';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { observable } from 'mobx';

function App() {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    toggleTodoVisibility() {
      appUI.todosVisible = !appUI.todosVisible;
    },
  }));

  const todosVisible = observable.box(true);
  todosVisible.observe_(({ newValue }) => {
    console.log('the new value is', newValue);
  });
  todosVisible.set(false);
  todosVisible.set(true);

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todosVisible ? '-' : '+'}</span>
          Todos
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
}

export default observer(App);
