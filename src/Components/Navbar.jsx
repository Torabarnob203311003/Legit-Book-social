import React, { useState } from 'react';
import { FaHome, FaUsers, FaRegNewspaper, FaEnvelope } from "react-icons/fa";
import { LuFolderSearch2 } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import Notifications from './Navbar-Sections/Notifications';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1A1A1A] rounded-lg flex justify-between items-center flex-wrap p-3 md:p-5">
            {/* Left Section - Logo & Search */}
            <div className="flex items-center w-full md:w-auto justify-between md:flex-1">
                <a href='#' className="text-2xl md:text-3xl font-semibold text-white">Legit<span className="text-blue-600">book</span></a>
                <div className="relative w-full pr-10 md:w-[750px] flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-2 rounded-lg bg-stone-800 border-none text-white outline-none w-full md:w-[550px] pl-10 text-xs sm:text-sm md:text-base"
                    />
                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 hidden md:block lg:hidden" />
                </div>
                <button onClick={toggleMobileMenu} className="text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Center Section - Horizontal Navigation */}
            <div className={`flex gap-4 sm:gap-6 lg:pl-6 md:pl-4 sm:mr-20 text-gray-300 justify-center md:flex-row flex-col md:justify-evenly w-full md:w-auto ${isMobileMenuOpen ? "flex" : "hidden"} md:flex lg:hidden xl:flex`}>
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaHome size={18} /> <span>Home</span> </NavLink>
                <NavLink to="/news" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaRegNewspaper size={18} /> <span>News</span> </NavLink>
                <NavLink to="/job-search" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <LuFolderSearch2 size={18} /> <span>Job Search</span> </NavLink>
                <NavLink to="/education" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <MdCastForEducation size={18} /> <span>Education</span> </NavLink>
                <NavLink to="/creators" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaUsers size={18} /> <span>Creators</span> </NavLink>
            </div>

            {/* Right Section - Icons */}
            <div className="hidden lg:flex items-center sm:ml-7 space-x-4 sm:space-x-12">
                {/* Integrated Notifications Component */}
                 <Notifications/>
                <FaEnvelope className="text-gray-400 hover:text-white cursor-pointer" size={20} />

                <img src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png" alt="Avatar" className="rounded-full h-8 w-8 sm:h-10 sm:w-10 cursor-pointer" />
            </div>
        </nav>
    );
}

export default Navbar;
