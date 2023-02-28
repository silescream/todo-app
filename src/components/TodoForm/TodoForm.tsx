import { useState } from 'react';
import { useAppDispatch } from '../../hook';
import { addTodos } from '../../store/todoSlice';
import './TodoForm.scss';


export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useAppDispatch();
    const handleAction = (e:any) => {
        e.preventDefault();
        dispatch(addTodos({title, description}));
        setTitle('');
        setDescription('');
      };


    return (
        <form className ="todo-form">
            <div className="todo-form__input">
                <label htmlFor="title">Title:</label>
                <input value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       id="title"
                       placeholder="Enter title" />
            </div>
            <div className="todo-form__input">
                <label htmlFor="description">Description:</label>
                <input  value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description" 
                        placeholder="Enter description" />
            </div>
            <button onClick ={(e) => handleAction(e)} className='todo-form__button'>Create</button>
        </form>
    );
}