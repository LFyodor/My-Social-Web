import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentServer } from '../API/posts/addComment';
import { singlePostServer } from '../API/posts/singlePost';

const CommentForm = () => {
    const [commentBody, setCommentBody] = useState()
    const dispatch = useDispatch()
    const { id } = useParams()

    const addNewComment = (e) => {
        e.preventDefault()
        if (commentBody.trim().length) {
            const comment = {
                title: commentBody,
                post_id: id
            }
            dispatch(addCommentServer(comment))
            dispatch(singlePostServer(id))
            setCommentBody('')
        }
    }

    return (
        <form className="commentForm">
            <textarea
                value={commentBody}
                className="textComment"
                onChange={e => setCommentBody(e.target.value)}
                type="text"
                placeholder="Write a comment"
            />
            <button
                onClick={addNewComment}
                className="addComment"
            >
                Add comment
            </button>
        </form>
    )
}

export default CommentForm;