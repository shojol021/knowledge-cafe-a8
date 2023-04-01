import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [count, setCount] = useState(0)
  const [titles, setTitles] = useState([])
  const [readTime, setReadTime] = useState(0)

  const setBookmark = (title) => {
    const newCount = count + 1;
    setCount(newCount);
    setTitles([...titles, title]);
  }

  const addReadTime = (read) => {
    const newReadTime = readTime + read;
    setReadTime(newReadTime);
  }

  return (
    <div className=''>
      <Nav></Nav>
      <hr className='py-2 mx-6' />
      <div className='flex'>
        <Blogs setBookmark={setBookmark} addReadTime={addReadTime}></Blogs>
        <Sidebar count={count} titles={titles} readTime={readTime}></Sidebar>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;