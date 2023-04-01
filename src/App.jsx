import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("")

  const setBookmark = (title) => {
    const newCount = count + 1;
    setCount(newCount);
    setTitle(title)
  }

  return (
    <div className=''>
      <Nav></Nav>
      <hr className='py-2 mx-6' />
      <div className='flex'>
        <Blogs setBookmark={setBookmark}></Blogs>
        <Sidebar count={count} title={title}></Sidebar>
      </div>
    </div>
  );
};

export default App;