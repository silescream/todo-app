import { TodoItem } from "../TodoItem";

import './TodoTable.scss';

export const TodoTable = () => {
    return (
        <div className="todo-table">
            <div className="todo-table__header">
                <div className="todo-table__title">ID</div>
                <div className="todo-table__title">Title</div>
                <div className="todo-table__title">Description</div>
                <div className="todo-table__title">Status</div>
            </div>
            <TodoItem />
        </div>
    );
}