import { Outlet, Navigate } from "react-router-dom";


interface Auth {
    allowedRoles: string[];
    isAuthenticated: boolean;
    userRole: string | null;
    redirectPath?: string;
}

const ProtectedRoutes: React.FC<Auth> = ({ allowedRoles, isAuthenticated, userRole, redirectPath = '/auth/sign-in' }) => {

    if (!isAuthenticated || !userRole || !allowedRoles.includes(userRole)) {
        return <Navigate to={redirectPath} replace />
    }
    return (
        <div><Outlet /></div>
    )
}

export default ProtectedRoutes