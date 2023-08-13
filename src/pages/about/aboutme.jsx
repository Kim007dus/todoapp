import Navigation from "../../components/navigation.jsx";
import Footer from "../../components/footer.jsx";
import kim from "../../assets/aboutme.jpg";
import "./aboutme.css"
import axios from "axios";
import {useEffect, useState} from "react";



function Aboutme() {
    const urip = 'http://localhost:3000/profile'
    const [error, setError] = useState('');
    const [aboutme, setAboutme] = useState([{}]);

    async function fetchProfile() {
        try {
           const result =  await axios.get(urip).then((res) => setAboutme(res.data));
        } catch (error) {
            console.error(error)
            setError('Oops, something went wrong. Please try again later.')
        }
    }
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="container">
            <Navigation/>
            <main>
                <h2>About me</h2>
                <article className="aboutme">
                    <img src={kim} alt="Kim Raven"/>
                    <section className="aboutme-text">
                        {error && <p>{error}</p>}
                            <p>{aboutme.textone}</p>
                            <p>{aboutme.texttwo}</p>
                            <p>{aboutme.endgithub}<a href={aboutme.github}> Github</a>.</p>
                            <p>{aboutme.endemail}<a href={aboutme.email}> email.</a>.</p>

                    </section>
                    </article>
            </main>
            <Footer/>
        </div>
);
}

export default Aboutme;