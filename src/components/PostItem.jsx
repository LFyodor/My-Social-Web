import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singlePostServer } from '../API/posts/singlePost';
import { deletePostServer } from '../store/postSlice';

const PostItem = ({post}) => {
    const dispatch = useDispatch();

    const saveInStorage = () => {
        localStorage.setItem('post', JSON.stringify(post))
        dispatch(singlePostServer(post.id))
    }

    return (
        <>
        <div className="post">
            <Link
                onClick={saveInStorage}
                className="post-content"
                to={`/posts/post/${post.id}`}
            >
                <p>{post.title}</p>
                <br />
                <p>{post.description}</p>
                <br />
                <p>Comments: {post.comments.length}</p>
            </Link>
            <div className="post-delete">
                <button onClick={() => dispatch(deletePostServer(post.id))}>
                    Delete
                </button>
            </div>
        </div>

        <Outlet />
        </>
    )
}

export default PostItem;