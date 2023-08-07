import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home.jsx";
import Edittodo from "./pages/edit/edittodo.jsx";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/edittodo" element={<Edittodo/>}/>
            </Routes>
        </>
    )
}

export default App
