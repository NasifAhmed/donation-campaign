import NavBar from "./components/NavBar.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
    return (
        <div className="xl:mx-36 lg:mx-20 md:mx-10 mx-5 mb-52">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
