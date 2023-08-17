/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]); // title, detail
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);

  const addTodo = (title, detail) => {
    setTodos((prev) => [
      ...prev,
      {
        title,
        detail,
      },
    ]);
  };

  const updateTodo = (title, detail, index) => {
    const temp = [...todos];
    temp[index] = {
      title,
      detail,
    };
    setTodos(temp);
    setSelectedTodoIndex(null);
  };

  const deleteTodo = (index) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodoIndex,
        setSelectedTodoIndex,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
