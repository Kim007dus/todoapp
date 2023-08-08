import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home.jsx";
import Details from "./pages/edit/details.jsx";
import Aboutme from "./pages/about/aboutme.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details:id" element={<Details/>}/>
                <Route path="/aboutme" element={<Aboutme/>}/>
            </Routes>
        </>
    )
}

export default App
