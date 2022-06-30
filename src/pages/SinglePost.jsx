import React from 'react';
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { useParams } from 'react-router-dom';
import PostBody from '../components/PostBody';

const SinglePost = () => {
    const post = JSON.parse(localStorage.getItem('post'))
    const { id } = useParams()
    const comments = post?.comments
    const commentsSorted = comments?.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1);

    return (
        <div className="All">
            <Header />
            <Navbar />
            <div className="SinglePost">
                <PostBody />
                <div className="buttonInPost">
                    <CommentForm postId={id} />
                    <CommentList comments={commentsSorted} />
                </div>
            </div>
        </div>
    );
}

export default SinglePost;