import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="navbar navbar-fixed">
                <Link className="navbarLink" to="/posts/all">Main Page</Link>
                <Link className="navbarLink" to="/user/profile">Profile Page</Link>
            </div>

            <Outlet />

        </>
    );
};

export default Navbar;