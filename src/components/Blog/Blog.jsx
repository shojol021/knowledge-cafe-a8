import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog)
    return (
        <div className="card card-compact bg-base-100 shadow-xl mx-6">
            <figure><img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between items-center py-3'>
                    <div className='flex'>
                        <img className="w-10 rounded-full" src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div className='px-5'>
                            <h4 className='font-bold text-2xl'>Adnan Hossain</h4>
                            <h5 className='text-gray-400 font-bold'>Mar 14 (4 Days ago)</h5>
                        </div>
                    </div>
                    <h5 className=''>5 min read <FontAwesomeIcon icon={faBookmark} /></h5>
                </div>
                <h2 className="card-title text-4xl">How to get your first job as a self-taught programmer!</h2>
                <p className='text-gray-400'>#beginners #programming</p>
                <p className='underline '>Mark as read</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Blog;