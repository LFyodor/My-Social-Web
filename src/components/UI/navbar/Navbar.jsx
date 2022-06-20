import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <Link className="navbarLink" to="/mainpage">Main Page</Link>
                <Link className="navbarLink" to="/profilepage">Profile Page</Link>
            </div>

            <Outlet />

        </>
    );
};

export default Navbar;