import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Appointments from "./pages/dashboard/Appointments.jsx";
import Doctors from "./pages/dashboard/Doctors.jsx";
import Patients from "./pages/dashboard/Patients.jsx";
import Departments from "./pages/dashboard/Departments.jsx";
import Users from "./pages/dashboard/Users.jsx";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import {UserProvider} from "./context/UserContext.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
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
                path: "staff",
                element: <Users />
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
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    )
}

export default App;