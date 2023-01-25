import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './types/types';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    console.log('saved', saved);

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    console.log('Add', title);
    setTodos(prev => [newTodo, ...prev]);
  };
  console.log('Todos', todos);

  const hadleTogle = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    console.log('Todos togle= ', todos);
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onDelete={handleDelete} onToggle={hadleTogle} />
      </div>
    </>
  );
};

export default App;
