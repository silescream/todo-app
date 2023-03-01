import { TodoItem } from "../TodoItem";
import { useAppSelector } from "../../hook";

import "./TodoTable.scss";
import { Modal } from "../Modal";

export const TodoTable = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const modalId = useAppSelector((state) => state.modal.id);
  const [selectedTodo] = todos.filter((item) => {
    return item.id === modalId;
  });

  return (
    <div className="todo-table">
      <div className="todo-table__header">
        <div className="todo-table__title">ID</div>
        <div className="todo-table__title">Title</div>
        <div className="todo-table__title">Description</div>
        <div className="todo-table__title">Status</div>
      </div>
      {todos?.map((todo, idx) => (
        <TodoItem key={todo.id} idx={idx} {...todo} />
      ))}
      {isModalOpen ? (
        <div className="overlay">
          <Modal
            id={selectedTodo.id}
            completed={selectedTodo.completed}
            title={selectedTodo.title}
            description={selectedTodo.description}
          />{" "}
        </div>
      ) : null}
    </div>
  );
};
