import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Header from "./Components/header";

const Routers = () => {
    return(
        <Router>
            <Routes>

                <Route exact path="/header" element = {<Header />} />
                <Route path="/" element={<Navigate to="/" />} />


            </Routes>
        </Router>
    )
}
export default Routers;

