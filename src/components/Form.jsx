/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import TodoContext from "../contexts/TodoContext";

function Form() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const { addTodo, selectedTodoIndex, todos, updateTodo } =
    useContext(TodoContext);

  const handleSubmit = () => {
    if (selectedTodoIndex != null) {
      updateTodo(title, detail, selectedTodoIndex);
      reset();
      return;
    }
    addTodo(title, detail);
    reset();
  };

  const reset = () => {
    setTitle("");
    setDetail("");
  };

  useEffect(() => {
    if (selectedTodoIndex != null) {
      const todo = todos[selectedTodoIndex];
      setTitle(todo.title);
      setDetail(todo.detail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTodoIndex]);

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Detail"
        rows={4}
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {selectedTodoIndex != null ? "Edit Todo" : "Add Todo"}
      </button>
    </div>
  );
}

export default Form;
