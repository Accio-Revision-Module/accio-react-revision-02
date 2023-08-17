/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoComponent from "./TodoComponent";
import TodoContext from "../contexts/TodoContext";

function List() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="list">
      {todos.length == 0 && <p>No todos yet.</p>}
      {todos.map((e, i) => (
        <TodoComponent key={i} title={e.title} detail={e.detail} index={i} />
      ))}
    </div>
  );
}

export default List;
