import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // * Declare the value hook, with a default of an empty string
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a todo item"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
