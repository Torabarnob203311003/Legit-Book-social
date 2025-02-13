import React, { useState } from "react";
import { FaHome, FaUsers, FaRegNewspaper, FaEnvelope } from "react-icons/fa";
import { LuFolderSearch2 } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import Notifications from "./Navbar-Sections/Notifications";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Profile menu state
    const navigate = useNavigate(); // For navigation

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMessageBox = () => {
        setIsMessageVisible(!isMessageVisible);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleSignOut = () => {
        navigate("/src/Components/From/SignInSignUp.jsx"); // Redirects to SignInSignUp page
    };

    return (
        <nav className="bg-[#1A1A1A] rounded-lg p-3 md:p-5 relative flex flex-wrap md:flex-nowrap justify-between items-center">
            {/* Left Section - Logo & Search */}
            <div className="flex items-center w-full md:w-auto justify-between md:flex-1 mb-2 md:mb-0">
                <a href="#" className="text-2xl md:text-3xl font-semibold text-white">
                    Legit<span className="text-blue-600">book</span>
                </a>
                <div className="relative w-full pr-10 md:w-[550px] flex items-center mt-2 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-2 rounded-lg bg-stone-800 border-none text-white outline-none w-full pl-10 text-xs sm:text-sm md:text-base"
                    />
                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                </div>
                <button onClick={toggleMobileMenu} className="text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Center Section - Horizontal Navigation */}
            <div className={`flex gap-4 sm:gap-6 md:gap-8 lg:pl-6 md:pl-4 text-gray-300 justify-center w-full md:w-auto ${isMobileMenuOpen ? "flex flex-col md:flex-row" : "hidden pr-3 md:flex"}`}>
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm md:text-base ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaHome size={18} /> <span>Home</span> </NavLink>
                <NavLink to="/news" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm md:text-base ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaRegNewspaper size={18} /> <span>News</span> </NavLink>
                <NavLink to="/job-search" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm md:text-base ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <LuFolderSearch2 size={18} /> <span>Job Search</span> </NavLink>
                <NavLink to="/education" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm md:text-base ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <MdCastForEducation size={18} /> <span>Education</span> </NavLink>
                <NavLink to="/creators" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg cursor-pointer transition text-xs sm:text-sm md:text-base ${isActive ? 'bg-white text-blue-600' : 'text-gray-400'}`}> <FaUsers size={18} /> <span>Creators</span> </NavLink>
            </div>

            {/* Right Section - Icons */}
            <div className="flex items-center ml-auto mt-2 md:mt-0 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12">
                <Notifications />
                <FaEnvelope className="text-gray-400 hover:text-white cursor-pointer" size={20} onClick={toggleMessageBox} />

                {/* Profile Picture with Clickable Dropdown */}
                <div className="relative">
                    <img
                        src="https://avatars.githubusercontent.com/u/118876454?s=400&u=2a067f3e74d4808365f886c1c44f77887e74cd70&v=4"
                        alt="Avatar"
                        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
                        onClick={toggleProfileMenu}
                    />

                    {/* Profile Dropdown */}
                    {isProfileMenuOpen && (
                        <div className="absolute top-12 right-0 bg-white p-4 rounded-lg shadow-lg w-48 transition-all duration-300 ease-in-out z-10">
                            <p className="text-gray-700 font-semibold mb-2">Account Settings</p>
                            <button
                                onClick={handleSignOut}
                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-lg"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Message Box */}
            {isMessageVisible && (
                <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-64 transition-all duration-300 ease-in-out z-10">
                    <p className="text-gray-700">You have no new messages.</p>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
