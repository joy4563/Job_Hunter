import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className='md:flex justify-between items-center md:mt-10 md:ml-40 md:mr-40'>
                <div onClick={()=> setOpen(!open)} className="md:hidden absolute right-3 pt-2">
                    <span>
                        {
                            open === true ? 
                                <XCircleIcon className="h-6 w-6 text-black" /> :
                                <Bars3Icon className="h-6 w-6 text-black" /> 
                                
                        }
                    </span>
                </div>
                <div className='projectName'>
                    <p>Career Council</p>
                </div>
                <div>
                    <ul className={`md:bg-white bg-amber-300 md:flex gap-10 absolute right-0 p-4 md:static duration-500 ${open ? 'top-8': '-top-48' }`}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistic" className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/appliedJob" className={({isActive})=>(isActive?'text-blue-600':'')}>Applied Job</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className={({isActive})=>(isActive?'text-blue-600':'')}>Blog</NavLink>
                        </li>
                        <li className='md:hidden'>
                            {/* <div> */}
                                <button className='navBtn p-3 text-white'>Star Applying</button>
                            {/* </div> */}
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='navBtn p-3 text-white specialCase'>Star Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;