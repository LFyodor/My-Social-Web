import React, { useEffect } from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../API/posts/fetchPosts';

const PostList = () => {
    const posts = useSelector((state) => state.posts.posts);
    const {loading, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    let tempPosts = null

    useEffect(() => {
        dispatch(fetchPosts());
      }, [dispatch]);

    const postLink = window.location.href
    const postLinkArray = postLink.split('/')
    if (postLinkArray.includes('profile')) {
        tempPosts = posts.filter((post) => post.user_id === user.id)   
    } else {
        tempPosts = posts
    }

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                The tavern is closed
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Tavern "Happy Raccoon"
            </h1>
            <h1>
                Total Discussions {tempPosts.length}
            </h1>
            {loading === 'loading' && <h1>Loading...</h1>}
            {error && <h1>An error occurred: {error}</h1>}
            <TransitionGroup className="post-list">
            {tempPosts?.map((post) =>
                <CSSTransition
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    timeout={500}
                    classNames="post"
                    post={post}
                >
                    <PostItem />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;