
import React from "react";
import { BrowserRouter, Route, Routes, Navigate }
    from 'react-router-dom';

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import LeaderBoard from "./pages/Leaderboard";
import Layout from "./compoments/Layout";
import School from "./pages/School";
import Module from "./pages/Module";
import Survey from "./pages/Survey";

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path = "/leaderboard" element = {<LeaderBoard/>} />
                        <Route path = "/:school" element = {<School/>}/>
                        <Route path = "/:school/:module" element = {<Module/>}/>
                        <Route path = "/:school/:module/survey/:code" element = {<Survey/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}
