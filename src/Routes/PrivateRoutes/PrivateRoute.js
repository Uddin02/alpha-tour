import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        // return  <Spinner animation="border" variant="primary" />
        return <div className="w-16 h-16 border-4 border-dashed rounded-full mx-auto animate-spin dark:border-gray-800">Loading...</div>
    }
 
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;