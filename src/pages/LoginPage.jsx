import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../store/loadPostSlice';
import { fetchSite } from '../store/loadSlice';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState('');
    const [passwordWord, setPasswordWord] = useState('');
    const dispatch = useDispatch()

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        if (loginName === 'Teodor' && passwordWord === '963') {
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
            navigate('/mainpage')
            dispatch(fetchSite())
        } else {
            return (
                alert('Login or Password Incorrect')
            )
        }
    }

    return (
        <div className="loginAndPassword">
            <h1 style={{textAlign: 'center'}}>
                Please, Introduce Yourself
            </h1>
            <form onSubmit={login}>
                <input
                    value={loginName}
                    onChange={e => setLoginName(e.target.value)}
                    className="login"
                    type="text"
                    placeholder="Enter Your Login"
                />
                <input
                    value={passwordWord}
                    onChange={e => setPasswordWord(e.target.value)}
                    className="password"
                    type="password"
                    placeholder="Enter Your Password"
                />
                <button
                    onClick={() => login}
                    className="comeIn">
                        Come In
                </button>
            </form>
            <div className="regularBox">
                <button
                    onClick={() => navigate('/signuppage')}
                    className="regular">
                        For the First Time?
                </button>
            </div>
        </div>
    );
};

export default LoginPage;