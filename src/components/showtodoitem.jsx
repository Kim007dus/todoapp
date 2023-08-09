import trash from "../assets/trash-duotone.svg";


const TodoItem = ({ todo, toggleCompleted, deleteTask}) => {
    return (
        <li key={todo.id}>
            <input type="checkbox" onClick={() => toggleCompleted(todo.id)} />
            <span className={todo.status ? 'checked' : 'notchecked'}>{todo.title}</span>
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