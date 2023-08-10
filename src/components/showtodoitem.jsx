import trash from "../assets/trash-duotone.svg";
import {NavLink} from "react-router-dom";



const TodoItem = ({ todo, toggleCompleted, deleteTask}) => {

    return (
        <li key={todo.id}>
            <input type="checkbox" onClick={() => toggleCompleted(todo.id)} />
            <span className={todo.completed ? 'checked' : 'notchecked'}><NavLink to={`/details/${todo.id}`}>{todo.title}</NavLink></span>
            <span className={todo.priority === "1" ? 'high' : 'default'}></span>
            <span className={todo.priority === "2" ? 'medium' : 'default'}></span>
            <span className={todo.priority === "3" ? 'low' : 'default'}></span>
            <button type="button" onClick={() => deleteTask(todo.id)}>
                <img src={trash} alt='trashicon' />
            </button>
        </li>
    );
};

export default TodoItem