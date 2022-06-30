import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import SinglePost from "../pages/SinglePost";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { useSelector } from 'react-redux';

const AppRouter = () => {
    const Auth = useSelector((state) => state.users.auth);

    return (
        Auth
            ?    
            <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path="/posts/all" element={<MainPage />} />
                <Route path="/user/profile" element={<ProfilePage />} />
                <Route path="/posts/post/:id" element={<SinglePost />} />
            </Routes>
            :
            <Routes>
                <Route path="*" element={<LoginPage />} />
                <Route path="/auth/sign_in" element={<LoginPage />} />
                <Route path="/auth/sign_up" element={<SignUpPage />} />
            </Routes>
    );
};

export default AppRouter;