import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginServer } from '../API/user/login';

const LoginPage = () => {
    const navigate = useNavigate();
    const [emailAuth, setEmailAuth] = useState('');
    const [passwordAuth, setPasswordAuth] = useState('');
    const dispatch = useDispatch()

    const login = (e) => {
        e.preventDefault();
        if (emailAuth.trim().length &&
            passwordAuth.trim().length) {
                const userLogin = {
                    email: emailAuth,
                    password: passwordAuth
                }
                dispatch(loginServer(userLogin))
                navigate('/posts/all')
            }
            setEmailAuth('')
            setPasswordAuth('')
    }

    return (
        <div className="emailAndPassword">
            <h1 style={{textAlign: 'center'}}>
                Please, Introduce Yourself
            </h1>
            <form onSubmit={login}>
                <input
                    value={emailAuth}
                    onChange={e => setEmailAuth(e.target.value)}
                    className="email"
                    type="text"
                    placeholder="Enter Your Email"
                />
                <input
                    value={passwordAuth}
                    onChange={e => setPasswordAuth(e.target.value)}
                    className="password"
                    type="password"
                    placeholder="Enter Your Password"
                />
                <button
                    onClick={login}
                    className="comeIn">
                        Come In
                </button>
            </form>
            <div className="regularBox">
                <button
                    onClick={() => navigate('/auth/sign_up')}
                    className="regular">
                        For the First Time?
                </button>
            </div>
        </div>
    );
};

export default LoginPage;