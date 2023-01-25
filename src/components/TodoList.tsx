import React from 'react';
import { ITodo } from '../types/types';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onDelete(id: number): void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p className="center">No event</p>;
  }
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  return onToggle(todo.id);
                }}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onDelete(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
