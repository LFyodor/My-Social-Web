import React from 'react';
import classes from "./Search.module.css";

const Search = (props) => {
    return (
        <input className={classes.search} {...props} />
    );
};

export default Search;