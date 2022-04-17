import React, { useEffect } from 'react';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { observable } from 'mobx';
import './App.css';

function App() {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    *toggleTodoVisibility() {
      this.loading = true;
      yield new Promise(resolve => setTimeout(() => resolve(void 0), 1000));
      this.loading = false;
      this.todosVisible = !this.todosVisible;
    },
  }));


  useEffect(() => {
    console.log({loading: appUI.loading});
  }, [appUI.loading]);
  
  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        {String(appUI.loading)}
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
