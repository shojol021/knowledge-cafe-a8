import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 me-5">
                <a className="btn btn-ghost normal-case text-base lg:text-xl text-4xl">Knowledge Cafe</a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='p-2 lg:p-6' href='#id1'>Q1</a></li>
                    <li><a className='p-2 lg:p-6' href='#id2'>Q2</a></li>
                    <li><a className='p-2 lg:p-6' href='#id3'>Q3</a></li>
                    <li><a className='p-2 lg:p-6' href='#id4'>Q4</a></li>
                </ul>
            </div>

            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="user-icon.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Adnan Hossain Shojol
                                <span className="badge">New</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;