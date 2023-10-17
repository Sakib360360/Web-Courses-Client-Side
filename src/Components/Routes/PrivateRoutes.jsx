import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext)
    const user = true; //fake
    const loading = false //fake
    const location = useLocation()
    if (loading) {
        return <progress className='progress w-56'></progress>
    }
    if (user) {

        return children
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;