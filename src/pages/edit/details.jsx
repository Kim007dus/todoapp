import Navigation from "../../components/navigation.jsx";
import {NavLink, useParams} from 'react-router-dom';
import Footer from "../../components/footer.jsx";
import Buttons from "../../components/buttons.jsx";
import edit from "../../assets/pencil-simple-duotone.svg"
import './edit.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Inputfield from "../../components/inputfield.jsx";
import {v4 as uuidv4} from "uuid";
import trash from "../../assets/trash-duotone.svg";


function Details() {
    const {id} = useParams();
    const uri = 'http://localhost:3000/todos/'
    const [toDoList, setTodoList] = useState([])
    const [editMode, toggleEditMode] = useState(false);
    const [error, setError] = useState('');
    const [newformState, setFormState] = useState({
        title: "",
        completed: false,
        priority: "1",
        description: "",
        id: 0,
        created: new Date()
    })

    async function fetchTodoId() {
        try {
            const result = await axios.get(uri + id).then((res) => setTodoList(res.data));
        } catch (error) {

            console.error(error)
            setError('Oops, something went wrong. Please try again later.')
        }
    }


    useEffect(() => {
        fetchTodoId();
    }, []);

    function showPriority() {
        if (toDoList.priority === "1") {
            return "Oopsie, do this today"
        }
        if (toDoList.priority === "2") {
            return "This needs to be done this week"
        }
        if (toDoList.priority === "3") {
            return "No worries, this month will be okay"
        }
    }

    function showCompleted() {
        if (toDoList.completed === true) {
            return "Already done"
        }
        if (toDoList.completed === false) {
            return "Not done yet"
        }
    }

    async function editToDo() {
        setError('');
        try {

            const result = await axios.put((uri + id), {
                title: newformState.title || toDoList.title,
                completed: toDoList.completed,
                priority: newformState.priority || toDoList.priority,
                description: newformState.description || toDoList.description,
                id: uuidv4(),
                created: new Date()
            });

        } catch (error) {

                console.error(error);
                setError('Oops, something went wrong. Please try again later.')
            }
        }





        function handleChange(e) {
            const {name, value} = e.target;
            setFormState({
                ...newformState,
                [name]: value,
            });
        }

        const handleSubmit = () => {
            // e.preventDefault();
            editToDo();
            setTodoList([...toDoList, newformState]);
            toggleEditMode(false);
        }


        return (
            <div className="container">
                <Navigation/>
                <main className="maindetails">
                    <p className="breadcrumb">home > To Do > details</p>
                    <section className="buttonsection detail">
                    <Buttons
                        toggleTasks={() => toggleEditMode(!editMode)}
                        buttontext="Edit"
                        image={edit}
                    />
                </section>

                    <section className='details'>
                        {error && <p>{error}</p>}
                        {!toDoList && <p>Loading...</p>}
                        <h3>Todo: {toDoList.title}</h3>
                        <p>Description: {toDoList.description}</p>
                        <p className="prio">Deadline: {showPriority()}</p>
                        <p>Status: {showCompleted()}</p>

                    </section>

                    <section className='form'>
                        <form className={editMode ? 'form-edit-mode' : 'form-read-mode'} onSubmit={handleSubmit}>
                            <Inputfield
                                title="title"
                                titleid="todotitle"
                                text={toDoList.title}
                                handle={handleChange}
                                value={newformState.title}
                            />
                            <Inputfield
                                title="description"
                                titleid="tododescription"
                                text={toDoList.description}
                                handle={handleChange}
                                value={newformState.description}
                            />
                            <label htmlFor="selectpriority">Priority
                                <select
                                    id="selectpriority"
                                    name="priority"
                                    value={newformState.priority}
                                    onChange={handleChange}>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                </select>
                            </label>
                            <button className="button form" type="submit">Add changes</button>

                        </form>

                    </section>
                <button className="homebutton" type="button"><NavLink to={'/'}>Back to the To Do list</NavLink></button>
                </main>
                <Footer/>
            </div>
        );
    }

    export default Details;