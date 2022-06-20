import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/postSlice';

const PostItem = ({post}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post-content" onClick={() => navigate(`/singlepage/${post.id}/${post.title}`)}>
                <p>{post.title}</p>
                <br />
                <p>{post.description}</p>
                <br />
                <p>Comments: {post.comment.length}</p>
            </div>
            <div className="post-delete">
                <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;