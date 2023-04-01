import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  const [count, setCount] = useState(0)

  const setBookmark = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("clicked")
  }

  return (
    <div className=''>
      <Nav></Nav>
      <hr className='py-2 mx-6' />
      <div className='flex'>
        <Blogs setBookmark={setBookmark}></Blogs>
        <Sidebar count={count}></Sidebar>
      </div>
    </div>
  );
};

export default App;