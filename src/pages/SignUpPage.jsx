import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserServer } from '../API/user/registration';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch();

    const addNewUser = (e) => {
        e.preventDefault()
        if (email.trim().length &&
            password.trim().length &&
            firstName.trim().length &&
            lastName.trim().length) {
                const user = {
                    userId: Date.now(),
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName
                }
            dispatch(addUserServer(user))
            navigate('/posts/all')
            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
        } else {
            return (
                alert('Entered Data Incorrect')
            )
        }
    }

    return (
        <div className="emailAndPassword">
            <h1 style={{textAlign: 'center'}}>
                Please, Introduce Yourself for the First Time
            </h1>
            <form onSubmit={addNewUser}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email"
                    type="text"
                    placeholder="Enter Your Email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password"
                    type="password"
                    placeholder="Enter Your Password"
                />
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                />
                <button
                    onClick={addNewUser}
                    className="comeIn">
                        Come In
                </button>
            </form>
            <div className="regularBox">
                <button
                    onClick={() => navigate('/auth/sign_in')}
                    className="first">
                        Regular Visitor?
                </button>
            </div>
        </div>
    );
};

export default SignUpPage;