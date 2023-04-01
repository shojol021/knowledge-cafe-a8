import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 me-5">
                <a className="btn btn-ghost normal-case text-xl text-4xl">Knowledge Cafe</a>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#id1'>Question 1</a></li>
                    <li><a href='#id2'>Question 2</a></li>
                    <li><a href='#id3'>Question 3</a></li>
                    <li><a href='#id4'>Question 4</a></li>
                </ul>
            </div>

            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="../../../public/user-icon.jpg" />
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