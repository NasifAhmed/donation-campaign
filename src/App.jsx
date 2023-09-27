import NavBar from "./components/NavBar.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
    return (
        <div className="mx-36 mb-52">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
