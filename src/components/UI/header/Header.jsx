import React from 'react';
import LogOut from "../button/LogOut";
import { useSelector } from 'react-redux';

const Header = () => {
    const Auth = useSelector((state) => state.users.auth);

    return (
        Auth
        ?
        <header className="header header-fixed">
            <h2>Be Ready to Brawl</h2>
            <LogOut>Log Out</LogOut>
        </header>
        :
        <p></p>
    )
}

export default Header;