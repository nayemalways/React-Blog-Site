import React, { useEffect, useState } from 'react';
import { getPostCategories } from '../APIrequest/ApiRequest.js';
import { NavLink } from 'react-router-dom';

 

const Layout = (props) => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {

        (async() => {
            const res = await getPostCategories();
            setCategory(res)
           
        })()

    }, [])




    return (
        <div>
            <div className="navbar shadow bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>


                         {/* Mobile navbar  */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                {/* Maping over 'li' item and create dynamic 'li' */}
                                {categories.map((item, index) => {
                            return <li key={item.id}><NavLink to={`/byCategory/${item.id}`} className='text-purple-600 '>{item.name}</NavLink></li>;
                        })}


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>


                {/* Desktop navbar  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         <li><NavLink to={'/'}>Home</NavLink></li>

                        {/* Maping over 'li' item and create dynamic 'li' */}
                        {categories.map((item, index) => {
                            return <li key={item.id}><NavLink to={`/byCategory/${item.id}`} className='text-purple-600'>{item.name}</NavLink></li>;
                        })}


                    </ul>
                </div>
            </div>



            {props.children}
        </div>
    );
};

export default Layout;




/*
  FOOTER:
  <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
*/