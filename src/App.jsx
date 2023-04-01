import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  const [count, setCount] = useState(0)
  const [titles, setTitles] = useState([])
  const [readTime, setReadTime] = useState(0)

  const setBookmark = (title) => {
    const newCount = count + 1;
    setCount(newCount);
    setTitles([...titles, title]);
    console.log(titles);
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
        <Blogs setBookmark={setBookmark} addReadTime = {addReadTime}></Blogs>
        <Sidebar count={count} titles={titles} readTime = {readTime}></Sidebar>
      </div>
    </div>
  );
};

export default App;

 // const setBookmark = (title) => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  //   const titleElement = <p className='w-5/6 bg-white rounded-lg mx-auto my-3 px-3 py-2'>{title}</p>
  //   setTitle(titleElement);
  // }