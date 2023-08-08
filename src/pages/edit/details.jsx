import React from 'react';
import Navigation from "../../components/navigation.jsx";
import { useParams } from 'react-router-dom';
import Footer from "../../components/footer.jsx";


function Details () {
    const { id } = useParams();

    return (
        <>
            <Navigation />
    <main>
                <div>Het productnummer is {id}</div>
            </main>
            <Footer />
        </>
    );
}

export default Details;