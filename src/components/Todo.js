import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 10px;
  }

  .button {
    /* background: none; */
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

export default function Todo({
  todo,
  index,
  completeTodo,
  editTodo,
  removeTodo
}) {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("You hit enter");
    todo.isEditing = false;
    console.table(todo);
  };

  return (
    <TodoContainer
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.isEditing ? (
        <form onSubmit={handleSubmit}>
          <input defaultValue={todo.text} />
        </form>
      ) : (
        <p>{todo.text}</p>
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
}
