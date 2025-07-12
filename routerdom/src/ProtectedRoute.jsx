import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from './auth';

export default function ProtectedRoute() {
    return checkAuth() ? <Outlet/> : <Navigate to="/login" replace />;
}