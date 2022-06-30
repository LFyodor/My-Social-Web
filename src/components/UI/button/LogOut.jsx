import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./LogOut.module.css";
import { useDispatch } from 'react-redux';
import { userAuth } from '../../../store/userSlice';

const LogOut = ({children, ...props}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.clear();
        dispatch(userAuth())
        navigate('/auth/sign_in')
    }

    return (
        <button
            {...props}
            className={classes.logOut}
            onClick={logout}
        >
                {children}
        </button>
    )
}

export default LogOut;