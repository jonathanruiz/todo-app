import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  // * Declare the todo hook, with default todo values
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Learn Laravel",
      isCompleted: false,
      isEditing: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      isEditing: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const undoComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

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
