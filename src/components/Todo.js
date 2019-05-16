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
`;

const Complete = styled.button`
  background-color: #76ff03;
`;

const Undo = styled.button`
  background-color: #ffab40;
`;

const Edit = styled.button`
  background-color: #d8d8d8;
`;

const Remove = styled.button`
  background-color: #f44336;
`;

const Todo = ({
  todo,
  index,
  completeTodo,
  undoComplete,
  editTodo,
  removeTodo
}) => {
  // * Declare the edit hook with a default of the original text
  const [edit, setEdit] = useState("");

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
            type="text"
            defaultValue={todo.text}
            onChange={e => setEdit(e.target.value)}
          />
        </form>
      ) : (
        <p onClick={() => editTodo(index)}>{todo.text}</p>
      )}
      <div>
        {// If todo is completed, then show undo button, otherwise
        // show the done button
        todo.isCompleted ? (
          <Undo className="button undo" onClick={() => undoComplete(index)}>
            Undo
          </Undo>
        ) : (
          <Complete
            className="button complete"
            onClick={() => completeTodo(index)}
          >
            Done
          </Complete>
        )}

        <Edit className="button edit" onClick={() => editTodo(index)}>
          Edit
        </Edit>
        <Remove className="button remove" onClick={() => removeTodo(index)}>
          X
        </Remove>
      </div>
    </TodoContainer>
  );
};

export default Todo;
