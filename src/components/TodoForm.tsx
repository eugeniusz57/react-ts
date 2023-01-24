import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        id="title"
        placeholder="Enter name"
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        Enter name
      </label>
    </div>
  );
};
