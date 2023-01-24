import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './types/types';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    console.log('Add', title);
    setTodos(prev => [newTodo, ...prev]);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
