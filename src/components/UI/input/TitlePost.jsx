import React from 'react';
import classes from "./TitlePost.module.css";

const TitlePost = (props) => {
    return (
        <input className={classes.titlePost} {...props} />
    );
};

export default TitlePost;