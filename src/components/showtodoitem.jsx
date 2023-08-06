import trash from "../assets/trash-duotone.svg";


const TodoItem = ({ todo, toggleCompleted, deleteTask }) => {
    return (
        <li key={todo.id}>
            <input type="checkbox" onClick={() => toggleCompleted(todo.id)} />
            <span className={todo.status ? 'checked' : 'notchecked'}>{todo.title}</span>
            <span>{todo.priority}</span>
            <button type="button" onClick={() => deleteTask(todo.id)}>
                <img src={trash} alt='trashicon' />
            </button>
        </li>
    );
};

export default TodoItem