import React from 'react';
import TodoInput from './todo/todoInput/TodoInput';
import TodoList from './todo/todoList/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import store, { useStore } from './stores';
import './App.css';

const App = observer(({ todos }: { todos: typeof store.todos }) => {
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
});

const AppWrapper = () => {
  const { todos } = useStore();

  return <App todos={todos} />;
};

export { App };
export default AppWrapper;
