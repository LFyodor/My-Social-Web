import React, { useEffect, useState } from 'react';
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from './context/index';
import { useSelector } from 'react-redux';
// import { getApiResource } from './utils/config';
// import axios from 'axios';

function App() {
  const store = useSelector(store => store);
  console.log("store: ", store);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  // getApiResource();

  // async function fetchPosts() {
  //   const response = await axios.get('https://test-api-post.herokuapp.com/')
  // }
  // fetchPosts();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <div>
        <AppRouter />
      </div>
    </AuthContext.Provider>
  )
}

export default App;