import React from 'react';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";

function MainPage() {

  return (
      <div className="All">
        <Header />
        <Navbar />
        <div className="MainPage">
          <PostForm />
          <PostList />
        </div>
      </div>
  );
}

export default MainPage;