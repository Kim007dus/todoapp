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
import Inputfield from "../../components/inputfield.jsx";
import {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function App() {
    const {id} = useParams();
    const uriall = 'http://localhost:3000/todos/'
    const [toDoList, setTodoList] = useState([])
    const [activeSortType, setActiveSortType] = useState('');
    const [error, setError] = useState('');

    const [formState, setFormState] = useState({
        title: "",
        completed: false,
        priority: "1",
        description: "",
        id: 0,
        created: new Date()
    })

    async function fetchInfo() {
        setError('');
        try {
            const result = await axios.get(uriall).then((res) => setTodoList(res.data));
        } catch (error) {
            console.error(error)
            setError('Oops, something went wrong. Please try again later.')
        }

    }

    useEffect(() => {
        fetchInfo();
    }, []);

    async function deleteInfo(idParam) {
        setError('');
        try {
            await axios.delete(uriall + idParam);

        } catch (error) {
            console.error(error)
            setError('Oops, something went wrong. Please try again later.')
        }

    }

    async function postToDo() {
        setError('');
        try {
            const result = await axios.post((uriall), {
                title: formState.title,
                completed: false,
                priority: formState.priority,
                description: formState.description,
                id: uuidv4(),
                created: new Date()
            });

        } catch (error) {
            console.error(error);
            setError('Oops, something went wrong. Please try again later.')
        }
    }

    async function editCompleted(idParam) {
        setError('');
        let theone = toDoList.find((todo) => todo.id === idParam)
        theone.completed = !theone.completed

        try {
            await axios.put((uriall + idParam), {
                    title: theone.title,
                    completed: theone.completed,
                    priority: theone.priority,
                    description: theone.description,
                    created: new Date()
                }
            )
            setTodoList(toDoList.map((todo) =>
                todo.id === idParam ? {...todo, completed: !todo.completed} : todo)
            )

        } catch (error) {
            console.error(error);
            setError('Oops, something went wrong. Please try again later.')
        }
    }

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
            postToDo()
            setTodoList([...toDoList, formState])
        }
        setFormState({title: "", completed: false, priority: "1", description: "", id: 0, created: new Date()})

    }

    function deleteTask(idParam) {
        toDoList.find((todo) => todo.id === idParam)
        deleteInfo(idParam)
        setTodoList(toDoList.filter((todo) => todo.id !== idParam)
        )
    }


    function sortPriority() {
        const newSortType = generateNewSortTypePriority(activeSortType);
        const sortedTodos = sortTasksPriority(newSortType, toDoList);
        setTodoList(sortedTodos);
        setActiveSortType(newSortType);
    }

    function sortCompleted() {
        const newSortType = generateNewSortTypeCompleted(activeSortType);
        const sortedTodos = sortTasksCompleted(newSortType, toDoList);
        setTodoList(sortedTodos);
        setActiveSortType(newSortType);

    }



    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <Inputfield
                        title="title"
                        titleid="todotitle"
                        text="Add a title here"
                        handle={handleChange}
                        value={formState.title}
                    />
                    <Inputfield
                        title="description"
                        titleid="tododescription"
                        text="Add a description here"
                        handle={handleChange}
                        value={formState.description}
                    />
                    <label htmlFor="selectpriority">Priority
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

                <h2>All the things to do</h2>
                <section className="toDoList">
                    <ul>
                        {error && <p>{error}</p>}
                        {toDoList.map((todo, index) => {
                            return <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleCompleted={editCompleted}
                                deleteTask={deleteTask}
                            />
                        })}


                    </ul>
                </section>
            </main>

        </>
    )
}

export default App
