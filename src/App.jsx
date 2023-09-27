import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="mx-36">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
