import React from 'react';
import Nav from './components/Nav/Nav';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <hr className='py-2 mx-6'/>
      <div className='flex'>
        <Blogs></Blogs>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default App;