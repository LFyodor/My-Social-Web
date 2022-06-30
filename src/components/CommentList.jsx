import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import CommentItem from './CommentItem';

const CommentList = () => {
    const post = JSON.parse(localStorage.getItem('post'))
    const comments = post.comments
    const {loading, error} = useSelector(state => state.posts);
    const [open, setOpen] = useState(false)

    return (
        <div className="buttonInPost">
            <div>
                <h1>All comments: {post.comments.length}</h1>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className="showComments"
            >
                Show comments
            </button>
            {loading === 'loading' && <h1>Loading...</h1>}
            {error && <h1>An error occurred: {error}</h1>}
            <TransitionGroup className={open ? "comment-list-opened" : "comment-list-closed"}>
                {comments?.map((comment) =>
                    <CSSTransition
                        key={comment.id}
                        title={comment.title}
                        timeout={500}
                        classNames="comment"
                        comment={comment}
                    >
                        <CommentItem />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default CommentList;