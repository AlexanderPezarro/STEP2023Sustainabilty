
import React from "react";
import { BrowserRouter, Route, Routes, Navigate }
    from 'react-router-dom';

import Home from "./compoments/Header"
import Schools from "./pages/Schools";
import Aboutus from "./pages/Aboutus";
import Layout from "./compoments/Layout";

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<Schools />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}
