import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';
import classes from "./LogOut.module.css";

const LogOut = ({children, ...props}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        navigate('/loginpage')
    }

    return (
        <button {...props} className={classes.logOut} onClick={logout}>
                {children}
        </button>
    )
}

export default LogOut;