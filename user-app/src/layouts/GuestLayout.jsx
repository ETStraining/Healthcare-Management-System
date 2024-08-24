import {Outlet} from "react-router-dom";
import Navbar from "../components/navigation/Navbar.jsx";
import Footer from "../components/features/Footer.jsx";

const GuestLayout = () => {
    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}


export default GuestLayout;