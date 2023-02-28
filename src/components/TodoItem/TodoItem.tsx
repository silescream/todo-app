
import './TodoItem.scss';

export const TodoItem = () => {
    return (
       <div className="todo-list">
        <div className="todo-list__item">1.</div>
        <div className="todo-list__item">Make Bugfix Sucksicks</div>
        <div className="todo-list__item">Lorem ipsum dolor sit amet consectetur</div>
        <div className="todo-list__item"><input type="checkbox"/></div>
       </div>
    );
}