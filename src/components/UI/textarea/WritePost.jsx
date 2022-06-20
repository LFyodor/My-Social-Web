import React from 'react';
import classes from "./WritePost.module.css";

const WritePost = (props) => {
    return (
        <textarea className={classes.writePost} {...props} />
    );
};

export default WritePost;