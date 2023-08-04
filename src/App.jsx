import {useState} from "react";
import {v4 as uuidv4} from "uuid";


function App() {
    const [toDoList, setToDoList] = useState([
        {

            title: "Learn html",
            status: "Busy with it",
            priority: "This week",
            description: "I need to learn html for real this time",
            id: uuidv4()

        },
        {

            title: "Learn Javascript",
            status: "Need to start",
            priority: "This month",
            description: "This is gonna be hard, but need to.",
            id: uuidv4()

        }
    ])

    const [formState, setFormState] = useState({
        title: "",
        status: "",
        priority: "",
        description: "",
        id: 0
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }



    const handleSubmit = (e) => {
        e.preventDefault(
            setToDoList([...toDoList, {
                title: formState.title,
                status: formState.status,
                priority: formState.priority,
                description: formState.description,
                id: uuidv4()
            }]))

    }



    return (
        <>
            <h1>To Do App</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addtask">Title to do
                    <input
                        type="text"
                        value={formState.title}
                        id="addtask"
                        name="title"
                        placeholder="Add the title of your to-do"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="adddescription">Description
                    <input
                        type="text"
                        value={formState.description}
                        id="adddescription"
                        name="description"
                        placeholder="Add the description of your to-do"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="selectstatus">
                    Select status:
                    <select
                        id="selectstatus"
                        name="status"
                        value={formState.status}
                        onChange={handleChange}>
                        <option value="Done">Done</option>
                        <option value="Busy with it">Busy with it</option>
                        <option value="Need to start">Need to start</option>
                    </select>
                </label>

                <label htmlFor="selectpriority">
                    Select Priority
                    <select
                        id="selectpriority"
                        name="priority"
                        value={formState.priority}
                        onChange={handleChange}>
                        <option value="Today">Today</option>
                        <option value="This week">This week</option>
                        <option value="This month">This month</option>
                    </select>
                </label>
                <button type="submit">Add to your list</button>
            </form>

            <button type="button">High priority first</button>

            <section className="TodoList">
                <ul>
                    {toDoList.map((todo) => {
                        return <li key={todo.id}>{todo.title} {todo.description} {todo.status} {todo.priority}</li>
                    })}
                </ul>
            </section>



        </>
    )
}

export default App
