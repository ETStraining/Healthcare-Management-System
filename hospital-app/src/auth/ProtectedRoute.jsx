import {useUser} from "../context/UserContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({children, allowedRoles}) => {
    const {user} = useUser();
    if (!user) {
        return <Navigate to="/" replace />;
    }
    if (user && !allowedRoles.includes(user.role)) {
        return <Navigate to="/not-authorized" />;
    }
    return children || <Outlet />;
}

export default ProtectedRoute;