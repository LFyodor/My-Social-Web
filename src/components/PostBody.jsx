import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPostServer } from '../API/posts/edit';

const PostBody = () => {
    const post = JSON.parse(localStorage.getItem('post'))
    const { id } = useParams()
    const dispatch = useDispatch()
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)

    const editPost = (e) => {
        e.preventDefault()
        const editingPost = {
            id: id,
            title: title,
            description: description
        }
        dispatch(editPostServer(editingPost))
    }

    return (
        <div>
            <form className="postBody">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="TitleInside"
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="DescriptionInside"
                />
                <p
                    className="UserIdInside"
                >
                    User ID: {post.user_id}
                </p>
                <br />
                <p
                    className="TimeAddInside"
                >
                    Time of adding: {post.createdAt.slice(0, -5)}
                </p>
                <button
                    onClick={editPost}
                    className="edit"
                >
                    Edit
                </button>
            </form>
        </div>
    )
}

export default PostBody;