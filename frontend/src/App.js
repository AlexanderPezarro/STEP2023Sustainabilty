
import React from "react";
import { BrowserRouter, Route, Routes, Navigate }
    from 'react-router-dom';

import Home from "./pages/Home"
import Schools from "./pages/Schools";

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path = "/schools" element = {<Schools />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}
