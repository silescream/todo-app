import { useState } from "react";
import { useAppDispatch } from "../../hook";
import { addTodos } from "../../store/todoSlice";
import "./TodoForm.scss";

interface ErrorType {
  title: string | null;
  description: string | null;
}

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<ErrorType>({
    title: null,
    description: null,
  });

  const dispatch = useAppDispatch();

  const handleAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors: any = {
      title: null,
      description: null,
    };

    if (title.trim() === "") {
      errors.title = "Title is required";
    }
    if (description.trim() === "") {
      errors.description = "Description is required";
    }

    if (errors.title || errors.description) {
      setErrors(errors);
      return;
    }

    dispatch(addTodos({ title, description }));
    setTitle("");
    setDescription("");
    setErrors({
      title: null,
      description: null,
    });
  };

  return (
    <form className="todo-form" onSubmit={handleAction}>
      <div className="todo-form__input">
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="Enter title"
        />
        {errors.title && (
          <span className="todo-form__error">{errors.title}</span>
        )}
      </div>
      <div className="todo-form__input">
        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          placeholder="Enter description"
        />
        {errors.description && (
          <span className="todo-form__error">{errors.description}</span>
        )}
      </div>
      <button className="todo-form__button">Create</button>
    </form>
  );
};
