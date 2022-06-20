import React, { useState } from 'react';
import TitlePost from "./UI/input/TitlePost";
import WritePost from "./UI/textarea/WritePost";
import AddPost from "./UI/button/AddPost";
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postSlice';

const PostForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();

    const addNewPost = (e) => {
        e.preventDefault()
        if (title.trim().length && description.trim().length) {
            const post = {
                id: Date.now(),
                title: title,
                description: description,
                userId: 12345,
                timeAdd: Date().toLocaleString().slice(0, -37),
                comment: [1, 2, 3]
            }
            dispatch(addPost(post))
            setTitle('')
            setDescription('')
        }
    }

    return (
        <div>
            <form className="FormAdd">
                <TitlePost
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter a title for the post"
                />
                <WritePost
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    placeholder="Write a post"
                />
                <AddPost onClick={addNewPost}>Add post</AddPost>
            </form>
        </div>
    );
};

export default PostForm;