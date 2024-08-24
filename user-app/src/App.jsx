import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Departments from "./pages/Departments.jsx";
import Doctors from "./pages/Doctors.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "booking-appointment",
                element: <Booking />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "departments",
                element: <Departments />
            },
            {
                path: "doctors",
                element: <Doctors />
            }
        ]
    }
])

export  default function App () {
    return (
        <RouterProvider router={router} />
    )
}