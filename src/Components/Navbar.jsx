import React, { useState } from 'react';
import { FaHome, FaUsers, FaRegNewspaper, FaBell } from "react-icons/fa";
import { LuFolderSearch2 } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa'; // Keep this for the type
import { FaEnvelope as FaEnvelopeIcon } from 'react-icons/fa6';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1A1A1A] py-4 px-8 rounded-lg flex justify-between items-center flex-wrap">
            {/* Left Section - Logo & Search */}
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <h1 className="text-3xl font-semibold text-white">
                    Legit<span className="text-blue-600">book</span>
                </h1>
                <div className="relative w-full sm:w-[550px]">
                    <input
                        type="text"
                        placeholder="Search for people, places or companies..."
                        className="px-3 py-2 rounded-lg bg-stone-800 border-none text-white outline-none w-full sm:w-[550px] pl-10"
                    />
                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                </div>
            </div>

            {/* Center Section - Horizontal Navigation */}
            <div className={`flex items-center gap-8 pr-[350px] text-gray-300 flex-wrap justify-center sm:justify-start w-full sm:w-auto ${isMobileMenuOpen ? "flex" : "hidden"} sm:flex`}>
                <Link to="/" className="flex items-center gap-2 bg-white pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:text-white transition">
                    <FaHome className='text-blue-700' size={22} />
                    <span className="text-sm text-black">Home</span>
                </Link>

                <Link to="/news" className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <FaRegNewspaper size={22} />
                    <span className="text-sm">News</span>
                </Link>

                <Link to="/job-search" className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <LuFolderSearch2 size={22} />
                    <span className="text-sm">Job Search</span>
                </Link>

                <Link to="/education" className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <MdCastForEducation size={22} />
                    <span className="text-sm">Education</span>
                </Link>

                <Link to="/creators" className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <FaUsers size={22} />
                    <span className="text-sm">Creators</span>
                </Link>
            </div>

            {/* Right Section - Notification and Avatar */}
            <div className="flex items-center space-x-6">
                <div className="relative"> {/* Notification Icon */}
                    <FaBell className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full text-white">3</span> {/* Notification Badge */}
                </div>
                <div className="relative"> {/* Message Icon */}
                    <FaEnvelope className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full bg-green-500"></span> {/* Green dot for new messages */}
                </div>
                <div className="relative"> {/* Avatar */}
                    <img
                        src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png" // Replace with your avatar URL
                        alt="Avatar"
                        className="rounded-full h-11 w-11 cursor-pointer"
                    />
                    <span className="absolute bottom-0 right-0 inline-block w-3 h-3 border-2 border-white rounded-full bg-green-500"></span> {/* Online Status */}
                </div>
            </div>


            {/* Mobile Hamburger Menu */}
            <div className="sm:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;