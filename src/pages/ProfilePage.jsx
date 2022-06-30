import React from 'react';
import PostList from "../components/PostList";
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const Auth = useSelector((state) => state.users.auth);
  let user = JSON.parse(localStorage.getItem('user'))

  return (
    Auth
    ?
    <div className="All">
      <Header />
      <Navbar />
      <div className="information information-fixed">
        <p>{user.first_name} {user.last_name}</p>
        <br />
        <p>{user.email}</p>
      </div>
      <div className="ProfilePage">
          <PostList />
      </div>
    </div>
    :
    <p></p>
  );
};

export default ProfilePage;