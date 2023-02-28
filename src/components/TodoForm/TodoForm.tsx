
import './TodoForm.scss';

export const TodoForm = () => {
    return (
        <form className ="todo-form">
            <div className="todo-form__input">
                <label htmlFor="title">Title:</label>
                <input type="text" name= "title" id="title" placeholder="Enter title" />
            </div>
            <div className="todo-form__input">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" placeholder="Enter description" />
            </div>
            <button className='todo-form__button'>Create</button>
        </form>
    );
}