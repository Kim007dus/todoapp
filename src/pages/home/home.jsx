import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import Buttons from "../../components/buttons.jsx";
import TodoItem from "../../components/showtodoitem.jsx";
import arrows from '../../assets/arrows-down-up-duotone.svg'
import Navigation from "../../components/navigation.jsx";
import Footer from "../../components/footer.jsx";
import sortTasksCompleted from "../../helpers/sortTasksCompleted.js";
import sortTasksPriority from "../../helpers/sortTasksPriority.js";
import generateNewSortTypePriority from "../../helpers/generateNewSortTypePriority.js";
import generateNewSortTypeCompleted from "../../helpers/generateNewSortTypeCompleted.js";

function App() {
    const [toDoList, setToDoList] = useState([
        {

            title: "Learn html",
            status: false,
            priority: "3",
            description: "I need to learn html for real this time",
            id: uuidv4()

        },
        {

            title: "Learn Javascript",
            status: false,
            priority: "1",
            description: "This is gonna be hard, but need to.",
            id: uuidv4()

        }
    ])

    const [formState, setFormState] = useState({
        title: "",
        status: false,
        priority: "1",
        description: "",
        id: 0
    })
    const [activeSortType, setActiveSortType] = useState('');


    function handleChange(e) {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formState.title === "") {
            return alert("❌ Please add the title of you to do...")
        } else {
            setToDoList([...toDoList, {
                title: formState.title,
                status: formState.status,
                priority: formState.priority,
                description: formState.description,
                id: uuidv4()
            }])
        }
        setFormState({title: "", status: false, priority: "1", description: "", id: 0})

    }

    function deleteTask(idParam) {
        setToDoList(toDoList => {
            return toDoList.filter((todo) => (todo.id !== idParam))
        })
    }

    function toggleCompleted(idParam) {
        setToDoList(toDoList.map((todo) =>
            todo.id === idParam ? {...todo, status: !todo.status} : todo)
        )
    }

    function sortPriority () {
        const newSortType = generateNewSortTypePriority(activeSortType);
        const sortedTodos = sortTasksPriority(newSortType, toDoList);
        setToDoList(sortedTodos);
        setActiveSortType(newSortType);
    }

    function sortCompleted () {
        const newSortType = generateNewSortTypeCompleted(activeSortType);
        const sortedTodos = sortTasksCompleted(newSortType, toDoList);
        setToDoList(sortedTodos);
        setActiveSortType(newSortType);

    }

    return (
        <>
            <Navigation/>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="addtask">Title
                        <input
                            type="text"
                            maxLength={20}
                            value={formState.title}
                            id="addtask"
                            name="title"
                            placeholder="Add the title here"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="adddescription">Description
                        <input
                            type="text"
                            maxLength={30}
                            value={formState.description}
                            id="adddescription"
                            name="description"
                            placeholder="Add the description here"
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="selectpriority">
                        Priority
                        <select
                            id="selectpriority"
                            name="priority"
                            value={formState.priority}
                            onChange={handleChange}>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </label>
                    <button className="button" type="submit">Add</button>
                </form>
                <section className="buttonsection">
                    <Buttons
                        toggleTasks={() => sortPriority()}
                        buttontext="Sort on priority"
                        image={arrows}
                    />
                    <Buttons
                        toggleTasks={() => sortCompleted()}
                        buttontext="Sort on completed"
                        image={arrows}
                    />
                    </section>

                <h2>My to do's</h2>
                <section className="toDoList">
                    <ul>
                        {toDoList.map((todo) => {
                            return <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleCompleted={toggleCompleted}
                                deleteTask={deleteTask}
                            />
                        })}


                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
