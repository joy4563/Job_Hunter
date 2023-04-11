import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="px-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
