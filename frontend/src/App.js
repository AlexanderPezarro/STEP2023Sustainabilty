
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, useParams }
    from 'react-router-dom';

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import LeaderBoard from "./pages/Leaderboard";
import Layout from "./compoments/Layout";
import School from "./pages/School";
import Module from "./pages/Module";
import Survey from "./pages/Survey";
import { getModuleFromCode } from "./api";


const PrivateRoute = ({ children }) => {
    const params = useParams()
    const [module, setModule] = useState()
    const [valid, setValid] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getModuleFromCode(params.module)
                if (res.data[0].secret_code !== params.code) setValid(false)
            } catch (err) {
                console.log(err);
                setValid(false)
            }
        }

        fetchData();
    },[])

    if (valid) {
        return children
    } else {
        window.alert("Invalid URL")
        return <Navigate to="/" replace={true} />
    }

}

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<Aboutus />} />
                        <Route path="/leaderboard" element={<LeaderBoard />} />
                        <Route path="/:school" element={<School />} />
                        <Route path="/:school/:module" element={<Module />} />
                        <Route path="/:school/:module/survey/:code" element={<PrivateRoute><Survey /></PrivateRoute>} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}


