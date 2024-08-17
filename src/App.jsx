import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
])

export  default function App () {
    return (
        <RouterProvider router={router} />
    )
}