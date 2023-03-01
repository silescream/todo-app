import { useAppDispatch } from "../../hook";
import { toggleComplete } from "../../store/todoSlice";
import { openModal } from "../../store/modalSlice";
import "./TodoItem.scss";

interface TodoItemProps {
  idx: number;
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  idx,
  id,
  title,
  description,
  completed,
}) => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(openModal({ id }));
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="todo-list" onClick={() => handleModal()}>
      <div className="todo-list__item">{idx + 1}.</div>
      <div className="todo-list__item">{title}</div>
      <div className="todo-list__item">{description}</div>
      <div className="todo-list__item">
        <input
          type="checkbox"
          onClick={(e) => handleCheckboxClick(e)}
          onChange={() => dispatch(toggleComplete({ id }))}
          checked={completed}
        />
      </div>
    </div>
  );
};
