import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Appointments from "./pages/dashboard/Appointments.jsx";
import Doctors from "./pages/dashboard/Doctors.jsx";
import Patients from "./pages/dashboard/Patients.jsx";
import Departments from "./pages/dashboard/Departments.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "appointments",
                element: <Appointments />
            },
            {
                path: "doctors",
                element: <Doctors />
            },
            {
                path: "patients",
                element: <Patients />
            },
            {
                path: "departments",
                element: <Departments />
            }
        ]
    }
])


const App = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default App;