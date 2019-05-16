import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  // ~ Add Local storage to this app so that it could keep
  // ~ track of past todos when the site is revisted

  // Get the todos when the page loads
  // const initTodos = () => window.localStorage.getItem("todos");

  // Declare the todo hook, with default todo values
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Learn about Laravel",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Learn about Local Storage",
      isCompleted: false,
      isEditing: false
    }
  ]);

  useEffect(() => {
    // Set up local storage
    return () => window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo to list
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // Strike through a completed todo
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // Undo strike through on a completed todo
  const undoComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  // Edit the text of a todo
  const editTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <AppContainer>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            undoComplete={undoComplete}
            editTodo={editTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </AppContainer>
  );
};

export default App;
