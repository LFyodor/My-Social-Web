import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import SinglePage from "../pages/SinglePage";
import LoginPage from "../pages/LoginPage";
import { AuthContext } from '../context';
import SignUpPage from "../pages/SignUpPage";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log("Is Auth?", isAuth);

    if (isLoading) {
        return <h1>Clean Up After a Brawl</h1>
    }

    return (
        isAuth
            ?
            <Routes>
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/profilepage" element={<ProfilePage />} />
                <Route path="*" element={<MainPage />} />
                <Route path="/singlepage/:id/:title" element={<SinglePage />} />
            </Routes>
            :
            <Routes>
                <Route path="*" element={<LoginPage />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/signuppage" element={<SignUpPage />} />
            </Routes>
    );
};

export default AppRouter;