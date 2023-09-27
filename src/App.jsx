import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
    return (
        <div className="mx-36">
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
