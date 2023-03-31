import React from 'react';

const Items = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
            <div className="card-body">
                <img className="w-10 rounded-full" src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <h4 className='font-bold text-2xl'>Adnan Hossain</h4>
                <h5 className='text-gray-400 font-bold'>Mar 14 (4 Days ago)</h5>
                <h5>5 min read </h5>
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Items;