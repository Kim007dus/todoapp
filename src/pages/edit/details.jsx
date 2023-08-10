import Navigation from "../../components/navigation.jsx";
import {useParams} from 'react-router-dom';
import Footer from "../../components/footer.jsx";
import Buttons from "../../components/buttons.jsx";
import edit from "../../assets/pencil-simple-duotone.svg"
import './edit.css'
import {useEffect, useState} from "react";
import axios from "axios";



function Details() {
    const {id} = useParams();
    const url = 'http://localhost:3000/todos/'
    const [data, setTodoList] = useState([])
    const fetchInfo = () => {
        return axios.get(url + id).then((res) => setTodoList(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

   function showPriority() {
       if (data.priority === "1") {
           return "Oopsie, do this today"
       }
       if (data.priority === "2") {
           return "This needs to be done this week"
       }
         if (data.priority === "3") {
              return "No worries, this month will be okay"
         }
    }


    return (
        <div className="container">
            <Navigation/>
            <main>
                <section className="buttonsection">
                    <Buttons
                        toggleTasks={() => console.log("edit")}
                        buttontext="Edit"
                        image={edit}
                    />
                </section>
                <h2>Details</h2>

                <section className='details' >
                    <h3>Todo: {data.title}</h3>
                        <p>Todo Id: {data.id}</p>
                        <p>Description: {data.description}</p>
                        <p className="prio">Priority: {showPriority()}</p>
                </section>

            </main>
            <Footer/>
        </div>
    );
}

export default Details;