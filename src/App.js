import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import About from "./Pages/About";
import NotFountPage from "./Pages/NotFountPage";
import React from "react";
import Layout from "./Components/Layout";

function App() {
    return (
        <>
            <BrowserRouter>


                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>}/>
                        <Route path="Portal" element={<Portal/>}/>
                        <Route path="About" element={<About/>}/>
                        <Route path="*" element={<NotFountPage/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;
