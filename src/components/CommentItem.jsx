import React from 'react';

const CommentItem = ({comment}) => {

    return (
        <div className="comment-content">
            <p>User ID: {comment.user_id}</p>
            <br />
            <p>Time of adding: {comment.createdAt.slice(0, -5)}</p>
            <br />
            <p className="commentTitle">{comment.title}</p>
        </div>
    )
}

export default CommentItem;