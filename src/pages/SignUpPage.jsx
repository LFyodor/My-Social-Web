import React, { useContext } from 'react';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        navigate('/mainpage')
    }

    return (
        <div className="loginAndPassword">
            <h1 style={{textAlign: 'center'}}>
                Please, Introduce Yourself for the First Time
            </h1>
            <form onSubmit={login}>
                <input className="login" type="text" placeholder="Enter Your Login" />
                <input className="password" type="password" placeholder="Enter Your Password" />
                <button
                    onClick={() => login}
                    className="comeIn">
                        Come In
                </button>
            </form>
            <div className="regularBox">
                <button
                    onClick={() => navigate('/loginpage')}
                    className="first">
                        Regular Visitor?
                </button>
            </div>
        </div>
    );
};

export default SignUpPage;