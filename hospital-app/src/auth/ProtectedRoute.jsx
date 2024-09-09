import {useUser} from "../context/UserContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user} = useUser();
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children || <Outlet />;
}

export default ProtectedRoute;