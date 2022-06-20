import React, { useState, useEffect } from 'react';
import PostList from "../components/PostList";
// import LogOut from "../components/UI/button/LogOut";
// import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import { usePosts } from "../hooks/usePosts";
// import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
// import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";

const ProfilePage = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const userName = useState()
    const userSurname = useState()
    const userEmail = useState()
  
    const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
      // const response = await PostService.getAll(limit, page);
      // setPosts([...posts, ...response.data])
      // const totalCount = response.headers['x-total-count']
      // setTotalPages(getPagesCount(totalCount, limit));
    })
  
    useEffect(() => {
      fetchPosts(limit, page)
    }, [page])
  
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }
  
    const changePage = (page) => {
      setPage(page)
    }  

    return (
        <div className="All">
          <Header />
          <Navbar />
          <div className="information">
            <p>{userName}Fyodor {userSurname}Leyburg</p>
            <br />
            <p>{userEmail}itismagicwow@gmail.com</p>
          </div>
          <div className="ProfilePage">
            <PostFilter
              filter={filter}
              setFilter={setFilter}
            />
            {postError &&
              <h1>Sorry, Our Bartender Got Drunk ${postError}</h1>
            }
            {isPostsLoading
              ? <h1>Clean Up After a Brawl</h1>
              :
              <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title='Tavern "Happy Raccoon"'
              />
            }
            <Pagination
              page={page}
              changePage={changePage}
              totalPages={totalPages}
            />
          </div>
        </div>
      );
};

export default ProfilePage;