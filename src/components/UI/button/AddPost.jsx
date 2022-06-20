import React from 'react';
import classes from "./AddPost.module.css";

const AddPost = ({children, ...props}) => {
    return (
        <button {...props} className={classes.addPost}>
            {children}
        </button>
    )
}

export default AddPost;