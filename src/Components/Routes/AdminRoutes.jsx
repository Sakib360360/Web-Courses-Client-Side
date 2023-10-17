import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    // const location = useLocation()
    // const {user,loading} = useContext(AuthContext)
    // const [isAdmin,isAdminLoading] = useAdmin()
    const user = true //fake
    const isAdmin = true //fake
    const isAdminLoading = false; //fake
    const loading = false; //fake

    if(isAdminLoading || loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;