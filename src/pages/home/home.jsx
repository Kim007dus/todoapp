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
    const urlall = 'http://localhost:3000/todos/'
    const urlid = 'http://localhost:3000/todos/:id'
    const [data, setTodoList] = useState([])
    const [activeSortType, setActiveSortType] = useState('');

    const fetchInfo = () => {
        return axios.get(urlall).then((res) => setTodoList(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);


    const [formState, setFormState] = useState({
        title: "",
        completed: false,
        priority: "1",
        description: "",
        id: 0,
        created: new Date()
    })



    function handleChange(e) {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleSubmit = () => {
        // e.preventDefault()
        if (formState.title === "") {
            return alert("❌ Please add the title of you to do...")
        } else {
            axios.post((urlall),  {
                title: formState.title,
                completed: formState.status,
                priority: formState.priority,
                description: formState.description,
                id: uuidv4(),
                created: new Date()

            })
        }
        setFormState({title: "", completed: false, priority: "1", description: "", id: 0})

    }

    function deleteTask(idParam) {
         data.find((todo)=> todo.id === idParam)
        axios.delete( urlall + idParam).then(()=> {
               setTodoList(data)}
        )}


console.log(data)



    function toggleCompleted(idParam) {
       setTodoList(data.map((todo) =>
            todo.id === idParam ? {...todo, completed: !todo.completed} : todo)
       )}

    function sortPriority() {
        const newSortType = generateNewSortTypePriority(activeSortType);
        const sortedTodos = sortTasksPriority(newSortType, data);
        setTodoList(sortedTodos);
        setActiveSortType(newSortType);
    }

    function sortCompleted() {
        const newSortType = generateNewSortTypeCompleted(activeSortType);
        const sortedTodos = sortTasksCompleted(newSortType, data);
        setTodoList(sortedTodos);
        setActiveSortType(newSortType);

    }

    return (
        <div className="container">
            <Navigation/>
            <main>
                <form onSubmit={handleSubmit}>
                  <Inputfield
                        title= "title"
                        titleid= "todotitle"
                        text= "Add a title here"
                        handle= {handleChange}
                        value= {formState.title}
                    />
                    <Inputfield
                        title= "description"
                        titleid= "tododescription"
                        text= "Add a description here"
                        handle= {handleChange}
                        value= {formState.description}
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
                        {data.map((todo, index) => {
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
        </div>
    )
}

export default App
