import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectuserRole } from '../Redux/features/users/userRoleSlice';

const ProtectedRoute = ({ children, user }) => {
    const userRole = useSelector(selectuserRole);
    if (userRole !== user) {
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoute;