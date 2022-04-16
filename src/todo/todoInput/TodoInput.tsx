import { ChangeEvent, useState } from 'react';
import TodoStore from '../../stores/TodoStore';

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo('');
  };

  return (
    <>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}></button>
    </>
  );
};

export default TodoInput;