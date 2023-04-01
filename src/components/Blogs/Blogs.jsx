import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-2/3 mb-6'>
            {
                blogs.map((blog, index) => (
                    <>
                        <Blog blog={blog} key = {blog.id}></Blog>
                        {index !== blogs.length - 1 && <hr className='m-6'></hr>}
                    </>
                ))
            }
        </div>
    );
};

export default Blogs;