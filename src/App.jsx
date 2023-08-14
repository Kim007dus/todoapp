import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home.jsx";
import Details from "./pages/edit/details.jsx";
import Aboutme from "./pages/about/aboutme.jsx";
import Navigation from "./components/navigation.jsx";
import Footer from "./components/footer.jsx";


function App() {
    return (
        <div className="container">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/aboutme" element={<Aboutme/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
