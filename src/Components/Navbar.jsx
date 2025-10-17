import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png"
const Navbar = () => {
    const links=<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/career">Career</NavLink>
    </>
    return (
        <div className='flex justify-between items-center mt-5 '>
           <div className=''></div>
           <div className='nav flex gap-5 text-accent'>
            {links}
           </div>
           <div className='login-btn flex items-center gap-5'>
            <img src={userImg} alt="" />
            <button className='btn btn-primary'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;