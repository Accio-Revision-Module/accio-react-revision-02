import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

/* eslint-disable react/prop-types */
function TodoComponent({ title, detail, index }) {
  const { deleteTodo, setSelectedTodoIndex } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleEdit = () => {
    setSelectedTodoIndex(index);
  };

  return (
    <div className="todo">
      <h2>{title ?? "Title"}</h2>
      <p>{detail ?? "Description"}</p>
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoComponent;
