import React from 'react';
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { editTitle } from '../store/postSlice';

const SinglePage = () => {
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch();

    const postLink = window.location.href
    const postLinkArray = postLink.split('/')
    const postThis = posts.filter((post) => post.id === Number(postLinkArray[4]))

    const redactTitle = (e) => {
        const redactPost = {
            id: postThis[0].id,
            title: e.target.textContent,
            description: postThis[0].description,
            userId: postThis[0].userId,
            timeAdd: postThis[0].timeAdd,
            comment: postThis[0].comment
        }
        dispatch(editTitle(redactPost))
    }

    return (
        <div className="All">
            <Header />
            <Navbar />
            <div className="SinglePage">
                <h1
                    contentEditable="true"
                    className="TitleInside"
                    onBlur={(e) => redactTitle(e)}
                >
                    {postThis[0].title}
                </h1>
                <p
                    className="DescriptionInside"
                >
                    {postThis[0].description}
                </p>
                <p
                    className="UserIdInside"
                >
                    User ID: {postThis[0].userId}
                </p>
                <p
                    className="TimeAddInside"
                >
                    Time of adding: {postThis[0].timeAdd}
                </p>
                <div>
                    <h1>All comments</h1>
                </div>
                <div className="buttonInPost">
                    <button
                        onClick={() => console.log(postThis[0].title)}
                        className="showComments">
                        Show comments
                    </button>
                    <textarea className="textComment">

                    </textarea>
                    <button className="addComment">
                        Add comment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;