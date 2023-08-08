import React from 'react';
import Navigation from "../../components/navigation.jsx";
import {useParams} from 'react-router-dom';
import Footer from "../../components/footer.jsx";


// Een todo-detail-pagina waarop uiteindelijk alle detailinformatie van één todo wordt weergegeven. Dit moet een dynamic route zijn; Houdt er rekening mee dat we - behalve de unieke identifier - nog geen detail-informatie over een todo kunnen weergeven op de detailpagina, hier hebben we een backend voor nodig. Wel richt je de detailpagina alvast in met dummy-data en zorg je er met state voor dat de gebruiker kan togglen tussen 'weergeven' en 'bewerken', waarin er invoervelden verschijnen.



function Details() {
    const {id} = useParams();

    return (
        <>
            <Navigation/>
            <main>
                <div>Het productnummer is {id}</div>
            </main>
            <Footer/>
        </>
    );
}

export default Details;