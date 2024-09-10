import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Appointments from "./pages/dashboard/Appointments.jsx";
import Patients from "./pages/dashboard/Patients.jsx";
import Departments from "./pages/dashboard/Departments.jsx";
import Users from "./pages/dashboard/Users.jsx";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import NotAuthorized from "./pages/NotAuthorized.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
    },
    {
        path: "/not-authorized",
        element: <NotAuthorized />
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute allowedRoles={["Doctor", "Admin", "Nurse", "Receptionist"]}>
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
                element: (
                    <ProtectedRoute allowedRoles={["Doctor", "Admin"]}>
                        <Appointments />
                    </ProtectedRoute>
                )
            },
            {
                path: "staff",
                element: (
                    <ProtectedRoute allowedRoles={["Admin"]}>
                        <Users />
                    </ProtectedRoute>
                )
            },
            {
                path: "patients",
                element: <Patients />
            },
            {
                path: "departments",
                element: (
                    <ProtectedRoute allowedRoles={["Admin"]}>
                        <Departments />
                    </ProtectedRoute>
                )
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