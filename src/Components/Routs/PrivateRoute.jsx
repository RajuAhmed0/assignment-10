import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location);
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (user && user.email) {
        return <div>{children}</div>
    }

     return <Navigate state={{ from: location.pathname }} to="/login" replace />;
};

export default PrivateRoute;