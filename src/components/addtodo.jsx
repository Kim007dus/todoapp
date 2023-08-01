import React, {useState} from 'react';

function Addtodo() {
    const [formState, setFromState] = useState({
        title: "",
        status: "",
        priority: "",
    })

    function handleChange(e) {
        setFromState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }
    return (
        <div><form onSubmit={handleSubmit}>
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
        </form></div>
    );
}

export default Addtodo;