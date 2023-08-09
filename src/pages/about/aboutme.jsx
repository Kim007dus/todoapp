import Navigation from "../../components/navigation.jsx";
import Footer from "../../components/footer.jsx";
import kim from "../../assets/aboutme.jpg";
import "./aboutme.css"

function Aboutme() {
    return (
        <div className="container">
            <Navigation/>
            <main>
                <h2>About me</h2>
                <article className="aboutme">
                    <img src={kim} alt="Kim Raven"/>
                    <section className="aboutme-text">
                    <p>My name is Kim Raven, I am 38 years old and started in 2023 with learning for full stack
                        developer. First I did some self study with The Odin Project. In july I started with the full
                        stack development bootcamp.</p>
                    <p>This to do app is made for the first part of the bootcamp. I used html, css, javascript and React
                        to made this application. I really enjoyed making it and hope you enjoy using it.</p>
                    <p>For more information about the project and to see my other projects go to <a href="https://github.com/Kim007dus" target="_blank">my Github</a>.</p>
                    </section>
                    </article>
            </main>
            <Footer/>
        </div>
);
}

export default Aboutme;