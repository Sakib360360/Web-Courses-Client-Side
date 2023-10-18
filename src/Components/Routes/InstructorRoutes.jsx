import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const InstructorRoutes = ({children}) => {
    // const [isInstructor,isInstructorLoading] = useInstructor()
    const location = useLocation()
    const isInstructor = true;
    const isInstructorLoading = false;
    const loading = false;
    const {user} = useAuth()

    if(isInstructorLoading || loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructor){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default InstructorRoutes;