import React, { useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 10px;
  }

  .button {
    margin: 0 5px;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  .complete {
    background-color: #76ff03;
  }

  .remove {
    background-color: #f44336;
  }
`;

const Todo = ({ todo, index, completeTodo, editTodo, removeTodo }) => {
  // * Declare the edit hook with a default of the original text
  const [edit, setEdit] = useState(todo.text);

  const handleSubmit = e => {
    e.preventDefault();
    if (!edit) return;
    todo.text = edit;
    todo.isEditing = false;
    setEdit("");
  };

  return (
    <TodoContainer
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            defaultValue={todo.text}
            onChange={e => setEdit(e.target.value)}
          />
        </form>
      ) : (
        <p onClick={() => editTodo(index)}>{todo.text}</p>
      )}
      <div>
        <button className="button complete" onClick={() => completeTodo(index)}>
          Done
        </button>
        <button className="button edit" onClick={() => editTodo(index)}>
          Edit
        </button>
        <button className="button remove" onClick={() => removeTodo(index)}>
          X
        </button>
      </div>
    </TodoContainer>
  );
};

export default Todo;
