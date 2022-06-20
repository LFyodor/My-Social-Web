import React, { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import Navbar from "../components/UI/navbar/Navbar";
import Header from "../components/UI/header/Header";
import { useSelector } from 'react-redux';

function MainPage() {

  const posts = useSelector((state) => state.posts.posts)

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
    // const response = await PostService.getAll(limit, page);
    // setPosts([...posts, ...response.data])
    // const totalCount = response.headers['x-total-count']
    // setTotalPages(getPagesCount(totalCount, limit));
  })

  useEffect(() => {
    // fetchPosts(limit, page)
  })

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="All">
      <Header />
      <Navbar />
      <div className="MainPage">
        <PostForm />
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {postError &&
          <h1 style={{textAlign: 'center'}}>Sorry, Our Bartender Got Drunk ${postError}</h1>
        }
        {isPostsLoading
          ? <h1 style={{textAlign: 'center'}}>Clean Up After a Brawl</h1>
          :
          <PostList
            posts={sortedAndSearchedPosts}
            titleTavern='Tavern "Happy Raccoon"'
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
}

export default MainPage;