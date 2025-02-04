import React from 'react';
import { FaHome, FaUsers, FaRegNewspaper } from "react-icons/fa";
import { LuFolderSearch2 } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    return (
        <nav className="bg-[#1A1A1A] py-4 px-8 rounded-lg flex justify-between items-center">
            {/* Left Section - Logo & Search */}
            <div className="flex items-center gap-4">
                <h1 className="text-3xl font-semibold text-white">
                    Legit<span className="text-blue-600">book</span>
                </h1>
                <div className="relative"> {/* Added relative wrapper for search icon positioning */}
                    <input
                        type="text"
                        placeholder="Search for people, places or companies..."
                        className="px-3 py-2 rounded-lg bg-stone-800 border-none text-white outline-none w-[550px] pl-10" // Added pl-10 for padding to accommodate icon
                    />
                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" /> {/* Search icon */}
                </div>
            </div>

            {/* Center Section - Horizontal Navigation (No changes needed here) */}
            <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2 bg-white    pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:text-white transition">
                    <FaHome className='text-blue-700  ' size={22} />
                    <span className="text-sm  text-black">Home</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <FaRegNewspaper size={22} />
                    <span className="text-sm ">News</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <LuFolderSearch2 size={22} />
                    <span className="text-sm ">Job Search</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <MdCastForEducation size={22} />
                    <span className="text-sm ">Education</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
                    <FaUsers size={22} />
                    <span className="text-sm ">Creators</span>
                </div>
            </div>

            {/* Right side: Notification and Avatar (Placeholder)  */}
            <div className="flex items-center space-x-4">
                {/* ... (Notification and Avatar code remains the same) */}
                <button className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.657V5a2 2 0 10-4 0v.343C7.67 6.165 6 8.388 6 11v3.158c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
                </button>

                <button className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></div>
                </button>

                <div className="relative">
                    <button className="flex items-center">
                        <img src="your-avatar-url.jpg" alt="Avatar" className="rounded-full h-8 w-8 border-2 border-white" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <div className="border-t border-gray-200"></div>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;