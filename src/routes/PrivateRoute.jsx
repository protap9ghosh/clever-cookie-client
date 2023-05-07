import React, { useContext } from 'react';
import { GetContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { users } = useContext(GetContext);
    const location = useLocation();
    if (users) {
        return children;
    }

    return (
        <Navigate state={{from: location}} to="/login" replace>
            
        </Navigate>
    );
};

export default PrivateRoute;