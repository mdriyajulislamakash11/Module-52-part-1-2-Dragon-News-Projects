import React from 'react';
import { NavLink } from 'react-router-dom';
import UsePNG from "../assets/user.png"

const Navber = () => {
    return (
        <div className='flex justify-between items-center mt-12'>
            {/* user name */}
            <div className='bg-base-300'>
                <h2></h2>
            </div>

            {/* item */}
            <div>
                <ul className='flex space-x-3'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>
                </ul>
            </div>

            {/* login or user Photo */}
            <div className='flex justify-center items-center gap-2'>
                <img src={UsePNG} alt="" />
                <button className='btn btn-neutral px-10'>Login</button>
            </div>

        </div>
    );
};

export default Navber;