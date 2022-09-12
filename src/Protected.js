import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Protected = ({isLoggedIn, children}) => {

    const location = useLocation();
    
    if(!isLoggedIn)
    {
        console.log("Sign Up Ekranına Yönlendiriliyorsunuz.. ", isLoggedIn)
        return <Navigate to="/sign" state={{ from: location }} replace/>;
    }
    else {
        console.log("login")
        return children ? children : <Outlet/> ;
    }

}
export default Protected;