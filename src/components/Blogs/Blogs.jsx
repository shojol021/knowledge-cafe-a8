import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ setBookmark, addReadTime, handleToast }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-full lg:w-2/3 mx-auto mb-6'>
            {
                blogs.map((blog, index) => (
                    <div key={blog.id}>
                        <Blog blog={blog} setBookmark={setBookmark} addReadTime={addReadTime} handleToast={handleToast}></Blog>
                        {index !== blogs.length - 1 && <hr className='m-6'></hr>}
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;