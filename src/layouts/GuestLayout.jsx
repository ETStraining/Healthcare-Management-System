import {Outlet} from "react-router-dom";
import Navbar from "../components/navigation/Navbar.jsx";

const GuestLayout = () => {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}


export default GuestLayout;