import { useAppDispatch } from "../../hook";
import { closeModal } from "../../store/modalSlice";
import { toggleComplete } from "../../store/todoSlice";
import "./Modal.scss";

interface ModalProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  title,
  description,
  completed,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="modal">
      <div className="modal__title">{title}</div>
      <div className="modal__section-name">Description</div>
      <div className="modal__description">{description}</div>
      <div className="modal__status">
        Status:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
      </div>
      <button className="modal__close" onClick={() => dispatch(closeModal())}>
        Close
      </button>
    </div>
  );
};
