import React from 'react';
import Navigation from "../../components/navigation.jsx";
import {useParams} from 'react-router-dom';
import Footer from "../../components/footer.jsx";
import Buttons from "../../components/buttons.jsx";
import arrows from "../../assets/arrows-down-up-duotone.svg";
import './edit.css'


function Details() {
    const {id} = useParams();

    return (
        <div className="container">
            <Navigation/>
            <main>
                <h2>I need to do this</h2>
                <section className="buttonsection">
                    <Buttons
                        toggleTasks={() => console.log("Weergeven van de to do")}
                        buttontext="Show me al the details"
                        image={arrows}
                    />
                    <Buttons
                        toggleTasks={() => console.log("edit")}
                        buttontext="Edit modus"
                        image={arrows}
                    />
                </section>
                <section className="details">
                    <h2>ID of the to do</h2>
                    <input type="checkbox" />
                    <span> Title: Learn html </span>
                    <span> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, rerum, sint. Animi enim harum perferendis saepe sint sit unde, vel?</span>
                    </section>


            </main>
            <Footer/>
        </div>
    );
}

export default Details;