import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import TodoItem from "./components/showtodoitem.jsx";
import Buttons from "./components/buttons.jsx";
import arrows from './assets/arrows-down-up-duotone.svg'




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
                return alert("Please fill in the title")
            }
            else {
                setToDoList([...toDoList, {
                    title: formState.title,
                    status: formState.status,
                    priority: formState.priority,
                    description: formState.description,
                    id: uuidv4()
                }])}
            setFormState({title: "", status: false, priority: "1", description: ""})

    }



    const [statusTask, toggleStatusTask] = useState(true)
    const [sortedTasks, toggleSortedTasks] = useState(true)

    function deleteTask(idParam) {
        setToDoList(toDoList => {
            return toDoList.filter((todo) => (todo.id !== idParam))
        })
    }

    function toggleCompleted(idParam) {
        const clonedToDoList = [...toDoList]
        setToDoList(clonedToDoList.map((todo) =>
            todo.id === idParam ? {...todo, status: !todo.status} : todo)
        )
    }

    function sortOnHighPriority(sortedTasks) {
        if (sortedTasks !== true) {
            return toDoList.sort((a, b) => a.priority - b.priority)
        }}


    function sortOnLowPriority (sortedTasks) {
        if (sortedTasks !== false) {
            return toDoList.sort((a, b) => b.priority - a.priority)
        }
    }

    // function sortOnCompleted (statusTask) {
    //     if (statusTask !== true) {
    //         return toDoList.sort((a, b) => a.status - b.status)
    //     }
    // }
    //
    // function sortOnNotCompleted (statusTask) {
    //     if (statusTask !== false) {
    //         return toDoList.sort((a, b) => b.status - a.status)
    //     }
    // }

    return (
        <>
            <header><h1>To Do App</h1></header>
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
                            <option value="1">High </option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </label>
                    <button className="button" type="submit">Add</button>
                </form>
                <section className="buttonsection">
                <Buttons
                    toggleTasks= {() =>toggleSortedTasks(sortedTasks !== true)}
                    buttontext = "Sort on priority"
                    image = {arrows}
                />
                {/*<Buttons*/}
                {/*    toggleTasks= {() =>toggleStatusTask(statusTask !== true)}*/}
                {/*    buttontext = "Sort on completed"*/}
                {/*    image = {arrows}*/}
                {/*/>*/}
                </section>

                <h2>My to do's</h2>
                <section className="toDoList">
                    <ul>
                        {toDoList.map((todo) => {
                            // sort on priority
                            if (sortOnHighPriority(sortedTasks)){
                                    return <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        toggleCompleted={toggleCompleted}
                                        deleteTask={deleteTask}
                                    />}
                            else if (sortOnLowPriority(sortedTasks)){
                                    return <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        toggleCompleted={toggleCompleted}
                                        deleteTask={deleteTask}
                                    />}
                        else {
                            return <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleCompleted={toggleCompleted}
                                deleteTask={deleteTask}
                            />
                            }

                        })}



                            {/*// //  //sort on completed*/}
                            {/*if (sortOnCompleted(statusTask)){*/}
                            {/* return <TodoItem*/}
                            {/*     key={todo.id}*/}
                            {/*     todo={todo}*/}
                            {/*     toggleCompleted={toggleCompleted}*/}
                            {/*     deleteTask={deleteTask}*/}
                            {/* />}*/}
                            {/* else if (sortOnNotCompleted(statusTask)){*/}
                            {/* return <TodoItem*/}
                            {/*     key={todo.id}*/}
                            {/*     todo={todo}*/}
                            {/*     toggleCompleted={toggleCompleted}*/}
                            {/*     deleteTask={deleteTask}*/}
                            {/* />}*/}



                    </ul>
                </section>
            </main>

        </>
    )
}

export default App
