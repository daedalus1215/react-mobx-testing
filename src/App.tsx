import React, { useEffect } from 'react';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import './App.css';
import { useStore } from './stores';
import { autorun, reaction } from 'mobx';
import { when } from 'q';

const App = () => {
  const { todos } = useStore();

  useEffect(() => {
    when(
      () => !appUI.todosVisible,
      () => {
        console.log('clean up!');
      }
    );

    return () => {};
  }, []);

  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    toggleTodoVisibility() {
      this.todosVisible = !this.todosVisible;
    },
  }));

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        {String(appUI.loading)}
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todosVisible ? '-' : '+'}</span>
          Todos (unfinished {todos.unfinishedTodos.length})
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
