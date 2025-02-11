import React, { useState } from 'react';
import { FaHome, FaUsers, FaRegNewspaper, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { LuFolderSearch2 } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1A1A1A] rounded-lg flex flex-col sm:gap-x-4  md:gap-x-4 gap-x-10   lg:flex-row justify-between items-center p-4">
            {/* Logo & Search */}
            <div className="flex flex-row lg:flex-row items-center w-full lg:w-auto gap-4">
                <a href='/' className="text-3xl font-semibold text-white">
                    Legit<span className="text-blue-600">book</span>
                </a>
                <div className="relative w-full sm:w-[550px] md:w-[400px] lg:w-[550px]">
                    <input
                        type="text"
                        placeholder="Search for people, places or companies..."
                        className="input input-bordered w-full sm:w-[550px] md:w-[400px] lg:w-[550px] pl-10 bg-stone-800 text-white text-sm sm:text-base md:text-lg"
                    />
                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 hidden md:block lg:hidden" />
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden flex  items-center">
                    <button onClick={toggleMobileMenu} className="text-white text-2xl">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

            </div>

        
            {/* Navigation Links */}
            <div className={`lg:flex items-center gap-8 text-gray-300 ${isMobileMenuOpen ? "flex flex-col w-full mt-4" : "hidden lg:flex"}`}>
                <NavLink to="/" className={({ isActive }) => `btn btn-ghost ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaHome size={22} /> Home </NavLink>
                <NavLink to="/news" className={({ isActive }) => `btn btn-ghost ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaRegNewspaper size={22} /> News </NavLink>
                <NavLink to="/job-search" className={({ isActive }) => `btn btn-ghost ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <LuFolderSearch2 size={22} /> Job Search </NavLink>
                <NavLink to="/education" className={({ isActive }) => `btn btn-ghost ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <MdCastForEducation size={22} /> Education </NavLink>
                <NavLink to="/creators" className={({ isActive }) => `btn btn-ghost ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaUsers size={22} /> Creators </NavLink>
            </div>

            {/* Right Section - Hidden on Small & Medium Screens */}
            <div className="hidden xl:flex items-center space-x-6">
                <div className="relative">
                    <FaBell className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                    <span className="badge badge-error absolute top-0 right-0">3</span>
                </div>
                <div className="relative">
                    <FaEnvelope className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                    <span className="badge badge-success absolute top-0 right-0"></span>
                </div>
                <div className="relative">
                    <img
                        src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png"
                        alt="Avatar"
                        className="rounded-full h-11 w-11 cursor-pointer border-2 border-gray-400"
                    />
                    <span className="badge badge-success absolute bottom-0 right-0"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
