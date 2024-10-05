import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
const Menu = () => {
    setIsOpen(!isOpen);
};
    return (
        <div className="flex items-center justify-between h-14 w-screen">
            <div className="flex">
                <IoShieldCheckmark className="text-4xl" />
                <div className="text-white font-extrabold text-lg">SentinelGuardAI</div>
            </div>
            <div className="flex md:hidden">
                <button onClick={Menu} className="text-white text-3xl">
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>
            <div className="md:flex md:gap-4 hidden mr-6">
                <Link to="/" className="text-white">Home</Link>
                <div className="text-white hover:cursor-pointer">About Us </div>
                <Link to="dashboard" className="text-white">Dashboard</Link>
                <a href="#contact" className="text-white">Contact Us</a>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-black opacity-70 flex flex-col items-center p-4 md:hidden">
                    <Link to="/" className="text-white">Home</Link>
                    <div className="text-white">About Us</div>
                    <Link to="dashboard" className="text-white">Dashboard</Link>
                    <a href="#contact" className="text-white">Contact Us</a>
                    <div className="text-white">Sign Up/Log In</div>
                </div>
            )}
            <div className="text-white hidden md:inline-block bg-green-400 p-2 text-center mr-6 rounded-xl hover:cursor-pointer">Sign up/Log in</div>
        </div>
    )
}

export default Nav
