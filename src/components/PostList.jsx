import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { useSelector } from 'react-redux';

const PostList = ({titleTavern}) => {
    const posts = useSelector((state) => state.posts.posts);

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
                {titleTavern}
            </h1>
            <h1>
                Total Discussions {posts.length}
            </h1>
            <TransitionGroup className="list">
            {posts?.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    timeout={500}
                    classNames="post"
                    post={post}
                >
                    <PostItem number={index + 1} post={post} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;