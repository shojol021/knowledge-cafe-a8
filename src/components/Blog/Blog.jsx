import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { name, title, profile_pic, cover_pic, read, release, days_ago, tag1, tag2 } = props.blog;
    const { setBookmark } = props;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mx-6">
            <figure><img src={cover_pic} alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-between items-center py-3'>
                    <div className='flex'>
                        <img className="w-10 rounded-full" src={profile_pic} alt="" />
                        <div className='px-5'>
                            <h4 className='font-bold text-2xl'>{name}</h4>
                            <h5 className='text-gray-400 font-bold'>{days_ago}</h5>
                        </div>
                    </div>
                    <h5 className=''>{read} min read <span onClick={() => setBookmark(title)}><FontAwesomeIcon icon={faBookmark} size="lg" /></span></h5>
                </div>
                <h2 className="card-title text-4xl">{title}</h2>
                <p className='text-gray-400'>{tag1} {tag2}</p>
                <p className='underline text-lg'>Mark as read</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Blog;